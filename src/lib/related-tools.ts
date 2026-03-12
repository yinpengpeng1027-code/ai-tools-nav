// 相关工具推荐算法
// 基于工具的分类、标签和特征进行智能匹配

import { Tool, RichTool } from "@/data/tools-data-rich";

export interface RelatedTool {
  tool: Tool | RichTool;
  matchScore: number;
  reason: string;
}

/**
 * 生成相关推荐工具
 * @param tool 原始工具
 * @param count 推荐数量
 * @returns 相关工具列表
 */
export function generateRelatedTools(
  tool: Tool | RichTool, 
  count: number = 3
): RelatedTool[] {
  // 加载完整工具数据
  const allTools = loadAllTools();
  
  // 计算每个工具的相关度分数
  const scoredTools = allTools
    .filter(t => t.id !== tool.id)
    .map(targetTool => ({
      tool: targetTool,
      score: calculateMatchScore(tool, targetTool),
      reason: generateMatchReason(tool, targetTool)
    }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map(item => ({
      tool: item.tool,
      matchScore: item.score,
      reason: item.reason
    }));

  return scoredTools;
}

/**
 * 计算两个工具的相关度分数
 */
function calculateMatchScore(source: Tool | RichTool, target: Tool | RichTool): number {
  let score = 0;

  // 1. 分类匹配 (权重: 30分)
  if (source.category === target.category) {
    score += 30;
  }

  // 2. 标签匹配 (权重: 每个相同标签5分，最多20分)
  const commonTags = source.tags.filter(tag => target.tags.includes(tag));
  score += Math.min(commonTags.length * 5, 20);

  // 3. 价格类型匹配 (权重: 10分)
  if (source.isVip === target.isVip) {
    score += 10;
  }

  // 4. 功能重叠度 (权重: 按重叠功能数计算)
  if ('features' in source && 'features' in target) {
    const commonFeatures = (source as RichTool).features.filter(
      f => (target as RichTool).features.includes(f)
    );
    score += commonFeatures.length * 5;
  }

  return score;
}

/**
 * 生成匹配原因
 */
function generateMatchReason(
  source: Tool | RichTool, 
  target: Tool | RichTool
): string {
  const reasons: string[] = [];

  // 分类原因
  if (source.category === target.category) {
    reasons.push(`同属「${source.category}」分类`);
  }

  // 标签原因
  const commonTags = source.tags.filter(tag => target.tags.includes(tag));
  if (commonTags.length > 0) {
    reasons.push(`支持 ${commonTags.slice(0, 2).join('、')}`);
  }

  // 功能原因
  if ('features' in source && 'features' in target) {
    const commonFeatures = (source as RichTool).features.filter(
      f => (target as RichTool).features.includes(f)
    );
    if (commonFeatures.length > 0) {
      reasons.push(`支持 ${commonFeatures.slice(0, 2).join('、')}`);
    }
  }

  if (reasons.length === 0) {
    return "热门推荐";
  }

  return reasons.join('，') + '等共同点';
}

/**
 * 加载所有工具数据
 */
function loadAllTools(): (Tool | RichTool)[] {
  // 从 tools-data-rich 导入
  return require("@/data/tools-data-rich").TOOLS_DATA;
}

/**
 * 根据分类获取该分类下的相关工具
 */
export function getToolsByCategory(
  category: string, 
  excludeIds: number[] = [], 
  limit: number = 5
): Tool[] {
  const allTools = loadAllTools() as Tool[];
  
  return allTools
    .filter(t => t.category === category && !excludeIds.includes(t.id))
    .slice(0, limit);
}
