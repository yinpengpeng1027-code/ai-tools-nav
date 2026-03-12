const fs = require('fs');
const https = require('https');
const http = require('http');

// 读取工具数据
const toolsDataPath = './src/data/tools-data.ts';
const content = fs.readFileSync(toolsDataPath, 'utf-8');

// 简单的解析 - 提取所有 url 字段
const urlRegex = /url:\s*"([^"]+)"/g;
const urls = [];
let match;

while ((match = urlRegex.exec(content)) !== null) {
  urls.push(match[1]);
}

console.log(`Found ${urls.length} unique URLs to verify\n`);

// 验证链接
async function checkUrl(url) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https://') ? https : http;
    
    const req = protocol.get(url, { timeout: 5000 }, (res) => {
      resolve({
        url,
        status: res.statusCode,
        ok: res.statusCode === 200 || res.statusCode === 301 || res.statusCode === 302,
        redirect: res.statusCode === 301 || res.statusCode === 302,
        location: res.headers.location
      });
    });
    
    req.on('error', (err) => {
      resolve({
        url,
        status: 'ERROR',
        ok: false,
        error: err.message
      });
    });
    
    req.on('timeout', () => {
      req.destroy();
      resolve({
        url,
        status: 'TIMEOUT',
        ok: false,
        error: 'Request timeout'
      });
    });
  });
}

// 批量验证（限制并发）
async function verifyLinks(urls, concurrency = 10) {
  const results = [];
  const total = urls.length;
  let completed = 0;
  
  for (let i = 0; i < urls.length; i += concurrency) {
    const batch = urls.slice(i, i + concurrency);
    const batchResults = await Promise.all(batch.map(checkUrl));
    results.push(...batchResults);
    
    completed += batch.length;
    const percent = ((completed / total) * 100).toFixed(1);
    console.log(`Progress: ${completed}/${total} (${percent}%)`);
  }
  
  return results;
}

// 主函数
async function main() {
  console.log('Starting link verification...\n');
  
  const results = await verifyLinks(urls, 10);
  
  // 统计结果
  const ok = results.filter(r => r.ok).length;
  const failed = results.filter(r => !r.ok).length;
  
  console.log('\n========== VERIFICATION SUMMARY ==========');
  console.log(`Total: ${results.length}`);
  console.log(`OK: ${ok}`);
  console.log(`Failed: ${failed}`);
  
  // 输出失败的链接
  const failedLinks = results.filter(r => !r.ok);
  if (failedLinks.length > 0) {
    console.log('\n========== FAILED LINKS ==========');
    failedLinks.forEach(r => {
      console.log(`❌ ${r.url}`);
      console.log(`   Status: ${r.status}`);
      console.log(`   Error: ${r.error || 'N/A'}\n`);
    });
  }
  
  // 保存结果
  fs.writeFileSync('./link-verification-results.json', JSON.stringify(results, null, 2));
  console.log('\nResults saved to link-verification-results.json');
}

main().catch(console.error);
