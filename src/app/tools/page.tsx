'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const ALL_TOOLS = [
  { id: 1, name: "ChatGPT", description: "OpenAI 的智能对话 AI，支持多轮对话、代码生成、文案创作", category: "文本生成", logo: "🤖", isVip: false, url: "https://chat.openai.com", tags: ["免费", "英文", "Web"] },
  { id: 2, name: "Midjourney", description: "AI 绘画工具，生成高质量艺术图像", category: "图像设计", logo: "🎨", isVip: true, url: "https://midjourney.com", tags: ["付费", "英文", "Discord"] },
  { id: 3, name: "Notion AI", description: "智能笔记助手，自动总结、润色、翻译", category: "办公效率", logo: "📝", isVip: false, url: "https://notion.so", tags: ["付费", "多语言", "Web"] },
  { id: 4, name: "Runway", description: "AI 视频生成和编辑工具", category: "视频制作", logo: "🎬", isVip: true, url: "https://runwayml.com", tags: ["付费", "英文", "Web"] },
  { id: 5, name: "ElevenLabs", description: "AI 语音合成，逼真的多语言语音", category: "音频处理", logo: "🎵", isVip: true, url: "https://elevenlabs.io", tags: ["付费", "多语言", "Web"] },
  { id: 6, name: "Jasper", description: "AI 营销文案生成器", category: "文本生成", logo: "✍️", isVip: false, url: "https://jasper.ai", tags: ["付费", "英文", "Web"] },
  { id: 7, name: "文心一言", description: "百度大语言模型，中文对话 AI", category: "文本生成", logo: "🇨🇳", isVip: false, url: "https://yiyan.baidu.com", tags: ["免费", "中文", "Web"] },
  { id: 8, name: "通义千问", description: "阿里大语言模型，多模态理解", category: "文本生成", logo: "🤖", isVip: false, url: "https://tongyi.aliyun.com", tags: ["免费", "中文", "Web"] },
  { id: 9, name: "Stable Diffusion", description: "开源 AI 绘画模型", category: "图像设计", logo: "🎨", isVip: false, url: "https://stability.ai", tags: ["开源", "英文", "本地"] },
  { id: 10, name: "Canva AI", description: "AI 设计工具，一键生成海报、PPT", category: "图像设计", logo: "🎨", isVip: false, url: "https://canva.com", tags: ["免费增值", "多语言", "Web"] },
  { id: 11, name: "剪映", description: "AI 视频剪辑工具", category: "视频制作", logo: "🎬", isVip: false, url: "https://capcut.cn", tags: ["免费", "中文", "Web/App"] },
  { id: 12, name: "Suno AI", description: "AI 音乐生成器", category: "音频处理", logo: "🎵", isVip: true, url: "https://suno.ai", tags: ["付费", "英文", "Web"] },
  { id: 13, name: "Cursor", description: "AI 代码编辑器", category: "开发工具", logo: "💻", isVip: false, url: "https://cursor.sh", tags: ["免费增值", "英文", "桌面"] },
  { id: 14, name: "GitHub Copilot", description: "AI 编程助手", category: "开发工具", logo: "💻", isVip: true, url: "https://github.com/features/copilot", tags: ["付费", "英文", "插件"] },
  { id: 15, name: "Kimi", description: "月之暗面大模型，超长上下文", category: "文本生成", logo: "🌙", isVip: false, url: "https://kimi.moonshot.cn", tags: ["免费", "中文", "Web"] },
  { id: 16, name: "智谱清言", description: "智谱 AI 大模型", category: "文本生成", logo: "🧠", isVip: false, url: "https://chatglm.cn", tags: ["免费", "中文", "Web"] },
];

const CATEGORIES = [
  { name: "文本生成", icon: "📝", count: 200, color: "from-blue-500 to-cyan-500" },
  { name: "图像设计", icon: "🎨", count: 150, color: "from-purple-500 to-pink-500" },
  { name: "视频制作", icon: "🎬", count: 100, color: "from-red-500 to-orange-500" },
  { name: "音频处理", icon: "🎵", count: 80, color: "from-green-500 to-emerald-500" },
  { name: "办公效率", icon: "💼", count: 150, color: "from-indigo-500 to-blue-500" },
  { name: "数据分析", icon: "📊", count: 100, color: "from-yellow-500 to-amber-500" },
  { name: "对话机器人", icon: "🤖", count: 100, color: "from-violet-500 to-purple-500" },
  { name: "社交媒体", icon: "📱", count: 120, color: "from-pink-500 to-rose-500" },
  { name: "开发工具", icon: "💻", count: 150, color: "from-slate-500 to-gray-500" },
  { name: "学习教育", icon: "🎓", count: 100, color: "from-teal-500 to-cyan-500" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function ToolsPage() {
  const [filterText, setFilterText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTools = ALL_TOOLS.filter(tool => {
    const matchesText = tool.name.toLowerCase().includes(filterText.toLowerCase()) ||
      tool.description.toLowerCase().includes(filterText.toLowerCase());
    const matchesCategory = !selectedCategory || tool.category === selectedCategory;
    return matchesText && matchesCategory;
  });

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
                    className={`text-sm font-medium transition-colors ${
                      index === 0 ? 'text-slate-900 font-semibold' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/login"
                  className="px-5 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
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
              全部 AI 工具
            </span>
          </motion.h1>
          <motion.p
            className="text-slate-600 text-center text-lg font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            收录 {ALL_TOOLS.length}+ 优质 AI 工具，持续更新中
          </motion.p>

          {/* Search and Filter */}
          <motion.div
            className="max-w-2xl mx-auto mt-8 space-y-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <input
              type="text"
              placeholder="搜索工具..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="w-full px-6 py-3 bg-white border-2 border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="flex flex-wrap gap-2 justify-center">
              <motion.button
                onClick={() => setSelectedCategory(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === null
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                全部
              </motion.button>
              {CATEGORIES.slice(0, 5).map((cat) => (
                <motion.button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === cat.name
                      ? `bg-gradient-to-r ${cat.color} text-white`
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.icon} {cat.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Tools Grid */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredTools.map((tool) => (
              <motion.div
                key={tool.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                layout
              >
                <Link
                  href={`/tool/${tool.id}`}
                  className="group p-6 bg-white border-2 border-slate-100 rounded-2xl hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 block"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 shadow-lg shadow-blue-500/30"
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -10, 10, 0],
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {tool.logo}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-lg text-slate-900 truncate">{tool.name}</h3>
                        {tool.isVip && (
                          <motion.span
                            className="px-2.5 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-xs font-bold shadow-md"
                            animate={{ opacity: [0.8, 1, 0.8] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            VIP
                          </motion.span>
                        )}
                      </div>
                      <p className="text-slate-600 text-sm line-clamp-2 font-medium">{tool.description}</p>
                    </div>
                  </div>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold">{tool.category}</span>
                    {tool.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-xs font-semibold">
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filteredTools.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-slate-600 text-lg">未找到匹配的工具</p>
            </motion.div>
          )}
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
            <div className="text-slate-500 text-sm font-medium">
              © 2026 AI 工具导航站 · 保留所有权利
            </div>
            <div className="flex gap-6 text-sm text-slate-600 font-medium">
              {['关于我们', '联系我们', '隐私政策'].map((item, index) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -2, color: '#1e293b' }}
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
