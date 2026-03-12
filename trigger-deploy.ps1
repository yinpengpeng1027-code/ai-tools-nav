$env:CLOUDFLARE_API_TOKEN = "Duj21D0i9oj7WRqCNmNNmlrBaCroOxbZn7M7KI4k"
$accountId = "cf7bca4a99313f93ff8ea908e47d24e5"
$projectName = "ai-tools-nav"

# 创建新的部署
$body = @{
    branch = "main"
} | ConvertTo-Json -Compress

$headers = @{
    "Authorization" = "Bearer $env:CLOUDFLARE_API_TOKEN"
    "Content-Type" = "application/json"
}

try {
    $result = Invoke-RestMethod -Method POST -Uri "https://api.cloudflare.com/client/v4/accounts/$accountId/pages/projects/$projectName/deployments" -Headers $headers -Body $body
    Write-Host "✅ 部署触发成功！"
    Write-Host "部署 ID: $($result.result.id)"
    Write-Host "部署 URL: $($result.result.url)"
} catch {
    Write-Host "❌ 部署失败：$($_.Exception.Message)"
    Write-Host "错误详情：$($_.ErrorDetails.Message)"
}
