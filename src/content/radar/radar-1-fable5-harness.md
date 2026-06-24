---
title: "Fable 5 屠榜了，但最值得关注的不是模型本身"
series: "radar"
seriesLabel: "注意力雷达"
seriesNumber: 1
date: 2026-06-12
description: "Fable 5 全线屠榜，SWE-Bench Pro 80.3%。但真正值得关注的是一个被忽略的范式转移：AI 产品的实际体验 = 模型能力 × Harness 工程。静默降级、持久记忆、连续工作 9.5 小时——这三件事的幕后英雄都不是模型参数。"
excerpt: "Claude Fable 5 十几项基准全线刷新纪录。Karpathy 说是'阶跃式进步'。但今天想聊的不是这些数字，是一个更安静、更需要仔细看的东西——Harness 工程。"
tags: ["Fable 5", "Anthropic", "Harness", "Agent", "Claude Code"]
featured: false
draft: false
cogNav:
  summary: "你刚刚读的是注意力雷达第1期。核心发现：AI 产品体验 = 模型能力 × Harness 工程。Harness 是连接模型能力和用户价值的中间层，它可能是 AI 领域下一个被低估的投资机会。"
  related:
    - title: "解码5：Anthropic CFO——$1000亿算力赌局"
      slug: "/decode/decode-5-anthropic-cfo"
    - title: "解码4：六家模型公司全景对比"
      slug: "/decode/decode-4-model-companies-1"
---

# Fable 5 屠榜了，但最值得关注的不是模型本身

> 「注意力雷达」· 第1期
>
> *一个被忽略的范式转移：AI 产品的实际体验 = 模型能力 × Harness 工程*

---

6 月 9 日，Anthropic 发布了 Claude Fable 5。

SWE-Bench Pro 编程得分 **80.3%**（上一代 69.2%），FrontierCode Diamond **29.3%**（翻了一倍多），知识工作、电脑操作、生物医学——十几项基准全线刷新纪录。Stripe 用它在一天内迁移了 5000 万行 Ruby 代码，人类团队做这件事需要两个多月。

Karpathy 说是"阶跃式进步"。Simon Willison 说"挑战在于找到它完不成的任务"。

但今天想聊的不是这些数字。是一个更安静、更需要仔细看的东西。

---

## 三个细节

翻完所有评测和用户报告，有三个细节让我停下来想了很久：

**细节一：静默降级。**

Fable 5 内置了三道安全分类器——涉及网络安全、生物化学、模型蒸馏（Model Distillation）的请求，会**不通知你的情况下**切换到上一代 Opus 4.8 去执行。

这事跟模型能力无关。这是一个**路由系统**——在请求到达模型之前，先判断"该不该由最强的模型来回答"。是 Harness 层的代码，不是模型层的参数。

**细节二：持久记忆让表现翻了三倍。**

Fable 5 在《杀戮尖塔》游戏测试中，有持久文件记忆时的表现提升，是 Opus 4.8 同等条件下的**三倍**。

记忆系统不是模型的一部分。它是 Claude Code 在本地维护的文件存储。但 Fable 5 × 记忆系统 = 指数级放大。两个东西配合得越好，乘积越大。

**细节三：连续工作 9.5 小时。**

沃顿商学院的 Ethan Mollick 测试中，Fable 5 自主完成了一个完整的研究工具开发——连续工作 9.5 小时。

背后支撑：Agent 循环（while-tool-call 循环不中断）、上下文压缩（9.5 小时后的上下文还能用）、错误恢复（出错后自愈）。三项全是 Harness 的功劳。

---

## 什么是 Harness？

这个词你可能最近才开始听到。DeepSeek 最近在招 Agent Harness 产品经理，JD 里写了这样一段话：

> "我们正在把 DeepSeek 的前沿模型能力，转化为领先的 Agent 产品。这其中除模型本身以外的所有工作，都属于 Harness 的范畴。"

**Harness = 模型之外的一切。**

路由、记忆、工具调用、上下文管理、错误恢复、多模型协调——这些构成了用户实际感受到的"AI 产品体验"。模型是引擎，Harness 是方向盘、刹车、底盘、变速箱。

这个公式值得记住：

> **AI 产品体验 = 模型能力 × Harness 工程**

---

## 🧠 我的判断

行业正在把注意力从"谁的模型更强"转向"谁的 Harness 更好"。这不是模型不重要了——是模型差异在缩小，Harness 差异在拉大。下一波 AI 投资机会可能不在模型层，在 Harness 层。

---

*参考：Anthropic 官方博客、Karpathy/X、Ethan Mollick/One Useful Thing、Simon Willison/blog、DeepSeek JD*
