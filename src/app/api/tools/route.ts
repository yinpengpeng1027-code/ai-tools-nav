import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET /api/tools - 获取工具列表
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const search = searchParams.get('search')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')

    const where: any = {}

    if (category) {
      where.categoryId = parseInt(category)
    }

    if (search) {
      where.OR = [
        { name: { contains: search } },
        { description: { contains: search } },
      ]
    }

    const tools = await prisma.tool.findMany({
      where,
      include: {
        category: true,
      },
      orderBy: {
        rating: 'desc',
      },
      skip: (page - 1) * limit,
      take: limit,
    })

    const total = await prisma.tool.count({ where })

    return NextResponse.json({
      data: tools,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('获取工具列表失败:', error)
    return NextResponse.json(
      { error: '获取工具列表失败' },
      { status: 500 }
    )
  }
}

// POST /api/tools - 创建工具（管理员）
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, description, logo, websiteUrl, categoryId, tags, priceType, price } = body

    const tool = await prisma.tool.create({
      data: {
        name,
        description,
        logo,
        websiteUrl,
        categoryId: parseInt(categoryId),
        tags: JSON.stringify(tags || []),
        priceType: parseInt(priceType) || 0,
        price: price ? parseFloat(price) : 0,
      },
    })

    return NextResponse.json(tool, { status: 201 })
  } catch (error) {
    console.error('创建工具失败:', error)
    return NextResponse.json(
      { error: '创建工具失败' },
      { status: 500 }
    )
  }
}
