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
};

export default async function ToolPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const tool = TOOLS[resolvedParams.id];

  if (!tool) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">工具不存在</h1>
          <Link href="/tools" className="text-indigo-400 hover:text-indigo-300">← 返回工具库</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-white/5 bg-slate-950/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
                AI 工具导航站
              </span>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/tools" className="text-sm text-slate-300 hover:text-white transition-colors">工具库</Link>
              <Link href="/categories" className="text-sm text-slate-300 hover:text-white transition-colors">分类</Link>
              <Link href="/vip" className="text-sm text-slate-300 hover:text-white transition-colors">VIP 专区</Link>
              <Link href="/login" className="px-4 py-2 text-sm bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg font-medium hover:opacity-90 transition-opacity">
                登录
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-2xl flex items-center justify-center text-5xl flex-shrink-0">
              {tool.logo}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold">{tool.name}</h1>
                {tool.isVip && (
                  <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-medium">
                    VIP 专属
                  </span>
                )}
              </div>
              <p className="text-xl text-slate-400 mb-4">{tool.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white/5 rounded-full text-sm">{tool.category}</span>
                {tool.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-indigo-500/10 rounded-full text-sm text-indigo-400">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl font-medium hover:opacity-90 transition-opacity"
                >
                  访问官网 →
                </a>
                <button className="px-6 py-3 border border-white/20 rounded-xl font-medium hover:bg-white/10 transition-colors">
                  收藏
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="p-6 bg-white/5 rounded-2xl">
                <h2 className="text-2xl font-bold mb-4">工具介绍</h2>
                <p className="text-slate-300 leading-relaxed">{tool.longDesc}</p>
              </div>

              {/* Features */}
              <div className="p-6 bg-white/5 rounded-2xl">
                <h2 className="text-2xl font-bold mb-4">核心功能</h2>
                <ul className="space-y-3">
                  {tool.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-slate-300">
                      <span className="text-green-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing */}
              <div className="p-6 bg-white/5 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">价格</h3>
                <p className="text-2xl font-bold text-indigo-400">{tool.pricing}</p>
              </div>

              {/* Quick Info */}
              <div className="p-6 bg-white/5 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">基本信息</h3>
                <div className="space-y-3 text-slate-300">
                  <div className="flex justify-between">
                    <span>分类</span>
                    <span>{tool.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>平台</span>
                    <span>{tool.tags.find(t => t.includes("Web") || t.includes("App") || t.includes("Discord")) || "未知"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>语言</span>
                    <span>{tool.tags.find(t => t.includes("中文") || t.includes("英文") || t.includes("多语言")) || "未知"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span className="font-bold">AI 工具导航站</span>
            </div>
            <div className="text-slate-500 text-sm">
              © 2026 AI 工具导航站 · 保留所有权利
            </div>
            <div className="flex gap-6 text-sm text-slate-400">
              <Link href="/about" className="hover:text-white transition-colors">关于我们</Link>
              <Link href="/contact" className="hover:text-white transition-colors">联系我们</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">隐私政策</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
