// 开发工具分类 - 增强版工具数据
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

export const DEV_TOOLS: EnhancedTool[] = [
  // ==================== AI 代码编辑器 ====================
  {
    id: 801,
    name: "Cursor",
    description: "AI 优先的代码编辑器，基于 VS Code 构建",
    highlights: "AI 深度集成，编码效率倍增",
    category: "开发工具",
    subCategory: "AI 代码编辑器",
    logo: "🟣",
    url: "https://cursor.sh",
    isVip: true,
    price: "免费 + $20/月",
    tags: ["免费增值", "多语言", "Desktop"],
    features: ["AI 代码补全", "自然语言编辑", "代码库理解", "智能重构", "调试辅助", "Git 集成"],
    useCases: ["快速开发", "代码重构", "Bug 修复", "学习编程", "原型开发"],
    pros: ["AI 集成深度", "VS Code 兼容", "理解上下文", "效率提升明显"],
    cons: ["高级功能需付费", "依赖网络连接", "隐私顾虑"],
    relatedSites: [
      { name: "Cursor 官网", url: "https://cursor.sh", type: "official", description: "Cursor 官方网站" },
      { name: "Cursor 文档", url: "https://docs.cursor.sh", type: "tutorial", description: "使用指南和文档" },
      { name: "Cursor 社区", url: "https://discord.gg/cursor", type: "community", description: "用户交流社区" }
    ],
    targetUsers: ["专业开发者", "全栈工程师", "创业团队", "编程学习者", "技术负责人"],
    difficulty: "beginner"
  },
  {
    id: 802,
    name: "Windsurf",
    description: "下一代 AI 代码编辑器，智能编码助手",
    highlights: "智能代码理解，流畅开发体验",
    category: "开发工具",
    subCategory: "AI 代码编辑器",
    logo: "🌊",
    url: "https://windsurf.ai",
    isVip: true,
    price: "免费 + 付费计划",
    tags: ["免费增值", "英文", "Desktop"],
    features: ["AI 代码生成", "智能导航", "代码解释", "自动测试", "性能优化", "协作功能"],
    useCases: ["项目开发", "代码审查", "技术债务清理", "文档生成", "团队协作"],
    pros: ["智能理解强", "界面现代化", "功能全面", "持续更新"],
    cons: ["较新产品", "生态待完善", "高级功能付费"],
    relatedSites: [
      { name: "Windsurf 官网", url: "https://windsurf.ai", type: "official", description: "Windsurf 官方网站" },
      { name: "Windsurf 博客", url: "https://windsurf.ai/blog", type: "tutorial", description: "产品更新和教程" },
      { name: "Windsurf 文档", url: "https://docs.windsurf.ai", type: "tutorial", description: "开发文档" }
    ],
    targetUsers: ["软件工程师", "前端开发者", "后端开发者", "技术团队", "独立开发者"],
    difficulty: "intermediate"
  },

  // ==================== 代码补全 ====================
  {
    id: 803,
    name: "GitHub Copilot",
    description: "GitHub 和 OpenAI 合作的 AI 编程助手",
    highlights: "行业标杆，代码补全最强",
    category: "开发工具",
    subCategory: "代码补全",
    logo: "🐙",
    url: "https://github.com/features/copilot",
    isVip: true,
    price: "$10/月",
    tags: ["付费", "多语言", "IDE 插件"],
    features: ["智能代码补全", "多语言支持", "注释生成代码", "测试生成", "文档生成", "IDE 集成"],
    useCases: ["日常编码", "学习新语言", "快速原型", "测试编写", "文档完善"],
    pros: ["代码质量高", "生态集成好", "支持语言多", "持续改进"],
    cons: ["需付费订阅", "偶尔生成错误", "代码审查必要"],
    relatedSites: [
      { name: "Copilot 官网", url: "https://github.com/features/copilot", type: "official", description: "GitHub Copilot 官方" },
      { name: "Copilot 文档", url: "https://docs.github.com/copilot", type: "tutorial", description: "使用指南" },
      { name: "Copilot 定价", url: "https://github.com/pricing", type: "pricing", description: "价格方案" }
    ],
    targetUsers: ["专业开发者", "GitHub 用户", "全栈工程师", "学生", "开源贡献者"],
    difficulty: "beginner"
  },
  {
    id: 804,
    name: "Codeium",
    description: "免费 AI 代码补全和搜索工具",
    highlights: "免费强大，性价比高",
    category: "开发工具",
    subCategory: "代码补全",
    logo: "🔷",
    url: "https://codeium.com",
    isVip: true,
    price: "免费 + 企业版",
    tags: ["免费增值", "多语言", "IDE 插件"],
    features: ["智能补全", "代码搜索", "聊天助手", "多 IDE 支持", "企业部署", "隐私保护"],
    useCases: ["代码编写", "代码查找", "问题解答", "团队协作", "企业开发"],
    pros: ["免费版强大", "速度快", "隐私友好", "多平台支持"],
    cons: ["高级功能付费", "企业版价格高", "品牌认知较低"],
    relatedSites: [
      { name: "Codeium 官网", url: "https://codeium.com", type: "official", description: "Codeium 官方网站" },
      { name: "Codeium 文档", url: "https://docs.codeium.com", type: "tutorial", description: "使用文档" },
      { name: "Codeium 博客", url: "https://codeium.com/blog", type: "tutorial", description: "技术文章" }
    ],
    targetUsers: ["开发者", "学生", "初创公司", "企业团队", "开源开发者"],
    difficulty: "beginner"
  },
  {
    id: 805,
    name: "Tabnine",
    description: "AI 代码补全工具，支持本地运行",
    highlights: "本地 AI 模型，隐私安全",
    category: "开发工具",
    subCategory: "代码补全",
    logo: "🔶",
    url: "https://tabnine.com",
    isVip: true,
    price: "免费 + $12/月",
    tags: ["免费增值", "多语言", "IDE 插件"],
    features: ["本地 AI 模型", "代码补全", "团队学习", "隐私保护", "离线使用", "多 IDE 支持"],
    useCases: ["敏感项目开发", "日常编码", "团队协作", "代码规范", "快速开发"],
    pros: ["本地运行安全", "离线可用", "学习团队风格", "响应快速"],
    cons: ["免费版有限", "模型质量参差", "配置复杂"],
    relatedSites: [
      { name: "Tabnine 官网", url: "https://tabnine.com", type: "official", description: "Tabnine 官方网站" },
      { name: "Tabnine 文档", url: "https://docs.tabnine.com", type: "tutorial", description: "安装和配置指南" },
      { name: "Tabnine 定价", url: "https://tabnine.com/pricing", type: "pricing", description: "价格方案" }
    ],
    targetUsers: ["企业开发者", "安全敏感团队", "独立开发者", "远程团队", "全栈工程师"],
    difficulty: "beginner"
  },
  {
    id: 806,
    name: "Amazon CodeWhisperer",
    description: "AWS 的 AI 编程伴侣，代码生成和安全扫描",
    highlights: "AWS 生态集成，安全扫描",
    category: "开发工具",
    subCategory: "代码补全",
    logo: "🟠",
    url: "https://aws.amazon.com/codewhisperer",
    isVip: true,
    price: "免费 + 专业版",
    tags: ["免费增值", "多语言", "IDE 插件"],
    features: ["代码生成", "安全扫描", "AWS 集成", "引用追踪", "自定义建议", "合规检查"],
    useCases: ["AWS 开发", "安全编码", "云原生应用", "代码审查", "合规项目"],
    pros: ["AWS 深度集成", "安全功能强", "免费版可用", "引用追踪好"],
    cons: ["AWS 生态为主", "其他云支持弱", "高级功能付费"],
    relatedSites: [
      { name: "CodeWhisperer 官网", url: "https://aws.amazon.com/codewhisperer", type: "official", description: "AWS CodeWhisperer 官方" },
      { name: "使用文档", url: "https://docs.aws.amazon.com/codewhisperer", type: "tutorial", description: "AWS 官方文档" },
      { name: "定价信息", url: "https://aws.amazon.com/codewhisperer/pricing", type: "pricing", description: "价格详情" }
    ],
    targetUsers: ["AWS 开发者", "云工程师", "安全团队", "企业开发", "DevOps 工程师"],
    difficulty: "intermediate"
  },

  // ==================== 在线开发环境 ====================
  {
    id: 807,
    name: "Replit AI",
    description: "云端 IDE 集成 AI 编程助手",
    highlights: "云端协作，AI 辅助开发",
    category: "开发工具",
    subCategory: "在线开发环境",
    logo: "🟩",
    url: "https://replit.com",
    isVip: true,
    price: "免费 + $20/月",
    tags: ["免费增值", "多语言", "Web"],
    features: ["云端 IDE", "AI 代码助手", "实时协作", "一键部署", "多语言支持", "包管理"],
    useCases: ["学习编程", "快速原型", "团队协作", "教学演示", "黑客松"],
    pros: ["零配置启动", "协作方便", "AI 集成好", "部署简单"],
    cons: ["依赖网络", "高级功能付费", "大型项目受限"],
    relatedSites: [
      { name: "Replit 官网", url: "https://replit.com", type: "official", description: "Replit 官方网站" },
      { name: "Replit 文档", url: "https://docs.replit.com", type: "tutorial", description: "使用指南" },
      { name: "Replit 社区", url: "https://replit.com/community", type: "community", description: "开发者社区" }
    ],
    targetUsers: ["编程学习者", "教育工作者", "初创团队", "学生", "原型开发者"],
    difficulty: "beginner"
  },
  {
    id: 808,
    name: "CodeSandbox AI",
    description: "云端开发平台集成 AI 辅助功能",
    highlights: "前端开发神器，AI 加速",
    category: "开发工具",
    subCategory: "在线开发环境",
    logo: "📦",
    url: "https://codesandbox.io",
    isVip: true,
    price: "免费 + $9/月",
    tags: ["免费增值", "多语言", "Web"],
    features: ["云端沙盒", "AI 代码生成", "实时预览", "Git 集成", "团队协作", "模板库"],
    useCases: ["前端开发", "原型设计", "代码分享", "技术演示", "快速测试"],
    pros: ["前端生态强", "即时预览", "模板丰富", "协作流畅"],
    cons: ["后端支持弱", "高级功能付费", "大项目性能一般"],
    relatedSites: [
      { name: "CodeSandbox 官网", url: "https://codesandbox.io", type: "official", description: "CodeSandbox 官方网站" },
      { name: "文档中心", url: "https://codesandbox.io/docs", type: "tutorial", description: "使用文档" },
      { name: "模板市场", url: "https://codesandbox.io/templates", type: "alternative", description: "预制模板" }
    ],
    targetUsers: ["前端开发者", "React 开发者", "UI 工程师", "技术博主", "教育者"],
    difficulty: "beginner"
  },

  // ==================== 代码搜索/审查 ====================
  {
    id: 809,
    name: "Sourcegraph Cody",
    description: "代码搜索平台推出的 AI 编程助手",
    highlights: "代码库理解最强，企业级",
    category: "开发工具",
    subCategory: "代码搜索/审查",
    logo: "🔍",
    url: "https://sourcegraph.com/cody",
    isVip: true,
    price: "免费 + $9/月",
    tags: ["免费增值", "多语言", "IDE 插件"],
    features: ["代码库搜索", "智能问答", "代码生成", "引用溯源", "企业部署", "多仓库支持"],
    useCases: ["大项目导航", "代码审查", "技术债务分析", "知识传承", "代码重构"],
    pros: ["代码理解深", "企业级安全", "多仓库支持", "引用准确"],
    cons: ["学习曲线陡", "高级功能付费", "小项目优势不明显"],
    relatedSites: [
      { name: "Cody 官网", url: "https://sourcegraph.com/cody", type: "official", description: "Sourcegraph Cody 官方" },
      { name: "Cody 文档", url: "https://sourcegraph.com/docs/cody", type: "tutorial", description: "使用文档" },
      { name: "Sourcegraph 博客", url: "https://sourcegraph.com/blog", type: "tutorial", description: "技术文章" }
    ],
    targetUsers: ["企业开发者", "技术负责人", "代码审查员", "架构师", "大型团队"],
    difficulty: "intermediate"
  },
  {
    id: 810,
    name: "Blackbox AI",
    description: "AI 代码搜索和生成工具",
    highlights: "代码搜索快，生成质量高",
    category: "开发工具",
    subCategory: "代码搜索/审查",
    logo: "⬛",
    url: "https://blackbox.ai",
    isVip: true,
    price: "免费 + 付费计划",
    tags: ["免费增值", "多语言", "Web"],
    features: ["代码搜索", "AI 生成", "代码解释", "多语言支持", "浏览器扩展", "API 访问"],
    useCases: ["代码查找", "快速开发", "学习参考", "问题解决", "代码复用"],
    pros: ["搜索速度快", "代码库庞大", "免费可用", "多平台支持"],
    cons: ["质量需审查", "高级功能付费", "隐私考虑"],
    relatedSites: [
      { name: "Blackbox 官网", url: "https://blackbox.ai", type: "official", description: "Blackbox AI 官方网站" },
      { name: "浏览器扩展", url: "https://blackbox.ai/extension", type: "alternative", description: "Chrome 扩展" },
      { name: "API 文档", url: "https://blackbox.ai/api", type: "tutorial", description: "API 使用指南" }
    ],
    targetUsers: ["开发者", "学生", "研究者", "技术爱好者", "快速原型开发者"],
    difficulty: "beginner"
  },

  // ==================== AI 网站生成 ====================
  {
    id: 811,
    name: "V0",
    description: "Vercel 的 AI 生成 UI 工具",
    highlights: "React 组件生成，设计到代码",
    category: "开发工具",
    subCategory: "AI 网站生成",
    logo: "⬤",
    url: "https://v0.dev",
    isVip: true,
    price: "免费 + 付费计划",
    tags: ["免费增值", "英文", "Web"],
    features: ["AI 生成 UI", "React 组件", "Tailwind CSS", "即时预览", "代码导出", "迭代优化"],
    useCases: ["UI 原型", "组件开发", "快速建站", "设计验证", "学习参考"],
    pros: ["生成质量高", "React 生态", "即时预览", "免费可用"],
    cons: ["主要 React", "复杂布局有限", "需前端知识"],
    relatedSites: [
      { name: "v0 官网", url: "https://v0.dev", type: "official", description: "v0 官方网站" },
      { name: "Vercel 文档", url: "https://vercel.com/docs", type: "tutorial", description: "Vercel 生态文档" },
      { name: "v0 示例", url: "https://v0.dev/examples", type: "tutorial", description: "生成示例" }
    ],
    targetUsers: ["前端开发者", "React 开发者", "UI 设计师", "原型开发者", "全栈工程师"],
    difficulty: "intermediate"
  },
  {
    id: 812,
    name: "Bolt.new",
    description: "AI 驱动的全栈应用生成器",
    highlights: "提示词生成全栈应用",
    category: "开发工具",
    subCategory: "AI 网站生成",
    logo: "⚡",
    url: "https://bolt.new",
    isVip: true,
    price: "免费 + 付费计划",
    tags: ["免费增值", "英文", "Web"],
    features: ["全栈生成", "AI 对话", "实时预览", "代码编辑", "一键部署", "模板库"],
    useCases: ["快速原型", "MVP 开发", "概念验证", "学习项目", "小型应用"],
    pros: ["全栈能力", "开发速度快", "界面友好", "部署简单"],
    cons: ["复杂应用受限", "定制性有限", "高级功能付费"],
    relatedSites: [
      { name: "Bolt.new 官网", url: "https://bolt.new", type: "official", description: "Bolt.new 官方网站" },
      { name: "使用指南", url: "https://bolt.new/docs", type: "tutorial", description: "使用文档" },
      { name: "示例库", url: "https://bolt.new/examples", type: "tutorial", description: "生成示例" }
    ],
    targetUsers: ["创业者", "原型开发者", "全栈开发者", "学生", "独立开发者"],
    difficulty: "beginner"
  },
  {
    id: 813,
    name: "Durable",
    description: "AI 建站工具，30 秒生成网站",
    highlights: "极速建站，零代码",
    category: "开发工具",
    subCategory: "AI 网站生成",
    logo: "🛡️",
    url: "https://durable.co",
    isVip: true,
    price: "免费 + $12/月",
    tags: ["免费增值", "英文", "Web"],
    features: ["AI 建站", "域名注册", "托管服务", "CRM 集成", "发票工具", "营销工具"],
    useCases: ["小企业网站", "服务展示", "落地页", "个人品牌", "快速上线"],
    pros: ["建站速度极快", "零代码", "全套工具", "性价比高"],
    cons: ["定制性有限", "模板较少", "主要英文"],
    relatedSites: [
      { name: "Durable 官网", url: "https://durable.co", type: "official", description: "Durable 官方网站" },
      { name: "定价页面", url: "https://durable.co/pricing", type: "pricing", description: "价格方案" },
      { name: "示例网站", url: "https://durable.co/examples", type: "tutorial", description: "建站示例" }
    ],
    targetUsers: ["小企业主", "自由职业者", "服务提供商", "创业者", "非技术人员"],
    difficulty: "beginner"
  },
  {
    id: 814,
    name: "Framer AI",
    description: "设计工具 Framer 的 AI 建站功能",
    highlights: "设计驱动，视觉效果佳",
    category: "开发工具",
    subCategory: "AI 网站生成",
    logo: "🎨",
    url: "https://framer.com",
    isVip: true,
    price: "免费 + $5/月",
    tags: ["免费增值", "多语言", "Web"],
    features: ["AI 生成设计", "可视化编辑", "响应式布局", "动画效果", "SEO 优化", "电商功能"],
    useCases: ["设计作品集", "落地页", "营销网站", "产品展示", "个人网站"],
    pros: ["设计质量高", "可视化强", "动画效果好", "SEO 友好"],
    cons: ["学习曲线存在", "高级功能付费", "代码导出有限"],
    relatedSites: [
      { name: "Framer 官网", url: "https://framer.com", type: "official", description: "Framer 官方网站" },
      { name: "Framer 大学", url: "https://framer.com/university", type: "tutorial", description: "学习资源" },
      { name: "模板库", url: "https://framer.com/templates", type: "alternative", description: "网站模板" }
    ],
    targetUsers: ["设计师", "创意人士", "营销人员", "小企业主", "自由职业者"],
    difficulty: "intermediate"
  },
  {
    id: 815,
    name: "Lovable",
    description: "AI 全栈应用构建平台",
    highlights: "自然语言构建应用",
    category: "开发工具",
    subCategory: "AI 网站生成",
    logo: "❤️",
    url: "https://lovable.dev",
    isVip: true,
    price: "免费 + 付费计划",
    tags: ["免费增值", "英文", "Web"],
    features: ["AI 应用生成", "数据库集成", "用户认证", "API 连接", "实时协作", "版本控制"],
    useCases: ["SaaS 原型", "内部工具", "数据应用", "创业 MVP", "自动化应用"],
    pros: ["全栈能力", "开发快速", "集成丰富", "协作方便"],
    cons: ["较新产品", "生态待完善", "复杂逻辑有限"],
    relatedSites: [
      { name: "Lovable 官网", url: "https://lovable.dev", type: "official", description: "Lovable 官方网站" },
      { name: "文档中心", url: "https://docs.lovable.dev", type: "tutorial", description: "使用文档" },
      { name: "社区论坛", url: "https://discord.gg/lovable", type: "community", description: "用户社区" }
    ],
    targetUsers: ["创业者", "产品经理", "全栈开发者", "内部工具开发者", "非技术创始人"],
    difficulty: "beginner"
  },
  {
    id: 816,
    name: "10Web",
    description: "AI 驱动的 WordPress 建站平台",
    highlights: "WordPress 自动化，AI 优化",
    category: "开发工具",
    subCategory: "AI 网站生成",
    logo: "🔟",
    url: "https://10web.io",
    isVip: true,
    price: "$10+/月",
    tags: ["付费", "多语言", "Web"],
    features: ["AI 建站", "WordPress 托管", "性能优化", "自动备份", "安全保护", "电商支持"],
    useCases: ["企业网站", "电商网站", "博客建站", "客户网站", "WordPress 迁移"],
    pros: ["WordPress 生态", "性能优化好", "全套托管", "AI 辅助"],
    cons: ["绑定 WordPress", "价格中等", "学习曲线存在"],
    relatedSites: [
      { name: "10Web 官网", url: "https://10web.io", type: "official", description: "10Web 官方网站" },
      { name: "定价页面", url: "https://10web.io/pricing", type: "pricing", description: "价格方案" },
      { name: "功能介绍", url: "https://10web.io/features", type: "tutorial", description: "功能详情" }
    ],
    targetUsers: ["WordPress 开发者", "数字机构", "小企业主", "电商卖家", "博主"],
    difficulty: "intermediate"
  },
  {
    id: 817,
    name: "Relume",
    description: "AI 网站规划和设计工具",
    highlights: "站点地图生成，设计系统",
    category: "开发工具",
    subCategory: "AI 网站生成",
    logo: "📐",
    url: "https://relume.io",
    isVip: true,
    price: "免费 + $15/月",
    tags: ["免费增值", "英文", "Web"],
    features: ["AI 站点地图", "线框图生成", "设计系统", "内容规划", "Figma 导出", "Webflow 导出"],
    useCases: ["网站规划", "客户提案", "设计流程", "内容策略", "团队协作"],
    pros: ["规划能力强", "设计系统完善", "工具集成好", "提高效率"],
    cons: ["需配合其他工具", "高级功能付费", "学习成本"],
    relatedSites: [
      { name: "Relume 官网", url: "https://relume.io", type: "official", description: "Relume 官方网站" },
      { name: "Relume 库", url: "https://relume.io/relumelibrary", type: "alternative", description: "组件库" },
      { name: "定价信息", url: "https://relume.io/pricing", type: "pricing", description: "价格方案" }
    ],
    targetUsers: ["网页设计师", "UX 设计师", "数字机构", "自由职业者", "产品经理"],
    difficulty: "intermediate"
  },

  // ==================== 设计转代码 ====================
  {
    id: 818,
    name: "Builder.io",
    description: "可视化建站平台，设计转代码",
    highlights: "拖拽建站，代码导出",
    category: "开发工具",
    subCategory: "设计转代码",
    logo: "🏗️",
    url: "https://builder.io",
    isVip: true,
    price: "免费 + $20/月",
    tags: ["免费增值", "多语言", "Web"],
    features: ["可视化编辑", "设计导入", "代码生成", "A/B 测试", "多框架支持", "CMS 集成"],
    useCases: ["落地页", "营销页面", "电商页面", "内容管理", "快速迭代"],
    pros: ["可视化强大", "代码质量好", "框架支持多", "集成丰富"],
    cons: ["高级功能付费", "学习曲线", "依赖平台"],
    relatedSites: [
      { name: "Builder.io 官网", url: "https://builder.io", type: "official", description: "Builder.io 官方网站" },
      { name: "文档中心", url: "https://builder.io/docs", type: "tutorial", description: "开发文档" },
      { name: "示例库", url: "https://builder.io/examples", type: "tutorial", description: "使用示例" }
    ],
    targetUsers: ["前端开发者", "营销团队", "电商团队", "内容团队", "设计师"],
    difficulty: "intermediate"
  },
  {
    id: 819,
    name: "Anima",
    description: "设计稿转前端代码工具",
    highlights: "Figma 转代码，高保真",
    category: "开发工具",
    subCategory: "设计转代码",
    logo: "🦄",
    url: "https://animaapp.com",
    isVip: true,
    price: "免费 + $15/月",
    tags: ["免费增值", "多语言", "Web"],
    features: ["Figma 插件", "设计转代码", "响应式生成", "交互导出", "多框架支持", "团队协作"],
    useCases: ["设计交付", "原型开发", "设计系统", "快速开发", "设计验证"],
    pros: ["Figma 集成好", "代码质量高", "响应式自动", "交互保留"],
    cons: ["复杂设计有限", "高级功能付费", "需设计基础"],
    relatedSites: [
      { name: "Anima 官网", url: "https://animaapp.com", type: "official", description: "Anima 官方网站" },
      { name: "Figma 插件", url: "https://www.figma.com/community/plugin/anima", type: "alternative", description: "Figma 插件页面" },
      { name: "定价页面", url: "https://animaapp.com/pricing", type: "pricing", description: "价格方案" }
    ],
    targetUsers: ["UI 设计师", "前端开发者", "设计团队", "产品团队", "数字机构"],
    difficulty: "intermediate"
  },
  {
    id: 820,
    name: "Locofy",
    description: "设计稿转前端代码平台",
    highlights: "多设计工具支持，代码灵活",
    category: "开发工具",
    subCategory: "设计转代码",
    logo: "📱",
    url: "https://locofy.ai",
    isVip: true,
    price: "免费 + 付费计划",
    tags: ["免费增值", "多语言", "Web"],
    features: ["Figma 插件", "Adobe XD 支持", "代码生成", "响应式优化", "组件库", "多框架导出"],
    useCases: ["设计交付", "前端开发", "移动应用", "网页开发", "设计系统"],
    pros: ["多工具支持", "代码灵活", "组件化好", "免费可用"],
    cons: ["学习曲线", "复杂交互有限", "高级功能付费"],
    relatedSites: [
      { name: "Locofy 官网", url: "https://locofy.ai", type: "official", description: "Locofy 官方网站" },
      { name: "文档中心", url: "https://docs.locofy.ai", type: "tutorial", description: "使用文档" },
      { name: "博客", url: "https://locofy.ai/blog", type: "tutorial", description: "技术文章" }
    ],
    targetUsers: ["前端开发者", "UI 设计师", "移动开发者", "设计团队", "开发团队"],
    difficulty: "intermediate"
  },
  {
    id: 821,
    name: "Plasmic",
    description: "可视化网页构建器，代码集成",
    highlights: "无代码 + 代码混合",
    category: "开发工具",
    subCategory: "设计转代码",
    logo: "🔮",
    url: "https://plasmic.app",
    isVip: true,
    price: "免费 + $20/月",
    tags: ["免费增值", "英文", "Web"],
    features: ["可视化构建", "代码组件", "React 集成", "CMS 连接", "发布托管", "团队协作"],
    useCases: ["营销页面", "产品页面", "内部工具", "快速原型", "内容站点"],
    pros: ["灵活度高", "代码集成好", "可视化强", "协作方便"],
    cons: ["学习曲线陡", "高级功能付费", "React 为主"],
    relatedSites: [
      { name: "Plasmic 官网", url: "https://plasmic.app", type: "official", description: "Plasmic 官方网站" },
      { name: "文档中心", url: "https://docs.plasmic.app", type: "tutorial", description: "开发文档" },
      { name: "模板库", url: "https://plasmic.app/templates", type: "alternative", description: "项目模板" }
    ],
    targetUsers: ["前端开发者", "产品团队", "营销团队", "创业者", "开发者"],
    difficulty: "intermediate"
  },
  {
    id: 822,
    name: "Webflow AI",
    description: "Webflow 的 AI 辅助设计工具",
    highlights: "设计 + CMS+AI，专业建站",
    category: "开发工具",
    subCategory: "设计转代码",
    logo: "💠",
    url: "https://webflow.com",
    isVip: true,
    price: "免费 + $14/月",
    tags: ["免费增值", "多语言", "Web"],
    features: ["AI 内容生成", "可视化设计", "CMS 系统", "电商功能", "SEO 工具", "托管服务"],
    useCases: ["专业网站", "企业站点", "电商平台", "内容站点", "作品集"],
    pros: ["功能全面", "设计自由度高", "CMS 强大", "SEO 友好"],
    cons: ["学习曲线陡", "价格较高", "锁定平台"],
    relatedSites: [
      { name: "Webflow 官网", url: "https://webflow.com", type: "official", description: "Webflow 官方网站" },
      { name: "Webflow 大学", url: "https://university.webflow.com", type: "tutorial", description: "学习资源" },
      { name: "定价页面", url: "https://webflow.com/pricing", type: "pricing", description: "价格方案" }
    ],
    targetUsers: ["网页设计师", "数字机构", "企业客户", "电商卖家", "内容创作者"],
    difficulty: "advanced"
  },

  // ==================== 开源工具 ====================
  {
    id: 823,
    name: "Continue",
    description: "开源 AI 代码助手，本地运行",
    highlights: "开源免费，隐私安全",
    category: "开发工具",
    subCategory: "开源工具",
    logo: "▶️",
    url: "https://continue.dev",
    isVip: false,
    price: "免费开源",
    tags: ["开源", "多语言", "IDE 插件"],
    features: ["开源免费", "本地模型", "多 LLM 支持", "自定义配置", "隐私保护", "VS Code 集成"],
    useCases: ["日常编码", "敏感项目", "自定义工作流", "学习研究", "团队协作"],
    pros: ["完全免费", "隐私安全", "高度可定制", "社区活跃"],
    cons: ["需自行配置", "模型质量依赖", "技术支持有限"],
    relatedSites: [
      { name: "Continue 官网", url: "https://continue.dev", type: "official", description: "Continue 官方网站" },
      { name: "GitHub 仓库", url: "https://github.com/continuedev/continue", type: "community", description: "开源代码" },
      { name: "文档中心", url: "https://docs.continue.dev", type: "tutorial", description: "使用文档" }
    ],
    targetUsers: ["开源爱好者", "隐私敏感开发者", "学生", "研究者", "自托管团队"],
    difficulty: "intermediate"
  },
  {
    id: 824,
    name: "Mintlify",
    description: "AI 驱动的技术文档平台",
    highlights: "文档自动生成，美观专业",
    category: "开发工具",
    subCategory: "开源工具",
    logo: "🌿",
    url: "https://mintlify.com",
    isVip: true,
    price: "免费 + 付费计划",
    tags: ["免费增值", "英文", "Web"],
    features: ["AI 文档生成", "代码扫描", "自动更新", "美观模板", "SEO 优化", "分析统计"],
    useCases: ["API 文档", "产品文档", "开发指南", "技术博客", "知识库"],
    pros: ["文档质量高", "自动化强", "设计美观", "SEO 友好"],
    cons: ["高级功能付费", "主要英文", "定制性有限"],
    relatedSites: [
      { name: "Mintlify 官网", url: "https://mintlify.com", type: "official", description: "Mintlify 官方网站" },
      { name: "文档示例", url: "https://mintlify.com/examples", type: "tutorial", description: "文档示例" },
      { name: "定价页面", url: "https://mintlify.com/pricing", type: "pricing", description: "价格方案" }
    ],
    targetUsers: ["技术团队", "API 开发者", "开源项目", "技术作者", "开发者关系"],
    difficulty: "beginner"
  },
  {
    id: 825,
    name: "Sourcery",
    description: "开源代码审查和重构工具",
    highlights: "实时代码审查，自动重构",
    category: "开发工具",
    subCategory: "开源工具",
    logo: "🧙",
    url: "https://sourcery.ai",
    isVip: true,
    price: "免费 + $9/月",
    tags: ["免费增值", "多语言", "IDE 插件"],
    features: ["实时审查", "自动重构", "代码质量", "多语言支持", "自定义规则", "团队协作"],
    useCases: ["代码审查", "技术债务清理", "代码规范", "学习改进", "团队标准化"],
    pros: ["实时反馈", "重构建议好", "免费可用", "集成方便"],
    cons: ["高级功能付费", "规则需配置", "偶尔误报"],
    relatedSites: [
      { name: "Sourcery 官网", url: "https://sourcery.ai", type: "official", description: "Sourcery 官方网站" },
      { name: "文档中心", url: "https://docs.sourcery.ai", type: "tutorial", description: "使用文档" },
      { name: "博客", url: "https://sourcery.ai/blog", type: "tutorial", description: "技术文章" }
    ],
    targetUsers: ["开发者", "代码审查员", "技术负责人", "学习者", "开发团队"],
    difficulty: "intermediate"
  }
];

// 导出工具总数
export const TOTAL_TOOLS = DEV_TOOLS.length;

// 导出子分类列表
export const SUB_CATEGORIES = [
  "AI 代码编辑器",
  "代码补全",
  "在线开发环境",
  "代码搜索/审查",
  "AI 网站生成",
  "设计转代码",
  "开源工具"
];

// 按子分类筛选工具
export function getToolsBySubCategory(subCategory: string): EnhancedTool[] {
  return DEV_TOOLS.filter(tool => tool.subCategory === subCategory);
}

// 按难度筛选工具
export function getToolsByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced'): EnhancedTool[] {
  return DEV_TOOLS.filter(tool => tool.difficulty === difficulty);
}

// 搜索工具
export function searchTools(query: string): EnhancedTool[] {
  const lowerQuery = query.toLowerCase();
  return DEV_TOOLS.filter(tool =>
    tool.name.toLowerCase().includes(lowerQuery) ||
    tool.description.toLowerCase().includes(lowerQuery) ||
    tool.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}
