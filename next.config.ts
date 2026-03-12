import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 注意：output: 'export' 模式下 headers() 不生效
  // CDN 缓存控制通过以下方式实现：
  // 1. Meta 标签（已在 src/app/layout.tsx 中配置）
  // 2. CDN 控制台配置缓存规则
  // 3. 构建后脚本生成刷新清单 (scripts/clear-cdn-cache.js)
};

export default nextConfig;
