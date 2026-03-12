'use client';
import Link from "next/link";
import StepPage from "../StepPageTemplate";

export default function Step4Page() {
  return (
    <StepPage
      stepNumber={4}
      title="技能系统"
      description="学习和使用各种技能"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">🎯 什么是技能？</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          技能（Skills）是 OpenClaw 的核心扩展机制。每个技能都是一个独立的功能模块，
          为 Agent 提供特定的能力，如网页浏览、文件操作、API 调用等。
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <div className="text-3xl mb-3">🔧</div>
            <h3 className="font-bold text-blue-900 mb-2">工具类技能</h3>
            <p className="text-blue-700 text-sm">
              提供基础工具能力，如文件读写、命令执行、浏览器控制等
            </p>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="font-bold text-purple-900 mb-2">网络类技能</h3>
            <p className="text-purple-700 text-sm">
              实现网络功能，如网页搜索、内容抓取、API 调用等
            </p>
          </div>
          <div className="bg-green-50 rounded-xl p-6 border border-green-100">
            <div className="text-3xl mb-3">💼</div>
            <h3 className="font-bold text-green-900 mb-2">业务类技能</h3>
            <p className="text-green-700 text-sm">
              对接具体业务系统，如飞书文档、数据库操作、消息推送等
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">📦 内置技能一览</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          OpenClaw 自带丰富的技能库，开箱即用。
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-700 uppercase bg-slate-50">
              <tr>
                <th className="px-6 py-3">技能名称</th>
                <th className="px-6 py-3">功能描述</th>
                <th className="px-6 py-3">使用场景</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-blue-600">browser</td>
                <td className="px-6 py-4">浏览器自动化控制</td>
                <td className="px-6 py-4">网页操作、数据提取</td>
              </tr>
              <tr className="bg-slate-50 border-b">
                <td className="px-6 py-4 font-medium text-blue-600">web_search</td>
                <td className="px-6 py-4">网络搜索（Brave API）</td>
                <td className="px-6 py-4">信息检索、调研</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-blue-600">web_fetch</td>
                <td className="px-6 py-4">网页内容抓取</td>
                <td className="px-6 py-4">文章阅读、数据收集</td>
              </tr>
              <tr className="bg-slate-50 border-b">
                <td className="px-6 py-4 font-medium text-blue-600">exec</td>
                <td className="px-6 py-4">系统命令执行</td>
                <td className="px-6 py-4">自动化脚本、DevOps</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-blue-600">read/write/edit</td>
                <td className="px-6 py-4">文件操作</td>
                <td className="px-6 py-4">代码编辑、文档处理</td>
              </tr>
              <tr className="bg-slate-50 border-b">
                <td className="px-6 py-4 font-medium text-blue-600">feishu-doc</td>
                <td className="px-6 py-4">飞书文档操作</td>
                <td className="px-6 py-4">文档管理、协作办公</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-blue-600">message</td>
                <td className="px-6 py-4">消息发送</td>
                <td className="px-6 py-4">通知推送、聊天机器人</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-6 py-4 font-medium text-blue-600">tts</td>
                <td className="px-6 py-4">语音合成</td>
                <td className="px-6 py-4">语音播报、有声内容</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">🚀 技能安装</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          除了内置技能，还可以从 ClawdHub 或 GitHub 安装第三方技能。
        </p>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <h3 className="font-bold text-white mb-4">从 ClawdHub 安装</h3>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm mb-3">
            <code>openclaw skill install &lt;skill-name&gt;</code>
          </pre>
          <p className="text-slate-400 text-sm">
            例如：<code className="text-yellow-400">openclaw skill install weather</code>
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <h3 className="font-bold text-white mb-4">从 GitHub 安装</h3>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm mb-3">
            <code>openclaw skill install github:user/repo</code>
          </pre>
          <p className="text-slate-400 text-sm">
            例如：<code className="text-yellow-400">openclaw skill install github:openclaw/skill-weather</code>
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <h3 className="font-bold text-white mb-4">本地安装</h3>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm mb-3">
            <code>openclaw skill install ./path/to/skill</code>
          </pre>
        </div>

        <div className="bg-green-50 rounded-xl p-6 border border-green-200 mb-8">
          <h3 className="font-bold text-green-900 mb-3">✅ 验证安装</h3>
          <pre className="bg-white text-slate-800 p-4 rounded-lg overflow-x-auto text-sm mb-3">
            <code>openclaw skill list</code>
          </pre>
          <p className="text-green-700 text-sm">
            查看已安装的所有技能及其状态
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">💡 技能使用</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          安装技能后，Agent 会自动识别并在适当场景下使用。也可以通过指令明确调用。
        </p>

        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3">🔍 示例 1：使用天气技能</h4>
            <div className="bg-slate-50 rounded-lg p-4 mb-3">
              <p className="text-slate-600 text-sm mb-2">用户指令：</p>
              <p className="text-slate-800 font-medium">"北京今天天气怎么样？"</p>
            </div>
            <p className="text-slate-700 text-sm">
              Agent 会自动调用 weather 技能获取天气信息并返回。
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3">🌐 示例 2：使用浏览器技能</h4>
            <div className="bg-slate-50 rounded-lg p-4 mb-3">
              <p className="text-slate-600 text-sm mb-2">用户指令：</p>
              <p className="text-slate-800 font-medium">"帮我打开 GitHub 并查看 trending 页面"</p>
            </div>
            <p className="text-slate-700 text-sm">
              Agent 会启动浏览器，导航到 GitHub trending 页面，并截图或提取内容。
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3">📝 示例 3：使用飞书文档技能</h4>
            <div className="bg-slate-50 rounded-lg p-4 mb-3">
              <p className="text-slate-600 text-sm mb-2">用户指令：</p>
              <p className="text-slate-800 font-medium">"在飞书上创建一个新文档，标题是'会议纪要'"</p>
            </div>
            <p className="text-slate-700 text-sm">
              Agent 会调用 feishu-doc 技能创建文档并返回链接。
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">🛠️ 创建自定义技能</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          当内置技能不能满足需求时，可以创建自定义技能。
        </p>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <h3 className="font-bold text-white mb-4">技能目录结构</h3>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
{`my-skill/
├── SKILL.md          # 技能说明文件（必需）
├── index.js          # 技能主逻辑
├── package.json      # 依赖配置
└── tools.json        # 工具定义`}
          </pre>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <h3 className="font-bold text-white mb-4">SKILL.md 模板</h3>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
{`# my-skill

## 描述
一句话描述技能功能

## 触发条件
什么情况下使用这个技能

## 工具列表
- tool1: 功能说明
- tool2: 功能说明

## 使用示例
用户指令示例和技能响应`}
          </pre>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <h3 className="font-bold text-white mb-4">工具定义示例（tools.json）</h3>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
{`{
  "tools": [
    {
      "name": "my_tool",
      "description": "工具功能描述",
      "inputSchema": {
        "type": "object",
        "properties": {
          "param1": { "type": "string" }
        },
        "required": ["param1"]
      }
    }
  ]
}`}
          </pre>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-8">
          <h3 className="font-bold text-blue-900 mb-3">📚 技能开发最佳实践</h3>
          <ul className="text-blue-700 text-sm space-y-2">
            <li>• <strong>单一职责：</strong>每个技能只做一件事，做好一件事</li>
            <li>• <strong>清晰文档：</strong>SKILL.md 要详细说明使用场景和限制</li>
            <li>• <strong>错误处理：</strong>优雅处理异常情况，提供有用错误信息</li>
            <li>• <strong>权限最小化：</strong>只申请必要的权限</li>
            <li>• <strong>测试充分：</strong>覆盖常见使用场景和边界情况</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">🔧 技能管理</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h3 className="font-bold text-white mb-4">启用/禁用技能</h3>
            <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm mb-3">
              <code>openclaw skill enable &lt;name&gt;</code>
            </pre>
            <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm mb-3">
              <code>openclaw skill disable &lt;name&gt;</code>
            </pre>
            <p className="text-slate-400 text-xs">
              在配置文件的 skills.enabled 中管理
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h3 className="font-bold text-white mb-4">更新技能</h3>
            <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm mb-3">
              <code>openclaw skill update &lt;name&gt;</code>
            </pre>
            <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
              <code>openclaw skill update --all</code>
            </pre>
            <p className="text-slate-400 text-xs">
              从源仓库拉取最新版本
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">❓ 常见问题</h2>
        
        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-2">Q: 技能安装失败怎么办？</h4>
            <p className="text-slate-700 text-sm">
              A: 检查网络连接，确认技能名称正确。如果是 GitHub 源，确保仓库公开或有访问权限。查看详细错误日志定位问题。
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-2">Q: 技能冲突如何处理？</h4>
            <p className="text-slate-700 text-sm">
              A: 如果多个技能提供相同功能，在配置文件中明确指定优先级，或禁用不需要的技能。
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-2">Q: 自定义技能不生效？</h4>
            <p className="text-slate-700 text-sm">
              A: 检查 SKILL.md 格式是否正确，tools.json 是否定义完整。重启 OpenClaw 网关后重试。
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-2">Q: 如何调试技能？</h4>
            <p className="text-slate-700 text-sm">
              A: 启用调试日志：<code className="text-blue-600">openclaw config set logging.level debug</code>，查看技能调用详情。
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 mb-8">
          <h3 className="font-bold text-blue-900 mb-3">🎯 本步要点总结</h3>
          <ul className="text-blue-700 space-y-2">
            <li>✓ 理解技能的概念和分类</li>
            <li>✓ 掌握内置技能的功能和使用场景</li>
            <li>✓ 学会安装和管理第三方技能</li>
            <li>✓ 了解自定义技能的开发流程</li>
            <li>✓ 遵循技能开发最佳实践</li>
          </ul>
        </div>

        <div className="flex justify-between mt-12">
          <Link
            href="/openclaw/step3"
            className="px-6 py-4 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-colors"
          >
            ← 上一步：基础配置
          </Link>
          <Link
            href="/openclaw/step5"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all hover:-translate-y-1"
          >
            开始第 5 步：多 Agent 协作 →
          </Link>
        </div>
      </div>
    </StepPage>
  );
}
