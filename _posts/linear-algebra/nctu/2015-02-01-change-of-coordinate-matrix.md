---
layout: page
title: Change of Coordinate Matrix
tagline:
---

{% include JB/setup %}

#### 个人的理解：
- 我自己的理解是，在同一个向量空间中，使用`不同的基底`来表示同一个`线性函数`或者`向量`。
- 注意，在同一个向量空间中，使用`不同的基底`，对函数表达的结果是不一样的。

#### 数学公式表示：  
$$
 \dbinom{x'}{y'} = \begin{pmatrix} \cos{\theta} & \sin{\theta} \\ -\sin{\theta} & \cos{\theta} \end{pmatrix} \dbinom{x}{y} \\
 [I]_{\beta}^{\beta'}  = \begin{pmatrix} \cos{\theta} & \sin{\theta} \\ -\sin{\theta} & \cos{\theta} \end{pmatrix} \\
 x' = x\cos{\theta} + y\sin{\theta} \\
 y' = -x\sin{\theta} + y\cos{\theta}
$$
