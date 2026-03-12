'use client';

import Link from "next/link";
import { EnhancedTool } from "@/data/index";
import ToolLogo from "./Logo";

// 域名映射表
const TOOL_DOMAINS: Record<number, string> = {
  1: "chatgpt.com",
  2: "midjourney.com",
  3: "notion.so",
  4: "runwayml.com",
  5: "elevenlabs.io",
  6: "jasper.ai",
  7: "yiyan.baidu.com",
  8: "tongyi.aliyun.com",
  9: "stability.ai",
  10: "canva.com",
  11: "capcut.cn",
  12: "suno.ai",
  13: "cursor.sh",
  14: "github.com/features/copilot",
  15: "kimi.moonshot.cn",
  16: "chatglm.cn",
  17: "xinghuo.xfyun.cn",
  18: "copilot.microsoft.com",
  19: "gemini.google.com",
  20: "character.ai",
  21: "blackboxai.dev",
  22: "replicate.com",
  23: "stablediffusion.ai",
  24: "dalle.app",
  25: "midjourney.app",
  26: "leonardo.ai",
  27: "playgroundai.com",
  28: "artbreeder.com",
  29: "descript.com",
  30: "adobe.firefly.io",
  31: "finalcutpro.com",
  32: " premiere.adobe.com",
  33: "capcut.com",
  34: "invideo.io",
  35: "runwayml.app",
  36: "magenta.studio",
  37: "Soundraw.io",
  38: "mubert.com",
  39: "destiny.ai",
  40: "boomy.com",
  41: "sonicatoms.com",
  42: "visly.app",
  43: " descript.com",
  44: "elevenlabs.io",
  45: "reallusion.com",
  46: "iclone.ai",
  47: "synthesize.com",
  48: "play.ht",
  49: "murf.ai",
  51: " libreoffice.org",
  52: " onlyoffice.com",
  53: "zoho.com",
  54: "gLite.com",
  55: "notion.ai",
  56: "evernote.com",
  57: "mem.ai",
  58: "asana.com",
  59: "trello.com",
  60: "linear.app",
  61: "notion.so",
  62: "cotton.co",
  63: "hegel.ai",
  64: "google.com/analytics",
  65: "analytics.google.com",
  66: "tableau.com",
  67: "visualforce.com",
  68: "powerbi.com",
  69: "metabase.com",
  70: "superset.apache.org",
  71: " chat.openai.com",
  72: " claude.ai",
  73: " copilot.microsoft.com",
  74: " gemini.google.com",
  75: " character.ai",
  76: " blackboxai.dev",
  77: " you.com",
  78: " perplexity.ai",
  79: " chatgpt.com",
  80: " phi.com",
  81: " meta.com",
  82: " reddit.com",
  83: " tiktok.com",
  84: " instagram.com",
  85: " facebook.com",
  86: " youtube.com",
  87: "twitter.com",
  88: "linkedin.com",
  89: " discord.com",
  90: " slack.com",
  91: " teams.microsoft.com",
  92: " zoom.us",
  93: " google.com/maps",
  94: " maps.google.com",
  95: " baidu.com",
  96: " alibaba.com",
  97: " tencent.com",
  98: " bytedance.com",
  99: " netease.com",
  100: " jd.com",
};

interface ToolCardProps {
  tool: EnhancedTool;
  showLogo?: boolean;
  showCategory?: boolean;
  showTags?: boolean;
  showVipBadge?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export default function ToolCard({ 
  tool, 
  showLogo = true, 
  showCategory = true, 
  showTags = true, 
  showVipBadge = true,
  size = 'medium' 
}: ToolCardProps) {
  const domain = TOOL_DOMAINS[tool.id] || new URL(tool.url).hostname.replace('www.', '');
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
            {showVipBadge && tool.isVip && (
              <span className="px-2.5 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-xs font-bold shadow-md">
                VIP
              </span>
            )}
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
