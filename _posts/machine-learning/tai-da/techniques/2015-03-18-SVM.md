---
layout: page
title: Support Vector Machine
tagline: SVM
categories: Machine Learning SVM
---

1. Linear Support Vector Machine

    - why use linear support vector machine:
        + PLA depending on randomness
        + tolerate more noise
        + more robust to overfitting
    - how to implement
        1. w classifiles every ($$x_n, y_n$$) correctly
        2. fatness(w) = min distance($$x_n, w$$)
        3. $$v_1x_1 + v_2x_2 = 0$$.
    - method:
        - 求两点之间的中锤线
    - steps:
        + 一个平面到一个点的距离


2. Dual Support Vector Machine

    - 每个点，到平面的距离，就相当于求每个点在平面上的投影
    - 而且需要考虑的是对偶问题
    - 利用lagrange来约束计算的复杂度
    - 转化为解对偶的问题
    - 找出在边界上并且大于0的点，作为support vectors

3. Kernel Support Vector Machine

    - Kernel Trick: 简化计算的复杂度
    - Polynomial Kernel: 二次转化的优化
    - Gaussian Kernel: 在SVM上利用Gaussian kernel优化计算，泰勒展开是实现
    - Comparison of Kernels

4. Sofe-Margin Support Vector Machine

    - Motivation and Primal Problem: 为了避免overfiting，允许有杂绪。
    - 记录每个点，违反的程度，而不是记录违反点的个数。
    - Dual Problem: 就是是soft也有可能会有overfitting
    - 多项式的分割会更灵活
    - Message behind Soft-Margin
    - Model Selection: 可以选高斯kernel，也可以用其他的kernel来修改参数的值

