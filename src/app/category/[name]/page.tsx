import Link from "next/link";
import React from "react";

const CATEGORY_INFO: Record<string, { desc: string; tools: any[] }> = {
  "文本生成": {
    desc: "AI 写作、翻译、润色、内容生成工具",
    tools: [
      { id: 1, name: "ChatGPT", description: "OpenAI 的智能对话 AI", logo: "🤖", isVip: false },
      { id: 6, name: "Jasper", description: "AI 营销文案", logo: "✍️", isVip: false },
      { id: 7, name: "文心一言", description: "百度大语言模型", logo: "🇨🇳", isVip: false },
      { id: 8, name: "通义千问", description: "阿里大语言模型", logo: "🤖", isVip: false },
      { id: 15, name: "Kimi", description: "月之暗面大模型", logo: "🌙", isVip: false },
      { id: 16, name: "智谱清言", description: "智谱 AI 大模型", logo: "🧠", isVip: false },
    ]
  },
  "图像设计": {
    desc: "文生图、图生图、图像编辑、Logo 设计工具",
    tools: [
      { id: 2, name: "Midjourney", description: "AI 绘画工具", logo: "🎨", isVip: true },
      { id: 9, name: "Stable Diffusion", description: "开源 AI 绘画模型", logo: "🎨", isVip: false },
      { id: 10, name: "Canva AI", description: "AI 设计工具", logo: "🎨", isVip: false },
    ]
  },
  "视频制作": {
    desc: "视频生成、剪辑、特效、字幕工具",
    tools: [
      { id: 4, name: "Runway", description: "AI 视频生成", logo: "🎬", isVip: true },
      { id: 11, name: "剪映", description: "AI 视频剪辑工具", logo: "🎬", isVip: false },
    ]
  },
  "音频处理": {
    desc: "音乐生成、语音合成、播客制作工具",
    tools: [
      { id: 5, name: "ElevenLabs", description: "AI 语音合成", logo: "🎵", isVip: true },
      { id: 12, name: "Suno AI", description: "AI 音乐生成器", logo: "🎵", isVip: true },
    ]
  },
  "办公效率": {
    desc: "PPT、Excel、邮件、文档自动化工具",
    tools: [
      { id: 3, name: "Notion AI", description: "智能笔记助手", logo: "📝", isVip: false },
    ]
  },
  "数据分析": {
    desc: "BI、可视化、数据洞察、报表工具",
    tools: []
  },
  "对话机器人": {
    desc: "客服、助手、陪伴、问答机器人",
    tools: []
  },
  "社交媒体": {
    desc: "运营、营销、增长、内容分发工具",
    tools: []
  },
  "开发工具": {
    desc: "代码生成、测试、部署、DevOps 工具",
    tools: [
      { id: 13, name: "Cursor", description: "AI 代码编辑器", logo: "💻", isVip: false },
      { id: 14, name: "GitHub Copilot", description: "AI 编程助手", logo: "💻", isVip: true },
    ]
  },
  "学习教育": {
    desc: "课程、题库、辅导、语言学习工具",
    tools: []
  },
};

export function generateStaticParams() {
  return Object.keys(CATEGORY_INFO).map((name) => ({
    name: encodeURIComponent(name),
  }));
}

export default function CategoryPage({ params }: { params: Promise<{ name: string }> }) {
  const resolvedParams = React.use(params);
  const categoryName = decodeURIComponent(resolvedParams.name);
  const category = CATEGORY_INFO[categoryName] || { desc: "", tools: [] };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                AI 工具导航站
              </span>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/tools" className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium">工具库</Link>
              <Link href="/categories" className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium">分类</Link>
              <Link href="/vip" className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium">VIP 专区</Link>
              <Link href="/login" className="px-5 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5">
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
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {category.tools.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.tools.map((tool) => (
                <Link
                  key={tool.id}
                  href={`/tool/${tool.id}`}
                  className="group p-6 bg-white border-2 border-slate-100 rounded-2xl hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform duration-300">
                      {tool.logo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-lg text-slate-900 truncate">{tool.name}</h3>
                        {tool.isVip && (
                          <span className="px-2.5 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-xs font-bold shadow-md">
                            VIP
                          </span>
                        )}
                      </div>
                      <p className="text-slate-600 text-sm mb-3 font-medium">{tool.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
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
