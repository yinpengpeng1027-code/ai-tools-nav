import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <BrandLogo size="small" withText={true} />
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
              隐私政策
            </span>
          </h1>
          <p className="text-xl text-slate-600 font-medium">
            我们重视并保护您的个人隐私
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="p-8 bg-white border-2 border-slate-100 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-slate-900">📋 信息收集</h2>
              <p className="text-slate-700 leading-relaxed font-medium mb-4">
                我们仅收集为您提供服务所必需的信息，包括：
              </p>
              <ul className="space-y-2 text-slate-700 font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500">•</span>
                  <span>注册账户时提供的邮箱地址</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500">•</span>
                  <span>使用服务时产生的必要日志信息</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500">•</span>
                  <span>Cookie 和类似技术收集的浏览偏好</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border-2 border-slate-100 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-slate-900">🔒 信息使用</h2>
              <p className="text-slate-700 leading-relaxed font-medium">
                我们承诺不会向第三方出售、出租或交易您的个人信息。我们仅在以下情况下使用您的信息：
              </p>
              <ul className="space-y-2 text-slate-700 font-medium mt-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500">•</span>
                  <span>提供、维护和改进我们的服务</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500">•</span>
                  <span>向您发送服务相关的通知</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500">•</span>
                  <span>保护我们的权利和用户的安全</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border-2 border-slate-100 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-slate-900">🛡️ 信息安全</h2>
              <p className="text-slate-700 leading-relaxed font-medium">
                我们采用行业标准的安全措施来保护您的个人信息，包括加密传输、访问控制和定期安全审计。
                然而，请注意互联网传输并非绝对安全，我们无法保证 100% 的安全性。
              </p>
            </div>

            <div className="p-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-2 border-blue-200 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-slate-900">📞 联系我们</h2>
              <p className="text-slate-700 font-medium">
                如果您对本隐私政策有任何疑问或担忧，请通过 contact@aitools-nav.com 联系我们。
              </p>
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
