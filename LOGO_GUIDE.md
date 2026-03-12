# AI 工具导航站 - Logo 图标规范

## 概述

本项目采用双方案 Logo 替换策略：

1. **方案A：自动抓取官方 Logo** - 从各工具官网自动抓取 Logo 图标
2. **方案B：Clearbit Logo API** - 使用 Clearbit 提供的免费 Logo API

## Clearbit Logo API

**API 地址：** `https://logo.clearbit.com/{domain}`

**特点：**
- 免费使用，无需 API Key
- 支持主流网站 Logo
- 自动返回 PNG 格式（支持透明背景）
- 响应速度快

**使用示例：**

```typescript
// ChatGPT Logo
const chatgptLogo = "https://logo.clearbit.com/chatgpt.com";

// Midjourney Logo
const midjourneyLogo = "https://logo.clearbit.com/midjourney.com";

// 文心一言 Logo
constERNYiyanLogo = "https://logo.clearbit.com/yiyan.baidu.com";
```

## Logo 替换规则

### 1. 替换优先级

1. **官方 Logo** - 优先使用各工具官网的 Logo
2. **Clearbit Logo** - 如果官网 Logo 不存在，使用 Clearbit API
3. **Emoji 备用** - 如果以上都失败，使用 Emoji 表示

### 2. Logo 尺寸规范

| 使用场景 | 尺寸 | 说明 |
|---------|------|------|
| 工具列表缩略图 | 64x64px | 悬浮时放大至 80x80px |
| 详情页 Logo | 128x128px | 居中显示 |
| 分类页面 | 80x80px | 带圆角处理 |

### 3. Logo 加载优化

```typescript
// Logo 加载组件
export function ToolLogo({
  domain,
  fallbackEmoji,
  size = "medium",
  className,
}: {
  domain: string;
  fallbackEmoji: string;
  size?: "small" | "medium" | "large";
  className?: string;
}) {
  const sizeClasses = {
    small: "w-12 h-12",
    medium: "w-16 h-16",
    large: "w-24 h-24",
  };

  return (
    <div className={`${sizeClasses[size]} rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center overflow-hidden ${className}`}>
      <img
        src={`https://logo.clearbit.com/${domain}`}
        alt={`${domain} Logo`}
        className="w-full h-full object-contain"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
          // Fallback to emoji in parent component
        }}
        loading="lazy"
      />
      {/* Fallback will be handled by parent component */}
    </div>
  );
}
```

## 实施计划

### Phase 1: 创建 Logo 组件
- [ ] 创建 `Logo.tsx` 组件
- [ ] 实现 Clearbit API 调用
- [ ] 添加加载状态和错误处理

### Phase 2: 替换现有 Emoji
- [ ] 准备域名映射表
- [ ] 批量替换工具列表中的 Emoji
- [ ] 替换详情页中的 Emoji

### Phase 3: Logo 缓存
- [ ] 实现本地缓存机制
- [ ] 添加 CDN 加速
- [ ] 优化加载性能

## 域名映射表

```typescript
export const TOOL_DOMAINS: Record<number, string> = {
  1: "chatgpt.com",       // ChatGPT
  2: "midjourney.com",    // Midjourney
  3: "notion.so",         // Notion AI
  4: "runwayml.com",      // Runway
  5: "elevenlabs.io",     // ElevenLabs
  6: "jasper.ai",         // Jasper
  7: "yiyan.baidu.com",   // 文心一言
  8: "tongyi.aliyun.com", // 通义千问
  9: "stability.ai",      // Stable Diffusion
  10: "canva.com",        // Canva AI
  // ... 更多
};
```

## 注意事项

1. **API 限制** - Clearbit 免费版有请求频率限制，建议添加缓存
2. **跨域问题** - 确保服务器配置 CORS 允许 Clearbit 域名
3. **加载失败** - 必须提供 Emoji 降级方案
4. **版权说明** - 使用的 Logo 仅用于分类展示，不用于商业用途

## 相关文件

- `/src/components/Logo.tsx` - Logo 组件
- `/src/components/ToolCard.tsx` - 工具卡片组件
- `/src/components/ToolDetail.tsx` - 工具详情组件
- `/src/data/tools-data.ts` - 工具数据（域名映射）

## 参考链接

- [Clearbit Logo API 文档](https://clearbit.com/logo)
- [FuturePedia Logo 实现](https://futurepedia.io/)
- [AI Tool Directory](https://aitooldirectory.com/)
