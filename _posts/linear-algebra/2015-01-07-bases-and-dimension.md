---
layout: page
title: Bases and Dimension 
tagline:  
---
{% include JB/setup %}

#### Linearly dependent
$$
a_1v_1 + a_2v_2 + \cdots + a_nv_n = 0 ; \\
\textstyle \sum_{i=1}^n a_iv_i = 0 ;
$$

#### Bases and dimension

##### Linearly Idependent Example1:
$$
V= R^2 \\
\beta = \{(1, 0), (0, 1)\} \\
\beta = \{(1, 0), (1, 1)\} \\
dim(v) = 2
$$

##### Linearly Idependent Example2:
$$
V = M_{2 \times 3}(R) \\
\beta = 
 \begin{Bmatrix}
  \begin{pmatrix}
   1 & 0 & 0 \\
   0 & 0 & 0 
  \end{pmatrix},
 \begin{pmatrix}
   0 & 1 & 0 \\
   0 & 0 & 0
  \end{pmatrix},
 \begin{pmatrix}
   0 & 0 & 1 \\
   0 & 0 & 0
  \end{pmatrix},
 \begin{pmatrix}
   0 & 0 & 0 \\
   1 & 0 & 0
  \end{pmatrix},
 \begin{pmatrix}
   0 & 0 & 0 \\
   0 & 1 & 0
  \end{pmatrix},
 \begin{pmatrix}
   0 & 0 & 0 \\
   0 & 0 & 1
  \end{pmatrix}
 \end{Bmatrix} \\
dim(v) = 6
$$

##### Linearly Independent Example3:
$$
V = \{0\} \\
\beta = \Phi
$$

##### Linearly Independent Example4:
$$
P_2(R) = V \\
\beta = \{1, x, x^2\} \\
\beta = \{1, x+1, 2x^2\} \\
dim(V) = 3 
$$

##### Linearly `Dependent` Example5:
$$
V= R^2 \\
\beta = \{(1, 0), (0, 1),(1,1)\}
$$

#### 基底：
* 线性独立是基底的必要条件，但不是充分条件。基底中的各个向量一定线性独立。
* 基底是向量空间最具代表性的一些集，这些集合中的元素不多不少：向量空间中的任何元素都可以用基底`唯一`的表达出来。
* 一项向量空间可以有不同的基底。

#### 理解`基底`的选择：
1. 需要在向量空间中的每个维度，需要一个向量来代表这个维度
 - 如果有两个向量、或者多个向量、或者向量乘以某个实数以后，之和为0，那么这些个向量为非线性独立。
 - 为了保证用基底`唯一`的表示一个向量空间中的元素，每个维度只应该有一个向量。
 - 线性独立或者非独立是需找某个维度向量的方法。
2. 线性独立的向量可能没有覆盖向量空间的所有维度，线性独立的向量集合不一定是`基底`。
 - 基底中的各个向量之间都线性独立。
 - 线性独立的向量集合不一定是基底。 
3. 一个向量空间可以有不同的基底。
4. 非线性独立的例子：
 - {(1,1),(2,2)}，用这两个向量不能表达二维空间的所有元素。
 - 它的性质是：(1,1)*2 - (2,2) = 0 ;
5. 线性独立的例子：
 - {(0,1),(1,0)}，用这两个向量可以表示集合空间中的所元素。
 - 它的性质是：(0,1)n + (1,0)m != 0 ;

