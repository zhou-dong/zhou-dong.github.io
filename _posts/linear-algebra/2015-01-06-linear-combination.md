---
layout: page
title: Gauss Elimination
tagline:
---
{% include JB/setup %}

#### Subspace
$$
V = p(F) = \{a_nx^n + \cdots + a_1x^1 + a_0 : n \in N, a_i \in F, i = 0,1 \cdots n \} \\
W = p_n(F) = \{a_nx^n + \cdots + a_0: n-is-fixed , a_i \in F, i=0,1 \cdots n \} \\
W \in V
$$

#### Example 1:
$$
define: \\
u_1 = (1,2,1) \\
u_2 = (-2,-4,-2) \\
u_3 = (0,2,3) \\ 
u_4 = (2,0,3) \\
u_5 = (-3,8,16) \\
v = (2,6,8) \\
result: \\
x_1u_1 + x_2u_2 + x_3u_3 + x_4u_4 + x_5u_5 = v \\ 
method 1: \\
x_1 - 2x_2 + 0x_3 + 2x_4 - 3x_5 = 2 \\
2x_1 - 4x_2 + 2x_3 + 0x_4 - 8x_5 = 6 \\
x_1 - 2x_2 + 3x_3 + 3x_4 + 16x_5 = 8 \\
method 2: \\
x_1
\begin{pmatrix}
 1 \\
 2 \\
 1
\end{pmatrix}
+ x_2
\begin{pmatrix}
 -2 \\
 -4 \\
 -2
\end{pmatrix}
+ x_3
\begin{pmatrix}
 0 \\
 2 \\
 3
\end{pmatrix}
+ x_4
\begin{pmatrix}
 2 \\
 0 \\
 3
\end{pmatrix}
+ x_5
\begin{pmatrix}
 -3 \\
 8 \\
 16
\end{pmatrix}
= 
\begin{pmatrix}
 2 \\
 6 \\
 8
\end{pmatrix} \\
\left[\begin{array}{rrrrr|r}
1 & -2 & 0 & 2 & -3 & 2 \\
2 & -4 & 2 & 0 & 8 & 6 \\
1 & -2 & 3 & 3 & 16 & 8
\end{array}\right] 
\Rightarrow 
\left[\begin{array}{rrrrr|r}
1 & -2 & 0 & 2 & -3 & 2 \\
0 & 0 & 2 & -4 & 14 & 2 \\
1 & -2 & 3 & 3 & 16 & 8
\end{array}\right] 
\Rightarrow 
\left[\begin{array}{rrrrr|r}
1 & -2 & 0 & 2 & -3 & 2 \\
0 & 0 & 2 & -4 & 14 & 2 \\
0 & 0 & 3 & 1 & 19 & 6
\end{array}\right]
\Rightarrow
\left[\begin{array}{rrrrr|r}
1 & -2 & 0 & 2 & -3 & 2 \\
0 & 0 & 2 & -4 & 14 & 2 \\
0 & 0 & 0 & 7 & -2 & 3
\end{array}\right]
\Rightarrow \\
7x_4 - 2x_5 = 3 \\
2x_3 - 4x_4 + 14x_5 = 2 \\
x_1 - 2x_2 + 2x_4 - 3x_5 = 2
$$
 
#### Example 2:
$$
u_1 = x^3 -2x^2 - 5x -3 \\
u_2 = 3x^3 - 5x^2 - 4x - 9 \\
v = 2x^3 - 2x^2 + 12x -6 \\
v = 3x^3 - 2x^2 + 7x + 8 \\
result: \\
x_1u_1 + x_2u_2 = v \\
process: \\
\left[\begin{array}{rr|rr}
 1 & 3 & 2 & 3 \\
 -2 & -5 & -2 & -2 \\
 -5 & -4 & 12 & 7 \\
 -3 & -9 & -6 & 8
 \end{array}\right]
\Rightarrow 
\left[\begin{array}{rr|rr}
 1 & 3 & 2 & 3 \\
 0 & 1 & 2 & 4 \\
 0 & 11 & 22 & 22 \\
 0 & 0 & 0 & 17
 \end{array}\right]
\Rightarrow
\left[\begin{array}{rr|rr}
 1 & 3 & 2 & 3 \\
 0 & 1 & 2 & 4 \\
 0 & 0 & 0 & -22 \\
 0 & 0 & 0 & 17
 \end{array}\right]
\Rightarrow \\
x_2 = 2 \\
x_1 + 3x_2 = 2
$$

#### The first has sollution the second not. 
