import type { Metadata } from "next";
import "./globals.css";

// 添加版本号用于 CDN 缓存刷新 - 每次更新时修改此版本号
const BUILD_VERSION = process.env.NEXT_PUBLIC_BUILD_VERSION || Date.now().toString();

export const metadata: Metadata = {
  title: "星图 StarMap AI - 万千 AI，一键触达 | 一站式 AI 工具集合体",
  description: "发现最好的 AI 工具，连接 AI 未来",
  // 浏览器缓存控制 meta 标签
  other: {
    // 禁止 IE 缓存
    'Cache-Control': 'no-cache',
    // 禁止缓存的兼容写法
    'Pragma': 'no-cache',
    // 设置过期时间为过去
    'Expires': '0',
    // 添加版本号用于追踪
    'X-Build-Version': BUILD_VERSION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* 浏览器缓存控制 */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: '"Inter", "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", system-ui, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
