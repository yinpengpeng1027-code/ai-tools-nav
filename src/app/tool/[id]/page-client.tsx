'use client';

import Link from "next/link";
import { EnhancedTool } from "@/data/index";
import { generateRelatedTools } from "@/lib/related-tools";
import ToolLogo from "@/components/Logo";

interface ToolPageClientProps {
  tool: EnhancedTool;
  relatedTools?: { tool: EnhancedTool; matchScore: number; reason: string }[];
}

export default function ToolPageClient({ tool, relatedTools: propRelatedTools }: ToolPageClientProps) {
  // 从 URL 中提取域名
  const domain = tool.url.replace(/^https?:\/\//, '').replace(/\/$/, '').replace(/^www\./, '');
  const fallbackEmoji = tool.logo;

  // 如果没有传入相关工具，生成推荐
  const relatedTools = propRelatedTools || generateRelatedTools(tool, 5);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                星图 StarMap AI
              </span>
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
            <div className="flex-shrink-0">
              <ToolLogo 
                domain={domain} 
                fallbackEmoji={fallbackEmoji}
                size="large"
                className="shadow-lg shadow-blue-500/30"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h1 className="text-4xl font-bold text-slate-900">{tool.name}</h1>
                {tool.isVip ? (
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium">
                    VIP 专属
                  </span>
                ) : (
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    免费可用
                  </span>
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

              {/* CTA Buttons */}
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
              <p className="text-slate-600 leading-relaxed text-base whitespace-pre-line">
                {tool.description}
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

            {/* Pros and Cons */}
            <section className="grid md:grid-cols-2 gap-6">
              <section className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span>👍</span> 优势
                </h2>
                <ul className="space-y-2">
                  {tool.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-slate-600">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span>👎</span> 劣势
                </h2>
                <ul className="space-y-2">
                  {tool.cons.map((con) => (
                    <li key={con} className="flex items-start gap-2 text-slate-600">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </section>
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
                <div>
                  <span className="text-slate-500">标签</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {tool.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-slate-100 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
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

            {/* Related Tools */}
            <aside className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span>🔗</span> 相关推荐
              </h3>
              
              {relatedTools.length > 0 ? (
                <div className="space-y-3">
                  {relatedTools.map((related) => {
                    const relatedDomain = related.tool.url.replace(/^https?:\/\//, '').replace(/\/$/, '').replace(/^www\./, '');
                    return (
                      <Link
                        key={related.tool.id}
                        href={`/tool/${related.tool.id}`}
                        className="block p-3 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0">
                            <ToolLogo 
                              domain={relatedDomain} 
                              fallbackEmoji={related.tool.logo || '🔗'}
                              size="small"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                              {related.tool.name}
                            </div>
                            <div className="text-xs text-slate-500 mt-1 line-clamp-2">
                              {related.tool.description}
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <p className="text-slate-500 text-center py-4">暂无相关推荐</p>
              )}
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
              <span className="font-bold text-slate-900">AI Nexus</span>
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

// 从 URL 中提取域名
function getDomainFromUrl(url: string): string {
  try {
    const domain = new URL(url).hostname.replace('www.', '');
    return domain;
  } catch {
    return url;
  }
}
