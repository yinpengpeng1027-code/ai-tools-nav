// AI 工具导航站 - 图像设计分类工具数据
// 最后更新：2026-03-12
// 包含 25 个图像设计类 AI 工具的详细数据

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

export const IMAGE_DESIGN_TOOLS: EnhancedTool[] = [
  // ==================== AI 绘画 ====================
  {
    id: 101,
    name: "Midjourney",
    description: "顶级 AI 绘画工具，以艺术性和创造力著称，生成高质量艺术作品",
    highlights: "艺术风格独特，细节精致，社区活跃",
    category: "图像设计",
    subCategory: "AI 绘画",
    logo: "🎨",
    url: "https://midjourney.com",
    isVip: true,
    price: "$10-120/月",
    tags: ["付费", "英文", "Discord"],
    features: [
      "独特的艺术风格渲染",
      "高质量细节生成",
      "多种艺术模式选择",
      "图像放大与变体",
      "风格参考功能",
      "社区作品灵感"
    ],
    useCases: [
      "概念艺术创作",
      "插画设计",
      "游戏美术素材",
      "社交媒体配图",
      "艺术作品集"
    ],
    pros: [
      "艺术质量行业领先",
      "风格独特有辨识度",
      "社区资源丰富",
      "持续更新迭代"
    ],
    cons: [
      "需通过 Discord 使用",
      "价格相对较高",
      "学习曲线较陡"
    ],
    relatedSites: [
      { name: "Midjourney 官网", url: "https://midjourney.com", type: "official", description: "官方网站和订阅入口" },
      { name: "Midjourney Discord", url: "https://discord.gg/midjourney", type: "community", description: "官方 Discord 社区" },
      { name: "Midjourney 教程", url: "https://www.midjourneytutorial.com", type: "tutorial", description: "详细使用教程和技巧" },
      { name: "PromptHero", url: "https://prompthero.com/midjourney", type: "community", description: "提示词分享社区" }
    ],
    targetUsers: ["数字艺术家", "概念设计师", "插画师", "游戏开发者", "创意工作者"],
    difficulty: "intermediate"
  },
  {
    id: 102,
    name: "DALL-E 3",
    description: "OpenAI 的图像生成模型，精准理解文本提示，生成多样化图像",
    highlights: "提示词理解精准，集成 ChatGPT，使用便捷",
    category: "图像设计",
    subCategory: "AI 绘画",
    logo: "🖼️",
    url: "https://openai.com/dall-e-3",
    isVip: true,
    price: "通过 ChatGPT Plus ($20/月)",
    tags: ["付费", "英文", "Web"],
    features: [
      "精准文本理解",
      "高质量图像生成",
      "ChatGPT 集成",
      "安全内容过滤",
      "图像编辑能力",
      "多种风格支持"
    ],
    useCases: [
      "创意概念可视化",
      "营销素材制作",
      "教育插图",
      "产品原型设计",
      "社交媒体内容"
    ],
    pros: [
      "提示词理解最准确",
      "与 ChatGPT 无缝集成",
      "内容安全可靠",
      "上手简单"
    ],
    cons: [
      "需 ChatGPT Plus 订阅",
      "艺术风格相对保守",
      "自定义选项有限"
    ],
    relatedSites: [
      { name: "DALL-E 3 官网", url: "https://openai.com/dall-e-3", type: "official", description: "OpenAI 官方介绍页面" },
      { name: "ChatGPT", url: "https://chat.openai.com", type: "official", description: "使用 DALL-E 3 的平台" },
      { name: "DALL-E 3 指南", url: "https://help.openai.com/en/articles/dall-e-3", type: "tutorial", description: "官方使用指南" },
      { name: "AI Art 社区", url: "https://www.reddit.com/r/dalle3", type: "community", description: "Reddit 讨论社区" }
    ],
    targetUsers: ["内容创作者", "营销人员", "教育工作者", "设计师", "普通用户"],
    difficulty: "beginner"
  },
  {
    id: 103,
    name: "Stable Diffusion",
    description: "开源图像生成模型，可本地部署，高度可定制和扩展",
    highlights: "开源免费，可本地运行，插件生态丰富",
    category: "图像设计",
    subCategory: "AI 绘画",
    logo: "🌊",
    url: "https://stability.ai",
    isVip: false,
    price: "免费 (本地部署)",
    tags: ["免费", "开源", "本地"],
    features: [
      "完全开源免费",
      "本地离线运行",
      "丰富插件生态",
      "模型自定义训练",
      "精细参数控制",
      "多种衍生版本"
    ],
    useCases: [
      "专业图像创作",
      "模型微调训练",
      "批量图像生成",
      "研究实验",
      "商业项目"
    ],
    pros: [
      "完全免费开源",
      "隐私安全可控",
      "扩展性极强",
      "社区支持活跃"
    ],
    cons: [
      "部署配置复杂",
      "需要硬件支持",
      "学习成本高"
    ],
    relatedSites: [
      { name: "Stability AI", url: "https://stability.ai", type: "official", description: "官方开发和公司网站" },
      { name: "Civitai", url: "https://civitai.com", type: "community", description: "模型和资源分享平台" },
      { name: "Stable Diffusion WebUI", url: "https://github.com/AUTOMATIC1111/stable-diffusion-webui", type: "tutorial", description: "流行 Web 界面项目" },
      { name: "Hugging Face", url: "https://huggingface.co/stabilityai", type: "official", description: "模型下载和文档" }
    ],
    targetUsers: ["开发者", "研究人员", "高级用户", "AI 艺术家", "技术爱好者"],
    difficulty: "advanced"
  },
  {
    id: 104,
    name: "Leonardo AI",
    description: "专业 AI 艺术平台，提供游戏资产、概念艺术等专业工具",
    highlights: "游戏资产专用，训练自定义模型，实时生成",
    category: "图像设计",
    subCategory: "AI 绘画",
    logo: "🦁",
    url: "https://leonardo.ai",
    isVip: true,
    price: "免费 + $10-48/月",
    tags: ["免费增值", "英文", "Web"],
    features: [
      "游戏资产生成",
      "自定义模型训练",
      "实时画布编辑",
      "纹理和材质生成",
      "3D 纹理支持",
      "批量处理"
    ],
    useCases: [
      "游戏美术制作",
      "角色概念设计",
      "环境场景创作",
      "纹理材质生成",
      "快速原型设计"
    ],
    pros: [
      "游戏开发专业化",
      "免费额度充足",
      "模型训练功能",
      "界面友好"
    ],
    cons: [
      "高级功能需付费",
      "社区相对较小",
      "部分功能仍在测试"
    ],
    relatedSites: [
      { name: "Leonardo AI 官网", url: "https://leonardo.ai", type: "official", description: "官方网站" },
      { name: "Leonardo 学院", url: "https://leonardo.ai/academy", type: "tutorial", description: "官方教程和学习资源" },
      { name: "Discord 社区", url: "https://discord.gg/leonardo-ai", type: "community", description: "用户交流平台" },
      { name: "Pricing", url: "https://leonardo.ai/pricing", type: "pricing", description: "订阅价格详情" }
    ],
    targetUsers: ["游戏开发者", "概念艺术家", "3D 设计师", "独立开发者", "美术团队"],
    difficulty: "intermediate"
  },
  {
    id: 105,
    name: "Playground AI",
    description: "易用 AI 图像生成平台，快速创建和编辑 AI 艺术作品",
    highlights: "界面简洁易用，快速迭代，免费额度高",
    category: "图像设计",
    subCategory: "AI 绘画",
    logo: "🎪",
    url: "https://playgroundai.com",
    isVip: true,
    price: "免费 + $15-29/月",
    tags: ["免费增值", "英文", "Web"],
    features: [
      "直观用户界面",
      "快速图像生成",
      "图像编辑工具",
      "风格混合",
      "提示词建议",
      "社交分享"
    ],
    useCases: [
      "快速创意探索",
      "社交媒体图片",
      "个人艺术创作",
      "设计灵感",
      "内容配图"
    ],
    pros: [
      "上手非常简单",
      "每日免费生成多",
      "迭代速度快",
      "社区活跃"
    ],
    cons: [
      "高级功能有限",
      "分辨率限制",
      "定制选项较少"
    ],
    relatedSites: [
      { name: "Playground AI", url: "https://playgroundai.com", type: "official", description: "官方网站" },
      { name: "使用教程", url: "https://playgroundai.com/guide", type: "tutorial", description: "官方使用指南" },
      { name: "灵感画廊", url: "https://playgroundai.com/gallery", type: "community", description: "作品展示社区" },
      { name: "价格页面", url: "https://playgroundai.com/pricing", type: "pricing", description: "订阅方案" }
    ],
    targetUsers: ["初学者", "社交媒体运营", "内容创作者", "业余艺术家", "设计师"],
    difficulty: "beginner"
  },
  {
    id: 106,
    name: "SeaArt AI",
    description: "多功能 AI 艺术平台，集成多种模型和强大编辑功能",
    highlights: "模型选择多，编辑功能强，中文支持好",
    category: "图像设计",
    subCategory: "模型/资源",
    logo: "🌊",
    url: "https://seaart.ai",
    isVip: true,
    price: "免费 + 订阅制",
    tags: ["免费增值", "多语言", "Web"],
    features: [
      "多模型集成",
      "高级图像编辑",
      "提示词优化",
      "批量生成",
      "模型市场",
      "工作流保存"
    ],
    useCases: [
      "多样化艺术创作",
      "商业图像制作",
      "模型实验对比",
      "批量内容生产",
      "专业设计项目"
    ],
    pros: [
      "模型选择丰富",
      "编辑功能全面",
      "中文界面友好",
      "免费额度充足"
    ],
    cons: [
      "界面稍显复杂",
      "高级功能需付费",
      "生成速度波动"
    ],
    relatedSites: [
      { name: "SeaArt 官网", url: "https://seaart.ai", type: "official", description: "官方网站" },
      { name: "教程中心", url: "https://seaart.ai/tutorial", type: "tutorial", description: "使用教程" },
      { name: "模型库", url: "https://seaart.ai/models", type: "community", description: "模型资源" },
      { name: "用户社区", url: "https://discord.gg/seaart", type: "community", description: "Discord 社区" }
    ],
    targetUsers: ["AI 艺术家", "设计师", "内容创作者", "摄影师", "营销人员"],
    difficulty: "intermediate"
  },
  {
    id: 107,
    name: "Civitai",
    description: "Stable Diffusion 模型和资源分享平台，社区驱动的内容中心",
    highlights: "模型资源最全，社区活跃，免费分享",
    category: "图像设计",
    subCategory: "模型/资源",
    logo: "🏛️",
    url: "https://civitai.com",
    isVip: false,
    price: "免费",
    tags: ["免费", "社区", "Web"],
    features: [
      "海量模型资源",
      "用户作品展示",
      "提示词分享",
      "模型评测",
      "下载统计",
      "创作者支持"
    ],
    useCases: [
      "寻找专用模型",
      "学习提示词技巧",
      "分享个人作品",
      "发现创作灵感",
      "模型对比测试"
    ],
    pros: [
      "资源最丰富",
      "完全免费",
      "社区活跃度高",
      "更新频繁"
    ],
    cons: [
      "需要筛选质量",
      "内容审核有限",
      "下载速度不稳定"
    ],
    relatedSites: [
      { name: "Civitai 官网", url: "https://civitai.com", type: "official", description: "模型分享平台" },
      { name: "Hugging Face", url: "https://huggingface.co", type: "alternative", description: "另一模型托管平台" },
      { name: "SD 教程", url: "https://stable-diffusion-art.com", type: "tutorial", description: "Stable Diffusion 教程" },
      { name: "Reddit 社区", url: "https://reddit.com/r/StableDiffusion", type: "community", description: "讨论社区" }
    ],
    targetUsers: ["SD 用户", "模型开发者", "AI 艺术家", "研究人员", "爱好者"],
    difficulty: "intermediate"
  },

  // ==================== 图像编辑 ====================
  {
    id: 108,
    name: "美图 AI",
    description: "美图秀秀 AI 功能，人像美化、智能抠图、滤镜特效一站式处理",
    highlights: "人像优化专业，中文本地化好，操作简单",
    category: "图像设计",
    subCategory: "图像编辑",
    logo: "💄",
    url: "https://xiuxiu.meitu.com",
    isVip: true,
    price: "免费 + VIP 会员",
    tags: ["免费增值", "中文", "多平台"],
    features: [
      "AI 人像美容",
      "智能抠图换背景",
      "滤镜特效库",
      "批量处理",
      "视频美颜",
      "模板套用"
    ],
    useCases: [
      "人像照片美化",
      "社交媒体配图",
      "电商产品图",
      "证件照制作",
      "短视频封面"
    ],
    pros: [
      "人像处理专业",
      "中文界面友好",
      "模板丰富",
      "多端同步"
    ],
    cons: [
      "高级功能需 VIP",
      "部分功能水印",
      "创意性有限"
    ],
    relatedSites: [
      { name: "美图秀秀官网", url: "https://xiuxiu.meitu.com", type: "official", description: "官方网站" },
      { name: "美图 App", url: "https://www.meitu.com", type: "official", description: "母公司官网" },
      { name: "使用教程", url: "https://xiuxiu.meitu.com/tutorial", type: "tutorial", description: "功能教程" },
      { name: "模板中心", url: "https://xiuxiu.meitu.com/templates", type: "community", description: "模板资源" }
    ],
    targetUsers: ["普通用户", "美妆博主", "电商卖家", "摄影爱好者", "社交媒体用户"],
    difficulty: "beginner"
  },
  {
    id: 109,
    name: "Magic Studio",
    description: "AI 图像编辑套件，提供抠图、背景移除、图像增强等多种工具",
    highlights: "工具集合全面，API 可集成，批量处理",
    category: "图像设计",
    subCategory: "图像编辑",
    logo: "✨",
    url: "https://magicstudio.com",
    isVip: true,
    price: "免费 + $9-99/月",
    tags: ["免费增值", "英文", "Web/API"],
    features: [
      "AI 背景移除",
      "图像放大增强",
      "对象擦除",
      "批量处理 API",
      "图像生成",
      "视频工具"
    ],
    useCases: [
      "电商产品图处理",
      "营销素材制作",
      "社交媒体内容",
      "头像制作",
      "图像修复"
    ],
    pros: [
      "工具种类齐全",
      "API 集成方便",
      "处理速度快",
      "批量处理强"
    ],
    cons: [
      "免费版有限制",
      "高级功能较贵",
      "部分工具质量一般"
    ],
    relatedSites: [
      { name: "Magic Studio", url: "https://magicstudio.com", type: "official", description: "官方网站" },
      { name: "API 文档", url: "https://magicstudio.com/api", type: "official", description: "开发者文档" },
      { name: "Remove.bg", url: "https://remove.bg", type: "alternative", description: "专注抠图工具" },
      { name: "评测", url: "https://www.trustpilot.com/review/magicstudio.com", type: "review", description: "用户评价" }
    ],
    targetUsers: ["电商卖家", "营销团队", "设计师", "开发者", "内容创作者"],
    difficulty: "beginner"
  },
  {
    id: 110,
    name: "Remove.bg",
    description: "专注背景移除的 AI 工具，5 秒自动抠图，精准识别主体",
    highlights: "抠图速度快，识别精准，API 成熟",
    category: "图像设计",
    subCategory: "图像编辑",
    logo: "✂️",
    url: "https://remove.bg",
    isVip: true,
    price: "免费 + $9-99/月",
    tags: ["免费增值", "英文", "Web/API"],
    features: [
      "5 秒自动抠图",
      "精准主体识别",
      "高清下载",
      "批量处理",
      "API 集成",
      "背景替换"
    ],
    useCases: [
      "产品图抠图",
      "人像换背景",
      "证件照制作",
      "合成素材准备",
      "电商图片处理"
    ],
    pros: [
      "抠图速度极快",
      "识别准确率高",
      "API 稳定可靠",
      "使用简单"
    ],
    cons: [
      "功能单一",
      "高清需付费",
      "复杂场景偶有失误"
    ],
    relatedSites: [
      { name: "Remove.bg", url: "https://remove.bg", type: "official", description: "官方网站" },
      { name: "API 文档", url: "https://www.remove.bg/api", type: "official", description: "开发者 API" },
      { name: "Photoshop 插件", url: "https://www.remove.bg/integrations", type: "tutorial", description: "集成方案" },
      { name: "替代品对比", url: "https://www.slazzer.com", type: "alternative", description: "竞品 Slazzer" }
    ],
    targetUsers: ["电商卖家", "摄影师", "设计师", "营销人员", "普通用户"],
    difficulty: "beginner"
  },
  {
    id: 111,
    name: "Adobe Firefly",
    description: "Adobe 的创意 AI 模型，深度集成 Creative Cloud，商业安全",
    highlights: "Adobe 生态集成，商业授权安全，专业工作流",
    category: "图像设计",
    subCategory: "图像编辑",
    logo: "🔥",
    url: "https://firefly.adobe.com",
    isVip: true,
    price: "免费 + Creative Cloud 订阅",
    tags: ["免费增值", "多语言", "Web"],
    features: [
      "文本生成图像",
      "生成式填充",
      "文本效果生成",
      "矢量重着色",
      "3D 转图像",
      "商业安全授权"
    ],
    useCases: [
      "专业设计工作流",
      "商业图像创作",
      "品牌素材制作",
      "快速原型设计",
      "创意探索"
    ],
    pros: [
      "Adobe 生态无缝集成",
      "商业使用安全",
      "专业级输出质量",
      "持续更新"
    ],
    cons: [
      "完整功能需订阅",
      "学习曲线存在",
      "创意风格较保守"
    ],
    relatedSites: [
      { name: "Adobe Firefly", url: "https://firefly.adobe.com", type: "official", description: "官方网站" },
      { name: "Creative Cloud", url: "https://adobe.com/creativecloud", type: "official", description: "Adobe 创意云" },
      { name: "教程资源", url: "https://helpx.adobe.com/firefly", type: "tutorial", description: "官方教程" },
      { name: "价格详情", url: "https://adobe.com/creativecloud/pricing", type: "pricing", description: "订阅价格" }
    ],
    targetUsers: ["专业设计师", "创意团队", "企业用户", "摄影师", "视频编辑"],
    difficulty: "intermediate"
  },
  {
    id: 112,
    name: "稿定设计",
    description: "在线设计工具，海量模板，AI 辅助设计，适合快速出图",
    highlights: "模板海量，中文本地化，团队协作",
    category: "图像设计",
    subCategory: "图像编辑",
    logo: "📐",
    url: "https://gaoding.com",
    isVip: true,
    price: "免费 + 会员制",
    tags: ["免费增值", "中文", "Web"],
    features: [
      "海量设计模板",
      "AI 智能设计",
      "一键抠图",
      "批量套模板",
      "团队协作",
      "品牌管理"
    ],
    useCases: [
      "社交媒体配图",
      "电商海报设计",
      "公众号封面",
      "宣传单页",
      "企业物料"
    ],
    pros: [
      "模板数量庞大",
      "中文支持完善",
      "上手快速",
      "团队协作方便"
    ],
    cons: [
      "创意自由度有限",
      "高级模板需会员",
      "导出格式限制"
    ],
    relatedSites: [
      { name: "稿定设计官网", url: "https://gaoding.com", type: "official", description: "官方网站" },
      { name: "模板中心", url: "https://gaoding.com/templates", type: "community", description: "模板库" },
      { name: "设计教程", url: "https://gaoding.com/learn", type: "tutorial", description: "学习资源" },
      { name: "Canva", url: "https://canva.com", type: "alternative", description: "国际竞品" }
    ],
    targetUsers: ["新媒体运营", "电商从业者", "小微企业", "市场人员", "行政人员"],
    difficulty: "beginner"
  },

  // ==================== Logo/品牌设计 ====================
  {
    id: 113,
    name: "Looka",
    description: "AI Logo 设计平台，快速生成专业品牌标识和全套视觉方案",
    highlights: "Logo 设计专业，品牌套件完整，商业授权",
    category: "图像设计",
    subCategory: "Logo/品牌设计",
    logo: "🔍",
    url: "https://looka.com",
    isVip: true,
    price: "$20-96 一次性",
    tags: ["付费", "英文", "Web"],
    features: [
      "AI Logo 生成",
      "品牌配色方案",
      "名片设计",
      "社交媒体套件",
      "矢量文件导出",
      "商标检索"
    ],
    useCases: [
      "初创企业 Logo",
      "个人品牌标识",
      "产品品牌设计",
      "社交媒体头像",
      "商业名片"
    ],
    pros: [
      "设计质量专业",
      "品牌套件完整",
      "一次性付费",
      "商业授权清晰"
    ],
    cons: [
      "定制灵活性有限",
      "无法退款",
      "设计风格趋同"
    ],
    relatedSites: [
      { name: "Looka 官网", url: "https://looka.com", type: "official", description: "官方网站" },
      { name: "品牌指南", url: "https://looka.com/brand-kit", type: "official", description: "品牌套件介绍" },
      { name: "设计教程", url: "https://looka.com/learn", type: "tutorial", description: "品牌设计指南" },
      { name: "用户评价", url: "https://www.trustpilot.com/review/looka.com", type: "review", description: "真实用户反馈" }
    ],
    targetUsers: ["创业者", "小微企业", "自由职业者", "博主", "初创团队"],
    difficulty: "beginner"
  },
  {
    id: 114,
    name: "Brandmark",
    description: "AI 驱动的品牌设计工具，生成 Logo、配色、字体等完整品牌方案",
    highlights: "品牌方案完整，AI 智能推荐，实时预览",
    category: "图像设计",
    subCategory: "Logo/品牌设计",
    logo: "🏷️",
    url: "https://brandmark.io",
    isVip: true,
    price: "$25-65 一次性",
    tags: ["付费", "英文", "Web"],
    features: [
      "AI Logo 设计",
      "智能配色生成",
      "字体搭配推荐",
      "品牌应用场景",
      "社交媒体模板",
      "品牌指南文档"
    ],
    useCases: [
      "新品牌创建",
      "品牌升级",
      "产品包装设计",
      "网站品牌元素",
      "营销物料"
    ],
    pros: [
      "品牌方案系统化",
      "AI 推荐智能",
      "实时效果预览",
      "价格合理"
    ],
    cons: [
      "设计选项有限",
      "无法精细调整",
      "交付周期固定"
    ],
    relatedSites: [
      { name: "Brandmark", url: "https://brandmark.io", type: "official", description: "官方网站" },
      { name: "品牌案例", url: "https://brandmark.io/showcase", type: "community", description: "作品展示" },
      { name: "设计指南", url: "https://brandmark.io/guide", type: "tutorial", description: "使用指南" },
      { name: "Looka", url: "https://looka.com", type: "alternative", description: "竞品对比" }
    ],
    targetUsers: ["初创公司", "品牌设计师", "营销机构", "产品团队", "创业者"],
    difficulty: "beginner"
  },
  {
    id: 115,
    name: "Canva AI",
    description: "全能设计平台，AI 功能加持，海量模板支持多场景设计",
    highlights: "模板生态强大，AI 功能丰富，协作便捷",
    category: "图像设计",
    subCategory: "Logo/品牌设计",
    logo: "🎨",
    url: "https://canva.com",
    isVip: true,
    price: "免费 + $12.99-100/月",
    tags: ["免费增值", "多语言", "多平台"],
    features: [
      "Magic Design AI",
      "背景移除工具",
      "文本生成图像",
      "品牌工具箱",
      "团队协作",
      "多尺寸导出"
    ],
    useCases: [
      "社交媒体设计",
      "演示文稿",
      "营销物料",
      "品牌视觉",
      "视频内容"
    ],
    pros: [
      "模板数量巨大",
      "AI 功能实用",
      "协作功能强",
      "多平台支持"
    ],
    cons: [
      "高级功能需 Pro",
      "设计同质化",
      "免费版水印"
    ],
    relatedSites: [
      { name: "Canva 官网", url: "https://canva.com", type: "official", description: "官方网站" },
      { name: "设计学校", url: "https://www.canva.com/designschool", type: "tutorial", description: "学习资源" },
      { name: "模板库", url: "https://www.canva.com/templates", type: "community", description: "模板中心" },
      { name: "价格页面", url: "https://www.canva.com/pricing", type: "pricing", description: "订阅方案" }
    ],
    targetUsers: ["中小企业", "营销团队", "教育工作者", "内容创作者", "非设计师"],
    difficulty: "beginner"
  },

  // ==================== 图像增强 ====================
  {
    id: 116,
    name: "Upscale.media",
    description: "AI 图像放大工具，无损提升分辨率，修复模糊老照片",
    highlights: "放大质量高，批量处理，免费额度足",
    category: "图像设计",
    subCategory: "图像增强",
    logo: "🔍",
    url: "https://upscale.media",
    isVip: true,
    price: "免费 + $9-39/月",
    tags: ["免费增值", "英文", "Web"],
    features: [
      "AI 超分辨率",
      "批量图像放大",
      "细节增强",
      "噪点消除",
      "格式转换",
      "API 支持"
    ],
    useCases: [
      "老照片修复",
      "打印图片放大",
      "电商图片优化",
      "艺术印刷品",
      "社交媒体配图"
    ],
    pros: [
      "放大效果自然",
      "处理速度快",
      "免费额度充足",
      "批量处理方便"
    ],
    cons: [
      "超大图有限制",
      "极端放大失真",
      "高级功能需付费"
    ],
    relatedSites: [
      { name: "Upscale.media", url: "https://upscale.media", type: "official", description: "官方网站" },
      { name: "Topaz Gigapixel", url: "https://topazlabs.com/gigapixel-ai", type: "alternative", description: "专业竞品" },
      { name: "使用指南", url: "https://upscale.media/guide", type: "tutorial", description: "使用教程" },
      { name: "价格详情", url: "https://upscale.media/pricing", type: "pricing", description: "订阅价格" }
    ],
    targetUsers: ["摄影师", "设计师", "电商卖家", "档案管理员", "普通用户"],
    difficulty: "beginner"
  },
  {
    id: 117,
    name: "Palette.fm",
    description: "AI 照片上色工具，自动为黑白照片添加自然色彩",
    highlights: "上色自然准确，多风格选择，免费使用",
    category: "图像设计",
    subCategory: "图像增强",
    logo: "🎨",
    url: "https://palette.fm",
    isVip: false,
    price: "免费 + 付费下载",
    tags: ["免费增值", "英文", "Web"],
    features: [
      "AI 自动上色",
      "多种色彩风格",
      "高清下载",
      "批量处理",
      "API 集成",
      "自定义调整"
    ],
    useCases: [
      "老照片修复",
      "历史影像上色",
      "艺术创作",
      "家庭相册整理",
      "纪录片素材"
    ],
    pros: [
      "上色效果自然",
      "风格选择多样",
      "基本功能免费",
      "操作简单"
    ],
    cons: [
      "高清需付费",
      "复杂场景偏差",
      "无法精细控制"
    ],
    relatedSites: [
      { name: "Palette.fm", url: "https://palette.fm", type: "official", description: "官方网站" },
      { name: "DeOldify", url: "https://github.com/jantic/DeOldify", type: "alternative", description: "开源替代方案" },
      { name: "教程", url: "https://palette.fm/how-it-works", type: "tutorial", description: "工作原理" },
      { name: "示例画廊", url: "https://palette.fm/gallery", type: "community", description: "作品展示" }
    ],
    targetUsers: ["摄影师", "历史爱好者", "档案工作者", "艺术家", "家庭用户"],
    difficulty: "beginner"
  },

  // ==================== 设计工具 ====================
  {
    id: 118,
    name: "Uizard",
    description: "AI 驱动的 UI/UX 设计工具，草图转设计稿，快速原型",
    highlights: "草图识别强大，原型快速，协作方便",
    category: "图像设计",
    subCategory: "设计工具",
    logo: "🧙",
    url: "https://uizard.io",
    isVip: true,
    price: "免费 + $12-39/月",
    tags: ["免费增值", "英文", "Web"],
    features: [
      "草图转设计稿",
      "AI 原型生成",
      "组件库",
      "团队协作",
      "设计系统",
      "代码导出"
    ],
    useCases: [
      "App 界面设计",
      "网站原型",
      "快速迭代",
      "设计评审",
      "MVP 验证"
    ],
    pros: [
      "草图识别准确",
      "原型速度快",
      "协作功能好",
      "学习成本低"
    ],
    cons: [
      "设计深度有限",
      "高级功能需付费",
      "导出代码简单"
    ],
    relatedSites: [
      { name: "Uizard 官网", url: "https://uizard.io", type: "official", description: "官方网站" },
      { name: "学习中心", url: "https://uizard.io/learn", type: "tutorial", description: "教程资源" },
      { name: "Figma", url: "https://figma.com", type: "alternative", description: "专业设计工具" },
      { name: "价格页面", url: "https://uizard.io/pricing", type: "pricing", description: "订阅方案" }
    ],
    targetUsers: ["产品经理", "创业者", "UI 设计师", "开发团队", "初创公司"],
    difficulty: "beginner"
  },
  {
    id: 119,
    name: "Khroma",
    description: "AI 配色工具，学习用户喜好，生成个性化色彩方案",
    highlights: "个性化学习，配色专业，灵感丰富",
    category: "图像设计",
    subCategory: "设计工具",
    logo: "🌈",
    url: "https://khroma.co",
    isVip: false,
    price: "免费",
    tags: ["免费", "英文", "Web"],
    features: [
      "AI 色彩学习",
      "个性化推荐",
      "配色方案生成",
      "色彩趋势",
      "浏览器扩展",
      "灵感画廊"
    ],
    useCases: [
      "品牌配色设计",
      "网站色彩方案",
      "设计项目配色",
      "色彩灵感获取",
      "设计学习"
    ],
    pros: [
      "完全免费",
      "个性化推荐",
      "配色专业",
      "灵感丰富"
    ],
    cons: [
      "功能相对单一",
      "需要训练时间",
      "导出选项有限"
    ],
    relatedSites: [
      { name: "Khroma", url: "https://khroma.co", type: "official", description: "官方网站" },
      { name: "Coolors", url: "https://coolors.co", type: "alternative", description: "配色工具竞品" },
      { name: "Adobe Color", url: "https://color.adobe.com", type: "alternative", description: "Adobe 配色工具" },
      { name: "色彩理论", url: "https://www.canva.com/colors/color-wheel", type: "tutorial", description: "色彩学习资源" }
    ],
    targetUsers: ["设计师", "开发者", "品牌策划", "艺术家", "学生"],
    difficulty: "beginner"
  },

  // ==================== 创意艺术 ====================
  {
    id: 120,
    name: "NightCafe",
    description: "AI 艺术创作平台，多种算法支持，社区活跃，每日挑战",
    highlights: "算法选择多，社区活动丰富，免费额度高",
    category: "图像设计",
    subCategory: "创意艺术",
    logo: "🌙",
    url: "https://nightcafe.studio",
    isVip: true,
    price: "免费 + $5.99-79.99/月",
    tags: ["免费增值", "英文", "Web"],
    features: [
      "多算法支持",
      "每日创作挑战",
      "社区画廊",
      " prints 打印",
      "NFT 铸造",
      "风格迁移"
    ],
    useCases: [
      "艺术创作",
      "装饰画设计",
      "社交媒体内容",
      "NFT 艺术品",
      "创意实验"
    ],
    pros: [
      "算法选择丰富",
      "社区氛围好",
      "免费额度充足",
      "实体打印服务"
    ],
    cons: [
      "高级算法需付费",
      "生成速度波动",
      "界面稍显复杂"
    ],
    relatedSites: [
      { name: "NightCafe", url: "https://nightcafe.studio", type: "official", description: "官方网站" },
      { name: "社区画廊", url: "https://nightcafe.studio/gallery", type: "community", description: "作品展示" },
      { name: "创作挑战", url: "https://nightcafe.studio/challenges", type: "community", description: "每日挑战" },
      { name: "价格详情", url: "https://nightcafe.studio/pricing", type: "pricing", description: "订阅方案" }
    ],
    targetUsers: ["数字艺术家", "艺术爱好者", "NFT 创作者", "装饰设计师", "创意工作者"],
    difficulty: "intermediate"
  },
  {
    id: 121,
    name: "Gencraft",
    description: "AI 图像和视频生成平台，专注高质量艺术创作和商业用途",
    highlights: "图像视频双支持，商业授权清晰，质量优秀",
    category: "图像设计",
    subCategory: "创意艺术",
    logo: "🎬",
    url: "https://gencraft.com",
    isVip: true,
    price: "免费 + $29.99-99.99/月",
    tags: ["免费增值", "英文", "Web"],
    features: [
      "图像生成",
      "视频生成",
      "高分辨率输出",
      "商业授权",
      "风格库",
      "编辑工具"
    ],
    useCases: [
      "商业图像创作",
      "社交媒体视频",
      "广告素材",
      "艺术作品集",
      "品牌内容"
    ],
    pros: [
      "图像视频一体",
      "输出质量高",
      "商业授权明确",
      "风格丰富"
    ],
    cons: [
      "价格较高",
      "视频功能有限",
      "学习曲线存在"
    ],
    relatedSites: [
      { name: "Gencraft", url: "https://gencraft.com", type: "official", description: "官方网站" },
      { name: "作品展示", url: "https://gencraft.com/showcase", type: "community", description: "作品画廊" },
      { name: "使用指南", url: "https://gencraft.com/guide", type: "tutorial", description: "使用教程" },
      { name: "价格页面", url: "https://gencraft.com/pricing", type: "pricing", description: "订阅价格" }
    ],
    targetUsers: ["内容创作者", "营销机构", "视频制作人", "艺术家", "品牌方"],
    difficulty: "intermediate"
  },
  {
    id: 122,
    name: "Pollinations",
    description: "开源 AI 图像生成，免费无限制，API 友好，快速生成",
    highlights: "完全免费开源，无使用限制，API 简单",
    category: "图像设计",
    subCategory: "创意艺术",
    logo: "🌸",
    url: "https://pollinations.ai",
    isVip: false,
    price: "免费",
    tags: ["免费", "开源", "API"],
    features: [
      "完全免费使用",
      "无次数限制",
      "简单 API",
      "快速生成",
      "多种模型",
      "开源透明"
    ],
    useCases: [
      "快速原型设计",
      "开发测试",
      "个人创作",
      "教育项目",
      "实验性创作"
    ],
    pros: [
      "完全免费",
      "无使用限制",
      "API 简单易用",
      "开源透明"
    ],
    cons: [
      "质量波动较大",
      "功能相对基础",
      "无官方支持"
    ],
    relatedSites: [
      { name: "Pollinations", url: "https://pollinations.ai", type: "official", description: "官方网站" },
      { name: "GitHub", url: "https://github.com/pollinations", type: "official", description: "开源项目" },
      { name: "API 文档", url: "https://pollinations.ai/api", type: "tutorial", description: "API 使用指南" },
      { name: "Discord", url: "https://discord.gg/pollinations", type: "community", description: "社区交流" }
    ],
    targetUsers: ["开发者", "学生", "研究者", "业余爱好者", "初创团队"],
    difficulty: "beginner"
  },
  {
    id: 123,
    name: "Lucidpic",
    description: "AI 图像生成工具，专注创意设计和艺术探索",
    highlights: "创意风格多样，操作简单，快速出图",
    category: "图像设计",
    subCategory: "创意艺术",
    logo: "💡",
    url: "https://lucidpic.com",
    isVip: true,
    price: "订阅制",
    tags: ["付费", "英文", "Web"],
    features: [
      "创意图像生成",
      "风格模板",
      "批量生成",
      "图像编辑",
      "高分辨率",
      "商业授权"
    ],
    useCases: [
      "创意设计",
      "艺术探索",
      "营销素材",
      "社交媒体",
      "个人项目"
    ],
    pros: [
      "风格创意多样",
      "操作简便",
      "生成速度快",
      "商业友好"
    ],
    cons: [
      "知名度较低",
      "社区资源少",
      "价格信息不透明"
    ],
    relatedSites: [
      { name: "Lucidpic", url: "https://lucidpic.com", type: "official", description: "官方网站" },
      { name: "作品示例", url: "https://lucidpic.com/gallery", type: "community", description: "作品展示" },
      { name: "使用指南", url: "https://lucidpic.com/guide", type: "tutorial", description: "使用教程" },
      { name: "Midjourney", url: "https://midjourney.com", type: "alternative", description: "主流替代方案" }
    ],
    targetUsers: ["创意设计师", "营销人员", "艺术家", "内容创作者", "自由职业者"],
    difficulty: "beginner"
  },

  // ==================== 其他专业工具 ====================
  {
    id: 124,
    name: "Profile Picture AI",
    description: "专业头像生成工具，创建职业照、社交媒体头像等个人形象",
    highlights: "头像专业化，多风格选择，隐私安全",
    category: "图像设计",
    subCategory: "图像编辑",
    logo: "👤",
    url: "https://pfpmaker.com",
    isVip: true,
    price: "免费 + $9.90-49.90",
    tags: ["免费增值", "英文", "Web"],
    features: [
      "AI 头像生成",
      "背景移除替换",
      "多场景模板",
      "职业照风格",
      "批量生成",
      "高清导出"
    ],
    useCases: [
      "LinkedIn 头像",
      "社交媒体头像",
      "简历照片",
      "团队形象照",
      "个人品牌"
    ],
    pros: [
      "头像效果专业",
      "模板场景丰富",
      "基本功能免费",
      "隐私保护"
    ],
    cons: [
      "高清需付费",
      "风格选择有限",
      "无法精细调整"
    ],
    relatedSites: [
      { name: "PFPMaker", url: "https://pfpmaker.com", type: "official", description: "官方网站" },
      { name: "头像模板", url: "https://pfpmaker.com/templates", type: "community", description: "模板库" },
      { name: "使用教程", url: "https://pfpmaker.com/how-to", type: "tutorial", description: "使用指南" },
      { name: "Headshot Pro", url: "https://headshotpro.com", type: "alternative", description: "专业竞品" }
    ],
    targetUsers: ["职场人士", "求职者", "自由职业者", "创业者", "社交媒体用户"],
    difficulty: "beginner"
  },
  {
    id: 125,
    name: "Ideogram",
    description: "擅长文字渲染的 AI 图像生成工具，海报、Logo 文字效果出色",
    highlights: "文字渲染最强，海报设计优，创意独特",
    category: "图像设计",
    subCategory: "AI 绘画",
    logo: "💬",
    url: "https://ideogram.ai",
    isVip: true,
    price: "免费 + $8-24/月",
    tags: ["免费增值", "英文", "Web"],
    features: [
      "精准文字渲染",
      "海报设计优化",
      "Logo 文字效果",
      "多种艺术风格",
      "图像放大",
      "提示词优化"
    ],
    useCases: [
      "海报设计",
      "Logo 创作",
      "T 恤图案",
      "社交媒体配图",
      "品牌视觉"
    ],
    pros: [
      "文字渲染最佳",
      "海报效果出色",
      "免费额度充足",
      "创意风格多"
    ],
    cons: [
      "人像质量一般",
      "高级功能需付费",
      "社区相对较小"
    ],
    relatedSites: [
      { name: "Ideogram", url: "https://ideogram.ai", type: "official", description: "官方网站" },
      { name: "作品画廊", url: "https://ideogram.ai/gallery", type: "community", description: "作品展示" },
      { name: "使用指南", url: "https://ideogram.ai/guide", type: "tutorial", description: "使用教程" },
      { name: "价格详情", url: "https://ideogram.ai/pricing", type: "pricing", description: "订阅方案" }
    ],
    targetUsers: ["平面设计师", "品牌设计师", "海报设计师", "创意工作者", "营销人员"],
    difficulty: "intermediate"
  }
];
