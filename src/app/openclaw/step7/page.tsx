'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import StepPage from "../StepPageTemplate";

export default function Step7Page() {
  return (
    <StepPage
      stepNumber={7}
      title="进阶技巧"
      description="高级功能和最佳实践"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">🎓 欢迎来到进阶阶段</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          恭喜你完成了前 6 步的学习！现在你已经掌握了 OpenClaw 的核心功能。
          在这一步，我们将深入探讨高级技巧、性能优化和最佳实践，帮助你成为 OpenClaw 专家。
        </p>

        <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100 mb-8">
          <h3 className="font-bold text-purple-900 mb-4">📚 本步内容概览</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-slate-900 mb-2">🔧 高级功能</h4>
              <ul className="text-slate-700 text-sm space-y-1">
                <li>• 自定义工具开发</li>
                <li>• 复杂工作流编排</li>
                <li>• 多模态处理能力</li>
                <li>• 外部 API 集成</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-slate-900 mb-2">⚡ 性能优化</h4>
              <ul className="text-slate-700 text-sm space-y-1">
                <li>• Token 使用优化</li>
                <li>• 并发任务管理</li>
                <li>• 缓存策略</li>
                <li>• 错误处理机制</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">🛠️ 高级功能一：自定义工具开发</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          当内置工具无法满足需求时，你可以创建自定义工具来扩展 OpenClaw 的能力。
        </p>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <h3 className="font-bold text-white mb-4">示例：创建天气查询工具</h3>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
{`// tools/weather-tool.js
const axios = require('axios');

class WeatherTool {
  constructor(config) {
    this.apiKey = config.apiKey;
    this.baseUrl = 'https://api.weather.com/v3/w/conditions';
  }

  async getCurrentWeather(location) {
    try {
      const response = await axios.get(\`\${this.baseUrl}/observation\`, {
        params: {
          location: location,
          format: 'json',
          language: 'zh-CN',
          apiKey: this.apiKey
        }
      });
      
      return {
        success: true,
        data: {
          temperature: response.data.temperature,
          condition: response.data.wxPhrase,
          humidity: response.data.relativeHumidity,
          windSpeed: response.data.windSpeed
        }
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  async getForecast(location, days = 3) {
    // 获取天气预报逻辑
    // ...
  }
}

module.exports = WeatherTool;`}
          </pre>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <h3 className="font-bold text-white mb-4">在 openclaw.json 中注册工具</h3>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
{`{
  "tools": {
    "custom": {
      "weather": {
        "path": "./tools/weather-tool.js",
        "config": {
          "apiKey": "YOUR_WEATHER_API_KEY"
        },
        "methods": ["getCurrentWeather", "getForecast"]
      }
    }
  },
  "agents": {
    "main": {
      "tools": ["weather"]
    }
  }
}`}
          </pre>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-8">
          <h3 className="font-bold text-blue-900 mb-3">💡 使用示例</h3>
          <pre className="bg-white text-slate-800 p-4 rounded-lg overflow-x-auto text-xs mb-3">
{`// Agent 中可以这样调用
const weather = await tools.weather.getCurrentWeather('北京');
if (weather.success) {
  console.log(\`北京当前温度：\${weather.data.temperature}°C\`);
}`}
          </pre>
          <p className="text-blue-700 text-sm">
            自定义工具让 Agent 可以访问任何 API 和服务，极大扩展了能力边界。
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">🔄 高级功能二：复杂工作流编排</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          对于复杂任务，需要设计合理的工作流，协调多个 Agent 和工具协同工作。
        </p>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100 mb-8">
          <h3 className="font-bold text-purple-900 mb-4">工作流设计模式</h3>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                链式处理（Chain）
              </h4>
              <p className="text-slate-700 text-sm mb-3 ml-8">
                任务按顺序执行，前一步的输出是后一步的输入
              </p>
              <pre className="bg-slate-800 text-green-400 p-3 rounded-lg overflow-x-auto text-xs ml-8">
{`搜索信息 → 抓取内容 → 分析数据 → 生成报告
    ↓           ↓           ↓           ↓
researcher   fetcher     analyst     writer`}
              </pre>
            </div>

            <div className="bg-white rounded-lg p-5">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                并行处理（Parallel）
              </h4>
              <p className="text-slate-700 text-sm mb-3 ml-8">
                同时执行多个独立任务，最后汇总结果
              </p>
              <pre className="bg-slate-800 text-green-400 p-3 rounded-lg overflow-x-auto text-xs ml-8">
{`主任务 → 子任务 A (搜索) ─┐
        → 子任务 B (抓取) ─┼→ 汇总分析
        → 子任务 C (整理) ─┘`}
              </pre>
            </div>

            <div className="bg-white rounded-lg p-5">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                条件分支（Conditional）
              </h4>
              <p className="text-slate-700 text-sm mb-3 ml-8">
                根据条件判断执行不同的分支
              </p>
              <pre className="bg-slate-800 text-green-400 p-3 rounded-lg overflow-x-auto text-xs ml-8">
{`if (发现重要信息) {
  → 深度分析并生成详细报告
} else {
  → 生成简报并安排后续监控
}`}
              </pre>
            </div>

            <div className="bg-white rounded-lg p-5">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                循环迭代（Loop）
              </h4>
              <p className="text-slate-700 text-sm mb-3 ml-8">
                重复执行直到满足条件
              </p>
              <pre className="bg-slate-800 text-green-400 p-3 rounded-lg overflow-x-auto text-xs ml-8">
{`while (信息不足 && 尝试次数 < 5) {
  调整搜索策略;
  重新搜索;
  评估结果质量;
}`}
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <h3 className="font-bold text-white mb-4">工作流实现示例：市场研究报告生成</h3>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
{`// 主工作流控制器
async function generateMarketReport(topic) {
  // 阶段 1: 信息收集（并行）
  const searchTasks = [
    subagents.spawn({ task: \`搜索\${topic}的市场规模\`, agent: 'researcher' }),
    subagents.spawn({ task: \`搜索\${topic}的主要玩家\`, agent: 'researcher' }),
    subagents.spawn({ task: \`搜索\${topic}的最新趋势\`, agent: 'researcher' }),
    subagents.spawn({ task: \`搜索\${topic}的政策环境\`, agent: 'researcher' })
  ];
  
  const searchResults = await Promise.all(searchTasks);
  
  // 阶段 2: 质量评估（条件分支）
  const qualityScore = evaluateResults(searchResults);
  
  if (qualityScore < 0.6) {
    // 信息不足，启动第二轮搜索
    const additionalTasks = searchResults.map(r => 
      subagents.spawn({ 
        task: \`补充搜索：\${r.missingInfo}\`, 
        agent: 'researcher' 
      })
    );
    await Promise.all(additionalTasks);
  }
  
  // 阶段 3: 深度分析（链式）
  const analysis = await subagents.spawn({
    task: '分析收集到的所有数据，提取关键洞察',
    agent: 'analyst',
    context: searchResults
  });
  
  // 阶段 4: 报告生成
  const report = await subagents.spawn({
    task: '根据分析结果生成结构化报告',
    agent: 'writer',
    context: analysis
  });
  
  // 阶段 5: 发布和通知
  await message({ channel: 'team', text: '报告已生成', attachment: report });
  
  return report;
}`}
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">🎨 高级功能三：多模态处理</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          OpenClaw 支持处理文本、图片、音频等多种模态的数据。
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4">📷 图片处理</h3>
            <div className="space-y-3">
              <div className="bg-slate-800 rounded-lg p-3">
                <h4 className="text-white text-xs font-bold mb-2">截图网页</h4>
                <pre className="bg-slate-900 text-green-400 p-2 rounded text-xs overflow-x-auto">
{`browser.screenshot({
  url: 'https://example.com',
  fullPage: true,
  output: './screenshots/page.png'
})`}
                </pre>
              </div>
              <div className="bg-slate-800 rounded-lg p-3">
                <h4 className="text-white text-xs font-bold mb-2">OCR 识别</h4>
                <pre className="bg-slate-900 text-green-400 p-2 rounded text-xs overflow-x-auto">
{`const text = await ocr.recognize({
  image: './image.png',
  language: 'zh-CN'
})`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4">🎵 音频处理</h3>
            <div className="space-y-3">
              <div className="bg-slate-800 rounded-lg p-3">
                <h4 className="text-white text-xs font-bold mb-2">语音转文字</h4>
                <pre className="bg-slate-900 text-green-400 p-2 rounded text-xs overflow-x-auto">
{`const transcript = await tts.transcribe({
  audio: './meeting.mp3',
  language: 'zh-CN'
})`}
                </pre>
              </div>
              <div className="bg-slate-800 rounded-lg p-3">
                <h4 className="text-white text-xs font-bold mb-2">文字转语音</h4>
                <pre className="bg-slate-900 text-green-400 p-2 rounded text-xs overflow-x-auto">
{`await tts.speak({
  text: '你好，这是语音消息',
  voice: 'female-warm',
  output: './output.mp3'
})`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">⚡ 性能优化技巧</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          优化 Agent 性能可以显著降低成本并提高效率。
        </p>

        <div className="space-y-6 mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
            <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">💰</span>
              优化 1：Token 使用优化
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-red-700 mb-2 text-sm">❌ 低效做法</h4>
                <pre className="bg-slate-800 text-red-300 p-3 rounded text-xs overflow-x-auto">
{`// 发送完整长文本
const fullContext = await read('large-file.md');
await llm.chat(fullContext); // 消耗大量 token`}
                </pre>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-green-700 mb-2 text-sm">✅ 优化做法</h4>
                <pre className="bg-slate-800 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`// 提取关键信息
const summary = await summarize('large-file.md', {
  maxLength: 500
});
await llm.chat(summary); // 节省 80% token`}
                </pre>
              </div>
            </div>
            <div className="mt-4 bg-white rounded-lg p-4">
              <h4 className="font-bold text-blue-900 mb-2 text-sm">💡 具体策略</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• 使用摘要代替原文（节省 70-90% token）</li>
                <li>• 结构化输出，避免冗长描述</li>
                <li>• 复用中间结果，避免重复计算</li>
                <li>• 设置合理的 maxTokens 限制</li>
                <li>• 使用流式输出，提前终止不必要生成</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
            <h3 className="font-bold text-purple-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              优化 2：并发任务管理
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-red-700 mb-2 text-sm">❌ 串行执行（慢）</h4>
                <pre className="bg-slate-800 text-red-300 p-3 rounded text-xs overflow-x-auto">
{`const result1 = await search('topic1');
const result2 = await search('topic2');
const result3 = await search('topic3');
// 总耗时：3 次搜索时间之和`}
                </pre>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-green-700 mb-2 text-sm">✅ 并发执行（快）</h4>
                <pre className="bg-slate-800 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`const [result1, result2, result3] = await Promise.all([
  search('topic1'),
  search('topic2'),
  search('topic3')
]);
// 总耗时：约等于 1 次搜索时间`}
                </pre>
              </div>
            </div>
            <div className="mt-4 bg-white rounded-lg p-4">
              <h4 className="font-bold text-purple-900 mb-2 text-sm">⚠️ 注意事项</h4>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• 控制并发数量（建议不超过 5 个）</li>
                <li>• 注意 API 速率限制</li>
                <li>• 处理失败重试逻辑</li>
                <li>• 使用 Promise.allSettled 容错</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
            <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">💾</span>
              优化 3：缓存策略
            </h3>
            <div className="bg-white rounded-lg p-4 mb-4">
              <h4 className="font-bold text-green-900 mb-2 text-sm">缓存实现示例</h4>
              <pre className="bg-slate-800 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`const cache = new Map();

async function cachedSearch(query, ttl = 3600000) {
  const cacheKey = \`search:\${query}\`;
  const cached = cache.get(cacheKey);
  
  if (cached && Date.now() - cached.timestamp < ttl) {
    console.log('命中缓存');
    return cached.data;
  }
  
  const result = await web_search({ query });
  cache.set(cacheKey, {
    data: result,
    timestamp: Date.now()
  });
  
  return result;
}`}
              </pre>
            </div>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="bg-white rounded-lg p-3">
                <h5 className="font-bold text-green-900 text-xs mb-1">📦 结果缓存</h5>
                <p className="text-green-700 text-xs">存储搜索结果，避免重复查询</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <h5 className="font-bold text-green-900 text-xs mb-1">📄 内容缓存</h5>
                <p className="text-green-700 text-xs">缓存网页抓取内容</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <h5 className="font-bold text-green-900 text-xs mb-1">🧠 分析缓存</h5>
                <p className="text-green-700 text-xs">缓存 LLM 分析结果</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
            <h3 className="font-bold text-yellow-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🛡️</span>
              优化 4：错误处理机制
            </h3>
            <div className="bg-white rounded-lg p-4 mb-4">
              <h4 className="font-bold text-yellow-900 mb-2 text-sm">完善的错误处理</h4>
              <pre className="bg-slate-800 text-yellow-400 p-3 rounded text-xs overflow-x-auto">
{`async function robustTask(task, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await executeTask(task);
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      
      // 指数退避
      const delay = Math.pow(2, i) * 1000;
      console.log(\`重试 \${i+1}, 等待 \${delay}ms\`);
      await sleep(delay);
    }
  }
}`}
              </pre>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3">
                <h5 className="font-bold text-yellow-900 text-xs mb-1">🔄 重试策略</h5>
                <ul className="text-yellow-700 text-xs space-y-1">
                  <li>• 指数退避（1s, 2s, 4s...）</li>
                  <li>• 最大重试次数限制</li>
                  <li>• 区分可重试/不可重试错误</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-3">
                <h5 className="font-bold text-yellow-900 text-xs mb-1">📝 日志记录</h5>
                <ul className="text-yellow-700 text-xs space-y-1">
                  <li>• 记录错误详情和上下文</li>
                  <li>• 便于问题排查</li>
                  <li>• 监控错误率</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">📖 最佳实践</h2>
        
        <div className="space-y-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              Prompt 工程最佳实践
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-bold text-blue-900 mb-2 text-sm">✅ 好的 Prompt</h4>
                <pre className="bg-white text-slate-800 p-3 rounded text-xs overflow-x-auto">
{`你是一个专业的市场分析师。
请分析以下数据，提取 3 个关键洞察。
每个洞察不超过 50 字。
使用 JSON 格式输出：
{
  "insights": [
    {"title": "...", "description": "..."}
  ]
}`}
                </pre>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-bold text-red-900 mb-2 text-sm">❌ 差的 Prompt</h4>
                <pre className="bg-white text-slate-800 p-3 rounded text-xs overflow-x-auto">
{`分析一下这个数据，告诉我有什么发现。
尽量详细一点。`}
                </pre>
              </div>
            </div>
            <div className="mt-4 bg-slate-50 rounded-lg p-4">
              <h4 className="font-bold text-slate-900 mb-2 text-sm">💡 Prompt 设计原则</h4>
              <ul className="text-slate-700 text-sm space-y-1">
                <li>• 明确角色和任务</li>
                <li>• 指定输出格式</li>
                <li>• 设定约束条件（长度、风格等）</li>
                <li>• 提供示例（Few-shot）</li>
                <li>• 分步骤思考（Chain of Thought）</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              Agent 协作最佳实践
            </h3>
            <div className="space-y-3">
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-bold text-purple-900 mb-2 text-sm">🎯 明确分工</h4>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• 每个 Agent 有清晰的职责边界</li>
                  <li>• 避免职责重叠和混淆</li>
                  <li>• 专业化优于通用化</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-bold text-purple-900 mb-2 text-sm">📋 标准化接口</h4>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• 定义清晰的输入输出格式</li>
                  <li>• 使用结构化数据（JSON）</li>
                  <li>• 文档化接口规范</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-bold text-purple-900 mb-2 text-sm">🔄 反馈循环</h4>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• 质量检查机制</li>
                  <li>• 错误纠正流程</li>
                  <li>• 持续优化迭代</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              记忆管理最佳实践
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-green-900 mb-2 text-sm">📝 记忆分类</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• 短期记忆：当前会话上下文</li>
                  <li>• 长期记忆：持久化重要信息</li>
                  <li>• 工作记忆：任务相关临时数据</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-green-900 mb-2 text-sm">💾 存储策略</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• 定期清理过期记忆</li>
                  <li>• 压缩冗余信息</li>
                  <li>• 索引关键内容</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
              安全与隐私最佳实践
            </h3>
            <div className="space-y-3">
              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-bold text-yellow-900 mb-2 text-sm">🔐 敏感信息保护</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• API 密钥使用环境变量</li>
                  <li>• 不记录敏感数据到日志</li>
                  <li>• 定期轮换凭证</li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-bold text-yellow-900 mb-2 text-sm">🚧 权限控制</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• 最小权限原则</li>
                  <li>• 敏感操作需人工确认</li>
                  <li>• 审计日志记录</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">🔧 自定义技能开发指南</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          创建自定义技能可以极大扩展 OpenClaw 的能力。以下是完整的开发流程。
        </p>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <h3 className="font-bold text-white mb-4">技能目录结构</h3>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
{`my-custom-skill/
├── SKILL.md              # 技能描述和触发规则
├── index.js              # 主入口文件
├── utils/                # 工具函数
│   ├── helper.js
│   └── validator.js
├── templates/            # 模板文件
│   └── report.md
└── tests/                # 测试文件
    └── skill.test.js`}
          </pre>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <h3 className="font-bold text-white mb-4">SKILL.md 示例</h3>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
{`# my-custom-skill

## 描述
这是一个自定义技能，用于 XXX 功能。

## 触发条件
当用户提到以下关键词时激活：
- "XXX"
- "YYY"
- "帮我做 ZZZ"

## 使用示例
\`\`\`
请帮我分析这个数据
\`\`\`

## 依赖
- Node.js >= 18
- 需要配置 XXX_API_KEY 环境变量`}
          </pre>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <h3 className="font-bold text-white mb-4">index.js 示例</h3>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
{`const axios = require('axios');

class MyCustomSkill {
  constructor(config) {
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl;
  }

  // 主要功能方法
  async execute(task, context) {
    try {
      // 1. 验证输入
      this.validateInput(task);
      
      // 2. 调用外部 API
      const result = await this.callAPI(task);
      
      // 3. 处理结果
      const processed = this.processResult(result);
      
      // 4. 返回结果
      return {
        success: true,
        data: processed
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  validateInput(task) {
    if (!task) {
      throw new Error('任务不能为空');
    }
  }

  async callAPI(task) {
    const response = await axios.post(
      \`\${this.baseUrl}/execute\`,
      { task },
      {
        headers: {
          'Authorization': \`Bearer \${this.apiKey}\`
        }
      }
    );
    return response.data;
  }

  processResult(result) {
    // 数据清洗和转换逻辑
    return result;
  }
}

module.exports = MyCustomSkill;`}
          </pre>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-8">
          <h3 className="font-bold text-blue-900 mb-3">💡 技能开发提示</h3>
          <ul className="text-blue-700 space-y-2">
            <li>✓ 保持单一职责原则，一个技能做好一件事</li>
            <li>✓ 提供完善的错误处理和日志记录</li>
            <li>✓ 编写清晰的文档和使用示例</li>
            <li>✓ 包含单元测试确保质量</li>
            <li>✓ 使用环境变量管理配置</li>
            <li>✓ 遵循 OpenClaw 技能规范</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">🔍 故障排查手册</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          遇到问题时，按照以下步骤进行排查。
        </p>

        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-red-500">🔴</span>
              问题 1：Agent 无法启动
            </h4>
            <div className="bg-slate-50 rounded-lg p-4">
              <h5 className="font-bold text-slate-900 mb-2 text-sm">可能原因</h5>
              <ul className="text-slate-700 text-sm space-y-1 mb-3">
                <li>• 配置文件语法错误</li>
                <li>• API 密钥无效或缺失</li>
                <li>• 依赖未正确安装</li>
                <li>• 端口被占用</li>
              </ul>
              <h5 className="font-bold text-slate-900 mb-2 text-sm">解决方案</h5>
              <ol className="text-slate-700 text-sm space-y-1 list-decimal list-inside">
                <li>检查 openclaw.json 语法（使用 JSON 验证工具）</li>
                <li>确认 API 密钥配置正确且有效</li>
                <li>运行 <code className="bg-slate-200 px-1 rounded">npm install</code> 重新安装依赖</li>
                <li>查看日志：<code className="bg-slate-200 px-1 rounded">openclaw logs</code></li>
                <li>更换端口或关闭占用进程</li>
              </ol>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-orange-500">🟠</span>
              问题 2：技能无法加载
            </h4>
            <div className="bg-slate-50 rounded-lg p-4">
              <h5 className="font-bold text-slate-900 mb-2 text-sm">可能原因</h5>
              <ul className="text-slate-700 text-sm space-y-1 mb-3">
                <li>• 技能路径配置错误</li>
                <li>• SKILL.md 格式不正确</li>
                <li>• 技能代码有语法错误</li>
                <li>• 缺少依赖模块</li>
              </ul>
              <h5 className="font-bold text-slate-900 mb-2 text-sm">解决方案</h5>
              <ol className="text-slate-700 text-sm space-y-1 list-decimal list-inside">
                <li>检查技能路径是否相对于 workspace</li>
                <li>验证 SKILL.md 符合规范</li>
                <li>运行 <code className="bg-slate-200 px-1 rounded">node -c skill/index.js</code> 检查语法</li>
                <li>安装缺失的 npm 包</li>
              </ol>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-yellow-500">🟡</span>
              问题 3：任务执行超时
            </h4>
            <div className="bg-slate-50 rounded-lg p-4">
              <h5 className="font-bold text-slate-900 mb-2 text-sm">可能原因</h5>
              <ul className="text-slate-700 text-sm space-y-1 mb-3">
                <li>• 任务过于复杂</li>
                <li>• 外部 API 响应慢</li>
                <li>• 死循环或无限重试</li>
                <li>• 资源不足</li>
              </ul>
              <h5 className="font-bold text-slate-900 mb-2 text-sm">解决方案</h5>
              <ol className="text-slate-700 text-sm space-y-1 list-decimal list-inside">
                <li>拆分大任务为小任务</li>
                <li>增加超时时间配置</li>
                <li>检查循环逻辑和重试次数</li>
                <li>优化代码性能或升级配置</li>
              </ol>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-blue-500">🔵</span>
              问题 4：输出质量不佳
            </h4>
            <div className="bg-slate-50 rounded-lg p-4">
              <h5 className="font-bold text-slate-900 mb-2 text-sm">可能原因</h5>
              <ul className="text-slate-700 text-sm space-y-1 mb-3">
                <li>• Prompt 不够清晰</li>
                <li>• 上下文信息不足</li>
                <li>• 模型能力限制</li>
                <li>• 缺少示例参考</li>
              </ul>
              <h5 className="font-bold text-slate-900 mb-2 text-sm">解决方案</h5>
              <ol className="text-slate-700 text-sm space-y-1 list-decimal list-inside">
                <li>优化 Prompt，增加明确指令</li>
                <li>提供更多相关上下文</li>
                <li>升级到更强的模型</li>
                <li>添加 Few-shot 示例</li>
              </ol>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-green-500">🟢</span>
              问题 5：内存占用过高
            </h4>
            <div className="bg-slate-50 rounded-lg p-4">
              <h5 className="font-bold text-slate-900 mb-2 text-sm">可能原因</h5>
              <ul className="text-slate-700 text-sm space-y-1 mb-3">
                <li>• 缓存未清理</li>
                <li>• 大文件未释放</li>
                <li>• 内存泄漏</li>
                <li>• 并发任务过多</li>
              </ul>
              <h5 className="font-bold text-slate-900 mb-2 text-sm">解决方案</h5>
              <ol className="text-slate-700 text-sm space-y-1 list-decimal list-inside">
                <li>实现缓存淘汰策略（LRU）</li>
                <li>使用流式处理大文件</li>
                <li>使用内存分析工具检测泄漏</li>
                <li>限制并发任务数量</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100 mb-8">
          <h3 className="font-bold text-purple-900 mb-4">🎯 调试工具推荐</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-slate-900 mb-2 text-sm">📝 日志查看</h4>
              <pre className="bg-slate-800 text-green-400 p-2 rounded text-xs">openclaw logs --follow</pre>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-slate-900 mb-2 text-sm">🔍 性能分析</h4>
              <pre className="bg-slate-800 text-green-400 p-2 rounded text-xs">node --inspect index.js</pre>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-slate-900 mb-2 text-sm">🧪 单元测试</h4>
              <pre className="bg-slate-800 text-green-400 p-2 rounded text-xs">npm test</pre>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">🎓 学习资源推荐</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h3 className="font-bold text-blue-900 mb-4">📚 官方文档</h3>
            <ul className="text-blue-700 space-y-2 text-sm">
              <li>• <a href="#" className="underline hover:text-blue-900">OpenClaw 核心概念</a></li>
              <li>• <a href="#" className="underline hover:text-blue-900">技能开发指南</a></li>
              <li>• <a href="#" className="underline hover:text-blue-900">API 参考手册</a></li>
              <li>• <a href="#" className="underline hover:text-blue-900">最佳实践集合</a></li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
            <h3 className="font-bold text-purple-900 mb-4">🎥 视频教程</h3>
            <ul className="text-purple-700 space-y-2 text-sm">
              <li>• OpenClaw 入门教程（10 集）</li>
              <li>• 高级 Agent 开发实战</li>
              <li>• 技能开发案例分析</li>
              <li>• 性能优化技巧分享</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border border-green-100">
            <h3 className="font-bold text-green-900 mb-4">💬 社区资源</h3>
            <ul className="text-green-700 space-y-2 text-sm">
              <li>• OpenClaw 开发者论坛</li>
              <li>• Discord 技术交流群</li>
              <li>• GitHub 开源项目</li>
              <li>• 月度技术分享会</li>
            </ul>
          </div>

          <div className="bg-pink-50 rounded-xl p-6 border border-pink-100">
            <h3 className="font-bold text-pink-900 mb-4">📖 扩展阅读</h3>
            <ul className="text-pink-700 space-y-2 text-sm">
              <li>• 《Agent 设计模式》</li>
              <li>• 《Prompt 工程指南》</li>
              <li>• 《LLM 应用开发实战》</li>
              <li>• 《AI 系统架构设计》</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200 mb-8 text-center">
          <h2 className="text-3xl font-bold text-green-900 mb-4">🎉 恭喜你完成全部课程！</h2>
          <p className="text-green-700 text-lg mb-6">
            从第 1 步的入门认知，到第 7 步的进阶技巧，你已经系统掌握了 OpenClaw 的核心能力。
            现在，是时候开始创造属于你自己的 AI Agent 了！
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/openclaw"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold text-lg shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all hover:-translate-y-1"
            >
              📖 回顾课程目录
            </Link>
            <Link
              href="/tools"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all hover:-translate-y-1"
            >
              🛠️ 开始创建项目
            </Link>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <h3 className="font-bold text-white mb-4">📋 第 7 步要点总结</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="text-green-400 space-y-2 text-sm">
              <li>✓ 掌握自定义工具开发方法</li>
              <li>✓ 学会设计复杂工作流</li>
              <li>✓ 了解多模态处理能力</li>
              <li>✓ 掌握 Token 优化技巧</li>
              <li>✓ 学会并发任务管理</li>
            </ul>
            <ul className="text-green-400 space-y-2 text-sm">
              <li>✓ 实现缓存策略提升性能</li>
              <li>✓ 建立完善的错误处理机制</li>
              <li>✓ 遵循 Prompt 工程最佳实践</li>
              <li>✓ 掌握故障排查方法</li>
              <li>✓ 能够开发自定义技能</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between mt-12">
          <Link
            href="/openclaw/step6"
            className="px-6 py-4 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-colors"
          >
            ← 上一步：实战项目
          </Link>
          <Link
            href="/openclaw"
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold text-lg shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all hover:-translate-y-1"
          >
            🎉 完成课程 →
          </Link>
        </div>
      </div>
    </StepPage>
  );
}
