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

「注意力雷达」· 第2期

一个被忽略的范式转移：AI 产品的实际体验 = 模型能力 × Harness 工程

6 月 9 日，Anthropic 发布了 Claude Fable 5。

SWE-Bench Pro 编程得分 80.3%（上一代 69.2%），FrontierCode Diamond 29.3%（翻了一倍多），知识工作、电脑操作、生物医学——十几项基准全线刷新纪录。Stripe 用它在一天内迁移了 5000 万行 Ruby 代码，人类团队做这件事需要两个多月。

Karpathy 说是"阶跃式进步"。Simon Willison 说"挑战在于找到它完不成的任务"。

晚上早早把孩子哄上床，迫不及待试了试，确实有些强，还得慢慢发掘。先聊聊今晚初试后一些感受。三个细节

翻了翻评测和用户报告，有三个细节：

**细节一：静默降级。**

Fable 5 内置了三道安全分类器——涉及网络安全、生物化学、模型蒸馏（Model Distillation）的请求，可能会在**不通知你的情况下**切换到 Opus 4.8 去执行（通过cursor使用的情况下会被提示）。

这事跟模型能力无关。这是一个**路由系统**——在请求到达模型之前，先判断"该不该由最强的模型来回答"。是 Harness 层的代码，不是模型层的参数。

**细节二：持久记忆让表现翻了三倍。**

Fable 5 在《杀戮尖塔》游戏测试中，有持久文件记忆时的表现提升，是 Opus 4.8 同等条件下的**三倍**。

注意：记忆系统不是模型的一部分。它是 Claude Code 在本地维护的文件存储——记录任务历史、错误日志、中间发现。Opus 4.8 也能用同一个记忆系统，但它从中获取的增益远不如 Fable 5。

这不只是"模型变强了"。是**模型 × 记忆系统 = 指数级放大**。两个东西配合得越好，乘积越大。

**细节三：连续工作 9.5 小时。**

沃顿商学院的 Ethan Mollick 测试中，Fable 5 自主完成了一个完整的研究工具开发——从设计文档到代码实现，连续工作 9.5 小时。

背后支撑这件事的，是 Agent 循环（while-tool-call 循环不中断）、上下文压缩（9.5 小时后的上下文还能用）、错误恢复（出错后自愈）。这三项全是 Harness 的功劳。什么是 Harness？

这个词你最近可能经常听到。DeepSeek  Agent Harness 产品经理JD 里写了这样一段话：

我们正在把 DeepSeek 的前沿模型能力，转化为领先的 Agent 产品。这其中除模型本身以外的所有工作，都属于 Harness 的范畴。

说白了，**模型是引擎，Harness 是整辆车。**

方向盘（工具调用系统）、刹车（权限控制）、变速箱（上下文管理）、导航（记忆系统）、油表（Token 预算管理）——都是 Harness。引擎再强，没有这些，你只能坐在引擎盖上跑。

Claude Code 是目前 Harness 工程最强的产品。它的代码库大约 51.2 万行——注意，这些代码**不包含任何模型参数**。每一行都在做"除了推理之外的事"：组装上下文、调用工具、检查权限、压缩历史、管理子 Agent。一个被忽略的范式转移

回顾 AI 这三年，竞争焦点在悄悄地移动：

阶段

竞争焦点

代表事件**2023-2024**

模型规模（Scaling Law）

GPT-4、Claude 3**2025**

推理能力（Reasoning）

o1、DeepSeek-R1**2026****模型 × Harness 的乘积**

Fable 5 + Claude Code

前两个阶段，竞争的是"裸模型"——谁的参数大、谁的推理链长、谁在基准测试上高零点几分。

但 2026 年开始出现了变化：**模型能力的增量在缩小，但 Harness 工程能把每一分增量榨取得更充分。**

Fable 5 的模型层确实变强了——FrontierCode Diamond 翻倍是铁证。但你感受到的"神话级体验"，有一半来自 Anthropic 把最强模型和最强 Agent 框架打包到了一个统一体验里。

这是个信号：**未来评估 AI 产品时，"基准分"和"实际可用性"之间的差距会越来越大。** 基准测的是裸模型，你感受到的是模型 × Harness 的乘积。各家在 Harness 上的布局

公司

Harness 产品

成熟度

策略**Anthropic**

Claude Code

🟢 最强

51.2 万行 Agent 框架，原生嵌入记忆、安全路由、子 Agent 隔离**OpenAI**

Codex CLI / Operator

🟡 追赶中

开源 CLI 框架，但 Agent 工程积累少于 Anthropic**Google**

Gemini CLI / ADK

🟡 追赶中

靠 Gemini 多模态差异化，Agent 层偏薄**Cursor**

Cursor IDE

🟢 成熟

专注 IDE 场景的 Harness，垂直做得深但范围窄**Devin**

Devin

🟢 成熟

独立 Agent 产品，全自主模式，但模型依赖外部 API**DeepSeek****搭建中**

🔴 刚起步

模型能力一流（V4-Pro），但 Harness 还在搭团队

最值得留意的是 DeepSeek 的位置：模型层可能仅次于 Anthropic 和 OpenAI，但 Harness 层几乎没有。这就像一个造出了 F1 引擎的车队，但还没有底盘、变速箱和方向盘。

他们显然意识到了这件事。Agent Harness 产品经理的 JD 里写了"定义 DeepSeek 对 Harness 的理解"——不照抄 Claude  Code，探索自己的路线。DeepSeek 造了引擎，还没造车

我们之前聊过 Claude Code + DeepSeek 的混合方案——用 Anthropic 的 Harness，跑 DeepSeek 的模型。这个方案的现在用起来很顺手，也便宜，但**Harness 在别人手里。**

Anthropic 每迭代一次 Claude Code，你的体验就升级一次——**但升级的方向是 Anthropic 定的，不是 DeepSeek 定的。** 如果某天 Anthropic 在 Harness 里加入了对非官方模型的限制，混合方案就断了。

DeepSeek 显然看到了这个风险，正在迎头赶上，要**掌握 Agent 体验的定义权。**🧠 我的判断

Fable 5 的发布让我重新理解了一件事：**AI 竞争正在从"奥运会"变成"F1"。**

奥运会比的是单项——谁跑得快、谁跳得高。基准测试就是奥运会。F1 比的是"车 + 车手 + 团队 + 策略"的综合能力。AI 产品也是——模型是引擎，Harness 是整车工程，用户体验是终点线。

Anthropic 现在同时拥有最强的引擎（Fable 5）和最成熟的整车平台（Claude Code）。他们把两件事整合到了一个产品里——这就是为什么 Fable 5 给人的感觉不是"又强了 10%"，而是"像换了一个品类"。

但我也有一个不太放心的想法：**当一个公司同时拥有最强的模型和最强的 Agent 平台时，它还会保持开放吗？** Anthropic 目前允许通过 API 地址切换接入其他模型——但安全分类器、静默降级这些 Harness 层的控制力增强，是开放的还是封闭的信号？

我还没有答案，让我们拭目以待。🧭 认知导航

**你刚读完的这篇**：从 Fable 5 的发布切入，拆解了 "模型 × Harness" 这个被多数人忽略的范式转移。

**想继续深入**：

AI 行业现在到底谁在赚钱： → 解码4（上/下）：六家模型公司全景对比

**想回到原点**：

从头理解"什么是注意力机制"： → 注意力的进化 · 第 1 篇看穿叙事"的能力： → 解码1：黄仁勋两小时演讲，本质上是一场注意力工程

🌳 **注意力解码**：拆播客、拆演讲、拆事件。训练你看穿"他说了什么，没说什么"。

📡 **注意力雷达**：扫行业全景。把散落的新闻和财报碎片拼成一张地图。

📖 **注意力深读**：拆书、拆论文。花 15 分钟拿到一本好书 80% 的精华。

**
**
