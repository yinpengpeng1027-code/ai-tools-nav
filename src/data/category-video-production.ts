// 视频制作分类 - 完整的 AI 工具数据库（25 个工具）
// 最后更新：2026-03-12

export interface RelatedSite {
  name: string;
  url: string;
  type: 'official' | 'tutorial' | 'alternative' | 'community' | 'pricing' | 'review';
  description: string;
}

export interface EnhancedTool {
  id: number;
  name: string;
  description: string; // 简短描述（50 字内）
  highlights: string; // 核心亮点（30 字内，突出独特价值）
  category: string;
  subCategory: string; // 子分类
  logo: string;
  url: string;
  isVip: boolean;
  price: string;
  tags: string[];
  features: string[]; // 6 个功能特点
  useCases: string[]; // 5 个使用场景
  pros: string[]; // 4 个优势
  cons: string[]; // 3 个劣势
  relatedSites: RelatedSite[]; // 至少 3 个相关网站
  targetUsers: string[]; // 目标用户群
  difficulty: 'beginner' | 'intermediate' | 'advanced'; // 使用难度
}

export const VIDEO_PRODUCTION_TOOLS: EnhancedTool[] = [
  // ==================== 文生视频 ====================
  {
    id: 201,
    name: "Runway",
    description: "AI 视频生成和编辑工具，功能强大专业",
    highlights: "Gen-2 文生视频模型，电影级特效制作",
    category: "视频制作",
    subCategory: "文生视频",
    logo: "🎬",
    url: "https://runwayml.com",
    isVip: true,
    price: "免费 + $12-95/月",
    tags: ["免费增值", "英文", "Web"],
    features: ["Gen-2 文生视频", "智能抠图", "运动追踪", "视频修复", "风格转换", "绿幕移除"],
    useCases: ["电影制作", "广告创作", "短视频特效", "概念可视化", "艺术实验"],
    pros: ["功能专业强大", "AI 模型行业领先", "免费版本可用", "好莱坞团队使用"],
    cons: ["高级功能价格高", "学习曲线陡峭", "生成速度有限制"],
    relatedSites: [
      { name: "Runway 官方", url: "https://runwayml.com", type: "official", description: "官方网站和工具入口" },
      { name: "Runway 教程", url: "https://runwayml.com/tutorials", type: "tutorial", description: "官方使用教程和案例" },
      { name: "Runway 社区", url: "https://discord.gg/runwayml", type: "community", description: "Discord 用户社区" },
      { name: "Runway 定价", url: "https://runwayml.com/pricing", type: "pricing", description: "详细价格方案" }
    ],
    targetUsers: ["专业视频制作人", "电影工作者", "广告创意团队", "内容创作者"],
    difficulty: "intermediate"
  },
  {
    id: 202,
    name: "Sora",
    description: "OpenAI 的文生视频模型，电影级质量",
    highlights: "OpenAI 最新技术，理解复杂场景动作",
    category: "视频制作",
    subCategory: "文生视频",
    logo: "🎞️",
    url: "https://openai.com/sora",
    isVip: true,
    price: "待定（预计付费）",
    tags: ["付费", "英文", "Web"],
    features: ["电影级质量", "复杂场景理解", "长视频生成", "多风格支持", "物理模拟", "角色一致性"],
    useCases: ["电影预演", "广告创意", "教育内容", "游戏过场", "概念设计"],
    pros: ["质量业界顶级", "场景理解能力强", "OpenAI 技术背书", "视频连贯性好"],
    cons: ["尚未完全开放", "预计价格较高", "使用限制严格"],
    relatedSites: [
      { name: "OpenAI Sora", url: "https://openai.com/sora", type: "official", description: "OpenAI 官方介绍" },
      { name: "Sora 技术报告", url: "https://openai.com/research/video-generation-models", type: "tutorial", description: "技术细节和原理" },
      { name: "Sora 演示", url: "https://openai.com/sora#examples", type: "tutorial", description: "官方示例视频" },
      { name: "Sora 新闻", url: "https://openai.com/blog", type: "community", description: "最新动态和更新" }
    ],
    targetUsers: ["专业影视制作", "广告公司", "游戏工作室", "研究机构"],
    difficulty: "advanced"
  },
  {
    id: 203,
    name: "Pika Labs",
    description: "AI 视频生成工具，支持多种艺术风格",
    highlights: "Discord 便捷操作，快速生成创意视频",
    category: "视频制作",
    subCategory: "文生视频",
    logo: "✨",
    url: "https://pika.art",
    isVip: true,
    price: "免费 + $10-58/月",
    tags: ["免费增值", "英文", "Web"],
    features: ["文生视频", "图生视频", "视频扩展", "风格转换", "局部编辑", "镜头控制"],
    useCases: ["短视频创作", "社交媒体内容", "动画制作", "创意实验", "故事板"],
    pros: ["操作简单易上手", "生成速度快", "免费额度充足", "社区活跃"],
    cons: ["视频长度有限", "质量波动较大", "需通过 Discord"],
    relatedSites: [
      { name: "Pika 官网", url: "https://pika.art", type: "official", description: "官方网站" },
      { name: "Pika Discord", url: "https://discord.gg/pika", type: "community", description: "Discord 社区和工具" },
      { name: "Pika 教程", url: "https://pika.art/tutorials", type: "tutorial", description: "使用指南和技巧" },
      { name: "Pika 定价", url: "https://pika.art/pricing", type: "pricing", description: "订阅方案详情" }
    ],
    targetUsers: ["社交媒体创作者", "动画爱好者", "内容营销人员", "创意工作者"],
    difficulty: "beginner"
  },
  {
    id: 204,
    name: "Kinetix",
    description: "AI 视频生成平台，专注于创意内容",
    highlights: "快速文生视频，适合社交媒体创作",
    category: "视频制作",
    subCategory: "文生视频",
    logo: "🎥",
    url: "https://kinetix.tech",
    isVip: true,
    price: "免费 + $20-100/月",
    tags: ["免费增值", "英文", "Web"],
    features: ["文生视频", "动作捕捉", "3D 动画", "角色生成", "场景创建", "批量生成"],
    useCases: ["游戏视频", "社交媒体", "广告创意", "教育动画", "产品展示"],
    pros: ["3D 动画能力强", "动作生成自然", "免费版本可用", "API 支持"],
    cons: ["学习曲线存在", "高级功能贵", "渲染时间较长"],
    relatedSites: [
      { name: "Kinetix 官网", url: "https://kinetix.tech", type: "official", description: "官方网站" },
      { name: "Kinetix API", url: "https://docs.kinetix.tech", type: "tutorial", description: "开发者文档" },
      { name: "Kinetix 案例", url: "https://kinetix.tech/showcase", type: "tutorial", description: "作品展示" },
      { name: "Kinetix 博客", url: "https://kinetix.tech/blog", type: "community", description: "最新动态" }
    ],
    targetUsers: ["游戏开发者", "3D 动画师", "社交媒体运营", "广告创意"],
    difficulty: "intermediate"
  },
  {
    id: 205,
    name: "Rawshorts",
    description: "AI 动画视频制作工具，企业级解决方案",
    highlights: "白board 动画专家，企业演示首选",
    category: "视频制作",
    subCategory: "文生视频",
    logo: "📊",
    url: "https://rawshorts.com",
    isVip: true,
    price: "$29-99/月",
    tags: ["付费", "英文", "Web"],
    features: ["白板动画", "模板库", "云渲染", "团队协作", "品牌定制", "数据分析"],
    useCases: ["企业培训", "产品演示", "营销视频", "教育内容", "解释视频"],
    pros: ["企业级功能", "模板专业", "云端协作", "分析详细"],
    cons: ["价格较高", "创意性有限", "主要面向企业"],
    relatedSites: [
      { name: "Rawshorts 官网", url: "https://rawshorts.com", type: "official", description: "官方网站" },
      { name: "Rawshorts 模板", url: "https://rawshorts.com/templates", type: "tutorial", description: "模板库" },
      { name: "Rawshorts 定价", url: "https://rawshorts.com/pricing", type: "pricing", description: "价格方案" },
      { name: "Rawshorts 博客", url: "https://rawshorts.com/blog", type: "community", description: "使用技巧" }
    ],
    targetUsers: ["企业培训部门", "营销团队", "教育机构", "咨询公司"],
    difficulty: "intermediate"
  },

  // ==================== 数字人/虚拟主播 ====================
  {
    id: 206,
    name: "HeyGen",
    description: "AI 数字人视频生成，多语言口型同步",
    highlights: "视频翻译保持口型，140+ 数字人形象",
    category: "视频制作",
    subCategory: "数字人/虚拟主播",
    logo: "👤",
    url: "https://heygen.com",
    isVip: true,
    price: "免费 + $29-99/月",
    tags: ["付费", "多语言", "Web"],
    features: ["数字人生成", "多语言支持", "口型同步", "视频翻译", "自定义形象", "API 集成"],
    useCases: ["企业培训", "营销视频", "教育内容", "产品介绍", "多语言本地化"],
    pros: ["数字人逼真自然", "视频翻译独特", "多语言支持好", "操作简单"],
    cons: ["免费版限制多", "高级功能价格高", "定制性有限"],
    relatedSites: [
      { name: "HeyGen 官网", url: "https://heygen.com", type: "official", description: "官方网站" },
      { name: "HeyGen 教程", url: "https://heygen.com/tutorials", type: "tutorial", description: "使用指南" },
      { name: "HeyGen 定价", url: "https://heygen.com/pricing", type: "pricing", description: "订阅方案" },
      { name: "HeyGen 博客", url: "https://heygen.com/blog", type: "community", description: "案例和更新" }
    ],
    targetUsers: ["企业培训", "营销团队", "教育机构", "跨境电商"],
    difficulty: "beginner"
  },
  {
    id: 207,
    name: "Synthesia",
    description: "AI 虚拟主播视频生成，企业级平台",
    highlights: "140+AI 数字人，120+ 语言，企业首选",
    category: "视频制作",
    subCategory: "数字人/虚拟主播",
    logo: "🎭",
    url: "https://synthesia.io",
    isVip: true,
    price: "$22-67/月",
    tags: ["付费", "多语言", "Web"],
    features: ["140+ 数字人", "120+ 语言", "企业模板", "品牌定制", "团队协作", "SCORM 导出"],
    useCases: ["企业培训", "产品演示", "内部沟通", "客户支持", "合规培训"],
    pros: ["企业级功能完善", "数字人形象丰富", "多语言支持强", "品牌定制好"],
    cons: ["价格较高", "面向企业用户", "创意性一般"],
    relatedSites: [
      { name: "Synthesia 官网", url: "https://synthesia.io", type: "official", description: "官方网站" },
      { name: "Synthesia 学院", url: "https://synthesia.io/academy", type: "tutorial", description: "学习资源" },
      { name: "Synthesia 定价", url: "https://synthesia.io/pricing", type: "pricing", description: "企业方案" },
      { name: "Synthesia 案例", url: "https://synthesia.io/customers", type: "review", description: "客户案例" }
    ],
    targetUsers: ["大型企业", "培训部门", "HR 团队", "客户支持"],
    difficulty: "beginner"
  },
  {
    id: 208,
    name: "D-ID",
    description: "AI 数字人视频生成，照片说话",
    highlights: "让静态照片说话，创意数字人效果",
    category: "视频制作",
    subCategory: "数字人/虚拟主播",
    logo: "🗣️",
    url: "https://d-id.com",
    isVip: true,
    price: "免费 + $6-150/月",
    tags: ["免费增值", "多语言", "Web"],
    features: ["照片说话", "数字人生成", "实时直播", "API 服务", "多语言", "表情控制"],
    useCases: ["创意视频", "虚拟助手", "教育内容", "营销互动", "历史人物复活"],
    pros: ["照片说话独特", "免费版本可用", "API 强大", "创意性强"],
    cons: ["高级功能昂贵", "免费版水印", "质量波动"],
    relatedSites: [
      { name: "D-ID 官网", url: "https://d-id.com", type: "official", description: "官方网站" },
      { name: "D-ID API", url: "https://docs.d-id.com", type: "tutorial", description: "开发者文档" },
      { name: "D-ID 定价", url: "https://d-id.com/pricing", type: "pricing", description: "价格方案" },
      { name: "D-ID 社区", url: "https://discord.gg/d-id", type: "community", description: "用户社区" }
    ],
    targetUsers: ["内容创作者", "营销人员", "开发者", "教育机构"],
    difficulty: "intermediate"
  },
  {
    id: 209,
    name: "Colossyan",
    description: "AI 虚拟演员视频生成，企业学习平台",
    highlights: "多演员对话场景，专为学习设计",
    category: "视频制作",
    subCategory: "数字人/虚拟主播",
    logo: "🎬",
    url: "https://colossyan.com",
    isVip: true,
    price: "$27-97/月",
    tags: ["付费", "多语言", "Web"],
    features: ["多演员对话", "70+ 数字人", "多语言", "学习模板", "互动测验", "LMS 集成"],
    useCases: ["企业培训", "在线课程", "合规教育", "产品培训", "软技能训练"],
    pros: ["多演员场景", "学习功能完善", "LMS 集成", "模板专业"],
    cons: ["价格较高", "面向企业", "创意有限"],
    relatedSites: [
      { name: "Colossyan 官网", url: "https://colossyan.com", type: "official", description: "官方网站" },
      { name: "Colossyan 博客", url: "https://colossyan.com/blog", type: "community", description: "学习资源" },
      { name: "Colossyan 定价", url: "https://colossyan.com/pricing", type: "pricing", description: "订阅方案" },
      { name: "Colossyan 案例", url: "https://colossyan.com/customers", type: "review", description: "客户故事" }
    ],
    targetUsers: ["学习发展团队", "培训机构", "企业大学", "HR 部门"],
    difficulty: "beginner"
  },
  {
    id: 210,
    name: "Elai.io",
    description: "AI 视频生成平台，文本转视频",
    highlights: "80+ 数字人，25+ 语言，快速生成",
    category: "视频制作",
    subCategory: "数字人/虚拟主播",
    logo: "🎥",
    url: "https://elai.io",
    isVip: true,
    price: "免费 + $29-499/月",
    tags: ["免费增值", "多语言", "Web"],
    features: ["80+ 数字人", "25+ 语言", "PPT 转视频", "自定义背景", "声音克隆", "批量生成"],
    useCases: ["培训视频", "营销内容", "新闻播报", "产品演示", "教育课程"],
    pros: ["免费版本可用", "PPT 转换方便", "声音克隆", "批量生成"],
    cons: ["高级版昂贵", "免费版限制多", "质量一般"],
    relatedSites: [
      { name: "Elai.io 官网", url: "https://elai.io", type: "official", description: "官方网站" },
      { name: "Elai 教程", url: "https://elai.io/tutorials", type: "tutorial", description: "使用指南" },
      { name: "Elai 定价", url: "https://elai.io/pricing", type: "pricing", description: "价格方案" },
      { name: "Elai API", url: "https://docs.elai.io", type: "tutorial", description: "开发者文档" }
    ],
    targetUsers: ["培训讲师", "营销团队", "内容创作者", "中小企业"],
    difficulty: "beginner"
  },

  // ==================== 视频剪辑 ====================
  {
    id: 211,
    name: "剪映",
    description: "抖音官方视频剪辑工具，AI 功能丰富",
    highlights: "免费全能剪辑，抖音生态深度集成",
    category: "视频制作",
    subCategory: "视频剪辑",
    logo: "🎥",
    url: "https://capcut.cn",
    isVip: false,
    price: "免费 + 部分付费素材",
    tags: ["免费", "中文", "Web/App"],
    features: ["自动字幕", "智能抠图", "视频特效", "美颜功能", "海量模板", "多端同步"],
    useCases: ["短视频创作", "抖音内容", "Vlog 制作", "直播剪辑", "社交媒体"],
    pros: ["完全免费", "中文友好", "功能全面", "抖音生态"],
    cons: ["专业功能有限", "部分素材付费", "导出有水印"],
    relatedSites: [
      { name: "剪映官网", url: "https://capcut.cn", type: "official", description: "官方网站" },
      { name: "剪映教程", url: "https://capcut.cn/learn", type: "tutorial", description: "官方教程" },
      { name: "剪映社区", url: "https://capcut.cn/community", type: "community", description: "用户社区" },
      { name: "剪映素材", url: "https://capcut.cn/material", type: "tutorial", description: "素材库" }
    ],
    targetUsers: ["短视频创作者", "抖音博主", "Vlog 作者", "普通用户"],
    difficulty: "beginner"
  },
  {
    id: 212,
    name: "Descript",
    description: "AI 视频编辑，像编辑文档一样剪视频",
    highlights: "文本编辑视频，AI 语音克隆修复",
    category: "视频制作",
    subCategory: "视频剪辑",
    logo: "📝",
    url: "https://descript.com",
    isVip: true,
    price: "免费 + $12-65/月",
    tags: ["付费", "英文", "桌面"],
    features: ["文本编辑视频", "自动转录", "AI 语音克隆", "Overdub 修复", "屏幕录制", "多轨道"],
    useCases: ["播客制作", "教程视频", "采访剪辑", "YouTube 内容", "团队协作"],
    pros: ["编辑方式创新", "转录准确率高", "AI 功能强大", "适合对话内容"],
    cons: ["主要面向英文", "桌面应用", "高级功能贵"],
    relatedSites: [
      { name: "Descript 官网", url: "https://descript.com", type: "official", description: "官方网站" },
      { name: "Descript 学院", url: "https://descript.com/learn", type: "tutorial", description: "学习资源" },
      { name: "Descript 定价", url: "https://descript.com/pricing", type: "pricing", description: "订阅方案" },
      { name: "Descript 博客", url: "https://descript.com/blog", type: "community", description: "更新和技巧" }
    ],
    targetUsers: ["播客制作人", "YouTuber", "教育工作者", "内容创作者"],
    difficulty: "intermediate"
  },
  {
    id: 213,
    name: "Veed.io",
    description: "在线视频编辑工具，AI 字幕生成",
    highlights: "网页端剪辑，AI 字幕自动精准",
    category: "视频制作",
    subCategory: "视频剪辑",
    logo: "▶️",
    url: "https://veed.io",
    isVip: true,
    price: "免费 + $18-59/月",
    tags: ["免费增值", "多语言", "Web"],
    features: ["AI 字幕", "背景移除", "视频剪辑", "屏幕录制", "滤镜特效", "进度条"],
    useCases: ["社交媒体视频", "教程制作", "营销内容", "快速剪辑", "字幕添加"],
    pros: ["网页端便捷", "操作简单", "AI 字幕好", "免费可用"],
    cons: ["高级功能需付费", "导出有限制", "专业度一般"],
    relatedSites: [
      { name: "Veed.io 官网", url: "https://veed.io", type: "official", description: "官方网站" },
      { name: "Veed 教程", url: "https://veed.io/learn", type: "tutorial", description: "使用指南" },
      { name: "Veed 定价", url: "https://veed.io/pricing", type: "pricing", description: "价格方案" },
      { name: "Veed 工具集", url: "https://veed.io/tools", type: "tutorial", description: "工具集合" }
    ],
    targetUsers: ["社交媒体运营", "内容创作者", "营销人员", "教育工作者"],
    difficulty: "beginner"
  },
  {
    id: 214,
    name: "Wisecut",
    description: "AI 视频剪辑，自动去除静音片段",
    highlights: "智能跳跃剪辑，自动配乐字幕",
    category: "视频制作",
    subCategory: "视频剪辑",
    logo: "✂️",
    url: "https://wisecut.video",
    isVip: true,
    price: "免费 + $15-60/月",
    tags: ["免费增值", "多语言", "Web"],
    features: ["自动跳跃剪辑", "智能配乐", "自动字幕", "语音增强", "场景检测", "批量处理"],
    useCases: ["访谈视频", "教程内容", "YouTube 视频", "播客视频", "演讲录制"],
    pros: ["自动化程度高", "节省剪辑时间", "免费版本可用", "云端处理"],
    cons: ["创意控制有限", "高级功能贵", "依赖 AI 判断"],
    relatedSites: [
      { name: "Wisecut 官网", url: "https://wisecut.video", type: "official", description: "官方网站" },
      { name: "Wisecut 博客", url: "https://wisecut.video/blog", type: "community", description: "使用技巧" },
      { name: "Wisecut 定价", url: "https://wisecut.video/pricing", type: "pricing", description: "订阅方案" },
      { name: "Wisecut 帮助", url: "https://wisecut.video/help", type: "tutorial", description: "帮助中心" }
    ],
    targetUsers: ["YouTuber", "访谈制作人", "教育工作者", "内容创作者"],
    difficulty: "beginner"
  },
  {
    id: 215,
    name: "Shuffll",
    description: "AI 视频制作平台，团队协作",
    highlights: "企业视频协作，模板化快速生产",
    category: "视频制作",
    subCategory: "视频剪辑",
    logo: "🎬",
    url: "https://shuffll.com",
    isVip: true,
    price: "$20-100/月",
    tags: ["付费", "英文", "Web"],
    features: ["团队协作", "模板库", "品牌套件", "云存储", "审批流程", "分析追踪"],
    useCases: ["企业视频", "营销内容", "培训材料", "产品演示", "内部沟通"],
    pros: ["团队协作强", "品牌管理好", "模板专业", "分析详细"],
    cons: ["价格较高", "面向企业", "学习曲线"],
    relatedSites: [
      { name: "Shuffll 官网", url: "https://shuffll.com", type: "official", description: "官方网站" },
      { name: "Shuffll 博客", url: "https://shuffll.com/blog", type: "community", description: "行业洞察" },
      { name: "Shuffll 定价", url: "https://shuffll.com/pricing", type: "pricing", description: "企业方案" },
      { name: "Shuffll 案例", url: "https://shuffll.com/customers", type: "review", description: "客户案例" }
    ],
    targetUsers: ["企业营销团队", "视频制作公司", "品牌部门", "内容团队"],
    difficulty: "intermediate"
  },

  // ==================== 文本转视频 ====================
  {
    id: 216,
    name: "InVideo",
    description: "AI 视频创作平台，5000+ 专业模板",
    highlights: "文本转视频，海量模板媒体库",
    category: "视频制作",
    subCategory: "文本转视频",
    logo: "🎪",
    url: "https://invideo.io",
    isVip: true,
    price: "免费 + $20-60/月",
    tags: ["免费增值", "英文", "Web"],
    features: ["5000+ 模板", "文本转视频", "媒体库", "AI 脚本", "品牌工具", "团队协作"],
    useCases: ["营销视频", "社交媒体", "产品介绍", "新闻视频", "企业内容"],
    pros: ["模板海量", "文本转视频", "媒体库丰富", "免费可用"],
    cons: ["免费版水印", "高级功能贵", "创意性一般"],
    relatedSites: [
      { name: "InVideo 官网", url: "https://invideo.io", type: "official", description: "官方网站" },
      { name: "InVideo 学院", url: "https://invideo.io/learn", type: "tutorial", description: "学习资源" },
      { name: "InVideo 定价", url: "https://invideo.io/pricing", type: "pricing", description: "订阅方案" },
      { name: "InVideo 博客", url: "https://invideo.io/blog", type: "community", description: "技巧和更新" }
    ],
    targetUsers: ["营销人员", "社交媒体运营", "小企业", "内容创作者"],
    difficulty: "beginner"
  },
  {
    id: 217,
    name: "Lumen5",
    description: "文章转视频 AI 工具，内容营销利器",
    highlights: "博客文章自动转视频，智能匹配素材",
    category: "视频制作",
    subCategory: "文本转视频",
    logo: "📰",
    url: "https://lumen5.com",
    isVip: true,
    price: "免费 + $29-149/月",
    tags: ["付费", "英文", "Web"],
    features: ["文章转视频", "AI 匹配素材", "品牌定制", "媒体库", "多分辨率", "分析工具"],
    useCases: ["博客视频化", "内容营销", "社交媒体", "新闻视频", "企业传播"],
    pros: ["文章转换强", "操作简单", "品牌定制", "适合营销"],
    cons: ["价格较高", "创意性有限", "主要面向英文"],
    relatedSites: [
      { name: "Lumen5 官网", url: "https://lumen5.com", type: "official", description: "官方网站" },
      { name: "Lumen5 博客", url: "https://lumen5.com/blog", type: "community", description: "内容营销洞察" },
      { name: "Lumen5 定价", url: "https://lumen5.com/pricing", type: "pricing", description: "企业方案" },
      { name: "Lumen5 案例", url: "https://lumen5.com/customers", type: "review", description: "客户故事" }
    ],
    targetUsers: ["内容营销人员", "博主", "社交媒体经理", "企业传播"],
    difficulty: "beginner"
  },
  {
    id: 218,
    name: "Pictory",
    description: "AI 视频摘要工具，长内容转短视频",
    highlights: "长视频自动摘要，博客转视频",
    category: "视频制作",
    subCategory: "文本转视频",
    logo: "🎞️",
    url: "https://pictory.ai",
    isVip: true,
    price: "免费 + $19-99/月",
    tags: ["免费增值", "英文", "Web"],
    features: ["视频摘要", "博客转视频", "自动字幕", "场景检测", "媒体库", "品牌定制"],
    useCases: ["内容复用", "社交媒体", "培训摘要", "网络研讨会", "博客推广"],
    pros: ["摘要能力强", "长内容处理", "免费试用", "节省时间"],
    cons: ["高级版贵", "创意控制少", "英文为主"],
    relatedSites: [
      { name: "Pictory 官网", url: "https://pictory.ai", type: "official", description: "官方网站" },
      { name: "Pictory 博客", url: "https://pictory.ai/blog", type: "community", description: "使用技巧" },
      { name: "Pictory 定价", url: "https://pictory.ai/pricing", type: "pricing", description: "订阅方案" },
      { name: "Pictory 案例", url: "https://pictory.ai/case-studies", type: "review", description: "成功案例" }
    ],
    targetUsers: ["内容创作者", "营销人员", "培训师", "博主"],
    difficulty: "beginner"
  },
  {
    id: 219,
    name: "Fliki",
    description: "AI 文本转视频，语音合成集成",
    highlights: "文本转视频 + 语音，多语言支持",
    category: "视频制作",
    subCategory: "文本转视频",
    logo: "📹",
    url: "https://fliki.ai",
    isVip: true,
    price: "免费 + $21-108/月",
    tags: ["免费增值", "多语言", "Web"],
    features: ["文本转视频", "AI 语音", "多语言", "媒体库", "批量生成", "字幕同步"],
    useCases: ["社交媒体", "营销视频", "教育内容", "产品演示", "新闻播报"],
    pros: ["语音合成好", "多语言支持", "免费可用", "批量生成"],
    cons: ["高级功能贵", "免费版限制", "质量波动"],
    relatedSites: [
      { name: "Fliki 官网", url: "https://fliki.ai", type: "official", description: "官方网站" },
      { name: "Fliki 教程", url: "https://fliki.ai/tutorials", type: "tutorial", description: "使用指南" },
      { name: "Fliki 定价", url: "https://fliki.ai/pricing", type: "pricing", description: "价格方案" },
      { name: "Fliki 博客", url: "https://fliki.ai/blog", type: "community", description: "更新和技巧" }
    ],
    targetUsers: ["内容创作者", "营销人员", "教育工作者", "社交媒体运营"],
    difficulty: "beginner"
  },
  {
    id: 220,
    name: "万兴播爆",
    description: "万兴科技 AI 视频营销工具",
    highlights: "中文本地化，营销视频模板丰富",
    category: "视频制作",
    subCategory: "文本转视频",
    logo: "🎬",
    url: "https://virbo.wondershare.cn",
    isVip: true,
    price: "免费 + ¥68-699/月",
    tags: ["免费增值", "中文", "Web/App"],
    features: ["数字人播报", "文本转视频", "多语言", "模板库", "AI 配音", "批量生成"],
    useCases: ["营销视频", "产品推广", "教育培训", "新闻播报", "企业宣传"],
    pros: ["中文友好", "本地化好", "功能全面", "多端支持"],
    cons: ["高级功能贵", "免费版限制", "创意性一般"],
    relatedSites: [
      { name: "万兴播爆官网", url: "https://virbo.wondershare.cn", type: "official", description: "官方网站" },
      { name: "万兴教程", url: "https://virbo.wondershare.cn/tutorial", type: "tutorial", description: "使用教程" },
      { name: "万兴定价", url: "https://virbo.wondershare.cn/pricing", type: "pricing", description: "订阅方案" },
      { name: "万兴社区", url: "https://community.wondershare.cn", type: "community", description: "用户社区" }
    ],
    targetUsers: ["中小企业", "营销人员", "内容创作者", "电商卖家"],
    difficulty: "beginner"
  },

  // ==================== 短视频处理 ====================
  {
    id: 221,
    name: "Opus Clip",
    description: "AI 短视频剪辑，长视频自动切片",
    highlights: "一键生成短视频，病毒式传播优化",
    category: "视频制作",
    subCategory: "短视频处理",
    logo: "📱",
    url: "https://opus.pro",
    isVip: true,
    price: "免费 + $19-99/月",
    tags: ["免费增值", "英文", "Web"],
    features: ["自动切片", "病毒评分", "自动字幕", "表情检测", "多格式", "批量处理"],
    useCases: ["播客切片", "YouTube Shorts", "TikTok 内容", "直播剪辑", "内容复用"],
    pros: ["自动化强", "病毒评分实用", "节省时间", "免费可用"],
    cons: ["高级版贵", "创意控制少", "依赖 AI 判断"],
    relatedSites: [
      { name: "Opus Clip 官网", url: "https://opus.pro", type: "official", description: "官方网站" },
      { name: "Opus 博客", url: "https://opus.pro/blog", type: "community", description: "技巧和更新" },
      { name: "Opus 定价", url: "https://opus.pro/pricing", type: "pricing", description: "订阅方案" },
      { name: "Opus 案例", url: "https://opus.pro/showcase", type: "review", description: "作品展示" }
    ],
    targetUsers: ["播客制作人", "YouTuber", "社交媒体运营", "内容创作者"],
    difficulty: "beginner"
  },
  {
    id: 222,
    name: "Munch",
    description: "AI 内容切片工具，趋势驱动剪辑",
    highlights: "AI 趋势分析，智能提取高光片段",
    category: "视频制作",
    subCategory: "短视频处理",
    logo: "🍕",
    url: "https://getmunch.com",
    isVip: true,
    price: "$49-199/月",
    tags: ["付费", "英文", "Web"],
    features: ["趋势分析", "自动切片", "关键词提取", "多平台优化", "协作工具", "分析追踪"],
    useCases: ["播客营销", "网络研讨会", "长视频推广", "社交媒体", "内容策略"],
    pros: ["趋势分析强", "多平台优化", "团队协作", "分析详细"],
    cons: ["价格较高", "面向企业", "学习曲线"],
    relatedSites: [
      { name: "Munch 官网", url: "https://getmunch.com", type: "official", description: "官方网站" },
      { name: "Munch 博客", url: "https://getmunch.com/blog", type: "community", description: "内容营销洞察" },
      { name: "Munch 定价", url: "https://getmunch.com/pricing", type: "pricing", description: "企业方案" },
      { name: "Munch 案例", url: "https://getmunch.com/customers", type: "review", description: "客户案例" }
    ],
    targetUsers: ["营销团队", "内容机构", "播客网络", "媒体公司"],
    difficulty: "intermediate"
  },
  {
    id: 223,
    name: "Vidyo",
    description: "AI 短视频生成，多平台适配",
    highlights: "自动多平台适配，智能模板剪辑",
    category: "视频制作",
    subCategory: "短视频处理",
    logo: "🎬",
    url: "https://vidyo.ai",
    isVip: true,
    price: "免费 + $29-99/月",
    tags: ["免费增值", "英文", "Web"],
    features: ["自动切片", "多平台适配", "智能模板", "自动字幕", "品牌定制", "云存储"],
    useCases: ["播客切片", "课程剪辑", "直播回放", "YouTube  Shorts", "TikTok"],
    pros: ["多平台优化", "模板丰富", "免费可用", "操作简单"],
    cons: ["高级版贵", "免费版限制", "质量波动"],
    relatedSites: [
      { name: "Vidyo 官网", url: "https://vidyo.ai", type: "official", description: "官方网站" },
      { name: "Vidyo 教程", url: "https://vidyo.ai/tutorials", type: "tutorial", description: "使用指南" },
      { name: "Vidyo 定价", url: "https://vidyo.ai/pricing", type: "pricing", description: "订阅方案" },
      { name: "Vidyo 博客", url: "https://vidyo.ai/blog", type: "community", description: "技巧和更新" }
    ],
    targetUsers: ["内容创作者", "教育工作者", "播客制作人", "社交媒体运营"],
    difficulty: "beginner"
  },

  // ==================== 视频优化 ====================
  {
    id: 224,
    name: "TubeMagic",
    description: "AI YouTube 视频优化工具",
    highlights: "YouTube 专属优化，标题标签生成",
    category: "视频制作",
    subCategory: "视频优化",
    logo: "📺",
    url: "https://tubemagic.com",
    isVip: true,
    price: "$19-49/月",
    tags: ["付费", "英文", "Web"],
    features: ["标题生成", "标签优化", "描述写作", "缩略图建议", "SEO 分析", "竞品研究"],
    useCases: ["YouTube SEO", "视频优化", "频道增长", "内容策略", "竞品分析"],
    pros: ["YouTube 专注", "SEO 功能强", "操作简单", "效果明显"],
    cons: ["仅支持 YouTube", "价格较高", "功能单一"],
    relatedSites: [
      { name: "TubeMagic 官网", url: "https://tubemagic.com", type: "official", description: "官方网站" },
      { name: "TubeMagic 博客", url: "https://tubemagic.com/blog", type: "tutorial", description: "YouTube 技巧" },
      { name: "TubeMagic 定价", url: "https://tubemagic.com/pricing", type: "pricing", description: "订阅方案" },
      { name: "TubeMagic 工具", url: "https://tubemagic.com/tools", type: "tutorial", description: "工具集合" }
    ],
    targetUsers: ["YouTuber", "视频创作者", "频道运营", "内容营销"],
    difficulty: "beginner"
  },
  {
    id: 225,
    name: "Steve.ai",
    description: "AI 动画和真人视频生成平台",
    highlights: "动画 + 真人双模式，文本快速转视频",
    category: "视频制作",
    subCategory: "文本转视频",
    logo: "🎭",
    url: "https://steve.ai",
    isVip: true,
    price: "免费 + $15-60/月",
    tags: ["免费增值", "多语言", "Web"],
    features: ["动画视频", "真人视频", "文本转视频", "模板库", "角色定制", "多语言"],
    useCases: ["营销视频", "解释视频", "培训材料", "社交媒体", "企业传播"],
    pros: ["双模式选择", "免费可用", "模板丰富", "操作简单"],
    cons: ["高级功能贵", "免费版水印", "创意有限"],
    relatedSites: [
      { name: "Steve.ai 官网", url: "https://steve.ai", type: "official", description: "官方网站" },
      { name: "Steve.ai 博客", url: "https://steve.ai/blog", type: "community", description: "使用技巧" },
      { name: "Steve.ai 定价", url: "https://steve.ai/pricing", type: "pricing", description: "订阅方案" },
      { name: "Steve.ai 教程", url: "https://steve.ai/tutorials", type: "tutorial", description: "学习资源" }
    ],
    targetUsers: ["营销人员", "中小企业", "内容创作者", "教育工作者"],
    difficulty: "beginner"
  }
];
