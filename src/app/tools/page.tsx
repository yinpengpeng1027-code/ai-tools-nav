'use client';

import Link from "next/link";
import { useState } from "react";
import { ALL_TOOLS, type EnhancedTool } from "@/data/index";
import ToolCard from "@/components/ToolCard";

// 热门工具数据
const POPULAR_TOOLS: EnhancedTool[] = ALL_TOOLS.slice(0, 20);

const CATEGORIES = [
  { name: "文本生成", icon: "📝", color: "from-blue-500 to-cyan-500" },
  { name: "图像设计", icon: "🎨", color: "from-purple-500 to-pink-500" },
  { name: "视频制作", icon: "🎬", color: "from-red-500 to-orange-500" },
  { name: "音频处理", icon: "🎵", color: "from-green-500 to-emerald-500" },
  { name: "办公效率", icon: "💼", color: "from-indigo-500 to-blue-500" },
  { name: "数据分析", icon: "📊", color: "from-yellow-500 to-amber-500" },
  { name: "对话机器人", icon: "🤖", color: "from-violet-500 to-purple-500" },
  { name: "社交媒体", icon: "📱", color: "from-pink-500 to-rose-500" },
  { name: "开发工具", icon: "💻", color: "from-slate-500 to-gray-500" },
  { name: "学习教育", icon: "🎓", color: "from-teal-500 to-cyan-500" },
];

export default function ToolsPage() {
  const [filterText, setFilterText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredTools = ALL_TOOLS.filter(tool => {
    const matchesText = tool.name.toLowerCase().includes(filterText.toLowerCase()) ||
      tool.description.toLowerCase().includes(filterText.toLowerCase());
    const matchesCategory = !selectedCategory || tool.category === selectedCategory;
    return matchesText && matchesCategory;
  });

  // 获取相关工具（基于当前分类）
  const getRelatedTools = (tool: EnhancedTool, count: number = 3) => {
    return ALL_TOOLS
      .filter(t => t.category === tool.category && t.id !== tool.id)
      .slice(0, count)
      .map(t => ({ tool: t, matchScore: 10, reason: `同属「${tool.category}」分类` }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm will-change-transform">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-lg">⭐</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  星图 StarMap
                </span>
                <span className="text-xs text-slate-500 font-medium -mt-0.5">AI</span>
              </div>
            </Link>
            <div className="flex items-center gap-6">
              {['工具库', '分类', 'VIP 专区'].map((item, index) => (
                <Link
                  key={item}
                  href={index === 0 ? '/tools' : index === 1 ? '/categories' : '/vip'}
                  className={`text-sm font-medium transition-colors ${
                    index === 0 ? 'text-slate-900 font-semibold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item}
                </Link>
              ))}
              <Link
                href="/login"
                className="px-5 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                登录
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              全部 AI 工具
            </span>
          </h1>
          <p className="text-slate-600 text-center text-lg font-medium">
            收录 {ALL_TOOLS.length}+ 优质 AI 工具，持续更新中
          </p>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mt-8 space-y-4">
            <input
              type="text"
              placeholder="搜索工具..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="w-full px-6 py-3 bg-white border-2 border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === null
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                全部
              </button>
              {CATEGORIES.slice(0, 5).map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === cat.name
                      ? `bg-gradient-to-r ${cat.color} text-white`
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
              <button
                onClick={() => setSelectedCategory(null)}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
              >
                更多...
              </button>
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex justify-center mt-6 gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                viewMode === 'grid'
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-100 text-slate-600'
              }`}
            >
              网格视图
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                viewMode === 'list'
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-100 text-slate-600'
              }`}
            >
              列表视图
            </button>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === 'grid' ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTools.map((tool) => (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                  size="medium"
                />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredTools.map((tool) => (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                  size="large"
                  showCategory={true}
                  showTags={true}
                />
              ))}
            </div>
          )}

          {filteredTools.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-600 text-lg">未找到匹配的工具</p>
              <Link href="/tools" className="mt-4 inline-block text-blue-600 hover:text-blue-700">
                查看全部工具
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Related Tools Section (for featured tools) */}
      {filteredTools.length > 0 && selectedCategory && (
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              📌 相关推荐
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTools.slice(0, 4).map((tool) => {
                const relatedTools = getRelatedTools(tool, 3);
                return (
                  <div key={tool.id} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                    <ToolCard tool={tool} size="small" />
                    <div className="mt-4">
                      <h3 className="text-sm font-semibold text-slate-900 mb-2">相似工具</h3>
                      <div className="space-y-2">
                        {relatedTools.map((related) => (
                          <Link
                            key={related.tool.id}
                            href={`/tool/${related.tool.id}`}
                            className="block p-3 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-sm">{related.tool.logo}</span>
                              <span className="text-sm font-medium text-slate-700">{related.tool.name}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="text-2xl">🚀</span>
              <span className="font-bold text-slate-900">AI 工具导航站</span>
            </Link>
            <div className="text-slate-500 text-sm font-medium">
              © 2026 AI 工具导航站 · 保留所有权利
            </div>
            <div className="flex gap-6 text-sm text-slate-600 font-medium">
              {['关于我们', '联系我们', '隐私政策'].map((item, index) => (
                <Link
                  key={item}
                  href={index === 0 ? '/about' : index === 1 ? '/contact' : '/privacy'}
                  className="hover:text-slate-900 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
