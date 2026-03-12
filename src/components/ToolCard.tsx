'use client';

import Link from "next/link";
import { EnhancedTool } from "@/data/index";
import ToolLogo from "./Logo";

interface ToolCardProps {
  tool: EnhancedTool;
  showLogo?: boolean;
  showCategory?: boolean;
  showTags?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export default function ToolCard({ 
  tool, 
  showLogo = true, 
  showCategory = true, 
  showTags = true,
  size = 'medium' 
}: ToolCardProps) {
  // 直接从工具数据的 URL 提取域名，确保链接与工具名称一致
  const domain = new URL(tool.url).hostname.replace('www.', '');
  const fallbackEmoji = tool.logo;

  const getLogoSize = () => {
    switch(size) {
      case 'small': return 'small';
      case 'large': return 'large';
      default: return 'medium';
    }
  };

  return (
    <Link
      href={`/tool/${tool.id}`}
      className="group p-6 bg-white border-2 border-slate-100 rounded-2xl hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 block"
    >
      <div className="flex items-start gap-4 mb-4">
        {showLogo && (
          <div className="flex-shrink-0">
            <ToolLogo 
              domain={domain} 
              fallbackEmoji={fallbackEmoji}
              size={getLogoSize()}
              className="shadow-lg shadow-blue-500/30"
            />
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h3 className={`font-bold ${size === 'large' ? 'text-2xl' : 'text-xl'} text-slate-900 truncate`}>
              {tool.name}
            </h3>
          </div>
          
          <p className={`text-slate-600 ${size === 'large' ? 'text-base' : 'text-sm'} line-clamp-2 font-medium mb-2`}>
            {tool.description}
          </p>
          
          {showTags && (
            <div className="flex flex-wrap gap-2">
              {showCategory && (
                <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold">
                  {tool.category}
                </span>
              )}
              {tool.tags.slice(0, size === 'large' ? 3 : 2).map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-xs font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
