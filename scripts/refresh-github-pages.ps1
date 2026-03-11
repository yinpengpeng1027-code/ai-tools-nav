# GitHub Pages CDN 快速刷新脚本
# 使用方法：.\scripts\refresh-github-pages.ps1

Write-Host "🔄 开始刷新 GitHub Pages CDN 缓存..." -ForegroundColor Cyan

# 读取刷新清单
$manifestPath = "out\cdn-refresh-manifest.json"
if (Test-Path $manifestPath) {
    $manifest = Get-Content $manifestPath -Raw | ConvertFrom-Json
    
    Write-Host "`n📋 构建信息:" -ForegroundColor Yellow
    Write-Host "   时间：$($manifest.timestamp)"
    Write-Host "   版本：$($manifest.version)"
    Write-Host "   文件数：$($manifest.files.Count)"
    
    # GitHub Pages/jsDelivr 刷新
    Write-Host "`n🌐 GitHub Pages 刷新方式:" -ForegroundColor Green
    
    Write-Host "`n 方式 1: jsDelivr CDN 刷新（推荐）" -ForegroundColor White
    Write-Host "   访问：https://purge.jsdelivr.net/gh/yinpengpeng1027-code/ai-tools-nav@main/" -ForegroundColor Gray
    
    Write-Host "`n 方式 2: GitHub Actions 自动刷新" -ForegroundColor White
    Write-Host "   如果配置了 GitHub Actions，推送后会自动刷新" -ForegroundColor Gray
    
    Write-Host "`n 方式 3: 浏览器强制刷新" -ForegroundColor White
    Write-Host "   Windows: Ctrl + Shift + R" -ForegroundColor Gray
    Write-Host "   Mac: Cmd + Shift + R" -ForegroundColor Gray
    
    Write-Host "`n📄 需要刷新的文件列表:" -ForegroundColor Yellow
    $manifest.files | ForEach-Object {
        Write-Host "   - $_" -ForegroundColor Gray
    }
    
    Write-Host "`n✅ 刷新清单已准备就绪！" -ForegroundColor Green
} else {
    Write-Host "❌ 错误：未找到刷新清单文件 $manifestPath" -ForegroundColor Red
    Write-Host "   请先运行：npm run build:clean" -ForegroundColor Yellow
}

Write-Host ""
