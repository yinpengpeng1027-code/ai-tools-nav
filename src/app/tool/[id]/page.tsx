// 工具详情页面 - 服务器端组件 - 明亮风格
import Link from "next/link";
import { TOOLS_DATA } from "@/data/tools-data-rich";
import ToolPageClient from "./page-client";

export function generateStaticParams() {
  return TOOLS_DATA.map((tool) => ({ id: tool.id.toString() }));
}

const toolRecord = TOOLS_DATA.reduce((acc, tool) => {
  acc[tool.id.toString()] = tool;
  return acc;
}, {} as Record<string, typeof TOOLS_DATA[0]>);

export default async function ToolPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
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

  return <ToolPageClient tool={tool} />;
}
