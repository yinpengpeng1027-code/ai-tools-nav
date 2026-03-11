// 工具详情页面 - 明亮风格
import Link from "next/link";

const TOOL_IDS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];

export function generateStaticParams() {
  return TOOL_IDS.map((id) => ({ id }));
}

const TOOLS: Record<string, { name: string; description: string; longDesc: string; logo: string; isVip: boolean; url: string; tags: string[]; category: string; features: string[]; pricing: string }> = {
  "1": {
    name: "ChatGPT",
    description: "OpenAI 的智能对话 AI，支持多轮对话、代码生成、文案创作",
    longDesc: "ChatGPT 是由 OpenAI 开发的大型语言模型，能够进行自然对话、回答问题、创作内容、编写代码等。支持多轮对话上下文理解，是目前最流行的 AI 助手之一。",
    logo: "🤖",
    isVip: false,
    url: "https://chat.openai.com",
    tags: ["免费", "英文", "Web"],
    category: "文本生成",
    features: ["多轮对话", "代码生成", "文案创作", "翻译", "问答"],
    pricing: "免费 + Plus $20/月",
  },
  "2": {
    name: "Midjourney",
    description: "AI 绘画工具，生成高质量艺术图像",
    longDesc: "Midjourney 是一款 AI 图像生成工具，通过 Discord 机器人操作，能够根据文字描述生成高质量的艺术图像。适合设计师、艺术家和创意工作者使用。",
    logo: "🎨",
    isVip: true,
    url: "https://midjourney.com",
    tags: ["付费", "英文", "Discord"],
    category: "图像设计",
    features: ["文生图", "高质量输出", "艺术风格", "批量生成"],
    pricing: "$10-120/月",
  },
  "3": {
    name: "Notion AI",
    description: "智能笔记助手，自动总结、润色、翻译",
    longDesc: "Notion AI 是集成在 Notion 中的 AI 助手，能够帮助用户自动总结笔记、润色文章、翻译内容、生成大纲等，大幅提升工作效率。",
    logo: "📝",
    isVip: false,
    url: "https://notion.so",
    tags: ["付费", "多语言", "Web"],
    category: "办公效率",
    features: ["自动总结", "润色", "翻译", "大纲生成", "头脑风暴"],
    pricing: "$10/月",
  },
  "4": {
    name: "Runway",
    description: "AI 视频生成和编辑工具",
    longDesc: "Runway 是一款强大的 AI 视频生成和编辑工具，支持文生视频、视频风格转换、智能抠图等功能。",
    logo: "🎬",
    isVip: true,
    url: "https://runwayml.com",
    tags: ["付费", "英文", "Web"],
    category: "视频制作",
    features: ["文生视频", "视频编辑", "智能抠图", "风格转换"],
    pricing: "$12-95/月",
  },
  "5": {
    name: "ElevenLabs",
    description: "AI 语音合成，逼真的多语言语音",
    longDesc: "ElevenLabs 提供逼真的 AI 语音合成服务，支持多语言、多情感表达，适合视频配音、有声书等场景。",
    logo: "🎵",
    isVip: true,
    url: "https://elevenlabs.io",
    tags: ["付费", "多语言", "Web"],
    category: "音频处理",
    features: ["语音合成", "多语言", "情感表达", "克隆声音"],
    pricing: "$5-330/月",
  },
  "6": {
    name: "Jasper",
    description: "AI 营销文案生成器",
    longDesc: "Jasper 是专为营销人员设计的 AI 文案工具，能够快速生成广告文案、社交媒体内容、博客文章等。",
    logo: "✍️",
    isVip: false,
    url: "https://jasper.ai",
    tags: ["付费", "英文", "Web"],
    category: "文本生成",
    features: ["营销文案", "社交媒体", "博客生成", "多模板"],
    pricing: "$49-125/月",
  },
};

export default async function ToolPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tool = TOOLS[id];

  if (!tool) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">工具未找到</h1>
          <p className="text-slate-600 mb-8">抱歉，您访问的工具不存在</p>
          <Link href="/tools" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:opacity-90 transition-opacity">
            返回工具库
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">AI 工具导航站</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/tools" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">工具库</Link>
              <Link href="/categories" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">分类</Link>
              <Link href="/vip" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">VIP 专区</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <Link href="/tools" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors">
          <span>←</span> 返回工具库
        </Link>

        {/* Tool Header */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-slate-200">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-5xl shadow-lg flex-shrink-0">
              {tool.logo}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold text-slate-900">{tool.name}</h1>
                {tool.isVip && (
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium">VIP</span>
                )}
              </div>
              <p className="text-lg text-slate-600 mb-4">{tool.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {tool.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/30"
                >
                  访问官网 →
                </a>
                <span className="text-slate-500">{tool.pricing}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Long Description */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">详细介绍</h2>
            <p className="text-slate-600 leading-relaxed">{tool.longDesc}</p>
          </div>

          {/* Features */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">主要功能</h2>
            <ul className="space-y-3">
              {tool.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-600">
                  <span className="text-green-500">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500">
          © 2026 AI 工具导航站 - 保留所有权利
        </div>
      </footer>
    </div>
  );
}
