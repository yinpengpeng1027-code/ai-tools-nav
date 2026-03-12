# -*- coding: utf-8 -*-
import re

# 读取文件
with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 查找并替换
old_text = '<button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/30 hover:opacity-90 transition-opacity">\n              🔔 抢先体验\n            </button>'

new_text = '''<button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/30 hover:opacity-90 transition-opacity">
              🔔 抢先体验
            </button>
            <Link 
              href="/openclaw" 
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold text-lg shadow-lg shadow-orange-500/30 hover:opacity-90 transition-opacity"
            >
              🦞 免费部署 OpenClaw
            </Link>'''

if old_text in content:
    content = content.replace(old_text, new_text)
    with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print('✅ 成功添加"🦞 免费部署 OpenClaw"按钮！')
else:
    print('❌ 未找到目标文本，手动检查文件内容')
    # 打印包含"抢先体验"的部分
    lines = content.split('\n')
    for i, line in enumerate(lines):
        if '抢先体验' in line:
            print(f'Line {i}: {line}')
