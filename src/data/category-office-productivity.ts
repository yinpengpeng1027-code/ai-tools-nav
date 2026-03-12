import type { EnhancedTool, RelatedSite } from '../types';

export const officeProductivityTools: EnhancedTool[] = [
  {
    id: 1,
    name: 'Notion AI',
    description: '集成 AI 的智能工作空间，支持文档写作、知识管理和团队协作',
    highlights: 'AI 写作助手 + 知识库管理，一站式工作平台',
    category: '办公效率',
    subCategory: '知识管理',
    logo: 'https://www.notion.so/images/logo-ios.png',
    url: 'https://www.notion.so/product/ai',
    isVip: true,
    price: '$10/月',
    tags: ['AI 写作', '知识库', '团队协作', '笔记管理'],
    features: [
      'AI 自动生成文档内容',
      '智能摘要和要点提取',
      '多语言翻译支持',
      '语法检查和润色',
      '模板智能推荐',
      '跨设备实时同步'
    ],
    useCases: [
      '会议纪要自动生成',
      '项目文档协作编写',
      '个人知识库整理',
      '研究资料归纳总结',
      '团队 Wiki 建设'
    ],
    pros: [
      '功能全面，集成度高',
      'AI 能力深度整合',
      '模板生态丰富',
      '跨平台体验优秀'
    ],
    cons: [
      '学习曲线较陡',
      '离线功能有限',
      '高级功能需付费'
    ],
    relatedSites: [
      { name: 'Notion 官网', url: 'https://www.notion.so', type: 'official', description: 'Notion 官方网站和产品介绍' },
      { name: 'Notion 模板库', url: 'https://www.notion.so/templates', type: 'tutorial', description: '官方模板资源库' },
      { name: 'Notion 社区', url: 'https://www.notion.community', type: 'community', description: '用户交流和经验分享' },
      { name: 'Notion AI 定价', url: 'https://www.notion.so/pricing', type: 'pricing', description: '详细价格方案' }
    ],
    targetUsers: ['知识工作者', '学生', '研究人员', '项目经理', '内容创作者'],
    difficulty: 'intermediate'
  },
  {
    id: 2,
    name: 'Microsoft Copilot',
    description: '微软 AI 助手，深度集成 Office 套件，提升办公效率',
    highlights: 'Office 全家桶 AI 赋能，企业级安全合规',
    category: '办公效率',
    subCategory: 'AI 办公套件',
    logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/Copilot%20logo',
    url: 'https://copilot.microsoft.com',
    isVip: true,
    price: '$20/月 (Microsoft 365)',
    tags: ['Office 集成', '企业办公', 'AI 助手', '生产力'],
    features: [
      'Word 智能写作和编辑',
      'Excel 数据分析和公式生成',
      'PPT 自动设计和美化',
      'Outlook 邮件摘要和回复',
      'Teams 会议记录和总结',
      '企业数据安全保障'
    ],
    useCases: [
      '商业报告快速生成',
      '数据分析可视化',
      '演示文稿自动设计',
      '邮件高效处理',
      '会议内容整理归档'
    ],
    pros: [
      'Office 深度集成',
      '企业级安全可靠',
      '功能覆盖全面',
      '品牌信任度高'
    ],
    cons: [
      '需订阅 Microsoft 365',
      '部分功能响应较慢',
      '自定义能力有限'
    ],
    relatedSites: [
      { name: 'Microsoft Copilot 官网', url: 'https://copilot.microsoft.com', type: 'official', description: '微软 Copilot 官方网站' },
      { name: 'Microsoft 365 定价', url: 'https://www.microsoft.com/microsoft-365/buy/compare-all-microsoft-365-products', type: 'pricing', description: '订阅价格详情' },
      { name: 'Copilot 使用教程', url: 'https://support.microsoft.com/copilot', type: 'tutorial', description: '官方使用指南' },
      { name: 'Microsoft 社区', url: 'https://answers.microsoft.com', type: 'community', description: '用户技术支持社区' }
    ],
    targetUsers: ['企业员工', 'Office 重度用户', '商务人士', '数据分析师'],
    difficulty: 'beginner'
  },
  {
    id: 3,
    name: 'Grammarly',
    description: '智能写作助手，实时检查语法、拼写和风格，提升写作质量',
    highlights: 'AI 驱动的写作优化，多平台无缝集成',
    category: '办公效率',
    subCategory: 'AI 办公套件',
    logo: 'https://www.grammarly.com/images/logo.png',
    url: 'https://www.grammarly.com',
    isVip: true,
    price: '$12/月',
    tags: ['写作助手', '语法检查', '英语写作', '内容优化'],
    features: [
      '实时语法和拼写检查',
      '写作风格优化建议',
      '语气和受众适配',
      '抄袭检测和引用',
      '多平台浏览器扩展',
      'AI 内容生成辅助'
    ],
    useCases: [
      '商务邮件撰写优化',
      '学术论文润色',
      '营销文案创作',
      '社交媒体内容编辑',
      '简历和求职信完善'
    ],
    pros: [
      '检查准确度高',
      '平台覆盖广泛',
      '建议具体可操作',
      '免费版功能实用'
    ],
    cons: [
      '主要针对英语',
      '高级功能需付费',
      '有时建议过于保守'
    ],
    relatedSites: [
      { name: 'Grammarly 官网', url: 'https://www.grammarly.com', type: 'official', description: 'Grammarly 官方网站' },
      { name: 'Grammarly 定价', url: 'https://www.grammarly.com/pricing', type: 'pricing', description: '订阅方案详情' },
      { name: 'Grammarly 博客', url: 'https://www.grammarly.com/blog', type: 'tutorial', description: '写作技巧和教程' },
      { name: 'Grammarly 企业版', url: 'https://www.grammarly.com/business', type: 'official', description: '企业解决方案' }
    ],
    targetUsers: ['内容创作者', '学生', '商务人士', '非英语母语者', '营销人员'],
    difficulty: 'beginner'
  },
  {
    id: 4,
    name: 'Otter.ai',
    description: 'AI 语音转文字工具，实时会议记录和转录，支持多说话人识别',
    highlights: '实时转录 + 说话人区分，会议效率神器',
    category: '办公效率',
    subCategory: '会议助手',
    logo: 'https://otter.ai/assets/images/otter-logo.png',
    url: 'https://otter.ai',
    isVip: true,
    price: '$8.33/月',
    tags: ['语音转录', '会议记录', '实时字幕', '音频分析'],
    features: [
      '实时语音转文字',
      '多说话人自动识别',
      '关键词和高亮标记',
      '音频和文本同步',
      '会议摘要自动生成',
      '多平台集成 (Zoom/Teams 等)'
    ],
    useCases: [
      '在线会议自动记录',
      '访谈内容转录',
      '讲座和培训记录',
      '播客内容整理',
      '语音备忘录转换'
    ],
    pros: [
      '转录准确率高',
      '实时显示效果好',
      '说话人区分清晰',
      '搜索功能强大'
    ],
    cons: [
      '中文支持有限',
      '免费额度较少',
      '嘈杂环境影响精度'
    ],
    relatedSites: [
      { name: 'Otter.ai 官网', url: 'https://otter.ai', type: 'official', description: 'Otter 官方网站' },
      { name: 'Otter 定价', url: 'https://otter.ai/pricing', type: 'pricing', description: '订阅价格方案' },
      { name: 'Otter 帮助中心', url: 'https://help.otter.ai', type: 'tutorial', description: '使用指南和 FAQ' },
      { name: 'Otter 博客', url: 'https://otter.ai/blog', type: 'tutorial', description: '产品更新和使用技巧' }
    ],
    targetUsers: ['记者', '研究人员', '学生', '会议组织者', '内容创作者'],
    difficulty: 'beginner'
  },
  {
    id: 5,
    name: 'Fireflies.ai',
    description: '智能会议助手，自动录制、转录和分析会议内容',
    highlights: '会议 AI 分析 + 工作流集成，自动化会议管理',
    category: '办公效率',
    subCategory: '会议助手',
    logo: 'https://fireflies.ai/images/logo.png',
    url: 'https://fireflies.ai',
    isVip: true,
    price: '$10/月',
    tags: ['会议记录', 'AI 分析', '工作流自动化', '团队协作'],
    features: [
      '自动加入会议录制',
      '智能转录和摘要',
      '情感分析和话题追踪',
      '行动项自动提取',
      'CRM 和项目管理集成',
      '自定义 AI 分析模板'
    ],
    useCases: [
      '销售会议记录分析',
      '客户通话整理',
      '团队站会自动化',
      '面试过程记录',
      '培训会议归档'
    ],
    pros: [
      '自动化程度高',
      '分析维度丰富',
      '集成生态完善',
      '搜索和筛选强大'
    ],
    cons: [
      '设置较复杂',
      '部分集成需额外配置',
      '高级分析需高价套餐'
    ],
    relatedSites: [
      { name: 'Fireflies 官网', url: 'https://fireflies.ai', type: 'official', description: 'Fireflies 官方网站' },
      { name: 'Fireflies 定价', url: 'https://fireflies.ai/pricing', type: 'pricing', description: '价格方案详情' },
      { name: 'Fireflies 集成', url: 'https://fireflies.ai/integrations', type: 'tutorial', description: '支持的应用集成列表' },
      { name: 'Fireflies 博客', url: 'https://fireflies.ai/blog', type: 'tutorial', description: '产品资讯和使用案例' }
    ],
    targetUsers: ['销售团队', '客户经理', '项目经理', 'HR 招聘', '咨询顾问'],
    difficulty: 'intermediate'
  },
  {
    id: 6,
    name: 'Beautiful.ai',
    description: 'AI 驱动的演示文稿设计工具，自动美化和排版',
    highlights: '智能设计引擎，让 PPT 制作更简单专业',
    category: '办公效率',
    subCategory: '演示文稿',
    logo: 'https://www.beautiful.ai/images/logo.png',
    url: 'https://www.beautiful.ai',
    isVip: true,
    price: '$12/月',
    tags: ['PPT 设计', 'AI 美化', '演示文稿', '模板库'],
    features: [
      '智能幻灯片布局',
      '自动配色和字体搭配',
      '内容自适应设计',
      '品牌模板定制',
      '实时协作编辑',
      '演示数据分析'
    ],
    useCases: [
      '商业计划书制作',
      '产品发布会演示',
      '季度汇报 PPT',
      '教育培训课件',
      '融资路演材料'
    ],
    pros: [
      '设计效果专业',
      '操作门槛低',
      '模板质量高',
      '协作功能完善'
    ],
    cons: [
      '创意自由度有限',
      '导出格式受限',
      '高级功能需付费'
    ],
    relatedSites: [
      { name: 'Beautiful.ai 官网', url: 'https://www.beautiful.ai', type: 'official', description: 'Beautiful.ai 官方网站' },
      { name: 'Beautiful.ai 定价', url: 'https://www.beautiful.ai/pricing', type: 'pricing', description: '订阅价格' },
      { name: 'Beautiful.ai 模板', url: 'https://www.beautiful.ai/templates', type: 'tutorial', description: '演示模板库' },
      { name: 'Beautiful.ai 博客', url: 'https://www.beautiful.ai/blog', type: 'tutorial', description: '演示技巧和建议' }
    ],
    targetUsers: ['商务人士', '市场人员', '创业者', '教育工作者', '设计师'],
    difficulty: 'beginner'
  },
  {
    id: 7,
    name: 'Gamma',
    description: 'AI 生成演示文稿、文档和网页，快速创建专业内容',
    highlights: 'AI 一键生成，多格式内容创作平台',
    category: '办公效率',
    subCategory: '演示文稿',
    logo: 'https://gamma.app/images/logo.png',
    url: 'https://gamma.app',
    isVip: true,
    price: '$10/月',
    tags: ['AI 生成', '演示文稿', '文档创作', '网页制作'],
    features: [
      'AI 文本生成内容',
      '智能设计和排版',
      '多格式输出 (PPT/文档/网页)',
      '嵌入多媒体内容',
      '实时协作和评论',
      '数据可视化图表'
    ],
    useCases: [
      '快速创建产品演示',
      '项目提案文档',
      '在线作品集',
      '培训材料制作',
      '营销落地页'
    ],
    pros: [
      '生成速度快',
      '设计感强',
      '格式灵活多样',
      '易于分享传播'
    ],
    cons: [
      '内容深度有限',
      '自定义选项较少',
      '依赖网络连接'
    ],
    relatedSites: [
      { name: 'Gamma 官网', url: 'https://gamma.app', type: 'official', description: 'Gamma 官方网站' },
      { name: 'Gamma 定价', url: 'https://gamma.app/pricing', type: 'pricing', description: '价格方案' },
      { name: 'Gamma 模板库', url: 'https://gamma.app/templates', type: 'tutorial', description: '内容模板展示' },
      { name: 'Gamma 帮助中心', url: 'https://help.gamma.app', type: 'tutorial', description: '使用指南' }
    ],
    targetUsers: ['创业者', '市场人员', '内容创作者', '教育工作者', '咨询顾问'],
    difficulty: 'beginner'
  },
  {
    id: 8,
    name: 'Tome',
    description: 'AI 驱动的叙事演示工具，打造引人入胜的故事化内容',
    highlights: '故事化演示 + AI 生成，让内容更有吸引力',
    category: '办公效率',
    subCategory: '演示文稿',
    logo: 'https://tome.app/images/logo.png',
    url: 'https://tome.app',
    isVip: true,
    price: '$10/月',
    tags: ['叙事演示', 'AI 生成', '创意设计', '多媒体'],
    features: [
      'AI 生成叙事结构',
      '3D 和多媒体嵌入',
      '交互式演示体验',
      '智能内容建议',
      '品牌风格定制',
      '分析演示效果'
    ],
    useCases: [
      '品牌故事讲述',
      '产品发布演示',
      '投资组合展示',
      '创意提案',
      '个人作品集'
    ],
    pros: [
      '叙事性强',
      '视觉效果出色',
      '交互体验好',
      '移动端友好'
    ],
    cons: [
      '学习成本较高',
      '传统 PPT 导出有限',
      '高级功能需付费'
    ],
    relatedSites: [
      { name: 'Tome 官网', url: 'https://tome.app', type: 'official', description: 'Tome 官方网站' },
      { name: 'Tome 定价', url: 'https://tome.app/pricing', type: 'pricing', description: '订阅价格' },
      { name: 'Tome 画廊', url: 'https://tome.app/gallery', type: 'tutorial', description: '优秀案例展示' },
      { name: 'Tome 博客', url: 'https://tome.app/blog', type: 'tutorial', description: '产品动态和技巧' }
    ],
    targetUsers: ['创意工作者', '设计师', '创业者', '营销人员', '内容创作者'],
    difficulty: 'intermediate'
  },
  {
    id: 9,
    name: 'MindMeister',
    description: '在线思维导图工具，支持协作和 AI 辅助创意',
    highlights: '可视化思维 + 团队协作，激发创意灵感',
    category: '办公效率',
    subCategory: '知识管理',
    logo: 'https://www.mindmeister.com/images/logo.png',
    url: 'https://www.mindmeister.com',
    isVip: true,
    price: '$4.99/月',
    tags: ['思维导图', '头脑风暴', '可视化', '协作工具'],
    features: [
      '实时协作编辑',
      'AI 智能节点扩展',
      '多种导图模板',
      '演示模式',
      '与 MeisterTask 集成',
      '多平台同步'
    ],
    useCases: [
      '头脑风暴会议',
      '项目规划',
      '学习笔记整理',
      '战略规划',
      '创意构思'
    ],
    pros: [
      '界面直观易用',
      '协作功能强大',
      '模板丰富',
      '集成生态好'
    ],
    cons: [
      '免费版限制多',
      '大型导图性能下降',
      '高级功能需付费'
    ],
    relatedSites: [
      { name: 'MindMeister 官网', url: 'https://www.mindmeister.com', type: 'official', description: 'MindMeister 官方网站' },
      { name: 'MindMeister 定价', url: 'https://www.mindmeister.com/pricing', type: 'pricing', description: '价格方案' },
      { name: 'MindMeister 模板', url: 'https://www.mindmeister.com/templates', type: 'tutorial', description: '思维导图模板库' },
      { name: 'MindMeister 学院', url: 'https://www.mindmeister.com/academy', type: 'tutorial', description: '学习资源和教程' }
    ],
    targetUsers: ['学生', '项目经理', '创意工作者', '教师', '咨询师'],
    difficulty: 'beginner'
  },
  {
    id: 10,
    name: 'Zapier',
    description: '自动化工作流平台，连接 5000+ 应用实现无缝集成',
    highlights: '无代码自动化，连接一切应用',
    category: '办公效率',
    subCategory: '自动化工具',
    logo: 'https://cdn.zapier.com/zapier/images/logo.png',
    url: 'https://zapier.com',
    isVip: true,
    price: '$19.99/月',
    tags: ['工作流自动化', '应用集成', '无代码', '效率工具'],
    features: [
      '5000+ 应用集成',
      '多步骤工作流',
      '条件逻辑和过滤器',
      '定时触发器',
      'AI 辅助工作流创建',
      '团队协作和共享'
    ],
    useCases: [
      '邮件自动分类归档',
      '社交媒体自动发布',
      '表单数据自动处理',
      'CRM 数据同步',
      '通知和提醒自动化'
    ],
    pros: [
      '应用生态庞大',
      '设置简单直观',
      '稳定可靠',
      '社区资源丰富'
    ],
    cons: [
      '价格较高',
      '复杂工作流调试困难',
      '任务额度限制'
    ],
    relatedSites: [
      { name: 'Zapier 官网', url: 'https://zapier.com', type: 'official', description: 'Zapier 官方网站' },
      { name: 'Zapier 定价', url: 'https://zapier.com/pricing', type: 'pricing', description: '订阅价格' },
      { name: 'Zapier 应用目录', url: 'https://zapier.com/apps', type: 'tutorial', description: '支持的应用列表' },
      { name: 'Zapier 博客', url: 'https://zapier.com/blog', type: 'tutorial', description: '自动化技巧和案例' }
    ],
    targetUsers: ['运营人员', '营销人员', '创业者', 'IT 管理员', '自由职业者'],
    difficulty: 'intermediate'
  },
  {
    id: 11,
    name: '飞书智能伙伴',
    description: '字节跳动 AI 助手，深度集成飞书套件，提升团队协作效率',
    highlights: '飞书全家桶 AI 赋能，本土化办公首选',
    category: '办公效率',
    subCategory: '知识管理',
    logo: 'https://www.feishu.cn/images/logo.png',
    url: 'https://www.feishu.cn/product/ai',
    isVip: true,
    price: '免费 + 企业版',
    tags: ['AI 助手', '团队协作', '本土化', '企业办公'],
    features: [
      '文档 AI 写作和润色',
      '会议自动记录和总结',
      '智能日程安排',
      '表格数据分析和公式',
      '即时消息 AI 回复',
      '多语言实时翻译'
    ],
    useCases: [
      '团队文档协作',
      '视频会议记录',
      '项目进度管理',
      '企业内部沟通',
      '跨语言协作'
    ],
    pros: [
      '本土化体验好',
      '功能集成度高',
      '性价比高',
      '中文支持优秀'
    ],
    cons: [
      '国际应用集成少',
      '部分功能需企业版',
      '学习成本存在'
    ],
    relatedSites: [
      { name: '飞书官网', url: 'https://www.feishu.cn', type: 'official', description: '飞书官方网站' },
      { name: '飞书定价', url: 'https://www.feishu.cn/pricing', type: 'pricing', description: '价格方案' },
      { name: '飞书帮助中心', url: 'https://www.feishu.cn/hc', type: 'tutorial', description: '使用指南和文档' },
      { name: '飞书开放平台', url: 'https://open.feishu.cn', type: 'community', description: '开发者资源和 API' }
    ],
    targetUsers: ['中国企业员工', '团队协作', '远程办公', '跨国公司', '创业团队'],
    difficulty: 'beginner'
  },
  {
    id: 12,
    name: '钉钉 AI',
    description: '阿里巴巴 AI 办公助手，集成钉钉生态，赋能企业数字化',
    highlights: '阿里生态 AI 加持，企业数字化利器',
    category: '办公效率',
    subCategory: 'AI 办公套件',
    logo: 'https://www.dingtalk.com/images/logo.png',
    url: 'https://www.dingtalk.com/product/ai',
    isVip: true,
    price: '免费 + 企业版',
    tags: ['AI 办公', '企业管理', '本土化', '数字化'],
    features: [
      '智能文档生成',
      '会议语音转写',
      '审批流程自动化',
      '数据分析报表',
      '客户管理 AI 助手',
      '考勤和排班优化'
    ],
    useCases: [
      '企业日常办公',
      '销售客户管理',
      '人事考勤管理',
      '财务报销审批',
      '生产调度安排'
    ],
    pros: [
      '阿里生态支持',
      '企业功能完善',
      '本土化程度高',
      '安全性好'
    ],
    cons: [
      '界面较复杂',
      '部分功能需定制',
      '学习曲线陡'
    ],
    relatedSites: [
      { name: '钉钉官网', url: 'https://www.dingtalk.com', type: 'official', description: '钉钉官方网站' },
      { name: '钉钉定价', url: 'https://www.dingtalk.com/pricing', type: 'pricing', description: '企业版价格' },
      { name: '钉钉帮助中心', url: 'https://www.dingtalk.com/help', type: 'tutorial', description: '使用指南' },
      { name: '钉钉开放平台', url: 'https://open.dingtalk.com', type: 'community', description: '开发者平台' }
    ],
    targetUsers: ['中小企业', '大型企业', '政府机构', '教育机构', '制造业'],
    difficulty: 'intermediate'
  },
  {
    id: 13,
    name: 'Motion',
    description: 'AI 驱动的项目管理和日程安排工具，自动优化时间分配',
    highlights: '智能日程规划 + 任务管理，时间管理神器',
    category: '办公效率',
    subCategory: '任务管理',
    logo: 'https://www.usemotion.com/images/logo.png',
    url: 'https://www.usemotion.com',
    isVip: true,
    price: '$19/月',
    tags: ['时间管理', '任务规划', '日程安排', 'AI 优化'],
    features: [
      'AI 自动日程安排',
      '任务优先级排序',
      '会议时间优化',
      '截止日期提醒',
      '项目进度追踪',
      '团队协作功能'
    ],
    useCases: [
      '个人日程管理',
      '项目任务分配',
      '会议时间协调',
      '多项目并行管理',
      '工作效率分析'
    ],
    pros: [
      '自动化程度高',
      '时间优化智能',
      '界面简洁',
      '减少决策疲劳'
    ],
    cons: [
      '价格较高',
      '灵活性有限',
      '需要持续使用才能发挥效果'
    ],
    relatedSites: [
      { name: 'Motion 官网', url: 'https://www.usemotion.com', type: 'official', description: 'Motion 官方网站' },
      { name: 'Motion 定价', url: 'https://www.usemotion.com/pricing', type: 'pricing', description: '订阅价格' },
      { name: 'Motion 博客', url: 'https://www.usemotion.com/blog', type: 'tutorial', description: '时间管理技巧' },
      { name: 'Motion 帮助中心', url: 'https://help.usemotion.com', type: 'tutorial', description: '使用指南' }
    ],
    targetUsers: ['高管', '项目经理', '自由职业者', '创业者', '咨询师'],
    difficulty: 'intermediate'
  },
  {
    id: 14,
    name: 'Reclaim.ai',
    description: '智能日程管理工具，自动平衡工作和个人时间',
    highlights: '工作生活平衡 + 智能调度，Google Calendar 最佳搭档',
    category: '办公效率',
    subCategory: '自动化工具',
    logo: 'https://reclaim.ai/images/logo.png',
    url: 'https://reclaim.ai',
    isVip: true,
    price: '$8/月',
    tags: ['日程管理', '时间优化', '工作平衡', 'Google 集成'],
    features: [
      '智能会议调度',
      '习惯和时间块管理',
      '优先级自动调整',
      '工作生活平衡保护',
      '团队可用性协调',
      'Google Calendar 深度集成'
    ],
    useCases: [
      '会议时间自动协调',
      '专注时间保护',
      '习惯养成追踪',
      '团队日程同步',
      '工作时间优化'
    ],
    pros: [
      'Google 集成无缝',
      '平衡理念好',
      '自动化智能',
      '免费版功能足'
    ],
    cons: [
      '主要依赖 Google',
      '高级功能需付费',
      '设置需要时间'
    ],
    relatedSites: [
      { name: 'Reclaim 官网', url: 'https://reclaim.ai', type: 'official', description: 'Reclaim 官方网站' },
      { name: 'Reclaim 定价', url: 'https://reclaim.ai/pricing', type: 'pricing', description: '价格方案' },
      { name: 'Reclaim 博客', url: 'https://reclaim.ai/blog', type: 'tutorial', description: '时间管理文章' },
      { name: 'Reclaim 帮助中心', url: 'https://help.reclaim.ai', type: 'tutorial', description: '使用文档' }
    ],
    targetUsers: ['知识工作者', '远程办公者', '团队管理者', '自由职业者', '创业者'],
    difficulty: 'beginner'
  },
  {
    id: 15,
    name: 'Clockwise',
    description: '团队日程优化工具，自动安排会议和专注时间',
    highlights: '团队效率优化，打造无会议专注时段',
    category: '办公效率',
    subCategory: '自动化工具',
    logo: 'https://www.getclockwise.com/images/logo.png',
    url: 'https://www.getclockwise.com',
    isVip: true,
    price: '$6.99/月',
    tags: ['团队日程', '会议优化', '专注时间', '协作效率'],
    features: [
      '团队会议自动调度',
      '专注时间保护',
      '日历同步优化',
      '会议时长建议',
      '时区协调',
      ' Slack 集成通知'
    ],
    useCases: [
      '团队会议协调',
      '专注时间规划',
      '跨时区协作',
      '会议效率提升',
      '工作节奏优化'
    ],
    pros: [
      '团队协作友好',
      '专注时间保护',
      '集成度高',
      '免费版实用'
    ],
    cons: [
      '主要面向团队',
      '个人功能有限',
      '依赖日历质量'
    ],
    relatedSites: [
      { name: 'Clockwise 官网', url: 'https://www.getclockwise.com', type: 'official', description: 'Clockwise 官方网站' },
      { name: 'Clockwise 定价', url: 'https://www.getclockwise.com/pricing', type: 'pricing', description: '价格方案' },
      { name: 'Clockwise 博客', url: 'https://www.getclockwise.com/blog', type: 'tutorial', description: '团队协作文章' },
      { name: 'Clockwise 帮助中心', url: 'https://help.getclockwise.com', type: 'tutorial', description: '使用指南' }
    ],
    targetUsers: ['远程团队', '科技公司', '创业团队', '项目经理', '团队领导'],
    difficulty: 'beginner'
  },
  {
    id: 16,
    name: 'Mem.ai',
    description: 'AI 驱动的个人知识库，自动组织和连接笔记内容',
    highlights: '自组织知识系统 + AI 搜索，第二大脑',
    category: '办公效率',
    subCategory: '知识管理',
    logo: 'https://mem.ai/images/logo.png',
    url: 'https://mem.ai',
    isVip: true,
    price: '$15/月',
    tags: ['知识管理', 'AI 搜索', '笔记应用', '个人知识库'],
    features: [
      'AI 自动标签和分类',
      '智能内容关联',
      '自然语言搜索',
      '多格式内容支持',
      '跨设备同步',
      'AI 内容总结'
    ],
    useCases: [
      '个人知识积累',
      '研究资料整理',
      '创意灵感收集',
      '学习内容归档',
      '项目资料管理'
    ],
    pros: [
      '自动化程度高',
      '搜索体验好',
      '界面简洁',
      'AI 功能强大'
    ],
    cons: [
      '价格偏高',
      '离线功能有限',
      '导出格式受限'
    ],
    relatedSites: [
      { name: 'Mem 官网', url: 'https://mem.ai', type: 'official', description: 'Mem 官方网站' },
      { name: 'Mem 定价', url: 'https://mem.ai/pricing', type: 'pricing', description: '订阅价格' },
      { name: 'Mem 博客', url: 'https://mem.ai/blog', type: 'tutorial', description: '知识管理文章' },
      { name: 'Mem 帮助中心', url: 'https://help.mem.ai', type: 'tutorial', description: '使用文档' }
    ],
    targetUsers: ['研究人员', '学生', '知识工作者', '创作者', '终身学习者'],
    difficulty: 'intermediate'
  },
  {
    id: 17,
    name: 'Taskade',
    description: 'AI 辅助的任务管理和思维导图工具，支持团队协作',
    highlights: '任务 + 思维导图 + AI，灵活项目管理',
    category: '办公效率',
    subCategory: '任务管理',
    logo: 'https://taskade.com/images/logo.png',
    url: 'https://taskade.com',
    isVip: true,
    price: '$4.99/月',
    tags: ['任务管理', '思维导图', '团队协作', 'AI 辅助'],
    features: [
      '多视图任务管理',
      'AI 任务分解',
      '思维导图模式',
      '团队实时协作',
      '时间追踪',
      '模板库'
    ],
    useCases: [
      '个人任务规划',
      '团队项目管理',
      '头脑风暴',
      '敏捷开发',
      '学习计划制定'
    ],
    pros: [
      '视图灵活多样',
      'AI 功能实用',
      '性价比高',
      '协作功能好'
    ],
    cons: [
      '知名度较低',
      '集成应用少',
      '高级功能需付费'
    ],
    relatedSites: [
      { name: 'Taskade 官网', url: 'https://taskade.com', type: 'official', description: 'Taskade 官方网站' },
      { name: 'Taskade 定价', url: 'https://taskade.com/pricing', type: 'pricing', description: '价格方案' },
      { name: 'Taskade 模板', url: 'https://taskade.com/templates', type: 'tutorial', description: '项目模板库' },
      { name: 'Taskade 博客', url: 'https://taskade.com/blog', type: 'tutorial', description: '生产力技巧' }
    ],
    targetUsers: ['项目经理', '学生', '创业团队', '自由职业者', '远程工作者'],
    difficulty: 'beginner'
  },
  {
    id: 18,
    name: 'ClickUp AI',
    description: '全功能项目管理平台的 AI 增强版，一站式工作管理',
    highlights: '项目管理全家桶 + AI，替代多个工具',
    category: '办公效率',
    subCategory: '任务管理',
    logo: 'https://clickup.com/images/logo.png',
    url: 'https://clickup.com/features/ai',
    isVip: true,
    price: '$7/月',
    tags: ['项目管理', '任务协作', 'AI 增强', '全功能'],
    features: [
      'AI 任务自动生成',
      '智能项目总结',
      '文档 AI 写作',
      '时间估算建议',
      '自动化工作流',
      '多视图管理'
    ],
    useCases: [
      '软件项目管理',
      '营销活动执行',
      '产品路线图',
      '团队协作',
      '客户工作管理'
    ],
    pros: [
      '功能全面',
      '自定义能力强',
      '性价比高',
      '集成丰富'
    ],
    cons: [
      '功能过多可能复杂',
      '学习曲线陡',
      '性能偶尔不稳定'
    ],
    relatedSites: [
      { name: 'ClickUp 官网', url: 'https://clickup.com', type: 'official', description: 'ClickUp 官方网站' },
      { name: 'ClickUp 定价', url: 'https://clickup.com/pricing', type: 'pricing', description: '价格方案' },
      { name: 'ClickUp 大学', url: 'https://clickup.com/university', type: 'tutorial', description: '学习资源' },
      { name: 'ClickUp 博客', url: 'https://clickup.com/blog', type: 'tutorial', description: '生产力文章' }
    ],
    targetUsers: ['项目团队', '软件公司', '营销团队', '创业公司', '代理机构'],
    difficulty: 'intermediate'
  },
  {
    id: 19,
    name: 'Monday AI',
    description: '可视化工作管理平台的 AI 版本，智能自动化工作流',
    highlights: '可视化工作流 + AI 自动化，团队效率提升',
    category: '办公效率',
    subCategory: '任务管理',
    logo: 'https://monday.com/images/logo.png',
    url: 'https://monday.com/ai',
    isVip: true,
    price: '$8/月',
    tags: ['工作管理', '可视化', '自动化', '团队协作'],
    features: [
      'AI 项目生成',
      '智能任务分配',
      '自动化工作流',
      '数据洞察分析',
      '自定义仪表板',
      '多项目视图'
    ],
    useCases: [
      '营销活动管理',
      '产品开发跟踪',
      '销售管道管理',
      '人力资源流程',
      '客户服务工单'
    ],
    pros: [
      '界面直观美观',
      '自动化强大',
      '模板丰富',
      '集成广泛'
    ],
    cons: [
      '价格较高',
      '高级功能需高价套餐',
      '联系人限制'
    ],
    relatedSites: [
      { name: 'Monday.com 官网', url: 'https://monday.com', type: 'official', description: 'Monday.com 官方网站' },
      { name: 'Monday 定价', url: 'https://monday.com/pricing', type: 'pricing', description: '价格方案' },
      { name: 'Monday 模板库', url: 'https://monday.com/templates', type: 'tutorial', description: '工作模板' },
      { name: 'Monday 帮助中心', url: 'https://support.monday.com', type: 'tutorial', description: '使用指南' }
    ],
    targetUsers: ['营销团队', '产品团队', '销售团队', '运营团队', '创业公司'],
    difficulty: 'beginner'
  },
  {
    id: 20,
    name: 'Airtable AI',
    description: '智能数据库平台的 AI 功能，连接数据和自动化工作流',
    highlights: '数据库 + AI + 自动化，灵活数据管理',
    category: '办公效率',
    subCategory: '知识管理',
    logo: 'https://airtable.com/images/logo.png',
    url: 'https://airtable.com/ai',
    isVip: true,
    price: '$20/月',
    tags: ['数据库', '数据管理', 'AI 分析', '自动化'],
    features: [
      'AI 字段自动填充',
      '智能数据分类',
      '自然语言查询',
      '自动化记录更新',
      '数据洞察分析',
      '多视图展示'
    ],
    useCases: [
      '客户关系管理',
      '内容日历规划',
      '库存跟踪',
      '项目追踪',
      '数据分析报告'
    ],
    pros: [
      '灵活性高',
      '界面友好',
      '集成能力强',
      'AI 功能实用'
    ],
    cons: [
      '价格较高',
      '复杂查询学习成本',
      '记录数限制'
    ],
    relatedSites: [
      { name: 'Airtable 官网', url: 'https://airtable.com', type: 'official', description: 'Airtable 官方网站' },
      { name: 'Airtable 定价', url: 'https://airtable.com/pricing', type: 'pricing', description: '价格方案' },
      { name: 'Airtable 模板', url: 'https://airtable.com/templates', type: 'tutorial', description: '数据库模板' },
      { name: 'Airtable 社区', url: 'https://community.airtable.com', type: 'community', description: '用户社区' }
    ],
    targetUsers: ['数据分析师', '项目经理', '营销人员', '运营团队', '创业者'],
    difficulty: 'intermediate'
  },
  {
    id: 21,
    name: 'Superhuman',
    description: 'AI 驱动的超快邮件客户端，键盘优先的高效邮件体验',
    highlights: '极速邮件 + AI 辅助，邮件效率革命',
    category: '办公效率',
    subCategory: '邮件效率',
    logo: 'https://superhuman.com/images/logo.png',
    url: 'https://superhuman.com',
    isVip: true,
    price: '$30/月',
    tags: ['邮件客户端', '效率工具', 'AI 辅助', '键盘快捷'],
    features: [
      'AI 邮件摘要',
      '智能回复建议',
      '键盘快捷操作',
      '邮件定时发送',
      '已读回执追踪',
      '多账户统一管理'
    ],
    useCases: [
      '高管邮件管理',
      '销售跟进邮件',
      '客户沟通',
      '邮件批量处理',
      '重要邮件追踪'
    ],
    pros: [
      '速度极快',
      '体验流畅',
      'AI 功能精准',
      '设计精美'
    ],
    cons: [
      '价格昂贵',
      '学习成本高',
      '仅支持 Gmail/Google Workspace'
    ],
    relatedSites: [
      { name: 'Superhuman 官网', url: 'https://superhuman.com', type: 'official', description: 'Superhuman 官方网站' },
      { name: 'Superhuman 定价', url: 'https://superhuman.com/pricing', type: 'pricing', description: '订阅价格' },
      { name: 'Superhuman 博客', url: 'https://superhuman.com/blog', type: 'tutorial', description: '邮件效率文章' },
      { name: 'Superhuman 帮助中心', url: 'https://superhuman.com/support', type: 'tutorial', description: '使用指南' }
    ],
    targetUsers: ['高管', '创业者', '销售人员', '投资人', '高净值人士'],
    difficulty: 'advanced'
  },
  {
    id: 22,
    name: 'Shortwave',
    description: 'AI 增强的 Gmail 客户端，智能分类和快速处理邮件',
    highlights: 'Gmail 智能升级，AI 邮件管理专家',
    category: '办公效率',
    subCategory: '邮件效率',
    logo: 'https://shortwave.com/images/logo.png',
    url: 'https://shortwave.com',
    isVip: true,
    price: '免费 + $10/月',
    tags: ['Gmail 客户端', 'AI 分类', '邮件管理', '效率工具'],
    features: [
      'AI 邮件摘要',
      '智能邮件分类',
      '快速回复模板',
      '邮件搜索增强',
      '任务集成',
      '团队协作'
    ],
    useCases: [
      '收件箱零处理',
      '邮件快速分类',
      '团队邮件协作',
      '重要邮件优先',
      '邮件搜索查找'
    ],
    pros: [
      '免费版功能足',
      'AI 分类准确',
      '界面现代',
      'Gmail 无缝集成'
    ],
    cons: [
      '仅支持 Gmail',
      '高级功能需付费',
      '移动端体验一般'
    ],
    relatedSites: [
      { name: 'Shortwave 官网', url: 'https://shortwave.com', type: 'official', description: 'Shortwave 官方网站' },
      { name: 'Shortwave 定价', url: 'https://shortwave.com/pricing', type: 'pricing', description: '价格方案' },
      { name: 'Shortwave 博客', url: 'https://shortwave.com/blog', type: 'tutorial', description: '邮件效率文章' },
      { name: 'Shortwave 帮助中心', url: 'https://help.shortwave.com', type: 'tutorial', description: '使用指南' }
    ],
    targetUsers: ['知识工作者', '创业者', '销售人员', '项目经理', '远程团队'],
    difficulty: 'beginner'
  },
  {
    id: 23,
    name: 'Rewind AI',
    description: '个人 AI 记忆助手，记录和分析所有屏幕活动',
    highlights: '全屏幕记录 + AI 搜索，数字生活回放',
    category: '办公效率',
    subCategory: '知识管理',
    logo: 'https://www.rewind.ai/images/logo.png',
    url: 'https://www.rewind.ai',
    isVip: true,
    price: '$10/月',
    tags: ['屏幕记录', 'AI 记忆', '个人分析', '隐私优先'],
    features: [
      '全屏幕活动记录',
      'AI 内容索引搜索',
      '对话和会议回顾',
      '隐私本地存储',
      '应用使用分析',
      '智能摘要生成'
    ],
    useCases: [
      '会议内容回顾',
      '工作内容追溯',
      '学习时间分析',
      '对话记录查找',
      '个人效率分析'
    ],
    pros: [
      '记录全面',
      '搜索精准',
      '隐私保护好',
      '本地处理安全'
    ],
    cons: [
      '占用存储空间',
      '仅支持 Mac',
      '心理接受度问题'
    ],
    relatedSites: [
      { name: 'Rewind 官网', url: 'https://www.rewind.ai', type: 'official', description: 'Rewind 官方网站' },
      { name: 'Rewind 定价', url: 'https://www.rewind.ai/pricing', type: 'pricing', description: '价格方案' },
      { name: 'Rewind 博客', url: 'https://www.rewind.ai/blog', type: 'tutorial', description: '产品动态' },
      { name: 'Rewind 隐私政策', url: 'https://www.rewind.ai/privacy', type: 'official', description: '隐私和安全说明' }
    ],
    targetUsers: ['知识工作者', '研究人员', '学生', '远程办公者', '效率追求者'],
    difficulty: 'intermediate'
  },
  {
    id: 24,
    name: 'Granola',
    description: 'AI 会议笔记工具，自动记录和整理会议要点',
    highlights: '会议笔记自动化，专注讨论而非记录',
    category: '办公效率',
    subCategory: '会议助手',
    logo: 'https://granola.so/images/logo.png',
    url: 'https://granola.so',
    isVip: true,
    price: '$12/月',
    tags: ['会议笔记', 'AI 转录', '要点提取', '团队协作'],
    features: [
      '自动会议记录',
      'AI 要点提取',
      '行动项识别',
      '多说话人区分',
      '笔记模板定制',
      '团队共享协作'
    ],
    useCases: [
      '团队会议记录',
      '客户会议整理',
      '头脑风暴归档',
      '一对一会议',
      '培训会议笔记'
    ],
    pros: [
      '笔记质量高',
      '自动化程度好',
      '模板灵活',
      '协作方便'
    ],
    cons: [
      '知名度较低',
      '集成应用有限',
      '中文支持一般'
    ],
    relatedSites: [
      { name: 'Granola 官网', url: 'https://granola.so', type: 'official', description: 'Granola 官方网站' },
      { name: 'Granola 定价', url: 'https://granola.so/pricing', type: 'pricing', description: '价格方案' },
      { name: 'Granola 博客', url: 'https://granola.so/blog', type: 'tutorial', description: '会议效率文章' },
      { name: 'Granola 帮助中心', url: 'https://help.granola.so', type: 'tutorial', description: '使用指南' }
    ],
    targetUsers: ['项目经理', '产品经理', '咨询顾问', '研究人员', '团队领导'],
    difficulty: 'beginner'
  },
  {
    id: 25,
    name: 'Supernormal',
    description: 'AI 会议助手，自动记录 Zoom/Google Meet 会议并生成笔记',
    highlights: '会议记录 + 智能笔记，让会议更有价值',
    category: '办公效率',
    subCategory: '会议助手',
    logo: 'https://supernormal.com/images/logo.png',
    url: 'https://supernormal.com',
    isVip: true,
    price: '$15/月',
    tags: ['会议记录', 'AI 笔记', '视频会议', '团队协作'],
    features: [
      '自动加入会议',
      'AI 智能笔记生成',
      '行动项自动提取',
      '会议 Highlights',
      '团队知识库',
      '多平台支持'
    ],
    useCases: [
      '日常站会记录',
      '客户会议归档',
      '产品评审会议',
      '面试记录',
      '培训会议整理'
    ],
    pros: [
      '笔记结构清晰',
      'AI 准确度高',
      '团队协作好',
      '搜索功能强'
    ],
    cons: [
      '价格偏高',
      '主要支持英文',
      '设置需要时间'
    ],
    relatedSites: [
      { name: 'Supernormal 官网', url: 'https://supernormal.com', type: 'official', description: 'Supernormal 官方网站' },
      { name: 'Supernormal 定价', url: 'https://supernormal.com/pricing', type: 'pricing', description: '价格方案' },
      { name: 'Supernormal 博客', url: 'https://supernormal.com/blog', type: 'tutorial', description: '会议效率文章' },
      { name: 'Supernormal 帮助中心', url: 'https://help.supernormal.com', type: 'tutorial', description: '使用指南' }
    ],
    targetUsers: ['产品团队', '销售团队', '客户成功', '人力资源', '咨询公司'],
    difficulty: 'beginner'
  }
];
