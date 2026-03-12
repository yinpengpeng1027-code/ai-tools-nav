import type { EnhancedTool, RelatedSite } from './types';

export const DATA_ANALYSIS_TOOLS: EnhancedTool[] = [
  // ==================== BI 可视化 ====================
  {
    id: 501,
    name: 'Tableau AI',
    description: '智能商业智能平台，AI 驱动的数据可视化与洞察发现',
    highlights: '行业领先 BI 工具，Einstein AI 智能分析',
    category: '数据分析',
    subCategory: 'BI 可视化',
    logo: '📊',
    url: 'https://www.tableau.com',
    isVip: true,
    price: '$70/用户/月',
    tags: ['BI 可视化', 'AI 分析', '企业级', '仪表盘'],
    features: [
      'Einstein AI 自动洞察发现',
      '拖拽式可视化构建',
      '自然语言查询数据',
      '实时数据连接与刷新',
      '协作共享与权限管理',
      '预测分析与趋势预测'
    ],
    useCases: [
      '企业销售数据可视化',
      '运营仪表盘实时监控',
      '客户行为分析洞察',
      '财务数据报表生成',
      '市场趋势预测分析'
    ],
    pros: [
      '可视化效果业界领先',
      'AI 功能深度集成',
      '生态系统完善',
      '企业级安全可靠'
    ],
    cons: [
      '学习成本较高',
      '价格相对昂贵',
      '需要一定数据基础'
    ],
    relatedSites: [
      { name: 'Tableau 官网', url: 'https://www.tableau.com', type: 'official', description: 'Tableau 官方网站和产品介绍' },
      { name: 'Tableau 学习社区', url: 'https://community.tableau.com', type: 'community', description: '用户交流和教程资源' },
      { name: 'Tableau 定价', url: 'https://www.tableau.com/pricing', type: 'pricing', description: '详细价格方案' },
      { name: 'Tableau 教程', url: 'https://www.tableau.com/learn/training', type: 'tutorial', description: '官方培训视频' }
    ],
    targetUsers: ['数据分析师', '业务分析师', '企业管理者', '数据科学家'],
    difficulty: 'intermediate'
  },
  {
    id: 502,
    name: 'Power BI',
    description: '微软商业智能工具，深度集成 Office 生态，企业数据分析首选',
    highlights: 'Office 生态无缝集成，性价比高的企业 BI 方案',
    category: '数据分析',
    subCategory: 'BI 可视化',
    logo: '📈',
    url: 'https://powerbi.microsoft.com',
    isVip: true,
    price: '$10/用户/月',
    tags: ['微软生态', 'BI 报表', '数据可视化', '企业分析'],
    features: [
      'Excel 无缝数据导入',
      'AI 自动生成洞察',
      '实时数据流处理',
      '丰富的可视化模板',
      '移动端同步查看',
      'Azure 云服务集成'
    ],
    useCases: [
      '企业财务报表自动化',
      '销售数据实时监控',
      '供应链分析优化',
      '人力资源数据分析',
      '客户满意度追踪'
    ],
    pros: [
      '性价比高',
      'Office 集成度高',
      '学习资源丰富',
      '更新迭代快'
    ],
    cons: [
      '大数据量性能一般',
      '自定义视觉对象有限',
      '云服务依赖性强'
    ],
    relatedSites: [
      { name: 'Power BI 官网', url: 'https://powerbi.microsoft.com', type: 'official', description: '微软 Power BI 官方网站' },
      { name: 'Power BI 社区', url: 'https://community.powerbi.com', type: 'community', description: '用户论坛和支持' },
      { name: 'Power BI 定价', url: 'https://powerbi.microsoft.com/pricing', type: 'pricing', description: '订阅价格详情' },
      { name: 'Power BI 学习', url: 'https://learn.microsoft.com/power-bi', type: 'tutorial', description: '官方文档和教程' }
    ],
    targetUsers: ['企业分析师', '财务人员', '运营经理', '数据爱好者'],
    difficulty: 'beginner'
  },
  {
    id: 503,
    name: 'Looker',
    description: 'Google 旗下数据平台，基于 LookML 的现代化 BI 解决方案',
    highlights: 'Google Cloud 原生 BI，数据建模能力强',
    category: '数据分析',
    subCategory: 'BI 可视化',
    logo: '🔍',
    url: 'https://looker.com',
    isVip: true,
    price: '企业定制',
    tags: ['Google Cloud', '数据建模', '嵌入式分析', '企业 BI'],
    features: [
      'LookML 数据建模语言',
      '嵌入式分析能力',
      '实时数据探索',
      'API 优先架构',
      'Google Cloud 深度集成',
      '协作式数据发现'
    ],
    useCases: [
      '产品数据分析',
      '用户行为追踪',
      '嵌入式报表开发',
      '数据驱动决策',
      '跨部门数据共享'
    ],
    pros: [
      '数据建模灵活',
      'API 能力强',
      'Google 生态支持',
      '可扩展性好'
    ],
    cons: [
      '学习曲线陡峭',
      '需要技术背景',
      '价格不透明'
    ],
    relatedSites: [
      { name: 'Looker 官网', url: 'https://looker.com', type: 'official', description: 'Looker 官方网站' },
      { name: 'Looker 文档', url: 'https://docs.looker.com', type: 'tutorial', description: '技术文档和指南' },
      { name: 'Google Cloud Looker', url: 'https://cloud.google.com/looker', type: 'official', description: 'Google Cloud 集成方案' },
      { name: 'Looker 社区', url: 'https://community.looker.com', type: 'community', description: '用户交流平台' }
    ],
    targetUsers: ['数据工程师', '数据分析师', '产品经理', '技术团队'],
    difficulty: 'advanced'
  },
  {
    id: 504,
    name: '帆软 FineBI',
    description: '国产商业智能工具，专为中国企业设计的数据分析平台',
    highlights: '国产 BI 领导品牌，本地化服务好',
    category: '数据分析',
    subCategory: 'BI 可视化',
    logo: '🇨🇳',
    url: 'https://www.fanruan.com/finebi',
    isVip: true,
    price: '企业定制',
    tags: ['国产软件', '企业 BI', '数据可视化', '本地部署'],
    features: [
      '自助式数据分析',
      '丰富中国式报表',
      '多数据源整合',
      '权限精细管控',
      '移动端适配',
      '本地化部署支持'
    ],
    useCases: [
      '企业经营管理分析',
      '财务合并报表',
      '销售业绩分析',
      '生产数据监控',
      '人力资源分析'
    ],
    pros: [
      '中文支持完善',
      '本地化服务好',
      '符合中国报表习惯',
      '部署灵活'
    ],
    cons: [
      '国际化程度低',
      '高级功能需定制',
      '生态相对封闭'
    ],
    relatedSites: [
      { name: '帆软官网', url: 'https://www.fanruan.com', type: 'official', description: '帆软软件官方网站' },
      { name: 'FineBI 帮助文档', url: 'https://help.fanruan.com/finebi', type: 'tutorial', description: '产品使用手册' },
      { name: '帆软社区', url: 'https://bbs.fanruan.com', type: 'community', description: '用户技术交流论坛' },
      { name: '帆软案例', url: 'https://www.fanruan.com/case', type: 'tutorial', description: '行业应用案例' }
    ],
    targetUsers: ['中国企业', '数据分析师', 'IT 部门', '业务管理人员'],
    difficulty: 'intermediate'
  },
  {
    id: 505,
    name: '观远数据',
    description: 'AI 驱动的智能数据分析平台，专注零售和消费行业',
    highlights: 'AI+BI 融合，行业解决方案成熟',
    category: '数据分析',
    subCategory: 'BI 可视化',
    logo: '👁️',
    url: 'https://www.guandata.com',
    isVip: true,
    price: '企业定制',
    tags: ['AI 分析', '零售行业', '智能决策', '国产软件'],
    features: [
      'AI 智能洞察引擎',
      '行业模板丰富',
      '移动决策支持',
      '数据预警推送',
      '协同分析能力',
      '数据安全管控'
    ],
    useCases: [
      '零售门店分析',
      '供应链优化',
      '会员精准营销',
      '商品智能选品',
      '销售预测规划'
    ],
    pros: [
      '行业理解深入',
      'AI 能力实用',
      '移动端体验好',
      '实施周期短'
    ],
    cons: [
      '行业聚焦较窄',
      '通用场景有限',
      '品牌知名度待提升'
    ],
    relatedSites: [
      { name: '观远数据官网', url: 'https://www.guandata.com', type: 'official', description: '观远数据官方网站' },
      { name: '观远产品文档', url: 'https://www.guandata.com/product', type: 'tutorial', description: '产品介绍和文档' },
      { name: '观远案例', url: 'https://www.guandata.com/cases', type: 'tutorial', description: '客户成功案例' },
      { name: '观远公众号', url: 'https://mp.weixin.qq.com/guandata', type: 'community', description: '官方微信公众号' }
    ],
    targetUsers: ['零售企业', '消费品公司', '连锁门店', '电商企业'],
    difficulty: 'intermediate'
  },
  {
    id: 506,
    name: 'Sisense',
    description: '嵌入式分析平台，将 AI 驱动的分析集成到任何应用中',
    highlights: '嵌入式分析领导者，AI 驱动洞察',
    category: '数据分析',
    subCategory: 'BI 可视化',
    logo: '💡',
    url: 'https://www.sisense.com',
    isVip: true,
    price: '企业定制',
    tags: ['嵌入式分析', 'AI 驱动', '白标方案', '企业 BI'],
    features: [
      '嵌入式分析 SDK',
      'AI 自动洞察',
      '数据准备自动化',
      '白标定制能力',
      '实时数据管道',
      '协作分析工作流'
    ],
    useCases: [
      'SaaS 产品内嵌分析',
      '客户门户数据展示',
      '内部运营仪表盘',
      '合作伙伴数据共享',
      '产品使用分析'
    ],
    pros: [
      '嵌入式能力强大',
      'AI 功能实用',
      '定制灵活',
      '性能优秀'
    ],
    cons: [
      '价格较高',
      '需要开发资源',
      '学习曲线较陡'
    ],
    relatedSites: [
      { name: 'Sisense 官网', url: 'https://www.sisense.com', type: 'official', description: 'Sisense 官方网站' },
      { name: 'Sisense 开发者文档', url: 'https://docs.sisense.com', type: 'tutorial', description: 'API 和开发文档' },
      { name: 'Sisense 社区', url: 'https://community.sisense.com', type: 'community', description: '用户支持论坛' },
      { name: 'Sisense 博客', url: 'https://www.sisense.com/blog', type: 'tutorial', description: '行业洞察和教程' }
    ],
    targetUsers: ['SaaS 公司', '产品团队', '数据产品经理', '开发者'],
    difficulty: 'advanced'
  },
  {
    id: 507,
    name: 'Domo',
    description: '云原生 BI 平台，连接所有数据源的一体化解决方案',
    highlights: '云原生架构，数据连接能力强大',
    category: '数据分析',
    subCategory: 'BI 可视化',
    logo: '☁️',
    url: 'https://www.domo.com',
    isVip: true,
    price: '$83/用户/月',
    tags: ['云原生', '数据集成', '实时分析', '移动优先'],
    features: [
      '1000+ 数据连接器',
      '实时数据同步',
      '移动优先设计',
      'AI 智能预警',
      '协作分享功能',
      '自定义应用开发'
    ],
    useCases: [
      '高管决策仪表盘',
      '销售绩效管理',
      '市场营销分析',
      '运营效率监控',
      '财务数据整合'
    ],
    pros: [
      '数据连接丰富',
      '移动端体验佳',
      '部署快速',
      '用户友好'
    ],
    cons: [
      '价格偏高',
      '高级功能需定制',
      '大数据量性能一般'
    ],
    relatedSites: [
      { name: 'Domo 官网', url: 'https://www.domo.com', type: 'official', description: 'Domo 官方网站' },
      { name: 'Domo 应用市场', url: 'https://www.domo.com/appstore', type: 'tutorial', description: '预建应用和连接器' },
      { name: 'Domo 学习中心', url: 'https://www.domo.com/learn', type: 'tutorial', description: '培训资源和教程' },
      { name: 'Domo 社区', url: 'https://community.domo.com', type: 'community', description: '用户交流平台' }
    ],
    targetUsers: ['企业管理者', '业务分析师', '销售团队', '市场部门'],
    difficulty: 'beginner'
  },
  {
    id: 508,
    name: 'Qlik Sense',
    description: '关联分析引擎驱动的 BI 平台，发现数据间的隐藏关系',
    highlights: '独特关联引擎，探索式数据分析',
    category: '数据分析',
    subCategory: 'BI 可视化',
    logo: '🔗',
    url: 'https://www.qlik.com',
    isVip: true,
    price: '$30/用户/月',
    tags: ['关联分析', '探索式 BI', '自助分析', '数据发现'],
    features: [
      '关联分析引擎',
      '智能数据准备',
      '增强分析 AI',
      '自助式探索',
      '嵌入式分析',
      '多云部署支持'
    ],
    useCases: [
      '数据探索发现',
      '根因分析',
      '业务假设验证',
      '跨数据源关联',
      '预测性分析'
    ],
    pros: [
      '关联引擎独特',
      '探索能力强',
      '部署灵活',
      '性价比高'
    ],
    cons: [
      '学习曲线较陡',
      '可视化一般',
      '社区相对较小'
    ],
    relatedSites: [
      { name: 'Qlik 官网', url: 'https://www.qlik.com', type: 'official', description: 'Qlik 官方网站' },
      { name: 'Qlik 社区', url: 'https://community.qlik.com', type: 'community', description: '用户论坛和支持' },
      { name: 'Qlik 学习', url: 'https://www.qlik.com/us/services/education', type: 'tutorial', description: '培训课程' },
      { name: 'Qlik 定价', url: 'https://www.qlik.com/us/products/pricing', type: 'pricing', description: '价格方案' }
    ],
    targetUsers: ['数据分析师', '业务用户', '数据探索者', '研究团队'],
    difficulty: 'intermediate'
  },

  // ==================== 自动化机器学习 ====================
  {
    id: 509,
    name: 'DataRobot',
    description: '企业级 AutoML 平台，自动化构建和部署机器学习模型',
    highlights: 'AutoML 领导者，企业级 ML 平台',
    category: '数据分析',
    subCategory: '自动化机器学习',
    logo: '🤖',
    url: 'https://www.datarobot.com',
    isVip: true,
    price: '企业定制',
    tags: ['AutoML', '机器学习', '模型部署', '企业 AI'],
    features: [
      '自动化特征工程',
      '多模型自动训练',
      '模型解释和监控',
      '一键部署生产',
      '时间序列预测',
      'AI 治理和合规'
    ],
    useCases: [
      '销售预测建模',
      '客户流失预警',
      '风险评分模型',
      '需求预测',
      '欺诈检测'
    ],
    pros: [
      '自动化程度高',
      '模型可解释性强',
      '企业级功能完善',
      '支持多种场景'
    ],
    cons: [
      '价格昂贵',
      '需要数据基础',
      '定制能力有限'
    ],
    relatedSites: [
      { name: 'DataRobot 官网', url: 'https://www.datarobot.com', type: 'official', description: 'DataRobot 官方网站' },
      { name: 'DataRobot 文档', url: 'https://docs.datarobot.com', type: 'tutorial', description: '产品文档' },
      { name: 'DataRobot 社区', url: 'https://community.datarobot.com', type: 'community', description: '用户社区' },
      { name: 'DataRobot 博客', url: 'https://www.datarobot.com/blog', type: 'tutorial', description: '技术博客' }
    ],
    targetUsers: ['数据科学家', '分析师', '业务团队', '企业 AI 团队'],
    difficulty: 'intermediate'
  },
  {
    id: 510,
    name: 'Akkio',
    description: '无代码 AI 平台，让业务人员也能轻松构建预测模型',
    highlights: '无代码 AI，业务人员友好',
    category: '数据分析',
    subCategory: '自动化机器学习',
    logo: '⚡',
    url: 'https://www.akkio.com',
    isVip: true,
    price: '$49/月',
    tags: ['无代码', '预测分析', '业务友好', '快速部署'],
    features: [
      '拖拽式模型构建',
      '自动数据准备',
      '预测结果可视化',
      '一键部署 API',
      'Google Sheets 集成',
      '实时预测服务'
    ],
    useCases: [
      '销售线索评分',
      '客户流失预测',
      '收入预测',
      '营销效果分析',
      '库存需求预测'
    ],
    pros: [
      '无需编程知识',
      '上手快速',
      '价格亲民',
      '集成方便'
    ],
    cons: [
      '功能相对简单',
      '自定义能力有限',
      '不适合复杂场景'
    ],
    relatedSites: [
      { name: 'Akkio 官网', url: 'https://www.akkio.com', type: 'official', description: 'Akkio 官方网站' },
      { name: 'Akkio 教程', url: 'https://www.akkio.com/tutorials', type: 'tutorial', description: '使用教程' },
      { name: 'Akkio 定价', url: 'https://www.akkio.com/pricing', type: 'pricing', description: '价格方案' },
      { name: 'Akkio 博客', url: 'https://www.akkio.com/blog', type: 'tutorial', description: '应用案例和技巧' }
    ],
    targetUsers: ['业务分析师', '营销人员', '销售人员', '小企业主'],
    difficulty: 'beginner'
  },

  // ==================== AI 数据分析 ====================
  {
    id: 511,
    name: 'Julius AI',
    description: 'AI 数据分析师，用自然语言对话分析数据',
    highlights: '对话式数据分析，零门槛使用',
    category: '数据分析',
    subCategory: 'AI 数据分析',
    logo: '💬',
    url: 'https://julius.ai',
    isVip: true,
    price: '$20/月',
    tags: ['AI 分析', '自然语言', '对话交互', '数据洞察'],
    features: [
      '自然语言数据查询',
      '自动图表生成',
      '数据清洗处理',
      '统计分析自动化',
      '洞察报告生成',
      '多格式数据支持'
    ],
    useCases: [
      '销售数据快速分析',
      '财务报表解读',
      '市场调研分析',
      '运营数据洞察',
      '学术研究分析'
    ],
    pros: [
      '使用门槛低',
      '分析速度快',
      '结果易理解',
      '性价比高'
    ],
    cons: [
      '复杂分析能力有限',
      '依赖 AI 准确性',
      '自定义能力弱'
    ],
    relatedSites: [
      { name: 'Julius AI 官网', url: 'https://julius.ai', type: 'official', description: 'Julius AI 官方网站' },
      { name: 'Julius 使用指南', url: 'https://julius.ai/guide', type: 'tutorial', description: '使用教程' },
      { name: 'Julius 定价', url: 'https://julius.ai/pricing', type: 'pricing', description: '订阅价格' },
      { name: 'Julius 案例', url: 'https://julius.ai/examples', type: 'tutorial', description: '应用示例' }
    ],
    targetUsers: ['业务人员', '学生', '研究者', '数据新手'],
    difficulty: 'beginner'
  },
  {
    id: 512,
    name: 'Thoughtspot',
    description: '搜索驱动的分析平台，像 Google 一样搜索数据洞察',
    highlights: '搜索式分析，企业级 AI 洞察',
    category: '数据分析',
    subCategory: 'AI 数据分析',
    logo: '🔎',
    url: 'https://www.thoughtspot.com',
    isVip: true,
    price: '企业定制',
    tags: ['搜索分析', 'AI 洞察', '企业 BI', '自然语言'],
    features: [
      '搜索式数据查询',
      'AI 自动洞察',
      '实时数据连接',
      '嵌入式分析',
      '协作分享',
      '移动访问'
    ],
    useCases: [
      '高管数据查询',
      '业务自助分析',
      '销售数据探索',
      '运营问题诊断',
      '客户分析'
    ],
    pros: [
      '搜索体验好',
      'AI 洞察实用',
      '企业级功能',
      '部署灵活'
    ],
    cons: [
      '价格较高',
      '需要数据治理',
      '学习成本存在'
    ],
    relatedSites: [
      { name: 'Thoughtspot 官网', url: 'https://www.thoughtspot.com', type: 'official', description: 'Thoughtspot 官方网站' },
      { name: 'Thoughtspot 社区', url: 'https://community.thoughtspot.com', type: 'community', description: '用户社区' },
      { name: 'Thoughtspot 文档', url: 'https://docs.thoughtspot.com', type: 'tutorial', description: '产品文档' },
      { name: 'Thoughtspot 博客', url: 'https://www.thoughtspot.com/blog', type: 'tutorial', description: '行业洞察' }
    ],
    targetUsers: ['企业管理者', '业务分析师', '数据团队', '运营人员'],
    difficulty: 'intermediate'
  },
  {
    id: 513,
    name: 'ChartGPT',
    description: 'AI 驱动的图表生成工具，文字描述自动生成可视化',
    highlights: '文生图表，快速数据可视化',
    category: '数据分析',
    subCategory: 'AI 数据分析',
    logo: '📉',
    url: 'https://chartgpt.io',
    isVip: true,
    price: '$10/月',
    tags: ['AI 图表', '数据可视化', '文生图', '快速分析'],
    features: [
      '文字描述生成图表',
      '多图表类型支持',
      '数据自动处理',
      '图表美化优化',
      '导出多种格式',
      '协作分享功能'
    ],
    useCases: [
      '报告图表快速生成',
      '数据演示制作',
      '研究数据可视化',
      '业务汇报图表',
      '教学材料制作'
    ],
    pros: [
      '使用简单',
      '生成快速',
      '价格亲民',
      '效果不错'
    ],
    cons: [
      '复杂图表支持有限',
      '数据量有限制',
      '自定义能力一般'
    ],
    relatedSites: [
      { name: 'ChartGPT 官网', url: 'https://chartgpt.io', type: 'official', description: 'ChartGPT 官方网站' },
      { name: 'ChartGPT 示例', url: 'https://chartgpt.io/examples', type: 'tutorial', description: '使用示例' },
      { name: 'ChartGPT 定价', url: 'https://chartgpt.io/pricing', type: 'pricing', description: '价格方案' },
      { name: 'ChartGPT 文档', url: 'https://chartgpt.io/docs', type: 'tutorial', description: '使用文档' }
    ],
    targetUsers: ['学生', '研究者', '业务人员', '内容创作者'],
    difficulty: 'beginner'
  },

  // ==================== 数据表格 ====================
  {
    id: 514,
    name: 'Polymer',
    description: 'AI 驱动的智能表格平台，让电子表格会思考',
    highlights: '智能表格 +AI 分析，数据管理新体验',
    category: '数据分析',
    subCategory: '数据表格',
    logo: '📋',
    url: 'https://www.polymersearch.com',
    isVip: true,
    price: '$49/月',
    tags: ['智能表格', 'AI 搜索', '数据管理', '无代码'],
    features: [
      'AI 自动标签分类',
      '智能数据搜索',
      '数据关系可视化',
      '自动数据提取',
      '工作流自动化',
      '团队协作功能'
    ],
    useCases: [
      '客户数据管理',
      '项目任务追踪',
      '销售线索管理',
      '内容日历规划',
      '招聘流程管理'
    ],
    pros: [
      'AI 功能实用',
      '界面美观',
      '上手容易',
      '集成方便'
    ],
    cons: [
      '价格偏高',
      '功能相对聚焦',
      '企业功能有限'
    ],
    relatedSites: [
      { name: 'Polymer 官网', url: 'https://www.polymersearch.com', type: 'official', description: 'Polymer 官方网站' },
      { name: 'Polymer 模板', url: 'https://www.polymersearch.com/templates', type: 'tutorial', description: '模板库' },
      { name: 'Polymer 定价', url: 'https://www.polymersearch.com/pricing', type: 'pricing', description: '订阅价格' },
      { name: 'Polymer 博客', url: 'https://www.polymersearch.com/blog', type: 'tutorial', description: '使用技巧' }
    ],
    targetUsers: ['团队管理者', '项目经理', '销售人员', '运营人员'],
    difficulty: 'beginner'
  },

  // ==================== 数据可视化工具 ====================
  {
    id: 515,
    name: 'Datawrapper',
    description: '专业的数据可视化工具，为新闻媒体和数据记者打造',
    highlights: '新闻级图表，专业数据可视化',
    category: '数据分析',
    subCategory: '数据可视化工具',
    logo: '📊',
    url: 'https://www.datawrapper.de',
    isVip: true,
    price: '$599/月',
    tags: ['数据可视化', '新闻媒体', '交互图表', '信息图'],
    features: [
      '丰富的图表类型',
      '响应式设计',
      '无障碍访问支持',
      '数据自动更新',
      '品牌定制',
      '嵌入分享方便'
    ],
    useCases: [
      '新闻报道图表',
      '数据新闻制作',
      '研究报告可视化',
      '公开数据展示',
      '教育材料制作'
    ],
    pros: [
      '图表质量高',
      '符合新闻标准',
      '无障碍支持',
      '技术支持好'
    ],
    cons: [
      '价格昂贵',
      '功能相对聚焦',
      '学习曲线存在'
    ],
    relatedSites: [
      { name: 'Datawrapper 官网', url: 'https://www.datawrapper.de', type: 'official', description: 'Datawrapper 官方网站' },
      { name: 'Datawrapper 学院', url: 'https://academy.datawrapper.de', type: 'tutorial', description: '教程和指南' },
      { name: 'Datawrapper 博客', url: 'https://blog.datawrapper.de', type: 'tutorial', description: '数据可视化博客' },
      { name: 'Datawrapper 定价', url: 'https://www.datawrapper.de/pricing', type: 'pricing', description: '价格方案' }
    ],
    targetUsers: ['新闻记者', '编辑', '研究者', '数据传播者'],
    difficulty: 'intermediate'
  },
  {
    id: 516,
    name: 'Infogram',
    description: '在线信息图和数据可视化工具，轻松创建精美图表',
    highlights: '信息图设计简单，模板丰富',
    category: '数据分析',
    subCategory: '数据可视化工具',
    logo: '🎨',
    url: 'https://infogram.com',
    isVip: true,
    price: '$19/月',
    tags: ['信息图', '数据可视化', '模板丰富', '在线设计'],
    features: [
      '拖拽式编辑器',
      '丰富模板库',
      '实时数据连接',
      '交互图表支持',
      '品牌工具包',
      '多格式导出'
    ],
    useCases: [
      '营销报告制作',
      '社交媒体图表',
      '博客数据可视化',
      '企业内部报告',
      '教育演示材料'
    ],
    pros: [
      '上手简单',
      '模板多样',
      '价格适中',
      '协作方便'
    ],
    cons: [
      '高级功能需付费',
      '自定义有限',
      '数据量有限制'
    ],
    relatedSites: [
      { name: 'Infogram 官网', url: 'https://infogram.com', type: 'official', description: 'Infogram 官方网站' },
      { name: 'Infogram 模板', url: 'https://infogram.com/templates', type: 'tutorial', description: '模板库' },
      { name: 'Infogram 定价', url: 'https://infogram.com/pricing', type: 'pricing', description: '订阅价格' },
      { name: 'Infogram 博客', url: 'https://infogram.com/blog', type: 'tutorial', description: '设计技巧和案例' }
    ],
    targetUsers: ['营销人员', '内容创作者', '教师', '小企业主'],
    difficulty: 'beginner'
  },

  // ==================== 开源分析 ====================
  {
    id: 517,
    name: 'Metabase',
    description: '开源 BI 工具，让团队每个人都能问数据问题',
    highlights: '开源免费，简单易用的 BI 工具',
    category: '数据分析',
    subCategory: '开源分析',
    logo: '🟣',
    url: 'https://www.metabase.com',
    isVip: false,
    price: '开源免费/企业版$85/月',
    tags: ['开源', 'BI 工具', '自助分析', '易于使用'],
    features: [
      '可视化查询构建器',
      '自动仪表盘',
      '数据警报推送',
      '嵌入式分析',
      '多数据源支持',
      '权限管理'
    ],
    useCases: [
      '创业公司数据分析',
      '产品指标追踪',
      '运营报表',
      '团队自助查询',
      '客户数据分析'
    ],
    pros: [
      '开源免费',
      '部署简单',
      '界面友好',
      '社区活跃'
    ],
    cons: [
      '高级功能需企业版',
      '复杂查询能力有限',
      '性能一般'
    ],
    relatedSites: [
      { name: 'Metabase 官网', url: 'https://www.metabase.com', type: 'official', description: 'Metabase 官方网站' },
      { name: 'Metabase 文档', url: 'https://www.metabase.com/docs', type: 'tutorial', description: '使用文档' },
      { name: 'Metabase GitHub', url: 'https://github.com/metabase/metabase', type: 'official', description: '开源代码仓库' },
      { name: 'Metabase 社区', url: 'https://www.metabase.com/community', type: 'community', description: '用户社区' }
    ],
    targetUsers: ['创业公司', '开发团队', '产品经理', '数据分析师'],
    difficulty: 'beginner'
  },
  {
    id: 518,
    name: 'Redash',
    description: '开源数据查询和可视化工具，连接任何数据源',
    highlights: '开源灵活，SQL 查询友好',
    category: '数据分析',
    subCategory: '开源分析',
    logo: '🔴',
    url: 'https://redash.io',
    isVip: false,
    price: '开源免费/云服务$25/月',
    tags: ['开源', 'SQL 查询', '数据可视化', '灵活部署'],
    features: [
      'SQL 查询编辑器',
      '可视化图表',
      '仪表盘构建',
      '计划刷新',
      '警报通知',
      '协作分享'
    ],
    useCases: [
      '数据库查询分析',
      '运营监控仪表盘',
      '业务报表',
      '数据探索',
      '团队协作分析'
    ],
    pros: [
      '开源免费',
      'SQL 支持好',
      '部署灵活',
      '扩展性强'
    ],
    cons: [
      '需要 SQL 知识',
      '界面相对简单',
      '自助分析能力弱'
    ],
    relatedSites: [
      { name: 'Redash 官网', url: 'https://redash.io', type: 'official', description: 'Redash 官方网站' },
      { name: 'Redash 文档', url: 'https://redash.io/help', type: 'tutorial', description: '使用帮助' },
      { name: 'Redash GitHub', url: 'https://github.com/getredash/redash', type: 'official', description: '开源项目' },
      { name: 'Redash 社区', url: 'https://discuss.redash.io', type: 'community', description: '讨论论坛' }
    ],
    targetUsers: ['数据分析师', '开发人员', '数据工程师', '技术团队'],
    difficulty: 'intermediate'
  },
  {
    id: 519,
    name: 'Chartio',
    description: '云 BI 工具，无需 SQL 即可探索和分析数据（已被 Atlassian 收购）',
    highlights: '无代码 BI，可视化查询（已停止新销售）',
    category: '数据分析',
    subCategory: '开源分析',
    logo: '📈',
    url: 'https://www.chartio.com',
    isVip: true,
    price: '已停止新销售',
    tags: ['云 BI', '无代码', '可视化查询', 'Atlassian'],
    features: [
      '可视化查询构建',
      '数据管道',
      '仪表盘分享',
      '计划报告',
      '数据探索',
      '团队协作'
    ],
    useCases: [
      '业务数据分析',
      '产品指标追踪',
      '营销效果分析',
      '运营报表',
      '财务分析'
    ],
    pros: [
      '无需 SQL',
      '界面直观',
      '部署快速',
      'Atlassian 集成'
    ],
    cons: [
      '已停止新销售',
      '功能相对简单',
      '自定义能力有限'
    ],
    relatedSites: [
      { name: 'Chartio 官网', url: 'https://www.chartio.com', type: 'official', description: 'Chartio 官方网站' },
      { name: 'Atlassian 公告', url: 'https://www.atlassian.com/blog/announcements/chartio', type: 'official', description: '收购公告' },
      { name: 'Chartio 替代方案', url: 'https://www.chartio.com/alternatives', type: 'alternative', description: '推荐替代工具' },
      { name: 'Chartio 文档', url: 'https://chartio.com/learn', type: 'tutorial', description: '使用文档' }
    ],
    targetUsers: ['现有用户', 'Atlassian 用户', '业务分析师', '非技术用户'],
    difficulty: 'beginner'
  },
  {
    id: 520,
    name: 'Periscope Data',
    description: '数据分析平台，服务于数据分析师和数据科学家',
    highlights: '分析师友好，SQL+Python+R 支持',
    category: '数据分析',
    subCategory: '开源分析',
    logo: '🔭',
    url: 'https://www.periscopedata.com',
    isVip: true,
    price: '企业定制',
    tags: ['数据分析', 'SQL', 'Python', '企业 BI'],
    features: [
      'SQL 查询分析',
      'Python/R 集成',
      '可视化图表',
      '数据建模',
      '协作工作流',
      '权限管控'
    ],
    useCases: [
      '复杂数据分析',
      '数据科学项目',
      '业务洞察报告',
      '数据产品构建',
      '团队协作分析'
    ],
    pros: [
      '分析师友好',
      '代码灵活',
      '功能强大',
      '企业级支持'
    ],
    cons: [
      '价格较高',
      '需要技术背景',
      '学习曲线陡'
    ],
    relatedSites: [
      { name: 'Periscope Data 官网', url: 'https://www.periscopedata.com', type: 'official', description: '官方网站' },
      { name: 'Periscope 文档', url: 'https://doc.periscopedata.com', type: 'tutorial', description: '产品文档' },
      { name: 'Periscope 博客', url: 'https://www.periscopedata.com/blog', type: 'tutorial', description: '数据科学博客' },
      { name: 'Sisense Periscope', url: 'https://www.sisense.com/platform/advanced-analytics', type: 'official', description: 'Sisense 整合方案' }
    ],
    targetUsers: ['数据分析师', '数据科学家', '分析团队', '技术公司'],
    difficulty: 'advanced'
  },
  {
    id: 521,
    name: 'Holistics',
    description: '自助式 BI 平台，以数据建模为核心的分析解决方案',
    highlights: '数据建模驱动，自助分析平台',
    category: '数据分析',
    subCategory: '开源分析',
    logo: '🔧',
    url: 'https://www.holistics.io',
    isVip: true,
    price: '$99/月',
    tags: ['自助 BI', '数据建模', 'SQL', '企业分析'],
    features: [
      '语义数据建模',
      '自助分析探索',
      '嵌入式分析',
      '计划报告',
      '数据警报',
      '版本控制'
    ],
    useCases: [
      '企业数据平台',
      '产品分析',
      '运营监控',
      '客户分析',
      '财务分析'
    ],
    pros: [
      '建模能力强',
      '自助分析好',
      '部署灵活',
      '性价比高'
    ],
    cons: [
      '需要 SQL 基础',
      '界面一般',
      '生态较小'
    ],
    relatedSites: [
      { name: 'Holistics 官网', url: 'https://www.holistics.io', type: 'official', description: 'Holistics 官方网站' },
      { name: 'Holistics 文档', url: 'https://docs.holistics.io', type: 'tutorial', description: '产品文档' },
      { name: 'Holistics 博客', url: 'https://www.holistics.io/blog', type: 'tutorial', description: '技术博客' },
      { name: 'Holistics 定价', url: 'https://www.holistics.io/pricing', type: 'pricing', description: '价格方案' }
    ],
    targetUsers: ['数据团队', '分析师', '数据工程师', '创业公司'],
    difficulty: 'intermediate'
  },
  {
    id: 522,
    name: 'Mode Analytics',
    description: '协作数据分析平台，结合 SQL 分析和可视化',
    highlights: 'SQL+ 可视化 + 协作，分析师首选',
    category: '数据分析',
    subCategory: '开源分析',
    logo: '📐',
    url: 'https://mode.com',
    isVip: true,
    price: '已停止新销售',
    tags: ['SQL 分析', '协作', '数据可视化', '企业 BI'],
    features: [
      'SQL 编辑器',
      '可视化构建',
      '协作笔记本',
      '数据探索',
      '报告分享',
      '数据治理'
    ],
    useCases: [
      '数据团队协作',
      '业务分析报告',
      '数据探索分析',
      '指标追踪',
      '决策支持'
    ],
    pros: [
      'SQL 体验好',
      '协作功能强',
      '可视化不错',
      '分析师友好'
    ],
    cons: [
      '已停止新销售',
      '价格较高',
      '需要 SQL 技能'
    ],
    relatedSites: [
      { name: 'Mode 官网', url: 'https://mode.com', type: 'official', description: 'Mode Analytics 官网' },
      { name: 'Mode 资源', url: 'https://mode.com/resources', type: 'tutorial', description: '学习资源' },
      { name: 'Mode 替代方案', url: 'https://mode.com/alternatives', type: 'alternative', description: '替代工具推荐' },
      { name: 'Mode 博客', url: 'https://mode.com/blog', type: 'tutorial', description: '数据分析博客' }
    ],
    targetUsers: ['数据分析师', '分析团队', '数据科学家', '业务分析师'],
    difficulty: 'intermediate'
  },
];
