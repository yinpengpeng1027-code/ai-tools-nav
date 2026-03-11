'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

// 渐入动画
export const FadeIn = ({ children, delay = 0, duration = 0.5, className = '' }: { children: ReactNode; delay?: number; duration?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

// 缩放进入动画
export const ScaleIn = ({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

// 卡片悬浮效果
export const HoverCard = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

// 按钮点击效果
export const ClickButton = ({ children, className = '', onClick }: { children: ReactNode; className?: string; onClick?: () => void }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}
    className={className}
    onClick={onClick}
  >
    {children}
  </motion.button>
);

// 滚动动画容器
export const ScrollReveal = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

// 页面过渡动画
export const PageTransition = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

// 加载动画
export const LoadingSpinner = () => (
  <motion.div
    className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full"
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
  />
);

// 脉冲动画背景
export const PulseBackground = ({ className = '' }: { className?: string }) => (
  <motion.div
    className={className}
    animate={{ opacity: [0.5, 1, 0.5] }}
    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
  />
);
