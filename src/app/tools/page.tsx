import Link from "next/link";

const ALL_TOOLS = [
  { id: 1, name: "ChatGPT", description: "OpenAI 的智能对话 AI，支持多轮对话、代码生成、文案创作", category: "文本生成", logo: "🤖", isVip: false, url: "https://chat.openai.com", tags: ["免费", "英文", "Web"] },
  { id: 2, name: "Midjourney", description: "AI 绘画工具，生成高质量艺术图像", category: "图像设计", logo: "🎨", isVip: true, url: "https://midjourney.com", tags: ["付费", "英文", "Discord"] },
  { id: 3, name: "Notion AI", description: "智能笔记助手，自动总结、润色、翻译", category: "办公效率", logo: "📝", isVip: false, url: "https://notion.so", tags: ["付费", "多语言", "Web"] },
  { id: 4, name: "Runway", description: "AI 视频生成和编辑工具", category: "视频制作", logo: "🎬", isVip: true, url: "https://runwayml.com", tags: ["付费", "英文", "Web"] },
  { id: 5, name: "ElevenLabs", description: "AI 语音合成，逼真的多语言语音", category: "音频处理", logo: "🎵", isVip: true, url: "https://elevenlabs.io", tags: ["付费", "多语言", "Web"] },
  { id: 6, name: "Jasper", description: "AI 营销文案生成器", category: "文本生成", logo: "✍️", isVip: false, url: "https://jasper.ai", tags: ["付费", "英文", "Web"] },
  { id: 7, name: "文心一言", description: "百度大语言模型，中文对话 AI", category: "文本生成", logo: "🇨🇳", isVip: false, url: "https://yiyan.baidu.com", tags: ["免费", "中文", "Web"] },
  { id: 8, name: "通义千问", description: "阿里大语言模型，多模态理解", category: "文本生成", logo: "🤖", isVip: false, url: "https://tongyi.aliyun.com", tags: ["免费", "中文", "Web"] },
  { id: 9, name: "Stable Diffusion", description: "开源 AI 绘画模型", category: "图像设计", logo: "🎨", isVip: false, url: "https://stability.ai", tags: ["开源", "英文", "本地"] },
  { id: 10, name: "Canva AI", description: "AI 设计工具，一键生成海报、PPT", category: "图像设计", logo: "🎨", isVip: false, url: "https://canva.com", tags: ["免费增值", "多语言", "Web"] },
  { id: 11, name: "剪映", description: "AI 视频剪辑工具", category: "视频制作", logo: "🎬", isVip: false, url: "https://capcut.cn", tags: ["免费", "中文", "Web/App"] },
  { id: 12, name: "Suno AI", description: "AI 音乐生成器", category: "音频处理", logo: "🎵", isVip: true, url: "https://suno.ai", tags: ["付费", "英文", "Web"] },
  { id: 13, name: "Cursor", description: "AI 代码编辑器", category: "开发工具", logo: "💻", isVip: false, url: "https://cursor.sh", tags: ["免费增值", "英文", "桌面"] },
  { id: 14, name: "GitHub Copilot", description: "AI 编程助手", category: "开发工具", logo: "💻", isVip: true, url: "https://github.com/features/copilot", tags: ["付费", "英文", "插件"] },
  { id: 15, name: "Kimi", description: "月之暗面大模型，超长上下文", category: "文本生成", logo: "🌙", isVip: false, url: "https://kimi.moonshot.cn", tags: ["免费", "中文", "Web"] },
  { id: 16, name: "智谱清言", description: "智谱 AI 大模型", category: "文本生成", logo: "🧠", isVip: false, url: "https://chatglm.cn", tags: ["免费", "中文", "Web"] },
];

const CATEGORIES = [
  { name: "文本生成", icon: "📝", count: 200, color: "from-blue-500 to-cyan-500" },
  { name: "图像设计", icon: "🎨", count: 150, color: "from-purple-500 to-pink-500" },
  { name: "视频制作", icon: "🎬", count: 100, color: "from-red-500 to-orange-500" },
  { name: "音频处理", icon: "🎵", count: 80, color: "from-green-500 to-emerald-500" },
  { name: "办公效率", icon: "💼", count: 150, color: "from-indigo-500 to-blue-500" },
  { name: "数据分析", icon: "📊", count: 100, color: "from-yellow-500 to-amber-500" },
  { name: "对话机器人", icon: "🤖", count: 100, color: "from-violet-500 to-purple-500" },
  { name: "社交媒体", icon: "📱", count: 120, color: "from-pink-500 to-rose-500" },
  { name: "开发工具", icon: "💻", count: 150, color: "from-slate-500 to-gray-500" },
  { name: "学习教育", icon: "🎓", count: 100, color: "from-teal-500 to-cyan-500" },
];

export default function ToolsPage() {
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
              <Link href="/tools" className="text-sm text-white font-medium">工具库</Link>
              <Link href="/categories" className="text-sm text-slate-300 hover:text-white transition-colors">分类</Link>
              <Link href="/vip" className="text-sm text-slate-300 hover:text-white transition-colors">VIP 专区</Link>
              <Link href="/login" className="px-4 py-2 text-sm bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg font-medium hover:opacity-90 transition-opacity">
                登录
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              全部 AI 工具
            </span>
          </h1>
          <p className="text-slate-400 text-center text-lg">
            收录 {ALL_TOOLS.length}+ 优质 AI 工具，持续更新中
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ALL_TOOLS.map((tool) => (
              <Link
                key={tool.id}
                href={`/tool/${tool.id}`}
                className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-xl"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    {tool.logo}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-lg truncate">{tool.name}</h3>
                      {tool.isVip && (
                        <span className="px-2 py-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 rounded text-xs font-medium">
                          VIP
                        </span>
                      )}
                    </div>
                    <p className="text-slate-400 text-sm line-clamp-2">{tool.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/5 rounded text-xs text-slate-400">{tool.category}</span>
                  {tool.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-indigo-500/10 rounded text-xs text-indigo-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
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
