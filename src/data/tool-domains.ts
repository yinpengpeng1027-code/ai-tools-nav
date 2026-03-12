// 域名映射表 - 用于 Logo 自动替换
// 格式: 工具ID: 域名

export const TOOL_DOMAINS: Record<number, string> = {
  // 文本生成 (1-25)
  1: "chatgpt.com",
  2: "claude.ai",
  3: "jasper.ai",
  4: "writesonic.com",
  5: "copy.ai",
  6: "rytr.me",
  7: "yiyan.baidu.com",
  8: "tongyi.aliyun.com",
  9: "kimi.moonshot.cn",
  10: "chatglm.cn",
  11: "xinghuo.xfyun.cn",
  12: "copilot.microsoft.com",
  13: "gemini.google.com",
  14: "character.ai",
  15: "blackboxai.dev",
  16: "replicate.com",
  17: "stablediffusion.ai",
  18: "dalle.app",
  19: "midjourney.app",
  20: "leonardo.ai",
  21: "playgroundai.com",
  22: "artbreeder.com",
  23: "descript.com",
  24: "adobe.firefly.io",
  25: "finalcutpro.com",
  
  // 图像设计 (26-50)
  26: "canva.com",
  27: "capcut.com",
  28: "invideo.io",
  29: "runwayml.app",
  30: "magenta.studio",
  31: "soundraw.io",
  32: "mubert.com",
  33: "destiny.ai",
  34: "boomy.com",
  35: "sonicatoms.com",
  36: "visly.app",
  37: "murf.ai",
  38: "reallusion.com",
  39: "iclone.ai",
  40: "synthesize.com",
  41: "play.ht",
  
  // 办公效率 (51-75)
  42: "zoho.com",
  43: "gitee.com",
  44: "notion.ai",
  45: "evernote.com",
  46: "mem.ai",
  47: "asana.com",
  48: "trello.com",
  49: "linear.app",
  50: "notion.so",
  51: "cotton.co",
  52: "hegel.ai",
  53: "google.com/analytics",
  54: "tableau.com",
  55: "powerbi.com",
  56: "metabase.com",
  
  // 对话机器人 (76-100)
  57: "perplexity.ai",
  58: "you.com",
  59: "chatgpt.com",
  60: "phi.com",
  61: "meta.com",
  62: "reddit.com",
  63: "tiktok.com",
  64: "instagram.com",
  65: "facebook.com",
  66: "youtube.com",
  67: "twitter.com",
  68: "linkedin.com",
  69: "discord.com",
  70: "slack.com",
  71: "teams.microsoft.com",
  72: "zoom.us",
  73: "baidu.com",
  74: "alibaba.com",
  75: "tencent.com",
  76: "bytedance.com",
  77: "netease.com",
  78: "jd.com",
  79: "pinduoduo.com",
  80: "douyin.com",
  81: "xhslink.com",
  82: "zhihu.com",
  83: "weibo.com",
  84: "bilibili.com",
  85: "iqiyi.com",
  86: "youku.com",
  87: "iqiyi.com",
  88: "mgtv.com",
  89: "miguvideo.com",
  90: "163.com",
  91: "sina.com",
  92: "sohu.com",
  93: "tencent.com",
  94: "aliyun.com",
  95: "tencent.com",
  96: "bytedance.com",
  97: "baidu.com",
  98: "tencent.com",
  99: "aliyun.com",
  100: "huawei.com",
};

/**
 * 获取工具域名
 * @param toolId 工具ID
 * @returns 域名字符串
 */
export function getToolDomain(toolId: number): string {
  return TOOL_DOMAINS[toolId] || '';
}

/**
 * 从 URL 中提取域名
 * @param url URL 字符串
 * @returns 域名
 */
export function extractDomain(url: string): string {
  try {
    const hostname = new URL(url).hostname;
    // 移除 www 前缀
    return hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
}

/**
 * 生成 Clearbit Logo URL
 * @param domain 域名
 * @returns Logo URL
 */
export function generateLogoUrl(domain: string): string {
  return `https://logo.clearbit.com/${domain}`;
}

/**
 * 获取工具Logo URL
 * @param toolId 工具ID
 * @returns Logo URL 或空字符串
 */
export function getToolLogoUrl(toolId: number): string {
  const domain = getToolDomain(toolId);
  if (!domain) return '';
  return generateLogoUrl(domain);
}
