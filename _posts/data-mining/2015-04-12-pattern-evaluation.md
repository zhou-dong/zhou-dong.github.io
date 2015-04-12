---
layout: page
title: Pattern Evaluation
tagline: 
categories: 

---

{% include JB/setup %}

在同一个系统的中：

1. 不同的level应该有不同的阀值
2. 不同的商品也应该有不同的阀值

Multi-Dimensional Associations

1. single-dimensional 如果A买苹果，也买了香蕉

2. Inter-dimensional 如果A是18-25岁，并且是学生，所以买coke
3. Hybrid-dimensional 如果A是18-25岁，并且买popcorn，可能会买coke

Mining Quantitative Associations

- Numberical atrributes: age and salary
- Deviation analysis: gender: male and female

Rare Patterns vs. Negative Patterns

Rare Patterns

- Very low support but interesting
- How to mine them? different group-based thresholds

Nagative Patterns

- Nagetively corealted 
- How to define

Constraint Based Mining

- Different kinds of constraints lead to different pruning strategies

constraints can be categorized as

1. Pattern sapce pruning (pruning某些data)
    - Anti-monotonic
    - Monotonic
    - Succinct
    - Convertible

2. data space pruning (pruning 一个data的一部分)
    - Data succinct
    - Data anti-monotonic

Sequence Patterns

- Sequence Databases

- Gapped sequential patterns (GSP)
- Non-gapped sequential patterns

- Generalized Sequential Patterns
- Vertical format-based
- Pattern-growth methods

Pattern-Based Classification

- apple pie
- apple ipad

- pattern first, then classification

- CBA (Classification Based on Associations)
- CMAR

Discriminative Patterns

- 选取数据集中最具代表性的properties
