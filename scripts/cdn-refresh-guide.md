# CDN 刷新操作手册

## 🚨 紧急刷新流程

当代码更新后用户仍看到旧版本时，执行以下步骤：

### 步骤 1: 构建项目

```bash
cd C:\Users\GOOD PRO\.openclaw\workspace\ai-tools-nav
npm run build:clean
```

### 步骤 2: 查看刷新清单

构建完成后会生成 `out/cdn-refresh-manifest.json`：

```bash
cat out/cdn-refresh-manifest.json
```

示例内容：
```json
{
  "timestamp": "2026-03-11T08:30:00.000Z",
  "version": "0.1.0",
  "files": [
    "/index.html",
    "/tools.html",
    "/categories.html",
    "/about.html",
    ...
  ]
}
```

### 步骤 3: CDN 控制台刷新

根据不同 CDN 提供商，操作略有不同：

#### 阿里云 CDN
1. 登录阿里云 CDN 控制台
2. 进入「刷新预热」→「刷新缓存」
3. 选择「URL 刷新」
4. 输入路径（每行一个）：
   ```
   https://your-domain.com/ai-tools-nav/index.html
   https://your-domain.com/ai-tools-nav/tools.html
   ...
   ```
5. 点击「提交」

#### 腾讯云 CDN
1. 登录腾讯云 CDN 控制台
2. 进入「刷新缓存」
3. 选择「URL 刷新」
4. 输入需要刷新的 URL
5. 点击「提交」

#### Cloudflare
1. 登录 Cloudflare Dashboard
2. 进入「Caching」→「Configuration」
3. 点击「Purge Everything」或选择特定文件
4. 确认清除

### 步骤 4: 验证刷新

使用 curl 检查响应头：

```bash
# 检查 HTML 文件
curl -I https://your-domain.com/ai-tools-nav/index.html

# 应该看到类似：
# Cache-Control: no-cache, no-store, must-revalidate
# Last-Modified: [最新时间]
```

## 🔄 自动化刷新脚本

如果 CDN 支持 API，可以自动化刷新：

### 示例：调用 CDN API

编辑 `scripts/clear-cdn-cache.js`，在文件末尾添加：

```javascript
// 调用 CDN API 刷新
async function purgeCDN(paths) {
  const cdnApiKey = process.env.CDN_API_KEY;
  const cdnZoneId = process.env.CDN_ZONE_ID;
  
  const response = await fetch('https://api.cdn-provider.com/v1/zones/' + cdnZoneId + '/purge', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${cdnApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
      files: paths.map(p => 'https://your-domain.com/ai-tools-nav' + p)
    }),
  });
  
  const result = await response.json();
  console.log('CDN 刷新结果:', result);
}

// 在脚本最后调用
const pathsToPurge = manifest.files;
purgeCDN(pathsToPurge).catch(console.error);
```

### 设置环境变量

在项目根目录创建 `.env` 文件：

```bash
CDN_API_KEY=your_api_key_here
CDN_ZONE_ID=your_zone_id_here
```

## 📊 常见 CDN 配置

### 阿里云 CDN 配置建议

```
缓存配置：
├─ 文件类型：html
│  └─ 缓存时间：0 秒
├─ 文件类型：js,css
│  └─ 缓存时间：365 天
└─ 文件类型：woff2,woff,ttf
   └─ 缓存时间：365 天

回源配置：
├─ 回源 Host: your-domain.com
└─ 跟随 302/301: 开启
```

### Nginx 反向代理配置

如果使用 Nginx 作为反向代理：

```nginx
location /ai-tools-nav/ {
    # HTML 文件不缓存
    location ~* \.html$ {
        add_header Cache-Control "no-cache, no-store, must-revalidate";
        add_header Pragma "no-cache";
        add_header Expires "0";
    }
    
    # 静态资源长期缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|woff2)$ {
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
    
    proxy_pass http://your-cdn-origin;
}
```

## ⚠️ 注意事项

1. **刷新频率限制**: 大多数 CDN 有刷新次数限制（如阿里云每天 1000 次）
2. **刷新延迟**: 刷新通常需要 1-5 分钟生效
3. **批量刷新**: 尽量批量提交刷新请求，减少 API 调用次数
4. **测试环境**: 先在测试环境验证，再刷新生产环境

## 🆘 故障排查

### 问题 1: 刷新后仍看到旧版本

**可能原因：**
- 浏览器缓存未清除
- CDN 刷新未完全生效
- 本地 DNS 缓存

**解决方案：**
```bash
# 强制刷新浏览器缓存
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)

# 清除 DNS 缓存
ipconfig /flushdns (Windows)
sudo dscacheutil -flushcache (Mac)
```

### 问题 2: 静态资源 404

**可能原因：**
- 构建时资源文件名哈希变更
- CDN 未同步新资源

**解决方案：**
```bash
# 重新构建并上传所有资源
npm run build
# 检查 out/_next/static/ 目录
# 确保所有资源已上传到 CDN
```

### 问题 3: 刷新 API 失败

**检查项：**
- API Key 是否正确
- CDN Zone ID 是否正确
- 网络连接是否正常
- 刷新配额是否用完

## 📞 联系支持

如有问题，请联系工部尚书协助处理。

---

**最后更新**: 2026-03-11  
**维护**: 工部
