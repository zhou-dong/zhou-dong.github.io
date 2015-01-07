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

##### 线性独立是基地的必要条件，但不是充分条件。基地中的各个向量一定线性独立。
