'use client';

import Link from "next/link";
import React, { useState, useMemo, useCallback } from "react";
import { TOOLS_BY_CATEGORY, getAllSubCategories, type EnhancedTool } from "@/data/index";
import BrandLogo from "@/components/BrandLogo";

// 性能优化：分类卡片组件 - 使用 React.memo
const CategoryCard = React.memo(({ category }: { category: typeof CATEGORIES[0] }) => {
  const toolCount = TOOLS_BY_CATEGORY[category.name]?.length || 0;
  
  // 获取分类描述
  const getCategoryDesc = (name: string): string => {
    const descriptions: Record<string, string> = {
      "文本生成": "AI 写作、翻译、润色、内容生成",
      "图像设计": "文生图、图生图、图像编辑、Logo 设计",
      "视频制作": "视频生成、剪辑、特效、字幕",
      "音频处理": "音乐生成、语音合成、播客制作",
      "办公效率": "PPT、Excel、邮件、文档自动化",
      "数据分析": "BI、可视化、数据洞察、报表",
      "对话机器人": "客服、助手、陪伴、问答",
      "社交媒体": "运营、营销、增长、内容分发",
      "开发工具": "代码生成、测试、部署、DevOps",
      "学习教育": "课程、题库、辅导、语言学习"
    };
    return descriptions[name] || "AI 工具集合";
  };
  
  return (
    <Link
      key={category.name}
      href={`/category/${category.name}`}
      className="group p-8 bg-white border-2 border-slate-100 rounded-3xl hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 backdrop-blur-xl block will-change-transform"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '0 280px' }}
    >
      <div className="flex items-start gap-5 mb-4">
        <div 
          className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 shadow-lg`}
          style={{ contain: 'layout' }}
        >
          {category.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
            {category.name}
          </h3>
          <p className="text-slate-600 font-medium mb-3 line-clamp-2">
            {getCategoryDesc(category.name)}
          </p>
          <div className="inline-flex items-center px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold">
            {toolCount} 个工具
          </div>
        </div>
      </div>
      <div className="flex items-center text-blue-500 font-semibold mt-4">
        探索分类 →
      </div>
    </Link>
  );
});

CategoryCard.displayName = 'CategoryCard';

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
  const [filterText, setFilterText] = useState("");

  // 使用 useMemo 缓存过滤结果
  const filteredCategories = useMemo(() => {
    return CATEGORIES.filter(cat =>
      cat.name.toLowerCase().includes(filterText.toLowerCase()) ||
      cat.desc.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [filterText]);

  // 使用 useCallback 缓存渲染函数
  const renderCategoryCard = useCallback((category: typeof CATEGORIES[0]) => {
    return <CategoryCard key={category.name} category={category} />;
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm will-change-transform">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <BrandLogo size="small" withText={true} />
            </Link>
            <div className="flex items-center gap-6">
              {['工具库', '分类', 'VIP 专区'].map((item, index) => (
                <Link
                  key={item}
                  href={index === 0 ? '/tools' : index === 1 ? '/categories' : '/vip'}
                  className={`text-sm transition-colors ${
                    index === 1 ? 'text-slate-900 font-semibold' : 'text-slate-600 hover:text-slate-900'
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
              浏览分类
            </span>
          </h1>
          <p className="text-slate-600 text-center text-lg font-medium">
            星图 StarMap AI - 万千 AI，一键触达 | 一站式 AI 工具集合体
          </p>

          {/* Search Filter */}
          <div className="max-w-md mx-auto mt-8">
            <input
              type="text"
              placeholder="搜索分类..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="w-full px-6 py-3 bg-white border-2 border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map(renderCategoryCard)}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg font-medium">未找到匹配的分类</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="text-2xl">🚀</span>
              <span className="font-bold text-slate-900">星图 StarMap AI</span>
            </Link>
            <div className="text-slate-500 text-sm font-medium">
              © 2026 星图 StarMap AI - 万千 AI，一键触达 | 一站式 AI 工具集合体 · 保留所有权利
            </div>
            <div className="flex gap-6 text-sm text-slate-600 font-medium">
              <Link href="/about" className="hover:text-slate-900 transition-colors">关于我们</Link>
              <Link href="/contact" className="hover:text-slate-900 transition-colors">联系我们</Link>
              <Link href="/privacy" className="hover:text-slate-900 transition-colors">隐私政策</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
