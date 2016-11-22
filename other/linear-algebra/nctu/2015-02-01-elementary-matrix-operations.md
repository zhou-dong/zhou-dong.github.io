---
layout: page
title: Elementary Matrix Operations and Elementary Matrix
tagline:
categories: elementary matrix
---



#### Elementary Matrix operations and Systems of Linear Equations
$$ A_{m \times n} x_{n \times 1} = b_{m \times 1} $$

#### Elementary row(column) operations:
1. 列（行）交换
2. 列（行）乘 - 非0纯量
3. 某列（行）非0纯量加到另一列（行）

#### EX:
$$
A = \begin{pmatrix} 1 & 3 & 5 \\ 2 & 4 & 6 \end{pmatrix} \\
A_1 = \begin{pmatrix} 2 & 4 & 6 \\ 1 & 3 & 5 \end{pmatrix} \\
A_2 = \begin{pmatrix} -2 & -6 & -10 \\ 2 & 4 & 6 \end{pmatrix}
$$

#### Elementary matrix (From Wikipedia):  
In mathematics, an elementary matrix is a matrix which differs from the identity matrix by one single elementary row operation. The elementary matrices generate the general linear group of invertible matrices. Left multiplication (pre-multiplication) by an elementary matrix represents elementary row operations, while right multiplication (post-multiplication) represents elementary column operations. 

#### 基本矩阵或者初等矩阵
线性代数中，初等矩阵（又称为基本矩阵）是一个与单位矩阵只有微小区别的矩阵。具体来说，一个n阶单位矩阵E经过一次初等行变换或一次初等列变换所得矩阵称为n阶初等矩阵。
 
- 若一矩陣可由單位矩陣經過一次基本列運算而得，則稱此矩陣為基本矩陣。
- 必須進行超過1次基本列運算才能得到的矩陣，就不算是基本矩陣了。
- 它是由`單位矩陣`來的，所以必須是個 n*n 的方陣。

#### Operations:
初等矩阵分为3种类型，分别对应着3种不同的行/列变换。

1. 两行（列）互换: ($$ R_i \leftrightarrow R_j $$)
2. 把某行（列）乘以一非零常数: ($$ kR_i \rightarrow R_i \ \  k \ne 0 $$)
3. 把第i行（列）加上第j行（列）的k倍($$ R_i + kR_j = R_i $$)

#### Operation One 性质：
- 逆矩阵即自身：$$ T_{ij}^{-1} = T_{ij} $$。
- 因为单位矩阵的行列式为1，故 $$ \vert T_{ij}\vert =-1$$。与其他相同大小的方阵A亦有一下性质：$$ \vert T_{ij}A \vert = - \vert A \vert  $$。

#### Operation Two 性质：
- 逆矩阵为$$ T_{i}(m)^{-1} = T_{i}(\frac{1}{m})$$。
- 此矩阵及其逆矩阵均为对角矩阵。
- 其行列式$$ \vert T_{i}(m) \vert =m$$。故对于一等大方阵A有$$ \vert T_{i}(m)A \vert =m \vert A \vert$$。

#### Operation Three 性质：
- 逆矩阵具有性质$$T_{ij}(m)^{-1}=T_{ij}(-m)$$。
- 此矩阵及其逆矩阵均为三角矩阵。
- $$ \vert T_{ij}(m)\vert=1$$。故对于一等大方阵A有：$$ \vert T_{ij}(m)A \vert = \vert A \vert $$。
