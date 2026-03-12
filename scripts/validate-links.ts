// 工具链接验证脚本
// 用于检查所有工具的 url 字段是否与工具名称匹配

import * as fs from 'fs';
import * as path from 'path';

// 已知正确的工具官网映射
const EXPECTED_DOMAINS: Record<string, string> = {
  // 对话助手
  "ChatGPT": "chatgpt.com",
  "Claude": "claude.ai",
  "文心一言": "yiyan.baidu.com",
  "通义千问": "tongyi.aliyun.com",
  "Kimi": "kimi.moonshot.cn",
  "智谱清言": "chatglm.cn",
  "讯飞星火": "xinghuo.xfyun.cn",
  "Perplexity": "perplexity.ai",
  
  // 营销文案
  "Jasper": "jasper.ai",
  "Copy.ai": "copy.ai",
  "Writesonic": "writesonic.com",
  "Rytr": "rytr.me",
  "Anyword": "anyword.com",
  
  // 创意写作
  "Sudowrite": "sudowrite.com",
  "NovelAI": "novelai.net",
  
  // 写作辅助
  "Grammarly": "grammarly.com",
  "Quillbot": "quillbot.com",
  "DeepL Write": "deepl.com",
  "Notion AI": "notion.so",
  
  // AI 绘画
  "Midjourney": "midjourney.com",
  "DALL-E 3": "openai.com",
  "Stable Diffusion": "stability.ai",
  "Leonardo AI": "leonardo.ai",
  "Playground AI": "playgroundai.com",
  "SeaArt AI": "seaart.ai",
  "Civitai": "civitai.com",
  "Ideogram": "ideogram.ai",
  
  // 图像编辑
  "美图 AI": "xiuxiu.meitu.com",
  "Magic Studio": "magicstudio.com",
  "Remove.bg": "remove.bg",
  "Adobe Firefly": "firefly.adobe.com",
  "稿定设计": "gaoding.com",
  "Canva AI": "canva.com",
  
  // Logo 设计
  "Looka": "looka.com",
  "Brandmark": "brandmark.io",
  
  // 视频制作
  "Runway": "runwayml.com",
  "Sora": "openai.com",
  "Pika Labs": "pika.art",
  "剪映": "capcut.cn",
  "Descript": "descript.com",
  "Veed.io": "veed.io",
  "InVideo": "invideo.io",
  "HeyGen": "heygen.com",
  "Synthesia": "synthesia.io",
  "D-ID": "d-id.com",
  
  // 音频处理
  "ElevenLabs": "elevenlabs.io",
  "Murf AI": "murf.ai",
  "Play.ht": "play.ht",
  "讯飞配音": "peiyin.xunfei.cn",
  "Suno AI": "suno.ai",
  "Udio": "udio.com",
  "AIVA": "aiva.ai",
  "Boomy": "boomy.com",
  "Soundraw": "soundraw.io",
  "LALAL.AI": "lalal.ai",
  "Adobe Podcast": "podcast.adobe.com",
  
  // 开发工具
  "Cursor": "cursor.sh",
  "GitHub Copilot": "github.com",
  "Codeium": "codeium.com",
  "Tabnine": "tabnine.com",
  "Replit AI": "replit.com",
  "CodeSandbox AI": "codesandbox.io",
  "v0": "v0.dev",
  "Bolt.new": "bolt.new",
  "Framer AI": "framer.com",
  "Webflow AI": "webflow.com",
  
  // 办公效率
  "Microsoft Copilot": "copilot.microsoft.com",
  "Otter.ai": "otter.ai",
  "Fireflies.ai": "fireflies.ai",
  "Beautiful.ai": "beautiful.ai",
  "Gamma": "gamma.app",
  "Tome": "tome.app",
  "Zapier": "zapier.com",
  
  // 学习教育
  "Duolingo Max": "duolingo.com",
  "ELSA Speak": "elsaspeak.com",
  "Speak": "speak.com",
  "Khanmigo": "khanacademy.org",
  "Coursera Coach": "coursera.org",
  "Socratic": "socratic.org",
  "Quizlet AI": "quizlet.com",
  "Photomath": "photomath.com",
  "Wolfram Alpha": "wolframalpha.com",
  "Brainly": "brainly.com",
  
  // 社交媒体
  "Hootsuite": "hootsuite.com",
  "Buffer": "buffer.com",
  "Sprout Social": "sproutsocial.com",
  "Later": "later.com",
  "CoSchedule": "coschedule.com",
  "Tailwind": "tailwindapp.com",
  
  // 客服机器人
  "Intercom": "intercom.com",
  "Drift": "drift.com",
  "Tidio": "tidio.com",
  "Ada": "ada.cx",
  "Freshchat": "freshworks.com",
  "Dialogflow": "dialogflow.cloud.google.com",
  "Rasa": "rasa.com",
  "Botpress": "botpress.com",
  
  // 数据分析
  "Tableau AI": "tableau.com",
  "Power BI": "powerbi.microsoft.com",
  "Looker": "looker.com",
  "帆软 FineBI": "fanruan.com",
  "Metabase": "metabase.com",
  "Redash": "redash.io",
  
  // 中国工具
  "豆包": "doubao.com",
  "DeepSeek": "chat.deepseek.com",
  "腾讯元宝": "yuanbao.tencent.com",
  "Grok": "grok.x.ai",
  "Poe": "poe.com",
  "蛙蛙写作": "wawa.ai",
  "讯飞绘文": "huiwen.xfyun.cn",
  "笔灵 AI 写作": "ibiling.cn",
  "堆友 AI": "d.design",
  "LiblibAI": "liblib.art",
  "可灵 AI": "klingai.kuaishou.com",
  "即梦 AI": "jimeng.jianying.com",
  "通义万相": "tongyi.aliyun.com",
  "扣子 Coze": "coze.cn",
  "秘塔 AI 搜索": "metaso.cn",
  "通义灵码": "lingma.aliyun.com",
  "代码小浣熊": "code.xiaohuanxiong.com",
  "魔音工坊": "moyin.cn",
  "海绵音乐": "haimian.com",
};

// 提取域名
function extractDomain(url: string): string {
  return url
    .replace(/^https?:\/\//, '')
    .replace(/\/.*$/, '')
    .replace(/^www\./, '');
}

// 验证链接
function validateLinks() {
  const dataDir = path.join(__dirname, '../src/data');
  const files = [
    'category-text-generation.ts',
    'category-image-design.ts',
    'category-video-production.ts',
    'category-audio-processing.ts',
    'category-office-productivity.ts',
    'category-data-analysis.ts',
    'category-chatbot.ts',
    'category-social-media.ts',
    'category-dev-tools.ts',
    'category-education.ts',
    'new-tools-batch1.ts',
    'new-tools-batch2.ts',
  ];

  const issues: Array<{
    file: string;
    toolName: string;
    currentUrl: string;
    expectedDomain?: string;
    issue: string;
  }> = [];

  for (const file of files) {
    const filePath = path.join(dataDir, file);
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️ 文件不存在：${file}`);
      continue;
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    
    // 使用正则表达式提取工具名称和 URL
    const toolRegex = /name:\s*["']([^"']+)["'][\s\S]*?url:\s*["']([^"']+)["']/g;
    let match;
    
    while ((match = toolRegex.exec(content)) !== null) {
      const toolName = match[1];
      const url = match[2];
      const domain = extractDomain(url);
      
      // 检查是否有预期域名
      const expectedDomain = EXPECTED_DOMAINS[toolName];
      
      if (expectedDomain && !domain.includes(expectedDomain)) {
        issues.push({
          file,
          toolName,
          currentUrl: url,
          expectedDomain,
          issue: `域名不匹配：期望包含 "${expectedDomain}"，实际为 "${domain}"`,
        });
      }
    }
  }

  // 检查 Logo.tsx 中的 LOCAL_LOGO_MAP
  const logoPath = path.join(__dirname, '../src/components/Logo.tsx');
  if (fs.existsSync(logoPath)) {
    const logoContent = fs.readFileSync(logoPath, 'utf-8');
    
    // 检查是否有前导/后导空格
    const logoMapRegex = /"([^"]+)":\s*"/g;
    let logoMatch;
    
    while ((logoMatch = logoMapRegex.exec(logoContent)) !== null) {
      const key = logoMatch[1];
      if (key !== key.trim()) {
        issues.push({
          file: 'Logo.tsx',
          toolName: `LOCAL_LOGO_MAP key: "${key}"`,
          currentUrl: key,
          issue: `键名包含空格："${key}" 应该是 "${key.trim()}"`,
        });
      }
    }
  }

  return issues;
}

// 运行验证
const issues = validateLinks();

if (issues.length === 0) {
  console.log('✅ 所有工具链接验证通过！');
} else {
  console.log(`❌ 发现 ${issues.length} 个问题：\n`);
  issues.forEach((issue, index) => {
    console.log(`${index + 1}. [${issue.file}] ${issue.toolName}`);
    console.log(`   问题：${issue.issue}`);
    console.log(`   当前 URL: ${issue.currentUrl}`);
    if (issue.expectedDomain) {
      console.log(`   期望域名：${issue.expectedDomain}`);
    }
    console.log('');
  });
}

// 输出 JSON 供修复脚本使用
console.log('\n--- JSON 输出 ---');
console.log(JSON.stringify(issues, null, 2));
