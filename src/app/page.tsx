'use client';

import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import SearchBar from "@/components/SearchBar";
import ToolLogo from "@/components/Logo";
import {
  FadeIn,
  SlideDown,
  HoverCard,
  ClickButton,
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  PulseBackground,
  ShineEffect
} from "@/components/animations";

// 模拟工具数据
const FEATURED_TOOLS = [
  { id: 1, name: "ChatGPT", description: "OpenAI 的智能对话 AI", category: "文本生成", logo: "🤖", url: "https://chatgpt.com" },
  { id: 2, name: "Midjourney", description: "AI 绘画工具", category: "图像设计", logo: "🎨", url: "https://midjourney.com" },
  { id: 3, name: "Notion AI", description: "智能笔记助手", category: "办公效率", logo: "📝", url: "https://notion.so" },
  { id: 4, name: "Runway", description: "AI 视频生成", category: "视频制作", logo: "🎬", url: "https://runwayml.com" },
  { id: 5, name: "ElevenLabs", description: "AI 语音合成", category: "音频处理", logo: "🎵", url: "https://elevenlabs.io" },
  { id: 6, name: "Jasper", description: "AI 营销文案", category: "文本生成", logo: "✍️", url: "https://jasper.ai" },
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

const STATS = [
  { value: "2000+", label: "收录工具" },
  { value: "10+", label: "专业分类" },
  { value: "500+", label: "原创教程" },
  { value: "24/7", label: "全天候服务" },
];

export default function Home() {
  const handleSearch = (query: string) => {
    console.log('Searching:', query);
    // TODO: 实现搜索跳转
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 overflow-hidden">
      {/* Navigation */}
      <SlideDown>
        <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-xl sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <BrandLogo size="small" withText={true} />
              </Link>
              <div className="flex items-center gap-6">
                <Link href="/tools" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                  工具库
                </Link>
                <Link href="/categories" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                  分类
                </Link>
                <Link href="/openclaw" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                  OpenClaw 课程
                </Link>
                <ClickButton className="px-4 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-md">
                  登录
                </ClickButton>
              </div>
            </div>
          </div>
        </nav>
      </SlideDown>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <PulseBackground colors={['from-blue-400/10']} className="top-0 left-1/4 w-[600px] h-[600px]" />
          <PulseBackground colors={['from-purple-400/10']} className="bottom-0 right-1/4 w-[500px] h-[500px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-600 text-sm mb-8">
              <span>🎉</span>
              <span>即将上线</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-5xl sm:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                星图 StarMap
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-2xl sm:text-3xl font-medium text-slate-700 max-w-3xl mx-auto mb-6">
              发现最好的 AI 工具
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
              国内最全面的 AI 工具发现与学习平台
              <br />
              <span className="text-slate-500">60% 免费资源 + 40% 精选付费，助你快速掌握 AI 工具</span>
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="max-w-2xl mx-auto mb-12">
              <SearchBar
                size="large"
                placeholder="搜索 AI 工具、教程、资源..."
                onSearch={handleSearch}
                showSearchButton={true}
                showFilters={true}
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex flex-wrap justify-center gap-4">
              <ClickButton className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/30 hover:opacity-90 transition-opacity">
                🔔 抢先体验
              </ClickButton>
              <ClickButton className="px-8 py-4 bg-white border border-slate-200 rounded-xl font-semibold text-lg hover:bg-slate-50 transition-colors shadow-md">
                📖 了解更多
              </ClickButton>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* OpenClaw Quick Start Section */}
      <ScrollReveal direction="up">
        <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 border-y border-orange-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 border border-orange-200 rounded-full text-orange-600 text-sm mb-6">
                  <span>🦞</span>
                  <span>开源 AI 助理平台</span>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                  7 天掌握 OpenClaw
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                  你的 24/7 个人 AI 助理，真正能做事的家伙<br/>
                  从安装配置到高级自动化，循序渐进成为高手
                </p>
              </FadeIn>
            </div>

            {/* OpenClaw Features */}
            <StaggerContainer>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <StaggerItem>
                  <ShineEffect className="h-full">
                    <HoverCard className="group p-6 bg-white border border-orange-200 rounded-2xl h-full">
                      <div className="text-4xl mb-4">🧠</div>
                      <h3 className="font-semibold text-lg text-slate-900 mb-2">多平台连接</h3>
                      <p className="text-slate-600 text-sm">
                        无缝连接 WhatsApp、Telegram、Discord、飞书等平台，随时随地与 AI 对话
                      </p>
                    </HoverCard>
                  </ShineEffect>
                </StaggerItem>
                <StaggerItem>
                  <ShineEffect className="h-full">
                    <HoverCard className="group p-6 bg-white border border-orange-200 rounded-2xl h-full">
                      <div className="text-4xl mb-4">⚡</div>
                      <h3 className="font-semibold text-lg text-slate-900 mb-2">5494+ 技能扩展</h3>
                      <p className="text-slate-600 text-sm">
                        从天气查询到代码生成，一键安装社区技能，无限扩展 AI 能力
                      </p>
                    </HoverCard>
                  </ShineEffect>
                </StaggerItem>
                <StaggerItem>
                  <ShineEffect className="h-full">
                    <HoverCard className="group p-6 bg-white border border-orange-200 rounded-2xl h-full">
                      <div className="text-4xl mb-4">🔒</div>
                      <h3 className="font-semibold text-lg text-slate-900 mb-2">自托管部署</h3>
                      <p className="text-slate-600 text-sm">
                        完全的数据主权，你的数据留在你的服务器上，隐私安全掌握手中
                      </p>
                    </HoverCard>
                  </ShineEffect>
                </StaggerItem>
              </div>
            </StaggerContainer>

            {/* 7 Days Learning Path */}
            <FadeIn delay={0.3}>
              <div className="bg-white border border-orange-200 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">学习路径</h3>
                <div className="grid md:grid-cols-7 gap-4">
                  {[
                    { day: 'Day 1', title: '安装配置', desc: '系统要求与通道配置' },
                    { day: 'Day 2', title: '理解架构', desc: 'Gateway 与 Node' },
                    { day: 'Day 3', title: '技能安装', desc: 'ClawHub 使用' },
                    { day: 'Day 4', title: '记忆系统', desc: 'MEMORY.md 管理' },
                    { day: 'Day 5', title: '定时任务', desc: 'Cron 与心跳' },
                    { day: 'Day 6', title: '多 Agent', desc: '六部制协作' },
                    { day: 'Day 7', title: '高级自动化', desc: '工作流设计' },
                  ].map((item, idx) => (
                    <HoverCard key={idx} scale={1.05}>
                      <div className="text-center p-3 rounded-xl hover:bg-orange-50 transition-colors">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-bold text-sm mb-3 shadow-md">
                          {idx + 1}
                        </div>
                        <div className="text-xs text-orange-600 font-semibold mb-1">{item.day}</div>
                        <div className="text-sm font-semibold text-slate-900 mb-1">{item.title}</div>
                        <div className="text-xs text-slate-500">{item.desc}</div>
                      </div>
                    </HoverCard>
                  ))}
                </div>

                {/* Stats & CTA */}
                <div className="grid md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-orange-100">
                  <FadeIn delay={0.4}>
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-1">
                        5494+
                      </div>
                      <div className="text-xs text-slate-600">社区技能</div>
                    </div>
                  </FadeIn>
                  <FadeIn delay={0.5}>
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-1">
                        31
                      </div>
                      <div className="text-xs text-slate-600">技能分类</div>
                    </div>
                  </FadeIn>
                  <FadeIn delay={0.6}>
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-1">
                        391+
                      </div>
                      <div className="text-xs text-slate-600">精选教程</div>
                    </div>
                  </FadeIn>
                  <FadeIn delay={0.7}>
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-1">
                        开源
                      </div>
                      <div className="text-xs text-slate-600">MIT 许可</div>
                    </div>
                  </FadeIn>
                </div>

                <FadeIn delay={0.8}>
                  <div className="mt-8 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-xl font-mono text-sm shadow-lg">
                      <code>npx clawhub@latest install {'<skill-name>'}</code>
                      <ClickButton 
                        className="px-3 py-1 bg-orange-500 hover:bg-orange-600 rounded-lg text-xs transition-colors"
                        onClick={() => {
                          navigator.clipboard.writeText('npx clawhub@latest install skill-name');
                          alert('已复制！');
                        }}
                      >
                        复制
                      </ClickButton>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                      <a
                        href="https://docs.openclaw.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-medium hover:opacity-90 transition-opacity shadow-md"
                      >
                        开始学习 →
                      </a>
                      <a
                        href="https://github.com/openclaw/openclaw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white border border-orange-200 text-orange-600 rounded-xl font-medium hover:bg-orange-50 transition-colors shadow-md"
                      >
                        GitHub 仓库
                      </a>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </FadeIn>
          </div>
        </section>
      </ScrollReveal>

      {/* Stats Section */}
      <ScrollReveal direction="up">
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <StaggerContainer>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {STATS.map((stat, index) => (
                  <StaggerItem key={stat.label}>
                    <div className="text-center">
                      <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                        {stat.value}
                      </div>
                      <div className="text-slate-600 font-medium">{stat.label}</div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>
      </ScrollReveal>

      {/* Categories Section */}
      <ScrollReveal direction="up">
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">探索分类</h2>
                <p className="text-slate-600 text-lg">10 大专业分类，覆盖所有 AI 应用场景</p>
              </div>
            </FadeIn>

            <StaggerContainer>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {CATEGORIES.map((category, index) => (
                  <StaggerItem key={category.name}>
                    <Link
                      href={`/category/${category.name}`}
                      className="block"
                    >
                      <HoverCard scale={1.05}>
                        <ShineEffect className="p-6 bg-white border border-slate-200 rounded-2xl">
                          <div className="text-4xl mb-3">{category.icon}</div>
                          <div className="font-semibold text-slate-900 mb-1">{category.name}</div>
                          <div className="text-sm text-slate-500">{category.count} 个工具</div>
                        </ShineEffect>
                      </HoverCard>
                    </Link>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>
      </ScrollReveal>

      {/* Featured Tools Section */}
      <ScrollReveal direction="up">
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">精选工具</h2>
                  <p className="text-slate-600 text-lg">编辑精选，高质量 AI 工具推荐</p>
                </div>
                <Link href="/tools" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                  查看全部 →
                </Link>
              </div>
            </FadeIn>

            <StaggerContainer>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {FEATURED_TOOLS.map((tool, index) => {
                  return (
                  <StaggerItem key={tool.id}>
                    <Link
                      href={`/tool/${tool.id}`}
                      className="block"
                    >
                      <HoverCard scale={1.03}>
                        <ShineEffect className="group p-6 bg-white border border-slate-200 rounded-2xl">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                              <ToolLogo 
                                name={tool.name} 
                                size="medium"
                                className="shadow-md"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold text-lg text-slate-900 truncate">{tool.name}</h3>
                              </div>
                              <p className="text-slate-600 text-sm mb-2 line-clamp-2">{tool.description}</p>
                              <div className="flex items-center gap-2 text-xs text-slate-500">
                                <span className="px-2 py-1 bg-slate-100 rounded text-slate-600">{tool.category}</span>
                              </div>
                            </div>
                          </div>
                        </ShineEffect>
                      </HoverCard>
                    </Link>
                  </StaggerItem>
                );
              })}
              </div>
            </StaggerContainer>
          </div>
        </section>
      </ScrollReveal>

      {/* Free Statement Section */}
      <ScrollReveal direction="up">
        <section className="py-24 border-t border-white/5 bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white text-4xl mb-6 shadow-lg">
                🆓
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                完全免费 · 开放共享
              </h2>
              <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                本站所有 AI 工具资源完全免费开放，无任何 VIP 限制<br/>
                我们相信知识应该自由流动，让每个人都能平等获取优质资源
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-slate-600">免费资源</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">0 元</div>
                  <div className="text-slate-600">无需付费</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">∞</div>
                  <div className="text-slate-600">无限访问</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </ScrollReveal>

      {/* Footer */}
      <FadeIn>
        <footer className="border-t border-slate-200 bg-slate-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <BrandLogo size="small" withText={false} />
                <span className="font-bold text-slate-900">AI 工具导航站</span>
              </Link>
              <div className="text-slate-500 text-sm">
                © 2026 AI 工具导航站 · 保留所有权利
              </div>
              <div className="flex gap-6 text-sm">
                <Link href="/about" className="text-slate-600 hover:text-blue-600 transition-colors">
                  关于我们
                </Link>
                <Link href="/contact" className="text-slate-600 hover:text-blue-600 transition-colors">
                  联系我们
                </Link>
                <Link href="/privacy" className="text-slate-600 hover:text-blue-600 transition-colors">
                  隐私政策
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </FadeIn>
    </div>
  );
}
