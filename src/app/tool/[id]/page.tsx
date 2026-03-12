// 工具详情页面 - 服务器端组件 - 明亮风格
import Link from "next/link";
import { getToolById, getRelatedTools, type EnhancedTool } from "@/data/index";
import ToolPageClient from "./page-client";

export function generateStaticParams() {
  // 从新的数据源生成静态参数
  return [];
}

// 使用动态工具数据
const getToolsData = async (): Promise<EnhancedTool[]> => {
  const { ALL_TOOLS } = await import("@/data/index");
  return ALL_TOOLS;
};

export default async function ToolPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const allTools = await getToolsData();
  const toolRecord = allTools.reduce((acc, tool) => {
    acc[tool.id.toString()] = tool;
    return acc;
  }, {} as Record<string, EnhancedTool>);

  const tool = toolRecord[id];

  if (!tool) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">工具未找到</h1>
          <p className="text-slate-600 mb-8">抱歉，您访问的工具不存在</p>
          <Link href="/tools" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:opacity-90 transition-opacity">
            返回工具库
          </Link>
        </div>
      </div>
    );
  }

  // 获取相关工具
  const relatedTools = getRelatedTools(tool.id, 5);
  
  return <ToolPageClient tool={tool} relatedTools={relatedTools} />;
}
