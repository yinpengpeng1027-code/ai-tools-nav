import { NextResponse } from 'next/server'

// 静态导出必需配置
export const dynamic = 'force-static'
export const revalidate = false

// 静态工具数据（不需要数据库）
const TOOLS = [
  { id: 1, name: "ChatGPT", description: "OpenAI 的智能对话 AI", category: "文本生成", isVip: false },
  { id: 2, name: "Midjourney", description: "AI 绘画工具", category: "图像设计", isVip: true },
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
