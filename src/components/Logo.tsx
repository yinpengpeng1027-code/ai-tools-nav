/**
 * AI 工具 Logo 组件
 * 包含常用 AI 工具的官方 Logo 映射和优雅的 fallback 处理
 */

import React, { useState, CSSProperties } from 'react';

// Logo 类型定义
export interface LogoConfig {
  url: string;
  alt: string;
  emoji: string;
  initials: string;
  bgColor: string;
}

// 本地 Logo 映射表 - 使用官方 CDN 和稳定图床
// 优先级：1. LOCAL_LOGO_MAP → 2. Clearbit API → 3. Google Favicon → 4. emoji fallback
export const LOCAL_LOGO_MAP: Record<string, LogoConfig> = {
  // ==================== OpenAI 系列 ====================
  'ChatGPT': {
    url: 'https://cdn.worldvectorlogo.com/logos/chatgpt.svg',
    alt: 'ChatGPT',
    emoji: '🤖',
    initials: 'G',
    bgColor: '#10a37f',
  },
  'GPT-4': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    alt: 'GPT-4',
    emoji: '⚡',
    initials: '4',
    bgColor: '#000000',
  },
  'DALL-E 3': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/87/DALL%C2%B7E_Logo.svg',
    alt: 'DALL-E 3',
    emoji: '🎨',
    initials: 'D',
    bgColor: '#f5f5f5',
  },
  'DALL-E': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/87/DALL%C2%B7E_Logo.svg',
    alt: 'DALL-E',
    emoji: '🎨',
    initials: 'D',
    bgColor: '#f5f5f5',
  },
  'Sora': {
    url: 'https://cdn.worldvectorlogo.com/logos/openai-icon.svg',
    alt: 'Sora',
    emoji: '🎬',
    initials: 'S',
    bgColor: '#000000',
  },

  // ==================== Anthropic 系列 ====================
  'Claude': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Claude_ai_logo.svg',
    alt: 'Claude',
    emoji: '🎯',
    initials: 'C',
    bgColor: '#d97757',
  },
  'Claude 3': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Claude_ai_logo.svg',
    alt: 'Claude 3',
    emoji: '🎯',
    initials: 'C',
    bgColor: '#d97757',
  },

  // ==================== Midjourney ====================
  'Midjourney': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Midjourney_Emblem.png',
    alt: 'Midjourney',
    emoji: '🎭',
    initials: 'M',
    bgColor: '#ffffff',
  },

  // ==================== Notion 系列 ====================
  'Notion AI': {
    url: 'https://www.notion.so/images/meta/default.png',
    alt: 'Notion AI',
    emoji: '📝',
    initials: 'N',
    bgColor: '#000000',
  },
  'Notion': {
    url: 'https://www.notion.so/images/meta/default.png',
    alt: 'Notion',
    emoji: '📝',
    initials: 'N',
    bgColor: '#000000',
  },

  // ==================== 百度文心一言 ====================
  '文心一言': {
    url: 'https://yiyan.baidu.com/static/imgs/logo.png',
    alt: '文心一言',
    emoji: '💬',
    initials: '文',
    bgColor: '#2962ff',
  },
  'ERNIE Bot': {
    url: 'https://yiyan.baidu.com/static/imgs/logo.png',
    alt: 'ERNIE Bot',
    emoji: '💬',
    initials: 'E',
    bgColor: '#2962ff',
  },

  // ==================== 阿里通义千问 ====================
  '通义千问': {
    url: 'https://img.alicdn.com/imgextra/i2/O1CN01dUZW5j1hQXW8yZwMz_!!6000000004273-2-tps-200-200.png',
    alt: '通义千问',
    emoji: '🔮',
    initials: '通',
    bgColor: '#615ced',
  },
  'Qwen': {
    url: 'https://img.alicdn.com/imgextra/i2/O1CN01dUZW5j1hQXW8yZwMz_!!6000000004273-2-tps-200-200.png',
    alt: 'Qwen',
    emoji: '🔮',
    initials: 'Q',
    bgColor: '#615ced',
  },

  // ==================== 月之暗面 Kimi ====================
  'Kimi': {
    url: 'https://kimi.moonshot.cn/static/logo.png',
    alt: 'Kimi',
    emoji: '🌙',
    initials: 'K',
    bgColor: '#000000',
  },

  // ==================== 智谱 ChatGLM ====================
  'ChatGLM': {
    url: 'https://www.zhipuai.cn/static/logo.png',
    alt: 'ChatGLM',
    emoji: '🧠',
    initials: 'G',
    bgColor: '#3b82f6',
  },
  'GLM-4': {
    url: 'https://www.zhipuai.cn/static/logo.png',
    alt: 'GLM-4',
    emoji: '🧠',
    initials: 'G',
    bgColor: '#3b82f6',
  },
  '智谱清言': {
    url: 'https://www.zhipuai.cn/static/logo.png',
    alt: '智谱清言',
    emoji: '🧠',
    initials: '智',
    bgColor: '#3b82f6',
  },

  // ==================== 讯飞星火 ====================
  '讯飞星火': {
    url: 'https://xinghuo.xfyun.cn/static/imgs/logo.png',
    alt: '讯飞星火',
    emoji: '✨',
    initials: '讯',
    bgColor: '#ff6b00',
  },
  'Spark': {
    url: 'https://xinghuo.xfyun.cn/static/imgs/logo.png',
    alt: 'Spark',
    emoji: '✨',
    initials: 'S',
    bgColor: '#ff6b00',
  },

  // ==================== GitHub 系列 ====================
  'GitHub Copilot': {
    url: 'https://github.githubassets.com/images/modules/site/copilot/copilot_logo.svg',
    alt: 'GitHub Copilot',
    emoji: '👨‍✈️',
    initials: 'GC',
    bgColor: '#000000',
  },
  'Copilot': {
    url: 'https://github.githubassets.com/images/modules/site/copilot/copilot_logo.svg',
    alt: 'Copilot',
    emoji: '👨‍✈️',
    initials: 'C',
    bgColor: '#000000',
  },
  'Microsoft Copilot': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Microsoft_Copilot_Logo.svg',
    alt: 'Microsoft Copilot',
    emoji: '📎',
    initials: 'MC',
    bgColor: '#0078d4',
  },

  // ==================== 代码工具 ====================
  'Cursor': {
    url: 'https://cursor.sh/logo.png',
    alt: 'Cursor',
    emoji: '🖱️',
    initials: 'C',
    bgColor: '#1a1a1a',
  },
  'Replit': {
    url: 'https://replit.com/public/images/logo.png',
    alt: 'Replit',
    emoji: '💻',
    initials: 'R',
    bgColor: '#f26202',
  },
  'Codeium': {
    url: 'https://codeium.com/logo.png',
    alt: 'Codeium',
    emoji: '💎',
    initials: 'C',
    bgColor: '#1a1a2e',
  },
  'Tabnine': {
    url: 'https://www.tabnine.com/wp-content/uploads/2020/07/tabnine-logo.png',
    alt: 'Tabnine',
    emoji: '🐶',
    initials: 'T',
    bgColor: '#624dff',
  },
  'Windsurf': {
    url: 'https://codeium.com/windsurf/logo.png',
    alt: 'Windsurf',
    emoji: '🏄',
    initials: 'W',
    bgColor: '#0077b6',
  },
  'Bolt.new': {
    url: 'https://bolt.new/logo.png',
    alt: 'Bolt.new',
    emoji: '⚡',
    initials: 'B',
    bgColor: '#000000',
  },
  'V0': {
    url: 'https://v0.dev/logo.png',
    alt: 'V0',
    emoji: '🔢',
    initials: 'V',
    bgColor: '#000000',
  },
  'Lovable': {
    url: 'https://lovable.dev/logo.png',
    alt: 'Lovable',
    emoji: '💝',
    initials: 'L',
    bgColor: '#ec4899',
  },

  // ==================== Hugging Face ====================
  'Hugging Face': {
    url: 'https://huggingface.co/front/assets/huggingface_logo.svg',
    alt: 'Hugging Face',
    emoji: '🤗',
    initials: 'HF',
    bgColor: '#ffd21e',
  },

  // ==================== 设计工具 ====================
  'Canva': {
    url: 'https://static.canva.com/web/images/canva-logo.png',
    alt: 'Canva',
    emoji: '🎨',
    initials: 'C',
    bgColor: '#00c4cc',
  },
  'Canva AI': {
    url: 'https://static.canva.com/web/images/canva-logo.png',
    alt: 'Canva AI',
    emoji: '🎨',
    initials: 'C',
    bgColor: '#00c4cc',
  },
  'Figma': {
    url: 'https://static.figma.com/app/icon/1/favicon.png',
    alt: 'Figma',
    emoji: '🎯',
    initials: 'F',
    bgColor: '#f24e1e',
  },
  'Adobe Firefly': {
    url: 'https://www.adobe.com/content/dam/cc/us/en/creativecloud/firefly/firefly-logo.svg',
    alt: 'Adobe Firefly',
    emoji: '🔥',
    initials: 'AF',
    bgColor: '#ff0000',
  },
  'Firefly': {
    url: 'https://www.adobe.com/content/dam/cc/us/en/creativecloud/firefly/firefly-logo.svg',
    alt: 'Firefly',
    emoji: '🔥',
    initials: 'F',
    bgColor: '#ff0000',
  },
  'Remove.bg': {
    url: 'https://www.remove.bg/themes/custom/removebg/dist/images/favicon.ico',
    alt: 'Remove.bg',
    emoji: '✂️',
    initials: 'R',
    bgColor: '#54ce95',
  },
  'Looka': {
    url: 'https://looka.com/assets/img/looka-logo.svg',
    alt: 'Looka',
    emoji: '🔍',
    initials: 'L',
    bgColor: '#000000',
  },
  'Brandmark': {
    url: 'https://brandmark.io/logo.png',
    alt: 'Brandmark',
    emoji: '🏷️',
    initials: 'B',
    bgColor: '#f39c12',
  },
  'Uizard': {
    url: 'https://uizard.io/logo.png',
    alt: 'Uizard',
    emoji: '🧙',
    initials: 'U',
    bgColor: '#6c5ce7',
  },
  'Khroma': {
    url: 'https://www.khroma.co/logo.png',
    alt: 'Khroma',
    emoji: '🌈',
    initials: 'K',
    bgColor: '#000000',
  },

  // ==================== 视频工具 ====================
  'Runway': {
    url: 'https://runwayml.com/wp-content/uploads/2021/01/runway-logo.png',
    alt: 'Runway',
    emoji: '🎬',
    initials: 'R',
    bgColor: '#000000',
  },
  'Pika Labs': {
    url: 'https://pika.art/logo.png',
    alt: 'Pika Labs',
    emoji: '⚡',
    initials: 'P',
    bgColor: '#000000',
  },
  'HeyGen': {
    url: 'https://www.heygen.com/logo.png',
    alt: 'HeyGen',
    emoji: '👤',
    initials: 'H',
    bgColor: '#0066ff',
  },
  'Synthesia': {
    url: 'https://www.synthesia.io/logo.png',
    alt: 'Synthesia',
    emoji: '🎥',
    initials: 'S',
    bgColor: '#00d09c',
  },
  '剪映': {
    url: 'https://lv.ulikecam.com/static/images/logo.png',
    alt: '剪映',
    emoji: '✂️',
    initials: '剪',
    bgColor: '#000000',
  },
  'Descript': {
    url: 'https://www.descript.com/logo.png',
    alt: 'Descript',
    emoji: '📝',
    initials: 'D',
    bgColor: '#000000',
  },
  'Veed.io': {
    url: 'https://www.veed.io/logo.png',
    alt: 'Veed.io',
    emoji: '🎞️',
    initials: 'V',
    bgColor: '#000000',
  },
  'InVideo': {
    url: 'https://www.invideo.io/logo.png',
    alt: 'InVideo',
    emoji: '📹',
    initials: 'I',
    bgColor: '#6c5ce7',
  },
  'D-ID': {
    url: 'https://www.d-id.com/logo.png',
    alt: 'D-ID',
    emoji: '🆔',
    initials: 'D',
    bgColor: '#0066ff',
  },
  'Elai.io': {
    url: 'https://elai.io/logo.png',
    alt: 'Elai.io',
    emoji: '🎬',
    initials: 'E',
    bgColor: '#4e54c8',
  },

  // ==================== 音频工具 ====================
  'ElevenLabs': {
    url: 'https://elevenlabs.io/logo.png',
    alt: 'ElevenLabs',
    emoji: '🔊',
    initials: 'E',
    bgColor: '#000000',
  },
  'Suno AI': {
    url: 'https://suno.com/logo.png',
    alt: 'Suno AI',
    emoji: '🎵',
    initials: 'S',
    bgColor: '#000000',
  },
  'Murf AI': {
    url: 'https://murf.ai/logo.png',
    alt: 'Murf AI',
    emoji: '🎙️',
    initials: 'M',
    bgColor: '#000000',
  },
  'Play.ht': {
    url: 'https://play.ht/logo.png',
    alt: 'Play.ht',
    emoji: '▶️',
    initials: 'P',
    bgColor: '#4f46e5',
  },
  'Udio': {
    url: 'https://www.udio.com/logo.png',
    alt: 'Udio',
    emoji: '🎶',
    initials: 'U',
    bgColor: '#000000',
  },
  'AIVA': {
    url: 'https://www.aiva.ai/logo.png',
    alt: 'AIVA',
    emoji: '🎼',
    initials: 'A',
    bgColor: '#e74c3c',
  },
  'Adobe Podcast': {
    url: 'https://podcast.adobe.com/logo.png',
    alt: 'Adobe Podcast',
    emoji: '🎙️',
    initials: 'AP',
    bgColor: '#000000',
  },
  'Krisp': {
    url: 'https://krisp.ai/logo.png',
    alt: 'Krisp',
    emoji: '🔇',
    initials: 'K',
    bgColor: '#0066ff',
  },
  '讯飞配音': {
    url: 'https://xinghuo.xfyun.cn/static/imgs/logo.png',
    alt: '讯飞配音',
    emoji: '🎤',
    initials: '讯',
    bgColor: '#ff6b00',
  },

  // ==================== 写作工具 ====================
  'Jasper': {
    url: 'https://www.jasper.ai/logo.png',
    alt: 'Jasper',
    emoji: '✍️',
    initials: 'J',
    bgColor: '#000000',
  },
  'Writesonic': {
    url: 'https://writesonic.com/logo.png',
    alt: 'Writesonic',
    emoji: '📄',
    initials: 'W',
    bgColor: '#dc2626',
  },
  'Copy.ai': {
    url: 'https://copy.ai/logo.png',
    alt: 'Copy.ai',
    emoji: '✨',
    initials: 'C',
    bgColor: '#000000',
  },
  'Rytr': {
    url: 'https://rytr.me/logo.png',
    alt: 'Rytr',
    emoji: '🖊️',
    initials: 'R',
    bgColor: '#000000',
  },
  'Grammarly': {
    url: 'https://www.grammarly.com/logo.png',
    alt: 'Grammarly',
    emoji: '✅',
    initials: 'G',
    bgColor: '#15c39a',
  },
  'Quillbot': {
    url: 'https://quillbot.com/logo.png',
    alt: 'Quillbot',
    emoji: '🦜',
    initials: 'Q',
    bgColor: '#1e40af',
  },
  'DeepL Write': {
    url: 'https://www.deepl.com/logo.png',
    alt: 'DeepL Write',
    emoji: '🌐',
    initials: 'D',
    bgColor: '#0f2b46',
  },
  'Sudowrite': {
    url: 'https://www.sudowrite.com/logo.png',
    alt: 'Sudowrite',
    emoji: '📖',
    initials: 'S',
    bgColor: '#000000',
  },
  'NovelAI': {
    url: 'https://novelai.net/logo.png',
    alt: 'NovelAI',
    emoji: '🌟',
    initials: 'N',
    bgColor: '#000000',
  },

  // ==================== 搜索与知识 ====================
  'Perplexity': {
    url: 'https://www.perplexity.ai/logo.png',
    alt: 'Perplexity',
    emoji: '🔍',
    initials: 'P',
    bgColor: '#000000',
  },
  'Character.ai': {
    url: 'https://beta.character.ai/logo.png',
    alt: 'Character.ai',
    emoji: '🎭',
    initials: 'C',
    bgColor: '#000000',
  },
  'Wolfram Alpha': {
    url: 'https://www.wolframalpha.com/logo.png',
    alt: 'Wolfram Alpha',
    emoji: '🧮',
    initials: 'W',
    bgColor: '#000000',
  },

  // ==================== 生产力工具 ====================
  'Mem.ai': {
    url: 'https://mem.ai/logo.png',
    alt: 'Mem.ai',
    emoji: '🧠',
    initials: 'M',
    bgColor: '#000000',
  },
  'Gamma': {
    url: 'https://gamma.app/logo.png',
    alt: 'Gamma',
    emoji: '𝛾',
    initials: 'G',
    bgColor: '#000000',
  },
  'Tome': {
    url: 'https://tome.app/logo.png',
    alt: 'Tome',
    emoji: '📕',
    initials: 'T',
    bgColor: '#000000',
  },
  'Beautiful.ai': {
    url: 'https://www.beautiful.ai/logo.png',
    alt: 'Beautiful.ai',
    emoji: '✨',
    initials: 'B',
    bgColor: '#000000',
  },
  'Framer AI': {
    url: 'https://www.framer.com/logo.png',
    alt: 'Framer AI',
    emoji: '🖼️',
    initials: 'F',
    bgColor: '#000000',
  },
  'Webflow AI': {
    url: 'https://webflow.com/logo.png',
    alt: 'Webflow AI',
    emoji: '🌊',
    initials: 'W',
    bgColor: '#146ef5',
  },

  // ==================== 图像生成 ====================
  'Stable Diffusion': {
    url: 'https://stability.ai/logo.png',
    alt: 'Stable Diffusion',
    emoji: '🌀',
    initials: 'SD',
    bgColor: '#000000',
  },
  'Leonardo AI': {
    url: 'https://leonardo.ai/logo.png',
    alt: 'Leonardo AI',
    emoji: '🎨',
    initials: 'L',
    bgColor: '#000000',
  },
  'Playground AI': {
    url: 'https://playgroundai.com/logo.png',
    alt: 'Playground AI',
    emoji: '🎮',
    initials: 'P',
    bgColor: '#000000',
  },
  'Ideogram': {
    url: 'https://ideogram.ai/logo.png',
    alt: 'Ideogram',
    emoji: '🔣',
    initials: 'I',
    bgColor: '#000000',
  },
  'NightCafe': {
    url: 'https://nightcafe.studio/logo.png',
    alt: 'NightCafe',
    emoji: '🌙',
    initials: 'N',
    bgColor: '#000000',
  },
  'Upscale.media': {
    url: 'https://www.upscale.media/logo.png',
    alt: 'Upscale.media',
    emoji: '🔍',
    initials: 'U',
    bgColor: '#000000',
  },
  '美图 AI': {
    url: 'https://xiuxiu.meitu.com/logo.png',
    alt: '美图 AI',
    emoji: '📸',
    initials: '美',
    bgColor: '#ffc0cb',
  },
  'Magic Studio': {
    url: 'https://magicstudio.com/logo.png',
    alt: 'Magic Studio',
    emoji: '🪄',
    initials: 'M',
    bgColor: '#000000',
  },
  'SeaArt AI': {
    url: 'https://www.seaart.ai/logo.png',
    alt: 'SeaArt AI',
    emoji: '🌊',
    initials: 'S',
    bgColor: '#000000',
  },
  'Civitai': {
    url: 'https://civitai.com/logo.png',
    alt: 'Civitai',
    emoji: '🗿',
    initials: 'C',
    bgColor: '#000000',
  },

  // ==================== 中国工具 ====================
  '小冰': {
    url: 'https://www.xiaoice.com/logo.png',
    alt: '小冰',
    emoji: '❄️',
    initials: '小',
    bgColor: '#00bfff',
  },
  '钉钉 AI': {
    url: 'https://www.dingtalk.com/logo.png',
    alt: '钉钉 AI',
    emoji: '📌',
    initials: '钉',
    bgColor: '#0089ff',
  },
  '飞书智能伙伴': {
    url: 'https://www.feishu.cn/logo.png',
    alt: '飞书智能伙伴',
    emoji: '📚',
    initials: '飞',
    bgColor: '#00d0b6',
  },
  '网易有道 AI': {
    url: 'https://www.youdao.com/logo.png',
    alt: '网易有道 AI',
    emoji: '📖',
    initials: '网',
    bgColor: '#c90827',
  },
  '稿定设计': {
    url: 'https://www.gaoding.com/logo.png',
    alt: '稿定设计',
    emoji: '🎨',
    initials: '稿',
    bgColor: '#000000',
  },

  // ==================== 更多写作工具 ====================
  'Anyword': {
    url: 'https://anyword.com/logo.png',
    alt: 'Anyword',
    emoji: '📊',
    initials: 'A',
    bgColor: '#0066ff',
  },
  'Hypotenuse': {
    url: 'https://www.hypotenuse.ai/logo.png',
    alt: 'Hypotenuse',
    emoji: '📐',
    initials: 'H',
    bgColor: '#000000',
  },
  'Peppertype': {
    url: 'https://www.peppertype.ai/logo.png',
    alt: 'Peppertype',
    emoji: '🌶️',
    initials: 'P',
    bgColor: '#dc2626',
  },
  'Frase': {
    url: 'https://www.frase.io/logo.png',
    alt: 'Frase',
    emoji: '📝',
    initials: 'F',
    bgColor: '#000000',
  },
  'ShortlyAI': {
    url: 'https://www.shortlyai.com/logo.png',
    alt: 'ShortlyAI',
    emoji: '⏱️',
    initials: 'S',
    bgColor: '#000000',
  },
  'Aithor': {
    url: 'https://aithor.com/logo.png',
    alt: 'Aithor',
    emoji: '🎓',
    initials: 'A',
    bgColor: '#0066ff',
  },
  'GravityWrite': {
    url: 'https://gravitywrite.com/logo.png',
    alt: 'GravityWrite',
    emoji: '⚖️',
    initials: 'G',
    bgColor: '#000000',
  },

  // ==================== 更多图像工具 ====================
  'Profile Picture AI': {
    url: 'https://www.profilepicture.ai/logo.png',
    alt: 'Profile Picture AI',
    emoji: '👤',
    initials: 'P',
    bgColor: '#000000',
  },
  'Palette.fm': {
    url: 'https://palette.fm/logo.png',
    alt: 'Palette.fm',
    emoji: '🎨',
    initials: 'P',
    bgColor: '#000000',
  },
  'Gencraft': {
    url: 'https://gencraft.com/logo.png',
    alt: 'Gencraft',
    emoji: '🎭',
    initials: 'G',
    bgColor: '#000000',
  },
  'Pollinations': {
    url: 'https://pollinations.ai/logo.png',
    alt: 'Pollinations',
    emoji: '🌸',
    initials: 'P',
    bgColor: '#ec4899',
  },
  'Lucidpic': {
    url: 'https://www.lucidpic.com/logo.png',
    alt: 'Lucidpic',
    emoji: '🖼️',
    initials: 'L',
    bgColor: '#000000',
  },

  // ==================== 更多视频工具 ====================
  'Lumen5': {
    url: 'https://www.lumen5.com/logo.png',
    alt: 'Lumen5',
    emoji: '💡',
    initials: 'L',
    bgColor: '#0066ff',
  },
  'Pictory': {
    url: 'https://pictory.ai/logo.png',
    alt: 'Pictory',
    emoji: '🎬',
    initials: 'P',
    bgColor: '#000000',
  },
  'Fliki': {
    url: 'https://fliki.ai/logo.png',
    alt: 'Fliki',
    emoji: '🎞️',
    initials: 'F',
    bgColor: '#000000',
  },
  'Colossyan': {
    url: 'https://www.colossyan.com/logo.png',
    alt: 'Colossyan',
    emoji: '🎥',
    initials: 'C',
    bgColor: '#dc2626',
  },
  '万兴播爆': {
    url: 'https://virbo.wondershare.cn/logo.png',
    alt: '万兴播爆',
    emoji: '💥',
    initials: '万',
    bgColor: '#dc2626',
  },
  'Opus Clip': {
    url: 'https://www.opus.pro/logo.png',
    alt: 'Opus Clip',
    emoji: '🎬',
    initials: 'O',
    bgColor: '#000000',
  },
  'Munch': {
    url: 'https://www.getmunch.com/logo.png',
    alt: 'Munch',
    emoji: '🍿',
    initials: 'M',
    bgColor: '#f59e0b',
  },
  'Vidyo': {
    url: 'https://www.vidyo.ai/logo.png',
    alt: 'Vidyo',
    emoji: '📹',
    initials: 'V',
    bgColor: '#0066ff',
  },
  'Shuffll': {
    url: 'https://shuffll.com/logo.png',
    alt: 'Shuffll',
    emoji: '🔀',
    initials: 'S',
    bgColor: '#000000',
  },
  'Kinetix': {
    url: 'https://www.kinetix.tech/logo.png',
    alt: 'Kinetix',
    emoji: '🏃',
    initials: 'K',
    bgColor: '#000000',
  },
  'TubeMagic': {
    url: 'https://www.tubemagic.com/logo.png',
    alt: 'TubeMagic',
    emoji: '📺',
    initials: 'T',
    bgColor: '#dc2626',
  },
  'Wisecut': {
    url: 'https://www.wisecut.video/logo.png',
    alt: 'Wisecut',
    emoji: '✂️',
    initials: 'W',
    bgColor: '#0066ff',
  },
  'Rawshorts': {
    url: 'https://www.rawshorts.com/logo.png',
    alt: 'Rawshorts',
    emoji: '🎬',
    initials: 'R',
    bgColor: '#0066ff',
  },
  'Steve.ai': {
    url: 'https://www.steve.ai/logo.png',
    alt: 'Steve.ai',
    emoji: '🤖',
    initials: 'S',
    bgColor: '#0066ff',
  },

  // ==================== 更多音频工具 ====================
  'LALAL.AI': {
    url: 'https://www.lalal.ai/logo.png',
    alt: 'LALAL.AI',
    emoji: '🎵',
    initials: 'L',
    bgColor: '#0066ff',
  },
  'Resemble AI': {
    url: 'https://www.resemble.ai/logo.png',
    alt: 'Resemble AI',
    emoji: '🎭',
    initials: 'R',
    bgColor: '#000000',
  },
  'WellSaid Labs': {
    url: 'https://wellsaidlabs.com/logo.png',
    alt: 'WellSaid Labs',
    emoji: '🗣️',
    initials: 'W',
    bgColor: '#000000',
  },
  'NaturalReader': {
    url: 'https://www.naturalreaders.com/logo.png',
    alt: 'NaturalReader',
    emoji: '📖',
    initials: 'N',
    bgColor: '#0066ff',
  },
  'Speechify': {
    url: 'https://speechify.com/logo.png',
    alt: 'Speechify',
    emoji: '🔊',
    initials: 'S',
    bgColor: '#000000',
  },
  'Voicemod': {
    url: 'https://www.voicemod.net/logo.png',
    alt: 'Voicemod',
    emoji: '🎤',
    initials: 'V',
    bgColor: '#dc2626',
  },
  'Uberduck': {
    url: 'https://uberduck.ai/logo.png',
    alt: 'Uberduck',
    emoji: '🦆',
    initials: 'U',
    bgColor: '#000000',
  },
  'Soundraw': {
    url: 'https://soundraw.io/logo.png',
    alt: 'Soundraw',
    emoji: '🎶',
    initials: 'S',
    bgColor: '#000000',
  },
  'Boomy': {
    url: 'https://boomy.com/logo.png',
    alt: 'Boomy',
    emoji: '💥',
    initials: 'B',
    bgColor: '#000000',
  },
  'Ecrett Music': {
    url: 'https://ecrettmusic.com/logo.png',
    alt: 'Ecrett Music',
    emoji: '🎵',
    initials: 'E',
    bgColor: '#000000',
  },
  'Cleanvoice': {
    url: 'https://cleanvoice.ai/logo.png',
    alt: 'Cleanvoice',
    emoji: '🧹',
    initials: 'C',
    bgColor: '#0066ff',
  },
  'Audo Studio': {
    url: 'https://audo.ai/logo.png',
    alt: 'Audo Studio',
    emoji: '🎙️',
    initials: 'A',
    bgColor: '#000000',
  },
  'Voice.ai': {
    url: 'https://voice.ai/logo.png',
    alt: 'Voice.ai',
    emoji: '🎤',
    initials: 'V',
    bgColor: '#0066ff',
  },

  // ==================== 更多生产力工具 ====================
  'Microsoft Bot Framework': {
    url: 'https://dev.botframework.com/logo.png',
    alt: 'Microsoft Bot Framework',
    emoji: '🤖',
    initials: 'MB',
    bgColor: '#0066ff',
  },
  'ClickUp AI': {
    url: 'https://clickup.com/logo.png',
    alt: 'ClickUp AI',
    emoji: '⬆️',
    initials: 'C',
    bgColor: '#7b68ee',
  },
  'Monday AI': {
    url: 'https://monday.com/logo.png',
    alt: 'Monday AI',
    emoji: '📋',
    initials: 'M',
    bgColor: '#ff6b00',
  },
  'Motion': {
    url: 'https://www.usemotion.com/logo.png',
    alt: 'Motion',
    emoji: '🏃',
    initials: 'M',
    bgColor: '#000000',
  },
  'Reclaim.ai': {
    url: 'https://reclaim.ai/logo.png',
    alt: 'Reclaim.ai',
    emoji: '🔄',
    initials: 'R',
    bgColor: '#000000',
  },
  'Clockwise': {
    url: 'https://www.getclockwise.com/logo.png',
    alt: 'Clockwise',
    emoji: '🕐',
    initials: 'C',
    bgColor: '#0066ff',
  },
  'Superhuman': {
    url: 'https://superhuman.com/logo.png',
    alt: 'Superhuman',
    emoji: '⚡',
    initials: 'S',
    bgColor: '#000000',
  },
  'Shortwave': {
    url: 'https://shortwave.com/logo.png',
    alt: 'Shortwave',
    emoji: '📧',
    initials: 'S',
    bgColor: '#4285f4',
  },
  'Supernormal': {
    url: 'https://supernormal.com/logo.png',
    alt: 'Supernormal',
    emoji: '📝',
    initials: 'S',
    bgColor: '#000000',
  },
  'Otter.ai': {
    url: 'https://otter.ai/logo.png',
    alt: 'Otter.ai',
    emoji: '🦦',
    initials: 'O',
    bgColor: '#0066ff',
  },
  'Fireflies.ai': {
    url: 'https://fireflies.ai/logo.png',
    alt: 'Fireflies.ai',
    emoji: '🔥',
    initials: 'F',
    bgColor: '#000000',
  },
  'Granola': {
    url: 'https://granola.app/logo.png',
    alt: 'Granola',
    emoji: '🥣',
    initials: 'G',
    bgColor: '#f59e0b',
  },
  'Taskade': {
    url: 'https://www.taskade.com/logo.png',
    alt: 'Taskade',
    emoji: '📋',
    initials: 'T',
    bgColor: '#000000',
  },
  'MindMeister': {
    url: 'https://www.mindmeister.com/logo.png',
    alt: 'MindMeister',
    emoji: '🧠',
    initials: 'M',
    bgColor: '#0066ff',
  },
  'Mintlify': {
    url: 'https://mintlify.com/logo.png',
    alt: 'Mintlify',
    emoji: '🌿',
    initials: 'M',
    bgColor: '#000000',
  },
  'Relume': {
    url: 'https://www.relume.io/logo.png',
    alt: 'Relume',
    emoji: '💡',
    initials: 'R',
    bgColor: '#000000',
  },
  'Plasmic': {
    url: 'https://www.plasmic.app/logo.png',
    alt: 'Plasmic',
    emoji: '🎨',
    initials: 'P',
    bgColor: '#000000',
  },
  'Locofy': {
    url: 'https://www.locofy.ai/logo.png',
    alt: 'Locofy',
    emoji: '📍',
    initials: 'L',
    bgColor: '#000000',
  },
  'Builder.io': {
    url: 'https://builder.io/logo.png',
    alt: 'Builder.io',
    emoji: '🏗️',
    initials: 'B',
    bgColor: '#0066ff',
  },
  'Anima': {
    url: 'https://www.animaapp.com/logo.png',
    alt: 'Anima',
    emoji: '✨',
    initials: 'A',
    bgColor: '#000000',
  },
  'Continue': {
    url: 'https://continue.dev/logo.png',
    alt: 'Continue',
    emoji: '▶️',
    initials: 'C',
    bgColor: '#000000',
  },
  'Sourcegraph Cody': {
    url: 'https://sourcegraph.com/logo.png',
    alt: 'Sourcegraph Cody',
    emoji: '🔍',
    initials: 'C',
    bgColor: '#000000',
  },
  'Sourcery': {
    url: 'https://sourcery.ai/logo.png',
    alt: 'Sourcery',
    emoji: '🧙',
    initials: 'S',
    bgColor: '#000000',
  },
  'CodeSandbox AI': {
    url: 'https://codesandbox.io/logo.png',
    alt: 'CodeSandbox AI',
    emoji: '🏖️',
    initials: 'C',
    bgColor: '#000000',
  },

  // ==================== 更多搜索与知识工具 ====================
  'You.com': {
    url: 'https://you.com/logo.png',
    alt: 'You.com',
    emoji: '🔍',
    initials: 'Y',
    bgColor: '#0066ff',
  },
  'Phind': {
    url: 'https://www.phind.com/logo.png',
    alt: 'Phind',
    emoji: '🔍',
    initials: 'P',
    bgColor: '#000000',
  },
  'Metaphor': {
    url: 'https://metaphor.systems/logo.png',
    alt: 'Metaphor',
    emoji: '🔮',
    initials: 'M',
    bgColor: '#000000',
  },
};

// Logo 组件属性
export interface LogoProps {
  name: string;
  size?: number | 'small' | 'medium' | 'large';
  showName?: boolean;
  className?: string;
  style?: CSSProperties;
}

/**
 * 从工具名称提取域名（用于 Clearbit 和 Google Favicon fallback）
 */
const extractDomainFromName = (name: string): string | null => {
  // 常见工具域名映射
  const domainMap: Record<string, string> = {
    'ChatGPT': 'chatgpt.com',
    'Claude': 'claude.ai',
    'Midjourney': 'midjourney.com',
    'Notion AI': 'notion.so',
    'Notion': 'notion.so',
    '文心一言': 'yiyan.baidu.com',
    '通义千问': 'tongyi.aliyun.com',
    'Kimi': 'kimi.moonshot.cn',
    '讯飞星火': 'xinghuo.xfyun.cn',
    'GitHub Copilot': 'github.com',
    'Copilot': 'github.com',
    'Microsoft Copilot': 'microsoft.com',
    'Cursor': 'cursor.sh',
    'Replit': 'replit.com',
    'Hugging Face': 'huggingface.co',
    'Canva': 'canva.com',
    'Figma': 'figma.com',
    'Adobe Firefly': 'adobe.com',
    'Firefly': 'adobe.com',
    'Runway': 'runwayml.com',
    'Pika Labs': 'pika.art',
    'HeyGen': 'heygen.com',
    'Synthesia': 'synthesia.io',
    '剪映': 'capcut.cn',
    'Descript': 'descript.com',
    'Veed.io': 'veed.io',
    'InVideo': 'invideo.io',
    'ElevenLabs': 'elevenlabs.io',
    'Suno AI': 'suno.com',
    'Murf AI': 'murf.ai',
    'Play.ht': 'play.ht',
    'Udio': 'udio.com',
    'Jasper': 'jasper.ai',
    'Writesonic': 'writesonic.com',
    'Copy.ai': 'copy.ai',
    'Rytr': 'rytr.me',
    'Grammarly': 'grammarly.com',
    'Quillbot': 'quillbot.com',
    'DeepL Write': 'deepl.com',
    'Perplexity': 'perplexity.ai',
    'Character.ai': 'character.ai',
    'Gamma': 'gamma.app',
    'Tome': 'tome.app',
    'Framer AI': 'framer.com',
    'Webflow AI': 'webflow.com',
    'Stable Diffusion': 'stability.ai',
    'Leonardo AI': 'leonardo.ai',
    'Playground AI': 'playgroundai.com',
    'Ideogram': 'ideogram.ai',
    'Remove.bg': 'remove.bg',
    'Looka': 'looka.com',
    'Uizard': 'uizard.io',
    'Mem.ai': 'mem.ai',
    'Beautiful.ai': 'beautiful.ai',
    'D-ID': 'd-id.com',
    'Elai.io': 'elai.io',
    'Codeium': 'codeium.com',
    'Tabnine': 'tabnine.com',
    'Windsurf': 'codeium.com',
    'Bolt.new': 'bolt.new',
    'V0': 'v0.dev',
    'Lovable': 'lovable.dev',
    'Sora': 'openai.com',
    'DALL-E 3': 'openai.com',
    'DALL-E': 'openai.com',
    'GPT-4': 'openai.com',
    'Claude 3': 'claude.ai',
    'ChatGLM': 'zhipuai.cn',
    'GLM-4': 'zhipuai.cn',
    '智谱清言': 'zhipuai.cn',
    'Spark': 'xfyun.cn',
    '讯飞配音': 'xfyun.cn',
    'ERNIE Bot': 'baidu.com',
    'Qwen': 'aliyun.com',
    '小冰': 'xiaoice.com',
    '钉钉 AI': 'dingtalk.com',
    '飞书智能伙伴': 'feishu.cn',
    '网易有道 AI': 'youdao.com',
    '稿定设计': 'gaoding.com',
    '美图 AI': 'meitu.com',
    'Magic Studio': 'magicstudio.com',
    'SeaArt AI': 'seaart.ai',
    'Civitai': 'civitai.com',
    'Upscale.media': 'upscale.media',
    'NightCafe': 'nightcafe.studio',
    'Adobe Podcast': 'adobe.com',
    'Krisp': 'krisp.ai',
    'AIVA': 'aiva.ai',
    'Sudowrite': 'sudowrite.com',
    'NovelAI': 'novelai.net',
    'Wolfram Alpha': 'wolframalpha.com',
    'Canva AI': 'canva.com',
  };
  
  return domainMap[name] || null;
};

/**
 * 获取 Clearbit Logo URL
 */
const getClearbitLogoUrl = (domain: string): string => {
  return `https://logo.clearbit.com/${domain}`;
};

/**
 * 获取 Google Favicon URL
 */
const getGoogleFaviconUrl = (domain: string): string => {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
};

/**
 * Logo 组件 - 自动处理加载失败，多级 fallback
 * 优先级：1. LOCAL_LOGO_MAP → 2. Clearbit API → 3. Google Favicon → 4. emoji/首字母 fallback
 */
export const Logo: React.FC<LogoProps> = ({
  name,
  size = 32,
  showName = false,
  className = '',
  style = {},
}) => {
  // 将字符串 size 转换为像素值
  const sizeInPx = typeof size === 'string' 
    ? size === 'small' ? 24 
      : size === 'medium' ? 48 
      : size === 'large' ? 64 
      : 32
    : size;
  const [loadFailed, setLoadFailed] = useState(false);
  const [clearbitFailed, setClearbitFailed] = useState(false);
  const [googleFailed, setGoogleFailed] = useState(false);
  
  const config = LOCAL_LOGO_MAP[name];
  const domain = extractDomainFromName(name);
  
  // 计算当前应该显示的 URL
  const getCurrentImageUrl = (): string | null => {
    if (config && !loadFailed) {
      return config.url;
    }
    if (domain && !clearbitFailed) {
      return getClearbitLogoUrl(domain);
    }
    if (domain && !googleFailed) {
      return getGoogleFaviconUrl(domain);
    }
    return null;
  };

  // 处理图片加载失败
  const handleImageError = () => {
    if (config && !loadFailed) {
      setLoadFailed(true);
    } else if (domain && !clearbitFailed) {
      setClearbitFailed(true);
    } else if (domain && !googleFailed) {
      setGoogleFailed(true);
    }
  };

  // 获取当前图片 URL
  const imageUrl = getCurrentImageUrl();

  // 计算 fallback 颜色
  const getFallbackColor = (): string => {
    if (config) return config.bgColor;
    // 根据名称生成一致的颜色
    const colors = ['#10a37f', '#d97757', '#615ced', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];
    const index = name.length % colors.length;
    return colors[index];
  };

  // 计算 fallback 显示的文本
  const getFallbackText = (): string => {
    if (config && config.emoji) return config.emoji;
    if (config && config.initials) return config.initials;
    return name.charAt(0).toUpperCase();
  };

  // 如果没有找到任何配置且没有域名，返回简单的默认 Logo
  if (!config && !domain) {
    return (
      <div
        className={`inline-flex items-center gap-2 ${className}`}
        style={style}
      >
        <div
          style={{
            width: sizeInPx,
            height: sizeInPx,
            borderRadius: '20%',
            backgroundColor: '#6b7280',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: Math.floor(sizeInPx * 0.5),
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          {name.charAt(0).toUpperCase()}
        </div>
        {showName && <span style={{ fontSize: sizeInPx * 0.4 }}>{name}</span>}
      </div>
    );
  }

  // 加载失败时的 fallback 样式
  const fallbackStyle: CSSProperties = {
    width: sizeInPx,
    height: sizeInPx,
    borderRadius: '20%',
    backgroundColor: getFallbackColor(),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: Math.floor(sizeInPx * 0.5),
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <div
      className={`inline-flex items-center gap-2 ${className}`}
      style={style}
    >
      {imageUrl ? (
        // 正常显示 Logo 图片
        <img
          src={imageUrl}
          alt={config?.alt || name}
          width={sizeInPx}
          height={sizeInPx}
          style={{
            borderRadius: '20%',
            objectFit: 'cover',
          }}
          onError={handleImageError}
        />
      ) : (
        // Fallback: 显示 emoji 或首字母
        <div style={fallbackStyle} title={config?.alt || name}>
          {getFallbackText()}
        </div>
      )}
      {showName && (
        <span style={{ fontSize: sizeInPx * 0.4, color: '#374151' }}>
          {config?.alt || name}
        </span>
      )}
    </div>
  );
};

/**
 * Logo 网格组件 - 用于展示多个 AI 工具 Logo
 */
export interface LogoGridProps {
  names: string[];
  size?: number;
  gap?: number;
  showName?: boolean;
  className?: string;
}

export const LogoGrid: React.FC<LogoGridProps> = ({
  names,
  size = 48,
  gap = 16,
  showName = false,
  className = '',
}) => {
  return (
    <div
      className={`grid ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: `${gap}px`,
      }}
    >
      {names.map((name) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <Logo name={name} size={size} showName={showName} />
        </div>
      ))}
    </div>
  );
};

/**
 * 获取所有可用的 Logo 名称
 */
export const getAvailableLogos = (): string[] => {
  return Object.keys(LOCAL_LOGO_MAP);
};

/**
 * 根据关键词搜索 Logo
 */
export const searchLogos = (keyword: string): string[] => {
  const lowerKeyword = keyword.toLowerCase();
  return Object.keys(LOCAL_LOGO_MAP).filter((name) =>
    name.toLowerCase().includes(lowerKeyword)
  );
};

export default Logo;
