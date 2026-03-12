import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages 支持完整的 Next.js 功能
  // 移除 output: 'export' 以支持 API Routes 和 SSR
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
