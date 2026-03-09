import Link from "next/link";

export default function PrivacyPage() {
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
              隐私政策
            </span>
          </h1>
          <p className="text-xl text-slate-400">
            最后更新：2026 年 3 月 9 日
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg">
            <div className="p-8 bg-white/5 rounded-3xl mb-8">
              <h2 className="text-2xl font-bold mb-4">1. 信息收集</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                我们可能会收集以下类型的信息：
              </p>
              <ul className="space-y-2 text-slate-300">
                <li>• <strong>个人信息</strong>：当您注册账户时，我们可能会收集您的邮箱地址、昵称等</li>
                <li>• <strong>使用数据</strong>：我们可能会收集您访问页面的记录、搜索历史等</li>
                <li>• <strong>设备信息</strong>：我们可能会收集您的设备类型、浏览器类型、IP 地址等</li>
              </ul>
            </div>

            <div className="p-8 bg-white/5 rounded-3xl mb-8">
              <h2 className="text-2xl font-bold mb-4">2. 信息使用</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                我们收集的信息将用于以下目的：
              </p>
              <ul className="space-y-2 text-slate-300">
                <li>• 提供、维护和改进我们的服务</li>
                <li>• 向您发送服务相关的通知</li>
                <li>• 分析用户行为，优化产品体验</li>
                <li>• 防止欺诈和滥用行为</li>
              </ul>
            </div>

            <div className="p-8 bg-white/5 rounded-3xl mb-8">
              <h2 className="text-2xl font-bold mb-4">3. 信息共享</h2>
              <p className="text-slate-300 leading-relaxed">
                我们不会向第三方出售、出租或交易您的个人信息。我们可能在以下情况下共享您的信息：
              </p>
              <ul className="space-y-2 text-slate-300 mt-4">
                <li>• 获得您的明确同意</li>
                <li>• 遵守法律法规要求</li>
                <li>• 与服务提供商合作（如云存储、邮件服务等）</li>
              </ul>
            </div>

            <div className="p-8 bg-white/5 rounded-3xl mb-8">
              <h2 className="text-2xl font-bold mb-4">4. 数据安全</h2>
              <p className="text-slate-300 leading-relaxed">
                我们采取合理的技术和组织措施来保护您的个人信息安全，包括但不限于：
              </p>
              <ul className="space-y-2 text-slate-300 mt-4">
                <li>• 数据加密传输（HTTPS）</li>
                <li>• 定期安全审计</li>
                <li>• 访问权限控制</li>
                <li>• 数据备份和灾难恢复</li>
              </ul>
            </div>

            <div className="p-8 bg-white/5 rounded-3xl mb-8">
              <h2 className="text-2xl font-bold mb-4">5. 您的权利</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                您对自己的个人信息享有以下权利：
              </p>
              <ul className="space-y-2 text-slate-300">
                <li>• 访问您的个人信息</li>
                <li>• 更正不准确的个人信息</li>
                <li>• 删除您的个人信息</li>
                <li>• 撤回同意</li>
                <li>• 数据可携带性</li>
              </ul>
            </div>

            <div className="p-8 bg-white/5 rounded-3xl">
              <h2 className="text-2xl font-bold mb-4">6. 联系我们</h2>
              <p className="text-slate-300 leading-relaxed">
                如果您对本隐私政策有任何疑问或顾虑，请通过以下方式联系我们：
              </p>
              <p className="text-indigo-400 mt-2">
                📧 privacy@ai-tools-nav.com
              </p>
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
              <Link href="/privacy" className="text-white">隐私政策</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
