'use client';

import Link from 'next/link';

const LEARNING_PATH = [
  {
    day: 'Day 1',
    title: '安装与配置',
    desc: '系统要求、Node.js 安装、onboard 向导、配置第一个消息通道',
    icon: '🚀',
  },
  {
    day: 'Day 2',
    title: '理解架构',
    desc: 'Gateway、Node、Brain 核心组件，会话管理和路由机制',
    icon: '🧠',
  },
  {
    day: 'Day 3',
    title: '技能安装',
    desc: '探索 ClawHub 技能市场，安装常用技能，权限管理',
    icon: '⚡',
  },
  {
    day: 'Day 4',
    title: '记忆系统',
    desc: 'MEMORY.md、每日笔记、长期记忆管理',
    icon: '💾',
  },
  {
    day: 'Day 5',
    title: '定时任务',
    desc: 'Cron 配置、心跳机制、主动式提醒',
    icon: '⏰',
  },
  {
    day: 'Day 6',
    title: '多 Agent 协作',
    desc: '配置六部制、subagent 调度、任务分发',
    icon: '🤝',
  },
  {
    day: 'Day 7',
    title: '高级自动化',
    desc: '工作流设计、API 集成、自定义技能开发',
    icon: '🔧',
  },
];

const FEATURES = [
  {
    icon: '🧠',
    title: '多平台连接',
    desc: 'WhatsApp、Telegram、Discord、飞书等，随时随地与 AI 对话',
  },
  {
    icon: '⚡',
    title: '5494+ 技能',
    desc: '从天气查询到代码生成，一键安装社区技能',
  },
  {
    icon: '🔒',
    title: '自托管部署',
    desc: '数据主权在你手中，隐私安全完全掌控',
  },
  {
    icon: '🎯',
    title: '主动式 Agent',
    desc: '心跳机制、定时任务，AI 主动为你服务',
  },
];

const RESOURCES = [
  {
    tag: '官方',
    tagColor: 'orange',
    title: 'OpenClaw 官方文档',
    desc: '完整的 API 参考、配置指南和架构说明',
    url: 'https://docs.openclaw.ai',
    source: 'docs.openclaw.ai',
  },
  {
    tag: '源码',
    tagColor: 'slate',
    title: 'GitHub 仓库',
    desc: '源代码、Issue 跟踪和社区贡献 (303k+ ⭐)',
    url: 'https://github.com/openclaw/openclaw',
    source: 'github.com',
  },
  {
    tag: '技能',
    tagColor: 'orange',
    title: 'ClawHub 技能市场',
    desc: '发现、安装和分享 AI 技能插件',
    url: 'https://clawhub.ai',
    source: 'clawhub.ai',
  },
  {
    tag: '中文',
    tagColor: 'red',
    title: '阿里云部署指南',
    desc: '轻量应用服务器一键部署，可视化配置',
    url: 'https://help.aliyun.com/zh/simple-application-server/use-cases/quickly-deploy-and-use-openclaw',
    source: 'aliyun.com',
  },
  {
    tag: '中文',
    tagColor: 'red',
    title: '腾讯云接入飞书',
    desc: 'Lighthouse 一键部署 + 飞书机器人全流程',
    url: 'https://cloud.tencent.com/developer/article/2625073',
    source: 'tencent.com',
  },
  {
    tag: '视频',
    tagColor: 'pink',
    title: 'B 站视频教程',
    desc: '国内网络使用 + 本地部署详细视频',
    url: 'https://www.bilibili.com/video/BV1kH6nBFEPq/',
    source: 'bilibili.com',
  },
];

export default function OpenClawPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-amber-50">
      {/* Navigation */}
      <nav className="border-b border-orange-100 bg-white/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="text-2xl">🦞</span>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                OpenClaw 部署指南
              </span>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                返回导航站
              </Link>
              <a
                href="https://docs.openclaw.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-md"
              >
                官方文档 →
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -left-1/2 w-[100%] h-[100%] bg-gradient-to-br from-orange-400/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -right-1/2 w-[100%] h-[100%] bg-gradient-to-tl from-amber-400/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 border border-orange-200 rounded-full text-orange-600 text-sm mb-6">
            <span>🦞</span>
            <span>开源 AI 助理平台</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              7 天掌握 OpenClaw
            </span>
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            你的 24/7 个人 AI 助理，真正能做事的家伙
            <br />
            <span className="text-slate-500">
              从安装配置到高级自动化，循序渐进成为高手
            </span>
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#deploy"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold text-lg shadow-lg shadow-green-500/30 hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              <span>🚀</span>
              <span>一键部署（付费）</span>
            </a>
            <a
              href="https://github.com/openclaw/openclaw"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white border border-orange-200 text-orange-600 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-colors shadow-md"
            >
              ⭐ 免费自学
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 bg-orange-50 border border-orange-200 rounded-2xl hover:bg-orange-100 hover:border-orange-300 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-lg text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-2">
                5494+
              </div>
              <div className="text-slate-600 font-medium">社区技能</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-2">
                31
              </div>
              <div className="text-slate-600 font-medium">技能分类</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-2">
                391+
              </div>
              <div className="text-slate-600 font-medium">精选教程</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-2">
                开源
              </div>
              <div className="text-slate-600 font-medium">MIT 许可</div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 bg-white border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              7 天学习路径
            </h2>
            <p className="text-slate-600 text-lg">
              每天一个主题，循序渐进掌握所有能力
            </p>
          </div>

          <div className="grid md:grid-cols-7 gap-4">
            {LEARNING_PATH.map((item, idx) => (
              <div
                key={idx}
                className="relative group"
              >
                <div className="p-6 bg-orange-50 border border-orange-200 rounded-2xl hover:bg-orange-100 hover:border-orange-300 transition-all duration-300 h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-bold text-lg mb-4 shadow-md">
                    {idx + 1}
                  </div>
                  <div className="text-xs text-orange-600 font-semibold mb-2">
                    {item.day}
                  </div>
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-semibold text-slate-900 mb-2">
                    {item.title}
                  </div>
                  <div className="text-xs text-slate-500">
                    {item.desc}
                  </div>
                </div>
                {idx < LEARNING_PATH.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-orange-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Install Command */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
            一键安装技能
          </h2>
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-slate-900 text-white rounded-xl font-mono text-sm shadow-lg">
            <code>npx clawhub@latest install {'<skill-name>'}</code>
            <button
              className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg text-xs transition-colors font-sans"
              onClick={() => {
                navigator.clipboard.writeText('npx clawhub@latest install skill-name');
                alert('命令已复制！');
              }}
            >
              复制
            </button>
          </div>
          <p className="text-slate-600 mt-4">
            替换 {'<skill-name>'} 为你想要的技能名称，例如：weather、github、tavily-search
          </p>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-white border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              精选资源
            </h2>
            <p className="text-slate-600 text-lg">
              391+ 教程与指南，一站式获取最佳学习资源
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {RESOURCES.map((resource) => (
              <a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-orange-50 border border-orange-200 rounded-2xl hover:bg-orange-100 hover:border-orange-300 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      resource.tagColor === 'orange'
                        ? 'bg-orange-200 text-orange-700'
                        : resource.tagColor === 'red'
                        ? 'bg-red-200 text-red-700'
                        : resource.tagColor === 'pink'
                        ? 'bg-pink-200 text-pink-700'
                        : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {resource.tag}
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{resource.desc}</p>
                <div className="flex items-center gap-2 text-xs text-orange-600 font-medium">
                  <span>{resource.source}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* One-Click Deploy Section */}
      <section id="deploy" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm mb-6">
              <span>💎</span>
              <span>付费专业版</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              一键部署工具
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              不想折腾命令行？使用我们的一键部署工具，5 分钟完成所有配置
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {/* Free Version */}
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white mb-2">📖 免费自学</h3>
              <div className="text-4xl font-bold text-white mb-6">¥0</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="text-green-500">✓</span>
                  官方文档教程
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="text-green-500">✓</span>
                  社区支持
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="text-green-500">✓</span>
                  GitHub 开源代码
                </li>
                <li className="flex items-center gap-3 text-slate-500">
                  <span className="text-slate-600">✗</span>
                  需要命令行基础
                </li>
                <li className="flex items-center gap-3 text-slate-500">
                  <span className="text-slate-600">✗</span>
                  手动配置环境
                </li>
              </ul>
              <a
                href="https://docs.openclaw.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 text-center border border-white/20 rounded-xl font-medium text-white hover:bg-white/10 transition-colors"
              >
                开始自学
              </a>
            </div>

            {/* Pro Version */}
            <div className="relative p-8 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/50 rounded-3xl backdrop-blur-xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-sm font-bold shadow-lg">
                最受欢迎
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">🚀 一键部署</h3>
              <div className="text-4xl font-bold text-white mb-2">
                ¥99
                <span className="text-lg text-slate-400 font-normal">/永久</span>
              </div>
              <p className="text-slate-400 text-sm mb-6">早鸟价 ¥199 → ¥99</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-white">
                  <span className="text-green-500">✓</span>
                  Windows 一键安装程序 (.exe)
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-green-500">✓</span>
                  可视化配置界面
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-green-500">✓</span>
                  自动环境检测与修复
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-green-500">✓</span>
                  多通道配置向导（飞书/WhatsApp/Telegram）
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-green-500">✓</span>
                  一键启动/停止服务
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-green-500">✓</span>
                  开机自启动配置
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-green-500">✓</span>
                  专业技术支持群
                </li>
              </ul>
              <button
                onClick={() => {
                  alert('🦞 感谢购买！\n\n请扫码支付 ¥99，支付完成后自动下载部署工具。\n\n（此处集成支付接口）');
                }}
                className="block w-full py-4 text-center bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
              >
                立即购买
              </button>
              <p className="text-center text-slate-400 text-xs mt-4">
                🔒 安全支付 · 自动发货 · 永久使用
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl">
              <div className="text-4xl mb-4">💻</div>
              <h4 className="font-bold text-white mb-2">Windows 原生应用</h4>
              <p className="text-slate-400 text-sm">
                无需安装 Python、Node.js，双击即可运行，真正的零门槛
              </p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl">
              <div className="text-4xl mb-4">🎨</div>
              <h4 className="font-bold text-white mb-2">可视化界面</h4>
              <p className="text-slate-400 text-sm">
                图形化配置向导，每一步都有清晰提示，告别黑窗口
              </p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl">
              <div className="text-4xl mb-4">🛎️</div>
              <h4 className="font-bold text-white mb-2">技术支持</h4>
              <p className="text-slate-400 text-sm">
                专属技术支持群，遇到问题随时提问，快速解决
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              准备好开始了吗？
            </h2>
            <p className="text-orange-100 text-lg mb-8">
              选择适合你的方式，开启 AI 助理之旅
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#deploy"
                className="px-8 py-4 bg-white text-orange-600 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-colors shadow-lg"
              >
                💎 购买一键部署
              </a>
              <a
                href="https://docs.openclaw.ai/start/getting-started"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-orange-700 text-white rounded-xl font-semibold text-lg hover:bg-orange-600 transition-colors shadow-lg"
              >
                📖 免费自学文档
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-orange-100 bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="text-2xl">🦞</span>
              <span className="font-bold text-slate-900">OpenClaw 部署指南</span>
            </Link>
            <div className="text-slate-500 text-sm">
              © 2026 OpenClaw 部署指南 · 非官方导航站
            </div>
            <div className="flex gap-6 text-sm">
              <a
                href="https://docs.openclaw.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-orange-600 transition-colors"
              >
                官方文档
              </a>
              <a
                href="https://github.com/openclaw/openclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-orange-600 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://clawhub.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-orange-600 transition-colors"
              >
                ClawHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
