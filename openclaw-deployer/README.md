# OpenClaw 一键部署工具

🦞 让任何人都能在 5 分钟内部署自己的 OpenClaw AI 助理！

## 功能特性

- ✅ 自动检测系统环境（Node.js、npm）
- ✅ 一键安装 OpenClaw
- ✅ 自动配置飞书/WhatsApp/Telegram 通道
- ✅ 可视化配置界面
- ✅ 自动启动 Gateway 服务
- ✅ 开机自启动配置

## 使用方式

### 方式一：直接运行（推荐）

```bash
python openclaw-deployer.py
```

### 方式二：打包为 EXE

```bash
# 安装 pyinstaller
pip install pyinstaller

# 打包为单个 exe 文件
pyinstaller --onefile --windowed --icon=logo.ico --name="OpenClaw 一键部署" openclaw-deployer.py

# exe 文件位置：dist/OpenClaw 一键部署.exe
```

## 付费版本功能

- 🎯 自动环境检测与修复
- 🎯 可视化配置向导
- 🎯 多通道配置（飞书、WhatsApp、Telegram、Discord）
- 🎯 一键启动/停止服务
- 🎯 开机自启动
- 🎯 自动更新检查
- 🎯 专业技术支持

## 系统要求

- Windows 10/11
- 管理员权限
- 网络连接
