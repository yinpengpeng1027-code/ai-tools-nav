'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// 本地 Logo 映射 - 当 Clearbit 不可用时使用
const LOCAL_LOGO_MAP: Record<string, string> = {
  "chatgpt.com": "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
  "claude.ai": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Claude_logo_%282024%29.svg",
  "jasper.ai": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Jasper_logo.svg/1200px-Jasper_logo.svg.png",
  "copy.ai": "https://cdn-www.copy.ai/logo.png",
  "notion.so": "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_logo.svg",
  "grammarly.com": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Grammarly_logo.svg/1200px-Grammarly_logo.svg.png",
  "midjourney.com": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Midjourney_logo.svg/1200px-Midjourney_logo.svg.png",
  "openai.com": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/OpenAI_Logo.svg/1200px-OpenAI_Logo.svg.png",
  "anthropic.com": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Anthropic_logo.svg/1200px-Anthropic_logo.svg.png",
  "yiyan.baidu.com": "https://yiyan.baidu.com/favicon.ico",
  "tongyi.aliyun.com": "https://tongyi.aliyun.com/favicon.ico",
  "kimi.moonshot.cn": "https://kimi.moonshot.cn/favicon.ico",
  "chatglm.cn": "https://chatglm.cn/favicon.ico",
  "xinghuo.xfyun.cn": "https://xinghuo.xfyun.cn/favicon.ico",
  "capcut.cn": "https://capcut.cn/favicon.ico",
  "meitu.com": "https://meitu.com/favicon.ico",
  "gaoding.com": "https://gaoding.com/favicon.ico",
  "writesonic.com": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Writesonic_Logo.svg/1200px-Writesonic_Logo.svg.png",
  "rytr.me": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rytr_logo.svg/1200px-Rytr_logo.svg.png",
  "runwayml.com": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Runway_logo.svg/1200px-Runway_logo.svg.png",
  "elevenlabs.io": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/ElevenLabs_logo.svg/1200px-ElevenLabs_logo.svg.png",
  "suno.ai": "https://cdn.suno.ai/logo.png",
  "copilot.github.com": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/GitHub_Copilot_logo.svg/1200px-GitHub_Copilot_logo.svg.png",
  "replit.com": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Replit_logo.svg/1200px-Replit_logo.svg.png",
  "huggingface.co": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Hugging_Face_logo.svg/1200px-Hugging_Face_logo.svg.png",
  "vercel.com": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Vercel_logo.svg/1200px-Vercel_logo.svg.png",
  "figma.com": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma_logo.svg/1200px-Figma_logo.svg.png",
  "slack.com": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/1200px-Slack_icon_2019.svg.png",
  "zoom.us": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Zoom_Communications_Logo_2020.svg/1200px-Zoom_Communications_Logo_2020.svg.png",
  "canva.com": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/1200px-Canva_icon_2021.svg.png",
  "adobe.com": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Adobe_Firefly_logo.svg/1200px-Adobe_Firefly_logo.svg.png",
};

interface ToolLogoProps {
  domain: string;
  fallbackEmoji: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
}

export default function ToolLogo({ 
  domain, 
  fallbackEmoji, 
  size = 'medium', 
  className = '', 
  onClick 
}: ToolLogoProps) {
  const sizeClasses = {
    small: 'w-10 h-10 text-lg',
    medium: 'w-14 h-14 text-2xl',
    large: 'w-24 h-24 text-5xl',
  };

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // 从 URL 提取域名
  const domainWithoutProtocol = domain.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const baseDomain = domainWithoutProtocol.replace(/^www\./, '');

  useEffect(() => {
    // 1. 首先尝试本地映射
    const localLogo = LOCAL_LOGO_MAP[baseDomain] || LOCAL_LOGO_MAP[domainWithoutProtocol];
    
    // 2. 尝试 Clearbit API（当本地映射不存在时）
    if (!localLogo) {
      const clearbitUrl = `https://logo.clearbit.com/${domainWithoutProtocol}`;
      setImageUrl(clearbitUrl);
      setIsLoading(true);
      setError(false);
    } else {
      setImageUrl(localLogo);
      setIsLoading(false);
      setError(false);
    }
  }, [domain]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    // 如果 Clearbit 失败，使用 fallback emoji
    setIsLoading(false);
    setError(true);
  };

  return (
    <div 
      onClick={onClick}
      className={`
        ${sizeClasses[size]}
        bg-white
        flex 
        items-center 
        justify-center 
        overflow-hidden 
        cursor-pointer
        transition-all
        hover:scale-105
        ${className}
      `}
      style={{
        borderRadius: '12px',
        width: size === 'small' ? '40px' : size === 'medium' ? '56px' : '96px',
        height: size === 'small' ? '40px' : size === 'medium' ? '56px' : '96px',
      }}
      role="img"
      aria-label={`${domain} logo`}
    >
      {/* Loading Skeleton */}
      {isLoading && !imageUrl && (
        <div className="w-full h-full bg-slate-200 animate-pulse" style={{ borderRadius: '12px' }} />
      )}

      {/* Logo Image */}
      {imageUrl && !error && !isLoading && (
        <Image
          src={imageUrl}
          alt={`${domain} Logo`}
          className="w-full h-full object-cover"
          style={{ borderRadius: '12px' }}
          width={100}
          height={100}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="lazy"
          unoptimized={true}
        />
      )}

      {/* Fallback Emoji */}
      {(error || isLoading === false) && (!imageUrl || error) && (
        <div 
          className="w-full h-full flex items-center justify-center text-3xl bg-gradient-to-br from-blue-500 to-purple-500"
          style={{ borderRadius: '12px' }}
        >
          <span className="select-none">{fallbackEmoji}</span>
        </div>
      )}
    </div>
  );
}
