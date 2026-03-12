const results = require('./link-verification-results.json');

// 更智能的分类
const categories = {
  'OK (200)': [],
  'OK (Redirect 3xx)': [],
  'Blocked (403 - Anti-bot, link valid)': [],
  'Not Found (404 - Need fix)': [],
  'Unavailable (503 - Temporary)': [],
  'Network Error (Timeout/Connection)': [],
  'Other Error': []
};

results.forEach(r => {
  if (r.status === 200) {
    categories['OK (200)'].push(r);
  } else if (r.status >= 300 && r.status < 400) {
    categories['OK (Redirect 3xx)'].push(r);
  } else if (r.status === 403) {
    categories['Blocked (403 - Anti-bot, link valid)'].push(r);
  } else if (r.status === 404) {
    categories['Not Found (404 - Need fix)'].push(r);
  } else if (r.status === 503) {
    categories['Unavailable (503 - Temporary)'].push(r);
  } else if (r.status === 'TIMEOUT' || r.status === 'ERROR') {
    categories['Network Error (Timeout/Connection)'].push(r);
  } else {
    categories['Other Error'].push(r);
  }
});

console.log('========== LINK VERIFICATION ANALYSIS ==========\n');
Object.entries(categories).forEach(([cat, links]) => {
  console.log(`${cat}: ${links.length}`);
});

console.log('\n========== NEEDS ATTENTION ==========\n');

console.log('404 Not Found (must fix):');
categories['Not Found (404 - Need fix)'].forEach(r => console.log(`  - ${r.url}`));

console.log('\n503 Unavailable (temporary, monitor):');
categories['Unavailable (503 - Temporary)'].forEach(r => console.log(`  - ${r.url}`));

console.log('\nCertificate/Connection Errors:');
categories['Network Error (Timeout/Connection)'].filter(r => r.status === 'ERROR').forEach(r => {
  console.log(`  - ${r.url} (${r.error})`);
});

console.log('\n403 Blocked (links valid, but anti-bot):');
categories['Blocked (403 - Anti-bot, link valid)'].forEach(r => console.log(`  - ${r.url}`));

// 计算有效链接比例
const validCount = categories['OK (200)'].length + 
                   categories['OK (Redirect 3xx)'].length + 
                   categories['Blocked (403 - Anti-bot, link valid)'].length;
const total = results.length;
const validPercent = ((validCount / total) * 100).toFixed(1);

console.log(`\n========== SUMMARY ==========`);
console.log(`Total links: ${total}`);
console.log(`Valid links: ${validCount} (${validPercent}%)`);
console.log(`Need fixing: ${categories['Not Found (404 - Need fix)'].length}`);
console.log(`Temporary issues: ${categories['Unavailable (503 - Temporary)'].length + categories['Network Error (Timeout/Connection)'].length}`);
