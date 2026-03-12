'use client';

import Link from "next/link";
import { RichTool } from "@/data/tools-data-rich";

interface ToolPageClientProps {
  tool: RichTool;
}

export default function ToolPageClient({ tool }: ToolPageClientProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">AI 工具导航站</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/tools" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">工具库</Link>
              <Link href="/categories" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">分类</Link>
              <Link href="/vip" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">VIP 专区</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/tools" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <span>←</span> 返回工具库
          </Link>
        </div>

        {/* Hero Section */}
        <section className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-slate-200">
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Logo */}
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-5xl shadow-lg shadow-blue-500/30 flex-shrink-0">
              {tool.logo}
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h1 className="text-4xl font-bold text-slate-900">{tool.name}</h1>
                {tool.isVip ? (
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium">VIP 专属</span>
                ) : (
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">免费可用</span>
                )}
              </div>
              <p className="text-lg text-slate-600 mb-4">{tool.description}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                  {tool.category}
                </span>
                {tool.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Buttons - 官网链接 */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all"
                >
                  访问官网 →
                </a>
                <span className="text-lg font-semibold text-slate-700">{tool.price}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Left 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Long Description */}
            <section className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span>📖</span> 详细介绍
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                {tool.longDescription}
              </p>
            </section>

            {/* Features */}
            <section className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span>✨</span> 核心功能
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {tool.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-slate-600">
                    <span className="text-green-500 text-lg">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Use Cases */}
            <section className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span>🎯</span> 使用场景
              </h2>
              <div className="flex flex-wrap gap-2">
                {tool.useCases.map((useCase) => (
                  <span key={useCase} className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-slate-700 rounded-lg text-sm font-medium border border-slate-200">
                    {useCase}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar - Right column */}
          <div className="space-y-6">
            {/* Info Card */}
            <aside className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">工具信息</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-slate-500">分类</span>
                  <p className="text-slate-900 font-medium">{tool.category}</p>
                </div>
                <div>
                  <span className="text-slate-500">价格</span>
                  <p className="text-slate-900 font-medium">{tool.price}</p>
                </div>
                <div>
                  <span className="text-slate-500">类型</span>
                  <p className="text-slate-900 font-medium">{tool.isVip ? 'VIP 专属' : '免费可用'}</p>
                </div>
              </div>
            </aside>

            {/* Official Website */}
            <aside className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-4">官方网站</h3>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-white text-blue-600 rounded-xl font-semibold text-center hover:bg-blue-50 transition-colors"
              >
                访问官网 →
              </a>
            </aside>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span className="font-bold text-slate-900">AI 工具导航站</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-600">
              <Link href="/tools" className="hover:text-slate-900">工具库</Link>
              <Link href="/categories" className="hover:text-slate-900">分类</Link>
              <Link href="/vip" className="hover:text-slate-900">VIP 专区</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
