'use client';

import { useState, useEffect } from 'react';

interface ToolLogoProps {
  domain: string;
  fallbackEmoji: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
}

export default function ToolLogo({ 
  domain, 
  fallbackEmoji, 
  size = 'medium', 
  className = '', 
  onClick 
}: ToolLogoProps) {
  const sizeClasses = {
    small: 'w-10 h-10 text-lg',
    medium: 'w-14 h-14 text-2xl',
    large: 'w-24 h-24 text-5xl',
  };

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const domainWithoutProtocol = domain.replace(/^https?:\/\//, '').replace(/\/$/, '');

  useEffect(() => {
    // 尝试从 Clearbit 获取 Logo
    const logoUrl = `https://logo.clearbit.com/${domainWithoutProtocol}`;
    setImageUrl(logoUrl);
    setIsLoading(true);
    setError(false);
  }, [domain]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setError(true);
  };

  return (
    <div 
      onClick={onClick}
      className={`
        ${sizeClasses[size]}
        rounded-2xl 
        bg-gradient-to-br 
        from-blue-500 
        to-purple-500 
        flex 
        items-center 
        justify-center 
        overflow-hidden 
        shadow-md
        cursor-pointer
        transition-all
        hover:shadow-lg
        hover:scale-105
        ${className}
      `}
      role="img"
      aria-label={`${domain} logo`}
    >
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="w-full h-full bg-slate-300 animate-pulse rounded-2xl" />
      )}

      {/* Logo Image */}
      {!error && !isLoading && imageUrl && (
        <img
          src={imageUrl}
          alt={`${domain} Logo`}
          className="w-full h-full object-contain p-2"
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="lazy"
        />
      )}

      {/* Fallback Emoji */}
      {(error || isLoading === false) && !imageUrl && (
        <span className="text-white select-none">{fallbackEmoji}</span>
      )}
    </div>
  );
}
