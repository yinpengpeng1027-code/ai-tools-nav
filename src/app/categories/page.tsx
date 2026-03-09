import Link from "next/link";

const CATEGORIES = [
  { name: "文本生成", icon: "📝", count: 200, color: "from-blue-500 to-cyan-500", desc: "AI 写作、翻译、润色、内容生成" },
  { name: "图像设计", icon: "🎨", count: 150, color: "from-purple-500 to-pink-500", desc: "文生图、图生图、图像编辑、Logo 设计" },
  { name: "视频制作", icon: "🎬", count: 100, color: "from-red-500 to-orange-500", desc: "视频生成、剪辑、特效、字幕" },
  { name: "音频处理", icon: "🎵", count: 80, color: "from-green-500 to-emerald-500", desc: "音乐生成、语音合成、播客制作" },
  { name: "办公效率", icon: "💼", count: 150, color: "from-indigo-500 to-blue-500", desc: "PPT、Excel、邮件、文档自动化" },
  { name: "数据分析", icon: "📊", count: 100, color: "from-yellow-500 to-amber-500", desc: "BI、可视化、数据洞察、报表" },
  { name: "对话机器人", icon: "🤖", count: 100, color: "from-violet-500 to-purple-500", desc: "客服、助手、陪伴、问答" },
  { name: "社交媒体", icon: "📱", count: 120, color: "from-pink-500 to-rose-500", desc: "运营、营销、增长、内容分发" },
  { name: "开发工具", icon: "💻", count: 150, color: "from-slate-500 to-gray-500", desc: "代码生成、测试、部署、DevOps" },
  { name: "学习教育", icon: "🎓", count: 100, color: "from-teal-500 to-cyan-500", desc: "课程、题库、辅导、语言学习" },
];

export default function CategoriesPage() {
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
              <Link href="/categories" className="text-sm text-white font-medium">分类</Link>
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
              浏览分类
            </span>
          </h1>
          <p className="text-slate-400 text-center text-lg">
            10 大专业分类，覆盖所有 AI 应用场景
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((category) => (
              <Link
                key={category.name}
                href={`/category/${encodeURIComponent(category.name)}`}
                className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-xl"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{category.name}</h3>
                <p className="text-slate-400 mb-4">{category.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">{category.count} 个工具</span>
                  <span className="text-indigo-400 group-hover:translate-x-2 transition-transform">→</span>
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
