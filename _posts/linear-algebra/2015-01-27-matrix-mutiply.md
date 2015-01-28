---
layout: page
title: Matrices
tagline: Matrix Transpose
---
{% include JB/setup %}

#### Definition:  
$$
  A = (A_{ij})_{mn} \\
  B = (B_{ij})_{np} \\
  AB = C = (C_{ij})_{mp} \\
  C_{ij} = \sum_{k=1}^n A_{ik}B_{kj} \  (A的第i行和B的第j列的内积)  
$$  

#### Example:   
$$
 A = \begin{pmatrix} 1 & 3 & 5 \\ 4 & 2 & 7 \end{pmatrix}_{2 \times 3} \\
 B = \begin{pmatrix} 2 & 8 & 7 \\ 3 & 6 & 12 \\ 9 & 4 & 10 \end{pmatrix}_{3 \times 3} \\
 AB = \begin{pmatrix}56 & 46 & 93 \\ 77 & 72 & 122 \end{pmatrix}_{2 \times 3}
$$

#### Properties of the product of the Matrix:  
$$
(AB)^t = B^tA^t \\
A(B_1 + B_2) = AB_1 + AB_2 \\
(A_1 + A_2)B = A_1B + A_2B \\
\alpha(AB) = A \alpha B = AB \alpha \\
I_mA_{mn} = A_{mn}I_n = A
$$

#### Square Matrix:  
$$
I_n = \begin{pmatrix} 1 & \cdots & 1 \\ \vdots & \ddots & \vdots \\ 1 &  \cdots & 1 \end{pmatrix}_{n \times n}
$$

#### Matrix tanspose
$$
A = \begin{pmatrix} 1 & 3 & 5 \\ 4 & 2 & 7 \end{pmatrix}_{2 \times 3} \\
A^t = \begin{pmatrix} 1 & 4 \\ 3 & 2 \\ 5 & 7 \end{pmatrix}_{3 \times 2}
$$
