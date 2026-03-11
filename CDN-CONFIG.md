# CDN 缓存配置指南

## 📋 配置概览

本项目已配置完整的 CDN 缓存策略，确保内容及时更新同时最大化缓存命中率。

## ⚠️ 重要说明

由于使用 `output: 'export'` 静态导出模式，Next.js 的 `headers()` 配置不会自动生效。

**缓存控制通过以下三层实现：**
1. ✅ HTML Meta 标签（浏览器层）
2. ✅ CDN 控制台配置（CDN 层）
3. ✅ 构建后刷新脚本（自动化层）

## 🔧 各层配置详情

### 1. HTML Meta 标签（浏览器层）✅

在 `src/app/layout.tsx` 中已配置：

```tsx
<meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta httpEquiv="Pragma" content="no-cache" />
<meta httpEquiv="Expires" content="0" />
```

**作用：**
- 浏览器不缓存 HTML 页面
- 每次加载都向 CDN/服务器请求
- 兼容所有浏览器和代理

### 2. CDN 控制台配置（CDN 层）⚙️

**需要在 CDN 控制台手动配置以下规则：**

#### HTML 文件缓存规则
```
路径匹配：/ai-tools-nav/*.html
缓存策略：no-cache 或 max-age=0
回源验证：开启
```

#### 静态资源缓存规则
```
路径匹配：/ai-tools-nav/_next/static/*
缓存策略：max-age=31536000 (1 年)
immutable: 开启
```

#### Public 资源缓存规则
```
路径匹配：/ai-tools-nav/*.(svg|png|jpg|ico)
缓存策略：max-age=86400 (24 小时)
```

### 3. Public 资源缓存策略
```
Cache-Control: public, max-age=86400, s-maxage=86400
```
- public 目录资源缓存 24 小时
- 可通过查询参数 `?v=timestamp` 强制刷新

## 🏷️ Meta 标签控制

在 `src/app/layout.tsx` 中已添加：

```tsx
<meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta httpEquiv="Pragma" content="no-cache" />
<meta httpEquiv="Expires" content="0" />
```

这些标签确保：
- 浏览器不缓存 HTML 页面
- 每次加载都向服务器请求
- 兼容旧版浏览器和代理

## 📦 构建流程

### 标准构建
```bash
npm run build
```

### 构建 + CDN 缓存清理
```bash
npm run build:clean
```

此命令会：
1. 执行 Next.js 构建
2. 生成 `out/cdn-refresh-manifest.json`
3. 列出所有需要刷新的文件

## 🚀 CDN 刷新流程

### 方案 A：手动刷新（推荐）

1. 构建项目：`npm run build:clean`
2. 查看生成的 `out/cdn-refresh-manifest.json`
3. 在 CDN 控制台刷新以下路径：
   - `/ai-tools-nav/index.html`
   - `/ai-tools-nav/tools.html`
   - `/ai-tools-nav/categories.html`
   - 等所有 HTML 文件

### 方案 B：API 自动刷新

如果 CDN 支持 API，可在 `scripts/clear-cdn-cache.js` 中添加：

```javascript
// 示例：调用 CDN API
async function purgeCDN(paths) {
  const response = await fetch('https://cdn-api.example.com/purge', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.CDN_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ paths }),
  });
  return response.json();
}
```

## 📊 资源哈希验证

构建后的资源文件名包含内容哈希：

```
_next/static/chunks/
  ├── 04ee660498214c22.js        ✅ 哈希
  ├── 794a7350479b9646.css       ✅ 哈希
  └── 4fa387ec64143e14-s.woff2   ✅ 哈希
```

**验证方法：**
```bash
# 查看构建后的资源文件名
ls out/_next/static -R
```

如果内容变更，哈希会自动更新，CDN 会自动获取新版本。

## ⚠️ 常见问题

### Q: 更新代码后用户仍看到旧版本？
**A:** HTML 文件需要 CDN 刷新。执行：
```bash
npm run build:clean
# 然后在 CDN 控制台刷新 HTML 文件
```

### Q: 静态资源不更新？
**A:** 检查文件名哈希是否变化。如果没变化，清理浏览器缓存或强制刷新。

### Q: 如何测试缓存配置？
**A:** 使用 curl 检查响应头：
```bash
curl -I https://your-cdn.com/ai-tools-nav/index.html
# 应看到：Cache-Control: public, max-age=0, must-revalidate

curl -I https://your-cdn.com/ai-tools-nav/_next/static/xxx.js
# 应看到：Cache-Control: public, max-age=31536000, immutable
```

## 📞 工部尚书联系方式

如有 CDN 配置问题，请联系工部尚书协助处理。

---

**最后更新**: 2026-03-11  
**版本**: v0.1.0
