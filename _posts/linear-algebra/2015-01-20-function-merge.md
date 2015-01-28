---
layout: page
title: Function Merge 
tagline: Ordered Basis, Matrix Repretation,  
---
{% include JB/setup %}

#### Ordered Basis
$$ \beta $$ is an `ordered basis` for V, which means that: 
$$ \beta = \{u_1, u_2, u_3, \cdots , u_n\}  \ne \beta'\{u_2, u_3, u_1, \cdots, u_n\} $$

##### Example 1:
$$ 
 V = P_2(R) \\ 
 \beta = \{1,x,x^2\} \\
 \beta' = \{1, x^2,x\} \\
 v = -2 + 3x + x^2 \in P_2(R) \\
 [v]_{\beta} = \begin{pmatrix} -2 \\ 3 \\1 \end{pmatrix} \\
 [v]_{\beta'} = \begin{pmatrix} -2 \\ 1 \\ 3 \end{pmatrix}
$$

#### Matrix Repretation
$$
 T(v_j) = \sum_{i=1}^m a_{ij}v_i, \ \ j=1, 2, \cdots, n
$$

##### Example 2:
$$ 
  T: \ \ P_2(R) \rightarrow R \ \  and \ \ T(f(x)) = f(2) \\ 
  f(x) = x^2 \\
  T(x) = 4
$$  

#### Function + Function
$$
(U +T)_x = (U)_x + (T)_x \\
U + T = T + U \\
(U + T)(x) = (T + U)(x)
$$

#### Function $$ \times  \ R $$ 
$$
(\alpha T)(x) = \alpha T(x)
$$

#### Function Merge
**Funcitons can not multiply with each other, they can merge.**  
$$
 U \circ T = UT
$$

##### Definition:  
$$
 X \rightarrow  T(x) \rightarrow U(T(x))
$$

| V | $$ \rightarrow $$ | W | $$  \rightarrow $$ | Z |
| :---: | :---: | :---: | :---:| :---: |
|  | T | | U | |
|$$ x$$ | |$$ T(x)$$| |$$U(T(x))$$|

##### Some Equation  
$$
(T_1 + T_2)U = T_1U + T_2U \\
T(U_1 + U_2) = TU_1 + TU_2 \\
(TU_1)U_2 = T(U_1U_2)
$$
