// 文本生成分类 - 增强版工具数据
// 包含详细描述、功能特点、使用场景、优缺点、相关网站等
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

export const TEXT_GENERATION_TOOLS: EnhancedTool[] = [
  // ==================== 对话助手 ====================
  {
    id: 1,
    name: "ChatGPT",
    description: "OpenAI 的智能对话 AI，支持多轮对话、代码生成、文案创作",
    highlights: "全球最流行的 AI 助手，功能全面强大",
    category: "文本生成",
    subCategory: "对话助手",
    logo: "🤖",
    url: "https://chatgpt.com",
    isVip: false,
    price: "免费 + Plus $20/月",
    tags: ["免费增值", "英文", "Web"],
    features: ["多轮对话理解", "代码生成与调试", "文案创作", "多语言翻译", "逻辑推理", "知识问答"],
    useCases: ["日常问答助手", "编程学习辅助", "内容创作", "语言学习", "研究资料整理"],
    pros: ["对话流畅自然", "功能全面强大", "免费版本功能丰富", "持续更新改进"],
    cons: ["高级功能需付费", "中文理解偶尔偏差", "无法访问实时信息"],
    relatedSites: [
      { name: "OpenAI 官网", url: "https://openai.com", type: "official", description: "OpenAI 官方网站，了解最新产品动态" },
      { name: "ChatGPT 学习社区", url: "https://reddit.com/r/ChatGPT", type: "community", description: "Reddit 用户讨论和分享使用技巧" },
      { name: "Awesome ChatGPT Prompts", url: "https://prompts.chat", type: "tutorial", description: "精选提示词库，提升使用效率" }
    ],
    targetUsers: ["学生", "开发者", "内容创作者", "研究人员", "普通用户"],
    difficulty: "beginner"
  },
  {
    id: 2,
    name: "Claude",
    description: "Anthropic 的安全 AI 助手，擅长长文本处理和分析",
    highlights: "超长上下文窗口，输出安全可靠",
    category: "文本生成",
    subCategory: "对话助手",
    logo: "📝",
    url: "https://claude.ai",
    isVip: true,
    price: "$20/月",
    tags: ["付费", "英文", "Web"],
    features: ["超长上下文处理", "文档深度分析", "安全可靠的输出", "多轮对话", "代码生成", "多模态理解"],
    useCases: ["长文档分析总结", "企业内容审核", "学术研究辅助", "法律文件处理", "技术文档编写"],
    pros: ["上下文窗口超大", "输出安全可靠", "分析能力强", "写作质量高"],
    cons: ["需要付费使用", "中文支持有限", "访问需要等待名单"],
    relatedSites: [
      { name: "Anthropic 官网", url: "https://anthropic.com", type: "official", description: "Anthropic 公司官方网站" },
      { name: "Claude 文档中心", url: "https://docs.anthropic.com", type: "tutorial", description: "官方 API 文档和使用指南" },
      { name: "Claude 对比评测", url: "https://www.pcms.ai/claude-review", type: "review", description: "第三方深度评测和使用体验" }
    ],
    targetUsers: ["企业用户", "研究人员", "法律从业者", "技术文档工程师", "内容审核员"],
    difficulty: "intermediate"
  },
  {
    id: 7,
    name: "文心一言",
    description: "百度大语言模型，中文对话 AI 助手",
    highlights: "完全免费，中文理解和本土化最强",
    category: "文本生成",
    subCategory: "对话助手",
    logo: "🇨🇳",
    url: "https://yiyan.baidu.com",
    isVip: false,
    price: "免费",
    tags: ["免费", "中文", "Web"],
    features: ["中文深度优化", "多轮对话", "文案创作", "逻辑推理", "多模态理解", "代码生成"],
    useCases: ["中文内容创作", "学习辅导", "工作助手", "创意写作", "信息查询"],
    pros: ["完全免费", "中文理解好", "本土化强", "多模态能力"],
    cons: ["国际知识有限", "英文能力一般", "偶尔响应慢"],
    relatedSites: [
      { name: "文心一言官网", url: "https://yiyan.baidu.com", type: "official", description: "百度文心一言官方网站" },
      { name: "飞桨 AI 社区", url: "https://ai.baidu.com/forum", type: "community", description: "百度 AI 开发者社区" },
      { name: "文心一言 API 文档", url: "https://cloud.baidu.com/doc/WENXINWORKSHOP", type: "tutorial", description: "开发者 API 接入文档" }
    ],
    targetUsers: ["中文用户", "学生", "内容创作者", "企业办公人员", "开发者"],
    difficulty: "beginner"
  },
  {
    id: 8,
    name: "通义千问",
    description: "阿里大语言模型，多模态理解与生成",
    highlights: "多模态能力强，阿里生态集成",
    category: "文本生成",
    subCategory: "对话助手",
    logo: "🤖",
    url: "https://tongyi.aliyun.com",
    isVip: false,
    price: "免费",
    tags: ["免费", "中文", "Web"],
    features: ["多模态理解", "超长上下文", "代码生成", "文档分析", "多语言翻译", "数学推理"],
    useCases: ["文档分析总结", "编程辅助", "数据分析", "学术研究", "企业应用"],
    pros: ["完全免费", "多模态能力强", "中文优化好", "阿里生态集成"],
    cons: ["国际认知有限", "响应速度波动", "高级功能需 API"],
    relatedSites: [
      { name: "通义千问官网", url: "https://tongyi.aliyun.com", type: "official", description: "阿里云通义千问官方网站" },
      { name: "魔搭 ModelScope", url: "https://modelscope.cn", type: "alternative", description: "阿里达摩院模型开放平台" },
      { name: "通义 API 文档", url: "https://help.aliyun.com/product/42154.html", type: "tutorial", description: "阿里云 API 使用文档" }
    ],
    targetUsers: ["开发者", "数据分析师", "研究人员", "企业用户", "学生"],
    difficulty: "intermediate"
  },
  {
    id: 9,
    name: "Kimi",
    description: "月之暗面大模型，支持超长上下文理解",
    highlights: "上下文窗口超大，长文档处理专家",
    category: "文本生成",
    subCategory: "对话助手",
    logo: "🌙",
    url: "https://kimi.moonshot.cn",
    isVip: false,
    price: "免费",
    tags: ["免费", "中文", "Web"],
    features: ["超长上下文", "文档深度分析", "信息提取", "多轮对话", "文件上传", "精准总结"],
    useCases: ["长文档阅读", "论文分析", "书籍摘要", "合同审查", "研究报告"],
    pros: ["上下文窗口超大", "完全免费", "中文理解优秀", "文件支持好"],
    cons: ["功能相对单一", "创意写作一般", "多模态能力有限"],
    relatedSites: [
      { name: "Kimi 智能助手", url: "https://kimi.moonshot.cn", type: "official", description: "月之暗面 Kimi 官方网站" },
      { name: "月之暗面官网", url: "https://moonshot.cn", type: "official", description: "月之暗面公司官网" },
      { name: "Kimi 使用技巧", url: "https://zhuanlan.zhihu.com/kimi-tips", type: "tutorial", description: "知乎 Kimi 使用技巧合集" }
    ],
    targetUsers: ["研究人员", "学生", "法律从业者", "金融分析师", "内容创作者"],
    difficulty: "beginner"
  },
  {
    id: 10,
    name: "智谱清言",
    description: "智谱 AI 大模型，清华技术背景",
    highlights: "学术背景强，API 开放",
    category: "文本生成",
    subCategory: "对话助手",
    logo: "🧠",
    url: "https://chatglm.cn",
    isVip: false,
    price: "免费",
    tags: ["免费", "中文", "Web"],
    features: ["GLM 架构", "多轮对话", "代码生成", "逻辑推理", "知识问答", "API 支持"],
    useCases: ["学习辅导", "编程辅助", "知识查询", "内容创作", "研究辅助"],
    pros: ["完全免费", "学术背景强", "中文优化好", "API 开放"],
    cons: ["创意能力一般", "多模态有限", "响应速度波动"],
    relatedSites: [
      { name: "智谱 AI 官网", url: "https://open.bigmodel.cn", type: "official", description: "智谱 AI 开放平台" },
      { name: "GLM 模型论文", url: "https://github.com/THUDM/ChatGLM", type: "tutorial", description: "清华大学 GLM 模型开源项目" },
      { name: "智谱开发者社区", url: "https://discuss.bigmodel.cn", type: "community", description: "智谱 AI 开发者论坛" }
    ],
    targetUsers: ["学生", "研究人员", "开发者", "教师", "知识工作者"],
    difficulty: "beginner"
  },
  {
    id: 11,
    name: "讯飞星火",
    description: "科大讯飞大模型，中文语音交互强",
    highlights: "语音能力强，垂直领域专业",
    category: "文本生成",
    subCategory: "对话助手",
    logo: "🔥",
    url: "https://xinghuo.xfyun.cn",
    isVip: false,
    price: "免费",
    tags: ["免费", "中文", "Web"],
    features: ["语音交互", "中文深度优化", "多轮对话", "垂直领域知识", "多模态理解", "教育医疗专业"],
    useCases: ["语音助手", "学习辅导", "医疗咨询", "教育辅助", "内容创作"],
    pros: ["语音能力强", "完全免费", "中文理解好", "垂直领域专业"],
    cons: ["国际知识有限", "创意写作一般", "界面较复杂"],
    relatedSites: [
      { name: "讯飞星火官网", url: "https://xinghuo.xfyun.cn", type: "official", description: "科大讯飞星火官方网站" },
      { name: "讯飞开放平台", url: "https://www.xfyun.cn", type: "official", description: "讯飞 AI 开放平台" },
      { name: "星火 API 文档", url: "https://www.xfyun.cn/doc/spark", type: "tutorial", description: "星火大模型 API 接入文档" }
    ],
    targetUsers: ["教育工作者", "医疗从业者", "学生", "客服人员", "内容创作者"],
    difficulty: "beginner"
  },

  // ==================== 营销文案 ====================
  {
    id: 3,
    name: "Jasper",
    description: "AI 营销文案生成器，专为品牌和内容营销打造",
    highlights: "模板丰富专业，品牌一致性好",
    category: "文本生成",
    subCategory: "营销文案",
    logo: "✍️",
    url: "https://jasper.ai",
    isVip: true,
    price: "$49-125/月",
    tags: ["付费", "英文", "Web"],
    features: ["50+ 文案模板", "品牌语调学习", "SEO 优化集成", "多语言支持", "团队协作", "工作流自动化"],
    useCases: ["广告文案创作", "社交媒体运营", "博客文章撰写", "产品描述生成", "邮件营销"],
    pros: ["模板丰富专业", "品牌一致性好", "SEO 友好", "团队协作方便"],
    cons: ["价格较高", "主要面向英文", "学习曲线存在"],
    relatedSites: [
      { name: "Jasper 官网", url: "https://jasper.ai", type: "official", description: "Jasper AI 官方网站" },
      { name: "Jasper 大学", url: "https://university.jasper.ai", type: "tutorial", description: "官方教程和使用指南" },
      { name: "Jasper 定价", url: "https://jasper.ai/pricing", type: "pricing", description: "详细价格方案和对比" }
    ],
    targetUsers: ["营销团队", "内容创作者", "电商运营", "社交媒体经理", "中小企业主"],
    difficulty: "intermediate"
  },
  {
    id: 5,
    name: "Copy.ai",
    description: "AI 文案生成工具，快速创建营销内容",
    highlights: "上手简单，免费额度充足",
    category: "文本生成",
    subCategory: "营销文案",
    logo: "✨",
    url: "https://copy.ai",
    isVip: true,
    price: "免费 + $49/月",
    tags: ["免费增值", "英文", "Web"],
    features: ["90+ 文案工具", "工作流自动化", "Infobase 品牌库", "团队协作", "多语言支持", "模板市场"],
    useCases: ["社交媒体文案", "产品描述", "广告创意", "邮件主题行", "品牌故事"],
    pros: ["上手简单", "免费额度充足", "模板实用", "团队协作好"],
    cons: ["长文能力一般", "创意性有限", "中文支持弱"],
    relatedSites: [
      { name: "Copy.ai 官网", url: "https://copy.ai", type: "official", description: "Copy.ai 官方网站" },
      { name: "Copy.ai 博客", url: "https://copy.ai/blog", type: "tutorial", description: "营销文案写作技巧博客" },
      { name: "Copy.ai 评测", url: "https://www.pcms.ai/copyai-review", type: "review", description: "第三方深度评测报告" }
    ],
    targetUsers: ["营销人员", "社交媒体运营", "电商卖家", "初创企业", "自由职业者"],
    difficulty: "beginner"
  },
  {
    id: 4,
    name: "Writesonic",
    description: "AI 写作平台，支持博客、广告、邮件等多种内容",
    highlights: "SEO 功能强大，多语言支持好",
    category: "文本生成",
    subCategory: "营销文案",
    logo: "📄",
    url: "https://writesonic.com",
    isVip: true,
    price: "免费 + $19-49/月",
    tags: ["免费增值", "英文", "Web"],
    features: ["100+ 写作模板", "SEO 长文生成", "实时网络搜索", "25 种语言支持", "图片生成", "API 访问"],
    useCases: ["博客文章创作", "广告文案编写", "产品描述", "社交媒体内容", "着陆页文案"],
    pros: ["免费版本可用", "SEO 功能强大", "多语言支持好", "生成速度快"],
    cons: ["长文质量波动", "高级功能需付费", "需要人工校对"],
    relatedSites: [
      { name: "Writesonic 官网", url: "https://writesonic.com", type: "official", description: "Writesonic 官方网站" },
      { name: "Writesonic 大学", url: "https://writesonic.com/university", type: "tutorial", description: "AI 写作教程和资源" },
      { name: "Writesonic 定价", url: "https://writesonic.com/pricing", type: "pricing", description: "价格方案对比" }
    ],
    targetUsers: ["内容营销人员", "SEO 专家", "博主", "电商运营", "数字营销机构"],
    difficulty: "beginner"
  },
  {
    id: 6,
    name: "Rytr",
    description: "AI 写作助手，支持多种语言和语调",
    highlights: "价格实惠，浏览器扩展方便",
    category: "文本生成",
    subCategory: "营销文案",
    logo: "🖊️",
    url: "https://rytr.me",
    isVip: true,
    price: "免费 + $9-29/月",
    tags: ["免费增值", "多语言", "Web"],
    features: ["30+ 语言支持", "20+ 语调风格", "抄袭检查", "浏览器扩展", "图片生成", "格式转换"],
    useCases: ["博客写作", "邮件撰写", "广告文案", "简历优化", "社交媒体"],
    pros: ["价格实惠", "多语言支持好", "浏览器扩展方便", "界面简洁"],
    cons: ["功能相对基础", "长文质量一般", "高级功能有限"],
    relatedSites: [
      { name: "Rytr 官网", url: "https://rytr.me", type: "official", description: "Rytr 官方网站" },
      { name: "Rytr 用例库", url: "https://rytr.me/use-cases", type: "tutorial", description: "各种使用场景示例" },
      { name: "Rytr Chrome 扩展", url: "https://chrome.google.com/webstore/rytr", type: "alternative", description: "Chrome 浏览器扩展" }
    ],
    targetUsers: ["自由职业者", "小企业主", "学生", "内容创作者", "营销新手"],
    difficulty: "beginner"
  },
  {
    id: 18,
    name: "Anyword",
    description: "AI 营销文案优化，预测转化率",
    highlights: "数据驱动决策，转化预测独特",
    category: "文本生成",
    subCategory: "营销文案",
    logo: "📊",
    url: "https://anyword.com",
    isVip: true,
    price: "$49-99/月",
    tags: ["付费", "英文", "Web"],
    features: ["转化率预测", "数据驱动", "多模板支持", "品牌声音", "A/B 测试", "性能分析"],
    useCases: ["广告文案", "社交媒体", "邮件营销", "着陆页优化", "电商描述"],
    pros: ["数据驱动决策", "转化预测独特", "专业模板", "分析详细"],
    cons: ["价格较高", "主要面向英文", "需要数据积累"],
    relatedSites: [
      { name: "Anyword 官网", url: "https://anyword.com", type: "official", description: "Anyword 官方网站" },
      { name: "Anyword 博客", url: "https://anyword.com/blog", type: "tutorial", description: "营销文案优化技巧" },
      { name: "Anyword 案例研究", url: "https://anyword.com/case-studies", type: "review", description: "客户成功案例" }
    ],
    targetUsers: ["营销团队", "增长黑客", "电商运营", "广告优化师", "数据分析师"],
    difficulty: "advanced"
  },

  // ==================== 创意写作 ====================
  {
    id: 16,
    name: "Sudowrite",
    description: "AI 创意写作助手，小说和故事创作",
    highlights: "专为创意写作，功能独特实用",
    category: "文本生成",
    subCategory: "创意写作",
    logo: "📖",
    url: "https://sudowrite.com",
    isVip: true,
    price: "$19-29/月",
    tags: ["付费", "英文", "Web"],
    features: ["故事引擎", "角色开发", "情节构思", "描写增强", "上下文理解", "创意头脑风暴"],
    useCases: ["小说创作", "短篇故事", "剧本写作", "创意写作", "写作障碍突破"],
    pros: ["专为创意写作", "功能独特实用", "理解上下文", "激发创意"],
    cons: ["仅支持英文", "价格较高", "学习曲线存在"],
    relatedSites: [
      { name: "Sudowrite 官网", url: "https://sudowrite.com", type: "official", description: "Sudowrite 官方网站" },
      { name: "Sudowrite 教程", url: "https://help.sudowrite.com", type: "tutorial", description: "使用指南和技巧" },
      { name: "创意写作社区", url: "https://reddit.com/r/writing", type: "community", description: "Reddit 写作爱好者社区" }
    ],
    targetUsers: ["小说作家", "编剧", "创意写作者", "内容创作者", "写作爱好者"],
    difficulty: "intermediate"
  },
  {
    id: 17,
    name: "NovelAI",
    description: "AI 辅助写作，customizable 故事生成",
    highlights: "高度可定制，隐私保护好",
    category: "文本生成",
    subCategory: "创意写作",
    logo: "🌟",
    url: "https://novelai.net",
    isVip: true,
    price: "$10-25/月",
    tags: ["付费", "英文", "Web"],
    features: ["故事生成", "自定义模型", "风格学习", "图像生成", "隐私保护", "无限生成"],
    useCases: ["小说创作", "角色扮演", "故事接龙", "创意写作", "同人创作"],
    pros: ["高度可定制", "隐私保护好", "无内容限制", "图像生成"],
    cons: ["仅支持英文", "需要调教", "界面较复杂"],
    relatedSites: [
      { name: "NovelAI 官网", url: "https://novelai.net", type: "official", description: "NovelAI 官方网站" },
      { name: "NovelAI 维基", url: "https://wiki.novelai.net", type: "tutorial", description: "社区维护的使用维基" },
      { name: "NovelAI Discord", url: "https://discord.gg/novelai", type: "community", description: "官方 Discord 社区" }
    ],
    targetUsers: ["小说作家", "角色扮演爱好者", "同人创作者", "创意写作者", "故事爱好者"],
    difficulty: "advanced"
  },

  // ==================== 写作辅助 ====================
  {
    id: 15,
    name: "Grammarly",
    description: "AI 语法检查和写作建议工具",
    highlights: "检查准确全面，多平台支持",
    category: "文本生成",
    subCategory: "写作辅助",
    logo: "✅",
    url: "https://grammarly.com",
    isVip: true,
    price: "免费 + $12-29/月",
    tags: ["免费增值", "英文", "Web/插件"],
    features: ["语法检查", "拼写纠正", "风格建议", "语气分析", "抄袭检测", "多平台支持"],
    useCases: ["日常写作", "学术论文", "商务邮件", "内容创作", "英语学习"],
    pros: ["检查准确全面", "多平台支持", "免费版本强大", "建议清晰实用"],
    cons: ["高级功能较贵", "主要面向英文", "偶尔误判"],
    relatedSites: [
      { name: "Grammarly 官网", url: "https://grammarly.com", type: "official", description: "Grammarly 官方网站" },
      { name: "Grammarly 博客", url: "https://grammarly.com/blog", type: "tutorial", description: "写作技巧和语法规则" },
      { name: "Grammarly 商务版", url: "https://grammarly.com/business", type: "pricing", description: "企业版功能和定价" }
    ],
    targetUsers: ["学生", "职场人士", "内容创作者", "非英语母语者", "学术研究者"],
    difficulty: "beginner"
  },
  {
    id: 14,
    name: "Quillbot",
    description: "AI 改写和摘要工具，提升写作效率",
    highlights: "改写质量高，模式多样",
    category: "文本生成",
    subCategory: "写作辅助",
    logo: "🦜",
    url: "https://quillbot.com",
    isVip: true,
    price: "免费 + $19.95/月",
    tags: ["免费增值", "英文", "Web"],
    features: ["智能改写", "多种模式", "语法检查", "抄袭检测", "摘要生成", "浏览器扩展"],
    useCases: ["论文改写", "内容优化", "避免重复", "提升可读性", "学术写作"],
    pros: ["改写质量高", "模式多样", "免费版本实用", "扩展方便"],
    cons: ["主要面向英文", "高级功能需付费", "过度依赖有风险"],
    relatedSites: [
      { name: "Quillbot 官网", url: "https://quillbot.com", type: "official", description: "Quillbot 官方网站" },
      { name: "Quillbot 语法检查器", url: "https://quillbot.com/grammar-check", type: "alternative", description: "免费语法检查工具" },
      { name: "Quillbot Chrome 扩展", url: "https://chrome.google.com/webstore/quillbot", type: "alternative", description: "Chrome 浏览器扩展" }
    ],
    targetUsers: ["学生", "研究人员", "内容创作者", "学术写作者", "编辑"],
    difficulty: "beginner"
  },
  {
    id: 13,
    name: "DeepL Write",
    description: "AI 写作助手，智能润色和语法修正",
    highlights: "润色质量高，多语言支持好",
    category: "文本生成",
    subCategory: "写作辅助",
    logo: "🌐",
    url: "https://deepl.com/write",
    isVip: true,
    price: "免费 + $9.99/月",
    tags: ["付费", "多语言", "Web"],
    features: ["智能润色", "语法修正", "表达优化", "多语言支持", "风格调整", "翻译集成"],
    useCases: ["学术写作", "商务邮件", "内容润色", "非母语写作", "翻译后优化"],
    pros: ["润色质量高", "多语言支持好", "免费版本可用", "界面简洁"],
    cons: ["语言覆盖有限", "创意写作弱", "高级功能需付费"],
    relatedSites: [
      { name: "DeepL 官网", url: "https://deepl.com", type: "official", description: "DeepL 官方网站" },
      { name: "DeepL 翻译", url: "https://deepl.com/translator", type: "alternative", description: "DeepL 翻译工具" },
      { name: "DeepL API 文档", url: "https://developers.deepl.com", type: "tutorial", description: "开发者 API 文档" }
    ],
    targetUsers: ["学术研究者", "商务人士", "翻译人员", "非母语写作者", "内容编辑"],
    difficulty: "beginner"
  },
  {
    id: 12,
    name: "Notion AI",
    description: "智能笔记助手，自动总结、润色、翻译",
    highlights: "与 Notion 无缝集成，功能实用",
    category: "文本生成",
    subCategory: "写作辅助",
    logo: "📓",
    url: "https://notion.so",
    isVip: true,
    price: "$10/月",
    tags: ["付费", "多语言", "Web"],
    features: ["笔记总结", "文章润色", "多语言翻译", "大纲生成", "头脑风暴", "Notion 深度集成"],
    useCases: ["笔记整理", "文档写作", "会议记录", "知识管理", "团队协作"],
    pros: ["与 Notion 无缝集成", "功能实用", "多语言支持", "自定义指令"],
    cons: ["需 Notion 订阅", "单独购买较贵", "功能相对基础"],
    relatedSites: [
      { name: "Notion 官网", url: "https://notion.so", type: "official", description: "Notion 官方网站" },
      { name: "Notion AI 介绍", url: "https://notion.so/product/ai", type: "official", description: "Notion AI 产品介绍" },
      { name: "Notion 模板库", url: "https://notion.so/templates", type: "tutorial", description: "官方模板和资源" }
    ],
    targetUsers: ["知识工作者", "学生", "项目经理", "内容创作者", "团队协作者"],
    difficulty: "beginner"
  },

  // ==================== SEO 内容 ====================
  {
    id: 21,
    name: "Frase",
    description: "AI 内容优化和 SEO 写作工具",
    highlights: "SEO 功能强大，研究工具全面",
    category: "文本生成",
    subCategory: "SEO 内容",
    logo: "📝",
    url: "https://frase.io",
    isVip: true,
    price: "$14.99-114.99/月",
    tags: ["付费", "英文", "Web"],
    features: ["内容研究", "SEO 优化", "大纲生成", "竞争分析", "Google 集成", "性能追踪"],
    useCases: ["SEO 文章", "内容研究", "竞争分析", "内容优化", "博客写作"],
    pros: ["SEO 功能强大", "研究工具全面", "竞争分析好", "数据驱动"],
    cons: ["学习曲线陡", "价格较高", "主要面向英文"],
    relatedSites: [
      { name: "Frase 官网", url: "https://frase.io", type: "official", description: "Frase 官方网站" },
      { name: "Frase 学习中心", url: "https://help.frase.io", type: "tutorial", description: "使用教程和指南" },
      { name: "Frase 定价", url: "https://frase.io/pricing", type: "pricing", description: "价格方案详情" }
    ],
    targetUsers: ["SEO 专家", "内容营销人员", "博主", "数字营销机构", "内容策略师"],
    difficulty: "advanced"
  },
  {
    id: 19,
    name: "Hypotenuse",
    description: "AI 内容创作，SEO 优化文章生成",
    highlights: "事实核查功能，电商集成",
    category: "文本生成",
    subCategory: "SEO 内容",
    logo: "📐",
    url: "https://hypotenuse.ai",
    isVip: true,
    price: "$49-99/月",
    tags: ["付费", "英文", "Web"],
    features: ["SEO 文章生成", "事实核查", "产品描述", "批量生成", "电商平台集成", "多语言支持"],
    useCases: ["博客文章", "产品描述", "广告文案", "电商内容", "SEO 优化"],
    pros: ["事实核查功能", "SEO 优化好", "批量生成", "电商集成"],
    cons: ["价格较高", "英文为主", "长文质量波动"],
    relatedSites: [
      { name: "Hypotenuse 官网", url: "https://hypotenuse.ai", type: "official", description: "Hypotenuse AI 官方网站" },
      { name: "Hypotenuse 博客", url: "https://hypotenuse.ai/blog", type: "tutorial", description: "内容营销博客" },
      { name: "Shopify 应用商店", url: "https://apps.shopify.com/hypotenuse", type: "alternative", description: "Shopify 应用集成" }
    ],
    targetUsers: ["电商运营", "内容营销人员", "SEO 专家", "产品营销", "博主"],
    difficulty: "intermediate"
  },
  {
    id: 20,
    name: "Peppertype",
    description: "AI 内容生成器，营销和销售文案",
    highlights: "模板丰富，内容日历实用",
    category: "文本生成",
    subCategory: "SEO 内容",
    logo: "🌶️",
    url: "https://peppertype.ai",
    isVip: true,
    price: "$35-199/月",
    tags: ["付费", "英文", "Web"],
    features: ["50+ 模板", "内容日历", "协作编辑", "品牌学习", "多语言支持", "API 访问"],
    useCases: ["社交媒体", "销售邮件", "广告文案", "博客文章", "内容规划"],
    pros: ["模板丰富", "内容日历实用", "团队协作好", "品牌学习"],
    cons: ["价格较高", "英文为主", "学习曲线存在"],
    relatedSites: [
      { name: "Peppertype 官网", url: "https://peppertype.ai", type: "official", description: "Peppertype 官方网站" },
      { name: "Peppertype 用例", url: "https://peppertype.ai/use-cases", type: "tutorial", description: "使用场景示例" },
      { name: "Peppertype 定价", url: "https://peppertype.ai/pricing", type: "pricing", description: "价格方案对比" }
    ],
    targetUsers: ["营销团队", "内容创作者", "社交媒体经理", "销售团队", "中小企业主"],
    difficulty: "intermediate"
  },

  // ==================== 学术写作 ====================
  {
    id: 23,
    name: "Aithor",
    description: "AI 写作助手，论文和学术内容",
    highlights: "学术导向，引用格式全",
    category: "文本生成",
    subCategory: "学术写作",
    logo: "🎓",
    url: "https://aithor.com",
    isVip: true,
    price: "免费 + $11.99-29.99/月",
    tags: ["免费增值", "多语言", "Web"],
    features: ["论文写作", "文献综述", "引用生成", "抄袭检查", "多语言支持", "多种格式"],
    useCases: ["学术论文", "研究报告", "文献综述", "作业写作", "引用管理"],
    pros: ["学术导向", "多语言支持", "引用格式全", "免费版本可用"],
    cons: ["需谨慎使用", "学术诚信问题", "高级功能需付费"],
    relatedSites: [
      { name: "Aithor 官网", url: "https://aithor.com", type: "official", description: "Aithor 官方网站" },
      { name: "Aithor 博客", url: "https://aithor.com/blog", type: "tutorial", description: "学术写作技巧" },
      { name: "学术诚信指南", url: "https://aithor.com/academic-integrity", type: "tutorial", description: "学术诚信使用指南" }
    ],
    targetUsers: ["大学生", "研究生", "研究人员", "学者", "学术作者"],
    difficulty: "intermediate"
  },
  {
    id: 22,
    name: "ShortlyAI",
    description: "AI 写作伙伴，长篇文章生成",
    highlights: "界面简洁，长文能力强",
    category: "文本生成",
    subCategory: "学术写作",
    logo: "⚡",
    url: "https://shortlyai.com",
    isVip: true,
    price: "$79/月",
    tags: ["付费", "英文", "Web"],
    features: ["长文生成", "命令控制", "简洁界面", "内容扩展", "改写优化", "无限字数"],
    useCases: ["博客文章", "长文写作", "内容扩展", "创意写作", "营销文案"],
    pros: ["界面简洁", "长文能力强", "命令灵活", "专注写作"],
    cons: ["价格较高", "仅支持英文", "功能相对单一"],
    relatedSites: [
      { name: "ShortlyAI 官网", url: "https://shortlyai.com", type: "official", description: "ShortlyAI 官方网站" },
      { name: "ShortlyAI 教程", url: "https://shortlyai.com/how-to-use", type: "tutorial", description: "使用教程和技巧" },
      { name: "ShortlyAI 评测", url: "https://www.pcms.ai/shortlyai-review", type: "review", description: "第三方评测报告" }
    ],
    targetUsers: ["内容创作者", "博主", "作家", "营销人员", "学术作者"],
    difficulty: "beginner"
  },
  {
    id: 24,
    name: "GravityWrite",
    description: "多语言 AI 内容创作平台",
    highlights: "多语言支持强，WordPress 集成",
    category: "文本生成",
    subCategory: "学术写作",
    logo: "⚖️",
    url: "https://gravitywrite.com",
    isVip: true,
    price: "免费 + $19-49/月",
    tags: ["免费增值", "多语言", "Web"],
    features: ["75+ 写作工具", "40+ 语言支持", "WordPress 集成", "SEO 优化", "批量生成", "团队协作"],
    useCases: ["多语言内容", "博客写作", "社交媒体", "广告文案", "电商描述"],
    pros: ["多语言支持强", "工具丰富", "价格实惠", "WordPress 集成"],
    cons: ["质量参差不齐", "品牌较新", "高级功能有限"],
    relatedSites: [
      { name: "GravityWrite 官网", url: "https://gravitywrite.com", type: "official", description: "GravityWrite 官方网站" },
      { name: "GravityWrite 功能", url: "https://gravitywrite.com/features", type: "tutorial", description: "功能详细介绍" },
      { name: "WordPress 插件", url: "https://wordpress.org/plugins/gravitywrite", type: "alternative", description: "WordPress 插件页面" }
    ],
    targetUsers: ["多语言创作者", "博主", "跨境电商", "内容机构", "中小企业"],
    difficulty: "beginner"
  },

  // ==================== 搜索问答 ====================
  {
    id: 25,
    name: "Perplexity",
    description: "AI 搜索和摘要，可信信息来源",
    highlights: "信息可靠，引用清晰",
    category: "文本生成",
    subCategory: "搜索问答",
    logo: "🔍",
    url: "https://perplexity.ai",
    isVip: true,
    price: "免费 + $20/月",
    tags: ["免费增值", "多语言", "Web"],
    features: ["AI 搜索", "引用标注", "多轮对话", "多模型选择", "实时信息", "来源追踪"],
    useCases: ["研究学习", "信息查询", "新闻摘要", "事实验证", "知识探索"],
    pros: ["信息可靠", "引用清晰", "免费版本强", "实时搜索"],
    cons: ["长文创作弱", "高级功能需付费", "依赖网络质量"],
    relatedSites: [
      { name: "Perplexity 官网", url: "https://perplexity.ai", type: "official", description: "Perplexity AI 官方网站" },
      { name: "Perplexity 博客", url: "https://perplexity.ai/blog", type: "tutorial", description: "产品更新和使用技巧" },
      { name: "Perplexity 定价", url: "https://perplexity.ai/pro", type: "pricing", description: "Pro 版功能和价格" }
    ],
    targetUsers: ["研究人员", "学生", "记者", "分析师", "知识工作者"],
    difficulty: "beginner"
  }
];

// 导出工具总数
export const TOTAL_TOOLS = TEXT_GENERATION_TOOLS.length;

// 导出子分类列表
export const SUB_CATEGORIES = [
  "对话助手",
  "营销文案",
  "创意写作",
  "写作辅助",
  "SEO 内容",
  "学术写作",
  "搜索问答"
];

// 按子分类筛选工具
export function getToolsBySubCategory(subCategory: string): EnhancedTool[] {
  return TEXT_GENERATION_TOOLS.filter(tool => tool.subCategory === subCategory);
}

// 按难度筛选工具
export function getToolsByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced'): EnhancedTool[] {
  return TEXT_GENERATION_TOOLS.filter(tool => tool.difficulty === difficulty);
}

// 搜索工具
export function searchTools(query: string): EnhancedTool[] {
  const lowerQuery = query.toLowerCase();
  return TEXT_GENERATION_TOOLS.filter(tool =>
    tool.name.toLowerCase().includes(lowerQuery) ||
    tool.description.toLowerCase().includes(lowerQuery) ||
    tool.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}
