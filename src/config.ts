export const SITE = {
  title: '注意力进化论',
  description: '决定看什么、不看什么，决定你理解世界的深度',
  url: 'https://attention-evolution.com',
  author: 'yoyo',
  language: 'zh-CN',
} as const;

export interface SeriesMeta {
  slug: string;
  label: string;
  color: string;
  colorDim: string;
  description: string;
  emoji: string;
}

export const SERIES: Record<string, SeriesMeta> = {
  decode: {
    slug: 'decode',
    label: '注意力解码',
    color: '#667eea',
    colorDim: 'rgba(102, 126, 234, 0.15)',
    description: '拆播客、拆演讲、拆叙事 — 训练你看穿"他说了什么，没说什么"。每篇标配回避清单，拆给你看那些被选择性忽略的问题。',
    emoji: '🌳',
  },
  radar: {
    slug: 'radar',
    label: '注意力雷达',
    color: '#4285f4',
    colorDim: 'rgba(66, 133, 244, 0.15)',
    description: '扫行业全景，把碎片拼成地图。六家模型公司的策略差异、芯片产业链的格局变迁、AI编程工具的生态分化 — 拉远镜头，看清大图。',
    emoji: '📡',
  },
  deepread: {
    slug: 'deepread',
    label: '注意力深读',
    color: '#10ac84',
    colorDim: 'rgba(16, 172, 132, 0.15)',
    description: '拆书、拆论文，15分钟拿到80%精华。《The Nvidia Way》、Attention Is All You Need 原论文、Paul Graham 的 Founder Mode — 值得深读的好东西，我来替你拆。',
    emoji: '📖',
  },
  evolution: {
    slug: 'evolution',
    label: '注意力的进化',
    color: '#6c5ce7',
    colorDim: 'rgba(108, 92, 231, 0.15)',
    description: 'AI 机制的科普系列。稀疏注意力、记忆进化、人类遗忘危机 — 从技术出发，回到人的处境。',
    emoji: '🧬',
  },
  workshop: {
    slug: 'workshop',
    label: '注意力工坊',
    color: '#e8a820',
    colorDim: 'rgba(232, 168, 32, 0.15)',
    description: '动手做。用 AI 处理工作文件的实用脚本、脱敏工具、效率技巧 — 不聊概念，直接上代码。',
    emoji: '🔧',
  },
  standalone: {
    slug: 'standalone',
    label: '',
    color: '#888',
    colorDim: 'rgba(136, 136, 136, 0.15)',
    description: '',
    emoji: '',
  },
};
