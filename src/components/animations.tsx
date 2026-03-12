'use client';

import { ReactNode } from 'react';

/**
 * 性能终极优化：空壳组件
 * 移除所有动画，极致性能
 */

export const FadeIn = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={className}>{children}</div>
);

export const ScaleIn = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={className}>{children}</div>
);

export const HoverCard = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={className}>{children}</div>
);

export const ClickButton = ({ children, className = '', onClick }: { children: ReactNode; className?: string; onClick?: () => void }) => (
  <button className={className} onClick={onClick}>{children}</button>
);

export const ScrollReveal = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={className}>{children}</div>
);

export const PageTransition = ({ children }: { children: ReactNode }) => (
  <div>{children}</div>
);

export const LoadingSpinner = () => (
  <div className="w-8 h-8 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full" />
);

export const PulseBackground = ({ className = '' }: { className?: string }) => (
  <div className={className} />
);

export const StaggerContainer = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={className}>{children}</div>
);

export const StaggerItem = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={className}>{children}</div>
);
