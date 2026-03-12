'use client';

import { ReactNode } from 'react';
import { motion, Variants, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

/**
 * 星图 StarMap AI 品牌动效组件库
 * 基于 Framer Motion 构建，支持静态导出
 */

// ==================== 基础动效变体 ====================

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const slideDownVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// ==================== 页面过渡动效 ====================

const pageTransitionVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3 }
  }
};

// ==================== 组件 ====================

/**
 * 淡入动画容器
 */
export const FadeIn = ({ 
  children, 
  className = '',
  delay = 0 
}: { 
  children: ReactNode; 
  className?: string;
  delay?: number;
}) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={fadeInVariants}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

/**
 * 缩放进入动画容器
 */
export const ScaleIn = ({ 
  children, 
  className = '',
  delay = 0 
}: { 
  children: ReactNode; 
  className?: string;
  delay?: number;
}) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={scaleInVariants}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

/**
 * 向上滑动进入动画
 */
export const SlideUp = ({ 
  children, 
  className = '',
  delay = 0 
}: { 
  children: ReactNode; 
  className?: string;
  delay?: number;
}) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={slideUpVariants}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

/**
 * 向下滑动进入动画（用于导航栏等）
 */
export const SlideDown = ({ 
  children, 
  className = '',
  delay = 0 
}: { 
  children: ReactNode; 
  className?: string;
  delay?: number;
}) => (
  <motion.div
    className={className}
    initial="hidden"
    animate="visible"
    variants={slideDownVariants}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

/**
 * 悬停卡片效果 - 带阴影和缩放
 */
export const HoverCard = ({ 
  children, 
  className = '',
  scale = 1.02 
}: { 
  children: ReactNode; 
  className?: string;
  scale?: number;
}) => (
  <motion.div
    className={className}
    whileHover={{ 
      scale,
      y: -4,
      transition: { duration: 0.2, ease: "easeOut" }
    }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    {children}
  </motion.div>
);

/**
 * 按钮点击反馈效果
 */
export const ClickButton = ({ 
  children, 
  className = '', 
  onClick,
  scale = 0.95 
}: { 
  children: ReactNode; 
  className?: string; 
  onClick?: () => void;
  scale?: number;
}) => (
  <motion.button
    className={className}
    onClick={onClick}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    {children}
  </motion.button>
);

/**
 * 滚动揭示动画
 */
export const ScrollReveal = ({ 
  children, 
  className = '',
  direction = 'up'
}: { 
  children: ReactNode; 
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}) => {
  const directionVariants = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 }
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directionVariants[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

/**
 * 页面过渡容器
 */
export const PageTransition = ({ 
  children,
  className = ''
}: { 
  children: ReactNode;
  className?: string;
}) => (
  <motion.div
    className={className}
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageTransitionVariants}
  >
    {children}
  </motion.div>
);

/**
 * 加载旋转器 - 带渐变和脉动
 */
export const LoadingSpinner = ({ 
  size = 'medium',
  className = ''
}: { 
  size?: 'small' | 'medium' | 'large';
  className?: string;
}) => {
  const sizeMap = {
    small: 'w-6 h-6',
    medium: 'w-10 h-10',
    large: 'w-16 h-16'
  };

  return (
    <motion.div
      className={`${sizeMap[size]} ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    >
      <div className="w-full h-full rounded-full border-2 border-purple-200 border-t-purple-500" />
    </motion.div>
  );
};

/**
 * 脉动背景效果
 */
export const PulseBackground = ({ 
  className = '',
  colors = ['from-blue-400/10', 'from-purple-400/10', 'from-pink-400/10']
}: { 
  className?: string;
  colors?: string[];
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, [controls]);

  return (
    <motion.div
      className={`absolute inset-0 bg-gradient-to-br ${colors[0]} rounded-full blur-3xl ${className}`}
      animate={controls}
    />
  );
};

/**
 * 交错容器 - 用于列表项依次进入
 */
export const StaggerContainer = ({ 
  children, 
  className = '',
  delay = 0.2,
  staggerInterval = 0.1
}: { 
  children: ReactNode; 
  className?: string;
  delay?: number;
  staggerInterval?: number;
}) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={staggerContainerVariants}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

/**
 * 交错项目 - 与 StaggerContainer 配合使用
 */
export const StaggerItem = ({ 
  children, 
  className = ''
}: { 
  children: ReactNode; 
  className?: string;
}) => (
  <motion.div
    className={className}
    variants={staggerItemVariants}
  >
    {children}
  </motion.div>
);

/**
 * 数字计数动画 - 简化版本
 */
export const CountUp = ({ 
  value, 
  className = '',
  duration = 2,
  suffix = ''
}: { 
  value: number; 
  className?: string;
  duration?: number;
  suffix?: string;
}) => {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration, ease: "easeOut" }}
    >
      {value}{suffix}
    </motion.span>
  );
};

/**
 * 文本逐字显现动画
 */
export const TextReveal = ({ 
  text, 
  className = '',
  delay = 0
}: { 
  text: string; 
  className?: string;
  delay?: number;
}) => {
  const letters = text.split('');
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay
      }
    }
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

/**
 * 光晕扫过效果 - 用于卡片高亮
 */
export const ShineEffect = ({ 
  children, 
  className = ''
}: { 
  children: ReactNode; 
  className?: string;
}) => (
  <motion.div
    className={`relative overflow-hidden ${className}`}
    whileHover="hover"
  >
    {children}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      initial={{ x: '-100%' }}
      whileHover={{ x: '100%' }}
      transition={{ duration: 0.6 }}
    />
  </motion.div>
);
