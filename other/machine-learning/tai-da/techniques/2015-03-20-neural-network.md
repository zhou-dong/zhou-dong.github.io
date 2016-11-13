---
layout: page
title: Neural Netword & Deep Learning
tagline: 
categories: Machine Learning neural deep
---

Neural Netword

- 一层一层的做运算，一层的输出作为另一层的输入，层层递进。
- 每一层可以用以前学的方法来执行。
- 经过多层的运算，我们希望我们得到的结果是好的。
- 可以用gradient descent来实现，来一步一步的做最佳化
- 其实gradient descent就是做偏微分。

- 因为经过了多次的转化 ，所以可能得不到最优解。
- 可能得到的是局部最优解，而不是全局最优解，所以需要
    + 选好梯度下降的起始点
    + 选好梯度下降的步伐

- 同时要防止overfitting
    + 需要regularization for neural network
    + Early Stopping，在某个中间点就停下来。

Deep Learning

- Deep neural network
    + 每一层找出不同的内容，即每层做一点点的东西
    + 多层之间的结果合并
    + 给出结果
    + 通过每层来做一些简单的东西，然后多层合并，最终可以做复杂的运算

    + difficult structure decisions: 
        - 解决方法之一是加上人对某个领域的理解
    + high model complexity: 
        1. no big worries if big enough data
        2. regularization towards noise-tolerant,like dropout, denoising
    + hard optimization
        - careful initialization to avoid bad local minimun called pre-training
    + huge computational complexity
        - novel hardware/architecture: like mini-batch with GPU

- Autoencoder
    + information-preserving encoding
    + usefulness of approximating identity function
    + 首先先查找每一层之间维度的抽取
    + 然后在一层给维度编码
    + 在另一层给相同维度解码

- Denoising Autoencoder
    + this is one of regularization
    + 加上一些条件使得每一层之间的连接没有那么多
    + 可能Early stopping的效果更好
    + 杂絮越多，资料越少，越容易overfitting
        1. 直接的想法是，想办法删除杂絮
        2. 另外特殊的想法是，把杂絮加到资料中
    + 我们的目标是创建强壮的程序
    + 即使是资料中有杂絮，也能有好的输出
    + 所以我们可以输入有杂絮的资料，然后返回干净的资料
    + 所以我们可以把干净的资料变为干净的资料
    + 而且我们更可以把不干净的资料变为干净的资料

- principal Component Analyze
