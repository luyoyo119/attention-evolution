# 注意力机制 — 个人网站

基于 [Astro](https://astro.build) 构建的个人知识枢纽网站。

## 如何新增一篇文章

1. 在 `src/content/<系列>/` 下新建 `.md` 文件，文件名格式：`<系列>-<编号>-<短slug>.md`
   - 系列可选：`decode` | `radar` | `deepread` | `evolution` | `workshop` | `standalone`

2. 复制以下 frontmatter 模板，填入你的内容：

```yaml
---
title: "文章标题"
series: "decode"
seriesLabel: "注意力解码"
seriesNumber: 8
date: 2026-07-01
description: "用于 SEO 的描述，120-160 字"
excerpt: "卡片摘要，50-80 字"
tags: ["标签1", "标签2"]
featured: false
draft: false
cogNav:
  summary: "这篇文章讲了什么..."
  related:
    - title: "相关文章标题"
      slug: "/decode/相关文章slug"
---
```

3. 正文直接写在 `---` 下面，使用标准 Markdown 格式

4. `git add . && git commit -m "新文章: xxx" && git push`

5. Netlify 会在 1-2 分钟内自动部署上线

## 本地开发

```bash
npm install        # 安装依赖
npm run dev        # 启动开发服务器 → http://localhost:4321
npm run build      # 构建生产版本
npm run preview    # 预览构建结果
```

## 目录结构

```
src/
├── content/           # 所有文章（按系列分目录）
│   ├── decode/        # 注意力解码
│   ├── radar/         # 注意力雷达
│   ├── deepread/      # 注意力深读
│   ├── evolution/     # 注意力的进化
│   ├── workshop/      # 注意力工坊
│   └── standalone/    # 独立页面（发刊词、根文章等）
├── pages/             # 路由页面
├── components/        # 可复用组件
├── styles/            # 全局样式
└── utils/             # 工具函数
```

## 技术栈

- **框架**: Astro 4
- **样式**: Tailwind CSS
- **部署**: Netlify（Git push 自动部署）

## 域名

https://attention-evolution.com（需在 Netlify 中配置自定义域名）
