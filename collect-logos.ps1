# Logo 收集脚本
# 使用 Clearbit Logo API 批量获取工具 Logo

$tools = Get-Content "C:\Users\GOOD PRO\.openclaw\workspace\ai-tools-nav\tools-list.json" | ConvertFrom-Json

$results = @()

foreach ($tool in $tools) {
    $name = $tool.name
    $url = $tool.url
    
    # 提取域名
    $domain = $url -replace 'https?://', '' -replace '/.*', ''
    
    # Clearbit Logo API
    $clearbitUrl = "https://logo.clearbit.com/$domain"
    
    $results += @{
        name = $name
        url = $url
        domain = $domain
        clearbitLogo = $clearbitUrl
    }
}

# 保存结果
$results | ConvertTo-Json -Depth 1 | Out-File "C:\Users\GOOD PRO\.openclaw\workspace\ai-tools-nav\logo-results.json" -Encoding utf8

Write-Host "Generated $($results.Count) logo URLs"
