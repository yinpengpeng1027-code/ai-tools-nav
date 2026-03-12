'use client';
import Link from "next/link";
import StepPage from "../StepPageTemplate";

export default function Step6Page() {
  return (
    <StepPage
      stepNumber={6}
      title="实战项目"
      description="动手做一个完整的项目"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">🎯 项目概述</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          在这一步，我们将综合运用前面学到的所有知识，完成一个完整的实战项目：
          <strong className="text-blue-600">智能竞品监控系统</strong>。
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 mb-8">
          <h3 className="font-bold text-blue-900 mb-4">📋 项目需求</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-slate-900 mb-2">核心功能</h4>
              <ul className="text-slate-700 text-sm space-y-1">
                <li>• 自动搜索竞品相关信息</li>
                <li>• 抓取竞品网站内容</li>
                <li>• 分析竞品动态和策略</li>
                <li>• 生成竞品分析报告</li>
                <li>• 定期监控并推送更新</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-slate-900 mb-2">技术栈</h4>
              <ul className="text-slate-700 text-sm space-y-1">
                <li>• OpenClaw 框架</li>
                <li>• web_search 技能（搜索）</li>
                <li>• web_fetch 技能（抓取）</li>
                <li>• browser 技能（自动化）</li>
                <li>• feishu-doc 技能（报告）</li>
                <li>• cron 定时任务</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">📁 项目结构</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          首先创建项目目录结构和配置文件。
        </p>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
          <h3 className="font-bold text-white mb-4">目录结构</h3>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
{`competitor-monitor/
├── openclaw.json           # OpenClaw 配置
├── skills/                 # 自定义技能
│   └── competitor-analysis/
│       ├── SKILL.md
│       └── index.js
├── reports/                # 生成的报告
│   └── weekly/
├── memory/                 # 记忆存储
│   └── competitors.json    # 竞品列表
└── scripts/                # 辅助脚本
    └── generate-report.js`}
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">⚙️ 步骤 1：配置 OpenClaw</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          创建项目配置文件，定义所需的 Agent 和技能。
        </p>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <h3 className="font-bold text-white mb-4">openclaw.json 配置</h3>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
{`{
  "models": {
    "default": "bailian/qwen3.5-plus",
    "bailian": {
      "apiKey": "YOUR_API_KEY"
    }
  },
  "agents": {
    "main": {
      "name": "竞品分析主管",
      "model": "bailian/qwen3.5-plus",
      "thinking": "high",
      "tools": ["subagents", "message", "read", "write"],
      "persona": "专业的市场分析师，擅长竞品研究"
    },
    "researcher": {
      "name": "市场研究员",
      "model": "bailian/qwen3.5-plus",
      "thinking": "medium",
      "tools": ["web_search", "web_fetch"],
      "persona": "敏锐的市场观察者，信息收集能力强"
    },
    "analyst": {
      "name": "数据分析师",
      "model": "bailian/qwen3.5-plus",
      "thinking": "high",
      "tools": ["read", "write", "exec"],
      "persona": "逻辑严谨的分析师，擅长数据洞察"
    }
  },
  "skills": {
    "enabled": ["web_search", "web_fetch", "browser", "feishu-doc"]
  },
  "cron": [
    {
      "schedule": "0 9 * * 1",
      "task": "生成本周竞品分析报告",
      "agent": "main",
      "enabled": true
    }
  ]
}`}
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">🔧 步骤 2：创建竞品列表</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          定义需要监控的竞品名单和监控维度。
        </p>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <h3 className="font-bold text-white mb-4">memory/competitors.json</h3>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
{`{
  "competitors": [
    {
      "name": "竞品 A",
      "website": "https://competitor-a.com",
      "category": "直接竞品",
      "focus": ["产品功能", "定价策略", "市场活动"],
      "priority": "high"
    },
    {
      "name": "竞品 B",
      "website": "https://competitor-b.com",
      "category": "间接竞品",
      "focus": ["用户体验", "技术创新"],
      "priority": "medium"
    },
    {
      "name": "竞品 C",
      "website": "https://competitor-c.com",
      "category": "潜在竞品",
      "focus": ["融资动态", "团队扩张"],
      "priority": "low"
    }
  ],
  "keywords": [
    "产品更新",
    "融资",
    "战略合作",
    "高管变动",
    "用户增长"
  ]
}`}
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">🤖 步骤 3：编写主任务流程</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          定义主 Agent 如何协调子 Agent 完成监控任务。
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 mb-8">
          <h3 className="font-bold text-blue-900 mb-4">任务执行流程</h3>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                <h4 className="font-bold text-slate-900">读取竞品列表</h4>
              </div>
              <pre className="bg-slate-800 text-green-400 p-3 rounded text-xs ml-11 overflow-x-auto">
{`read({ path: "./memory/competitors.json" })`}
              </pre>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                <h4 className="font-bold text-slate-900">为每个竞品创建研究任务</h4>
              </div>
              <pre className="bg-slate-800 text-green-400 p-3 rounded text-xs ml-11 overflow-x-auto">
{`subagents.spawn({
  task: "搜索竞品 A 的最新动态，包括产品更新、市场活动、融资情况",
  label: "research-competitor-a",
  agent: "researcher"
})`}
              </pre>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                <h4 className="font-bold text-slate-900">等待所有研究完成</h4>
              </div>
              <p className="text-slate-700 text-sm ml-11">
                通过 sessions_list 监控子 Agent 状态，全部完成后继续
              </p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
                <h4 className="font-bold text-slate-900">汇总分析并生成报告</h4>
              </div>
              <pre className="bg-slate-800 text-green-400 p-3 rounded text-xs ml-11 overflow-x-auto">
{`write({
  path: "./reports/weekly/competitor-report-2026-W10.md",
  content: reportContent
})`}
              </pre>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
                <h4 className="font-bold text-slate-900">推送报告通知</h4>
              </div>
              <pre className="bg-slate-800 text-green-400 p-3 rounded text-xs ml-11 overflow-x-auto">
{`message({ channel: "team", text: "本周竞品分析报告已生成" })`}
              </pre>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">📝 步骤 4：创建报告模板</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          定义竞品分析报告的标准格式。
        </p>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <h3 className="font-bold text-white mb-4">报告模板示例</h3>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
{`# 竞品监控周报

**报告周期**: 2026-03-05 ~ 2026-03-11
**生成时间**: 2026-03-12 09:00

## 📊 本周摘要

- 监控竞品数量：3
- 发现重要动态：5
- 高风险变化：1

## 🔍 竞品 A 动态

### 产品更新
- 发布了新版本 2.0，新增 AI 功能
- 优化了移动端用户体验

### 市场活动
- 启动春季促销活动
- 与某知名企业达成战略合作

### 风险评估
⚠️ 新功能可能对我们造成威胁，建议尽快评估应对方案

## 📈 竞品 B 动态
...

## 💡 建议行动项

1. [高优先级] 评估竞品 A 的 AI 功能
2. [中优先级] 研究竞品 B 的定价策略
3. [低优先级] 关注竞品 C 的融资进展

## 📎 附录

- [详细数据表格](./data/competitor-data.xlsx)
- [相关新闻链接](./links/news-links.md)`}
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">🧪 步骤 5：测试运行</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          手动触发一次完整流程，验证所有功能正常工作。
        </p>

        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3">✅ 测试清单</h4>
            <ul className="text-slate-700 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">□</span>
                <span>OpenClaw 网关正常启动</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">□</span>
                <span>所有 Agent 配置正确加载</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">□</span>
                <span>web_search 技能可以正常搜索</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">□</span>
                <span>web_fetch 技能可以抓取网页</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">□</span>
                <span>子 Agent 可以正常创建和执行</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">□</span>
                <span>报告文件正确生成</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">□</span>
                <span>通知消息成功发送</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <h3 className="font-bold text-white mb-4">手动触发测试</h3>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
            <code>openclaw run "生成竞品监控周报"</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">🚀 步骤 6：部署上线</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          配置定时任务，让系统自动运行。
        </p>

        <div className="bg-green-50 rounded-xl p-6 border border-green-200 mb-8">
          <h3 className="font-bold text-green-900 mb-3">📅 定时任务配置</h3>
          <pre className="bg-white text-slate-800 p-4 rounded-lg overflow-x-auto text-xs mb-3">
{`"cron": [
  {
    "schedule": "0 9 * * 1",
    "task": "生成本周竞品分析报告",
    "agent": "main",
    "enabled": true
  },
  {
    "schedule": "0 18 * * *",
    "task": "检查竞品网站更新",
    "agent": "researcher",
    "enabled": true
  }
]`}
          </pre>
          <p className="text-green-700 text-sm">
            • 每周一 9:00 生成周报<br/>
            • 每天 18:00 检查更新
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">📊 项目成果展示</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <div className="text-3xl mb-3">⏱️</div>
            <h4 className="font-bold text-blue-900 mb-2">效率提升</h4>
            <p className="text-blue-700 text-2xl font-bold mb-1">90%</p>
            <p className="text-blue-700 text-sm">从 8 小时减少到 30 分钟</p>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
            <div className="text-3xl mb-3">📈</div>
            <h4 className="font-bold text-purple-900 mb-2">覆盖范围</h4>
            <p className="text-purple-700 text-2xl font-bold mb-1">100%</p>
            <p className="text-purple-700 text-sm">全天候自动监控</p>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border border-green-100">
            <div className="text-3xl mb-3">💰</div>
            <h4 className="font-bold text-green-900 mb-2">成本节约</h4>
            <p className="text-green-700 text-2xl font-bold mb-1">80%</p>
            <p className="text-green-700 text-sm">相比人工监控</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">❓ 常见问题</h2>
        
        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-2">Q: 搜索结果为空怎么办？</h4>
            <p className="text-slate-700 text-sm">
              A: 调整搜索关键词，尝试更具体或更宽泛的表述。也可以更换搜索引擎或增加搜索源。
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-2">Q: 网页抓取失败？</h4>
            <p className="text-slate-700 text-sm">
              A: 检查目标网站是否有反爬机制。可以尝试使用 browser 技能模拟真实浏览器访问。
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-2">Q: 报告质量不高？</h4>
            <p className="text-slate-700 text-sm">
              A: 优化提示词，提供更详细的分析框架。可以增加 analyst Agent 进行深度分析。
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-2">Q: 定时任务不执行？</h4>
            <p className="text-slate-700 text-sm">
              A: 检查 cron 表达式是否正确，确认网关服务正常运行，查看日志是否有错误。
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 mb-8">
          <h3 className="font-bold text-blue-900 mb-3">🎯 本步要点总结</h3>
          <ul className="text-blue-700 space-y-2">
            <li>✓ 完成竞品监控系统的完整开发</li>
            <li>✓ 实践多 Agent 协作流程</li>
            <li>✓ 掌握定时任务配置方法</li>
            <li>✓ 学会生成结构化报告</li>
            <li>✓ 了解项目部署和运维要点</li>
          </ul>
        </div>

        <div className="flex justify-between mt-12">
          <Link
            href="/openclaw/step5"
            className="px-6 py-4 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-colors"
          >
            ← 上一步：多 Agent 协作
          </Link>
          <Link
            href="/openclaw/step7"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all hover:-translate-y-1"
          >
            开始第 7 步：进阶技巧 →
          </Link>
        </div>
      </div>
    </StepPage>
  );
}
