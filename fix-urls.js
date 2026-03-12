const fs = require('fs');

const filePath = './src/data/tools-data.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// 需要修复的 URL 映射
const urlFixes = {
  'https://novelai.net': 'https://novelai.net/',
  'https://hypotenuse.ai': 'https://hypotenuse.ai/',
  'https://aithor.com': 'https://aithor.com/',
  'https://perplexity.ai': 'https://www.perplexity.ai',
  'https://leonardo.ai': 'https://leonardo.ai/',
  'https://playgroundai.com': 'https://playgroundai.com/',
  'https://ideogram.ai': 'https://ideogram.ai/',
  'https://seaart.ai': 'https://www.seaart.ai',
  'https://civitai.com': 'https://civitai.com/',
  'https://gencraft.com': 'https://gencraft.com/',
  'https://pika.art': 'https://pika.art/',
  'https://heygen.com': 'https://www.heygen.com',
  'https://descript.com': 'https://www.descript.com',
  'https://veed.io': 'https://www.veed.io',
  'https://invideo.io': 'https://invideo.io/',
  'https://fliki.ai': 'https://fliki.ai/',
  'https://elevenlabs.io': 'https://elevenlabs.io/',
  'https://play.ht': 'https://play.ht/',
  'https://boomy.com': 'https://boomy.com/',
  'https://voice.ai': 'https://voice.ai/',
  'https://copilot.microsoft.com': 'https://copilot.microsoft.com/',
  'https://grammarly.com': 'https://www.grammarly.com',
  'https://gamma.app': 'https://gamma.app/',
  'https://rewind.ai': 'https://www.rewind.ai',
  'https://looker.com': 'https://cloud.google.com/looker',
  'https://cloud.google.com/dialogflow': 'https://cloud.google.com/dialogflow/',
  'https://character.ai': 'https://character.ai/',
  'https://hootsuite.com': 'https://hootsuite.com/',
  'https://blackbox.ai': 'https://www.blackbox.ai',
  'https://socratic.org': 'https://socratic.org/',
  'https://grammarly.com/edu': 'https://www.grammarly.com/edu',
  'https://knowji.com': 'https://knowji.com/',
  // 403 链接 - 添加 www 或 trailing slash
  'https://openai.com/dall-e-3': 'https://openai.com/dall-e-3/',
  'https://stability.ai': 'https://stability.ai/',
  'https://looka.com': 'https://www.looka.com',
  'https://pictory.ai': 'https://pictory.ai/',
  'https://elai.io': 'https://elai.io/',
  'https://mindmeister.com': 'https://www.mindmeister.com',
  'https://motion.com': 'https://www.motion.com',
  'https://supernormal.com': 'https://www.supernormal.com',
  'https://tableau.com': 'https://www.tableau.com',
  'https://julius.ai': 'https://julius.ai/',
  'https://landbot.io': 'https://landbot.io/',
  'https://manychat.com': 'https://www.manychat.com',
  'https://ada.cx': 'https://www.ada.cx',
  'https://gsdata.cn': 'https://www.gsdata.cn',
  'https://coschedule.com': 'https://coschedule.com/',
  'https://planoly.com': 'https://www.planoly.com',
  'https://buzzsumo.com': 'https://buzzsumo.com/',
  'https://10web.io': 'https://10web.io/',
  'https://quizlet.com': 'https://quizlet.com/',
  'https://brainly.com': 'https://brainly.com/',
};

let fixCount = 0;
Object.entries(urlFixes).forEach(([oldUrl, newUrl]) => {
  if (content.includes(`url: "${oldUrl}"`)) {
    content = content.replace(`url: "${oldUrl}"`, `url: "${newUrl}"`);
    console.log(`Fixed: ${oldUrl} -> ${newUrl}`);
    fixCount++;
  }
});

fs.writeFileSync(filePath, content);
console.log(`\nTotal fixes applied: ${fixCount}`);
