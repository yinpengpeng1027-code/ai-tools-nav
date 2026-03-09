import Link from "next/link";

export default function AboutPage() {
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
              关于我们
            </span>
          </h1>
          <p className="text-xl text-slate-400">
            国内最全面的 AI 工具发现与学习平台
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg">
            <div className="p-8 bg-white/5 rounded-3xl mb-8">
              <h2 className="text-2xl font-bold mb-4">🎯 我们的使命</h2>
              <p className="text-slate-300 leading-relaxed">
                在 AI 技术飞速发展的今天，每天都有新的 AI 工具涌现。我们致力于帮助用户快速发现、了解和使用最适合的 AI 工具，
                让每个人都能享受到 AI 技术带来的便利。
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-3xl mb-8">
              <h2 className="text-2xl font-bold mb-4">📊 平台特色</h2>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-500">✓</span>
                  <span><strong>60% 免费资源</strong> - 海量免费 AI 工具、开源项目、入门教程，零门槛开启 AI 之旅</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500">✓</span>
                  <span><strong>20% 付费精选</strong> - 深度教程、行业方案、专业评测，VIP 会员专享高价值内容</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500">✓</span>
                  <span><strong>20% 私域高端</strong> - 早期内测、1v1 咨询、私董会，为企业和个人提供定制服务</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500">✓</span>
                  <span><strong>10 大专业分类</strong> - 文本生成、图像设计、视频制作、音频处理等全覆盖</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white/5 rounded-3xl mb-8">
              <h2 className="text-2xl font-bold mb-4">👥 团队介绍</h2>
              <p className="text-slate-300 leading-relaxed">
                我们是一群热爱 AI 技术的开发者、设计师和产品经理，来自国内知名互联网公司和 AI 初创企业。
                我们深知在海量 AI 工具中找到合适工具的困难，因此创建了这样一个平台。
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-3xl">
              <h2 className="text-2xl font-bold mb-4">📬 联系我们</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                如果您有任何问题、建议或合作意向，欢迎通过以下方式联系我们：
              </p>
              <ul className="space-y-2 text-slate-300">
                <li>📧 邮箱：contact@ai-tools-nav.com</li>
                <li>💬 微信：AI_Tools_Nav</li>
                <li>🐦 微博：@AI 工具导航站</li>
              </ul>
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
              <Link href="/about" className="text-white">关于我们</Link>
              <Link href="/contact" className="hover:text-white transition-colors">联系我们</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">隐私政策</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
