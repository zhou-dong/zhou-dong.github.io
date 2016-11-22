---
layout: page
title: Linear and Nonlinear Classification
tagline: 
categories: machine-learning linear classification
---


#### Linear Classification

Basic: 

1. One class at a Time
2. Combine Binary Classifiers

Improve:

1. One class at a Time
2. **Soft** combine Binary Classifiers

Enhance:

1. **Sum of all the probability equal 1**
2. One class at a Time
3. Soft combine Classifiers
 
One versus

1. **Two class** at a time compare
2. Combine **Pairwise** Classifiers

---

#### Nonlinear Classification

Circular Separable:

- Equtation:
$$ 
    h(x) = sign(r \ -1 \cdot x_1^2 -1 \cdot x_2^2)  \\
    h(x) = sign(r \cdot 1 + \ (-1) \cdot x_1^2 + (-1) \cdot x_2^2) \\ 
    h(x) = sign(w_0z_0 + w_1z_1 + w_2z_2) \\
    h(x) = sign(w^Tz)
$$
- **特征的换：可以把一个平面内的点与圆半径的距离映射到向量空间中去.**
- Linear hypotheses in Z-space: circle, ellipse, hyperbola, constant
