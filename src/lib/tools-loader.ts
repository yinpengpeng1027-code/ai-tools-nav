/**
 * 工具数据加载器 - 外部数据源方案
 * 使用 jsDelivr CDN + 多级缓存策略
 */

export interface Tool {
  id: number;
  name: string;
  description: string;
  category: string;
  subCategory: string;
  logo: string;
  url: string;
  isVip: boolean;
  price: string;
  tags: string[];
  features: string[];
  useCases: string[];
  pros: string[];
  cons: string[];
  targetUsers: string[];
  difficulty: string;
}

export interface Category {
  name: string;
  icon: string;
  count: number;
}

export interface ToolsData {
  version: string;
  lastUpdated: string;
  tools: Tool[];
  categories: Category[];
}

// 数据源配置（版本锁定）
const TOOLS_DATA_URL = 'https://cdn.jsdelivr.net/gh/yinpengpeng1027-code/ai-tools-data@v1.0.0/tools.json';

// 内存缓存（Worker 级别）
let cachedData: ToolsData | null = null;
let cacheTimestamp = 0;
const CACHE_TTL = 3600 * 1000; // 1 小时

/**
 * 获取工具数据（带缓存）
 */
export async function getToolsData(): Promise<ToolsData> {
  // 检查内存缓存
  const now = Date.now();
  if (cachedData && (now - cacheTimestamp) < CACHE_TTL) {
    return cachedData;
  }

  try {
    // 尝试从 CDN 加载
    const response = await fetch(TOOLS_DATA_URL, {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch tools data: ${response.status}`);
    }

    const data: ToolsData = await response.json();
    
    // 更新缓存
    cachedData = data;
    cacheTimestamp = now;

    return data;
  } catch (error) {
    console.error('Error loading tools data:', error);
    
    // 降级：返回空数据（不应该发生）
    if (cachedData) {
      return cachedData; // 返回过期缓存
    }
    
    throw error;
  }
}

/**
 * 获取所有工具
 */
export async function getAllTools(): Promise<Tool[]> {
  const data = await getToolsData();
  return data.tools;
}

/**
 * 根据 ID 获取工具
 */
export async function getToolById(id: number): Promise<Tool | undefined> {
  const tools = await getAllTools();
  return tools.find(t => t.id === id);
}

/**
 * 根据分类获取工具
 */
export async function getToolsByCategory(category: string): Promise<Tool[]> {
  const tools = await getAllTools();
  return tools.filter(t => t.category === category);
}

/**
 * 搜索工具
 */
export async function searchTools(query: string): Promise<Tool[]> {
  const tools = await getAllTools();
  const normalizedQuery = query.toLowerCase().trim();
  
  return tools.filter(t => 
    t.name.toLowerCase().includes(normalizedQuery) ||
    t.description.toLowerCase().includes(normalizedQuery) ||
    t.tags.some(tag => tag.toLowerCase().includes(normalizedQuery))
  );
}

/**
 * 获取所有分类
 */
export async function getCategories(): Promise<Category[]> {
  const data = await getToolsData();
  return data.categories;
}

/**
 * 获取工具总数
 */
export async function getToolsCount(): Promise<number> {
  const tools = await getAllTools();
  return tools.length;
}
