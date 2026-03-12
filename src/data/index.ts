// AI 工具导航站 - 数据索引
// 最后更新：2026-03-12

import type { EnhancedTool, CategoryInfo, RelatedSite } from './types';
import { CATEGORIES, CATEGORY_STATS } from './types';

// 重新导出类型
export type { EnhancedTool, CategoryInfo, RelatedSite, DifficultyLevel } from './types';
export { CATEGORIES, CATEGORY_STATS, getCategoryById, getCategoryByName, getAllSubCategories } from './types';

// ========== 分类数据导入 ==========
import { TEXT_GENERATION_TOOLS } from './category-text-generation';
import { IMAGE_DESIGN_TOOLS } from './category-image-design';
import { VIDEO_PRODUCTION_TOOLS } from './category-video-production';
import { AUDIO_PROCESSING_TOOLS } from './category-audio-processing';
import { OFFICE_PRODUCTIVITY_TOOLS } from './category-office-productivity';
import { DATA_ANALYSIS_TOOLS } from './category-data-analysis';
import { CHATBOT_TOOLS } from './category-chatbot';
import { SOCIAL_MEDIA_TOOLS } from './category-social-media';
import { DEV_TOOLS } from './category-dev-tools';
import { EDUCATION_TOOLS } from './category-education';

// ========== 合并所有工具数据 ==========
export const ALL_TOOLS: EnhancedTool[] = [
  ...TEXT_GENERATION_TOOLS,
  ...IMAGE_DESIGN_TOOLS,
  ...VIDEO_PRODUCTION_TOOLS,
  ...AUDIO_PROCESSING_TOOLS,
  ...OFFICE_PRODUCTIVITY_TOOLS,
  ...DATA_ANALYSIS_TOOLS,
  ...CHATBOT_TOOLS,
  ...SOCIAL_MEDIA_TOOLS,
  ...DEV_TOOLS,
  ...EDUCATION_TOOLS,
];

// ========== 按分类导出 ==========
export const TOOLS_BY_CATEGORY: Record<string, EnhancedTool[]> = {
  '文本生成': ALL_TOOLS.filter(t => t.category === '文本生成'),
  '图像设计': ALL_TOOLS.filter(t => t.category === '图像设计'),
  '视频制作': ALL_TOOLS.filter(t => t.category === '视频制作'),
  '音频处理': ALL_TOOLS.filter(t => t.category === '音频处理'),
  '办公效率': ALL_TOOLS.filter(t => t.category === '办公效率'),
  '数据分析': ALL_TOOLS.filter(t => t.category === '数据分析'),
  '对话机器人': ALL_TOOLS.filter(t => t.category === '对话机器人'),
  '社交媒体': ALL_TOOLS.filter(t => t.category === '社交媒体'),
  '开发工具': ALL_TOOLS.filter(t => t.category === '开发工具'),
  '学习教育': ALL_TOOLS.filter(t => t.category === '学习教育'),
};

// ========== 按子分类导出 ==========
export const TOOLS_BY_SUBCATEGORY: Record<string, EnhancedTool[]> = {};

ALL_TOOLS.forEach(tool => {
  const key = `${tool.category}/${tool.subCategory}`;
  if (!TOOLS_BY_SUBCATEGORY[key]) {
    TOOLS_BY_SUBCATEGORY[key] = [];
  }
  TOOLS_BY_SUBCATEGORY[key].push(tool);
});

// ========== 工具总数 ==========
export const TOTAL_TOOLS = ALL_TOOLS.length;

// ========== 工具查询函数 ==========

/**
 * 根据ID获取工具
 */
export function getToolById(id: number): EnhancedTool | undefined {
  return ALL_TOOLS.find(t => t.id === id);
}

/**
 * 根据名称获取工具
 */
export function getToolByName(name: string): EnhancedTool | undefined {
  return ALL_TOOLS.find(t => t.name === name);
}

/**
 * 搜索工具
 */
export function searchTools(query: string): EnhancedTool[] {
  const lowerQuery = query.toLowerCase();
  return ALL_TOOLS.filter(t => 
    t.name.toLowerCase().includes(lowerQuery) ||
    t.description.toLowerCase().includes(lowerQuery) ||
    t.highlights.toLowerCase().includes(lowerQuery) ||
    t.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    t.features.some(f => f.toLowerCase().includes(lowerQuery))
  );
}

/**
 * 按标签筛选工具
 */
export function getToolsByTag(tag: string): EnhancedTool[] {
  return ALL_TOOLS.filter(t => t.tags.includes(tag));
}

/**
 * 获取免费工具
 */
export function getFreeTools(): EnhancedTool[] {
  return ALL_TOOLS.filter(t => !t.isVip);
}

/**
 * 获取付费工具
 */
export function getVipTools(): EnhancedTool[] {
  return ALL_TOOLS.filter(t => t.isVip);
}

/**
 * 按难度筛选工具
 */
export function getToolsByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced'): EnhancedTool[] {
  return ALL_TOOLS.filter(t => t.difficulty === difficulty);
}

/**
 * 按目标用户筛选工具
 */
export function getToolsByTargetUser(userType: string): EnhancedTool[] {
  return ALL_TOOLS.filter(t => t.targetUsers.includes(userType));
}

/**
 * 获取相关工具推荐
 */
export function getRelatedTools(toolId: number, limit: number = 5): EnhancedTool[] {
  const tool = getToolById(toolId);
  if (!tool) return [];
  
  // 同分类工具优先
  const sameCategory = ALL_TOOLS.filter(t => 
    t.category === tool.category && t.id !== toolId
  );
  
  // 同子分类次之
  const sameSubCategory = sameCategory.filter(t => 
    t.subCategory === tool.subCategory
  );
  
  // 合并并去重
  const related = [...new Set([...sameSubCategory, ...sameCategory])];
  
  return related.slice(0, limit);
}