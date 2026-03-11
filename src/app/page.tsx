'use client';

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// 模拟工具数据
const FEATURED_TOOLS = [
  { id: 1, name: "ChatGPT", description: "OpenAI 的智能对话 AI", category: "文本生成", logo: "🤖", isVip: false },
  { id: 2, name: "Midjourney", description: "AI 绘画工具", category: "图像设计", logo: "🎨", isVip: true },
  { id: 3, name: "Notion AI", description: "智能笔记助手", category: "办公效率", logo: "📝", isVip: false },
  { id: 4, name: "Runway", description: "AI 视频生成", category: "视频制作", logo: "🎬", isVip: true },
  { id: 5, name: "ElevenLabs", description: "AI 语音合成", category: "音频处理", logo: "🎵", isVip: true },
  { id: 6, name: "Jasper", description: "AI 营销文案", category: "文本生成", logo: "✍️", isVip: false },
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

const PRICING_PLANS = [
  {
    name: "🆓 免费版",
    price: "¥0",
    period: "/永久",
    features: [
      { text: "访问 60% 免费资源", available: true },
      { text: "基础搜索功能", available: true },
      { text: "收藏工具", available: true },
      { text: "VIP 专属内容", available: false },
    ],
    button: "免费注册",
    variant: "basic",
  },
  {
    name: "💎 VIP 会员",
    price: "¥168",
    period: "/年",
    badge: "最受欢迎",
    features: [
      { text: "访问 80% 付费资源", available: true },
      { text: "深度教程与方案", available: true },
      { text: "无广告体验", available: true },
      { text: "专属客服支持", available: true },
    ],
    button: "立即开通",
    variant: "popular",
  },
  {
    name: "👑 私域高端",
    price: "¥999",
    period: "/年起",
    features: [
      { text: "100% 资源访问", available: true },
      { text: "1v1 咨询服务", available: true },
      { text: "私董会门票", available: true },
      { text: "企业定制服务", available: true },
    ],
    button: "联系咨询",
    variant: "premium",
  },
];

// 动画变体
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
} as const;

const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
  },
} as const;

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <motion.div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Navigation */}
      <motion.nav
        className="border-b border-slate-200 bg-white/80 backdrop-blur-xl sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-2xl">🚀</span>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
                AI 工具导航站
              </span>
            </motion.div>
            <div className="flex items-center gap-6">
              {['工具库', '分类', 'VIP 专区'].map((item, index) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={index === 0 ? '/tools' : index === 1 ? '/categories' : '/vip'}
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-md"
              >
                登录
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-1/2 -left-1/2 w-[100%] h-[100%] bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-1/2 -right-1/2 w-[100%] h-[100%] bg-gradient-to-tl from-purple-400/10 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-600 text-sm mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <span>🎉</span>
            <span>即将上线</span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              发现最好的 AI 工具
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-slate-600 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            国内最全面的 AI 工具发现与学习平台
            <br />
            <span className="text-slate-500">60% 免费资源 + 40% 精选付费，助你快速掌握 AI 工具</span>
          </motion.p>

          <motion.div
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="搜索 AI 工具、教程、资源..."
                className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 shadow-md"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:opacity-90 transition-opacity shadow-md"
              >
                搜索
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/30"
            >
              🔔 抢先体验
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white border border-slate-200 rounded-xl font-semibold text-lg hover:bg-slate-50 transition-colors shadow-md"
            >
              📖 了解更多
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="border-y border-slate-200 bg-slate-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Categories Section */}
      <motion.section
        className="py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">探索分类</h2>
            <p className="text-slate-600 text-lg">10 大专业分类，覆盖所有 AI 应用场景</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {CATEGORIES.map((category) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={`/category/${category.name}`}
                  className="group p-6 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 hover:border-blue-300 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <motion.div
                    className="text-4xl mb-3"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    {category.icon}
                  </motion.div>
                  <div className="font-semibold text-slate-900 mb-1">{category.name}</div>
                  <div className="text-sm text-slate-500">{category.count} 个工具</div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Tools Section */}
      <motion.section
        className="py-24 border-t border-white/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-center justify-between mb-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">精选工具</h2>
              <p className="text-slate-600 text-lg">编辑精选，高质量 AI 工具推荐</p>
            </div>
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <Link href="/tools" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                查看全部 →
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {FEATURED_TOOLS.map((tool) => (
              <motion.div
                key={tool.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={`/tool/${tool.id}`}
                  className="group p-6 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 hover:border-blue-300 transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 shadow-md"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {tool.logo}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg text-slate-900 truncate">{tool.name}</h3>
                        {tool.isVip && (
                          <motion.span
                            className="px-2 py-0.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded text-xs font-medium"
                            animate={{ opacity: [0.8, 1, 0.8] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            VIP
                          </motion.span>
                        )}
                      </div>
                      <p className="text-slate-600 text-sm mb-2 line-clamp-2">{tool.description}</p>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="px-2 py-1 bg-slate-100 rounded text-slate-600">{tool.category}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        className="py-24 border-t border-white/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">会员计划</h2>
            <p className="text-slate-600 text-lg">选择适合你的方案，解锁更多优质资源</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {PRICING_PLANS.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className={`p-8 rounded-3xl shadow-lg ${
                  plan.variant === 'popular'
                    ? 'relative bg-gradient-to-b from-blue-50 to-purple-50 border-2 border-blue-400'
                    : 'bg-white border border-slate-200'
                }`}
              >
                {plan.badge && (
                  <motion.div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium shadow-md"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {plan.badge}
                  </motion.div>
                )}
                <div className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</div>
                <div className="text-4xl font-bold text-slate-900 mb-6">
                  {plan.price}
                  <span className="text-lg text-slate-500 font-normal">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className={`flex items-center gap-3 ${
                        feature.available ? 'text-slate-700' : 'text-slate-400'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <span className={feature.available ? 'text-green-500' : 'text-slate-300'}>
                        {feature.available ? '✓' : '✗'}
                      </span>
                      {feature.text}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-xl font-medium transition-colors ${
                    plan.variant === 'popular'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 shadow-md'
                      : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {plan.button}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl">🚀</span>
              <span className="font-bold text-slate-900">AI 工具导航站</span>
            </motion.div>
            <div className="text-slate-500 text-sm">
              © 2026 AI 工具导航站 · 保留所有权利
            </div>
            <div className="flex gap-6 text-sm">
              {['关于我们', '联系我们', '隐私政策'].map((item, index) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={index === 0 ? '/about' : index === 1 ? '/contact' : '/privacy'}
                    className="text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
