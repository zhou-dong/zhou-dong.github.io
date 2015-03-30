---
layout: page
title: Introduction to Matrices, Vectors
tagline: Systems of Linear Equations
categories: matric vector linear
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

- 方程式可能会有多个解，这些解的集合我们叫做solution set
- Gaussian Elimination

