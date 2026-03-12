import { NextResponse } from 'next/server'
import { ALL_TOOLS, type EnhancedTool } from '@/data/index'

// GET /api/tools - 获取工具列表
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const search = searchParams.get('search')

  let filtered: EnhancedTool[] = ALL_TOOLS

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
      totalPages: Math.ceil(filtered.length / 20),
    },
  })
}
