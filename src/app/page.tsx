import Link from "next/link";
import ToolLogo from "@/components/ToolLogo";

// 模拟工具数据
const FEATURED_TOOLS = [
  { id: 1, name: "ChatGPT", description: "OpenAI 的智能对话 AI", category: "文本生成", url: "https://chatgpt.com", logo: "🤖", isVip: false },
  { id: 2, name: "Midjourney", description: "AI 绘画工具", category: "图像设计", url: "https://midjourney.com", logo: "🎨", isVip: true },
  { id: 3, name: "Notion AI", description: "智能笔记助手", category: "办公效率", url: "https://notion.so", logo: "📝", isVip: false },
  { id: 4, name: "Runway", description: "AI 视频生成", category: "视频制作", url: "https://runwayml.com", logo: "🎬", isVip: true },
  { id: 5, name: "ElevenLabs", description: "AI 语音合成", category: "音频处理", url: "https://elevenlabs.io", logo: "🎵", isVip: true },
  { id: 6, name: "Jasper", description: "AI 营销文案", category: "文本生成", url: "https://jasper.ai", logo: "✍️", isVip: false },
];

export function getDomainFromUrl(url: string): string {
  try {
    return new URL(url).hostname.replace('www.', '');
  } catch {
    return '';
  }
}