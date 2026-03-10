import Link from "next/link";

const CATEGORIES = ["文本生成", "图像设计", "视频制作", "音频处理", "办公效率", "数据分析", "对话机器人", "社交媒体", "开发工具", "学习教育"];

export function generateStaticParams() {
  return CATEGORIES.map((name) => ({ name }));
}

const TOOLS_BY_CATEGORY: Record<string, { id: number; name: string; description: string; logo: string; isVip: boolean; tags: string[] }[]> = {
  "文本生成": [
    { id: 1, name: "ChatGPT", description: "OpenAI 的智能对话 AI，支持多轮对话、代码生成、文案创作", logo: "🤖", isVip: false, tags: ["免费", "英文", "Web"] },
    { id: 6, name: "Jasper", description: "AI 营销文案生成器", logo: "✍️", isVip: false, tags: ["付费", "英文", "Web"] },
    { id: 7, name: "文心一言", description: "百度大语言模型，中文对话 AI", logo: "🇨🇳", isVip: false, tags: ["免费", "中文", "Web"] },
    { id: 8, name: "通义千问", description: "阿里大语言模型，多模态理解", logo: "🤖", isVip: false, tags: ["免费", "中文", "Web"] },
    { id: 15, name: "Kimi", description: "月之暗面大模型，超长上下文", logo: "🌙", isVip: false, tags: ["免费", "中文", "Web"] },
    { id: 16, name: "智谱清言", description: "智谱 AI 大模型", logo: "🧠", isVip: false, tags: ["免费", "中文", "Web"] },
  ],
  "图像设计": [
    { id: 2, name: "Midjourney", description: "AI 绘画工具，生成高质量艺术图像", logo: "🎨", isVip: true, tags: ["付费", "英文", "Discord"] },
    { id: 9, name: "Stable Diffusion", description: "开源 AI 绘画模型", logo: "🎨", isVip: false, tags: ["开源", "英文", "本地"] },
    { id: 10, name: "Canva AI", description: "AI 设计工具，一键生成海报、PPT", logo: "🎨", isVip: false, tags: ["免费增值", "多语言", "Web"] },
  ],
  "视频制作": [
    { id: 4, name: "Runway", description: "AI 视频生成和编辑工具", logo: "🎬", isVip: true, tags: ["付费", "英文", "Web"] },
    { id: 11, name: "剪映", description: "AI 视频剪辑工具", logo: "🎬", isVip: false, tags: ["免费", "中文", "Web/App"] },
  ],
  "音频处理": [
    { id: 5, name: "ElevenLabs", description: "AI 语音合成，逼真的多语言语音", logo: "🎵", isVip: true, tags: ["付费", "多语言", "Web"] },
    { id: 12, name: "Suno AI", description: "AI 音乐生成器", logo: "🎵", isVip: true, tags: ["付费", "英文", "Web"] },
  ],
  "办公效率": [
    { id: 3, name: "Notion AI", description: "智能笔记助手，自动总结、润色、翻译", logo: "📝", isVip: false, tags: ["付费", "多语言", "Web"] },
  ],
  "数据分析": [
    { id: 17, name: "Tableau AI", description: "智能数据分析与可视化", logo: "📊", isVip: true, tags: ["付费", "英文", "Web"] },
  ],
  "对话机器人": [
    { id: 18, name: "Character.AI", description: "创建和对话虚拟角色", logo: "🎭", isVip: false, tags: ["免费", "英文", "Web"] },
  ],
  "社交媒体": [
    { id: 19, name: "Jasper Art", description: "社交媒体图片生成", logo: "📱", isVip: true, tags: ["付费", "英文", "Web"] },
  ],
  "开发工具": [
    { id: 13, name: "Cursor", description: "AI 代码编辑器", logo: "💻", isVip: false, tags: ["免费增值", "英文", "桌面"] },
    { id: 14, name: "GitHub Copilot", description: "AI 编程助手", logo: "💻", isVip: true, tags: ["付费", "英文", "插件"] },
  ],
  "学习教育": [
    { id: 20, name: "Duolingo Max", description: "AI 语言学习助手", logo: "🦉", isVip: true, tags: ["付费", "多语言", "App"] },
  ],
};

const categoryColors: Record<string, string> = {
  "文本生成": "from-blue-500 to-cyan-500",
  "图像设计": "from-purple-500 to-pink-500",
  "视频制作": "from-red-500 to-orange-500",
  "音频处理": "from-green-500 to-emerald-500",
  "办公效率": "from-indigo-500 to-blue-500",
  "数据分析": "from-yellow-500 to-amber-500",
  "对话机器人": "from-violet-500 to-purple-500",
  "社交媒体": "from-pink-500 to-rose-500",
  "开发工具": "from-slate-500 to-gray-500",
  "学习教育": "from-teal-500 to-cyan-500",
};

const categoryIcons: Record<string, string> = {
  "文本生成": "📝",
  "图像设计": "🎨",
  "视频制作": "🎬",
  "音频处理": "🎵",
  "办公效率": "💼",
  "数据分析": "📊",
  "对话机器人": "🤖",
  "社交媒体": "📱",
  "开发工具": "💻",
  "学习教育": "🎓",
};

export default async function CategoryPage({ params }: { params: Promise<{ name: string }> }) {
  const resolvedParams = await params;
  const categoryName = decodeURIComponent(resolvedParams.name);
  const tools = TOOLS_BY_CATEGORY[categoryName] || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
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
              <Link href="/login" className="px-4 py-2 text-sm bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg font-medium hover:opacity-90 transition-opacity">登录</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className={`py-16 border-b border-white/5 bg-gradient-to-r ${categoryColors[categoryName] || "from-indigo-500 to-pink-500"} bg-opacity-10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{categoryIcons[categoryName] || "📁"}</span>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold">{categoryName}</h1>
              <p className="text-slate-300 text-lg">{tools.length} 个工具收录</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {tools.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <Link key={tool.id} href={`/tool/${tool.id}`} className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-xl">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      {tool.logo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg truncate">{tool.name}</h3>
                        {tool.isVip && <span className="px-2 py-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 rounded text-xs font-medium">VIP</span>}
                      </div>
                      <p className="text-slate-400 text-sm line-clamp-2">{tool.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tool.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-indigo-500/10 rounded text-xs text-indigo-400">{tag}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-slate-400 text-lg">该分类暂无工具收录</p>
              <Link href="/categories" className="mt-4 inline-block text-indigo-400 hover:text-indigo-300">← 返回分类列表</Link>
            </div>
          )}
        </div>
      </section>

      <footer className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span className="font-bold">AI 工具导航站</span>
            </div>
            <div className="text-slate-500 text-sm">© 2026 AI 工具导航站 · 保留所有权利</div>
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
