import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-lg">⭐</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  星图 StarMap
                </span>
                <span className="text-xs text-slate-500 font-medium -mt-0.5">AI</span>
              </div>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/tools" className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium">工具库</Link>
              <Link href="/categories" className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium">分类</Link>
              <Link href="/vip" className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium">VIP 专区</Link>
              <Link href="/login" className="px-5 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5">
                登录
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 border-b border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              关于我们
            </span>
          </h1>
          <p className="text-xl text-slate-600 font-medium">
            国内最全面的 AI 工具发现与学习平台
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="p-8 bg-white border-2 border-slate-100 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-slate-900">🎯 我们的使命</h2>
              <p className="text-slate-700 leading-relaxed font-medium">
                在 AI 技术飞速发展的今天，每天都有新的 AI 工具涌现。我们致力于帮助用户快速发现、了解和使用最适合的 AI 工具，
                让每个人都能享受到 AI 技术带来的便利。
              </p>
            </div>

            <div className="p-8 bg-white border-2 border-slate-100 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-slate-900">✨ 我们的特色</h2>
              <ul className="space-y-3 text-slate-700 font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">•</span>
                  <span><strong>全面收录</strong>：2000+ AI 工具，覆盖 10 大专业分类</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">•</span>
                  <span><strong>精选推荐</strong>：编辑团队精心筛选，只推荐高质量工具</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">•</span>
                  <span><strong>实用教程</strong>：500+ 原创教程，助你快速上手</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">•</span>
                  <span><strong>中文友好</strong>：优先收录支持中文的工具，降低使用门槛</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-2 border-blue-200 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-slate-900">📬 联系我们</h2>
              <p className="text-slate-700 font-medium mb-4">
                有任何问题、建议或合作意向？欢迎通过以下方式联系我们：
              </p>
              <ul className="space-y-2 text-slate-700 font-medium">
                <li>📧 邮箱：contact@aitools-nav.com</li>
                <li>💬 微信：AI_Tools_Nav</li>
                <li>📱 微博：@AI 工具导航站</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span className="font-bold text-slate-900">AI 工具导航站</span>
            </div>
            <div className="text-slate-500 text-sm font-medium">
              © 2026 AI 工具导航站 · 保留所有权利
            </div>
            <div className="flex gap-6 text-sm text-slate-600 font-medium">
              <Link href="/about" className="hover:text-slate-900 transition-colors">关于我们</Link>
              <Link href="/contact" className="hover:text-slate-900 transition-colors">联系我们</Link>
              <Link href="/privacy" className="hover:text-slate-900 transition-colors">隐私政策</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
