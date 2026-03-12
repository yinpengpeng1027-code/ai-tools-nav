'use client';
import StepPage from "../StepPageTemplate";

export default function Step2Page() {
  return (
    <StepPage
      stepNumber={2}
      title="环境搭建"
      description="安装和配置 OpenClaw 环境"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">📋 准备工作</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          在开始之前，请确保你的计算机满足以下基本要求：
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h3 className="font-bold text-blue-900 mb-2">💻 系统要求</h3>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• Windows 10/11、macOS 10.15+ 或 Linux</li>
              <li>• 至少 4GB 内存（推荐 8GB+）</li>
              <li>• 5GB 可用磁盘空间</li>
              <li>• 稳定的网络连接</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-xl p-6 border border-green-100">
            <h3 className="font-bold text-green-900 mb-2">🔧 前置知识</h3>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• 基础命令行操作</li>
              <li>• 文本编辑器使用</li>
              <li>• 基础编程概念（可选）</li>
              <li>• 对 AI 技术的兴趣</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">🚀 第一步：安装 Node.js</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          OpenClaw 基于 Node.js 构建，因此首先需要安装 Node.js 运行环境。
        </p>

        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-6">
          <h3 className="font-bold text-slate-900 mb-4">Windows 系统安装步骤</h3>
          <ol className="space-y-4 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <span>访问 <a href="https://nodejs.org/" target="_blank" className="text-blue-600 hover:underline">Node.js 官网</a></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <span>下载 LTS（长期支持）版本，推荐 Node.js 18.x 或 20.x</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <span>运行下载的安装程序，按照向导完成安装</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <span>安装时勾选"自动安装必要工具"选项</span>
            </li>
          </ol>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <h3 className="font-bold text-white mb-4">✅ 验证安装</h3>
          <p className="text-slate-300 mb-3">打开命令行工具（Windows：PowerShell 或 CMD），输入以下命令：</p>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
            <code>node --version</code>
          </pre>
          <p className="text-slate-400 text-sm mt-2">应该显示类似 <code className="text-yellow-400">v18.17.0</code> 或 <code className="text-yellow-400">v20.5.0</code> 的版本号</p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">📦 第二步：安装 OpenClaw</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Node.js 安装完成后，就可以通过 npm 安装 OpenClaw 了。
        </p>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <h3 className="font-bold text-white mb-4">全局安装 OpenClaw</h3>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm mb-3">
            <code>npm install -g openclaw</code>
          </pre>
          <p className="text-slate-400 text-sm">
            💡 <strong>提示：</strong>如果遇到权限问题，在 macOS/Linux 上可能需要在命令前加 <code className="text-yellow-400">sudo</code>
          </p>
        </div>

        <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 mb-6">
          <h3 className="font-bold text-amber-900 mb-3">⏱️ 安装时间</h3>
          <p className="text-amber-700 text-sm">
            首次安装可能需要 2-5 分钟，取决于网络速度。安装过程中会下载所有依赖包，请耐心等待。
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">⚙️ 第三步：初始化配置</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          安装完成后，需要运行初始化向导来配置 OpenClaw。
        </p>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <h3 className="font-bold text-white mb-4">运行初始化向导</h3>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm mb-3">
            <code>openclaw init</code>
          </pre>
          <p className="text-slate-400 text-sm mb-4">
            这个命令会在工作目录创建配置文件和必要的文件夹结构。
          </p>
          
          <div className="border-t border-slate-700 pt-4 mt-4">
            <p className="text-slate-300 font-semibold mb-2">初始化后会创建以下文件：</p>
            <ul className="text-slate-400 text-sm space-y-2">
              <li>• <code className="text-yellow-400">openclaw.json</code> - 主配置文件</li>
              <li>• <code className="text-yellow-400">skills/</code> - 技能文件夹</li>
              <li>• <code className="text-yellow-400">memory/</code> - 记忆存储</li>
              <li>• <code className="text-yellow-400">.openclaw/</code> - 系统文件夹</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">🔑 第四步：配置 API 密钥</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          OpenClaw 需要连接大语言模型才能工作。配置你的 API 密钥：
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
            <div className="text-2xl mb-2">🌐</div>
            <h4 className="font-bold text-purple-900 mb-2">通义千问</h4>
            <p className="text-purple-700 text-sm mb-2">阿里云百炼平台</p>
            <a href="https://bailian.console.aliyun.com/" target="_blank" className="text-purple-600 text-sm hover:underline">获取密钥 →</a>
          </div>
          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
            <div className="text-2xl mb-2">🤖</div>
            <h4 className="font-bold text-blue-900 mb-2">OpenAI</h4>
            <p className="text-blue-700 text-sm mb-2">GPT-4/GPT-3.5</p>
            <a href="https://platform.openai.com/" target="_blank" className="text-blue-600 text-sm hover:underline">获取密钥 →</a>
          </div>
          <div className="bg-green-50 rounded-xl p-5 border border-green-100">
            <div className="text-2xl mb-2">🧠</div>
            <h4 className="font-bold text-green-900 mb-2">其他模型</h4>
            <p className="text-green-700 text-sm mb-2">Claude、Gemini 等</p>
            <span className="text-green-600 text-sm">查看文档</span>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <h3 className="font-bold text-white mb-4">编辑配置文件</h3>
          <p className="text-slate-300 mb-3">用文本编辑器打开 <code className="text-yellow-400">openclaw.json</code>，找到 models 部分：</p>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "models": {
    "default": "bailian/qwen3.5-plus",
    "bailian": {
      "apiKey": "你的_API_KEY_在这里"
    }
  }
}`}
          </pre>
          <p className="text-slate-400 text-sm mt-3">
            ⚠️ <strong>安全提示：</strong>不要将 API 密钥提交到 Git 仓库！
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">✅ 验证安装</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          完成所有配置后，运行以下命令验证 OpenClaw 是否正常工作：
        </p>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-6">
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
            <code>openclaw status</code>
          </pre>
        </div>

        <div className="bg-green-50 rounded-xl p-6 border border-green-200 mb-8">
          <h3 className="font-bold text-green-900 mb-3">✅ 成功标志</h3>
          <ul className="text-green-700 text-sm space-y-2">
            <li>• 显示 OpenClaw 版本号</li>
            <li>• 显示当前工作目录</li>
            <li>• 显示模型配置状态</li>
            <li>• 没有错误信息</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">❓ 常见问题</h2>
        
        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-2">Q: npm 命令找不到？</h4>
            <p className="text-slate-700 text-sm">
              A: 这表示 Node.js 未正确安装。请重新运行 Node.js 安装程序，并确保勾选"Add to PATH"选项。安装完成后重启命令行工具。
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-2">Q: 安装过程中出现权限错误？</h4>
            <p className="text-slate-700 text-sm">
              A: 在 macOS/Linux 上使用 <code className="text-blue-600">sudo npm install -g openclaw</code>。在 Windows 上，以管理员身份运行 PowerShell。
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-2">Q: 安装速度很慢或失败？</h4>
            <p className="text-slate-700 text-sm">
              A: 可能是网络问题。尝试使用国内镜像：<code className="text-blue-600">npm config set registry https://registry.npmmirror.com</code>，然后重新安装。
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-2">Q: openclaw 命令无法识别？</h4>
            <p className="text-slate-700 text-sm">
              A: 检查 npm 全局 bin 目录是否在系统 PATH 中。Windows 上通常是 <code className="text-blue-600">%APPDATA%\npm</code>。
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 mb-8">
          <h3 className="font-bold text-blue-900 mb-3">🎯 本步要点总结</h3>
          <ul className="text-blue-700 space-y-2">
            <li>✓ 安装 Node.js（推荐 LTS 版本）</li>
            <li>✓ 通过 npm 全局安装 OpenClaw</li>
            <li>✓ 运行 <code className="text-blue-600">openclaw init</code> 初始化</li>
            <li>✓ 配置大模型 API 密钥</li>
            <li>✓ 使用 <code className="text-blue-600">openclaw status</code> 验证</li>
          </ul>
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/openclaw/step3"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all hover:-translate-y-1"
          >
            开始第 3 步：基础配置 →
          </Link>
        </div>
      </div>
    </StepPage>
  );
}
