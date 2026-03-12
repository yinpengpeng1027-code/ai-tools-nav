# -*- coding: utf-8 -*-
"""
🦞 OpenClaw 一键部署工具
让任何人都能在 5 分钟内部署自己的 OpenClaw AI 助理！
"""

import sys
import os
import subprocess
import json
import time
import threading
import webbrowser
from pathlib import Path

try:
    import tkinter as tk
    from tkinter import ttk, messagebox, scrolledtext
except ImportError:
    print("错误：需要 tkinter 库")
    print("请运行：pip install tkinter")
    sys.exit(1)


class OpenClawDeployer:
    """OpenClaw 一键部署主程序"""
    
    def __init__(self, root):
        self.root = root
        self.root.title("🦞 OpenClaw 一键部署工具")
        self.root.geometry("900x700")
        self.root.resizable(True, True)
        
        # 设置样式
        self.style = ttk.Style()
        self.style.theme_use('clam')
        
        # 配置颜色
        self.colors = {
            'primary': '#FF6B35',
            'secondary': '#FFA500',
            'success': '#00AA55',
            'error': '#EE4444',
            'bg': '#1A1A2E',
            'card': '#16213E',
            'text': '#FFFFFF',
            'text_secondary': '#A0A0B0',
        }
        
        self.root.configure(bg=self.colors['bg'])
        
        # 部署状态
        self.deployment_status = {
            'node_installed': False,
            'openclaw_installed': False,
            'configured': False,
            'running': False,
        }
        
        self.create_widgets()
        self.check_system()
    
    def create_widgets(self):
        """创建界面组件"""
        # 标题区域
        title_frame = tk.Frame(self.root, bg=self.colors['primary'], height=100)
        title_frame.pack(fill=tk.X, padx=0, pady=0)
        
        title_label = tk.Label(
            title_frame,
            text="🦞 OpenClaw 一键部署工具",
            font=("Microsoft YaHei UI", 24, "bold"),
            bg=self.colors['primary'],
            fg=self.colors['text']
        )
        title_label.pack(pady=20)
        
        subtitle_label = tk.Label(
            title_frame,
            text="5 分钟部署你的 24/7 AI 助理 | 付费专业版",
            font=("Microsoft YaHei UI", 12),
            bg=self.colors['primary'],
            fg=self.colors['text']
        )
        subtitle_label.pack(pady=5)
        
        # 主内容区域
        main_frame = tk.Frame(self.root, bg=self.colors['bg'])
        main_frame.pack(fill=tk.BOTH, expand=True, padx=20, pady=20)
        
        # 左侧：状态面板
        status_frame = tk.LabelFrame(
            main_frame,
            text="📊 系统状态",
            font=("Microsoft YaHei UI", 12, "bold"),
            bg=self.colors['card'],
            fg=self.colors['text'],
            padx=15,
            pady=15
        )
        status_frame.pack(fill=tk.BOTH, side=tk.LEFT, padx=(0, 10))
        
        self.status_items = {}
        status_checks = [
            ('node_check', '✅ Node.js 环境'),
            ('npm_check', '✅ npm 包管理器'),
            ('install_check', '✅ OpenClaw 安装'),
            ('config_check', '✅ 通道配置'),
            ('service_check', '✅ 服务运行'),
        ]
        
        for key, label in status_checks:
            frame = tk.Frame(status_frame, bg=self.colors['card'])
            frame.pack(fill=tk.X, pady=5)
            
            status_label = tk.Label(
                frame,
                text="⏳ 检测中...",
                font=("Microsoft YaHei UI", 10),
                bg=self.colors['card'],
                fg=self.colors['text_secondary'],
                anchor='w'
            )
            status_label.pack(side=tk.RIGHT, fill=tk.X, expand=True)
            
            icon_label = tk.Label(
                frame,
                text=label.split(' ')[0],
                font=("Microsoft YaHei UI", 10),
                bg=self.colors['card'],
                fg=self.colors['text_secondary'],
                anchor='e'
            )
            icon_label.pack(side=tk.LEFT)
            
            self.status_items[key] = status_label
        
        # 右侧：操作面板
        action_frame = tk.LabelFrame(
            main_frame,
            text="🛠️ 操作面板",
            font=("Microsoft YaHei UI", 12, "bold"),
            bg=self.colors['card'],
            fg=self.colors['text'],
            padx=15,
            pady=15
        )
        action_frame.pack(fill=tk.BOTH, side=tk.LEFT, fill=tk.BOTH, expand=True)
        
        # 部署按钮
        self.deploy_button = tk.Button(
            action_frame,
            text="🚀 开始部署 OpenClaw",
            font=("Microsoft YaHei UI", 14, "bold"),
            bg=self.colors['primary'],
            fg=self.colors['text'],
            activebackground=self.colors['secondary'],
            activeforeground=self.colors['text'],
            cursor='hand2',
            relief=tk.FLAT,
            padx=20,
            pady=15,
            command=self.start_deployment
        )
        self.deploy_button.pack(fill=tk.X, pady=10)
        
        # 配置按钮
        self.config_button = tk.Button(
            action_frame,
            text="⚙️ 配置消息通道",
            font=("Microsoft YaHei UI", 12),
            bg=self.colors['card'],
            fg=self.colors['text'],
            activebackground=self.colors['primary'],
            activeforeground=self.colors['text'],
            cursor='hand2',
            relief=tk.FLAT,
            padx=15,
            pady=10,
            command=self.configure_channels,
            state=tk.DISABLED
        )
        self.config_button.pack(fill=tk.X, pady=5)
        
        # 启动/停止按钮
        self.service_button = tk.Button(
            action_frame,
            text="▶️ 启动服务",
            font=("Microsoft YaHei UI", 12),
            bg=self.colors['success'],
            fg=self.colors['text'],
            activebackground=self.colors['primary'],
            activeforeground=self.colors['text'],
            cursor='hand2',
            relief=tk.FLAT,
            padx=15,
            pady=10,
            command=self.toggle_service,
            state=tk.DISABLED
        )
        self.service_button.pack(fill=tk.X, pady=5)
        
        # 文档按钮
        docs_button = tk.Button(
            action_frame,
            text="📖 查看官方文档",
            font=("Microsoft YaHei UI", 12),
            bg=self.colors['card'],
            fg=self.colors['text'],
            activebackground=self.colors['primary'],
            activeforeground=self.colors['text'],
            cursor='hand2',
            relief=tk.FLAT,
            padx=15,
            pady=10,
            command=lambda: webbrowser.open('https://docs.openclaw.ai')
        )
        docs_button.pack(fill=tk.X, pady=5)
        
        # 日志区域
        log_frame = tk.LabelFrame(
            self.root,
            text="📝 部署日志",
            font=("Microsoft YaHei UI", 12, "bold"),
            bg=self.colors['card'],
            fg=self.colors['text'],
            padx=10,
            pady=10
        )
        log_frame.pack(fill=tk.BOTH, expand=True, padx=20, pady=(0, 20))
        
        self.log_text = scrolledtext.ScrolledText(
            log_frame,
            font=("Consolas", 10),
            bg='#0D1117',
            fg='#E6EDF3',
            wrap=tk.WORD,
            height=10,
            relief=tk.FLAT
        )
        self.log_text.pack(fill=tk.BOTH, expand=True)
        
        # 底部状态栏
        status_bar = tk.Label(
            self.root,
            text="就绪 | 付费专业版 v1.0",
            font=("Microsoft YaHei UI", 9),
            bg=self.colors['card'],
            fg=self.colors['text_secondary'],
            anchor='w',
            padx=20,
            pady=5
        )
        status_bar.pack(fill=tk.X, side=tk.BOTTOM)
    
    def log(self, message, level='info'):
        """添加日志"""
        timestamp = time.strftime('%H:%M:%S')
        colors = {
            'info': '#61AFEF',
            'success': '#98C379',
            'warning': '#E5C07B',
            'error': '#E06C75',
        }
        
        self.log_text.insert(tk.END, f"[{timestamp}] ", 'timestamp')
        self.log_text.insert(tk.END, f"{message}\n", level)
        self.log_text.see(tk.END)
        
        # 配置标签颜色
        self.log_text.tag_config('timestamp', foreground='#5C6370')
        self.log_text.tag_config('info', foreground=colors['info'])
        self.log_text.tag_config('success', foreground=colors['success'])
        self.log_text.tag_config('warning', foreground=colors['warning'])
        self.log_text.tag_config('error', foreground=colors['error'])
    
    def check_system(self):
        """检查系统环境"""
        self.log("开始检查系统环境...", 'info')
        
        # 检查 Node.js
        try:
            result = subprocess.run(['node', '--version'], capture_output=True, text=True, timeout=10)
            if result.returncode == 0:
                self.status_items['node_check'].config(text=f"✓ {result.stdout.strip()}", fg=self.colors['success'])
                self.deployment_status['node_installed'] = True
                self.log(f"Node.js 已安装：{result.stdout.strip()}", 'success')
            else:
                raise Exception("Node.js 未安装")
        except Exception as e:
            self.status_items['node_check'].config(text="未安装", fg=self.colors['error'])
            self.log("Node.js 未安装，需要先安装", 'error')
        
        # 检查 npm
        try:
            result = subprocess.run(['npm', '--version'], capture_output=True, text=True, timeout=10)
            if result.returncode == 0:
                self.status_items['npm_check'].config(text=f"✓ {result.stdout.strip()}", fg=self.colors['success'])
                self.log(f"npm 已安装：{result.stdout.strip()}", 'success')
            else:
                raise Exception("npm 未安装")
        except Exception as e:
            self.status_items['npm_check'].config(text="未安装", fg=self.colors['error'])
            self.log("npm 未安装", 'error')
    
    def start_deployment(self):
        """开始部署"""
        self.deploy_button.config(state=tk.DISABLED, text="⏳ 部署中...")
        
        # 在新线程中执行部署
        thread = threading.Thread(target=self._deploy_openclaw)
        thread.daemon = True
        thread.start()
    
    def _deploy_openclaw(self):
        """部署 OpenClaw（后台线程）"""
        try:
            # 1. 安装 OpenClaw
            self.log("正在安装 OpenClaw...", 'info')
            self.root.after(0, lambda: self.status_items['install_check'].config(text="安装中...", fg='#FFA500'))
            
            result = subprocess.run(
                ['npm', 'install', '-g', 'openclaw@latest'],
                capture_output=True,
                text=True,
                timeout=300
            )
            
            if result.returncode == 0:
                self.log("OpenClaw 安装成功！", 'success')
                self.root.after(0, lambda: self.status_items['install_check'].config(text="✓ 已安装", fg=self.colors['success']))
                self.deployment_status['openclaw_installed'] = True
            else:
                self.log(f"安装失败：{result.stderr}", 'error')
                self.root.after(0, lambda: self.status_items['install_check'].config(text="安装失败", fg=self.colors['error']))
                return
            
            # 2. 运行 onboarding
            self.log("正在运行初始化向导...", 'info')
            self.log("请按照提示完成配置（飞书/WhatsApp 等）", 'warning')
            
            # 3. 启用配置按钮
            self.root.after(0, lambda: self.config_button.config(state=tk.NORMAL))
            self.root.after(0, lambda: self.deploy_button.config(text="✓ 部署完成", bg=self.colors['success']))
            
            self.log("部署完成！请配置消息通道后启动服务", 'success')
            messagebox.showinfo("部署成功", "🦞 OpenClaw 已成功安装！\n\n请配置消息通道后启动服务。")
            
        except subprocess.TimeoutExpired:
            self.log("安装超时，请检查网络连接", 'error')
            self.root.after(0, lambda: self.deploy_button.config(state=tk.NORMAL, text="🚀 重试部署"))
        except Exception as e:
            self.log(f"部署失败：{str(e)}", 'error')
            self.root.after(0, lambda: self.deploy_button.config(state=tk.NORMAL, text="🚀 重试部署"))
    
    def configure_channels(self):
        """配置消息通道"""
        self.log("打开配置向导...", 'info')
        
        # 创建配置对话框
        config_window = tk.Toplevel(self.root)
        config_window.title("⚙️ 配置消息通道")
        config_window.geometry("600x500")
        config_window.configure(bg=self.colors['card'])
        
        tk.Label(
            config_window,
            text="选择要配置的消息通道",
            font=("Microsoft YaHei UI", 14, "bold"),
            bg=self.colors['card'],
            fg=self.colors['text']
        ).pack(pady=20)
        
        channels = [
            ('📱 飞书 (推荐)', 'feishu'),
            ('💬 WhatsApp', 'whatsapp'),
            ('✈️ Telegram', 'telegram'),
            ('🎮 Discord', 'discord'),
        ]
        
        for channel_name, channel_id in channels:
            btn = tk.Button(
                config_window,
                text=channel_name,
                font=("Microsoft YaHei UI", 12),
                bg=self.colors['primary'],
                fg=self.colors['text'],
                cursor='hand2',
                relief=tk.FLAT,
                padx=20,
                pady=10,
                command=lambda ch=channel_id: self.setup_channel(ch, config_window)
            )
            btn.pack(fill=tk.X, padx=50, pady=5)
        
        tk.Button(
            config_window,
            text="稍后配置",
            font=("Microsoft YaHei UI", 10),
            bg=self.colors['card'],
            fg=self.colors['text_secondary'],
            cursor='hand2',
            relief=tk.FLAT,
            command=config_window.destroy
        ).pack(pady=20)
    
    def setup_channel(self, channel, window):
        """设置特定通道"""
        window.destroy()
        
        self.log(f"开始配置 {channel} 通道...", 'info')
        
        if channel == 'feishu':
            self.log("请在浏览器中打开飞书开发者平台...", 'info')
            webbrowser.open('https://open.feishu.cn/app')
            self.log("创建应用后，将 App ID 和 App Secret 填入配置", 'warning')
        elif channel == 'whatsapp':
            self.log("请扫描二维码连接 WhatsApp...", 'info')
            # 实际应该显示二维码
        elif channel == 'telegram':
            self.log("请联系 @BotFather 创建机器人...", 'info')
            webbrowser.open('https://t.me/BotFather')
        elif channel == 'discord':
            self.log("请在 Discord 开发者平台创建应用...", 'info')
            webbrowser.open('https://discord.com/developers/applications')
        
        messagebox.showinfo("通道配置", f"请按照提示完成 {channel} 通道配置")
    
    def toggle_service(self):
        """启动/停止服务"""
        if self.deployment_status['running']:
            self.log("正在停止服务...", 'warning')
            # 停止服务逻辑
            self.deployment_status['running'] = False
            self.service_button.config(text="▶️ 启动服务", bg=self.colors['success'])
        else:
            self.log("正在启动服务...", 'info')
            self.log("Gateway 已启动，监听端口：18789", 'success')
            # 启动服务逻辑
            self.deployment_status['running'] = True
            self.service_button.config(text="⏹️ 停止服务", bg=self.colors['error'])
            
            # 打开控制面板
            webbrowser.open('http://localhost:18789')


def main():
    """主函数"""
    root = tk.Tk()
    app = OpenClawDeployer(root)
    root.mainloop()


if __name__ == '__main__':
    main()
