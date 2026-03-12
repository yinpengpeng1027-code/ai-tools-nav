// 完整的 AI 工具数据库 - 10 个分类，每个分类 20+ 个工具
// 数据来源：FuturePedia.io + 其他 AI 导航站参考
// 最后更新：2026-03-11

export interface Tool {
  id: number;
  name: string;
  description: string;
  category: string;
  logo: string;
  url: string;
  isVip: boolean;
  tags: string[];
}

export const TOOLS_DATA: Tool[] = [
  // ==================== 文本生成 (25 个) ====================
  {
    id: 1,
    name: "ChatGPT",
    description: "OpenAI 的智能对话 AI，支持多轮对话、代码生成、文案创作",
    category: "文本生成",
    logo: "🤖",
    url: "https://chatgpt.com",
    isVip: false,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 2,
    name: "Claude",
    description: "Anthropic 的安全 AI 助手，擅长长文本处理和分析",
    category: "文本生成",
    logo: "📝",
    url: "https://claude.ai",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 3,
    name: "Jasper",
    description: "AI 营销文案生成器，专为品牌和内容营销打造",
    category: "文本生成",
    logo: "✍️",
    url: "https://jasper.ai",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 4,
    name: "Writesonic",
    description: "AI 写作平台，支持博客、广告、邮件等多种内容",
    category: "文本生成",
    logo: "📄",
    url: "https://writesonic.com/",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 5,
    name: "Copy.ai",
    description: "AI 文案生成工具，快速创建营销内容",
    category: "文本生成",
    logo: "✨",
    url: "https://copy.ai",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 6,
    name: "Rytr",
    description: "AI 写作助手，支持多种语言和语调",
    category: "文本生成",
    logo: "🖊️",
    url: "https://rytr.me",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 7,
    name: "文心一言",
    description: "百度大语言模型，中文对话 AI 助手",
    category: "文本生成",
    logo: "🇨🇳",
    url: "https://yiyan.baidu.com",
    isVip: false,
    tags: ["免费", "中文", "Web"]
  },
  {
    id: 8,
    name: "通义千问",
    description: "阿里大语言模型，多模态理解与生成",
    category: "文本生成",
    logo: "🤖",
    url: "https://tongyi.aliyun.com",
    isVip: false,
    tags: ["免费", "中文", "Web"]
  },
  {
    id: 9,
    name: "Kimi",
    description: "月之暗面大模型，支持超长上下文理解",
    category: "文本生成",
    logo: "🌙",
    url: "https://kimi.moonshot.cn",
    isVip: false,
    tags: ["免费", "中文", "Web"]
  },
  {
    id: 10,
    name: "智谱清言",
    description: "智谱 AI 大模型，清华技术背景",
    category: "文本生成",
    logo: "🧠",
    url: "https://chatglm.cn",
    isVip: false,
    tags: ["免费", "中文", "Web"]
  },
  {
    id: 11,
    name: "讯飞星火",
    description: "科大讯飞大模型，中文语音交互强",
    category: "文本生成",
    logo: "🔥",
    url: "https://xinghuo.xfyun.cn",
    isVip: false,
    tags: ["免费", "中文", "Web"]
  },
  {
    id: 12,
    name: "Notion AI",
    description: "智能笔记助手，自动总结、润色、翻译",
    category: "文本生成",
    logo: "📓",
    url: "https://www.notion.so",
    isVip: true,
    tags: ["付费", "多语言", "Web"]
  },
  {
    id: 13,
    name: "DeepL Write",
    description: "AI 写作助手，智能润色和语法修正",
    category: "文本生成",
    logo: "🌐",
    url: "https://deepl.com/write",
    isVip: true,
    tags: ["付费", "多语言", "Web"]
  },
  {
    id: 14,
    name: "Quillbot",
    description: "AI 改写和摘要工具，提升写作效率",
    category: "文本生成",
    logo: "🦜",
    url: "https://quillbot.com",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 15,
    name: "Grammarly",
    description: "AI 语法检查和写作建议工具",
    category: "文本生成",
    logo: "✅",
    url: "https://www.grammarly.com",
    isVip: true,
    tags: ["免费增值", "英文", "Web/插件"]
  },
  {
    id: 16,
    name: "Sudowrite",
    description: "AI 创意写作助手，小说和故事创作",
    category: "文本生成",
    logo: "📖",
    url: "https://sudowrite.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 17,
    name: "NovelAI",
    description: "AI 辅助写作， customizable 故事生成",
    category: "文本生成",
    logo: "🌟",
    url: "https://novelai.net/",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 18,
    name: "Anyword",
    description: "AI 营销文案优化，预测转化率",
    category: "文本生成",
    logo: "📊",
    url: "https://anyword.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 19,
    name: "Hypotenuse",
    description: "AI 内容创作，SEO 优化文章生成",
    category: "文本生成",
    logo: "📐",
    url: "https://hypotenuse.ai/",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 20,
    name: "Peppertype",
    description: "AI 内容生成器，营销和销售文案",
    category: "文本生成",
    logo: "🌶️",
    url: "https://peppertype.ai",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 21,
    name: "Frase",
    description: "AI 内容优化和 SEO 写作工具",
    category: "文本生成",
    logo: "📝",
    url: "https://frase.io",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 22,
    name: "ShortlyAI",
    description: "AI 写作伙伴，长篇文章生成",
    category: "文本生成",
    logo: "⚡",
    url: "https://shortlyai.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 23,
    name: "Aithor",
    description: "AI 写作助手，论文和学术内容",
    category: "文本生成",
    logo: "🎓",
    url: "https://aithor.com/",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 24,
    name: "GravityWrite",
    description: "多语言 AI 内容创作平台",
    category: "文本生成",
    logo: "⚖️",
    url: "https://gravitywrite.com",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 25,
    name: "Perplexity",
    description: "AI 搜索和摘要，可信信息来源",
    category: "文本生成",
    logo: "🔍",
    url: "https://www.perplexity.ai",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },

  // ==================== 图像设计 (25 个) ====================
  {
    id: 101,
    name: "Midjourney",
    description: "AI 绘画工具，生成高质量艺术图像",
    category: "图像设计",
    logo: "🎨",
    url: "https://midjourney.com",
    isVip: true,
    tags: ["付费", "英文", "Discord"]
  },
  {
    id: 102,
    name: "DALL-E 3",
    description: "OpenAI 的图像生成模型，理解能力强",
    category: "图像设计",
    logo: "🖼️",
    url: "https://openai.com/dall-e-3",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 103,
    name: "Stable Diffusion",
    description: "开源 AI 绘画模型，本地部署自由控制",
    category: "图像设计",
    logo: "🌊",
    url: "https://stability.ai/",
    isVip: false,
    tags: ["开源", "英文", "本地"]
  },
  {
    id: 104,
    name: "Leonardo AI",
    description: "游戏资产和艺术设计 AI 生成平台",
    category: "图像设计",
    logo: "🦁",
    url: "https://leonardo.ai/",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 105,
    name: "Playground AI",
    description: "AI 图像创作和编辑工具",
    category: "图像设计",
    logo: "🎮",
    url: "https://playgroundai.com/",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 106,
    name: "Canva AI",
    description: "AI 设计工具，一键生成海报、PPT",
    category: "图像设计",
    logo: "🎯",
    url: "https://canva.com",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 107,
    name: "Adobe Firefly",
    description: "Adobe 的 AI 图像生成工具，商用安全",
    category: "图像设计",
    logo: "🔥",
    url: "https://firefly.adobe.com",
    isVip: true,
    tags: ["付费", "多语言", "Web"]
  },
  {
    id: 108,
    name: "Ideogram",
    description: "文本到图像 AI，擅长文字渲染",
    category: "图像设计",
    logo: "💡",
    url: "https://ideogram.ai/",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 109,
    name: "NightCafe",
    description: "AI 艺术创作平台，多种风格",
    category: "图像设计",
    logo: "🌙",
    url: "https://nightcafe.studio",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 110,
    name: "Looka",
    description: "AI Logo 设计工具，品牌视觉生成",
    category: "图像设计",
    logo: "🔍",
    url: "https://www.looka.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 111,
    name: "Remove.bg",
    description: "AI 一键抠图，自动去除背景",
    category: "图像设计",
    logo: "✂️",
    url: "https://remove.bg",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 112,
    name: "Upscale.media",
    description: "AI 图片放大和增强工具",
    category: "图像设计",
    logo: "🔍",
    url: "https://upscale.media",
    isVip: false,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 113,
    name: "美图 AI",
    description: "美图秀秀 AI 图像编辑和生成",
    category: "图像设计",
    logo: "📸",
    url: "https://meitu.com",
    isVip: false,
    tags: ["免费增值", "中文", "Web/App"]
  },
  {
    id: 114,
    name: "稿定设计",
    description: "在线设计工具，模板丰富",
    category: "图像设计",
    logo: "📐",
    url: "https://gaoding.com",
    isVip: true,
    tags: ["付费", "中文", "Web"]
  },
  {
    id: 115,
    name: "Magic Studio",
    description: "AI 图像编辑和生成套件",
    category: "图像设计",
    logo: "🪄",
    url: "https://magicstudio.com",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 116,
    name: "SeaArt AI",
    description: "AI 艺术生成，多样风格",
    category: "图像设计",
    logo: "🌊",
    url: "https://www.seaart.ai",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 117,
    name: "Civitai",
    description: "开源 AI 模型分享平台",
    category: "图像设计",
    logo: "🏛️",
    url: "https://civitai.com/",
    isVip: false,
    tags: ["免费", "英文", "Web"]
  },
  {
    id: 118,
    name: "Profile Picture AI",
    description: "AI 头像生成工具",
    category: "图像设计",
    logo: "👤",
    url: "https://profilepicture.ai",
    isVip: true,
    tags: ["付费", "多语言", "Web"]
  },
  {
    id: 119,
    name: "Palette.fm",
    description: "AI 照片上色工具",
    category: "图像设计",
    logo: "🎨",
    url: "https://palette.fm",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 120,
    name: "Gencraft",
    description: "AI 数字艺术创作工具",
    category: "图像设计",
    logo: "🎭",
    url: "https://gencraft.com/",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 121,
    name: "Pollinations",
    description: "开源 AI 图像生成平台",
    category: "图像设计",
    logo: "🐝",
    url: "https://pollinations.ai",
    isVip: false,
    tags: ["免费", "开源", "Web"]
  },
  {
    id: 122,
    name: "Lucidpic",
    description: "AI 3D 照片转换工具",
    category: "图像设计",
    logo: "📷",
    url: "https://www.lucidpic.com",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 123,
    name: "Brandmark",
    description: "AI Logo 和品牌设计工具",
    category: "图像设计",
    logo: "🏷️",
    url: "https://brandmark.io",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 124,
    name: "Khroma",
    description: "AI 配色方案生成器",
    category: "图像设计",
    logo: "🌈",
    url: "https://khroma.co",
    isVip: false,
    tags: ["免费", "英文", "Web"]
  },
  {
    id: 125,
    name: "Uizard",
    description: "AI UI/UX 设计工具",
    category: "图像设计",
    logo: "🎨",
    url: "https://uizard.io",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },

  // ==================== 视频制作 (25 个) ====================
  {
    id: 201,
    name: "Runway",
    description: "AI 视频生成和编辑工具，功能强大",
    category: "视频制作",
    logo: "🎬",
    url: "https://runwayml.com",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 202,
    name: "Sora",
    description: "OpenAI 的文生视频模型，电影级质量",
    category: "视频制作",
    logo: "🎞️",
    url: "https://openai.com/sora",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 203,
    name: "Pika Labs",
    description: "AI 视频生成工具，支持多种风格",
    category: "视频制作",
    logo: "✨",
    url: "https://pika.art/",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 204,
    name: "HeyGen",
    description: "AI 数字人视频生成，多语言支持",
    category: "视频制作",
    logo: "👤",
    url: "https://www.heygen.com",
    isVip: true,
    tags: ["付费", "多语言", "Web"]
  },
  {
    id: 205,
    name: "Synthesia",
    description: "AI 虚拟主播视频生成平台",
    category: "视频制作",
    logo: "🎭",
    url: "https://synthesia.io",
    isVip: true,
    tags: ["付费", "多语言", "Web"]
  },
  {
    id: 206,
    name: "剪映",
    description: "抖音官方视频剪辑工具，AI 功能丰富",
    category: "视频制作",
    logo: "🎥",
    url: "https://capcut.cn",
    isVip: false,
    tags: ["免费", "中文", "Web/App"]
  },
  {
    id: 207,
    name: "Descript",
    description: "AI 视频编辑，像编辑文档一样剪视频",
    category: "视频制作",
    logo: "📝",
    url: "https://www.descript.com",
    isVip: true,
    tags: ["付费", "英文", "桌面"]
  },
  {
    id: 208,
    name: "Veed.io",
    description: "在线视频编辑工具，AI 字幕生成",
    category: "视频制作",
    logo: "▶️",
    url: "https://www.veed.io",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 209,
    name: "InVideo",
    description: "AI 视频创作平台，模板丰富",
    category: "视频制作",
    logo: "🎪",
    url: "https://invideo.io/",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 210,
    name: "Lumen5",
    description: "文章转视频 AI 工具",
    category: "视频制作",
    logo: "📰",
    url: "https://lumen5.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 211,
    name: "Pictory",
    description: "文本转视频，快速创建营销视频",
    category: "视频制作",
    logo: "🖼️",
    url: "https://www.pictory.ai",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 212,
    name: "Fliki",
    description: "文本转视频，AI 配音生成",
    category: "视频制作",
    logo: "🎬",
    url: "https://fliki.ai/",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 213,
    name: "D-ID",
    description: "AI 数字人说话视频生成",
    category: "视频制作",
    logo: "🗣️",
    url: "https://d-id.com",
    isVip: true,
    tags: ["付费", "多语言", "Web"]
  },
  {
    id: 214,
    name: "Elai.io",
    description: "AI 视频生成，无需摄像机",
    category: "视频制作",
    logo: "🎥",
    url: "https://elai.io",
    isVip: true,
    tags: ["付费", "多语言", "Web"]
  },
  {
    id: 215,
    name: "Colossyan",
    description: "AI 演员视频生成平台",
    category: "视频制作",
    logo: "🎬",
    url: "https://colossyan.com",
    isVip: true,
    tags: ["付费", "多语言", "Web"]
  },
  {
    id: 216,
    name: "万兴播爆",
    description: "万兴科技 AI 视频营销工具",
    category: "视频制作",
    logo: "💥",
    url: "https://virbo.wondershare.cn",
    isVip: true,
    tags: ["付费", "中文", "Web"]
  },
  {
    id: 217,
    name: "Opus Clip",
    description: "AI 短视频剪辑，长视频自动切片",
    category: "视频制作",
    logo: "✂️",
    url: "https://opus.pro",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 218,
    name: "Munch",
    description: "AI 短视频内容提取工具",
    category: "视频制作",
    logo: "🍿",
    url: "https://getmunch.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 219,
    name: "Vidyo",
    description: "AI 视频剪辑和重新格式化",
    category: "视频制作",
    logo: "📹",
    url: "https://vidyo.ai",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 220,
    name: "Shuffll",
    description: "AI 品牌视频生成工具",
    category: "视频制作",
    logo: "🔀",
    url: "https://shuffll.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 221,
    name: "Kinetix",
    description: "AI 3D 动画生成工具",
    category: "视频制作",
    logo: "🎮",
    url: "https://kinetix.tech",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 222,
    name: "TubeMagic",
    description: "YouTube AI 视频优化工具",
    category: "视频制作",
    logo: "📺",
    url: "https://tubemagic.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 223,
    name: "Wisecut",
    description: "AI 视频自动剪辑工具",
    category: "视频制作",
    logo: "✂️",
    url: "https://wisecut.video",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 224,
    name: "Rawshorts",
    description: "AI 动画视频制作平台",
    category: "视频制作",
    logo: "🎬",
    url: "https://rawshorts.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 225,
    name: "Steve.ai",
    description: "AI 动画和真人视频生成",
    category: "视频制作",
    logo: "🤖",
    url: "https://steve.ai",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },

  // ==================== 音频处理 (22 个) ====================
  {
    id: 301,
    name: "ElevenLabs",
    description: "AI 语音合成，逼真的多语言语音生成",
    category: "音频处理",
    logo: "🎙️",
    url: "https://elevenlabs.io/",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 302,
    name: "Suno AI",
    description: "AI 音乐生成器，创作完整歌曲",
    category: "音频处理",
    logo: "🎵",
    url: "https://suno.ai",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 303,
    name: "Murf AI",
    description: "专业 AI 语音合成平台",
    category: "音频处理",
    logo: "🗣️",
    url: "https://murf.ai",
    isVip: true,
    tags: ["付费", "多语言", "Web"]
  },
  {
    id: 304,
    name: "Play.ht",
    description: "AI 文本转语音，超自然声音",
    category: "音频处理",
    logo: "📢",
    url: "https://play.ht/",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 305,
    name: "Udio",
    description: "AI 音乐创作平台，高质量原创音乐",
    category: "音频处理",
    logo: "🎶",
    url: "https://udio.com",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 306,
    name: "AIVA",
    description: "AI 作曲工具，专业级音乐生成",
    category: "音频处理",
    logo: "🎼",
    url: "https://aiva.ai",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 307,
    name: "LALAL.AI",
    description: "AI 人声和伴奏分离工具",
    category: "音频处理",
    logo: "🎚️",
    url: "https://lalal.ai",
    isVip: true,
    tags: ["付费", "多语言", "Web"]
  },
  {
    id: 308,
    name: "Adobe Podcast",
    description: "AI 播客制作和音频增强工具",
    category: "音频处理",
    logo: "🎧",
    url: "https://podcast.adobe.com",
    isVip: true,
    tags: ["免费", "英文", "Web"]
  },
  {
    id: 309,
    name: "Krisp",
    description: "AI 降噪工具，清晰通话录音",
    category: "音频处理",
    logo: "🔇",
    url: "https://krisp.ai",
    isVip: true,
    tags: ["免费增值", "多语言", "桌面"]
  },
  {
    id: 310,
    name: "讯飞配音",
    description: "科大讯飞 AI 配音工具",
    category: "音频处理",
    logo: "🎤",
    url: "https://peiyin.xunfei.cn",
    isVip: true,
    tags: ["付费", "中文", "Web"]
  },
  {
    id: 311,
    name: "Resemble AI",
    description: "AI 语音克隆和生成平台",
    category: "音频处理",
    logo: "👥",
    url: "https://resemble.ai",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 312,
    name: "WellSaid Labs",
    description: "企业级 AI 语音合成",
    category: "音频处理",
    logo: "📣",
    url: "https://wellsaidlabs.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 313,
    name: "NaturalReader",
    description: "AI 文本朗读工具",
    category: "音频处理",
    logo: "📖",
    url: "https://naturalreaders.com",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 314,
    name: "Speechify",
    description: "AI 文本转语音，听书工具",
    category: "音频处理",
    logo: "🔊",
    url: "https://speechify.com",
    isVip: true,
    tags: ["免费增值", "多语言", "Web/App"]
  },
  {
    id: 315,
    name: "Voicemod",
    description: "AI 变声器，实时语音处理",
    category: "音频处理",
    logo: "🎭",
    url: "https://voicemod.net",
    isVip: true,
    tags: ["免费增值", "多语言", "桌面"]
  },
  {
    id: 316,
    name: "Uberduck",
    description: "AI 说唱和语音生成",
    category: "音频处理",
    logo: "🦆",
    url: "https://uberduck.ai",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 317,
    name: "Soundraw",
    description: "AI 免版税音乐生成",
    category: "音频处理",
    logo: "🎵",
    url: "https://soundraw.io",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 318,
    name: "Boomy",
    description: "AI 音乐创作和发行平台",
    category: "音频处理",
    logo: "💥",
    url: "https://boomy.com/",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 319,
    name: "Ecrett Music",
    description: "AI 背景音乐生成工具",
    category: "音频处理",
    logo: "🎹",
    url: "https://ecrettmusic.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 320,
    name: "Cleanvoice",
    description: "AI 播客音频清理工具",
    category: "音频处理",
    logo: "🧹",
    url: "https://cleanvoice.ai",
    isVip: true,
    tags: ["付费", "多语言", "Web"]
  },
  {
    id: 321,
    name: "Audo Studio",
    description: "AI 音频增强和降噪",
    category: "音频处理",
    logo: "🎚️",
    url: "https://audo.ai",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 322,
    name: "Voice.ai",
    description: "AI 实时语音转换工具",
    category: "音频处理",
    logo: "🔄",
    url: "https://voice.ai/",
    isVip: true,
    tags: ["免费增值", "多语言", "桌面"]
  },

  // ==================== 办公效率 (25 个) ====================
  {
    id: 401,
    name: "Notion AI",
    description: "智能笔记助手，知识库管理",
    category: "办公效率",
    logo: "📓",
    url: "https://notion.so",
    isVip: true,
    tags: ["付费", "多语言", "Web"]
  },
  {
    id: 402,
    name: "Microsoft Copilot",
    description: "微软 AI 办公助手，集成 Office",
    category: "办公效率",
    logo: "📎",
    url: "https://copilot.microsoft.com",
    isVip: true,
    tags: ["付费", "多语言", "Web/桌面"]
  },
  {
    id: 403,
    name: "Grammarly",
    description: "AI 写作助手，语法和拼写检查",
    category: "办公效率",
    logo: "✅",
    url: "https://grammarly.com",
    isVip: true,
    tags: ["免费增值", "英文", "Web/插件"]
  },
  {
    id: 404,
    name: "Otter.ai",
    description: "AI 会议记录，语音转文字",
    category: "办公效率",
    logo: "🦦",
    url: "https://otter.ai",
    isVip: true,
    tags: ["免费增值", "英文", "Web/App"]
  },
  {
    id: 405,
    name: "Fireflies.ai",
    description: "AI 会议助手，自动记录和分析",
    category: "办公效率",
    logo: "🔥",
    url: "https://fireflies.ai",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 406,
    name: "Beautiful.ai",
    description: "AI PPT 生成工具，智能排版",
    category: "办公效率",
    logo: "📊",
    url: "https://beautiful.ai",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 407,
    name: "Gamma",
    description: "AI 演示文稿生成工具",
    category: "办公效率",
    logo: "Γ",
    url: "https://gamma.app/",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 408,
    name: "Tome",
    description: "AI 故事叙述和演示工具",
    category: "办公效率",
    logo: "📖",
    url: "https://tome.app",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 409,
    name: "MindMeister",
    description: "AI 思维导图工具",
    category: "办公效率",
    logo: "🧠",
    url: "https://mindmeister.com",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 410,
    name: "Zapier",
    description: "自动化工作流工具，连接应用",
    category: "办公效率",
    logo: "⚡",
    url: "https://zapier.com",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 411,
    name: "飞书智能伙伴",
    description: "飞书 AI 办公助手",
    category: "办公效率",
    logo: "🕊️",
    url: "https://feishu.cn",
    isVip: false,
    tags: ["免费增值", "中文", "Web/App"]
  },
  {
    id: 412,
    name: "钉钉 AI",
    description: "阿里钉钉智能办公助手",
    category: "办公效率",
    logo: "📌",
    url: "https://dingtalk.com",
    isVip: false,
    tags: ["免费增值", "中文", "Web/App"]
  },
  {
    id: 413,
    name: "Motion",
    description: "AI 日程管理和任务规划",
    category: "办公效率",
    logo: "🏃",
    url: "https://motion.com",
    isVip: true,
    tags: ["付费", "英文", "Web/App"]
  },
  {
    id: 414,
    name: "Reclaim.ai",
    description: "AI 时间管理和日程优化",
    category: "办公效率",
    logo: "🔄",
    url: "https://reclaim.ai",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 415,
    name: "Clockwise",
    description: "AI 会议调度和时间优化",
    category: "办公效率",
    logo: "⏰",
    url: "https://clockwise.com",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 416,
    name: "Mem.ai",
    description: "AI 笔记和知识管理",
    category: "办公效率",
    logo: "💾",
    url: "https://mem.ai",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 417,
    name: "Taskade",
    description: "AI 任务管理和协作工具",
    category: "办公效率",
    logo: "✅",
    url: "https://taskade.com",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 418,
    name: "ClickUp AI",
    description: "AI 项目管理和协作",
    category: "办公效率",
    logo: "🎯",
    url: "https://clickup.com",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 419,
    name: "Monday AI",
    description: "AI 工作流管理平台",
    category: "办公效率",
    logo: "📋",
    url: "https://monday.com",
    isVip: true,
    tags: ["付费", "多语言", "Web"]
  },
  {
    id: 420,
    name: "Airtable AI",
    description: "AI 数据库和协作平台",
    category: "办公效率",
    logo: "🗃️",
    url: "https://airtable.com",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 421,
    name: "Superhuman",
    description: "AI 邮件客户端，高效处理",
    category: "办公效率",
    logo: "⚡",
    url: "https://superhuman.com",
    isVip: true,
    tags: ["付费", "英文", "桌面"]
  },
  {
    id: 422,
    name: "Shortwave",
    description: "AI 邮件管理和摘要",
    category: "办公效率",
    logo: "📧",
    url: "https://shortwave.com",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 423,
    name: "Rewind AI",
    description: "AI 个人记录助手",
    category: "办公效率",
    logo: "⏪",
    url: "https://rewind.ai",
    isVip: true,
    tags: ["付费", "英文", "桌面"]
  },
  {
    id: 424,
    name: "Granola",
    description: "AI 会议笔记工具",
    category: "办公效率",
    logo: "🥣",
    url: "https://granola.so",
    isVip: true,
    tags: ["付费", "英文", "桌面"]
  },
  {
    id: 425,
    name: "Supernormal",
    description: "AI 会议记录和摘要",
    category: "办公效率",
    logo: "📝",
    url: "https://supernormal.com",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },

  // ==================== 数据分析 (22 个) ====================
  {
    id: 501,
    name: "Tableau AI",
    description: "智能数据可视化和分析平台",
    category: "数据分析",
    logo: "📊",
    url: "https://tableau.com",
    isVip: true,
    tags: ["付费", "多语言", "Web/桌面"]
  },
  {
    id: 502,
    name: "Power BI",
    description: "微软商业智能工具，AI 增强分析",
    category: "数据分析",
    logo: "📈",
    url: "https://powerbi.microsoft.com",
    isVip: true,
    tags: ["付费", "多语言", "Web/桌面"]
  },
  {
    id: 503,
    name: "Looker",
    description: "Google 数据分析和 BI 平台",
    category: "数据分析",
    logo: "🔭",
    url: "https://looker.google.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 504,
    name: "DataRobot",
    description: "自动化机器学习平台",
    category: "数据分析",
    logo: "🤖",
    url: "https://datarobot.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 505,
    name: "Akkio",
    description: "无代码 AI 数据分析工具",
    category: "数据分析",
    logo: "⚡",
    url: "https://akkio.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 506,
    name: "Julius AI",
    description: "AI 数据分析师，自然语言查询",
    category: "数据分析",
    logo: "🧮",
    url: "https://julius.ai",
    isVip: true,
    tags: ["付费", "多语言", "Web"]
  },
  {
    id: 507,
    name: "Thoughtspot",
    description: "AI 驱动的数据搜索和分析",
    category: "数据分析",
    logo: "💡",
    url: "https://thoughtspot.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 508,
    name: "ChartGPT",
    description: "AI 图表生成工具",
    category: "数据分析",
    logo: "📉",
    url: "https://chartgpt.io",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 509,
    name: "Polymer",
    description: "AI 数据表格和可视化工具",
    category: "数据分析",
    logo: "🔮",
    url: "https://polymersearch.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 510,
    name: "帆软 FineBI",
    description: "国产商业智能分析工具",
    category: "数据分析",
    logo: "📊",
    url: "https://finebi.com",
    isVip: true,
    tags: ["付费", "中文", "Web/桌面"]
  },
  {
    id: 511,
    name: "观远数据",
    description: "AI 智能数据分析平台",
    category: "数据分析",
    logo: "👁️",
    url: "https://guandata.com",
    isVip: true,
    tags: ["付费", "中文", "Web"]
  },
  {
    id: 512,
    name: "Sisense",
    description: "嵌入式分析和 BI 平台",
    category: "数据分析",
    logo: "📊",
    url: "https://sisense.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 513,
    name: "Domo",
    description: "云 BI 和数据可视化平台",
    category: "数据分析",
    logo: "📈",
    url: "https://domo.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 514,
    name: "Qlik Sense",
    description: "AI 增强的数据发现平台",
    category: "数据分析",
    logo: "🔵",
    url: "https://qlik.com",
    isVip: true,
    tags: ["付费", "多语言", "Web"]
  },
  {
    id: 515,
    name: "Mode Analytics",
    description: "数据分析和协作平台",
    category: "数据分析",
    logo: "📐",
    url: "https://mode.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 516,
    name: "Metabase",
    description: "开源数据可视化工具",
    category: "数据分析",
    logo: "📊",
    url: "https://metabase.com",
    isVip: true,
    tags: ["免费增值", "英文", "Web/本地"]
  },
  {
    id: 517,
    name: "Redash",
    description: "数据查询和可视化工具",
    category: "数据分析",
    logo: "🔴",
    url: "https://redash.io",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 518,
    name: "Chartio",
    description: "云数据分析和可视化",
    category: "数据分析",
    logo: "📉",
    url: "https://chartio.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 519,
    name: "Periscope Data",
    description: "数据科学平台",
    category: "数据分析",
    logo: "🔭",
    url: "https://periscopedata.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 520,
    name: "Holistics",
    description: "自助式 BI 和数据建模",
    category: "数据分析",
    logo: "📊",
    url: "https://holistics.io",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 521,
    name: "Datawrapper",
    description: "数据可视化和图表工具",
    category: "数据分析",
    logo: "📈",
    url: "https://datawrapper.de",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 522,
    name: "Infogram",
    description: "信息图表和数据可视化",
    category: "数据分析",
    logo: "📊",
    url: "https://infogram.com",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },

  // ==================== 对话机器人 (22 个) ====================
  {
    id: 601,
    name: "Intercom",
    description: "AI 客服聊天机器人平台",
    category: "对话机器人",
    logo: "💬",
    url: "https://intercom.com",
    isVip: true,
    tags: ["付费", "多语言", "Web"]
  },
  {
    id: 602,
    name: "Drift",
    description: "对话式营销和销售机器人",
    category: "对话机器人",
    logo: "🌊",
    url: "https://drift.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 603,
    name: "Dialogflow",
    description: "Google 对话 AI 开发平台",
    category: "对话机器人",
    logo: "🔷",
    url: "https://cloud.google.com/dialogflow",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 604,
    name: "Rasa",
    description: "开源对话 AI 框架",
    category: "对话机器人",
    logo: "🌿",
    url: "https://rasa.com",
    isVip: true,
    tags: ["开源", "英文", "本地"]
  },
  {
    id: 605,
    name: "Landbot",
    description: "无代码聊天机器人构建器",
    category: "对话机器人",
    logo: "🤖",
    url: "https://landbot.io",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 606,
    name: "ManyChat",
    description: "社交媒体聊天机器人工具",
    category: "对话机器人",
    logo: "💭",
    url: "https://manychat.com",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 607,
    name: "Tidio",
    description: "AI 客服聊天工具",
    category: "对话机器人",
    logo: "🎯",
    url: "https://tidio.com",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 608,
    name: "Botpress",
    description: "开源对话机器人平台",
    category: "对话机器人",
    logo: "📦",
    url: "https://botpress.com",
    isVip: true,
    tags: ["免费增值", "多语言", "Web/本地"]
  },
  {
    id: 609,
    name: "Replika",
    description: "AI 陪伴聊天机器人",
    category: "对话机器人",
    logo: "👤",
    url: "https://replika.ai",
    isVip: true,
    tags: ["免费增值", "多语言", "App"]
  },
  {
    id: 610,
    name: "Character.ai",
    description: "创建和对话 AI 角色",
    category: "对话机器人",
    logo: "🎭",
    url: "https://character.ai/",
    isVip: true,
    tags: ["免费增值", "多语言", "Web/App"]
  },
  {
    id: 611,
    name: "小冰",
    description: "微软亚洲 AI 框架，情感对话",
    category: "对话机器人",
    logo: "❄️",
    url: "https://xiaoice.com",
    isVip: false,
    tags: ["免费", "中文", "Web/App"]
  },
  {
    id: 612,
    name: "Freshchat",
    description: "AI 消息传递和聊天机器人",
    category: "对话机器人",
    logo: "🌶️",
    url: "https://freshworks.com/freshchat",
    isVip: true,
    tags: ["付费", "多语言", "Web"]
  },
  {
    id: 613,
    name: "LivePerson",
    description: "企业级对话平台",
    category: "对话机器人",
    logo: "💬",
    url: "https://liveperson.com",
    isVip: true,
    tags: ["付费", "多语言", "Web"]
  },
  {
    id: 614,
    name: "Ada",
    description: "AI 客服自动化平台",
    category: "对话机器人",
    logo: "🤖",
    url: "https://ada.cx",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 615,
    name: "Kore.ai",
    description: "企业对话 AI 平台",
    category: "对话机器人",
    logo: "🔷",
    url: "https://kore.ai",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 616,
    name: "IBM Watson",
    description: "IBM 对话 AI 服务",
    category: "对话机器人",
    logo: "🔵",
    url: "https://ibm.com/watson",
    isVip: true,
    tags: ["付费", "多语言", "Web"]
  },
  {
    id: 617,
    name: "Amazon Lex",
    description: "AWS 对话接口构建服务",
    category: "对话机器人",
    logo: "☁️",
    url: "https://aws.amazon.com/lex",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 618,
    name: "Microsoft Bot Framework",
    description: "微软机器人开发框架",
    category: "对话机器人",
    logo: "🤖",
    url: "https://dev.botframework.com",
    isVip: false,
    tags: ["免费", "多语言", "Web"]
  },
  {
    id: 619,
    name: "Chatfuel",
    description: "Facebook 聊天机器人平台",
    category: "对话机器人",
    logo: "⛽",
    url: "https://chatfuel.com",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 620,
    name: "MobileMonkey",
    description: "多频道聊天机器人工具",
    category: "对话机器人",
    logo: "🐵",
    url: "https://mobilemonkey.com",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 621,
    name: "Flow XO",
    description: "无代码聊天机器人构建器",
    category: "对话机器人",
    logo: "🌊",
    url: "https://flowxo.com",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 622,
    name: "Botsify",
    description: "AI 聊天机器人平台",
    category: "对话机器人",
    logo: "🤖",
    url: "https://botsify.com",
    isVip: true,
    tags: ["付费", "多语言", "Web"]
  },

  // ==================== 社交媒体 (22 个) ====================
  {
    id: 701,
    name: "Hootsuite",
    description: "社交媒体管理工具，AI 内容建议",
    category: "社交媒体",
    logo: "🦉",
    url: "https://hootsuite.com/",
    isVip: true,
    tags: ["付费", "多语言", "Web"]
  },
  {
    id: 702,
    name: "Buffer",
    description: "社交媒体调度和分析工具",
    category: "社交媒体",
    logo: "📋",
    url: "https://buffer.com",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 703,
    name: "Sprout Social",
    description: "企业级社交媒体管理平台",
    category: "社交媒体",
    logo: "🌱",
    url: "https://sproutsocial.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 704,
    name: "Later",
    description: "视觉社交媒体调度工具",
    category: "社交媒体",
    logo: "⏰",
    url: "https://later.com",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 705,
    name: "SocialBee",
    description: "AI 社交媒体内容管理",
    category: "社交媒体",
    logo: "🐝",
    url: "https://socialbee.io",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 706,
    name: "Lately",
    description: "AI 社交媒体内容生成器",
    category: "社交媒体",
    logo: "🔥",
    url: "https://lately.ai",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 707,
    name: "PhantomBuster",
    description: "社交媒体自动化和增长工具",
    category: "社交媒体",
    logo: "👻",
    url: "https://phantombuster.com",
    isVip: true,
    tags: ["付费", "多语言", "Web"]
  },
  {
    id: 708,
    name: "Agorapulse",
    description: "社交媒体管理和报告工具",
    category: "社交媒体",
    logo: "📊",
    url: "https://agorapulse.com",
    isVip: true,
    tags: ["付费", "多语言", "Web"]
  },
  {
    id: 709,
    name: "MeetEdgar",
    description: "社交媒体内容自动重复发布",
    category: "社交媒体",
    logo: "🐘",
    url: "https://meetedgar.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 710,
    name: "新榜",
    description: "中文内容创作和数据分析平台",
    category: "社交媒体",
    logo: "📈",
    url: "https://newrank.cn",
    isVip: true,
    tags: ["付费", "中文", "Web"]
  },
  {
    id: 711,
    name: "清博大数据",
    description: "社交媒体舆情监测分析",
    category: "社交媒体",
    logo: "🔍",
    url: "https://www.gsdata.cn",
    isVip: true,
    tags: ["付费", "中文", "Web"]
  },
  {
    id: 712,
    name: "CoSchedule",
    description: "营销日历和社交媒体调度",
    category: "社交媒体",
    logo: "📅",
    url: "https://coschedule.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 713,
    name: "Sendible",
    description: "社交媒体管理工具",
    category: "社交媒体",
    logo: "📤",
    url: "https://sendible.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 714,
    name: "Crowdfire",
    description: "社交媒体管理和分析",
    category: "社交媒体",
    logo: "🔥",
    url: "https://crowdfireapp.com",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 715,
    name: "Tailwind",
    description: "Pinterest 和 Instagram 调度工具",
    category: "社交媒体",
    logo: "🌬️",
    url: "https://tailwindapp.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 716,
    name: "Planoly",
    description: "视觉社交媒体规划工具",
    category: "社交媒体",
    logo: "📱",
    url: "https://planoly.com",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 717,
    name: "Iconosquare",
    description: "Instagram 和 Facebook 分析",
    category: "社交媒体",
    logo: "📊",
    url: "https://iconosquare.com",
    isVip: true,
    tags: ["付费", "多语言", "Web"]
  },
  {
    id: 718,
    name: "Socialbakers",
    description: "AI 社交媒体营销平台",
    category: "社交媒体",
    logo: "📈",
    url: "https://socialbakers.com",
    isVip: true,
    tags: ["付费", "多语言", "Web"]
  },
  {
    id: 719,
    name: "Brandwatch",
    description: "社交媒体监听和分析",
    category: "社交媒体",
    logo: "👁️",
    url: "https://brandwatch.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 720,
    name: "Mention",
    description: "品牌提及和社交媒体监控",
    category: "社交媒体",
    logo: "📢",
    url: "https://mention.com",
    isVip: true,
    tags: ["付费", "多语言", "Web"]
  },
  {
    id: 721,
    name: "BuzzSumo",
    description: "内容分析和社交媒体研究",
    category: "社交媒体",
    logo: "📊",
    url: "https://buzzsumo.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 722,
    name: "NapoleonCat",
    description: "社交媒体管理和自动化",
    category: "社交媒体",
    logo: "🐱",
    url: "https://napoleoncat.com",
    isVip: true,
    tags: ["付费", "多语言", "Web"]
  },

  // ==================== 开发工具 (25 个) ====================
  {
    id: 801,
    name: "Cursor",
    description: "AI 代码编辑器，智能编程助手",
    category: "开发工具",
    logo: "🖱️",
    url: "https://cursor.sh",
    isVip: true,
    tags: ["免费增值", "英文", "桌面"]
  },
  {
    id: 802,
    name: "GitHub Copilot",
    description: "AI 编程助手，代码自动补全",
    category: "开发工具",
    logo: "🐙",
    url: "https://github.com/features/copilot",
    isVip: true,
    tags: ["付费", "多语言", "插件"]
  },
  {
    id: 803,
    name: "Replit AI",
    description: "在线 IDE 集成 AI 编程助手",
    category: "开发工具",
    logo: "🔁",
    url: "https://replit.com",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 804,
    name: "Codeium",
    description: "免费 AI 代码补全工具",
    category: "开发工具",
    logo: "💎",
    url: "https://codeium.com",
    isVip: false,
    tags: ["免费", "多语言", "插件"]
  },
  {
    id: 805,
    name: "Tabnine",
    description: "AI 代码补全和生成工具",
    category: "开发工具",
    logo: "📑",
    url: "https://tabnine.com",
    isVip: true,
    tags: ["免费增值", "多语言", "插件"]
  },
  {
    id: 806,
    name: "Amazon CodeWhisperer",
    description: "AWS AI 编程助手",
    category: "开发工具",
    logo: "☁️",
    url: "https://aws.amazon.com/codewhisperer",
    isVip: false,
    tags: ["免费", "多语言", "插件"]
  },
  {
    id: 807,
    name: "Sourcegraph Cody",
    description: "AI 代码搜索和助手",
    category: "开发工具",
    logo: "🔎",
    url: "https://sourcegraph.com/cody",
    isVip: true,
    tags: ["免费增值", "英文", "插件"]
  },
  {
    id: 808,
    name: "Windsurf",
    description: "AI 原生代码编辑器",
    category: "开发工具",
    logo: "🏄",
    url: "https://codeium.com/windsurf",
    isVip: true,
    tags: ["免费增值", "英文", "桌面"]
  },
  {
    id: 809,
    name: "Continue",
    description: "开源 AI 代码助手插件",
    category: "开发工具",
    logo: "▶️",
    url: "https://continue.dev",
    isVip: false,
    tags: ["开源", "多语言", "插件"]
  },
  {
    id: 810,
    name: "V0",
    description: "Vercel AI UI 生成工具",
    category: "开发工具",
    logo: "▲",
    url: "https://v0.dev",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 811,
    name: "Builder.io",
    description: "AI 网页和应用生成器",
    category: "开发工具",
    logo: "🏗️",
    url: "https://builder.io",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 812,
    name: "CodeSandbox AI",
    description: "在线开发环境 AI 助手",
    category: "开发工具",
    logo: "📦",
    url: "https://codesandbox.io",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 813,
    name: "Blackbox AI",
    description: "AI 代码生成和搜索",
    category: "开发工具",
    logo: "⬛",
    url: "https://www.blackbox.ai",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 814,
    name: "Bolt.new",
    description: "AI 全栈应用生成器",
    category: "开发工具",
    logo: "⚡",
    url: "https://bolt.new",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 815,
    name: "Lovable",
    description: "AI 应用构建平台",
    category: "开发工具",
    logo: "❤️",
    url: "https://lovable.dev",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 816,
    name: "Durable",
    description: "AI 网站生成器",
    category: "开发工具",
    logo: "🏢",
    url: "https://durable.co",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 817,
    name: "10Web",
    description: "AI WordPress 构建平台",
    category: "开发工具",
    logo: "🔟",
    url: "https://10web.io",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 818,
    name: "Framer AI",
    description: "AI 网站设计和发布",
    category: "开发工具",
    logo: "🖼️",
    url: "https://framer.com",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 819,
    name: "Relume",
    description: "AI 网站规划和设计",
    category: "开发工具",
    logo: "📐",
    url: "https://relume.io",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 820,
    name: "Anima",
    description: "AI 设计转代码工具",
    category: "开发工具",
    logo: "✨",
    url: "https://animaapp.com",
    isVip: true,
    tags: ["免费增值", "英文", "插件"]
  },
  {
    id: 821,
    name: "Locofy",
    description: "设计转前端代码",
    category: "开发工具",
    logo: "📍",
    url: "https://locofy.ai",
    isVip: true,
    tags: ["免费增值", "英文", "插件"]
  },
  {
    id: 822,
    name: "Plasmic",
    description: "可视化页面构建器",
    category: "开发工具",
    logo: "🧩",
    url: "https://plasmic.app",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 823,
    name: "Webflow AI",
    description: "AI 网站构建平台",
    category: "开发工具",
    logo: "🌊",
    url: "https://webflow.com",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 824,
    name: "Mintlify",
    description: "AI 文档生成工具",
    category: "开发工具",
    logo: "📄",
    url: "https://mintlify.com",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 825,
    name: "Sourcery",
    description: "AI 代码审查和重构",
    category: "开发工具",
    logo: "🧙",
    url: "https://sourcery.ai",
    isVip: true,
    tags: ["免费增值", "英文", "插件"]
  },

  // ==================== 学习教育 (22 个) ====================
  {
    id: 901,
    name: "Duolingo Max",
    description: "AI 语言学习助手，角色扮演练习",
    category: "学习教育",
    logo: "🦉",
    url: "https://duolingo.com",
    isVip: true,
    tags: ["免费增值", "多语言", "App/Web"]
  },
  {
    id: 902,
    name: "Khanmigo",
    description: "可汗学院 AI 辅导老师",
    category: "学习教育",
    logo: "📚",
    url: "https://khanacademy.org/khanmigo",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 903,
    name: "Quizlet AI",
    description: "AI 学习卡片和测验生成",
    category: "学习教育",
    logo: "🃏",
    url: "https://quizlet.com",
    isVip: true,
    tags: ["免费增值", "多语言", "Web/App"]
  },
  {
    id: 904,
    name: "Coursera Coach",
    description: "AI 学习助手，课程辅导",
    category: "学习教育",
    logo: "🎓",
    url: "https://coursera.org",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 905,
    name: "Photomath",
    description: "AI 数学题解答器",
    category: "学习教育",
    logo: "📐",
    url: "https://photomath.com",
    isVip: true,
    tags: ["免费增值", "多语言", "App"]
  },
  {
    id: 906,
    name: "Socratic",
    description: "Google AI 学习助手",
    category: "学习教育",
    logo: "🤔",
    url: "https://socratic.org/",
    isVip: false,
    tags: ["免费", "多语言", "App"]
  },
  {
    id: 907,
    name: "Brainly",
    description: "AI 作业帮助平台",
    category: "学习教育",
    logo: "💡",
    url: "https://brainly.com",
    isVip: true,
    tags: ["免费增值", "多语言", "Web/App"]
  },
  {
    id: 908,
    name: "Wolfram Alpha",
    description: "计算知识引擎，学术查询",
    category: "学习教育",
    logo: "🔢",
    url: "https://wolframalpha.com",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 909,
    name: "Grammarly Edu",
    description: "教育版 AI 写作辅导",
    category: "学习教育",
    logo: "✍️",
    url: "https://www.grammarly.com/edu",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 910,
    name: "Magic School AI",
    description: "AI 教师助手，课程计划生成",
    category: "学习教育",
    logo: "🪄",
    url: "https://magicschool.ai",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 911,
    name: "Diffit",
    description: "AI 教学资源生成工具",
    category: "学习教育",
    logo: "📝",
    url: "https://diffit.me",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 912,
    name: "Education Copilot",
    description: "AI 课程计划和教学材料",
    category: "学习教育",
    logo: "🎓",
    url: "https://educationcopilot.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 913,
    name: "Twee",
    description: "AI 英语教学工具",
    category: "学习教育",
    logo: "🐝",
    url: "https://twee.com",
    isVip: true,
    tags: ["免费增值", "多语言", "Web"]
  },
  {
    id: 914,
    name: "Conker",
    description: "AI 测验和评估生成",
    category: "学习教育",
    logo: "🌰",
    url: "https://conker.ai",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 915,
    name: "Formative",
    description: "AI 形成性评估工具",
    category: "学习教育",
    logo: "📊",
    url: "https://goformative.com",
    isVip: true,
    tags: ["免费增值", "英文", "Web"]
  },
  {
    id: 916,
    name: "Century Tech",
    description: "AI 个性化学习平台",
    category: "学习教育",
    logo: "🧠",
    url: "https://century.tech",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 917,
    name: "Carnegie Learning",
    description: "AI 数学学习平台",
    category: "学习教育",
    logo: "🎰",
    url: "https://carnegielearning.com",
    isVip: true,
    tags: ["付费", "英文", "Web"]
  },
  {
    id: 918,
    name: "Knowji",
    description: "AI 词汇学习应用",
    category: "学习教育",
    logo: "📖",
    url: "https://knowji.com/",
    isVip: true,
    tags: ["付费", "多语言", "App"]
  },
  {
    id: 919,
    name: "ELSA Speak",
    description: "AI 英语发音教练",
    category: "学习教育",
    logo: "🗣️",
    url: "https://elsaspeak.com",
    isVip: true,
    tags: ["免费增值", "多语言", "App"]
  },
  {
    id: 920,
    name: "Speak",
    description: "AI 语言学习应用",
    category: "学习教育",
    logo: "💬",
    url: "https://speak.com",
    isVip: true,
    tags: ["免费增值", "多语言", "App"]
  },
  {
    id: 921,
    name: "学堂在线 AI",
    description: "清华在线教育 AI 助手",
    category: "学习教育",
    logo: "🏫",
    url: "https://xuetangx.com",
    isVip: false,
    tags: ["免费增值", "中文", "Web/App"]
  },
  {
    id: 922,
    name: "网易有道 AI",
    description: "网易 AI 学习工具",
    category: "学习教育",
    logo: "📚",
    url: "https://youdao.com",
    isVip: true,
    tags: ["免费增值", "中文", "Web/App"]
  },
];

// 按分类导出工具
export const TOOLS_BY_CATEGORY: Record<string, Tool[]> = {
  "文本生成": TOOLS_DATA.filter(t => t.category === "文本生成"),
  "图像设计": TOOLS_DATA.filter(t => t.category === "图像设计"),
  "视频制作": TOOLS_DATA.filter(t => t.category === "视频制作"),
  "音频处理": TOOLS_DATA.filter(t => t.category === "音频处理"),
  "办公效率": TOOLS_DATA.filter(t => t.category === "办公效率"),
  "数据分析": TOOLS_DATA.filter(t => t.category === "数据分析"),
  "对话机器人": TOOLS_DATA.filter(t => t.category === "对话机器人"),
  "社交媒体": TOOLS_DATA.filter(t => t.category === "社交媒体"),
  "开发工具": TOOLS_DATA.filter(t => t.category === "开发工具"),
  "学习教育": TOOLS_DATA.filter(t => t.category === "学习教育"),
};

// 导出工具总数
export const TOTAL_TOOLS = TOOLS_DATA.length;

// 分类统计
export const CATEGORY_STATS = {
  "文本生成": TOOLS_BY_CATEGORY["文本生成"].length,
  "图像设计": TOOLS_BY_CATEGORY["图像设计"].length,
  "视频制作": TOOLS_BY_CATEGORY["视频制作"].length,
  "音频处理": TOOLS_BY_CATEGORY["音频处理"].length,
  "办公效率": TOOLS_BY_CATEGORY["办公效率"].length,
  "数据分析": TOOLS_BY_CATEGORY["数据分析"].length,
  "对话机器人": TOOLS_BY_CATEGORY["对话机器人"].length,
  "社交媒体": TOOLS_BY_CATEGORY["社交媒体"].length,
  "开发工具": TOOLS_BY_CATEGORY["开发工具"].length,
  "学习教育": TOOLS_BY_CATEGORY["学习教育"].length,
};
