// 学习教育分类 - 增强版工具数据
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
  url: string;;
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

export const EDUCATION_TOOLS: EnhancedTool[] = [
  // ==================== 语言学习 ====================
  {
    id: 901,
    name: "Duolingo Max",
    description: "全球最受欢迎的语言学习应用，AI 增强版",
    highlights: "游戏化学习，AI 角色扮演对话",
    category: "学习教育",
    subCategory: "语言学习",
    logo: "🦉",
    url: "https://duolingo.com",
    price: "免费 + $13.99/月 (Max)",
    tags: ["免费增值", "多语言", "App"],
    features: ["AI 角色扮演", "语法解释 AI", "游戏化课程", "多语言学习", "进度追踪", "离线学习"],
    useCases: ["日常语言学习", "旅行语言准备", "考试备考", "词汇积累", "听力训练"],
    pros: ["游戏化有趣", "AI 功能强大", "课程丰富", "免费版本实用"],
    cons: ["高级功能需付费", "深度语法有限", "口语练习较少"],
    relatedSites: [
      { name: "Duolingo 官网", url: "https://duolingo.com", type: "official", description: "Duolingo 官方网站" },
      { name: "Duolingo 博客", url: "https://blog.duolingo.com", type: "tutorial", description: "语言学习技巧和产品更新" },
      { name: "Duolingo 学校版", url: "https://schools.duolingo.com", type: "alternative", description: " educators 专用版本" }
    ],
    targetUsers: ["语言初学者", "学生", "旅行者", "自我提升者", "终身学习者"],
    difficulty: "beginner"
  },
  {
    id: 902,
    name: "ELSA Speak",
    description: "AI 驱动的英语发音纠正应用",
    highlights: "语音识别精准，发音反馈即时",
    category: "学习教育",
    subCategory: "语言学习",
    logo: "🎤",
    url: "https://elsaspeak.com",
    price: "免费 + $11.99/月",
    tags: ["免费增值", "英文", "App"],
    features: ["AI 发音分析", "实时反馈", "个性化课程", "语音识别", "进度追踪", "情景对话"],
    useCases: ["发音纠正", "口语提升", "考试准备", "职场英语", "日常对话"],
    pros: ["发音识别精准", "反馈即时详细", "课程实用", "性价比高"],
    cons: ["仅支持英语", "高级功能需付费", "需要持续练习"],
    relatedSites: [
      { name: "ELSA Speak 官网", url: "https://elsaspeak.com", type: "official", description: "ELSA 官方网站" },
      { name: "ELSA 博客", url: "https://elsaspeak.com/blog", type: "tutorial", description: "英语学习技巧和资源" },
      { name: "ELSA 企业版", url: "https://elsaspeak.com/business", type: "alternative", description: "企业培训解决方案" }
    ],
    targetUsers: ["英语学习者", "职场人士", "留学生", "教师", "演讲者"],
    difficulty: "beginner"
  },
  {
    id: 903,
    name: "Speak",
    description: "AI 驱动的口语练习平台，真实对话场景",
    highlights: "真实场景对话，AI 即时反馈",
    category: "学习教育",
    subCategory: "语言学习",
    logo: "💬",
    url: "https://speak.com",
    price: "$11.99/月",
    tags: ["付费", "多语言", "App"],
    features: ["AI 对话练习", "场景模拟", "发音纠正", "语法反馈", "个性化学习", "进度追踪"],
    useCases: ["口语练习", "情景对话", "旅行准备", "商务沟通", "日常交流"],
    pros: ["真实场景模拟", "AI 反馈精准", "学习效率高", "界面友好"],
    cons: ["仅订阅制", "课程数量有限", "需要主动练习"],
    relatedSites: [
      { name: "Speak 官网", url: "https://speak.com", type: "official", description: "Speak 官方网站" },
      { name: "Speak 学习博客", url: "https://speak.com/blog", type: "tutorial", description: "语言学习资源" },
      { name: "Speak 帮助文档", url: "https://help.speak.com", type: "tutorial", description: "使用指南和 FAQ" }
    ],
    targetUsers: ["口语学习者", "职场人士", "留学生", "旅行者", "语言爱好者"],
    difficulty: "beginner"
  },

  // ==================== AI 辅导 ====================
  {
    id: 904,
    name: "Khanmigo",
    description: "可汗学院的 AI 学习助手，个性化辅导",
    highlights: "苏格拉底式引导，不直接给答案",
    category: "学习教育",
    subCategory: "AI 辅导",
    logo: "🎓",
    url: "https://khanacademy.org/khanmigo",
    price: "$4/月",
    tags: ["付费", "多语言", "Web"],
    features: ["AI 个性化辅导", "苏格拉底式提问", "学科覆盖广", "进度追踪", "教师工具", "家长监控"],
    useCases: ["课后辅导", "作业帮助", "考试准备", "知识巩固", "自主学习"],
    pros: ["引导式学习", "价格实惠", "可汗学院生态", "教育专业"],
    cons: ["需可汗账户", "功能仍在完善", "主要面向 K12"],
    relatedSites: [
      { name: "Khan Academy 官网", url: "https://khanacademy.org", type: "official", description: "可汗学院官方网站" },
      { name: "Khanmigo 介绍", url: "https://khanacademy.org/khanmigo", type: "official", description: "Khanmigo 产品页面" },
      { name: "可汗学院博客", url: "https://blog.khanacademy.org", type: "tutorial", description: "教育资源和更新" }
    ],
    targetUsers: ["K12 学生", "家长", "教师", "自学者", "家庭学校"],
    difficulty: "beginner"
  },
  {
    id: 905,
    name: "Coursera Coach",
    description: "Coursera 的 AI 学习助手，课程辅导",
    highlights: "名校课程配套，AI 学习指导",
    category: "学习教育",
    subCategory: "AI 辅导",
    logo: "📚",
    url: "https://coursera.org",
    price: "免费 + 课程费用",
    tags: ["免费增值", "多语言", "Web"],
    features: ["AI 学习指导", "课程问答", "学习规划", "知识总结", "作业辅导", "证书追踪"],
    useCases: ["在线课程学习", "技能提升", "职业转型", "学位项目", "专业认证"],
    pros: ["名校课程资源", "AI 辅助学习", "证书认可度高", "免费旁听"],
    cons: ["证书需付费", "AI 功能有限", "课程节奏固定"],
    relatedSites: [
      { name: "Coursera 官网", url: "https://coursera.org", type: "official", description: "Coursera 官方网站" },
      { name: "Coursera 博客", url: "https://blog.coursera.org", type: "tutorial", description: "学习资源和职业建议" },
      { name: "Coursera 企业版", url: "https://coursera.org/business", type: "alternative", description: "企业培训方案" }
    ],
    targetUsers: ["大学生", "职场人士", "终身学习者", "职业转型者", "技能提升者"],
    difficulty: "intermediate"
  },
  {
    id: 906,
    name: "Socratic",
    description: "Google 的 AI 作业辅导应用，拍照解题",
    highlights: "拍照解题，步骤详解",
    category: "学习教育",
    subCategory: "AI 辅导",
    logo: "📸",
    url: "https://socratic.org",
    price: "免费",
    tags: ["免费", "多语言", "App"],
    features: ["拍照解题", "步骤详解", "多学科支持", "视频讲解", "概念解释", "资源推荐"],
    useCases: ["作业帮助", "难题解答", "概念理解", "考试复习", "自学辅导"],
    pros: ["完全免费", "Google 支持", "解题步骤清晰", "多学科覆盖"],
    cons: ["可能依赖性强", "高阶内容有限", "需网络连接"],
    relatedSites: [
      { name: "Socratic 官网", url: "https://socratic.org", type: "official", description: "Socratic 官方网站" },
      { name: "Google 教育", url: "https://edu.google.com", type: "official", description: "Google 教育资源" },
      { name: "Socratic 帮助", url: "https://support.socratic.org", type: "tutorial", description: "使用指南" }
    ],
    targetUsers: ["中学生", "高中生", "大学生", "家长", "教师"],
    difficulty: "beginner"
  },

  // ==================== 学习卡片/测验 ====================
  {
    id: 907,
    name: "Quizlet AI",
    description: "智能学习卡片和测验平台",
    highlights: "AI 生成学习材料，多种学习模式",
    category: "学习教育",
    subCategory: "学习卡片/测验",
    logo: "📇",
    url: "https://quizlet.com",
    price: "免费 + $7.99/月",
    tags: ["免费增值", "多语言", "Web"],
    features: ["AI 卡片生成", "多种学习模式", "测验练习", "进度追踪", "协作学习", "移动应用"],
    useCases: ["考试复习", "词汇记忆", "概念学习", "小组学习", "知识巩固"],
    pros: ["学习模式多样", "AI 功能实用", "免费版本好", "社区资源丰富"],
    cons: ["高级功能需付费", "质量参差不齐", "广告较多"],
    relatedSites: [
      { name: "Quizlet 官网", url: "https://quizlet.com", type: "official", description: "Quizlet 官方网站" },
      { name: "Quizlet 博客", url: "https://quizlet.com/blog", type: "tutorial", description: "学习技巧和方法" },
      { name: "Quizlet 教师版", url: "https://quizlet.com/teachers", type: "alternative", description: "教师专用工具" }
    ],
    targetUsers: ["学生", "教师", "自学者", "备考者", "语言学习者"],
    difficulty: "beginner"
  },
  {
    id: 908,
    name: "Conker",
    description: "AI 测验和表单生成器",
    highlights: "快速生成测验，多种题型",
    category: "学习教育",
    subCategory: "学习卡片/测验",
    logo: "🌰",
    url: "https://conker.ai",
    price: "免费 + 付费计划",
    tags: ["免费增值", "英文", "Web"],
    features: ["AI 测验生成", "多种题型", "自动评分", "导出功能", "模板库", "协作分享"],
    useCases: ["课堂测验", "作业布置", "知识检测", "培训考核", "自我测试"],
    pros: ["生成速度快", "题型丰富", "免费额度足", "易于使用"],
    cons: ["主要面向教师", "中文支持有限", "高级功能需付费"],
    relatedSites: [
      { name: "Conker 官网", url: "https://conker.ai", type: "official", description: "Conker 官方网站" },
      { name: "Conker 帮助", url: "https://conker.ai/help", type: "tutorial", description: "使用指南" },
      { name: "Conker 博客", url: "https://conker.ai/blog", type: "tutorial", description: "教育技术资源" }
    ],
    targetUsers: ["教师", "培训师", "教育工作者", "HR", "内容创作者"],
    difficulty: "beginner"
  },
  {
    id: 909,
    name: "Formative",
    description: "实时课堂评估和反馈平台",
    highlights: "实时反馈，数据驱动教学",
    category: "学习教育",
    subCategory: "学习卡片/测验",
    logo: "📊",
    url: "https://goformative.com",
    price: "免费 + $20+/月",
    tags: ["免费增值", "多语言", "Web"],
    features: ["实时评估", "自动评分", "数据分析", "多媒体题目", "同伴互评", "学习报告"],
    useCases: ["课堂测验", "形成性评估", "作业批改", "学习追踪", "教学调整"],
    pros: ["实时反馈好", "数据类型丰富", "教师工具全", "免费版本实用"],
    cons: ["高级版价格高", "学习曲线存在", "主要面向学校"],
    relatedSites: [
      { name: "Formative 官网", url: "https://goformative.com", type: "official", description: "Formative 官方网站" },
      { name: "Formative 博客", url: "https://goformative.com/blog", type: "tutorial", description: "教学策略和资源" },
      { name: "Formative 帮助", url: "https://help.goformative.com", type: "tutorial", description: "使用指南和教程" }
    ],
    targetUsers: ["K12 教师", "学校管理员", "教育工作者", "培训师", "教育机构"],
    difficulty: "intermediate"
  },

  // ==================== 数学学习 ====================
  {
    id: 910,
    name: "Photomath",
    description: "拍照解数学题应用，步骤详解",
    highlights: "拍照即解，步骤清晰",
    category: "学习教育",
    subCategory: "数学学习",
    logo: "📐",
    url: "https://photomath.com",
    price: "免费 + $9.99/月",
    tags: ["免费增值", "多语言", "App"],
    features: ["拍照解题", "步骤详解", "多种解法", "图形计算器", "知识点讲解", "练习推荐"],
    useCases: ["作业帮助", "数学学习", "考试复习", "概念理解", "自学辅导"],
    pros: ["识别准确", "步骤详细", "免费功能强", "界面友好"],
    cons: ["高级功能需付费", "可能产生依赖", "复杂题有限"],
    relatedSites: [
      { name: "Photomath 官网", url: "https://photomath.com", type: "official", description: "Photomath 官方网站" },
      { name: "Photomath 博客", url: "https://photomath.com/blog", type: "tutorial", description: "数学学习资源" },
      { name: "Photomath 帮助", url: "https://photomath.com/help", type: "tutorial", description: "使用指南" }
    ],
    targetUsers: ["中学生", "高中生", "大学生", "家长", "数学教师"],
    difficulty: "beginner"
  },
  {
    id: 911,
    name: "Carnegie Learning",
    description: "AI 驱动的数学学习平台，个性化路径",
    highlights: "自适应学习，数据驱动",
    category: "学习教育",
    subCategory: "数学学习",
    logo: "🧮",
    url: "https://carnegielearning.com",
    price: "定制报价",
    tags: ["付费", "英文", "Web"],
    features: ["自适应学习", "AI 辅导", "实时反馈", "数据分析", "课程完整", "教师仪表板"],
    useCases: ["数学课程", "个性化学习", "学校教学", "课后辅导", "能力提升"],
    pros: ["自适应强", "研究支持", "数据驱动", "学校集成好"],
    cons: ["价格不透明", "主要面向学校", "个人使用难"],
    relatedSites: [
      { name: "Carnegie Learning 官网", url: "https://carnegielearning.com", type: "official", description: "官方网站" },
      { name: "Carnegie 研究", url: "https://carnegielearning.com/research", type: "tutorial", description: "教育研究成果" },
      { name: "Carnegie 产品", url: "https://carnegielearning.com/products", type: "official", description: "产品线介绍" }
    ],
    targetUsers: ["学校", "学区", "教师", "学生", "教育机构"],
    difficulty: "intermediate"
  },
  {
    id: 912,
    name: "Wolfram Alpha",
    description: "计算知识引擎，数学和科学计算",
    highlights: "强大计算引擎，知识全面",
    category: "学习教育",
    subCategory: "数学学习",
    logo: "🔮",
    url: "https://wolframalpha.com",
    price: "免费 + $5/月 (Pro)",
    tags: ["免费增值", "多语言", "Web"],
    features: ["计算引擎", "知识查询", "步骤解答", "数据可视化", "科学计算", "API 访问"],
    useCases: ["数学计算", "科学查询", "作业帮助", "研究支持", "数据分析"],
    pros: ["计算能力强大", "知识覆盖面广", "免费版本可用", "专业可靠"],
    cons: ["步骤解答需付费", "界面较复杂", "学习成本高"],
    relatedSites: [
      { name: "Wolfram Alpha 官网", url: "https://wolframalpha.com", type: "official", description: "官方网站" },
      { name: "Wolfram 数学", url: "https://mathworld.wolfram.com", type: "tutorial", description: "数学百科全书" },
      { name: "Wolfram 语言", url: "https://wolfram.com/language", type: "tutorial", description: "Wolfram 语言资源" }
    ],
    targetUsers: ["学生", "研究人员", "工程师", "教师", "数据分析师"],
    difficulty: "intermediate"
  },

  // ==================== 作业帮助 ====================
  {
    id: 913,
    name: "Brainly",
    description: "全球最大作业帮助社区，AI 增强",
    highlights: "社区互助，AI 解答",
    category: "学习教育",
    subCategory: "作业帮助",
    logo: "🧠",
    url: "https://brainly.com",
    price: "免费 + $14.99/月",
    tags: ["免费增值", "多语言", "App"],
    features: ["作业问答", "AI 解答", "社区互助", "学科覆盖广", "专家验证", "步骤详解"],
    useCases: ["作业帮助", "难题解答", "概念理解", "考试准备", "同伴学习"],
    pros: ["社区活跃", "响应快速", "多学科支持", "免费可用"],
    cons: ["质量参差不齐", "高级功能需付费", "可能依赖"],
    relatedSites: [
      { name: "Brainly 官网", url: "https://brainly.com", type: "official", description: "Brainly 官方网站" },
      { name: "Brainly 博客", url: "https://brainly.com/blog", type: "tutorial", description: "学习资源和技巧" },
      { name: "Brainly 家长", url: "https://brainly.com/parents", type: "alternative", description: "家长资源" }
    ],
    targetUsers: ["中学生", "高中生", "大学生", "家长", "教师"],
    difficulty: "beginner"
  },

  // ==================== 教师工具 ====================
  {
    id: 914,
    name: "Magic School AI",
    description: "教师 AI 助手，教学资源生成",
    highlights: "50+ 教学工具，一键生成",
    category: "学习教育",
    subCategory: "教师工具",
    logo: "🪄",
    url: "https://magicschool.ai",
    price: "免费 + $12.99/月",
    tags: ["免费增值", "多语言", "Web"],
    features: ["教案生成", "测验创建", "差异化教学", "邮件撰写", " rubric 生成", "IEP 支持"],
    useCases: ["备课", "作业设计", "评估创建", "家长沟通", "教学规划"],
    pros: ["工具丰富", "节省时间", "免费版本好", "教师导向"],
    cons: ["高级功能需付费", "需人工审核", "中文支持有限"],
    relatedSites: [
      { name: "Magic School 官网", url: "https://magicschool.ai", type: "official", description: "官方网站" },
      { name: "Magic School 博客", url: "https://magicschool.ai/blog", type: "tutorial", description: "教学资源和更新" },
      { name: "Magic School 社区", url: "https://discord.gg/magicschool", type: "community", description: "教师交流社区" }
    ],
    targetUsers: ["K12 教师", "学校管理员", "教育工作者", "培训师", "课程设计师"],
    difficulty: "beginner"
  },
  {
    id: 915,
    name: "Diffit",
    description: "AI 教学资源生成器，差异化教学",
    highlights: "一键生成分层材料",
    category: "学习教育",
    subCategory: "教师工具",
    logo: "📝",
    url: "https://web.diffit.me",
    price: "免费 + 付费计划",
    tags: ["免费增值", "多语言", "Web"],
    features: ["资源生成", "分层教学", "阅读理解", "词汇练习", "问答生成", "多格式导出"],
    useCases: ["备课", "差异化教学", "阅读材料", "课堂活动", "作业设计"],
    pros: ["生成速度快", "分层实用", "免费额度足", "易于使用"],
    cons: ["高级功能需付费", "质量需审核", "主要面向英文"],
    relatedSites: [
      { name: "Diffit 官网", url: "https://web.diffit.me", type: "official", description: "Diffit 官方网站" },
      { name: "Diffit 帮助", url: "https://help.diffit.me", type: "tutorial", description: "使用指南" },
      { name: "Diffit 博客", url: "https://diffit.me/blog", type: "tutorial", description: "教学资源分享" }
    ],
    targetUsers: ["教师", "教育工作者", "课程设计师", "家教", "学校管理员"],
    difficulty: "beginner"
  },
  {
    id: 916,
    name: "Twee",
    description: "AI 英语教学助手，课程材料生成",
    highlights: "英语教学专用，材料丰富",
    category: "学习教育",
    subCategory: "教师工具",
    logo: "🐝",
    url: "https://twee.com",
    price: "免费 + $9/月",
    tags: ["免费增值", "英文", "Web"],
    features: ["课程计划", "练习生成", "视频活动", "对话创建", "语法练习", "词汇活动"],
    useCases: ["英语备课", "课堂活动", "作业设计", "考试准备", "自学材料"],
    pros: ["英语教学专精", "工具丰富", "性价比高", "免费版本实用"],
    cons: ["仅支持英语", "高级功能需付费", "需人工调整"],
    relatedSites: [
      { name: "Twee 官网", url: "https://twee.com", type: "official", description: "Twee 官方网站" },
      { name: "Twee 博客", url: "https://twee.com/blog", type: "tutorial", description: "英语教学资源" },
      { name: "Twee 帮助", url: "https://twee.com/help", type: "tutorial", description: "使用指南" }
    ],
    targetUsers: ["英语教师", "ESL 教师", "语言培训师", "家教", "内容创作者"],
    difficulty: "beginner"
  },
  {
    id: 917,
    name: "Education Copilot",
    description: "AI 教学助手，课程和资源生成",
    highlights: "全方位教学支持",
    category: "学习教育",
    subCategory: "教师工具",
    logo: "🎒",
    url: "https://educationcopilot.com",
    price: "$10/月",
    tags: ["付费", "多语言", "Web"],
    features: ["课程计划", "工作表生成", "PPT 创建", "邮件撰写", "评估设计", "学生反馈"],
    useCases: ["备课", "教学资源", "课堂管理", "家长沟通", "专业发展"],
    pros: ["功能全面", "节省时间", "模板丰富", "易于使用"],
    cons: ["仅订阅制", "质量需审核", "中文支持有限"],
    relatedSites: [
      { name: "Education Copilot 官网", url: "https://educationcopilot.com", type: "official", description: "官方网站" },
      { name: "Education Copilot 博客", url: "https://educationcopilot.com/blog", type: "tutorial", description: "教学资源" },
      { name: "Education Copilot 帮助", url: "https://help.educationcopilot.com", type: "tutorial", description: "使用指南" }
    ],
    targetUsers: ["教师", "教育工作者", "学校管理员", "培训师", "课程设计师"],
    difficulty: "beginner"
  },

  // ==================== 中文学习平台 ====================
  {
    id: 918,
    name: "学堂在线 AI",
    description: "清华大学慕课平台，AI 学习助手",
    highlights: "名校课程，本土化强",
    category: "学习教育",
    subCategory: "中文学习平台",
    logo: "🎓",
    url: "https://xuetangx.com",
    price: "免费 + 证书费用",
    tags: ["免费增值", "中文", "Web"],
    features: ["名校课程", "AI 辅导", "学习追踪", "证书认证", "讨论区", "移动应用"],
    useCases: ["大学课程", "技能提升", "职业认证", "终身学习", "考研准备"],
    pros: ["清华背书", "课程质量高", "中文友好", "证书认可"],
    cons: ["证书需付费", "AI 功能有限", "互动较少"],
    relatedSites: [
      { name: "学堂在线官网", url: "https://xuetangx.com", type: "official", description: "学堂在线官方网站" },
      { name: "学堂在线博客", url: "https://xuetangx.com/blog", type: "tutorial", description: "学习资源和更新" },
      { name: "学堂在线企业版", url: "https://xuetangx.com/enterprise", type: "alternative", description: "企业培训方案" }
    ],
    targetUsers: ["大学生", "职场人士", "考研学生", "终身学习者", "技能提升者"],
    difficulty: "intermediate"
  },
  {
    id: 919,
    name: "网易有道 AI",
    description: "网易有道智能学习平台，全科辅导",
    highlights: "AI 精准学，本土化强",
    category: "学习教育",
    subCategory: "中文学习平台",
    logo: "📖",
    url: "https://youdao.com",
    price: "免费 + 会员服务",
    tags: ["免费增值", "中文", "App"],
    features: ["AI 精准学", "全科辅导", "错题本", "学习规划", "真题练习", "名师课程"],
    useCases: ["K12 辅导", "考试准备", "英语学习", "作业帮助", "能力提升"],
    pros: ["本土化好", "AI 精准学", "资源丰富", "免费功能多"],
    cons: ["高级功能需付费", "广告较多", "质量参差不齐"],
    relatedSites: [
      { name: "网易有道官网", url: "https://youdao.com", type: "official", description: "网易有道官方网站" },
      { name: "有道精品课", url: "https://ke.youdao.com", type: "alternative", description: "在线课程平台" },
      { name: "有道词典", url: "https://dict.youdao.com", type: "alternative", description: "词典和翻译工具" }
    ],
    targetUsers: ["K12 学生", "家长", "教师", "自学者", "考试备考者"],
    difficulty: "beginner"
  },

  // ==================== 更多语言学习工具 ====================
  {
    id: 920,
    name: "Knowji",
    description: "AI 词汇学习应用，科学记忆法",
    highlights: "间隔重复，高效记忆",
    category: "学习教育",
    subCategory: "语言学习",
    logo: "🧠",
    url: "https://knowji.com",
    price: "$9.99/应用",
    tags: ["付费", "多语言", "App"],
    features: ["间隔重复", "发音指导", "词根词缀", "例句丰富", "进度追踪", "离线学习"],
    useCases: ["词汇记忆", "考试准备", "语言学习", "能力提升", "日常积累"],
    pros: ["记忆科学", "发音标准", "内容专业", "离线可用"],
    cons: ["按应用收费", "功能单一", "界面较旧"],
    relatedSites: [
      { name: "Knowji 官网", url: "https://knowji.com", type: "official", description: "Knowji 官方网站" },
      { name: "Knowji 博客", url: "https://knowji.com/blog", type: "tutorial", description: "词汇学习技巧" },
      { name: "Knowji 支持", url: "https://knowji.com/support", type: "tutorial", description: "使用帮助" }
    ],
    targetUsers: ["语言学习者", "考试备考者", "学生", "职场人士", "终身学习者"],
    difficulty: "beginner"
  },

  // ==================== 更多 AI 辅导工具 ====================
  {
    id: 921,
    name: "Grammarly Edu",
    description: "教育版写作助手，语法和写作指导",
    highlights: "写作反馈详细，教育专用",
    category: "学习教育",
    subCategory: "AI 辅导",
    logo: "✍️",
    url: "https://grammarly.com/edu",
    price: "免费 + $12/月",
    tags: ["免费增值", "多语言", "Web"],
    features: ["语法检查", "写作建议", "抄袭检测", "引用格式", "语气调整", "教育折扣"],
    useCases: ["论文写作", "作业批改", "学术写作", "邮件撰写", "简历优化"],
    pros: ["反馈详细", "教育折扣", "集成广泛", "免费版本好"],
    cons: ["高级功能需付费", "主要支持英文", "可能依赖"],
    relatedSites: [
      { name: "Grammarly 官网", url: "https://grammarly.com", type: "official", description: "Grammarly 官方网站" },
      { name: "Grammarly 教育版", url: "https://grammarly.com/edu", type: "official", description: "教育专用页面" },
      { name: "Grammarly 博客", url: "https://grammarly.com/blog", type: "tutorial", description: "写作技巧和资源" }
    ],
    targetUsers: ["学生", "教师", "研究人员", "学术作者", "职场人士"],
    difficulty: "beginner"
  },

  // ==================== 更多数学学习工具 ====================
  {
    id: 922,
    name: "Century Tech",
    description: "AI 学习平台，个性化学习路径",
    highlights: "神经科学驱动，自适应学习",
    category: "学习教育",
    subCategory: "AI 辅导",
    logo: "🧬",
    url: "https://century.tech",
    price: "定制报价",
    tags: ["付费", "多语言", "Web"],
    features: ["自适应学习", "AI 推荐", "知识图谱", "实时分析", "教师仪表板", "学校集成"],
    useCases: ["个性化学习", "学校教学", "课后辅导", "能力提升", "考试准备"],
    pros: ["神经科学基础", "自适应强", "数据分析好", "学校支持"],
    cons: ["价格不透明", "主要面向学校", "实施周期长"],
    relatedSites: [
      { name: "Century Tech 官网", url: "https://century.tech", type: "official", description: "Century Tech 官方网站" },
      { name: "Century 研究", url: "https://century.tech/research", type: "tutorial", description: "教育研究成果" },
      { name: "Century 博客", url: "https://century.tech/blog", type: "tutorial", description: "教育技术资源" }
    ],
    targetUsers: ["学校", "学区", "教师", "学生", "教育机构"],
    difficulty: "intermediate"
  }
];

// 导出工具总数
export const TOTAL_TOOLS = EDUCATION_TOOLS.length;

// 导出子分类列表
export const SUB_CATEGORIES = [
  "语言学习",
  "AI 辅导",
  "学习卡片/测验",
  "数学学习",
  "作业帮助",
  "教师工具",
  "中文学习平台"
];

// 按子分类筛选工具
export function getToolsBySubCategory(subCategory: string): EnhancedTool[] {
  return EDUCATION_TOOLS.filter(tool => tool.subCategory === subCategory);
}

// 按难度筛选工具
export function getToolsByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced'): EnhancedTool[] {
  return EDUCATION_TOOLS.filter(tool => tool.difficulty === difficulty);
}

// 搜索工具
export function searchTools(query: string): EnhancedTool[] {
  const lowerQuery = query.toLowerCase();
  return EDUCATION_TOOLS.filter(tool =>
    tool.name.toLowerCase().includes(lowerQuery) ||
    tool.description.toLowerCase().includes(lowerQuery) ||
    tool.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}
