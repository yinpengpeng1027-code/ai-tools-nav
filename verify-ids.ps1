# AI Tools Nav - ID Verification Script
# 验证所有工具 ID 的唯一性和正确性

$ErrorActionPreference = "Stop"
Set-Location "$PSScriptRoot\src\data"

Write-Host "=== AI Tools Nav ID Verification ===" -ForegroundColor Cyan
Write-Host ""

# 收集所有 ID
$allIds = @()
$toolNames = @{}

Get-ChildItem -Filter "category-*.ts" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $matches = [regex]::Matches($content, 'id:\s*(\d+),')
    foreach ($m in $matches) {
        $idVal = $m.Groups[1].Value
        if ($idVal -ne 'number') {
            $id = [int]$idVal
            $allIds += $id
            # 提取工具名称
            $nameMatch = [regex]::Match($content, "(?<=id:\s*$idVal,\s*name:\s*`")([^`"]+)(?=`")")
            if ($nameMatch.Success) {
                $toolNames[$id] = $nameMatch.Value
            }
        }
    }
}

$sortedIds = $allIds | Sort-Object

Write-Host "Total tools found: $($allIds.Count)" -ForegroundColor Yellow

# 检查重复
Write-Host "`n=== Duplicate Check ===" -ForegroundColor Cyan
$duplicates = $allIds | Group-Object | Where-Object { $_.Count -gt 1 }
if ($duplicates) {
    Write-Host "DUPLICATE IDs FOUND!" -ForegroundColor Red
    $duplicates | ForEach-Object {
        Write-Host "  ID $($_.Name) appears $($_.Count) times" -ForegroundColor Red
    }
} else {
    Write-Host "No duplicate IDs - PASS" -ForegroundColor Green
}

# ID 范围
Write-Host "`n=== ID Range ===" -ForegroundColor Cyan
Write-Host "Minimum ID: $($sortedIds[0])" -ForegroundColor Yellow
Write-Host "Maximum ID: $($sortedIds[-1])" -ForegroundColor Yellow

# 关键 ID 检查
Write-Host "`n=== Critical ID Check ===" -ForegroundColor Cyan
$criticalIds = @(1, 101, 201, 301, 401, 501, 601, 701, 801, 901, 1001)
$missingCritical = @()
foreach ($cid in $criticalIds) {
    if ($allIds -contains $cid) {
        Write-Host "ID $cid : FOUND ($($toolNames[$cid]))" -ForegroundColor Green
    } else {
        Write-Host "ID $cid : NOT FOUND" -ForegroundColor Red
        $missingCritical += $cid
    }
}

# 分类 ID 范围检查
Write-Host "`n=== Category ID Range Check ===" -ForegroundColor Cyan
$categories = @{
    "文本生成" = @(1..100)
    "图像设计" = @(101..200)
    "视频制作" = @(201..300)
    "音频处理" = @(301..400)
    "办公效率" = @(401..500)
    "数据分析" = @(501..600)
    "对话机器人" = @(601..700)
    "社交媒体" = @(701..800)
    "开发工具" = @(801..900)
    "学习教育" = @(901..1000)
}

foreach ($cat in $categories.Keys) {
    $range = $categories[$cat]
    $catIds = $allIds | Where-Object { $_ -ge $range[0] -and $_ -le $range[-1] }
    Write-Host "$cat ($($range[0])-$($range[-1])): $($catIds.Count) tools" -ForegroundColor $(if ($catIds.Count -gt 0) { "Green" } else { "Yellow" })
}

# 输出摘要
Write-Host "`n=== Summary ===" -ForegroundColor Cyan
if ($duplicates -or $missingCritical) {
    Write-Host "VERIFICATION FAILED" -ForegroundColor Red
    if ($duplicates) { Write-Host "  - Duplicate IDs exist" -ForegroundColor Red }
    if ($missingCritical) { Write-Host "  - Missing critical IDs: $($missingCritical -join ', ')" -ForegroundColor Red }
    exit 1
} else {
    Write-Host "VERIFICATION PASSED" -ForegroundColor Green
    exit 0
}
