---
layout: page
title: Intro to Matrices, Vectors, Equations, set
tagline:
categories: matric vector linear set gaussian
---

{% include JB/setup %}

**零矩阵 != 零矩阵**

**零矩阵是有维度的，只是各个维度的值都为0**

矩阵 乘以 0 =  零矩阵

A * 0 != B * 0

- 因为矩阵A和矩阵B的维度可能不一样
- 所以它们生成的零矩阵可能会不一样

矩阵的转换：

- A矩阵的transpose：A矩阵的行列转换
- 两个矩阵和的转置，等于两个矩阵分别转置然后再相加

vectors

- row vector
- column vector

向量的加减和系数积 其实和矩阵是一样的

Standard Vectors

向量空间中的标准向量

矩阵 * 向量

矩阵 向量 相乘： 结果为一个 向量

**单位向量、单位矩阵**

- 在一个向量空间中，我们可以定义各个维度单位为1的向量为这个维度的单位向量。
- 所以在一个N维的向量空间中，就会有个N个单位矩阵
- 这N个单位矩阵，按次序组成的矩阵就叫做identity matrix
- 由于我们知道，identity matrix在向量空间中的各个维度的值都为1，所以：
- **identity matrix和任何向量相乘，都会不改变向量的大小**

Stochastic Matrx

- 在矩阵中，一列的值相加等于1
- [0.85 0.03]
- [0.15 0.97]
- 可以用这种矩阵来表示百分比的

Rotation Matrix

- 用向量空间来表示一个向量空间中旋转的角度

Sytem of linear equations: （联立方程式）

- 一个方程叫做linear equation
- 多个方程组合起来：system 藕粉 linear equations
- 方程式可能会有多个解，这些解的集合我们叫做solution set
- Gaussian Elimination
    + **所有的pivot position的上下都为0**
- Ax = b

Elementary Row Operations

1. interchange
2. multiply nonzero scalar
3. add a mutiple of one row to another

augmented matrix

- 把变量和结果放在同一个矩阵中求解。

Set theory

- set中是没有顺序的
- union set 合集
- intersection set 交集
- difference set 两个集合相减

- 有限多元素的集合
- 无限多元素的集合

- R^2 不是 R^3 的子集

- 一个判断一个向量的集合是否可以span出整个空间中的所有元素
- 只要找出整个集合中的向量，无法random出空间中的一个向量就可以了
- 一个集合中，如果两个向量是平行的或者是重合的，那么这两个向量在span的时候，作用是一样的
- 可以证明两个集合互为对方的子集
- 所以在整个集合中，每个向量都应该是独特的。
- 如果在一个set中，一个向量可以是别的向量的线性组合，那么这个向量就可以被移除掉。
- 判断集合中的向量是否线性相依

Linear dependence 线性相依 L.D

- 如果其中的一些向量或者其实的两个向量，能组合出0向量，说明其中有的向量是线性相依的
- 如果解中，有一个向量是free variable那么说明这个向量是L.D
- Ax = 0 有除了0向量外的其它解
- Ax = b 可能有许多解

Linear Independence L.I

- 不存在一组系数，使得集合里面任何向量之间的组合都不为0向量

创建一组(L.I) set

1. 创建一非零向量
2. 第二个向量不能与第一个向量平行
3. 以后添加的向量，不能是前面向量的线性组合
4. 向量个数最多是m个


