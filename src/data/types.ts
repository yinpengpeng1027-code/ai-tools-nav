// AI 工具导航站 - 增强版数据类型定义
// 最后更新：2026-03-12

/**
 * 工具相关网站
 */
export interface RelatedSite {
  /** 网站名称 */
  name: string;
  /** 网站地址 */
  url: string;
  /** 网站类型 */
  type: 'official' | 'tutorial' | 'alternative' | 'community' | 'pricing' | 'review';
  /** 网站描述 */
  description: string;
}

/**
 * 使用难度等级
 */
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

/**
 * 增强版工具数据结构
 */
export interface EnhancedTool {
  // ========== 基础信息 ==========
  /** 工具唯一标识 */
  id: number;
  /** 工具名称 */
  name: string;
  /** 简短描述（50字以内） */
  description: string;
  /** 核心亮点（30字以内，突出独特价值） */
  highlights: string;
  
  // ========== 分类信息 ==========
  /** 一级分类 */
  category: string;
  /** 二级分类 */
  subCategory: string;
  
  // ========== 基础属性 ==========
  /** Logo 图标（emoji） */
  logo: string;
  /** 官网地址 */
  url: string;
  /** 是否需要付费（已废弃，所有工具均免费） */
  isVip?: boolean;
  /** 价格说明 */
  price: string;
  /** 标签 */
  tags: string[];
  
  // ========== 详细信息 ==========
  /** 功能特点（6个） */
  features: string[];
  /** 使用场景（5个） */
  useCases: string[];
  /** 优势（4个） */
  pros: string[];
  /** 劣势（3个） */
  cons: string[];
  
  // ========== 关联数据 ==========
  /** 相关网站（至少3个） */
  relatedSites: RelatedSite[];
  
  // ========== 用户定位 ==========
  /** 目标用户群 */
  targetUsers: string[];
  /** 使用难度 */
  difficulty: DifficultyLevel;
}

/**
 * 分类信息
 */
export interface CategoryInfo {
  /** 分类ID */
  id: string;
  /** 分类名称 */
  name: string;
  /** 分类图标 */
  icon: string;
  /** 分类描述 */
  description: string;
  /** 子分类列表 */
  subCategories: SubCategoryInfo[];
  /** 工具数量 */
  toolCount: number;
}

/**
 * 子分类信息
 */
export interface SubCategoryInfo {
  /** 子分类ID */
  id: string;
  /** 子分类名称 */
  name: string;
  /** 子分类描述 */
  description: string;
  /** 工具数量 */
  toolCount: number;
}

/**
 * 一级分类定义
 */
export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'text-generation',
    name: '文本生成',
    icon: '📝',
    description: 'AI 文本创作与处理工具，涵盖对话助手、营销文案、创意写作等',
    subCategories: [
      { id: 'chat-assistant', name: '对话助手', description: '智能对话 AI，多轮问答', toolCount: 0 },
      { id: 'marketing-copy', name: '营销文案', description: '广告、社媒、邮件文案生成', toolCount: 0 },
      { id: 'creative-writing', name: '创意写作', description: '小说、故事、剧本创作', toolCount: 0 },
      { id: 'writing-assistant', name: '写作辅助', description: '语法检查、润色、改写', toolCount: 0 },
      { id: 'seo-content', name: 'SEO内容', description: '搜索引擎优化内容生成', toolCount: 0 },
      { id: 'search-qa', name: '搜索问答', description: 'AI 搜索与知识问答', toolCount: 0 },
    ],
    toolCount: 25,
  },
  {
    id: 'image-design',
    name: '图像设计',
    icon: '🎨',
    description: 'AI 图像生成与设计工具，从绘画到编辑全覆盖',
    subCategories: [
      { id: 'ai-painting', name: 'AI 绘画', description: '文生图、图生图创作', toolCount: 0 },
      { id: 'image-editing', name: '图像编辑', description: '抠图、修复、增强', toolCount: 0 },
      { id: 'logo-brand', name: 'Logo/品牌设计', description: '品牌视觉与 Logo 设计', toolCount: 0 },
      { id: 'image-enhance', name: '图像增强', description: '放大、上色、修复', toolCount: 0 },
      { id: 'design-template', name: '设计模板', description: '海报、PPT 模板设计', toolCount: 0 },
      { id: 'model-resource', name: '模型/资源', description: 'AI 模型与素材资源', toolCount: 0 },
      { id: 'creative-art', name: '创意艺术', description: '艺术风格创作', toolCount: 0 },
    ],
    toolCount: 25,
  },
  {
    id: 'video-production',
    name: '视频制作',
    icon: '🎬',
    description: 'AI 视频生成与编辑工具，打造专业视频内容',
    subCategories: [
      { id: 'text-to-video', name: '文生视频', description: '文字描述生成视频', toolCount: 0 },
      { id: 'digital-human', name: '数字人/虚拟主播', description: 'AI 虚拟形象视频', toolCount: 0 },
      { id: 'video-editing', name: '视频剪辑', description: '智能剪辑与编辑', toolCount: 0 },
      { id: 'text-video-gen', name: '文本转视频', description: '文章/脚本转视频', toolCount: 0 },
      { id: 'short-video', name: '短视频处理', description: '短视频切片与优化', toolCount: 0 },
      { id: 'video-optimize', name: '视频优化', description: '视频 SEO 与优化', toolCount: 0 },
    ],
    toolCount: 25,
  },
  {
    id: 'audio-processing',
    name: '音频处理',
    icon: '🎵',
    description: 'AI 音频合成与处理工具，从语音到音乐全覆盖',
    subCategories: [
      { id: 'voice-synthesis', name: 'AI 语音合成', description: 'TTS 语音生成', toolCount: 0 },
      { id: 'music-creation', name: 'AI 音乐创作', description: '音乐作曲与生成', toolCount: 0 },
      { id: 'audio-separation', name: '音频分离/处理', description: '人声分离、混音', toolCount: 0 },
      { id: 'voice-clone', name: '语音克隆', description: '声音复刻与模仿', toolCount: 0 },
      { id: 'noise-reduction', name: '降噪增强', description: '音频降噪与增强', toolCount: 0 },
      { id: 'text-to-speech', name: '文本朗读', description: '听书与朗读工具', toolCount: 0 },
    ],
    toolCount: 22,
  },
  {
    id: 'office-productivity',
    name: '办公效率',
    icon: '📊',
    description: 'AI 办公辅助工具，提升工作效率与协作',
    subCategories: [
      { id: 'knowledge-management', name: '知识管理', description: '笔记与知识库', toolCount: 0 },
      { id: 'office-suite', name: 'AI 办公套件', description: '集成办公平台', toolCount: 0 },
      { id: 'meeting-assistant', name: '会议助手', description: '会议记录与转录', toolCount: 0 },
      { id: 'presentation', name: '演示文稿', description: 'PPT 生成与设计', toolCount: 0 },
      { id: 'task-management', name: '任务管理', description: '项目与任务规划', toolCount: 0 },
      { id: 'email-efficiency', name: '邮件效率', description: '邮件处理与管理', toolCount: 0 },
      { id: 'automation', name: '自动化工具', description: '工作流自动化', toolCount: 0 },
    ],
    toolCount: 25,
  },
  {
    id: 'data-analysis',
    name: '数据分析',
    icon: '📈',
    description: 'AI 数据分析与可视化工具，洞察数据价值',
    subCategories: [
      { id: 'bi-visualization', name: 'BI 可视化', description: '商业智能仪表盘', toolCount: 0 },
      { id: 'auto-ml', name: '自动化机器学习', description: 'AutoML 平台', toolCount: 0 },
      { id: 'ai-analytics', name: 'AI 数据分析', description: '自然语言查询数据', toolCount: 0 },
      { id: 'data-spreadsheet', name: '数据表格', description: '智能表格处理', toolCount: 0 },
      { id: 'visualization-tool', name: '数据可视化工具', description: '图表与信息图', toolCount: 0 },
      { id: 'open-source-analytics', name: '开源分析', description: '开源 BI 工具', toolCount: 0 },
    ],
    toolCount: 22,
  },
  {
    id: 'chatbot',
    name: '对话机器人',
    icon: '🤖',
    description: 'AI 对话机器人平台，构建智能对话系统',
    subCategories: [
      { id: 'customer-service', name: '客服机器人', description: '智能客服与支持', toolCount: 0 },
      { id: 'dev-platform', name: '开发平台', description: '对话 AI 开发框架', toolCount: 0 },
      { id: 'marketing-chat', name: '营销聊天', description: '营销与销售机器人', toolCount: 0 },
      { id: 'ai-companion', name: 'AI 陪伴', description: '虚拟伴侣与角色', toolCount: 0 },
      { id: 'enterprise-chat', name: '企业对话', description: '企业级对话平台', toolCount: 0 },
    ],
    toolCount: 22,
  },
  {
    id: 'social-media',
    name: '社交媒体',
    icon: '📱',
    description: 'AI 社交媒体管理与营销工具',
    subCategories: [
      { id: 'social-management', name: '社媒管理', description: '多平台内容管理', toolCount: 0 },
      { id: 'content-scheduling', name: '内容调度', description: '定时发布与排期', toolCount: 0 },
      { id: 'ai-content-gen', name: 'AI 内容生成', description: '社媒内容创作', toolCount: 0 },
      { id: 'social-analytics', name: '数据分析', description: '社媒数据分析', toolCount: 0 },
      { id: 'sentiment-monitor', name: '舆情监控', description: '品牌监测与预警', toolCount: 0 },
      { id: 'growth-tools', name: '增长工具', description: '粉丝增长与转化', toolCount: 0 },
    ],
    toolCount: 22,
  },
  {
    id: 'dev-tools',
    name: '开发工具',
    icon: '💻',
    description: 'AI 编程辅助与开发工具，加速开发流程',
    subCategories: [
      { id: 'ai-editor', name: 'AI 代码编辑器', description: 'AI 增强编辑器', toolCount: 0 },
      { id: 'code-completion', name: '代码补全', description: '智能代码建议', toolCount: 0 },
      { id: 'online-ide', name: '在线开发环境', description: '云端 IDE', toolCount: 0 },
      { id: 'code-review', name: '代码搜索/审查', description: '代码分析与审查', toolCount: 0 },
      { id: 'ai-web-gen', name: 'AI 网站生成', description: '零代码建站', toolCount: 0 },
      { id: 'design-to-code', name: '设计转代码', description: '设计稿转前端', toolCount: 0 },
      { id: 'open-source-dev', name: '开源工具', description: '开源开发工具', toolCount: 0 },
    ],
    toolCount: 25,
  },
  {
    id: 'education',
    name: '学习教育',
    icon: '🎓',
    description: 'AI 教育与学习辅助工具，助力知识获取',
    subCategories: [
      { id: 'language-learning', name: '语言学习', description: '外语学习与练习', toolCount: 0 },
      { id: 'ai-tutor', name: 'AI 辅导', description: '个性化学习辅导', toolCount: 0 },
      { id: 'flashcard-quiz', name: '学习卡片/测验', description: '记忆与测试工具', toolCount: 0 },
      { id: 'math-learning', name: '数学学习', description: '数学解题与学习', toolCount: 0 },
      { id: 'homework-help', name: '作业帮助', description: '作业答疑与辅导', toolCount: 0 },
      { id: 'teacher-tools', name: '教师工具', description: '教学资源生成', toolCount: 0 },
      { id: 'chinese-platform', name: '中文学习平台', description: '本土学习平台', toolCount: 0 },
    ],
    toolCount: 22,
  },
];

/**
 * 获取所有二级分类
 */
export function getAllSubCategories(): { categoryId: string; subCategory: SubCategoryInfo }[] {
  const result: { categoryId: string; subCategory: SubCategoryInfo }[] = [];
  CATEGORIES.forEach(cat => {
    cat.subCategories.forEach(sub => {
      result.push({ categoryId: cat.id, subCategory: sub });
    });
  });
  return result;
}

/**
 * 根据一级分类 ID 获取分类信息
 */
export function getCategoryById(id: string): CategoryInfo | undefined {
  return CATEGORIES.find(cat => cat.id === id);
}

/**
 * 根据名称获取分类信息
 */
export function getCategoryByName(name: string): CategoryInfo | undefined {
  return CATEGORIES.find(cat => cat.name === name);
}

/**
 * 导出分类统计数据
 */
export const CATEGORY_STATS = {
  totalCategories: CATEGORIES.length,
  totalSubCategories: CATEGORIES.reduce((sum, cat) => sum + cat.subCategories.length, 0),
  totalTools: CATEGORIES.reduce((sum, cat) => sum + cat.toolCount, 0),
  byCategory: Object.fromEntries(CATEGORIES.map(cat => [cat.name, cat.toolCount])),
};