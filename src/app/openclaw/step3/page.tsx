'use client';
import Link from "next/link";
import StepPage from "../StepPageTemplate";

export default function Step3Page() {
  return (
    <StepPage
      stepNumber={3}
      title="基础配置"
      description="理解配置文件和核心概念"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">📄 认识 openclaw.json</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          <code className="bg-slate-100 px-2 py-1 rounded text-blue-600">openclaw.json</code> 是 OpenClaw 的核心配置文件，
          它控制着 Agent 的行为、连接的服务、启用的功能等所有内容。
        </p>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
          <h3 className="font-bold text-white mb-4">配置文件结构概览</h3>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
{`{
  "models": { ... },      // 大模型配置
  "channels": { ... },    // 通讯通道配置
  "agents": { ... },      // Agent 配置
  "tools": { ... },       // 工具配置
  "skills": { ... },      // 技能配置
  "session": { ... },     // 会话管理
  "gateway": { ... },     // 网关配置
  "cron": [ ... ],        // 定时任务
  "memory": { ... }       // 记忆系统配置
}`}
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">🧠 模型配置</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          配置 OpenClaw 使用的大语言模型。支持多个模型提供商，可以设置默认模型和备用模型。
        </p>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <h3 className="font-bold text-white mb-4">模型配置示例</h3>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
{`{
  "models": {
    "default": "bailian/qwen3.5-plus",
    "bailian": {
      "apiKey": "your_api_key",
      "defaultModel": "qwen3.5-plus"
    },
    "openai": {
      "apiKey": "sk-...",
      "defaultModel": "gpt-4o"
    }
  }
}`}
          </pre>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h4 className="font-bold text-blue-900 mb-3">🌐 通义千问（推荐）</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• 模型前缀：<code className="text-blue-600">bailian/</code></li>
              <li>• 推荐模型：<code className="text-blue-600">qwen3.5-plus</code></li>
              <li>• 性价比高，中文理解好</li>
              <li>• 适合日常任务</li>
            </ul>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
            <h4 className="font-bold text-purple-900 mb-3">🤖 OpenAI</h4>
            <ul className="text-purple-700 text-sm space-y-2">
              <li>• 模型前缀：<code className="text-purple-600">openai/</code></li>
              <li>• 推荐模型：<code className="text-purple-600">gpt-4o</code></li>
              <li>• 强大的推理能力</li>
              <li>• 适合复杂任务</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">💬 通道配置</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          通道（Channel）是 OpenClaw 与外界沟通的方式。可以配置多个通道，让 Agent 在不同平台上工作。
        </p>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <h3 className="font-bold text-white mb-4">通道配置示例</h3>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
{`{
  "channels": {
    "webchat": {
      "enabled": true,
      "type": "webchat"
    },
    "discord": {
      "enabled": true,
      "type": "discord",
      "token": "your_bot_token",
      "guildId": "your_server_id"
    },
    "telegram": {
      "enabled": false,
      "type": "telegram",
      "token": "your_bot_token"
    }
  }
}`}
          </pre>
        </div>

        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-xl p-5 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-2">🌐 WebChat（内置）</h4>
            <p className="text-slate-700 text-sm">
              内置的网页聊天界面，无需额外配置，启动即用。适合开发测试和个人使用。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-2">💬 Discord</h4>
            <p className="text-slate-700 text-sm">
              需要创建 Discord Bot 并获取 Token。适合团队协作者社区管理。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-2">✈️ Telegram</h4>
            <p className="text-slate-700 text-sm">
              通过 BotFather 创建 Bot 获取 Token。适合移动端使用和个人助手。
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">🤖 Agent 配置</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          定义 Agent 的身份、行为和可用工具。可以创建多个专业 Agent。
        </p>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <h3 className="font-bold text-white mb-4">Agent 配置示例</h3>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
{`{
  "agents": {
    "main": {
      "model": "bailian/qwen3.5-plus",
      "name": "小李子",
      "persona": "大内总管",
      "tools": ["browser", "exec", "message"],
      "thinking": "medium"
    },
    "researcher": {
      "model": "bailian/qwen3.5-plus",
      "name": "研究员",
      "tools": ["web_search", "web_fetch"],
      "thinking": "high"
    },
    "coder": {
      "model": "bailian/qwen3.5-plus",
      "name": "工程师",
      "tools": ["exec", "read", "write", "edit"],
      "thinking": "high"
    }
  }
}`}
          </pre>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-green-50 rounded-xl p-5 border border-green-100">
            <h4 className="font-bold text-green-900 mb-2">🎯 thinking 级别</h4>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• <code className="text-green-600">low</code> - 快速响应</li>
              <li>• <code className="text-green-600">medium</code> - 平衡</li>
              <li>• <code className="text-green-600">high</code> - 深度思考</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
            <h4 className="font-bold text-blue-900 mb-2">🛠️ 工具列表</h4>
            <p className="text-blue-700 text-sm">
              指定 Agent 可以使用的工具，限制工具范围可以提高安全性
            </p>
          </div>
          <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
            <h4 className="font-bold text-purple-900 mb-2">🎭 人设定义</h4>
            <p className="text-purple-700 text-sm">
              通过 name 和 persona 定义 Agent 的角色和说话风格
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">🔧 工具配置</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          配置各个工具的参数和行为。不同工具有不同的配置选项。
        </p>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <h3 className="font-bold text-white mb-4">工具配置示例</h3>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
{`{
  "tools": {
    "browser": {
      "defaultProfile": "openclaw",
      "timeout": 30000
    },
    "exec": {
      "security": "allowlist",
      "allowedCommands": ["git", "npm", "node"]
    },
    "message": {
      "defaultChannel": "webchat",
      "rateLimit": 10
    }
  }
}`}
          </pre>
        </div>

        <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 mb-8">
          <h3 className="font-bold text-amber-900 mb-3">⚠️ 安全提示</h3>
          <ul className="text-amber-700 text-sm space-y-2">
            <li>• <code className="text-amber-600">exec</code> 工具允许执行系统命令，务必谨慎配置</li>
            <li>• 使用 <code className="text-amber-600">security: "allowlist"</code> 限制可执行的命令</li>
            <li>• 不要给不信任的 Agent 配置危险工具</li>
            <li>• 定期审查工具使用日志</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">📝 技能配置</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          技能（Skills）是预定义的任务模板。可以启用、禁用或自定义技能。
        </p>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <h3 className="font-bold text-white mb-4">技能配置示例</h3>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
{`{
  "skills": {
    "enabled": ["browser", "web_search", "feishu-doc"],
    "disabled": ["discord"],
    "custom": {
      "my-skill": {
        "path": "./skills/my-skill",
        "enabled": true
      }
    }
  }
}`}
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">⏰ 定时任务配置</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          使用 cron 表达式配置定时任务，让 Agent 自动执行周期性工作。
        </p>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <h3 className="font-bold text-white mb-4">定时任务示例</h3>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
{`{
  "cron": [
    {
      "schedule": "0 9 * * *",
      "task": "检查邮件并汇总",
      "agent": "main",
      "enabled": true
    },
    {
      "schedule": "0 18 * * 1-5",
      "task": "生成日报",
      "agent": "researcher",
      "enabled": true
    },
    {
      "schedule": "0 0 * * 0",
      "task": "清理临时文件",
      "agent": "main",
      "enabled": false
    }
  ]
}`}
          </pre>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-8">
          <h3 className="font-bold text-blue-900 mb-3">📅 Cron 表达式速查</h3>
          <div className="grid grid-cols-2 gap-4 text-blue-700 text-sm">
            <div><code className="text-blue-600">0 9 * * *</code> - 每天 9:00</div>
            <div><code className="text-blue-600">0 */2 * * *</code> - 每 2 小时</div>
            <div><code className="text-blue-600">0 9 * * 1-5</code> - 工作日 9:00</div>
            <div><code className="text-blue-600">0 0 * * 0</code> - 每周日 0:00</div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">💾 记忆系统配置</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          配置 Agent 的记忆存储方式，包括短期记忆和长期记忆。
        </p>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <h3 className="font-bold text-white mb-4">记忆配置示例</h3>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
{`{
  "memory": {
    "type": "file",
    "path": "./memory",
    "maxMessages": 100,
    "summaryInterval": 50
  }
}`}
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">❓ 常见问题</h2>
        
        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-2">Q: 配置文件在哪里？</h4>
            <p className="text-slate-700 text-sm">
              A: 在工作目录根目录下的 <code className="text-blue-600">openclaw.json</code>。使用 <code className="text-blue-600">openclaw init</code> 会自动创建。
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-2">Q: 修改配置后需要重启吗？</h4>
            <p className="text-slate-700 text-sm">
              A: 大部分配置需要重启 OpenClaw 才能生效。使用 <code className="text-blue-600">openclaw gateway restart</code> 重启网关。
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-2">Q: 如何验证配置是否正确？</h4>
            <p className="text-slate-700 text-sm">
              A: 使用 <code className="text-blue-600">openclaw status</code> 检查状态，或尝试发送一条测试消息看是否正常工作。
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-2">Q: 可以切换不同的模型吗？</h4>
            <p className="text-slate-700 text-sm">
              A: 可以！在配置文件中修改 <code className="text-blue-600">default</code> 字段，或在运行时通过命令切换。
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 mb-8">
          <h3 className="font-bold text-blue-900 mb-3">🎯 本步要点总结</h3>
          <ul className="text-blue-700 space-y-2">
            <li>✓ 理解 openclaw.json 的结构和各部分作用</li>
            <li>✓ 配置大模型 API 密钥和默认模型</li>
            <li>✓ 设置通讯通道（WebChat、Discord 等）</li>
            <li>✓ 定义 Agent 的角色和可用工具</li>
            <li>✓ 配置定时任务实现自动化</li>
          </ul>
        </div>

        <div className="flex justify-between mt-12">
          <Link
            href="/openclaw/step2"
            className="px-6 py-4 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-colors"
          >
            ← 上一步：环境搭建
          </Link>
          <Link
            href="/openclaw/step4"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all hover:-translate-y-1"
          >
            开始第 4 步：技能系统 →
          </Link>
        </div>
      </div>
    </StepPage>
  );
}
