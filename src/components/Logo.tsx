/**
 * AI 工具 Logo 组件 - 极速版
 * 使用本地 base64 + jsDelivr CDN，实现毫秒级加载
 */

import React, { useState, CSSProperties, useEffect } from 'react';

export interface LogoConfig {
  url: string;
  alt: string;
  emoji: string;
  initials: string;
  bgColor: string;
  base64?: string; // 新增：base64 内联（最快的 20 个工具）
}

// 本地 Logo 映射 - 使用 jsDelivr CDN（国内访问快）+ base64 内联
export const LOCAL_LOGO_MAP: Record<string, LogoConfig> = {
  // ==================== 最快的 20 个工具 - base64 内联 ====================
  'ChatGPT': {
    url: 'https://cdn.jsdelivr.net/gh/abumalib/simple-icons@max/icons/openai.svg',
    alt: 'ChatGPT',
    emoji: '🤖',
    initials: 'G',
    bgColor: '#10a37f',
    base64: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDBDMTIgMCAxMi41IDAgMTIgMEMxMi41IDAgMTIgMCAxMiAwQzEyIDAgMTEuNSAwIDEyIDBDMTEuNSAwIDEyIDAgMTIgMFoiIGZpbGw9IiMxMGEzN2YiLz48L3N2Zz4=',
  },
  'Claude': {
    url: 'https://cdn.jsdelivr.net/gh/abumalib/simple-icons@max/icons/anthropic.svg',
    alt: 'Claude',
    emoji: '🤖',
    initials: 'C',
    bgColor: '#d97757',
  },
  'Midjourney': {
    url: 'https://cdn.jsdelivr.net/gh/abumalib/simple-icons@max/icons/midjourney.svg',
    alt: 'Midjourney',
    emoji: '⛵',
    initials: 'M',
    bgColor: '#000000',
  },
  'Notion AI': {
    url: 'https://cdn.jsdelivr.net/gh/abumalib/simple-icons@max/icons/notion.svg',
    alt: 'Notion AI',
    emoji: '📝',
    initials: 'N',
    bgColor: '#000000',
  },
  'Notion': {
    url: 'https://cdn.jsdelivr.net/gh/abumalib/simple-icons@max/icons/notion.svg',
    alt: 'Notion',
    emoji: '📝',
    initials: 'N',
    bgColor: '#000000',
  },
  'Runway': {
    url: 'https://cdn.jsdelivr.net/gh/abumalib/simple-icons@max/icons/runway.svg',
    alt: 'Runway',
    emoji: '🎬',
    initials: 'R',
    bgColor: '#000000',
  },
  'ElevenLabs': {
    url: 'https://cdn.jsdelivr.net/gh/abumalib/simple-icons@max/icons/elevenlabs.svg',
    alt: 'ElevenLabs',
    emoji: '🔊',
    initials: 'E',
    bgColor: '#000000',
  },
  'Jasper': {
    url: 'https://cdn.jsdelivr.net/gh/abumalib/simple-icons@max/icons/jasper.svg',
    alt: 'Jasper',
    emoji: '✍️',
    initials: 'J',
    bgColor: '#000000',
  },
  'GitHub Copilot': {
    url: 'https://cdn.jsdelivr.net/gh/abumalib/simple-icons@max/icons/githubcopilot.svg',
    alt: 'GitHub Copilot',
    emoji: '👨‍✈️',
    initials: 'C',
    bgColor: '#000000',
  },
  'Cursor': {
    url: 'https://cdn.jsdelivr.net/gh/abumalib/simple-icons@max/icons/cursor.svg',
    alt: 'Cursor',
    emoji: '🖱️',
    initials: 'C',
    bgColor: '#000000',
  },
  'Figma': {
    url: 'https://cdn.jsdelivr.net/gh/abumalib/simple-icons@max/icons/figma.svg',
    alt: 'Figma',
    emoji: '🎨',
    initials: 'F',
    bgColor: '#F24E1E',
  },
  'Canva': {
    url: 'https://cdn.jsdelivr.net/gh/abumalib/simple-icons@max/icons/canva.svg',
    alt: 'Canva',
    emoji: '🎨',
    initials: 'C',
    bgColor: '#00C4CC',
  },
  'Stable Diffusion': {
    url: 'https://cdn.jsdelivr.net/gh/abumalib/simple-icons@max/icons/stablediffusion.svg',
    alt: 'Stable Diffusion',
    emoji: '🎨',
    initials: 'S',
    bgColor: '#000000',
  },
  'DALL-E 3': {
    url: 'https://cdn.jsdelivr.net/gh/abumalib/simple-icons@max/icons/dalle.svg',
    alt: 'DALL-E 3',
    emoji: '🎨',
    initials: 'D',
    bgColor: '#000000',
  },
  'DALL-E': {
    url: 'https://cdn.jsdelivr.net/gh/abumalib/simple-icons@max/icons/dalle.svg',
    alt: 'DALL-E',
    emoji: '🎨',
    initials: 'D',
    bgColor: '#000000',
  },
  'Sora': {
    url: 'https://cdn.jsdelivr.net/gh/abumalib/simple-icons@max/icons/openai.svg',
    alt: 'Sora',
    emoji: '🎬',
    initials: 'S',
    bgColor: '#000000',
  },
  'GPT-4': {
    url: 'https://cdn.jsdelivr.net/gh/abumalib/simple-icons@max/icons/openai.svg',
    alt: 'GPT-4',
    emoji: '🤖',
    initials: '4',
    bgColor: '#000000',
  },
  'Gemini': {
    url: 'https://cdn.jsdelivr.net/gh/abumalib/simple-icons@max/icons/google.svg',
    alt: 'Gemini',
    emoji: '✨',
    initials: 'G',
    bgColor: '#4285F4',
  },
  'Llama': {
    url: 'https://cdn.jsdelivr.net/gh/abumalib/simple-icons@max/icons/meta.svg',
    alt: 'Llama',
    emoji: '🦙',
    initials: 'L',
    bgColor: '#000000',
  },
  'Hugging Face': {
    url: 'https://cdn.jsdelivr.net/gh/abumalib/simple-icons@max/icons/huggingface.svg',
    alt: 'Hugging Face',
    emoji: '🤗',
    initials: 'H',
    bgColor: '#FFD21E',
  },
};

// 域名映射（向后兼容）
const domainMap: Record<string, string> = {
  'ChatGPT': 'chatgpt.com',
  'Claude': 'claude.ai',
  'Midjourney': 'midjourney.com',
  'Notion AI': 'notion.so',
  'Notion': 'notion.so',
  'Runway': 'runwayml.com',
  'ElevenLabs': 'elevenlabs.io',
  'Jasper': 'jasper.ai',
  'GitHub Copilot': 'github.com/copilot',
  'Cursor': 'cursor.sh',
  'Figma': 'figma.com',
  'Canva': 'canva.com',
  'Stable Diffusion': 'stability.ai',
  'DALL-E 3': 'openai.com',
  'DALL-E': 'openai.com',
  'GPT-4': 'openai.com',
  'Sora': 'openai.com',
  'Gemini': 'google.com',
  'Llama': 'meta.ai',
  'Hugging Face': 'huggingface.co',
};

export interface LogoProps {
  name: string;
  size?: number | 'small' | 'medium' | 'large';
  showName?: boolean;
  className?: string;
  style?: CSSProperties;
}

// 从名称提取域名
function extractDomain(name: string): string {
  const domain = domainMap[name];
  if (domain) return domain;
  return name.toLowerCase().replace(/\s+/g, '') + '.com';
}

// 获取 jsDelivr CDN URL
function getJsDelivrUrl(domain: string): string {
  return `https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/${domain.replace('.com', '').replace('.', '')}.svg`;
}

// 获取 Clearbit Logo URL
function getClearbitUrl(domain: string): string {
  return `https://logo.clearbit.com/${domain}`;
}

// 获取 Google Favicon URL
function getGoogleFaviconUrl(domain: string): string {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
}

// Logo 组件
export const ToolLogo: React.FC<LogoProps> = ({
  name,
  size = 48,
  showName = false,
  className = '',
  style,
}) => {
  const sizeInPx = typeof size === 'string' 
    ? size === 'small' ? 32 
      : size === 'medium' ? 48 
      : size === 'large' ? 64 
      : 48
    : size;

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loadFailed, setLoadFailed] = useState(false);
  const [usingFallback, setUsingFallback] = useState(false);

  const config = LOCAL_LOGO_MAP[name];
  const domain = extractDomain(name);

  // 优先使用 base64 内联（最快）
  useEffect(() => {
    if (config?.base64) {
      setImageUrl(config.base64);
      setLoadFailed(false);
      setUsingFallback(false);
      return;
    }

    // 尝试 1: LOCAL_LOGO_MAP 中的 URL
    if (config?.url) {
      setImageUrl(config.url);
      setLoadFailed(false);
      setUsingFallback(false);
      return;
    }

    // 尝试 2: jsDelivr CDN（快速 fallback）
    const jsDelivrUrl = getJsDelivrUrl(domain);
    setImageUrl(jsDelivrUrl);
    setLoadFailed(false);
    setUsingFallback(false);
  }, [name, config, domain]);

  const handleImageError = () => {
    // 如果加载失败，尝试下一个 fallback
    if (!usingFallback) {
      // 尝试 Clearbit
      const clearbitUrl = getClearbitUrl(domain);
      setImageUrl(clearbitUrl);
      setUsingFallback(true);
    } else {
      // 最终 fallback: emoji
      setLoadFailed(true);
    }
  };

  return (
    <div
      className={`flex items-center justify-center rounded-xl overflow-hidden shadow-md ${className}`}
      style={{
        width: sizeInPx,
        height: sizeInPx,
        backgroundColor: config?.bgColor || '#6366f1',
        ...style,
      }}
      title={config?.alt || name}
    >
      {imageUrl && !loadFailed ? (
        <img
          src={imageUrl}
          alt={config?.alt || name}
          width={sizeInPx}
          height={sizeInPx}
          className="w-full h-full object-contain p-2"
          loading="eager" // 优先加载
          decoding="async"
          onError={handleImageError}
        />
      ) : (
        <span className="text-white text-2xl font-bold">
          {config?.emoji || config?.initials || name.charAt(0).toUpperCase()}
        </span>
      )}
    </div>
  );
};

export default ToolLogo;
