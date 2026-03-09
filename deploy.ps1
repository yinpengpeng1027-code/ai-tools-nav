# AI 工具导航站 - GitHub Pages 部署脚本
# 使用方式：.\deploy.ps1

$ErrorActionPreference = "Stop"

# GitHub CLI 路径
$GH = "C:\Program Files\GitHub CLI\gh.exe"

Write-Host "🚀 AI 工具导航站 - GitHub Pages 部署" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan

# 检查登录状态
Write-Host "`n📝 检查 GitHub 登录状态..." -ForegroundColor Yellow
$authStatus = & $GH auth status 2>&1

if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  未登录 GitHub，请先运行：" -ForegroundColor Yellow
    Write-Host "   gh auth login" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "或使用浏览器登录：" -ForegroundColor Yellow
    Write-Host "   gh auth login -w" -ForegroundColor Cyan
    exit 1
}

Write-Host "✅ GitHub 登录成功！" -ForegroundColor Green

# 获取用户名
$username = & $GH api user | ConvertFrom-Json | Select-Object -ExpandProperty login
Write-Host "👤 当前用户：$username" -ForegroundColor Cyan

# 仓库配置
$repoName = "ai-tools-nav"
$repoDesc = "国内最全面的 AI 工具发现与学习平台 - 对标 FuturePedia.io"

# 初始化 Git
Write-Host "`n📦 初始化 Git 仓库..." -ForegroundColor Yellow
if (-not (Test-Path ".git")) {
    git init
    git branch -M main
    Write-Host "✅ Git 仓库初始化完成" -ForegroundColor Green
} else {
    Write-Host "ℹ️  Git 仓库已存在" -ForegroundColor Gray
}

# 检查远程仓库
Write-Host "`n🔍 检查远程仓库..." -ForegroundColor Yellow
$remoteUrl = git remote get-url origin 2>$null

if (-not $remoteUrl) {
    Write-Host "📮 创建 GitHub 仓库..." -ForegroundColor Yellow
    & $GH repo create $repoName --public --description $repoDesc --source=. --remote=origin --push
    Write-Host "✅ 仓库创建成功！" -ForegroundColor Green
} else {
    Write-Host "ℹ️  远程仓库已配置：$remoteUrl" -ForegroundColor Gray
}

# 创建 .github/workflows 目录
Write-Host "`n⚙️  配置 GitHub Actions..." -ForegroundColor Yellow
New-Item -ItemType Directory -Force -Path ".github/workflows" | Out-Null

# 写入部署工作流
$workflow = @"
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_SITE_URL: https://$username.github.io/$repoName
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: `${{ steps.deployment.outputs.page_url }}`
    
    runs-on: ubuntu-latest
    needs: build
    
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
"@

Set-Content -Path ".github/workflows/deploy.yml" -Value $workflow -Encoding UTF8
Write-Host "✅ GitHub Actions 工作流已配置" -ForegroundColor Green

# 创建 .gitignore (如果不存在)
if (-not (Test-Path ".gitignore")) {
    $gitignore = @"
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
"@
    Set-Content -Path ".gitignore" -Value $gitignore -Encoding UTF8
    Write-Host "✅ .gitignore 已创建" -ForegroundColor Green
}

# 提交并推送
Write-Host "`n📤 提交并推送代码..." -ForegroundColor Yellow
git add .
git commit -m "feat: 初始版本 - AI 工具导航站" --allow-empty

# 检查是否有远程仓库
$hasRemote = git remote get-url origin 2>$null
if ($hasRemote) {
    git push -u origin main
    Write-Host "✅ 代码已推送到 GitHub！" -ForegroundColor Green
} else {
    Write-Host "⚠️  请先配置远程仓库" -ForegroundColor Yellow
}

# 配置 GitHub Pages
Write-Host "`n🌐 配置 GitHub Pages..." -ForegroundColor Yellow
Write-Host "⚠️  请手动启用 GitHub Pages：" -ForegroundColor Yellow
Write-Host "   1. 访问：https://github.com/$username/$repoName/settings/pages" -ForegroundColor Cyan
Write-Host "   2. 选择 Source: Deploy from a branch" -ForegroundColor Cyan
Write-Host "   3. 选择 Branch: gh-pages / Folder: / (root)" -ForegroundColor Cyan
Write-Host ""
Write-Host "或者等待 GitHub Actions 自动部署..." -ForegroundColor Gray

# 显示信息
Write-Host "`n=====================================" -ForegroundColor Cyan
Write-Host "🎉 部署完成！" -ForegroundColor Green
Write-Host ""
Write-Host "📦 仓库地址：https://github.com/$username/$repoName" -ForegroundColor Cyan
Write-Host "🌐 网站地址：https://$username.github.io/$repoName" -ForegroundColor Cyan
Write-Host ""
Write-Host "⏱️  GitHub Actions 部署通常需要 1-2 分钟" -ForegroundColor Yellow
Write-Host ""
Write-Host "📝 下一步：" -ForegroundColor Cyan
Write-Host "   1. 安装依赖：npm install" -ForegroundColor Gray
Write-Host "   2. 本地开发：npm run dev" -ForegroundColor Gray
Write-Host "   3. 构建生产版本：npm run build" -ForegroundColor Gray
