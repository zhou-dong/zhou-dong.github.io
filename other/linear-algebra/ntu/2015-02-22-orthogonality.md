---
layout: page
title: Orthogonality
tagline:
---

{% include JB/setup %}

正交，也就是在二维空间或者三维空间的垂直

- 如果有正交的sub dimensional的话，那么在矩阵的运算中，就可以极大的简化计算量。
- 在矩阵的运算中，就不需要高斯消去法了
- 只需要在各个dimension中各自求解
- 因为各个维度之间是没有影响的

正交化的步骤

1. 求linear dependent的matrix的basis
2. 用其中的一个vector做标准，来正交化其它的basis
3. 把正交化以后的新的basis做normalization，即长度都为1

orthogonal projection

- 对subspace做orthogonal projection
- 对一个向量，在某个subspace做投影
- 把一个向量decomposition

orthogonal complement

- 一个向量与两一个subspace中的所有向量都垂直

向量与subspace之间的orthogonality

- 即这个向量到这个平面的距离

1. 求这个subspace的orthogonal basis，
2. 求这个向量在这些orthogonal basis上的投影
3. 这个向量减去在subspace上的投影，就是向量到空间的距离

- 用这个方式，可以求线性回归的问题
