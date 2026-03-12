'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import BrandLogo from "@/components/BrandLogo";

export default function Step1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <BrandLogo size="small" withText={true} />
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/tools" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">工具库</Link>
              <Link href="/openclaw" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">OpenClaw 课程</Link>
              <Link href="/vip" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">VIP 专区</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Bar */}
        <div className="mb-12">
          <Link href="/openclaw" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-6">
            <span>←</span> 返回课程目录
          </Link>
          <div className="flex items-center gap-4 mb-4">
            {[1, 2, 3, 4, 5, 6, 7].map((step) => (
              <div
                key={step}
                className={`flex-1 h-2 rounded-full ${
                  step === 1
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                    : step < 1
                    ? 'bg-green-500'
                    : 'bg-slate-200'
                }`}
              />
            ))}
          </div>
          <div className="flex justify-between text-xs text-slate-500">
            <span>第 1 步</span>
            <span>第 7 步</span>
          </div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-200"
        >
          <div className="text-center mb-8">
            <span className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl text-3xl text-white font-bold mb-4 shadow-lg">
              1
            </span>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              认识 OpenClaw
            </h1>
            <p className="text-lg text-slate-600">
              了解什么是 OpenClaw，它能为你做什么
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">🤖 什么是 OpenClaw？</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              OpenClaw 是一个强大的 AI Agent 框架，它让你能够创建、管理和部署智能助手。
              想象一下，你有一个 24 小时在线的私人助理，可以帮你处理各种任务——这就是 OpenClaw 能做到的！
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">✨ 核心能力</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-2">🔧 工具集成</h3>
                <p className="text-blue-700 text-sm">
                  连接各种外部工具和服务，如浏览器控制、文件操作、API 调用等
                </p>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                <h3 className="font-bold text-purple-900 mb-2">🧠 智能决策</h3>
                <p className="text-purple-700 text-sm">
                  基于大语言模型，能够理解复杂指令并自主规划执行步骤
                </p>
              </div>
              <div className="bg-pink-50 rounded-xl p-6 border border-pink-100">
                <h3 className="font-bold text-pink-900 mb-2">👥 多 Agent 协作</h3>
                <p className="text-pink-700 text-sm">
                  创建多个专业 Agent，像团队一样协同工作完成复杂任务
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h3 className="font-bold text-green-900 mb-2">📝 记忆系统</h3>
                <p className="text-green-700 text-sm">
                  长期记忆和短期记忆结合，让 Agent 能够记住重要信息
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">🎯 适用场景</h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-slate-700">自动化重复性工作（如数据收集、报告生成）</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-slate-700">智能客服和问答系统</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-slate-700">内容创作和编辑辅助</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-slate-700">研究和数据分析</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-slate-700">个人知识管理和学习助手</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">💡 学习路线</h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 mb-8">
              <p className="text-slate-700 mb-4">
                接下来的 6 步，我们将带你从零开始，逐步掌握 OpenClaw 的核心功能：
              </p>
              <ol className="space-y-2 text-slate-700">
                <li><strong className="text-blue-600">第 2 步：</strong>环境搭建 - 安装和配置 OpenClaw</li>
                <li><strong className="text-blue-600">第 3 步：</strong>基础配置 - 理解配置文件和核心概念</li>
                <li><strong className="text-blue-600">第 4 步：</strong>技能系统 - 学习和使用各种技能</li>
                <li><strong className="text-blue-600">第 5 步：</strong>多 Agent 协作 - 创建和管理多个 Agent</li>
                <li><strong className="text-blue-600">第 6 步：</strong>实战项目 - 动手做一个完整的项目</li>
                <li><strong className="text-blue-600">第 7 步：</strong>进阶技巧 - 高级功能和最佳实践</li>
              </ol>
            </div>

            <div className="flex justify-center mt-12">
              <Link
                href="/openclaw/step2"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all hover:-translate-y-1"
              >
                开始第 2 步：环境搭建 →
              </Link>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-sm">⭐</span>
              </div>
              <span className="font-bold text-slate-900">星图 StarMap AI</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-600">
              <Link href="/tools" className="hover:text-slate-900">工具库</Link>
              <Link href="/openclaw" className="hover:text-slate-900">OpenClaw 课程</Link>
              <Link href="/vip" className="hover:text-slate-900">VIP 专区</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
