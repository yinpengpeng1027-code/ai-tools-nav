'use client';

import Link from "next/link";
import { motion } from "framer-motion";

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
      { text: "深度教程", available: false },
    ],
    button: "当前套餐",
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
      { text: "优先工具更新通知", available: true },
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
      { text: "早期内测资格", available: true },
    ],
    button: "联系咨询",
    variant: "premium",
  },
];

const FAQS = [
  {
    question: "💳 支持哪些支付方式？",
    answer: "我们支持微信支付、支付宝、银行卡等多种支付方式。",
  },
  {
    question: "🔄 可以退款吗？",
    answer: "VIP 会员购买后 7 天内可无条件退款。",
  },
  {
    question: "📱 会员可以多人共享吗？",
    answer: "VIP 会员仅限单人使用，企业版支持团队共享。",
  },
  {
    question: "🔒 支付安全吗？",
    answer: "我们使用正规支付渠道，所有交易都有安全保障。",
  },
];

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
      ease: "easeOut" as const,
    },
  },
} as const;

export default function VipPage() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50 text-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Navigation */}
      <motion.nav
        className="border-b border-slate-200 bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className="flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
                  AI 工具导航站
                </span>
              </Link>
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
                    className={`text-sm transition-colors ${
                      index === 2 ? 'text-slate-900 font-medium' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-md"
                >
                  登录
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <motion.section
        className="py-24 relative overflow-hidden bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="absolute -top-1/2 -left-1/2 w-[100%] h-[100%] bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-1/2 -right-1/2 w-[100%] h-[100%] bg-gradient-to-tl from-pink-500/10 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl sm:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              解锁全部 AI 资源
            </span>
          </motion.h1>
          <motion.p
            className="text-xl text-slate-600 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            成为 VIP 会员，访问 80% 付费资源 + 深度教程 + 专属服务
          </motion.p>
        </div>
      </motion.section>

      {/* Pricing Cards */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className={`p-8 rounded-3xl backdrop-blur-xl ${
                  plan.variant === 'popular'
                    ? 'relative bg-gradient-to-b from-indigo-50 to-pink-50 border-2 border-indigo-500/30 shadow-lg shadow-indigo-500/10'
                    : 'bg-white border border-slate-200 shadow-sm'
                }`}
              >
                {plan.badge && (
                  <motion.div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-medium text-white"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {plan.badge}
                  </motion.div>
                )}
                <motion.div
                  className="text-2xl font-bold mb-2 text-slate-900"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {plan.name}
                </motion.div>
                <motion.div
                  className="text-4xl font-bold mb-6 text-slate-900"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {plan.price}
                  <span className="text-lg text-slate-500 font-normal">{plan.period}</span>
                </motion.div>
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
                      transition={{ delay: idx * 0.05 + index * 0.1 }}
                    >
                      <motion.span
                        className={feature.available ? 'text-green-500' : 'text-slate-300'}
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {feature.available ? '✓' : '✗'}
                      </motion.span>
                      {feature.text}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`w-full py-3 rounded-xl font-medium transition-colors ${
                    plan.variant === 'popular'
                      ? 'bg-gradient-to-r from-indigo-500 to-pink-500 text-white hover:opacity-90 shadow-lg shadow-indigo-500/30'
                      : 'border border-slate-300 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  {plan.button}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        className="py-16 border-t border-slate-200 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-slate-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            常见问题
          </motion.h2>
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {FAQS.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(241,245,249,0.5)" }}
                transition={{ duration: 0.3 }}
                className="p-6 bg-slate-50 rounded-2xl cursor-pointer border border-slate-200"
              >
                <motion.h3
                  className="font-semibold text-lg mb-2 text-slate-900"
                  whileHover={{ x: 5, color: "#6366f1" }}
                  transition={{ duration: 0.2 }}
                >
                  {faq.question}
                </motion.h3>
                <motion.p
                  className="text-slate-600"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  {faq.answer}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 bg-slate-50">
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
            <div className="flex gap-6 text-sm text-slate-600">
              {['关于我们', '联系我们', '隐私政策'].map((item, index) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -2, color: '#0f172a' }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={index === 0 ? '/about' : index === 1 ? '/contact' : '/privacy'}
                    className="hover:text-slate-900 transition-colors"
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
