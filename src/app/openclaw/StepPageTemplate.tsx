'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import BrandLogo from "@/components/BrandLogo";

const STEPS = [
  { num: 1, title: "认识 OpenClaw", path: "/openclaw/step1" },
  { num: 2, title: "环境搭建", path: "/openclaw/step2" },
  { num: 3, title: "基础配置", path: "/openclaw/step3" },
  { num: 4, title: "技能系统", path: "/openclaw/step4" },
  { num: 5, title: "多 Agent 协作", path: "/openclaw/step5" },
  { num: 6, title: "实战项目", path: "/openclaw/step6" },
  { num: 7, title: "进阶技巧", path: "/openclaw/step7" },
];

interface StepPageProps {
  stepNumber: number;
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function StepPage({ stepNumber, title, description, children }: StepPageProps) {
  const prevStep = stepNumber > 1 ? STEPS[stepNumber - 2] : null;
  const nextStep = stepNumber < 7 ? STEPS[stepNumber] : null;

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
            {STEPS.map((step) => (
              <div
                key={step.num}
                className={`flex-1 h-2 rounded-full ${
                  step.num === stepNumber
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                    : step.num < stepNumber
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
              {stepNumber}
            </span>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              {title}
            </h1>
            <p className="text-lg text-slate-600">
              {description}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            {children}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12 pt-8 border-t border-slate-200">
            {prevStep ? (
              <Link
                href={prevStep.path}
                className="px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-medium hover:bg-slate-200 transition-colors"
              >
                ← 上一步：{prevStep.title}
              </Link>
            ) : (
              <div />
            )}
            {nextStep ? (
              <Link
                href={nextStep.path}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:shadow-lg transition-all hover:-translate-y-1"
              >
                下一步：{nextStep.title} →
              </Link>
            ) : (
              <Link
                href="/openclaw"
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-medium hover:shadow-lg transition-all hover:-translate-y-1"
              >
                🎉 完成课程 →
              </Link>
            )}
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
