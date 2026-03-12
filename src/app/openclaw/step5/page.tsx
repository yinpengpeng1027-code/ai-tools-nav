'use client';
import Link from "next/link";
import StepPage from "../StepPageTemplate";

export default function Step5Page() {
  return (
    <StepPage
      stepNumber={5}
      title="多 Agent 协作"
      description="创建和管理多个 Agent"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">🏛️ 六部制架构</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          OpenClaw 采用"六部制"多 Agent 协作架构，灵感来自古代六部制度。
          每个 Agent 各司其职，协同完成复杂任务。
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-red-50 rounded-xl p-6 border border-red-100">
            <div className="text-3xl mb-3">📋</div>
            <h3 className="font-bold text-red-900 mb-2">吏部 - 调度官</h3>
            <p className="text-red-700 text-sm mb-3">负责任务分配和协调</p>
            <ul className="text-red-700 text-xs space-y-1">
              <li>• 任务分解</li>
              <li>• 资源调度</li>
              <li>• 进度跟踪</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="font-bold text-blue-900 mb-2">户部 - 数据官</h3>
            <p className="text-blue-700 text-sm mb-3">负责数据管理和存储</p>
            <ul className="text-blue-700 text-xs space-y-1">
              <li>• 数据收集</li>
              <li>• 信息整理</li>
              <li>• 记忆管理</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border border-green-100">
            <div className="text-3xl mb-3">🎓</div>
            <h3 className="font-bold text-green-900 mb-2">礼部 - 外交官</h3>
            <p className="text-green-700 text-sm mb-3">负责对外沟通</p>
            <ul className="text-green-700 text-xs space-y-1">
              <li>• 消息发送</li>
              <li>• 用户交互</li>
              <li>• 礼仪规范</li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
            <div className="text-3xl mb-3">⚔️</div>
            <h3 className="font-bold text-purple-900 mb-2">兵部 - 执行官</h3>
            <p className="text-purple-700 text-sm mb-3">负责具体执行</p>
            <ul className="text-purple-700 text-xs space-y-1">
              <li>• 命令执行</li>
              <li>• 工具调用</li>
              <li>• 任务实施</li>
            </ul>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-100">
            <div className="text-3xl mb-3">🔨</div>
            <h3 className="font-bold text-yellow-900 mb-2">工部 - 工程师</h3>
            <p className="text-yellow-700 text-sm mb-3">负责技术开发</p>
            <ul className="text-yellow-700 text-xs space-y-1">
              <li>• 代码编写</li>
              <li>• 系统构建</li>
              <li>• 技术攻关</li>
            </ul>
          </div>

          <div className="bg-pink-50 rounded-xl p-6 border border-pink-100">
            <div className="text-3xl mb-3">⚖️</div>
            <h3 className="font-bold text-pink-900 mb-2">刑部 - 审查官</h3>
            <p className="text-pink-700 text-sm mb-3">负责质量审查</p>
            <ul className="text-pink-700 text-xs space-y-1">
              <li>• 代码审查</li>
              <li>• 安全检查</li>
              <li>• 质量把控</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">⚙️ 六部制配置</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          在 openclaw.json 中配置六部制 Agent 系统。
        </p>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
          <h3 className="font-bold text-white mb-4">配置示例</h3>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
{`{
  "agents": {
    "main": {
      "name": "大内总管",
      "role": "coordinator",
      "model": "bailian/qwen3.5-plus",
      "thinking": "high",
      "tools": ["message", "subagents"],
      "persona": "皇上身边的红人，负责统筹全局"
    },
    "researcher": {
      "name": "户部尚书",
      "role": "data",
      "model": "bailian/qwen3.5-plus",
      "thinking": "medium",
      "tools": ["web_search", "web_fetch", "read"],
      "persona": "博学多才的学者，擅长信息搜集"
    },
    "coder": {
      "name": "工部尚书",
      "role": "engineer",
      "model": "bailian/qwen3.5-plus",
      "thinking": "high",
      "tools": ["exec", "read", "write", "edit"],
      "persona": "技术精湛的工程师，代码质量高"
    },
    "communicator": {
      "name": "礼部尚书",
      "role": "communication",
      "model": "bailian/qwen3.5-plus",
      "thinking": "medium",
      "tools": ["message", "tts"],
      "persona": "善于沟通的外交官，表达得体"
    }
  }
}`}
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">🎭 Agent 角色定义</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          每个 Agent 都需要明确的角色定位，包括职责范围、可用工具和行为规范。
        </p>

        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3">📋 核心字段说明</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-2 text-left">字段</th>
                    <th className="px-4 py-2 text-left">说明</th>
                    <th className="px-4 py-2 text-left">示例</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-2 font-mono text-blue-600">name</td>
                    <td className="px-4 py-2">Agent 名称</td>
                    <td className="px-4 py-2 text-slate-600">"大内总管"</td>
                  </tr>
                  <tr className="border-t bg-slate-50">
                    <td className="px-4 py-2 font-mono text-blue-600">role</td>
                    <td className="px-4 py-2">角色类型</td>
                    <td className="px-4 py-2 text-slate-600">"coordinator"</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 font-mono text-blue-600">model</td>
                    <td className="px-4 py-2">使用的模型</td>
                    <td className="px-4 py-2 text-slate-600">"bailian/qwen3.5-plus"</td>
                  </tr>
                  <tr className="border-t bg-slate-50">
                    <td className="px-4 py-2 font-mono text-blue-600">thinking</td>
                    <td className="px-4 py-2">思考深度</td>
                    <td className="px-4 py-2 text-slate-600">"high"</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 font-mono text-blue-600">tools</td>
                    <td className="px-4 py-2">可用工具列表</td>
                    <td className="px-4 py-2 text-slate-600">["message", "subagents"]</td>
                  </tr>
                  <tr className="border-t bg-slate-50">
                    <td className="px-4 py-2 font-mono text-blue-600">persona</td>
                    <td className="px-4 py-2">人设描述</td>
                    <td className="px-4 py-2 text-slate-600">"统筹全局的协调者"</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">🔄 Subagent 调度</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          主 Agent 可以通过 sessions_spawn 工具创建和管理子 Agent，实现任务并行处理。
        </p>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <h3 className="font-bold text-white mb-4">Subagent 调用示例</h3>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
{`// 创建研究子 Agent
{
  "action": "sessions_spawn",
  "runtime": "subagent",
  "mode": "run",
  "task": "调研 AI Agent 领域的最新发展，整理成报告",
  "label": "research-task",
  "thinking": "high"
}

// 创建编码子 Agent
{
  "action": "sessions_spawn",
  "runtime": "subagent",
  "mode": "session",
  "task": "实现用户认证功能",
  "label": "dev-task",
  "thread": true
}`}
          </pre>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h4 className="font-bold text-blue-900 mb-3">🏃 mode: "run"</h4>
            <p className="text-blue-700 text-sm mb-3">
              一次性任务模式，任务完成后自动结束
            </p>
            <ul className="text-blue-700 text-xs space-y-1">
              <li>✓ 适合独立任务</li>
              <li>✓ 自动报告结果</li>
              <li>✓ 资源占用少</li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
            <h4 className="font-bold text-purple-900 mb-3">💬 mode: "session"</h4>
            <p className="text-purple-700 text-sm mb-3">
              持久会话模式，保持在线持续工作
            </p>
            <ul className="text-purple-700 text-xs space-y-1">
              <li>✓ 适合长期任务</li>
              <li>✓ 可多次交互</li>
              <li>✓ 绑定特定线程</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">📊 任务编排示例</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          实际项目中如何协调多个 Agent 完成复杂任务。
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 mb-8">
          <h3 className="font-bold text-blue-900 mb-4">场景：开发一个完整的博客系统</h3>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                <h4 className="font-bold text-slate-900">主 Agent 接收任务</h4>
              </div>
              <p className="text-slate-700 text-sm ml-11">
                "帮我创建一个博客系统，包括前后端"
              </p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                <h4 className="font-bold text-slate-900">调度研究员收集需求</h4>
              </div>
              <pre className="bg-slate-800 text-green-400 p-3 rounded text-xs ml-11">
{`sessions_spawn({ task: "调研主流博客系统功能", agent: "researcher" })`}
              </pre>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                <h4 className="font-bold text-slate-900">并行：工程师开始开发</h4>
              </div>
              <pre className="bg-slate-800 text-green-400 p-3 rounded text-xs ml-11">
{`sessions_spawn({ task: "搭建后端 API 框架", agent: "coder" })
sessions_spawn({ task: "创建前端页面结构", agent: "coder" })`}
              </pre>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
                <h4 className="font-bold text-slate-900">审查官进行代码审查</h4>
              </div>
              <pre className="bg-slate-800 text-green-400 p-3 rounded text-xs ml-11">
{`sessions_spawn({ task: "审查代码质量和安全性", agent: "reviewer" })`}
              </pre>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
                <h4 className="font-bold text-slate-900">外交官发布成果</h4>
              </div>
              <pre className="bg-slate-800 text-green-400 p-3 rounded text-xs ml-11">
{`message({ channel: "general", text: "博客系统开发完成！" })`}
              </pre>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">🎯 最佳实践</h2>
        
        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3">✅ 明确职责边界</h4>
            <p className="text-slate-700 text-sm">
              每个 Agent 应该有清晰的职责范围，避免功能重叠。例如，研究员只负责信息收集，不写代码；工程师只负责开发，不做决策。
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3">✅ 合理分配资源</h4>
            <p className="text-slate-700 text-sm">
              根据任务复杂度选择合适的模型和 thinking 级别。简单任务用低配置，复杂任务用高配置，平衡效果和成本。
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3">✅ 建立沟通机制</h4>
            <p className="text-slate-700 text-sm">
              使用共享文件或数据库让 Agent 之间交换信息。主 Agent 负责汇总各子 Agent 的成果并做出最终决策。
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3">✅ 设置超时和重试</h4>
            <p className="text-slate-700 text-sm">
              为子 Agent 任务设置合理的超时时间，防止无限等待。对于重要任务，可以配置失败重试机制。
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">❓ 常见问题</h2>
        
        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-2">Q: 最多可以创建多少个子 Agent？</h4>
            <p className="text-slate-700 text-sm">
              A: 理论上没有硬性限制，但建议同时运行的子 Agent 不超过 5-10 个，避免资源竞争和管理混乱。
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-2">Q: 子 Agent 之间如何通信？</h4>
            <p className="text-slate-700 text-sm">
              A: 子 Agent 不能直接通信，需要通过主 Agent 中转，或通过共享文件/数据库交换信息。
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-2">Q: 如何监控子 Agent 的状态？</h4>
            <p className="text-slate-700 text-sm">
              A: 使用 <code className="text-blue-600">subagents list</code> 查看运行中的子 Agent，使用 <code className="text-blue-600">sessions_list</code> 查看所有会话。
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-2">Q: 子 Agent 任务失败怎么办？</h4>
            <p className="text-slate-700 text-sm">
              A: 主 Agent 会收到失败通知。可以配置自动重试，或根据错误类型决定是重新分配任务还是人工介入。
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 mb-8">
          <h3 className="font-bold text-blue-900 mb-3">🎯 本步要点总结</h3>
          <ul className="text-blue-700 space-y-2">
            <li>✓ 理解六部制多 Agent 协作架构</li>
            <li>✓ 掌握 Agent 角色定义和配置方法</li>
            <li>✓ 学会使用 sessions_spawn 调度子 Agent</li>
            <li>✓ 了解任务编排的实际案例</li>
            <li>✓ 遵循多 Agent 协作最佳实践</li>
          </ul>
        </div>

        <div className="flex justify-between mt-12">
          <Link
            href="/openclaw/step4"
            className="px-6 py-4 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-colors"
          >
            ← 上一步：技能系统
          </Link>
          <Link
            href="/openclaw/step6"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all hover:-translate-y-1"
          >
            开始第 6 步：实战项目 →
          </Link>
        </div>
      </div>
    </StepPage>
  );
}
