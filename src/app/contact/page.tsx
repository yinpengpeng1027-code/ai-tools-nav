import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3"><div className="w-9 h-9 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-md"><span className="text-lg">⭐</span></div><div className="flex flex-col"><span className="text-base font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">星图 StarMap</span><span className="text-xs text-slate-500 font-medium -mt-0.5">AI</span></div></Link>
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
              联系我们
            </span>
          </h1>
          <p className="text-xl text-slate-600 font-medium">
            有任何问题或建议？我们随时为您服务
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 bg-white border-2 border-slate-100 rounded-3xl shadow-2xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">姓名</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                  placeholder="您的姓名"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">邮箱</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">主题</label>
                <select className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300">
                  <option>合作咨询</option>
                  <option>问题反馈</option>
                  <option>功能建议</option>
                  <option>其他</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">留言</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-none"
                  placeholder="请详细描述您的问题或建议..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                发送消息
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border-2 border-slate-100 rounded-2xl text-center shadow-lg">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-bold text-slate-900 mb-2">邮箱</h3>
              <p className="text-slate-600 font-medium">contact@aitools-nav.com</p>
            </div>
            <div className="p-6 bg-white border-2 border-slate-100 rounded-2xl text-center shadow-lg">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-bold text-slate-900 mb-2">微信</h3>
              <p className="text-slate-600 font-medium">AI_Tools_Nav</p>
            </div>
            <div className="p-6 bg-white border-2 border-slate-100 rounded-2xl text-center shadow-lg">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold text-slate-900 mb-2">微博</h3>
              <p className="text-slate-600 font-medium">@AI 工具导航站</p>
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
