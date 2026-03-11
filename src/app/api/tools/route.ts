import { NextResponse } from 'next/server'

// 静态导出必需配置
export const dynamic = 'force-static'
export const revalidate = false

// 静态工具数据（不需要数据库）
const TOOLS = [
  { id: 1, name: "ChatGPT", description: "OpenAI 的智能对话 AI，支持多轮对话、代码生成、文案创作", category: "文本生成", logo: "🤖", isVip: false, url: "https://chat.openai.com", tags: ["免费", "英文", "Web"] },
  { id: 2, name: "Midjourney", description: "AI 绘画工具，生成高质量艺术图像", category: "图像设计", logo: "🎨", isVip: true, url: "https://midjourney.com", tags: ["付费", "英文", "Discord"] },
  { id: 3, name: "Notion AI", description: "智能笔记助手，自动总结、润色、翻译", category: "办公效率", logo: "📝", isVip: false, url: "https://notion.so", tags: ["付费", "多语言", "Web"] },
  { id: 4, name: "Runway", description: "AI 视频生成和编辑工具", category: "视频制作", logo: "🎬", isVip: true, url: "https://runwayml.com", tags: ["付费", "英文", "Web"] },
  { id: 5, name: "ElevenLabs", description: "AI 语音合成，逼真的多语言语音", category: "音频处理", logo: "🎵", isVip: true, url: "https://elevenlabs.io", tags: ["付费", "多语言", "Web"] },
  { id: 6, name: "Jasper", description: "AI 营销文案生成器", category: "文本生成", logo: "✍️", isVip: false, url: "https://jasper.ai", tags: ["付费", "英文", "Web"] },
  { id: 7, name: "文心一言", description: "百度大语言模型，中文对话 AI", category: "文本生成", logo: "🇨🇳", isVip: false, url: "https://yiyan.baidu.com", tags: ["免费", "中文", "Web"] },
  { id: 8, name: "通义千问", description: "阿里大语言模型，多模态理解", category: "文本生成", logo: "🤖", isVip: false, url: "https://tongyi.aliyun.com", tags: ["免费", "中文", "Web"] },
  { id: 9, name: "Stable Diffusion", description: "开源 AI 绘画模型", category: "图像设计", logo: "🎨", isVip: false, url: "https://stability.ai", tags: ["开源", "英文", "本地"] },
  { id: 10, name: "Canva AI", description: "AI 设计工具，一键生成海报、PPT", category: "图像设计", logo: "🎨", isVip: false, url: "https://canva.com", tags: ["免费增值", "多语言", "Web"] },
  { id: 11, name: "剪映", description: "AI 视频剪辑工具", category: "视频制作", logo: "🎬", isVip: false, url: "https://capcut.cn", tags: ["免费", "中文", "Web/App"] },
  { id: 12, name: "Suno AI", description: "AI 音乐生成器", category: "音频处理", logo: "🎵", isVip: true, url: "https://suno.ai", tags: ["付费", "英文", "Web"] },
  { id: 13, name: "Cursor", description: "AI 代码编辑器", category: "开发工具", logo: "💻", isVip: false, url: "https://cursor.sh", tags: ["免费增值", "英文", "桌面"] },
  { id: 14, name: "GitHub Copilot", description: "AI 编程助手", category: "开发工具", logo: "💻", isVip: true, url: "https://github.com/features/copilot", tags: ["付费", "英文", "插件"] },
  { id: 15, name: "Kimi", description: "月之暗面大模型，超长上下文", category: "文本生成", logo: "🌙", isVip: false, url: "https://kimi.moonshot.cn", tags: ["免费", "中文", "Web"] },
  { id: 16, name: "智谱清言", description: "智谱 AI 大模型", category: "文本生成", logo: "🧠", isVip: false, url: "https://chatglm.cn", tags: ["免费", "中文", "Web"] },
]

// GET /api/tools - 获取工具列表
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const search = searchParams.get('search')

  let filtered = TOOLS

  if (category) {
    filtered = filtered.filter(t => t.category === category)
  }

  if (search) {
    filtered = filtered.filter(t => 
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase())
    )
  }

  return NextResponse.json({
    data: filtered,
    pagination: {
      page: 1,
      limit: 20,
      total: filtered.length,
      totalPages: 1,
    },
  })
}

// POST /api/tools - 创建工具（管理员）
export async function POST(request: Request) {
  const body = await request.json()
  return NextResponse.json({ id: Date.now(), ...body }, { status: 201 })
}
