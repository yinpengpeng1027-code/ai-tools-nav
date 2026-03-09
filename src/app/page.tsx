import Link from "next/link";

// 模拟工具数据（后续从数据库获取）
const FEATURED_TOOLS = [
  { id: 1, name: "ChatGPT", description: "OpenAI 的智能对话 AI", category: "文本生成", logo: "🤖", isVip: false },
  { id: 2, name: "Midjourney", description: "AI 绘画工具", category: "图像设计", logo: "🎨", isVip: true },
  { id: 3, name: "Notion AI", description: "智能笔记助手", category: "办公效率", logo: "📝", isVip: false },
  { id: 4, name: "Runway", description: "AI 视频生成", category: "视频制作", logo: "🎬", isVip: true },
  { id: 5, name: "ElevenLabs", description: "AI 语音合成", category: "音频处理", logo: "🎵", isVip: true },
  { id: 6, name: "Jasper", description: "AI 营销文案", category: "文本生成", logo: "✍️", isVip: false },
];

const CATEGORIES = [
  { name: "文本生成", icon: "📝", count: 200 },
  { name: "图像设计", icon: "🎨", count: 150 },
  { name: "视频制作", icon: "🎬", count: 100 },
  { name: "音频处理", icon: "🎵", count: 80 },
  { name: "办公效率", icon: "💼", count: 150 },
  { name: "数据分析", icon: "📊", count: 100 },
  { name: "对话机器人", icon: "🤖", count: 100 },
  { name: "社交媒体", icon: "📱", count: 120 },
  { name: "开发工具", icon: "💻", count: 150 },
  { name: "学习教育", icon: "🎓", count: 100 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-white/5 bg-slate-950/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
                AI 工具导航站
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/tools" className="text-sm text-slate-300 hover:text-white transition-colors">
                工具库
              </Link>
              <Link href="/categories" className="text-sm text-slate-300 hover:text-white transition-colors">
                分类
              </Link>
              <Link href="/vip" className="text-sm text-slate-300 hover:text-white transition-colors">
                VIP 专区
              </Link>
              <button className="px-4 py-2 text-sm bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg font-medium hover:opacity-90 transition-opacity">
                登录
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -left-1/2 w-[100%] h-[100%] bg-gradient-to-br from-indigo-500/15 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-1/2 -right-1/2 w-[100%] h-[100%] bg-gradient-to-tl from-pink-500/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-sm mb-8">
            <span>🎉</span>
            <span>即将上线</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              发现最好的 AI 工具
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10">
            国内最全面的 AI 工具发现与学习平台
            <br />
            <span className="text-slate-500">60% 免费资源 + 40% 精选付费，助你快速掌握 AI 工具</span>
          </p>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="搜索 AI 工具、教程、资源..."
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent backdrop-blur-xl"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl font-medium hover:opacity-90 transition-opacity">
                搜索
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/30">
              🔔 抢先体验
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors backdrop-blur-xl">
              📖 了解更多
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent mb-2">
                2000+
              </div>
              <div className="text-slate-400">收录工具</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent mb-2">
                10+
              </div>
              <div className="text-slate-400">专业分类</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-slate-400">原创教程</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-slate-400">全天候服务</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">探索分类</h2>
            <p className="text-slate-400 text-lg">10 大专业分类，覆盖所有 AI 应用场景</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {CATEGORIES.map((category) => (
              <Link
                key={category.name}
                href={`/category/${category.name}`}
                className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-xl"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <div className="font-medium mb-1">{category.name}</div>
                <div className="text-sm text-slate-500">{category.count} 个工具</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">精选工具</h2>
              <p className="text-slate-400 text-lg">编辑精选，高质量 AI 工具推荐</p>
            </div>
            <Link href="/tools" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              查看全部 →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_TOOLS.map((tool) => (
              <Link
                key={tool.id}
                href={`/tool/${tool.id}`}
                className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
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
                    <p className="text-slate-400 text-sm mb-2 line-clamp-2">{tool.description}</p>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="px-2 py-1 bg-white/5 rounded">{tool.category}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">会员计划</h2>
            <p className="text-slate-400 text-lg">选择适合你的方案，解锁更多优质资源</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl">
              <div className="text-2xl font-bold mb-2">🆓 免费版</div>
              <div className="text-4xl font-bold mb-6">
                ¥0
                <span className="text-lg text-slate-400 font-normal">/永久</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="text-green-500">✓</span>
                  访问 60% 免费资源
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="text-green-500">✓</span>
                  基础搜索功能
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="text-green-500">✓</span>
                  收藏工具
                </li>
                <li className="flex items-center gap-3 text-slate-500">
                  <span className="text-slate-600">✗</span>
                  VIP 专属内容
                </li>
              </ul>
              <button className="w-full py-3 border border-white/20 rounded-xl font-medium hover:bg-white/10 transition-colors">
                免费注册
              </button>
            </div>

            <div className="relative p-8 bg-gradient-to-b from-indigo-500/10 to-pink-500/10 border border-indigo-500/30 rounded-3xl backdrop-blur-xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-medium">
                最受欢迎
              </div>
              <div className="text-2xl font-bold mb-2">💎 VIP 会员</div>
              <div className="text-4xl font-bold mb-6">
                ¥168
                <span className="text-lg text-slate-400 font-normal">/年</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="text-green-500">✓</span>
                  访问 80% 付费资源
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="text-green-500">✓</span>
                  深度教程与方案
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="text-green-500">✓</span>
                  无广告体验
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="text-green-500">✓</span>
                  专属客服支持
                </li>
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl font-medium hover:opacity-90 transition-opacity">
                立即开通
              </button>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl">
              <div className="text-2xl font-bold mb-2">👑 私域高端</div>
              <div className="text-4xl font-bold mb-6">
                ¥999
                <span className="text-lg text-slate-400 font-normal">/年起</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="text-green-500">✓</span>
                  100% 资源访问
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="text-green-500">✓</span>
                  1v1 咨询服务
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="text-green-500">✓</span>
                  私董会门票
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="text-green-500">✓</span>
                  企业定制服务
                </li>
              </ul>
              <button className="w-full py-3 border border-white/20 rounded-xl font-medium hover:bg-white/10 transition-colors">
                联系咨询
              </button>
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
