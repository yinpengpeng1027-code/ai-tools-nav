/**
 * CDN 缓存清理脚本
 * 在构建后自动执行，确保 CDN 同步最新资源
 * 功能：
 * 1. 为 HTML 文件添加 Cache-Control meta 标签
 * 2. 为静态资源链接添加版本查询参数
 * 3. 生成刷新清单
 */

const fs = require('fs');
const path = require('path');

// 输出目录
const OUT_DIR = path.join(__dirname, '..', 'out');

// 版本号（使用时间戳，确保每次构建都不同）
const BUILD_VERSION = process.env.NEXT_PUBLIC_BUILD_VERSION || Date.now().toString();

// 需要清理缓存的文件模式
const CACHE_PATTERNS = [
  /\.html$/,      // HTML 文件
  /\.json$/,      // JSON 文件
];

console.log('🔄 开始清理 CDN 缓存标记...\n');
console.log(`📌 构建版本：${BUILD_VERSION}\n`);

// 递归遍历输出目录
function walkDir(dir, callback) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath, callback);
    } else {
      callback(filePath, stat);
    }
  }
}

// 为 HTML 文件添加缓存控制 meta 标签
function addCacheControlMeta(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 检查是否已有 Cache-Control meta 标签
  if (content.includes('http-equiv="Cache-Control"')) {
    return false; // 已存在，无需添加
  }
  
  // 在 </head> 前添加 meta 标签
  const metaTags = `
    <!-- CDN 缓存控制 - ${BUILD_VERSION} -->
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">
    <meta name="build-version" content="${BUILD_VERSION}">
  `;
  
  content = content.replace('</head>', metaTags + '</head>');
  fs.writeFileSync(filePath, content, 'utf8');
  return true;
}

// 为静态资源链接添加版本参数
function addVersionToStaticResources(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // 替换 CSS 文件引用：添加 ?v=版本号（支持带 basePath 和不带 basePath 的路径）
  content = content.replace(
    /(href="\/(?:ai-tools-nav\/)?_next\/static\/[^"]+\.css)(?!\?)/g,
    `$1?v=${BUILD_VERSION}`
  );
  
  // 替换 JS 文件引用：添加 ?v=版本号
  content = content.replace(
    /(src="\/(?:ai-tools-nav\/)?_next\/static\/[^"]+\.js)(?!\?)/g,
    `$1?v=${BUILD_VERSION}`
  );
  
  // 替换字体文件引用
  content = content.replace(
    /(href="\/(?:ai-tools-nav\/)?_next\/static\/media\/[^"]+)(?!\?)/g,
    `$1?v=${BUILD_VERSION}`
  );
  
  // 替换 favicon
  content = content.replace(
    /(href="\/(?:ai-tools-nav\/)?favicon\.ico[^"]*)(?!\?)/g,
    `$1?v=${BUILD_VERSION}`
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  return true;
}

let htmlCount = 0;
let resourceCount = 0;

walkDir(OUT_DIR, (filePath, stat) => {
  const relativePath = path.relative(OUT_DIR, filePath);
  
  // 处理 HTML 文件
  if (/\.html$/.test(filePath)) {
    htmlCount++;
    console.log(`  📄 ${relativePath}`);
    addCacheControlMeta(filePath);
    addVersionToStaticResources(filePath);
  }
});

console.log(`\n✅ 已处理 ${htmlCount} 个 HTML 文件`);
console.log(`   - 添加 Cache-Control meta 标签`);
console.log(`   - 添加版本查询参数 ?v=${BUILD_VERSION}`);

// 生成刷新清单文件
const manifest = {
  timestamp: new Date().toISOString(),
  version: require('../package.json').version,
  buildVersion: BUILD_VERSION,
  files: []
};

walkDir(OUT_DIR, (filePath) => {
  const relativePath = path.relative(OUT_DIR, filePath);
  if (CACHE_PATTERNS.some(pattern => pattern.test(filePath))) {
    manifest.files.push('/' + relativePath.replace(/\\/g, '/'));
  }
});

const manifestPath = path.join(OUT_DIR, 'cdn-refresh-manifest.json');
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

console.log(`\n📋 刷新清单已生成：cdn-refresh-manifest.json`);
console.log('\n💡 GitHub Pages CDN 提示：');
console.log('   1. CDN 缓存通常需要 5-10 分钟自动刷新');
console.log('   2. 紧急刷新可使用：https://purge.jsdelivr.net/gh/yinpengpeng1027-code/ai-tools-nav@main/');
console.log('   3. 或在浏览器中强制刷新：Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)');
console.log('\n📦 构建完成！静态资源已输出到 out/ 目录\n');
