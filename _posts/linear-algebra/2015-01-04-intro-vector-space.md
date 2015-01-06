---
layout: page
title: Introduction of Linear Algebra and Vector space 
tagline:  
---
{% include JB/setup %}


#### Definiton of Linear algebra

|Function|Is Linear Algebra|
|:---|:---:|
|$$ f(x) = ax $$ | yes |
|$$ f(x) = ax + b $$| no | 
|$$ f(x) = x^2 $$ | no |
|$$ f(x) = ax^2 + bxy + cy^2 $$| no |
|$$ f(\theta) = sin(\theta) $$ | no |


#### Vector space

#### Example 1:

##### Definiton of Two dimensional vector:
$$
a = (x_1, y_1) ;
b = (x_2, y_2) ;
$$

##### Plus:
$$
a + b  = (x_1 + x_1, y_1 + y_2) ;
$$

##### Mutiply:
$$
\alpha \cdot a = (\alpha \cdot x_1, \alpha \cdot y_1) ;
$$

#### Example 2:

##### Definition of Mulit dimensional vector:
$$
V = 
 \begin{Bmatrix}
  \begin{pmatrix}
   a_1 \\
   \vdots \\
   a_n
  \end{pmatrix}  
  a \in R, 1 \ll i \ll n; 
 \end{Bmatrix} ;
a, b \in V;
$$

##### Plus:
$$
a + b = 
 \begin{pmatrix}
  a_1 + b _1 \\
  \vdots \\
  a_n + b_n
 \end{pmatrix}
$$

##### Multiply:
$$
\alpha \cdot a = 
 \begin{pmatrix}
  \alpha \cdot a_1 \\
  \vdots \\
  \alpha \cdot a_n
 \end{pmatrix}
$$

#### Example 3:

##### Definiton of Matrix:
$$
V = 
 \begin{Bmatrix}
  \begin{pmatrix}
   a_{11} \cdots a_{1n} \\
   \vdots \ddots \vdots \\
   a_{m1} \cdots a_{mn}
  \end{pmatrix} ;
  a_{ij} \in R; 1 \ll i \ll n; 1 \ll j \ll m; 
 \end{Bmatrix} 
 ; A = (a_{ij}), B = (b_{ij}) \in V ;
$$

##### Plus:
$$
A + B = (a_{ij} + b_{ij}) ;
$$

##### Multiply:
$$
\alpha \cdot A = (\alpha \cdot a_{ij}) ;
$$

#### Example 4:

##### Definition of Function in a vector space:
$$
v = {f(f:S-->F)}
$$

##### Plus:
$$
f + g = h <==> h(x) = f(x) + g(x);
$$

##### Mutiply:
$$
\alpha \in F, f \in V;  (\alpha \cdot f)(s) = \alpha \cdot (f(s)); 
$$


#### Theme:
$$
-(ax) = (-a)x = a(-x)
$$
