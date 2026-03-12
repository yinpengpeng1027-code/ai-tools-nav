'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClickButton } from './animations';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  showSearchButton?: boolean;
  showFilters?: boolean;
  initialValue?: string;
}

const RECENT_SEARCHES_KEY = 'starmap_recent_searches';

export default function SearchBar({
  placeholder = '搜索 AI 工具、教程、资源...',
  onSearch,
  className = '',
  size = 'large',
  showSearchButton = true,
  showFilters = false,
  initialValue = ''
}: SearchBarProps) {
  const [query, setQuery] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [showRecent, setShowRecent] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 加载最近搜索
  useEffect(() => {
    const stored = localStorage.getItem(RECENT_SEARCHES_KEY);
    if (stored) {
      try {
        setRecentSearches(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse recent searches');
      }
    }
  }, []);

  // 点击外部关闭最近搜索
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowRecent(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = () => {
    if (query.trim()) {
      // 保存到最近搜索
      const updated = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
      setRecentSearches(updated);
      localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
      
      onSearch?.(query);
      setShowRecent(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClear = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  const handleRecentClick = (search: string) => {
    setQuery(search);
    onSearch?.(search);
    setShowRecent(false);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem(RECENT_SEARCHES_KEY);
  };

  const sizeClasses = {
    small: 'py-2 px-4 text-sm',
    medium: 'py-3 px-5 text-base',
    large: 'py-4 px-6 text-base'
  };

  const buttonSizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-5 py-3 text-sm',
    large: 'px-6 py-4 text-base'
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* 搜索输入容器 */}
      <motion.div
        className={`
          relative flex items-center
          bg-white border-2 rounded-2xl
          transition-all duration-300
          ${isFocused 
            ? 'border-blue-500 shadow-lg shadow-blue-500/20' 
            : 'border-slate-200 shadow-md'
          }
        `}
        animate={{
          scale: isFocused ? 1.02 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {/* 搜索图标 */}
        <motion.div
          className="pl-4 pr-2"
          animate={{ rotate: isFocused ? 360 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            className="w-5 h-5 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </motion.div>

        {/* 输入框 */}
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            setIsFocused(true);
            if (recentSearches.length > 0) setShowRecent(true);
          }}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={`
            flex-1 bg-transparent outline-none text-slate-900 placeholder-slate-400
            ${sizeClasses[size]}
            w-full
          `}
        />

        {/* 清除按钮 */}
        <AnimatePresence>
          {query && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={handleClear}
              className="mr-2 p-1 hover:bg-slate-100 rounded-full transition-colors"
            >
              <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>

        {/* 搜索按钮 */}
        {showSearchButton && (
          <ClickButton
            onClick={handleSearch}
            className={`
              mr-2 bg-gradient-to-r from-blue-500 to-purple-500
              text-white rounded-xl font-medium
              hover:opacity-90 transition-opacity
              shadow-md
              ${buttonSizeClasses[size]}
            `}
          >
            搜索
          </ClickButton>
        )}
      </motion.div>

      {/* 最近搜索下拉 */}
      <AnimatePresence>
        {showRecent && recentSearches.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden z-50"
          >
            <div className="p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  最近搜索
                </span>
                <button
                  onClick={clearRecentSearches}
                  className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
                >
                  清空
                </button>
              </div>
              <div className="space-y-1">
                {recentSearches.map((search, index) => (
                  <motion.button
                    key={search}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleRecentClick(search)}
                    className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-slate-50 rounded-lg transition-colors group"
                  >
                    <svg
                      className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm text-slate-700">{search}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 快捷搜索标签 */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 flex flex-wrap gap-2"
        >
          {['免费', '中文', 'Web', 'AI 绘画', '聊天机器人'].map((tag) => (
            <ClickButton
              key={tag}
              onClick={() => {
                setQuery(tag);
                onSearch?.(tag);
              }}
              className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              {tag}
            </ClickButton>
          ))}
        </motion.div>
      )}
    </div>
  );
}
