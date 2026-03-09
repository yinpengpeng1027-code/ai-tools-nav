import Link from "next/link";

export default function VipPage() {
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
              <Link href="/vip" className="text-sm text-white font-medium">VIP 专区</Link>
              <Link href="/login" className="px-4 py-2 text-sm bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg font-medium hover:opacity-90 transition-opacity">
                登录
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -left-1/2 w-[100%] h-[100%] bg-gradient-to-br from-indigo-500/15 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-1/2 -right-1/2 w-[100%] h-[100%] bg-gradient-to-tl from-pink-500/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              解锁全部 AI 资源
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10">
            成为 VIP 会员，访问 80% 付费资源 + 深度教程 + 专属服务
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free */}
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
                <li className="flex items-center gap-3 text-slate-500">
                  <span className="text-slate-600">✗</span>
                  深度教程
                </li>
              </ul>
              <button className="w-full py-3 border border-white/20 rounded-xl font-medium hover:bg-white/10 transition-colors">
                当前套餐
              </button>
            </div>

            {/* VIP */}
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
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="text-green-500">✓</span>
                  优先工具更新通知
                </li>
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl font-medium hover:opacity-90 transition-opacity">
                立即开通
              </button>
            </div>

            {/* Premium */}
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
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="text-green-500">✓</span>
                  早期内测资格
                </li>
              </ul>
              <button className="w-full py-3 border border-white/20 rounded-xl font-medium hover:bg-white/10 transition-colors">
                联系咨询
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">常见问题</h2>
          <div className="space-y-6">
            <div className="p-6 bg-white/5 rounded-2xl">
              <h3 className="font-semibold text-lg mb-2">💳 支持哪些支付方式？</h3>
              <p className="text-slate-400">我们支持微信支付、支付宝、银行卡等多种支付方式。</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl">
              <h3 className="font-semibold text-lg mb-2">🔄 可以退款吗？</h3>
              <p className="text-slate-400">VIP 会员购买后 7 天内可无条件退款。</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl">
              <h3 className="font-semibold text-lg mb-2">📱 会员可以多人共享吗？</h3>
              <p className="text-slate-400">VIP 会员仅限单人使用，企业版支持团队共享。</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl">
              <h3 className="font-semibold text-lg mb-2">🔒 支付安全吗？</h3>
              <p className="text-slate-400">我们使用正规支付渠道，所有交易都有安全保障。</p>
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
