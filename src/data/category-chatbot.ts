// 对话机器人分类 - 增强版工具数据
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

export const CHATBOT_TOOLS: EnhancedTool[] = [
  // ==================== 客服机器人 ====================
  {
    id: 601,
    name: "Intercom",
    description: "全球领先的客户沟通平台，智能客服机器人",
    highlights: "功能全面强大，企业级首选",
    category: "对话机器人",
    subCategory: "客服机器人",
    logo: "💬",
    url: "https://intercom.com",
    isVip: true,
    price: "$39-999/月",
    tags: ["付费", "英文", "Web"],
    features: ["智能聊天机器人", "客户数据平台", "工单管理", "实时聊天", "自动化工作流", "数据分析"],
    useCases: ["客户支持", "销售线索", "用户引导", "问题解答", "反馈收集"],
    pros: ["功能全面强大", "集成生态丰富", "自动化程度高", "数据分析深入"],
    cons: ["价格较高", "学习曲线陡", "小团队成本高"],
    relatedSites: [
      { name: "Intercom 官网", url: "https://intercom.com", type: "official", description: "Intercom 官方网站" },
      { name: "Intercom 开发者平台", url: "https://developers.intercom.com", type: "tutorial", description: "API 文档和开发指南" },
      { name: "Intercom 应用市场", url: "https://www.intercom.com/apps", type: "alternative", description: "第三方应用集成市场" }
    ],
    targetUsers: ["企业客服团队", "SaaS 公司", "电商平台", " startups", "客户成功团队"],
    difficulty: "intermediate"
  },
  {
    id: 602,
    name: "Drift",
    description: "对话式营销平台，销售导向的聊天机器人",
    highlights: "销售转化强，实时沟通佳",
    category: "对话机器人",
    subCategory: "客服机器人",
    logo: "⚡",
    url: "https://drift.com",
    isVip: true,
    price: "免费 + $500+/月",
    tags: ["免费增值", "英文", "Web"],
    features: ["实时聊天", "聊天机器人", "预约 scheduling", "客户识别", "CRM 集成", "视频消息"],
    useCases: ["销售线索捕获", "预约安排", "客户资格筛选", "实时支持", "产品演示"],
    pros: ["销售转化优秀", "实时沟通流畅", "CRM 集成好", "免费版本可用"],
    cons: ["高级版价格高", "主要面向销售", "中文支持有限"],
    relatedSites: [
      { name: "Drift 官网", url: "https://drift.com", type: "official", description: "Drift 官方网站" },
      { name: "Drift 学院", url: "https://academy.drift.com", type: "tutorial", description: "对话式营销教程" },
      { name: "Drift 博客", url: "https://drift.com/blog", type: "tutorial", description: "营销和销售洞察" }
    ],
    targetUsers: ["销售团队", "B2B 企业", "营销人员", "客户获取团队", "增长团队"],
    difficulty: "beginner"
  },
  {
    id: 603,
    name: "Tidio",
    description: "中小型企业客服聊天机器人平台",
    highlights: "性价比高，上手简单",
    category: "对话机器人",
    subCategory: "客服机器人",
    logo: "🦄",
    url: "https://tidio.com",
    isVip: true,
    price: "免费 + $29+/月",
    tags: ["免费增值", "多语言", "Web"],
    features: ["实时聊天", "聊天机器人", "邮件集成", "多通道支持", "访客追踪", "移动端应用"],
    useCases: ["电商客服", "网站支持", "订单查询", "产品推荐", "售后支持"],
    pros: ["性价比高", "上手简单", "免费版本实用", "电商集成好"],
    cons: ["高级功能有限", "大规模支持弱", "自定义能力一般"],
    relatedSites: [
      { name: "Tidio 官网", url: "https://tidio.com", type: "official", description: "Tidio 官方网站" },
      { name: "Tidio 应用市场", url: "https://tidio.com/integrations", type: "alternative", description: "第三方应用集成" },
      { name: "Tidio 帮助文档", url: "https://tidio.com/help", type: "tutorial", description: "使用指南和教程" }
    ],
    targetUsers: ["中小型企业", "电商卖家", "在线商店", "初创公司", "自由职业者"],
    difficulty: "beginner"
  },
  {
    id: 604,
    name: "Ada",
    description: "AI 驱动的自动化客服平台",
    highlights: "自动化程度高，无需编码",
    category: "对话机器人",
    subCategory: "客服机器人",
    logo: "🤖",
    url: "https://ada.cx",
    isVip: true,
    price: "定制报价",
    tags: ["付费", "英文", "Web"],
    features: ["无代码构建", "AI 自动化", "多语言支持", "个性化回复", "数据分析", "全渠道支持"],
    useCases: ["客户支持自动化", "常见问题解答", "账户管理", "订单处理", "退款处理"],
    pros: ["自动化程度高", "无需编码", "多语言支持", "个性化体验"],
    cons: ["价格不透明", "实施周期长", "主要面向大企业"],
    relatedSites: [
      { name: "Ada 官网", url: "https://ada.cx", type: "official", description: "Ada 官方网站" },
      { name: "Ada 资源中心", url: "https://ada.cx/resources", type: "tutorial", description: "案例研究和白皮书" },
      { name: "Ada 开发者文档", url: "https://developer.ada.cx", type: "tutorial", description: "API 和集成文档" }
    ],
    targetUsers: ["大型企业", "电信公司", "金融机构", "电商平台", "SaaS 企业"],
    difficulty: "intermediate"
  },
  {
    id: 605,
    name: "Freshchat",
    description: "Freshworks 的现代消息传递软件",
    highlights: "团队协作好，价格实惠",
    category: "对话机器人",
    subCategory: "客服机器人",
    logo: "🌿",
    url: "https://freshworks.com/freshchat",
    isVip: true,
    price: "免费 + $15+/月",
    tags: ["免费增值", "多语言", "Web"],
    features: ["团队收件箱", "聊天机器人", "消息模板", "机器人检测", "移动应用", "报告分析"],
    useCases: ["客户支持", "销售咨询", "用户引导", "团队协作", "多渠道消息"],
    pros: ["价格实惠", "团队协作好", "界面友好", "Freshworks 生态"],
    cons: ["高级功能需付费", "机器人能力一般", "集成有限"],
    relatedSites: [
      { name: "Freshchat 官网", url: "https://freshworks.com/freshchat", type: "official", description: "Freshchat 官方网站" },
      { name: "Freshworks 市场", url: "https://freshworks.com/marketplace", type: "alternative", description: "应用集成市场" },
      { name: "Freshchat 定价", url: "https://freshworks.com/freshchat/pricing", type: "pricing", description: "详细价格方案" }
    ],
    targetUsers: ["中小企业", "客服团队", "销售团队", "初创公司", "在线业务"],
    difficulty: "beginner"
  },

  // ==================== 开发平台 ====================
  {
    id: 606,
    name: "Dialogflow",
    description: "Google 的自然语言理解平台",
    highlights: "Google 生态，NLP 能力强",
    category: "对话机器人",
    subCategory: "开发平台",
    logo: "🔵",
    url: "https://dialogflow.cloud.google.com",
    isVip: true,
    price: "免费 + 按使用量",
    tags: ["免费增值", "多语言", "Cloud"],
    features: ["自然语言理解", "多平台部署", "语音识别", "机器学习", "预构建代理", "分析仪表板"],
    useCases: ["智能助手", "语音应用", "客服机器人", "IoT 设备", "电话系统"],
    pros: ["Google 生态集成", "NLP 能力强", "多平台支持", "免费额度充足"],
    cons: ["学习曲线陡", "高级功能复杂", "依赖 Google Cloud"],
    relatedSites: [
      { name: "Dialogflow 官网", url: "https://dialogflow.cloud.google.com", type: "official", description: "Google Dialogflow 官方" },
      { name: "Dialogflow 文档", url: "https://cloud.google.com/dialogflow/docs", type: "tutorial", description: "官方开发文档" },
      { name: "Dialogflow GitHub", url: "https://github.com/dialogflow", type: "community", description: "开源示例和库" }
    ],
    targetUsers: ["开发者", "企业 IT 团队", "AI 工程师", "语音应用开发者", "系统集成商"],
    difficulty: "advanced"
  },
  {
    id: 607,
    name: "Rasa",
    description: "开源对话 AI 框架，完全可定制",
    highlights: "开源免费，数据隐私好",
    category: "对话机器人",
    subCategory: "开发平台",
    logo: "💚",
    url: "https://rasa.com",
    isVip: true,
    price: "开源免费 + 企业版定制",
    tags: ["开源", "多语言", "Self-hosted"],
    features: ["开源框架", "自定义 NLU", "对话管理", "机器学习", "多语言支持", "本地部署"],
    useCases: ["企业助手", "行业解决方案", "隐私敏感应用", "复杂对话流程", "定制机器人"],
    pros: ["完全开源免费", "数据隐私好", "高度可定制", "社区活跃"],
    cons: ["技术门槛高", "需要 ML 知识", "实施周期长"],
    relatedSites: [
      { name: "Rasa 官网", url: "https://rasa.com", type: "official", description: "Rasa 官方网站" },
      { name: "Rasa 文档", url: "https://rasa.com/docs", type: "tutorial", description: "详细开发文档" },
      { name: "Rasa GitHub", url: "https://github.com/RasaHQ/rasa", type: "community", description: "开源代码仓库" }
    ],
    targetUsers: ["AI 开发者", "数据科学家", "企业技术团队", "研究机构", "隐私敏感行业"],
    difficulty: "advanced"
  },
  {
    id: 608,
    name: "Botpress",
    description: "开源对话机器人构建平台",
    highlights: "可视化构建，开发者友好",
    category: "对话机器人",
    subCategory: "开发平台",
    logo: "📦",
    url: "https://botpress.com",
    isVip: true,
    price: "免费 + $500+/月",
    tags: ["免费增值", "多语言", "Web"],
    features: ["可视化流程", "代码扩展", "NLU 引擎", "多渠道部署", "分析监控", "模板市场"],
    useCases: ["客服机器人", "内部助手", "营销自动化", "IT 支持", "HR 问答"],
    pros: ["可视化构建", "开发者友好", "开源核心", "社区插件多"],
    cons: ["高级版价格高", "NLU 需配置", "文档不够完善"],
    relatedSites: [
      { name: "Botpress 官网", url: "https://botpress.com", type: "official", description: "Botpress 官方网站" },
      { name: "Botpress 文档", url: "https://botpress.com/docs", type: "tutorial", description: "开发和部署文档" },
      { name: "Botpress 论坛", url: "https://forum.botpress.com", type: "community", description: "开发者社区论坛" }
    ],
    targetUsers: ["开发者", "IT 团队", "创业公司", "系统集成商", "技术爱好者"],
    difficulty: "intermediate"
  },
  {
    id: 609,
    name: "Microsoft Bot Framework",
    description: "微软的企业级机器人开发框架",
    highlights: "微软生态集成，企业级支持",
    category: "对话机器人",
    subCategory: "开发平台",
    logo: "🟦",
    url: "https://dev.botframework.com",
    isVip: false,
    price: "免费 + Azure 使用费",
    tags: ["免费", "多语言", "Cloud"],
    features: ["SDK 多语言", "Azure 集成", "LUIS NLU", "多渠道连接", "应用中心", "分析工具"],
    useCases: ["企业助手", "Teams 机器人", "Cortana 技能", "客服系统", "内部工具"],
    pros: ["微软生态集成", "企业级支持", "多语言 SDK", "免费使用"],
    cons: ["学习曲线陡", "Azure 依赖", "文档复杂"],
    relatedSites: [
      { name: "Bot Framework 官网", url: "https://dev.botframework.com", type: "official", description: "微软机器人框架官方" },
      { name: "Bot Framework 文档", url: "https://docs.microsoft.com/bot-framework", type: "tutorial", description: "微软官方文档" },
      { name: "Bot Framework GitHub", url: "https://github.com/microsoft/botframework-sdk", type: "community", description: "开源 SDK 代码" }
    ],
    targetUsers: ["企业开发者", ".NET 开发者", "Azure 用户", "IT 部门", "系统集成商"],
    difficulty: "advanced"
  },
  {
    id: 610,
    name: "IBM Watson",
    description: "IBM 的企业级 AI 和对话平台",
    highlights: "企业级 AI，行业解决方案",
    category: "对话机器人",
    subCategory: "开发平台",
    logo: "🔷",
    url: "https://ibm.com/watson",
    isVip: true,
    price: "按使用量付费",
    tags: ["付费", "多语言", "Cloud"],
    features: ["Watson Assistant", "自然语言理解", "语音转文本", "知识提取", "行业模型", "企业集成"],
    useCases: ["企业客服", "虚拟助手", "行业解决方案", "数据分析", "自动化流程"],
    pros: ["企业级能力", "行业经验丰富", "AI 能力全面", "安全合规"],
    cons: ["价格较高", "实施复杂", "学习成本高"],
    relatedSites: [
      { name: "IBM Watson 官网", url: "https://ibm.com/watson", type: "official", description: "IBM Watson 官方网站" },
      { name: "Watson 文档", url: "https://cloud.ibm.com/docs/watson", type: "tutorial", description: "IBM Cloud 文档" },
      { name: "Watson 开发者社区", url: "https://developer.ibm.com/watson", type: "community", description: "开发者资源和论坛" }
    ],
    targetUsers: ["大型企业", "金融机构", "医疗机构", "政府机构", "咨询公司"],
    difficulty: "advanced"
  },

  // ==================== 营销聊天 ====================
  {
    id: 611,
    name: "Landbot",
    description: "无代码聊天机器人构建器，营销导向",
    highlights: "可视化构建，营销模板多",
    category: "对话机器人",
    subCategory: "营销聊天",
    logo: "🤖",
    url: "https://landbot.io",
    isVip: true,
    price: "免费 + $30+/月",
    tags: ["免费增值", "多语言", "Web"],
    features: ["无代码构建", "可视化流程", "模板库", "线索捕获", "CRM 集成", "A/B 测试"],
    useCases: ["营销落地页", "线索生成", "产品推荐", "活动注册", "客户调查"],
    pros: ["无代码易上手", "可视化直观", "营销模板多", "性价比高"],
    cons: ["复杂逻辑有限", "高级功能需付费", "NLP 能力一般"],
    relatedSites: [
      { name: "Landbot 官网", url: "https://landbot.io", type: "official", description: "Landbot 官方网站" },
      { name: "Landbot 模板库", url: "https://landbot.io/templates", type: "tutorial", description: "预制模板和示例" },
      { name: "Landbot 博客", url: "https://landbot.io/blog", type: "tutorial", description: "聊天营销洞察" }
    ],
    targetUsers: ["营销人员", "中小企业主", "电商运营", "数字营销机构", "创业者"],
    difficulty: "beginner"
  },
  {
    id: 612,
    name: "ManyChat",
    description: "Facebook Messenger 营销自动化平台",
    highlights: "社媒营销强，电商集成好",
    category: "对话机器人",
    subCategory: "营销聊天",
    logo: "💬",
    url: "https://manychat.com",
    isVip: true,
    price: "免费 + $15+/月",
    tags: ["免费增值", "多语言", "Web"],
    features: ["Messenger 机器人", "Instagram 集成", "SMS 营销", "电商自动化", "广播消息", "增长工具"],
    useCases: ["社媒营销", "电商销售", "预约提醒", "产品推广", "客户互动"],
    pros: ["社媒集成好", "电商自动化强", "免费版本实用", "增长工具丰富"],
    cons: ["依赖 Meta 平台", "高级功能需付费", "平台政策风险"],
    relatedSites: [
      { name: "ManyChat 官网", url: "https://manychat.com", type: "official", description: "ManyChat 官方网站" },
      { name: "ManyChat 学院", url: "https://manychat.com/academy", type: "tutorial", description: "营销自动化教程" },
      { name: "ManyChat 应用市场", url: "https://manychat.com/integrations", type: "alternative", description: "第三方应用集成" }
    ],
    targetUsers: ["电商卖家", "社交媒体经理", "数字营销人员", "在线教练", "内容创作者"],
    difficulty: "beginner"
  },
  {
    id: 613,
    name: "Chatfuel",
    description: "Facebook 和 Instagram 聊天机器人平台",
    highlights: "社媒营销专家，模板丰富",
    category: "对话机器人",
    subCategory: "营销聊天",
    logo: "⛽",
    url: "https://chatfuel.com",
    isVip: true,
    price: "免费 + $15+/月",
    tags: ["免费增值", "多语言", "Web"],
    features: ["Messenger 机器人", "Instagram 自动化", "AI 插件", "电商集成", "广播工具", "分析仪表板"],
    useCases: ["社媒客服", "产品销售", "活动推广", "线索培育", "品牌互动"],
    pros: ["社媒平台专精", "模板丰富", "AI 插件灵活", "性价比高"],
    cons: ["依赖 Meta 生态", "独立网站支持弱", "高级自动化有限"],
    relatedSites: [
      { name: "Chatfuel 官网", url: "https://chatfuel.com", type: "official", description: "Chatfuel 官方网站" },
      { name: "Chatfuel 博客", url: "https://chatfuel.com/blog", type: "tutorial", description: "聊天营销最佳实践" },
      { name: "Chatfuel 插件市场", url: "https://chatfuel.com/plugins", type: "alternative", description: "AI 插件和扩展" }
    ],
    targetUsers: ["电商品牌", "社交媒体营销", "在线零售商", "数字机构", "内容创作者"],
    difficulty: "beginner"
  },
  {
    id: 614,
    name: "MobileMonkey",
    description: "全渠道营销聊天机器人平台",
    highlights: "多渠道覆盖，营销自动化",
    category: "对话机器人",
    subCategory: "营销聊天",
    logo: "🐒",
    url: "https://mobilemonkey.com",
    isVip: true,
    price: "免费 + $19+/月",
    tags: ["免费增值", "英文", "Web"],
    features: ["多渠道聊天", "线索捕获", "营销自动化", "预约安排", "竞赛工具", "CRM 集成"],
    useCases: ["营销漏斗", "线索生成", "活动推广", "客户互动", "销售转化"],
    pros: ["多渠道覆盖", "营销工具全", "免费版本好", "易于上手"],
    cons: ["主要面向英文", "高级功能需付费", "NLP 能力一般"],
    relatedSites: [
      { name: "MobileMonkey 官网", url: "https://mobilemonkey.com", type: "official", description: "MobileMonkey 官方网站" },
      { name: "MobileMonkey 学院", url: "https://mobilemonkey.com/academy", type: "tutorial", description: "聊天营销课程" },
      { name: "MobileMonkey 博客", url: "https://mobilemonkey.com/blog", type: "tutorial", description: "营销洞察和案例" }
    ],
    targetUsers: ["营销团队", "中小企业", "电商卖家", "数字营销机构", "销售团队"],
    difficulty: "beginner"
  },
  {
    id: 615,
    name: "Flow XO",
    description: "自动化工作流和聊天机器人平台",
    highlights: "工作流自动化，集成丰富",
    category: "对话机器人",
    subCategory: "营销聊天",
    logo: "🌊",
    url: "https://flowxo.com",
    isVip: true,
    price: "免费 + $19+/月",
    tags: ["免费增值", "多语言", "Web"],
    features: ["可视化工作流", "100+ 集成", "多平台部署", "任务自动化", "数据收集", "团队协作"],
    useCases: ["营销自动化", "线索管理", "客户调查", "内部流程", "数据同步"],
    pros: ["集成生态丰富", "工作流强大", "免费版本可用", "多平台支持"],
    cons: ["学习曲线存在", "复杂流程配置难", "NLP 能力有限"],
    relatedSites: [
      { name: "Flow XO 官网", url: "https://flowxo.com", type: "official", description: "Flow XO 官方网站" },
      { name: "Flow XO 集成列表", url: "https://flowxo.com/integrations", type: "alternative", description: "支持的应用集成" },
      { name: "Flow XO 帮助文档", url: "https://help.flowxo.com", type: "tutorial", description: "使用指南和教程" }
    ],
    targetUsers: ["营销自动化", "中小企业", "运营团队", "数字机构", "创业者"],
    difficulty: "intermediate"
  },

  // ==================== AI 陪伴 ====================
  {
    id: 616,
    name: "Replika",
    description: "AI 虚拟伴侣，情感陪伴聊天机器人",
    highlights: "情感陪伴，个性化成长",
    category: "对话机器人",
    subCategory: "AI 陪伴",
    logo: "💕",
    url: "https://replika.com",
    isVip: true,
    price: "免费 + $19.99/月",
    tags: ["免费增值", "多语言", "App"],
    features: ["情感陪伴", "个性化学习", "3D 虚拟形象", "语音通话", "AR 模式", "日记功能"],
    useCases: ["情感支持", "日常聊天", "心理健康", "语言练习", "孤独缓解"],
    pros: ["情感陪伴强", "个性化成长", "界面友好", "多平台支持"],
    cons: ["高级功能需付费", "依赖性强", "隐私顾虑"],
    relatedSites: [
      { name: "Replika 官网", url: "https://replika.com", type: "official", description: "Replika 官方网站" },
      { name: "Replika 社区", url: "https://replika.com/community", type: "community", description: "用户交流和分享" },
      { name: "Replika 博客", url: "https://replika.com/blog", type: "tutorial", description: "产品更新和故事" }
    ],
    targetUsers: ["寻求陪伴者", "心理健康关注", "语言学习者", "科技爱好者", "孤独人群"],
    difficulty: "beginner"
  },
  {
    id: 617,
    name: "Character.ai",
    description: "创建和聊天 AI 角色平台",
    highlights: "角色丰富，创意无限",
    category: "对话机器人",
    subCategory: "AI 陪伴",
    logo: "🎭",
    url: "https://character.ai",
    isVip: true,
    price: "免费 + $9.99/月",
    tags: ["免费增值", "多语言", "Web"],
    features: ["角色创建", "角色扮演", "多角色聊天", "社区分享", "语音功能", "移动应用"],
    useCases: ["娱乐聊天", "角色扮演", "创意写作", "语言学习", "教育互动"],
    pros: ["角色丰富多样", "免费使用", "创意性强", "社区活跃"],
    cons: ["高级功能需付费", "内容质量参差", "偶尔响应慢"],
    relatedSites: [
      { name: "Character.ai 官网", url: "https://character.ai", type: "official", description: "Character.ai 官方网站" },
      { name: "Character.ai 社区", url: "https://discord.gg/characterai", type: "community", description: "官方 Discord 社区" },
      { name: "Character.ai 帮助", url: "https://help.character.ai", type: "tutorial", description: "使用指南和 FAQ" }
    ],
    targetUsers: ["娱乐用户", "创意写作者", "角色扮演爱好者", "学生", "AI 爱好者"],
    difficulty: "beginner"
  },
  {
    id: 618,
    name: "小冰",
    description: "微软亚洲研究院的 AI 框架，情感陪伴",
    highlights: "中文情感理解，本土化强",
    category: "对话机器人",
    subCategory: "AI 陪伴",
    logo: "❄️",
    url: "https://xiaoice.com",
    isVip: true,
    price: "免费 + 增值服务",
    tags: ["免费增值", "中文", "多平台"],
    features: ["情感计算", "多轮对话", "内容创作", "虚拟形象", "语音交互", "多平台集成"],
    useCases: ["情感陪伴", "内容创作", "虚拟主播", "客服助手", "教育互动"],
    pros: ["中文理解优秀", "情感计算强", "本土化好", "多平台支持"],
    cons: ["国际认知有限", "功能分散", "商业化较重"],
    relatedSites: [
      { name: "小冰官网", url: "https://xiaoice.com", type: "official", description: "小冰公司官方网站" },
      { name: "小冰框架", url: "https://github.com/XiaoIceFramework", type: "community", description: "开源框架代码" },
      { name: "小冰产品矩阵", url: "https://xiaoice.com/products", type: "official", description: "产品和服务介绍" }
    ],
    targetUsers: ["中文用户", "内容创作者", "企业客户", "教育机构", "娱乐用户"],
    difficulty: "beginner"
  },
  {
    id: 619,
    name: "Botsify",
    description: "多平台聊天机器人构建器",
    highlights: "多平台支持，模板丰富",
    category: "对话机器人",
    subCategory: "营销聊天",
    logo: "🤖",
    url: "https://botsify.com",
    isVip: true,
    price: "免费 + $49+/月",
    tags: ["免费增值", "多语言", "Web"],
    features: ["可视化构建", "AI 训练", "多平台部署", "电商集成", "人工接管", "分析报表"],
    useCases: ["客服自动化", "电商销售", "预约管理", "线索捕获", "用户支持"],
    pros: ["多平台支持", "模板丰富", "人工接管灵活", "电商集成好"],
    cons: ["价格较高", "学习曲线存在", "NLP 需训练"],
    relatedSites: [
      { name: "Botsify 官网", url: "https://botsify.com", type: "official", description: "Botsify 官方网站" },
      { name: "Botsify 博客", url: "https://botsify.com/blog", type: "tutorial", description: "聊天机器人最佳实践" },
      { name: "Botsify 集成", url: "https://botsify.com/integrations", type: "alternative", description: "第三方应用集成" }
    ],
    targetUsers: ["中小企业", "电商卖家", "客服团队", "营销人员", "创业者"],
    difficulty: "intermediate"
  },

  // ==================== 企业对话 ====================
  {
    id: 620,
    name: "LivePerson",
    description: "企业级对话云平台和 messaging 解决方案",
    highlights: "企业级安全，AI 驱动",
    category: "对话机器人",
    subCategory: "企业对话",
    logo: "💬",
    url: "https://liveperson.com",
    isVip: true,
    price: "定制报价",
    tags: ["付费", "多语言", "Cloud"],
    features: ["对话云", "AI 自动化", "数据分析", "全渠道支持", "安全合规", "企业集成"],
    useCases: ["客户支持", "销售转化", "数字营销", "员工支持", "业务流程"],
    pros: ["企业级安全", "AI 能力强", "全渠道覆盖", "数据洞察深"],
    cons: ["价格不透明", "实施周期长", "主要面向大企业"],
    relatedSites: [
      { name: "LivePerson 官网", url: "https://liveperson.com", type: "official", description: "LivePerson 官方网站" },
      { name: "LivePerson 开发者", url: "https://developers.liveperson.com", type: "tutorial", description: "API 和开发文档" },
      { name: "LivePerson 资源", url: "https://liveperson.com/resources", type: "tutorial", description: "案例研究和白皮书" }
    ],
    targetUsers: ["大型企业", "金融机构", "电信公司", "零售商", "医疗保健"],
    difficulty: "advanced"
  },
  {
    id: 621,
    name: "Kore.ai",
    description: "企业级对话 AI 平台，无代码构建",
    highlights: "企业级能力，行业方案",
    category: "对话机器人",
    subCategory: "企业对话",
    logo: "🔷",
    url: "https://kore.ai",
    isVip: true,
    price: "定制报价",
    tags: ["付费", "多语言", "Cloud"],
    features: ["无代码平台", "预构建助手", "NLP 引擎", "多渠道部署", "分析监控", "安全合规"],
    useCases: ["员工助手", "客户支持", "IT 服务", "HR 自动化", "业务流程"],
    pros: ["企业级能力", "无代码构建", "行业方案多", "安全合规"],
    cons: ["价格较高", "实施复杂", "学习成本高"],
    relatedSites: [
      { name: "Kore.ai 官网", url: "https://kore.ai", type: "official", description: "Kore.ai 官方网站" },
      { name: "Kore.ai 文档", url: "https://kore.ai/docs", type: "tutorial", description: "开发和部署文档" },
      { name: "Kore.ai 市场", url: "https://kore.ai/marketplace", type: "alternative", description: "预构建助手市场" }
    ],
    targetUsers: ["大型企业", "金融机构", "医疗机构", "政府机构", "IT 部门"],
    difficulty: "advanced"
  },
  {
    id: 622,
    name: "Amazon Lex",
    description: "AWS 的语音和文本聊天机器人服务",
    highlights: "AWS 生态，Serverless",
    category: "对话机器人",
    subCategory: "企业对话",
    logo: "🟠",
    url: "https://aws.amazon.com/lex",
    isVip: true,
    price: "按使用量付费",
    tags: ["付费", "多语言", "Cloud"],
    features: ["语音识别", "自然语言理解", "AWS 集成", "Serverless", "多平台部署", "按量付费"],
    useCases: ["联系中心", "虚拟助手", "IoT 控制", "应用集成", "自动化服务"],
    pros: ["AWS 生态集成", "Serverless 架构", "按量付费", "可扩展性强"],
    cons: ["需要 AWS 知识", "配置复杂", "成本不可预测"],
    relatedSites: [
      { name: "Amazon Lex 官网", url: "https://aws.amazon.com/lex", type: "official", description: "AWS Lex 官方页面" },
      { name: "Lex 文档", url: "https://docs.aws.amazon.com/lex", type: "tutorial", description: "AWS 官方文档" },
      { name: "Lex 示例代码", url: "https://github.com/aws-samples?q=lex", type: "community", description: "GitHub 示例项目" }
    ],
    targetUsers: ["AWS 开发者", "企业 IT", "联系中心", "IoT 开发者", "系统集成商"],
    difficulty: "advanced"
  }
];

// 导出工具总数
export const TOTAL_TOOLS = CHATBOT_TOOLS.length;

// 导出子分类列表
export const SUB_CATEGORIES = [
  "客服机器人",
  "开发平台",
  "营销聊天",
  "AI 陪伴",
  "企业对话"
];

// 按子分类筛选工具
export function getToolsBySubCategory(subCategory: string): EnhancedTool[] {
  return CHATBOT_TOOLS.filter(tool => tool.subCategory === subCategory);
}

// 按难度筛选工具
export function getToolsByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced'): EnhancedTool[] {
  return CHATBOT_TOOLS.filter(tool => tool.difficulty === difficulty);
}

// 搜索工具
export function searchTools(query: string): EnhancedTool[] {
  const lowerQuery = query.toLowerCase();
  return CHATBOT_TOOLS.filter(tool =>
    tool.name.toLowerCase().includes(lowerQuery) ||
    tool.description.toLowerCase().includes(lowerQuery) ||
    tool.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}
