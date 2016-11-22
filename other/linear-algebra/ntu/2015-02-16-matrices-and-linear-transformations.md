---
layout: page
title: Matrices Mutiplication
tagline:
categories: matrix
---



对角矩阵： (diagonal matrix)

- 对角矩阵首先是方阵
- 两个对角矩阵相乘，符合交换律

对称矩阵：

- 矩阵的转置，还是原矩阵

利用矩阵的反阵inverse可以实现相当于矩阵的除法

invertible 矩阵的反转

- Ax = b
- A^-1 (Ax) = A^-1 b
- A^-1 A x = A^-1 b
- I_n x = A^-1 b
- x = A^-1 b

- 可反转的矩阵也是方阵
- 如果一个矩阵可以反转，那么它最多只有一个反转矩阵

Elementary matrix

- In mathematics, an elementary matrix is a matrix which differs from the identity matrix by one single elementary row operation.
- 利用elementary matrix和其它矩阵相乘，可以对矩阵做一些运算（个人理解为精确的运算）

**reduced row echelon form是唯一存在的**

More inverse of Matrix

- 要判断一个矩阵是不是inverse的，可以看它的reduced row echelon是不是I_n，如果是那这个矩阵就是inverse的，反之就不是

Invertable matrix theorem

1. A in invertible
2. The reduced row echelon form is I_n
3. The rank of A equal n
4. The span of the columns of A is R^n
5. The equation Ax = b is consistant for every b in R^n
6. The nullity of A is equal 0
7. The column of A linear indenpendent
8. The only Ax = 0 is 0
9. A is a product of elementary matrix A是多个elementary matrix的相乘
10. There exists an n * n matrix B such that BA = I_n
11. There exists an n * n matrix C such that AC = I_n

Linear Transformnations and Matrices

- 找出matrix transformation or linear transformation的standard matrix，就是把单位矩阵或者说单位向量依次带进去求解。
