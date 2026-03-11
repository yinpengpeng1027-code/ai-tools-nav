"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <span className="text-4xl">🚀</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI 工具导航站
            </span>
          </Link>
        </div>

        {/* Form Card */}
        <div className="p-8 bg-white border-2 border-slate-100 rounded-3xl shadow-2xl shadow-blue-500/10">
          <h1 className="text-2xl font-bold text-center mb-6 text-slate-900">
            {isLogin ? "欢迎回来 👋" : "创建账户 🎉"}
          </h1>

          <form className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">昵称</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                  placeholder="请输入昵称"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">邮箱</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">密码</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                placeholder="请输入密码"
              />
            </div>

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-500 focus:ring-blue-500" />
                  <span className="text-slate-600 font-medium">记住我</span>
                </label>
                <Link href="/forgot-password" className="text-blue-500 hover:text-blue-600 font-semibold">
                  忘记密码？
                </Link>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              {isLogin ? "登录" : "注册"}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-slate-500 font-medium">或</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-slate-200 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300">
                <span className="text-xl">📱</span>
                微信登录
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-slate-200 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300">
                <span className="text-xl">🍎</span>
                Apple ID
              </button>
            </div>
          </div>

          <div className="mt-6 text-center text-sm">
            <span className="text-slate-600 font-medium">
              {isLogin ? "还没有账户？" : "已有账户？"}
            </span>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-blue-500 hover:text-blue-600 font-semibold"
            >
              {isLogin ? "立即注册" : "立即登录"}
            </button>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link href="/" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
            ← 返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}
