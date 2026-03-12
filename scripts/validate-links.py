import re
import os

# 已知正确的工具官网映射
EXPECTED_DOMAINS = {
    # 对话助手
    "ChatGPT": "chatgpt.com",
    "Claude": "claude.ai",
    "文心一言": "yiyan.baidu.com",
    "通义千问": "tongyi.aliyun.com",
    "Kimi": "kimi.moonshot.cn",
    "智谱清言": "chatglm.cn",
    "讯飞星火": "xinghuo.xfyun.cn",
    "Perplexity": "perplexity.ai",
    
    # 营销文案
    "Jasper": "jasper.ai",
    "Copy.ai": "copy.ai",
    "Writesonic": "writesonic.com",
    "Rytr": "rytr.me",
    "Anyword": "anyword.com",
    
    # 创意写作
    "Sudowrite": "sudowrite.com",
    "NovelAI": "novelai.net",
    
    # 写作辅助
    "Grammarly": "grammarly.com",
    "Quillbot": "quillbot.com",
    "DeepL Write": "deepl.com",
    "Notion AI": "notion.so",
    
    # AI 绘画
    "Midjourney": "midjourney.com",
    "DALL-E 3": "openai.com",
    "Stable Diffusion": "stability.ai",
    "Leonardo AI": "leonardo.ai",
    "Playground AI": "playgroundai.com",
    "SeaArt AI": "seaart.ai",
    "Civitai": "civitai.com",
    "Ideogram": "ideogram.ai",
    
    # 图像编辑
    "美图 AI": "xiuxiu.meitu.com",
    "Magic Studio": "magicstudio.com",
    "Remove.bg": "remove.bg",
    "Adobe Firefly": "firefly.adobe.com",
    "稿定设计": "gaoding.com",
    "Canva AI": "canva.com",
    
    # Logo 设计
    "Looka": "looka.com",
    "Brandmark": "brandmark.io",
    
    # 视频制作
    "Runway": "runwayml.com",
    "Sora": "openai.com",
    "Pika Labs": "pika.art",
    "剪映": "capcut.cn",
    "Descript": "descript.com",
    "Veed.io": "veed.io",
    "InVideo": "invideo.io",
    "HeyGen": "heygen.com",
    "Synthesia": "synthesia.io",
    "D-ID": "d-id.com",
    
    # 音频处理
    "ElevenLabs": "elevenlabs.io",
    "Murf AI": "murf.ai",
    "Play.ht": "play.ht",
    "讯飞配音": "peiyin.xunfei.cn",
    "Suno AI": "suno.ai",
    "Udio": "udio.com",
    "AIVA": "aiva.ai",
    "Boomy": "boomy.com",
    "Soundraw": "soundraw.io",
    "LALAL.AI": "lalal.ai",
    "Adobe Podcast": "podcast.adobe.com",
    
    # 开发工具
    "Cursor": "cursor.sh",
    "GitHub Copilot": "github.com",
    "Codeium": "codeium.com",
    "Tabnine": "tabnine.com",
    "Replit AI": "replit.com",
    "CodeSandbox AI": "codesandbox.io",
    "v0": "v0.dev",
    "Bolt.new": "bolt.new",
    "Framer AI": "framer.com",
    "Webflow AI": "webflow.com",
    
    # 办公效率
    "Microsoft Copilot": "copilot.microsoft.com",
    "Otter.ai": "otter.ai",
    "Fireflies.ai": "fireflies.ai",
    "Beautiful.ai": "beautiful.ai",
    "Gamma": "gamma.app",
    "Tome": "tome.app",
    "Zapier": "zapier.com",
    
    # 学习教育
    "Duolingo Max": "duolingo.com",
    "ELSA Speak": "elsaspeak.com",
    "Speak": "speak.com",
    "Khanmigo": "khanacademy.org",
    "Coursera Coach": "coursera.org",
    "Socratic": "socratic.org",
    "Quizlet AI": "quizlet.com",
    "Photomath": "photomath.com",
    "Wolfram Alpha": "wolframalpha.com",
    "Brainly": "brainly.com",
    
    # 社交媒体
    "Hootsuite": "hootsuite.com",
    "Buffer": "buffer.com",
    "Sprout Social": "sproutsocial.com",
    "Later": "later.com",
    "CoSchedule": "coschedule.com",
    "Tailwind": "tailwindapp.com",
    
    # 客服机器人
    "Intercom": "intercom.com",
    "Drift": "drift.com",
    "Tidio": "tidio.com",
    "Ada": "ada.cx",
    "Freshchat": "freshworks.com",
    "Dialogflow": "dialogflow.cloud.google.com",
    "Rasa": "rasa.com",
    "Botpress": "botpress.com",
    
    # 数据分析
    "Tableau AI": "tableau.com",
    "Power BI": "powerbi.microsoft.com",
    "Looker": "looker.com",
    "帆软 FineBI": "fanruan.com",
    "Metabase": "metabase.com",
    "Redash": "redash.io",
    
    # 中国工具
    "豆包": "doubao.com",
    "DeepSeek": "chat.deepseek.com",
    "腾讯元宝": "yuanbao.tencent.com",
    "Grok": "grok.x.ai",
    "Poe": "poe.com",
    "蛙蛙写作": "wawa.ai",
    "讯飞绘文": "huiwen.xfyun.cn",
    "笔灵 AI 写作": "ibiling.cn",
    "堆友 AI": "d.design",
    "LiblibAI": "liblib.art",
    "可灵 AI": "klingai.kuaishou.com",
    "即梦 AI": "jimeng.jianying.com",
    "通义万相": "tongyi.aliyun.com",
    "扣子 Coze": "coze.cn",
    "秘塔 AI 搜索": "metaso.cn",
    "通义灵码": "lingma.aliyun.com",
    "代码小浣熊": "code.xiaohuanxiong.com",
    "魔音工坊": "moyin.cn",
    "海绵音乐": "haimian.com",
}

def extract_domain(url):
    """从 URL 提取域名"""
    url = re.sub(r'^https?://', '', url)
    url = re.sub(r'/.*$', '', url)
    url = re.sub(r'^www\.', '', url)
    return url.lower()

def validate_links():
    data_dir = os.path.join(os.path.dirname(__file__), 'src', 'data')
    files = [
        'category-text-generation.ts',
        'category-image-design.ts',
        'category-video-production.ts',
        'category-audio-processing.ts',
        'category-office-productivity.ts',
        'category-data-analysis.ts',
        'category-chatbot.ts',
        'category-social-media.ts',
        'category-dev-tools.ts',
        'category-education.ts',
        'new-tools-batch1.ts',
        'new-tools-batch2.ts',
    ]
    
    issues = []
    
    for file in files:
        file_path = os.path.join(data_dir, file)
        if not os.path.exists(file_path):
            print(f"⚠️ 文件不存在：{file}")
            continue
        
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 提取工具名称和 URL
        pattern = r'name:\s*["\']([^"\']+)["\'][\s\S]*?url:\s*["\']([^"\']+)["\']'
        matches = re.findall(pattern, content)
        
        for tool_name, url in matches:
            domain = extract_domain(url)
            expected = EXPECTED_DOMAINS.get(tool_name)
            
            if expected and expected not in domain:
                issues.append({
                    'file': file,
                    'tool': tool_name,
                    'current_url': url,
                    'expected': expected,
                    'actual_domain': domain
                })
    
    return issues

if __name__ == '__main__':
    issues = validate_links()
    
    if not issues:
        print('✅ 所有工具链接验证通过！')
    else:
        print(f'❌ 发现 {len(issues)} 个问题：\n')
        for i, issue in enumerate(issues, 1):
            print(f"{i}. [{issue['file']}] {issue['tool']}")
            print(f"   问题：域名不匹配")
            print(f"   当前 URL: {issue['current_url']}")
            print(f"   期望域名：{issue['expected']}")
            print(f"   实际域名：{issue['actual_domain']}")
            print()
    
    # 输出修复建议
    if issues:
        print('\n--- 修复建议 ---')
        for issue in issues:
            print(f"# {issue['tool']}: {issue['current_url']} -> https://{issue['expected']}")
