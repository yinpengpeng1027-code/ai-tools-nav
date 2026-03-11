'use client';

import Link from "next/link";
import { motion } from "framer-motion";

interface Tool {
  name: string;
  description: string;
  longDesc: string;
  logo: string;
  isVip: boolean;
  url: string;
  tags: string[];
  category: string;
  features: string[];
  pricing: string;
}

interface ToolPageClientProps {
  params: Promise<{ id: string }>;
  TOOLS: Record<string, Tool>;
}

export default function ToolPageClient({ params, TOOLS }: ToolPageClientProps) {
  const resolvedParams = params as unknown as { id: string };
  const tool = TOOLS[resolvedParams.id];

  if (!tool) {
    return (
      <motion.div
        className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="text-center">
          <motion.h1
            className="text-4xl font-bold mb-4 text-slate-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            工具不存在
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/tools" className="text-indigo-600 hover:text-indigo-700 font-medium">
              ← 返回工具库
            </Link>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
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
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
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
        className="py-16 border-b border-slate-200 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6">
            <motion.div
              className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-2xl flex items-center justify-center text-5xl flex-shrink-0 shadow-lg shadow-indigo-500/30"
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              whileHover={{
                scale: 1.1,
                rotate: 360,
              }}
            >
              {tool.logo}
            </motion.div>
            <div className="flex-1">
              <motion.div
                className="flex items-center gap-3 mb-2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="text-4xl font-bold text-slate-900">{tool.name}</h1>
                {tool.isVip && (
                  <motion.span
                    className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-medium text-white"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0.8, 1, 0.8],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      delay: 0.4,
                      type: "spring",
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    VIP 专属
                  </motion.span>
                )}
              </motion.div>
              <motion.p
                className="text-xl text-slate-600 mb-4"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 }}
              >
                {tool.description}
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.span
                  className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-700"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(241,245,249,0.8)" }}
                >
                  {tool.category}
                </motion.span>
                {tool.tags.map((tag, idx) => (
                  <motion.span
                    key={tag}
                    className="px-3 py-1 bg-indigo-50 rounded-full text-sm text-indigo-600"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.45 + idx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-xl font-medium transition-opacity shadow-lg shadow-indigo-500/30"
                >
                  访问官网 →
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border border-slate-300 rounded-xl font-medium hover:bg-slate-50 transition-colors text-slate-700"
                >
                  收藏
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Content */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Description */}
              <motion.div
                className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.h2
                  className="text-2xl font-bold mb-4 text-slate-900"
                  whileHover={{ color: "#6366f1" }}
                  transition={{ duration: 0.2 }}
                >
                  工具介绍
                </motion.h2>
                <p className="text-slate-600 leading-relaxed">{tool.longDesc}</p>
              </motion.div>

              {/* Features */}
              <motion.div
                className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.h2
                  className="text-2xl font-bold mb-4 text-slate-900"
                  whileHover={{ color: "#6366f1" }}
                  transition={{ duration: 0.2 }}
                >
                  核心功能
                </motion.h2>
                <ul className="space-y-3">
                  {tool.features.map((feature, idx) => (
                    <motion.li
                      key={feature}
                      className="flex items-center gap-3 text-slate-600"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.span
                        className="text-green-500"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        ✓
                      </motion.span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="space-y-6"
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Pricing */}
              <motion.div
                className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(99, 102, 241, 0.15)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className="text-xl font-bold mb-4 text-slate-900"
                  whileHover={{ color: "#6366f1" }}
                >
                  价格
                </motion.h3>
                <motion.p
                  className="text-2xl font-bold text-indigo-600"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  {tool.pricing}
                </motion.p>
              </motion.div>

              {/* Quick Info */}
              <motion.div
                className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(99, 102, 241, 0.15)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className="text-xl font-bold mb-4 text-slate-900"
                  whileHover={{ color: "#6366f1" }}
                >
                  基本信息
                </motion.h3>
                <div className="space-y-3 text-slate-600">
                  {[
                    { label: "分类", value: tool.category },
                    { label: "平台", value: tool.tags.find(t => t.includes("Web") || t.includes("App") || t.includes("Discord")) || "未知" },
                    { label: "语言", value: tool.tags.find(t => t.includes("中文") || t.includes("英文") || t.includes("多语言")) || "未知" },
                  ].map((item, idx) => (
                    <motion.div
                      key={item.label}
                      className="flex justify-between"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <span className="font-medium">{item.label}</span>
                      <span>{item.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
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
