'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function CategoriesPage() {
  const [filterText, setFilterText] = useState("");

  const filteredCategories = CATEGORIES.filter(cat =>
    cat.name.toLowerCase().includes(filterText.toLowerCase()) ||
    cat.desc.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50"
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
                <span className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
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
                      index === 1 ? 'text-slate-900 font-semibold' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/login"
                  className="px-5 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  登录
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Header */}
      <motion.section
        className="py-16 border-b border-slate-200 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold text-center mb-4 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              浏览分类
            </span>
          </motion.h1>
          <motion.p
            className="text-slate-600 text-center text-lg font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            10 大专业分类，覆盖所有 AI 应用场景
          </motion.p>

          {/* Search Filter */}
          <motion.div
            className="max-w-md mx-auto mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <input
              type="text"
              placeholder="搜索分类..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="w-full px-6 py-3 bg-white border-2 border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-lg"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Categories Grid */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredCategories.map((category) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                layout
              >
                <Link
                  href={`/category/${encodeURIComponent(category.name)}`}
                  className="group p-8 bg-white border-2 border-slate-100 rounded-3xl hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 backdrop-blur-xl block"
                >
                  <div className="flex items-start gap-5 mb-4">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {category.icon}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-slate-600 font-medium mb-3 line-clamp-2">
                        {category.desc}
                      </p>
                      <div className="inline-flex items-center px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold">
                        {category.count} 个工具
                      </div>
                    </div>
                  </div>
                  <motion.div
                    className="flex items-center text-blue-500 font-semibold mt-4"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    探索分类 →
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filteredCategories.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-slate-500 text-lg font-medium">未找到匹配的分类</p>
            </motion.div>
          )}
        </div>
      </motion.section>

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
    </motion.div>
  );
}
