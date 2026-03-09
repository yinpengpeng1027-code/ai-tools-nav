import Link from "next/link";

export default function ContactPage() {
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
      <section className="py-24 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              联系我们
            </span>
          </h1>
          <p className="text-xl text-slate-400">
            有任何问题或建议？我们随时为您服务
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-6 bg-white/5 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">📧 邮箱联系</h3>
                <p className="text-slate-300 mb-2">一般咨询</p>
                <a href="mailto:contact@ai-tools-nav.com" className="text-indigo-400 hover:text-indigo-300">
                  contact@ai-tools-nav.com
                </a>
                <p className="text-slate-300 mt-4 mb-2">商务合作</p>
                <a href="mailto:business@ai-tools-nav.com" className="text-indigo-400 hover:text-indigo-300">
                  business@ai-tools-nav.com
                </a>
              </div>

              <div className="p-6 bg-white/5 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">💬 社交媒体</h3>
                <ul className="space-y-3 text-slate-300">
                  <li>🐦 微博：@AI 工具导航站</li>
                  <li>📱 微信公众号：AI 工具导航</li>
                  <li>💬 知识星球：AI 工具精选</li>
                </ul>
              </div>

              <div className="p-6 bg-white/5 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">🏢 公司地址</h3>
                <p className="text-slate-300">
                  北京市海淀区<br />
                  中关村科技园<br />
                  创新大厦 A 座 1001 室
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 bg-white/5 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">在线留言</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">姓名</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    placeholder="您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">邮箱</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">主题</label>
                  <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50">
                    <option>一般咨询</option>
                    <option>商务合作</option>
                    <option>问题反馈</option>
                    <option>工具推荐</option>
                    <option>其他</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">留言内容</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none"
                    placeholder="请详细描述您的问题或建议..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl font-medium hover:opacity-90 transition-opacity"
                >
                  提交留言
                </button>
              </form>
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
              <Link href="/contact" className="text-white">联系我们</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">隐私政策</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
