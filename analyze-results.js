const results = require('./link-verification-results.json');

// 分类统计
const byStatus = {};
results.forEach(r => {
  let status;
  if (r.status === 'TIMEOUT') status = 'TIMEOUT';
  else if (r.status === 'ERROR') status = 'ERROR';
  else status = Math.floor(r.status / 100) * 100;
  
  byStatus[status] = (byStatus[status] || 0) + 1;
});

console.log('Status Distribution:');
Object.entries(byStatus).forEach(([status, count]) => {
  console.log(`  ${status}: ${count}`);
});

// 真正有问题的链接（404、证书错误、503 等）
const problematic = results.filter(r => {
  if (r.status === 'TIMEOUT' || r.status === 'ERROR') return true;
  if (r.status === 404) return true;
  if (r.status === 503) return true;
  return false;
});

console.log(`\nProblematic links: ${problematic.length}`);
console.log('\n=== TIMEOUT or ERROR or 404 or 503 ===');
problematic.forEach(r => {
  console.log(`${r.url} - ${r.status} - ${r.error || ''}`);
});

// 重定向的链接（这些通常是有效的）
const redirects = results.filter(r => r.redirect);
console.log(`\n\nRedirects (usually OK): ${redirects.length}`);

// 200 OK 的链接
const ok = results.filter(r => r.status === 200 && !r.redirect);
console.log(`\nDirect 200 OK: ${ok.length}`);
