---
layout: page
title: Invertible Matrix
tagline: Invertible Matrix, Isomorphic, Identity Matrix
---
{% include JB/setup %}

#### Definition:  
$$ AB = BA = I_n $$  

##### Identity Matrix ( Identity Matrix is an Square Matrix ):  
$$
 I_n = \begin{pmatrix} 1 & \cdots & 0 \\ \vdots & \ddots & \vdots \\ 0 &  \cdots & 1 \end{pmatrix}_{n \times n} \\
$$

##### Properties:  
$$
 I_mA_{mn} = A_{mn}I_n = A \\
 (T_1 T_2)^{-1} = T_2^{-1} T_1^{-1} \\
 [T^{-1}]_{\gamma}^{\beta} = ([T]_{\gamma}^{\beta})^{-1}
$$
  
##### Such that :   
$$
 T = I_{V} \\
 U = I_{W} \\
 [UT]_{\beta} = [U]_{\gamma}^{\beta} [T]_{\beta}^{\gamma}
$$
    
#### 总结：
1. 只要是维度相同，那么可以看成是同类的矩阵。
2. 只有方正才有逆矩阵，但不一定所有的方正都有你矩阵。
3. 如果存在逆矩阵，就把这举证叫做可逆矩阵或者非奇异矩阵。
4. 两个矩阵相乘的几何意义可以理解为，把一个矩阵的元素表达在另一个矩阵里。
5. 个人觉得可逆矩阵可以理解为在两个维度相同的矩阵中，用不同的基底把元素表达出来。
6. I just wanna test!
