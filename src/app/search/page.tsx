'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { searchTools, type EnhancedTool } from "@/data/index";
import type { EnhancedTool as Tool } from "@/data/index";
import BrandLogo from "@/components/BrandLogo";
import SearchBar from "@/components/SearchBar";
import ToolLogo from "@/components/Logo";
import { FadeIn, SlideDown, HoverCard, StaggerContainer, StaggerItem } from "@/components/animations";

const CATEGORIES = [
  { name: "文本生成", icon: "📝" },
  { name: "图像设计", icon: "🎨" },
  { name: "视频制作", icon: "🎬" },
  { name: "音频处理", icon: "🎵" },
  { name: "办公效率", icon: "💼" },
  { name: "数据分析", icon: "📊" },
  { name: "对话机器人", icon: "🤖" },
  { name: "社交媒体", icon: "📱" },
  { name: "开发工具", icon: "💻" },
  { name: "学习教育", icon: "🎓" },
];

const TAGS = [
  "免费", "付费", "开源", "英文", "中文", "Web", "App", "桌面", "插件"
];

interface SearchResult {
  tool: Tool;
  score: number;
  highlights: {
    name?: string;
    description?: string;
  };
}

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // 搜索工具函数 - 使用新的数据索引
  const searchToolsFunction = (searchQuery: string) => {
    if (!searchQuery.trim() && selectedCategories.length === 0 && selectedTags.length === 0) {
      setResults([]);
      return;
    }

    const allTools = searchTools(searchQuery);
    
    const matchedTools = allTools.map((tool) => {
      let score = 0;
      const highlights: SearchResult['highlights'] = {};

      const normalizedQuery = searchQuery.toLowerCase().trim();
      
      // 按名称匹配
      if (tool.name.toLowerCase().includes(normalizedQuery)) {
        score += 10;
        highlights.name = tool.name;
      }

      // 按描述匹配
      if (tool.description.toLowerCase().includes(normalizedQuery)) {
        score += 5;
        highlights.description = tool.description;
      }

      // 按标签匹配
      const queryTags = normalizedQuery.split(/\s+/);
      queryTags.forEach(tag => {
        if (tag && tool.tags.some(t => t.toLowerCase().includes(tag))) {
          score += 3;
        }
      });

      // 按分类过滤
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(tool.category);

      // 按标签过滤
      const matchesTag = selectedTags.length === 0 || selectedTags.every(tag => tool.tags.includes(tag));

      if (matchesCategory && matchesTag && (score > 0 || !normalizedQuery)) {
        return { tool, score, highlights };
      }

      return null;
    }).filter((result): result is SearchResult => result !== null);

    // 排序：按相关度降序
    setResults(matchedTools.sort((a, b) => b.score - a.score));
  };

  // 处理搜索
  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
  };

  // 实时搜索（防抖）
  useEffect(() => {
    const timer = setTimeout(() => {
      searchToolsFunction(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, selectedCategories, selectedTags]);

  // 选中分类切换
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // 选中标签切换
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // 清空筛选
  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedTags([]);
    setQuery("");
    searchToolsFunction("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <SlideDown>
        <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-xl sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <BrandLogo size="small" withText={true} />
              </Link>
              <div className="flex items-center gap-6">
                <Link href="/tools" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">工具库</Link>
                <Link href="/categories" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">分类</Link>
                <button className="px-4 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">登录</button>
              </div>
            </div>
          </div>
        </nav>
      </SlideDown>

      {/* Search Header */}
      <FadeIn>
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  搜索 AI 工具
                </span>
              </h1>
              <p className="text-slate-600 text-lg">星图 StarMap AI - 万千 AI，一键触达 | 一站式 AI 工具集合体</p>
            </div>

            {/* Main Search Bar */}
            <div className="max-w-3xl mx-auto mb-8">
              <SearchBar
                size="large"
                placeholder="搜索工具名称、描述或标签..."
                onSearch={handleSearch}
                initialValue={query}
                showSearchButton={true}
                showFilters={false}
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Quick Filters */}
      <FadeIn delay={0.2}>
        <section className="py-8 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {/* Categories */}
              <div>
                <h3 className="text-sm font-semibold text-slate-700 mb-3">分类筛选</h3>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => toggleCategory(cat.name)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                        selectedCategories.includes(cat.name)
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30'
                          : 'bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      {cat.icon} {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-sm font-semibold text-slate-700 mb-3">标签筛选</h3>
                <div className="flex flex-wrap gap-2">
                  {TAGS.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                        selectedTags.includes(tag)
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/30'
                          : 'bg-white border border-slate-200 text-slate-600 hover:border-green-300 hover:bg-green-50'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedCategories.length > 0 || selectedTags.length > 0 || query) && (
                <div className="flex justify-center">
                  <button
                    onClick={clearFilters}
                    className="px-6 py-2 bg-slate-100 text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-200 transition-colors"
                  >
                    清空筛选
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Search Results */}
      <FadeIn delay={0.3}>
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-slate-600">
                找到 <span className="font-bold text-blue-600">{results.length}</span> 个工具
                {query && (
                  <span className="ml-2 text-slate-500">
                    搜索 "<span className="font-medium text-slate-900">{query}</span>"
                  </span>
                )}
              </p>
              
              {/* Sort Dropdown */}
              <select className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>相关度排序</option>
                <option>热度优先</option>
                <option>最新添加</option>
                <option>价格升序</option>
                <option>价格降序</option>
              </select>
            </div>

            {/* No Results */}
            {results.length === 0 && !isLoading && (
              <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-300">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">未找到匹配的工具</h3>
                <p className="text-slate-600 mb-6">试试修改搜索关键词或筛选条件</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
                >
                  清空筛选条件
                </button>
              </div>
            )}

            {/* Results Grid */}
            <StaggerContainer>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map(({ tool, highlights }) => {
                  return (
                  <StaggerItem key={tool.id}>
                    <Link
                      href={`/tool/${tool.id}`}
                      className="block"
                    >
                      <HoverCard scale={1.03}>
                        <div className="group p-6 bg-white border-2 border-slate-100 rounded-2xl hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="flex-shrink-0">
                              <ToolLogo 
                                name={tool.name} 
                                size="medium"
                                className="shadow-lg shadow-blue-500/30"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-bold text-lg text-slate-900 truncate">
                                  {highlights.name ? (
                                    <span className="text-blue-600 font-bold">{highlights.name}</span>
                                  ) : (
                                    tool.name
                                  )}
                                </h3>
                              </div>
                              <p className="text-slate-600 text-sm line-clamp-2">
                                {highlights.description ? (
                                  <span className="text-blue-600 font-medium">{highlights.description}</span>
                                ) : (
                                  tool.description
                                )}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold">
                              {tool.category}
                            </span>
                            {tool.tags.slice(0, 2).map((tag) => (
                              <span key={tag} className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-xs font-semibold">
                                {tag}
                              </span>
                            ))}
                            {tool.tags.length > 2 && (
                              <span className="px-3 py-1.5 bg-slate-100 text-slate-500 rounded-lg text-xs">
                                +{tool.tags.length - 2}
                              </span>
                            )}
                          </div>
                        </div>
                      </HoverCard>
                    </Link>
                  </StaggerItem>
                );
              })}
              </div>
            </StaggerContainer>
          </div>
        </section>
      </FadeIn>

      {/* Popular Searches */}
      <FadeIn delay={0.4}>
        <section className="py-12 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">热门搜索</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "免费", "中文", "Web", "编程", "写作", "设计", "视频", "音频", "AI 绘画", "聊天机器人"
              ].map((term) => (
                <button
                  key={term}
                  onClick={() => {
                    setQuery(term);
                  }}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
