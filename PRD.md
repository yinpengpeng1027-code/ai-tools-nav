# 📋 AI 工具导航站 - 产品需求文档 (PRD)

**项目名称：** AI 工具导航站（国内版 FuturePedia）  
**版本：** v1.0  
**撰写日期：** 2026-03-09  
**状态：** 待评审

---

## 一、产品定位

### 1.1 对标产品

**主对标：** [FuturePedia.io](https://www.futurepedia.io/)
- 全球最大 AI 工具导航站之一
- 收录 2651+ AI 工具，10 大分类
- 月活 350,000+ AI 从业者
- 商业模式：会员订阅 + 联盟佣金 + 广告推广

**辅助对标：**
| 产品 | 特点 | 可借鉴点 |
|:-----|:-----|:---------|
| **FuturePedia** (国际) | 工具库 + 教程 + YouTube 频道 | 内容生态建设 |
| **AI 工具集** (国内) | 中文界面、本土化工具 | 本地化运营 |
| **产品 Hunt** (国际) | 社区驱动、用户提交 | UGC 模式 |
| **There's An AI For That** | AI 匹配推荐 | 智能推荐算法 |

### 1.2 产品定位

**一句话定位：**
> 国内最全面的 AI 工具发现与学习平台，60% 免费资源 + 40% 精选付费，帮助普通人快速找到并掌握 AI 工具。

**目标用户：**
| 用户类型 | 占比 | 需求 | 付费意愿 |
|:---------|:----:|:-----|:---------|
| **学生/初学者** | 40% | 免费工具入门、基础教程 | 低 |
| **职场人士** | 35% | 效率工具、技能提升 | 中 |
| **创作者/自媒体** | 15% | 内容生成工具、爆款技巧 | 高 |
| **企业/团队** | 10% | 批量工具、API 集成、培训 | 很高 |

**核心价值：**
1. ✅ **省时** - 海量工具一站式发现，避免搜索成本
2. ✅ **省钱** - 精选免费替代方案，避免踩坑付费
3. ✅ **高效** - 分类清晰 + 智能推荐，快速匹配需求
4. ✅ **成长** - 教程 + 案例，从"知道"到"会用"

---

## 二、资源分层策略

### 2.1 三层资源结构

```
┌─────────────────────────────────────────────────────┐
│  🆓 免费库 (60%)                                     │
│  • 基础 AI 工具（免费版本）                           │
│  • 开源项目                                          │
│  • 入门教程                                          │
│  • 工具对比/评测（基础版）                            │
│  权限：全员可访问                                    │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│  💎 付费库 (20%)                                     │
│  • 高级工具（付费版/专业版）                          │
│  • 深度教程/系列课                                   │
│  • 行业解决方案                                      │
│  • 工具对比/评测（专业版）                            │
│  权限：VIP 会员可访问                                 │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│  👑 私域高端库 (20%)                                 │
│  • 独家内测工具（早鸟访问）                           │
│  • 1v1 咨询/定制方案                                 │
│  • 闭门社群/私董会                                   │
│  • 企业级 API/批量授权                              │
│  权限：高端会员/企业客户（高客单价）                  │
└─────────────────────────────────────────────────────┘
```

### 2.2 各层级详细说明

#### 🆓 免费库 (60%)

**目标：** 引流获客、建立信任、培养习惯

**内容类型：**
| 类型 | 示例 | 数量目标 |
|:-----|:-----|:---------|
| 免费 AI 工具 | ChatGPT 免费版、文心一言、通义千问 | 500+ |
| 开源项目 | Stable Diffusion、LangChain | 100+ |
| 入门教程 | "5 分钟上手 Midjourney" | 200+ |
| 工具榜单 | "2026 最佳 AI 写作工具 TOP10" | 50+ |
| 行业资讯 | AI 领域最新动态 | 日更 |

**变现方式：**
- 广告位（联盟链接）
- 引导升级 VIP
- 流量分发佣金

---

#### 💎 付费库 (20%)

**目标：** 核心收入来源、提供高价值内容

**内容类型：**
| 类型 | 示例 | 定价参考 |
|:-----|:-----|:---------|
| 高级工具 | Jasper、Notion AI 付费版 | 含在会员内 |
| 系列课程 | "AI 绘画从入门到变现" | ¥199-¥599 |
| 行业方案 | "自媒体人 AI 工具包" | ¥299 |
| 深度评测 | "10 款 AI 写作工具横评" | 会员专享 |
| 模板库 | Prompt 模板、工作流模板 | 会员专享 |

**定价策略：**
| 套餐 | 价格 | 权益 |
|:-----|:-----|:-----|
| 月卡 | ¥19/月 | 解锁付费库 + 无广告 |
| 年卡 | ¥168/年 | 同上 + 专属客服 |
| 终身 | ¥398 | 永久访问 + 荣誉标识 |

---

#### 👑 私域高端库 (20%)

**目标：** 高客单价、深度服务、建立壁垒

**内容类型：**
| 类型 | 示例 | 定价参考 |
|:-----|:-----|:---------|
| 早期内测 | 未公开 AI 工具抢先体验 | ¥999/年 |
| 1v1 咨询 | 个人/企业 AI 转型方案 | ¥2000/次 |
| 私董会 | 月度闭门交流会 | ¥5000/年 |
| 企业培训 | 团队 AI 技能培训 | ¥10000+/场 |
| 定制开发 | 工作流定制、API 集成 | 面议 |

**获客方式：**
- 从 VIP 用户中转化
- 企业客户主动咨询
- 线下活动/沙龙

---

## 三、商业模式

### 3.1 收入结构

```
总收入 (100%)
├── 会员订阅 (40%)
│   ├── VIP 会员（月卡/年卡/终身）
│   └── 高端私域会员
│
├── 联盟佣金 (35%)
│   ├── AI 工具推广分成
│   ├── 课程/知识付费分销
│   └── 云服务/服务器推荐
│
├── 广告收入 (15%)
│   ├── 工具置顶/推荐位
│   ├── Banner 广告
│   └── 软文/赞助内容
│
└── 企业服务 (10%)
    ├── 定制培训
    ├── API 集成
    └── 咨询顾问
```

### 3.2 联盟佣金平台推荐

**优先接入（按优先级排序）：**

| 平台 | 类型 | 佣金比例 | 适合度 | 说明 |
|:-----|:-----|:---------|:------:|:-----|
| **PartnerStack** | SaaS 联盟 | 20-40% | ⭐⭐⭐⭐⭐ | 国际主流，Jasper/Notion 等都在上面 |
| **Impact** | 综合联盟 | 15-30% | ⭐⭐⭐⭐ | 品牌多，追踪系统完善 |
| **淘宝联盟** | 电商 | 3-10% | ⭐⭐⭐ | 国内用户友好，但 AI 工具少 |
| **小鹅通** | 知识付费 | 10-50% | ⭐⭐⭐⭐ | 可分销课程/会员 |
| **知识星球** | 社群 | 20-40% | ⭐⭐⭐ | 适合私域运营 |
| **各工具官方联盟** | 直销 | 20-50% | ⭐⭐⭐⭐⭐ | 直接谈，佣金最高 |

**建议策略：**
1. **短期（0-3 月）：** 接入 PartnerStack + Impact，快速上线联盟链接
2. **中期（3-6 月）：** 对接小鹅通/知识星球，分销国内课程
3. **长期（6 月+）：** 与头部 AI 工具谈独家合作，提高佣金比例

**预计收益：**
- 假设月活 10,000 用户
- 转化率 3% → 300 人购买
- 平均佣金 ¥50/单 → ¥15,000/月
- 成熟后预计 ¥50,000-100,000/月

---

## 四、功能需求

### 4.1 用户系统

#### 4.1.1 注册/登录

| 功能 | 说明 | 优先级 |
|:-----|:-----|:------:|
| 手机号登录 | 验证码登录 | P0 |
| 微信扫码 | 一键登录 | P0 |
| 邮箱登录 | 传统方式 | P1 |
| 账号绑定 | 多方式绑定同一账号 | P1 |

#### 4.1.2 会员体系

| 等级 | 标识 | 权益 |
|:-----|:-----|:-----|
| 游客 | - | 浏览免费内容 |
| 注册用户 | 🆓 | 收藏、评论、提交工具 |
| VIP 会员 | 💎 | 解锁付费库、无广告、优先审核 |
| 高端会员 | 👑 | 私域内容、1v1 咨询、闭门活动 |

#### 4.1.3 个人中心

- 基本信息（头像、昵称、绑定方式）
- 会员状态（当前等级、到期时间）
- 我的收藏（工具/教程）
- 浏览历史
- 我的提交（状态追踪）
- 订单记录

---

### 4.2 工具库系统

#### 4.2.1 工具数据结构

```prisma
model Tool {
  id            String   @id @default(cuid())
  name          String   // 工具名称
  nameEn        String?  // 英文名称
  description   String   // 简介（200 字内）
  longDesc      String?  // 详细介绍（Markdown）
  url           String   // 官网链接
  affiliateUrl  String?  // 联盟链接（追踪用）
  logo          String?  // Logo 图片 URL
  screenshots   String[] // 截图数组
  
  // 分类与标签
  categories    Category[]
  tags          Tag[]
  
  // 权限控制
  accessLevel   String   @default("free") // free/vip/premium
  vipReason     String?  // VIP 专属理由
  
  // 价格信息
  pricing       String?  // 价格说明（如"¥99/月"）
  hasFreeTier   Boolean  @default(true)
  
  // 热度与评价
  views         Int      @default(0)
  likes         Int      @default(0)
  rating        Float    @default(0)
  ratingCount   Int      @default(0)
  
  // 提交与审核
  submittedBy   String?  // 提交者 ID
  submittedAt   DateTime?
  status        String   @default("pending") // pending/approved/rejected
  reviewedBy    String?  // 审核者 ID
  reviewedAt    DateTime?
  
  // 元数据
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}
```

#### 4.2.2 分类体系

**一级分类（10 个）：**
| 分类 | 说明 | 工具数目标 |
|:-----|:-----|:---------|
| 📝 文本生成 | 写作、翻译、润色 | 200+ |
| 🎨 图像设计 | 绘图、编辑、设计 | 150+ |
| 🎬 视频制作 | 生成、剪辑、特效 | 100+ |
| 🎵 音频处理 | 音乐、语音、播客 | 80+ |
| 💼 办公效率 | PPT、Excel、邮件 | 150+ |
| 📊 数据分析 | BI、可视化、洞察 | 100+ |
| 🤖 对话机器人 | 客服、助手、陪伴 | 100+ |
| 📱 社交媒体 | 运营、营销、增长 | 120+ |
| 💻 开发工具 | 代码、测试、部署 | 150+ |
| 🎓 学习教育 | 课程、题库、辅导 | 100+ |

**二级分类（示例）：**
- 文本生成 → AI 写作、翻译工具、润色校对、内容改写...
- 图像设计 → 文生图、图生图、图像编辑、Logo 设计...

#### 4.2.3 标签体系

**标签类型：**
| 类型 | 示例标签 |
|:-----|:---------|
| 价格 | #免费 #付费 #试用 #学生优惠 |
| 语言 | #中文 #英文 #多语言 |
| 平台 | #Web #iOS #Android #桌面端 |
| 开源 | #开源 #闭源 #部分开源 |
| 难度 | #入门 #进阶 #专业 |
| 场景 | #自媒体 #电商 #教育 #医疗 |

---

### 4.3 搜索与发现

#### 4.3.1 搜索功能

| 功能 | 说明 | 优先级 |
|:-----|:-----|:------:|
| 关键词搜索 | 支持工具名、描述、标签 | P0 |
| 高级筛选 | 分类、标签、价格、平台 | P0 |
| 排序 | 热度、评分、最新、名称 | P0 |
| 搜索建议 | 输入时自动补全 | P1 |
| 搜索历史 | 记录用户搜索 | P1 |

#### 4.3.2 推荐系统

| 场景 | 推荐逻辑 |
|:-----|:---------|
| 首页推荐 | 热门工具 + 编辑精选 + 个性化 |
| 工具详情页 | "相似工具" + "看了又看" |
| 分类页 | 该分类下热门/最新 |
| 搜索结果 | 相关度排序 + 商业推广位 |

---

### 4.4 内容系统

#### 4.4.1 教程/文章

```prisma
model Article {
  id          String   @id @default(cuid())
  title       String
  slug        String   @unique // URL 友好
  content     String   // Markdown
  excerpt     String   // 摘要
  coverImage  String?
  
  // 分类
  category    String   // tutorial/review/news
  tags        Tag[]
  
  // 权限
  accessLevel String   @default("free")
  
  // 关联工具
  relatedTools Tool[]
  
  // 统计
  views       Int      @default(0)
  likes       Int      @default(0)
  
  // 作者
  authorId    String
  authorName  String
  
  // 发布
  publishedAt DateTime?
  status      String   @default("draft")
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

#### 4.4.2 内容类型

| 类型 | 说明 | 更新频率 |
|:-----|:-----|:---------|
| 📰 资讯 | AI 行业动态 | 日更 |
| 📝 教程 | 工具使用指南 | 周更 3-5 篇 |
| ⭐ 评测 | 工具横向对比 | 周更 1-2 篇 |
| 🎬 视频 | 配套视频教程 | 周更 1-2 个 |
| 📊 榜单 | 各类 TOP 排行 | 月更 |

---

### 4.5 后台管理系统

#### 4.5.1 功能模块

| 模块 | 功能 |
|:-----|:-----|
| 工具管理 | 添加/编辑/审核/上下架 |
| 内容管理 | 文章/教程发布与管理 |
| 用户管理 | 用户列表、会员管理、封禁 |
| 订单管理 | 会员订单、退款处理 |
| 数据统计 | 流量、转化、收入分析 |
| 系统设置 | 站点配置、广告位管理 |

#### 4.5.2 角色权限

| 角色 | 权限 |
|:-----|:-----|
| 超级管理员 | 全部权限 |
| 内容编辑 | 工具/内容管理 |
| 审核员 | 审核提交内容 |
| 客服 | 用户管理、订单处理 |

---

### 4.6 支付系统

#### 4.6.1 支付方式

| 方式 | 接入渠道 | 说明 |
|:-----|:---------|:-----|
| 微信支付 | 微信支付 API | 必接 |
| 支付宝 | 支付宝 API | 必接 |
| 知识星球 | 第三方 | 可选，用于社群 |
| 小鹅通 | 第三方 | 可选，用于课程 |

#### 4.6.2 订单流程

```
用户选择套餐 → 创建订单 → 调起支付 → 支付成功 → 开通权限 → 发送通知
                                         ↓
                                    支付失败 → 订单取消/重试
```

---

## 五、技术架构

### 5.1 技术栈

| 层级 | 技术 | 版本 |
|:-----|:-----|:-----|
| **前端框架** | Next.js | 16.x |
| **UI 库** | React + Tailwind CSS | 19.x / 4.x |
| **数据库** | PostgreSQL | 15+ |
| **ORM** | Prisma | 7.x |
| **认证** | NextAuth.js | 4.x |
| **缓存** | Redis | 7.x (可选) |
| **部署** | Vercel / 自建 | - |
| **CDN** | Cloudflare / 阿里云 | - |

### 5.2 系统架构图

```
┌─────────────────────────────────────────────────────────┐
│  用户层                                                  │
│  Web / H5 / 小程序（未来）                               │
└────────────────────┬────────────────────────────────────┘
                     │ HTTPS
                     ▼
┌─────────────────────────────────────────────────────────┐
│  CDN (Cloudflare)                                        │
│  静态资源加速 / DDoS 防护                                 │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│  应用层 (Next.js on Vercel/自建)                         │
│  ├── 前端页面 (SSR + SSG)                                │
│  ├── API Routes (Serverless)                            │
│  └── 后台管理系统                                        │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│  数据层                                                  │
│  ├── PostgreSQL (主数据库)                              │
│  ├── Redis (缓存/会话)                                   │
│  └── 对象存储 (图片/文件)                                │
└─────────────────────────────────────────────────────────┘
```

### 5.3 数据库设计（核心表）

详见附录 A - 完整 Prisma Schema

---

## 六、运营策略

### 6.1 冷启动策略

**阶段一：内容填充（0-1 月）**
- 人工收录 200+ 核心工具
- 撰写 50+ 基础教程
- 建立分类和标签体系

**阶段二：种子用户（1-3 月）**
- 邀请制内测（100 人）
- 收集反馈，优化产品
- 建立核心用户群

**阶段三：公开上线（3 月+）**
- SEO 优化，自然流量
- 社交媒体推广
- KOL 合作

### 6.2 增长策略

| 渠道 | 策略 | 预期占比 |
|:-----|:-----|:---------|
| SEO | 工具页静态生成、长尾词优化 | 40% |
| 社交媒体 | 小红书/知乎/公众号 | 30% |
| 口碑传播 | 推荐有礼、邀请机制 | 15% |
| 付费投放 | 搜索广告、信息流 | 10% |
| 合作互换 | 友链、联合活动 | 5% |

### 6.3 用户留存

- 📧 邮件订阅：每周 AI 工具精选
- 🔔 推送通知：新工具上线、收藏工具更新
- 🎁 积分体系：签到、分享、投稿得积分
- 👥 社群运营：VIP 用户群、答疑互动

---

## 七、里程碑规划

### 7.1 开发周期

| 阶段 | 时间 | 目标 |
|:-----|:-----|:-----|
| **Phase 1** | 第 1-2 周 | 基础框架 + 用户系统 + 工具库 CRUD |
| **Phase 2** | 第 3-4 周 | 搜索筛选 + 前台页面 + 基础内容 |
| **Phase 3** | 第 5-6 周 | 支付系统 + 会员体系 + 后台管理 |
| **Phase 4** | 第 7-8 周 | 内容填充 + 测试优化 + 内测上线 |
| **Phase 5** | 第 9 周+ | 公开上线 + 持续迭代 |

### 7.2 关键指标 (KPI)

| 指标 | 3 个月目标 | 6 个月目标 | 12 个月目标 |
|:-----|:---------:|:---------:|:----------:|
| 收录工具数 | 300+ | 800+ | 2000+ |
| 月活用户 | 5,000 | 20,000 | 50,000 |
| 付费转化率 | 2% | 3% | 5% |
| 月收入 | ¥10,000 | ¥50,000 | ¥150,000 |

---

## 八、风险与应对

| 风险 | 影响 | 应对策略 |
|:-----|:-----|:---------|
| 竞品模仿 | 高 | 快速迭代、建立内容壁垒、社群运营 |
| 工具下架/变更 | 中 | 定期巡检、用户反馈机制 |
| 支付合规 | 高 | 正规渠道接入、依法纳税 |
| 内容版权 | 中 | 原创为主、引用注明、投诉处理机制 |
| 流量获取难 | 高 | SEO 深耕、社群运营、差异化定位 |

---

## 附录

### 附录 A - Prisma Schema（完整）

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ==================== 用户系统 ====================

model User {
  id            String    @id @default(cuid())
  phone         String?   @unique
  email         String?   @unique
  wechatId      String?   @unique
  passwordHash  String?
  
  // 会员信息
  isVip         Boolean   @default(false)
  vipLevel      String    @default("free") // free/vip/premium
  vipExpireAt   DateTime?
  
  // 关联数据
  favorites     Favorite[]
  submissions   Submission[]
  orders        Order[]
  articles      Article[]
  
  // 时间
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  lastLoginAt   DateTime?
}

// ==================== 工具系统 ====================

model Tool {
  id            String    @id @default(cuid())
  name          String
  nameEn        String?
  description   String    @db.VarChar(500)
  longDesc      String?   @db.Text
  url           String
  affiliateUrl  String?
  logo          String?
  screenshots   String[]  @default([])
  
  // 分类与标签
  categories    Category[]
  tags          Tag[]
  
  // 权限控制
  accessLevel   String    @default("free") // free/vip/premium
  vipReason     String?
  
  // 价格信息
  pricing       String?
  hasFreeTier   Boolean   @default(true)
  
  // 热度与评价
  views         Int       @default(0)
  likes         Int       @default(0)
  rating        Float     @default(0)
  ratingCount   Int       @default(0)
  
  // 提交与审核
  submittedBy   String?
  submittedAt   DateTime?
  status        String    @default("pending") // pending/approved/rejected
  reviewedBy    String?
  reviewedAt    DateTime?
  
  // 关联
  favorites     Favorite[]
  articles      Article[]
  
  // 时间
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  @@index([status])
  @@index([accessLevel])
  @@index([createdAt])
}

model Category {
  id          String   @id @default(cuid())
  name        String
  slug        String   @unique
  description String?
  parentId    String?  // 支持二级分类
  parent      Category? @relation("CategoryHierarchy", fields: [parentId], references: [id])
  children    Category[] @relation("CategoryHierarchy")
  tools       Tool[]
  order       Int      @default(0)
  
  @@index([slug])
}

model Tag {
  id          String   @id @default(cuid())
  name        String
  slug        String   @unique
  tools       Tool[]
  articles    Article[]
  
  @@index([slug])
}

// ==================== 内容系统 ====================

model Article {
  id          String   @id @default(cuid())
  title       String
  slug        String   @unique
  content     String   @db.Text
  excerpt     String?  @db.VarChar(500)
  coverImage  String?
  
  // 分类
  category    String   // tutorial/review/news
  tags        Tag[]
  
  // 权限
  accessLevel String   @default("free")
  
  // 关联工具
  relatedTools Tool[]
  
  // 统计
  views       Int      @default(0)
  likes       Int      @default(0)
  
  // 作者
  authorId    String
  author      User     @relation(fields: [authorId], references: [id])
  authorName  String
  
  // 发布
  publishedAt DateTime?
  status      String   @default("draft") // draft/published
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@index([slug])
  @@index([category])
  @@index([status])
}

// ==================== 用户行为 ====================

model Favorite {
  id        String   @id @default(cuid())
  userId    String
  toolId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  tool      Tool     @relation(fields: [toolId], references: [id], onDelete: Cascade)
  createdAt DateTime @default(now())
  
  @@unique([userId, toolId])
  @@index([userId])
  @@index([toolId])
}

model Submission {
  id          String   @id @default(cuid())
  userId      String
  user        User     @relation(fields: [userId], references: [id])
  toolName    String
  toolUrl     String
  description String
  status      String   @default("pending") // pending/approved/rejected
  feedback    String?
  createdAt   DateTime @default(now())
  
  @@index([userId])
  @@index([status])
}

// ==================== 订单系统 ====================

model Order {
  id            String   @id @default(cuid())
  userId        String
  user          User     @relation(fields: [userId], references: [id])
  
  // 订单信息
  orderNo       String   @unique
  productType   String   // vip_month/vip_year/vip_lifetime/premium
  productName   String
  amount        Decimal  @db.Decimal(10, 2)
  
  // 支付信息
  paymentMethod String   // wechat/alipay
  paymentStatus String   @default("pending") // pending/paid/refunded
  paidAt        DateTime?
  transactionId String?
  
  // 会员信息
  vipLevel      String
  vipDuration   Int?     // 月数，终身为 null
  vipExpireAt   DateTime?
  
  // 时间
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  
  @@index([userId])
  @@index([orderNo])
  @@index([paymentStatus])
}
```

---

### 附录 B - API 接口设计

详见单独文档 `API.md`

### 附录 C - 页面原型

详见单独文档 `DESIGN.md`

---

## 文档变更记录

| 版本 | 日期 | 变更内容 | 作者 |
|:-----|:-----|:---------|:-----|
| v1.0 | 2026-03-09 | 初始版本 | 大内总管 |

---

_奉天承运 皇帝诏曰_  
_2026-03-09_
