---
layout: page
title: Aggregation
tagline: 
categories: Machine Learning Aggregation adaboost
---

Aggregation

- 融合各种方法在一起来提高分类效果。

Blending：混合各种方法在一起. 各个算法的参数求均值。

Linear blending：把各个算法的结果做线性组合。
    - LinMod + hypothesees as transform + constrains

Bagging：边学习，边blending

Adaptive Boosting

- 逐步增强，逐步添加限制条件。
- 可以通过增强或者惩罚来达到。
- 可以在犯过错的地方强调一下。

Diversity By Re-weighting

- 根据不同的部分给不同的weight

Adaptive Boosting Algorithm

- 一刀一刀的切，放大错误的，缩小正确的，逐渐优化分类器
- scaling factor
- 放大错误的
- 缩小正确的
- 做成功的应用是人脸识别
