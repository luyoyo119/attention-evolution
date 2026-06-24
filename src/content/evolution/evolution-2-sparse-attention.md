---
title: "AI 为何开始'选择性失明'——稀疏注意力的诞生"
series: "evolution"
seriesLabel: "注意力的进化"
seriesNumber: 2
date: 2026-05-20
description: "从 Transformer 的 O(N²) 全量注意力到 Mamba 的选择性机制。AI 学会了'少看一点，理解得更深'。而这跟人类注意力的运作方式出奇地相似。"
excerpt: "Transformer 看所有东西，Mamba 学会了说'不看'。AI 花了六年时间学到了一件事：少看一点，反而理解得更深。而这恰好是人类注意力最核心的特征。"
tags: ["Transformer", "稀疏注意力", "Mamba", "SSM", "深度学习"]
featured: false
draft: false
cogNav:
  summary: "你刚刚读的是注意力的进化第2篇——稀疏注意力的诞生。AI 从'全量注意'进化到'选择性注意'，跟人类注意力的运作方式惊人地相似。下一篇：AI 的记忆进化 vs 人类的遗忘危机。"
  related:
    - title: "进化3：AI 的记忆进化 vs 人类的遗忘危机"
      slug: "/evolution/evolution-3-attention-mirror"
    - title: "解码1：黄仁勋的注意力工程——这套理论在现实中怎么用？"
      slug: "/decode/decode-1-huang-renxun-speech"
---

# AI 为何开始"选择性失明"——稀疏注意力的诞生

> 「注意力的进化」· 第2篇
>
> *从 Transformer 的全量注意力到 Mamba 的选择性机制*

---

2023 年底，一篇名为 Mamba 的论文在 AI 圈引起了巨大关注。

它的核心论点出奇地简单：**Transformer 看了太多东西。**

O(N²) 的全量注意力——每个 token 都要跟其他所有 token 计算关联。这在短文本上没问题，但在长文本上——100 万个 token 意味着 1 万亿次计算。

而 Mamba 的解决方案是：**选择性机制（Selective State Space Model）**——只关注与当前任务相关的信息，忽略不相关的内容。

---

## AI 学到了什么？

这恰恰是人类注意力最核心的特征。

你此刻在读这篇文章。你的注意力放在这些字上。但同时——你忽略了椅子的触感、空调的嗡嗡声、窗外偶尔经过的汽车、手机屏幕边缘弹出来的通知预览。

你不是"没接收到"这些信号。你是**主动过滤掉了**。

这不是缺陷。这是进化设计出来的最优策略。如果每时每刻你都要处理所有感官输入，你会瞬间崩溃。Transformer 也是一样——O(N²) 在处理长上下文时正在撞墙。

---

## 稀疏注意力 = AI 的选择性注意

稀疏注意力（Sparse Attention）、滑动窗口（Sliding Window）、选择性 SSM——不同路径，同一个目标：**让 AI 学会不看。**

这个范式转移的意义，不只是算力节省。它意味着 AI 正在学习一种更像人类的认知方式——不是"处理所有信息然后找出重要的"，而是"先判断什么值得处理，再把注意力分配过去"。

---

## 🧠 我的判断

稀疏注意力的诞生不是技术升级——是认知范式的转折。AI 从"暴力计算"转向"选择性处理"，跟人类注意力进化走的是同一条路。理解这个趋势，你就能理解 AI 未来五年的发展方向：不再追求"更大"，而是追求"更聪明地选择看什么"。

---

*参考：Mamba (Gu & Dao, 2023)、FlashAttention (Dao et al., 2022)、Transformer (Vaswani et al., 2017)*
