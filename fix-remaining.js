const fs = require('fs');

const filePath = './src/data/tools-data.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// 修复剩余问题 URL
const urlFixes = {
  // 403 链接 - 尝试去掉 trailing slash 或使用基础 URL
  'https://openai.com/dall-e-3/': 'https://openai.com/dall-e-3',
  'https://pictory.ai/': 'https://pictory.ai',
  'https://elai.io/': 'https://elai.io',
  'https://julius.ai/': 'https://julius.ai',
  'https://landbot.io/': 'https://landbot.io',
  'https://coschedule.com/': 'https://coschedule.com',
  'https://buzzsumo.com/': 'https://buzzsumo.com',
  'https://quizlet.com/': 'https://quizlet.com',
  'https://brainly.com/': 'https://brainly.com',
  // 使用 www 版本
  'https://lucidpic.com': 'https://www.lucidpic.com',
  'https://pictory.ai': 'https://www.pictory.ai',
  // 修复重复的 notion.so
  'https://notion.so': 'https://www.notion.so',
  // 修复 copilot
  'https://copilot.microsoft.com/': 'https://copilot.microsoft.com',
  // 修复 rewind.ai
  'https://www.rewind.ai': 'https://rewind.ai',
  // 修复 educationcopilot
  'https://educationcopilot.com/': 'https://educationcopilot.com',
  // 修复 century.tech
  'https://century.tech/': 'https://century.tech',
  // 修复 mindmeister
  'https://www.mindmeister.com': 'https://mindmeister.com',
  // 修复 motion
  'https://www.motion.com': 'https://motion.com',
  // 修复 supernormal
  'https://www.supernormal.com': 'https://supernormal.com',
  // 修复 tableau
  'https://www.tableau.com': 'https://tableau.com',
  // 修复 manychat
  'https://www.manychat.com': 'https://manychat.com',
  'https://www.ada.cx': 'https://ada.cx',
  // 修复 planoly
  'https://www.planoly.com': 'https://planoly.com',
  // 修复 10web
  'https://10web.io/': 'https://10web.io',
  // 修复 looker
  'https://cloud.google.com/looker': 'https://looker.google.com',
  // 修复 dialogflow
  'https://cloud.google.com/dialogflow/': 'https://cloud.google.com/dialogflow',
};

let fixCount = 0;
Object.entries(urlFixes).forEach(([oldUrl, newUrl]) => {
  const searchStr = `url: "${oldUrl}"`;
  if (content.includes(searchStr)) {
    content = content.replace(searchStr, `url: "${newUrl}"`);
    console.log(`Fixed: ${oldUrl} -> ${newUrl}`);
    fixCount++;
  }
});

fs.writeFileSync(filePath, content);
console.log(`\nTotal fixes applied: ${fixCount}`);
