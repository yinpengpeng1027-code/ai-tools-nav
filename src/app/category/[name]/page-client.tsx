'use client';

import Link from "next/link";
import React, { useMemo, useCallback } from "react";
import { TOOLS_BY_CATEGORY } from "@/data/tools-data";
import ToolLogo from "@/components/Logo";
import BrandLogo from "@/components/BrandLogo";

// 性能优化：工具卡片组件 - 使用 React.memo 避免不必要的重渲染
const ToolCard = React.memo(({ tool }: { tool: typeof TOOLS_BY_CATEGORY[string][0] }) => {
  return (
    <Link
      href={`/tool/${tool.id}`}
      className="group p-6 bg-white border-2 border-slate-100 rounded-2xl hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 block will-change-transform"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '0 200px' }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <ToolLogo 
            name={tool.name} 
            size="medium"
            className="shadow-lg shadow-blue-500/30"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-lg text-slate-900 truncate">{tool.name}</h3>
          </div>
          <p className="text-slate-600 text-sm mb-3 font-medium line-clamp-2">{tool.description}</p>
          <div className="flex flex-wrap gap-1">
            {tool.tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
});

ToolCard.displayName = 'ToolCard';

export default function CategoryClient({ 
  params, 
  category, 
  categoryName 
}: { 
  params: { name: string }, 
  category: { desc: string }, 
  categoryName: string 
}) {
  // 使用 useMemo 缓存工具列表，避免重复计算
  const tools = useMemo(() => {
    return TOOLS_BY_CATEGORY[categoryName] || [];
  }, [categoryName]);

  // 使用 useCallback 缓存渲染函数
  const renderToolCard = useCallback((tool: typeof TOOLS_BY_CATEGORY[string][0]) => {
    return <ToolCard key={tool.id} tool={tool} />;
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
              <Link href="/tools" className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium">工具库</Link>
              <Link href="/categories" className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium">分类</Link>
              <Link href="/vip" className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium">VIP 专区</Link>
              <Link href="/login" className="px-5 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                登录
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/categories" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium mb-6 transition-colors">
            ← 返回分类
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-slate-900 tracking-tight">
            {categoryName}
          </h1>
          <p className="text-slate-600 text-lg font-medium">
            {category.desc}
          </p>
          <div className="mt-4 text-sm text-slate-500">
            共 {tools.length} 个工具
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {tools.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map(renderToolCard)}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg font-medium">该分类下的工具即将上线</p>
            </div>
          )}
        </div>
      </section>

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
    </div>
  );
}
