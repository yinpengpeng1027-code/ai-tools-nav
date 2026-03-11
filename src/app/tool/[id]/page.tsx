// 临时修复：直接导出简单页面
import Link from "next/link";

const TOOL_IDS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];

export function generateStaticParams() {
  return TOOL_IDS.map((id) => ({ id }));
}

const TOOLS: Record<string, { name: string; description: string; longDesc: string; logo: string; isVip: boolean; url: string; tags: string[]; category: string; features: string[]; pricing: string }> = {
  "1": {
    name: "ChatGPT",
    description: "OpenAI 的智能对话 AI，支持多轮对话、代码生成、文案创作",
    longDesc: "ChatGPT 是由 OpenAI 开发的大型语言模型，能够进行自然对话、回答问题、创作内容、编写代码等。支持多轮对话上下文理解，是目前最流行的 AI 助手之一。",
    logo: "🤖",
    isVip: false,
    url: "https://chat.openai.com",
    tags: ["免费", "英文", "Web"],
    category: "文本生成",
    features: ["多轮对话", "代码生成", "文案创作", "翻译", "问答"],
    pricing: "免费 + Plus $20/月",
  },
  "2": {
    name: "Midjourney",
    description: "AI 绘画工具，生成高质量艺术图像",
    longDesc: "Midjourney 是一款 AI 图像生成工具，通过 Discord 机器人操作，能够根据文字描述生成高质量的艺术图像。适合设计师、艺术家和创意工作者使用。",
    logo: "🎨",
    isVip: true,
    url: "https://midjourney.com",
    tags: ["付费", "英文", "Discord"],
    category: "图像设计",
    features: ["文生图", "高质量输出", "艺术风格", "批量生成"],
    pricing: "$10-120/月",
  },
  "3": {
    name: "Notion AI",
    description: "智能笔记助手，自动总结、润色、翻译",
    longDesc: "Notion AI 是集成在 Notion 中的 AI 助手，能够帮助用户自动总结笔记、润色文章、翻译内容、生成大纲等，大幅提升工作效率。",
    logo: "📝",
    isVip: false,
    url: "https://notion.so",
    tags: ["付费", "多语言", "Web"],
    category: "办公效率",
    features: ["自动总结", "润色", "翻译", "大纲生成", "头脑风暴"],
    pricing: "$10/月",
  },
};

export default function ToolPage({ params }: { params: Promise<{ id: string }> }) {
  return <ToolPageClient params={params} TOOLS={TOOLS} />;
}
