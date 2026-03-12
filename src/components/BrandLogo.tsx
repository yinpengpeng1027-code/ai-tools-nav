'use client';

import { motion } from 'framer-motion';

interface BrandLogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
  withText?: boolean;
}

/**
 * 星图 StarMap 品牌 Logo 组件
 * 使用 SVG 绘制精美的星图图标，替换简单的 emoji
 */
export default function BrandLogo({ 
  size = 'medium', 
  className = '', 
  withText = true
}: BrandLogoProps) {
  const sizeConfig = {
    small: { icon: 40, text: 'text-xl', gap: 'gap-3' },
    medium: { icon: 56, text: 'text-4xl', gap: 'gap-4' },
    large: { icon: 72, text: 'text-5xl', gap: 'gap-5' },
  };

  const config = sizeConfig[size];

  // 星图图标 SVG - 象征星座连线和星光
  const StarMapIcon = () => (
    <svg
      width={config.icon}
      height={config.icon}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-lg"
    >
      {/* 背景渐变圆形 */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
        <linearGradient id="starGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.2" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* 圆形背景 */}
      <circle
        cx="32"
        cy="32"
        r="30"
        fill="url(#logoGradient)"
        className="drop-shadow-xl"
      />

      {/* 星座连线 */}
      <motion.g
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        filter="url(#glow)"
      >
        {/* 主要星座连线 */}
        <path
          d="M20 28 L28 24 L36 28 L44 22"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M28 24 L32 32 L28 40"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M36 28 L40 36 L32 32"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M20 28 L16 36 L24 42"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </motion.g>

      {/* 星星节点 - 带脉动动画 */}
      {[
        { cx: 20, cy: 28, r: 3 },
        { cx: 28, cy: 24, r: 2.5 },
        { cx: 36, cy: 28, r: 2.5 },
        { cx: 44, cy: 22, r: 2 },
        { cx: 32, cy: 32, r: 3.5 },
        { cx: 28, cy: 40, r: 2 },
        { cx: 40, cy: 36, r: 2 },
        { cx: 16, cy: 36, r: 1.5 },
        { cx: 24, cy: 42, r: 1.5 },
      ].map((star, index) => (
        <motion.circle
          key={index}
          cx={star.cx}
          cy={star.cy}
          r={star.r}
          fill="white"
          filter="url(#glow)"
          initial={{ opacity: 0.6, scale: 0.8 }}
          animate={{ 
            opacity: [0.6, 1, 0.6],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 2,
            delay: index * 0.1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* 装饰性小星星 */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <circle cx="48" cy="12" r="1" fill="white" opacity="0.6" />
        <circle cx="12" cy="48" r="0.8" fill="white" opacity="0.5" />
        <circle cx="52" cy="44" r="0.6" fill="white" opacity="0.4" />
      </motion.g>
    </svg>
  );

  return (
    <motion.div
      className={`flex items-center ${config.gap} ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <StarMapIcon />
      
      {withText && (
        <div className="flex flex-col">
          <span className={`${config.text} font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight`}>
            星图 StarMap
          </span>
        </div>
      )}
    </motion.div>
  );
}
