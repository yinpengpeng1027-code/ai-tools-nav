import Link from "next/link";
import React from "react";
import CategoryClient from "./page-client";

// 分类信息映射（服务器端使用）
const CATEGORY_INFO: Record<string, { desc: string }> = {
  "文本生成": { desc: "AI 写作、翻译、润色、内容生成工具" },
  "图像设计": { desc: "文生图、图生图、图像编辑、Logo 设计工具" },
  "视频制作": { desc: "视频生成、剪辑、特效、字幕工具" },
  "音频处理": { desc: "音乐生成、语音合成、播客制作工具" },
  "办公效率": { desc: "PPT、Excel、邮件、文档自动化工具" },
  "数据分析": { desc: "BI、可视化、数据洞察、报表工具" },
  "对话机器人": { desc: "客服、助手、陪伴、问答机器人" },
  "社交媒体": { desc: "运营、营销、增长、内容分发工具" },
  "开发工具": { desc: "代码生成、测试、部署、DevOps 工具" },
  "学习教育": { desc: "课程、题库、辅导、语言学习工具" },
};

export function generateStaticParams() {
  return Object.keys(CATEGORY_INFO).map((name) => ({
    name: name,
  }));
}

export default function CategoryPage({ params }: { params: Promise<{ name: string }> }) {
  const resolvedParams = React.use(params);
  // 解码 URL 参数（处理中文编码问题）
  const categoryName = decodeURIComponent(resolvedParams.name);
  const category = CATEGORY_INFO[categoryName];

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
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
                <Link href="/login" className="px-5 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                  登录
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="text-center py-32">
          <p className="text-slate-500 text-lg font-medium">分类不存在</p>
          <Link href="/categories" className="mt-4 inline-block text-blue-600 hover:underline">返回分类</Link>
        </div>
      </div>
    );
  }

  return <CategoryClient params={resolvedParams} category={category} categoryName={categoryName} />;
}
