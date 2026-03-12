/**
 * AI 工具 Logo 组件 - 轻量版
 * 使用 jsDelivr CDN，代码精简至 200 行
 */

import React from 'react';

export interface LogoConfig {
  alt: string;
  emoji: string;
  bgColor: string;
}

// 工具 Logo 配置（只存配置，不存 URL）
export const LOCAL_LOGO_MAP: Record<string, LogoConfig> = {
  'ChatGPT': { alt: 'ChatGPT', emoji: '🤖', bgColor: '#10a37f' },
  'Claude': { alt: 'Claude', emoji: '🤖', bgColor: '#d97757' },
  'Midjourney': { alt: 'Midjourney', emoji: '⛵', bgColor: '#000000' },
  'Notion AI': { alt: 'Notion AI', emoji: '📝', bgColor: '#000000' },
  'Notion': { alt: 'Notion', emoji: '📝', bgColor: '#000000' },
  'Runway': { alt: 'Runway', emoji: '🎬', bgColor: '#000000' },
  'ElevenLabs': { alt: 'ElevenLabs', emoji: '🔊', bgColor: '#000000' },
  'Jasper': { alt: 'Jasper', emoji: '✍️', bgColor: '#000000' },
  'GitHub Copilot': { alt: 'GitHub Copilot', emoji: '👨‍✈️', bgColor: '#000000' },
  'Cursor': { alt: 'Cursor', emoji: '🖱️', bgColor: '#000000' },
  'Figma': { alt: 'Figma', emoji: '🎨', bgColor: '#F24E1E' },
  'Canva': { alt: 'Canva', emoji: '🎨', bgColor: '#00C4CC' },
  'Stable Diffusion': { alt: 'Stable Diffusion', emoji: '🎨', bgColor: '#000000' },
  'DALL-E 3': { alt: 'DALL-E 3', emoji: '🎨', bgColor: '#000000' },
  'DALL-E': { alt: 'DALL-E', emoji: '🎨', bgColor: '#000000' },
  'Sora': { alt: 'Sora', emoji: '🎬', bgColor: '#000000' },
  'GPT-4': { alt: 'GPT-4', emoji: '🤖', bgColor: '#000000' },
  'Gemini': { alt: 'Gemini', emoji: '✨', bgColor: '#4285F4' },
  'Llama': { alt: 'Llama', emoji: '🦙', bgColor: '#000000' },
  'Hugging Face': { alt: 'Hugging Face', emoji: '🤗', bgColor: '#FFD21E' },
  '文心一言': { alt: '文心一言', emoji: '💬', bgColor: '#000000' },
  '通义千问': { alt: '通义千问', emoji: '💬', bgColor: '#000000' },
  'Kimi': { alt: 'Kimi', emoji: '🌙', bgColor: '#000000' },
  '智谱 AI': { alt: '智谱 AI', emoji: '🧠', bgColor: '#000000' },
  '讯飞星火': { alt: '讯飞星火', emoji: '✨', bgColor: '#000000' },
  '百度 AI': { alt: '百度 AI', emoji: '🔍', bgColor: '#2932E1' },
  '腾讯 AI': { alt: '腾讯 AI', emoji: '🐧', bgColor: '#000000' },
  '阿里 AI': { alt: '阿里 AI', emoji: '🐱', bgColor: '#FF6A00' },
};

// 域名映射
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
  '文心一言': 'yiyan.baidu.com',
  '通义千问': 'tongyi.aliyun.com',
  'Kimi': 'kimi.moonshot.cn',
  '智谱 AI': 'chatglm.cn',
  '讯飞星火': 'xinghuo.xfyun.cn',
  '百度 AI': 'ai.baidu.com',
  '腾讯 AI': 'ai.tencent.com',
  '阿里 AI': 'ai.aliyun.com',
};

export interface LogoProps {
  name: string;
  size?: number | 'small' | 'medium' | 'large';
  className?: string;
}

function extractDomain(name: string): string {
  return domainMap[name] || name.toLowerCase().replace(/\s+/g, '') + '.com';
}

function getLogoUrl(domain: string): string {
  // 使用 jsDelivr CDN 加载 simple-icons
  const iconName = domain.replace('.com', '').replace('.cn', '').replace('.io', '').replace('.', '');
  return `https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/${iconName}.svg`;
}

export const ToolLogo: React.FC<LogoProps> = ({
  name,
  size = 48,
  className = '',
}) => {
  const sizeInPx = typeof size === 'string' 
    ? size === 'small' ? 32 : size === 'medium' ? 48 : 64
    : size;

  const config = LOCAL_LOGO_MAP[name];
  const domain = extractDomain(name);
  const logoUrl = getLogoUrl(domain);

  return (
    <div
      className={`flex items-center justify-center rounded-xl overflow-hidden shadow-md ${className}`}
      style={{
        width: sizeInPx,
        height: sizeInPx,
        backgroundColor: config?.bgColor || '#6366f1',
      }}
      title={config?.alt || name}
    >
      <img
        src={logoUrl}
        alt={config?.alt || name}
        width={sizeInPx}
        height={sizeInPx}
        className="w-full h-full object-contain p-2"
        loading="eager"
        onError={(e) => {
          // 加载失败显示 emoji
          (e.target as HTMLImageElement).style.display = 'none';
          (e.target as HTMLImageElement).parentElement!.innerHTML = `
            <span class="text-white text-2xl font-bold">
              ${config?.emoji || config?.alt?.charAt(0) || name.charAt(0).toUpperCase()}
            </span>
          `;
        }}
      />
    </div>
  );
};

export default ToolLogo;
