"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <span className="text-4xl">🚀</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
              AI 工具导航站
            </span>
          </Link>
        </div>

        {/* Form Card */}
        <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl">
          <h1 className="text-2xl font-bold text-center mb-6">
            {isLogin ? "欢迎回来" : "创建账户"}
          </h1>

          <form className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium mb-2">昵称</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                  placeholder="请输入昵称"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-2">邮箱</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">密码</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                placeholder="请输入密码"
              />
            </div>

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-white/20 bg-white/5" />
                  <span className="text-slate-400">记住我</span>
                </label>
                <a href="#" className="text-indigo-400 hover:text-indigo-300">
                  忘记密码？
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl font-medium hover:opacity-90 transition-opacity"
            >
              {isLogin ? "登录" : "注册"}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-slate-900 text-slate-400">或继续使用</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <span className="text-xl">💬</span>
              微信登录
            </button>
            <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <span className="text-xl">📱</span>
              手机号登录
            </button>
          </div>

          {/* Toggle */}
          <p className="text-center mt-6 text-slate-400">
            {isLogin ? "还没有账户？" : "已有账户？"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-indigo-400 hover:text-indigo-300 font-medium"
            >
              {isLogin ? "立即注册" : "立即登录"}
            </button>
          </p>
        </div>

        {/* Footer Links */}
        <div className="text-center mt-8 text-sm text-slate-500">
          登录即表示您同意我们的{" "}
          <Link href="/privacy" className="text-indigo-400 hover:text-indigo-300">
            隐私政策
          </Link>
        </div>
      </div>
    </div>
  );
}
