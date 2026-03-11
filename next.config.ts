import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/ai-tools-nav',
  assetPrefix: '/ai-tools-nav/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
