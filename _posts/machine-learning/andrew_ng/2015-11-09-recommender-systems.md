---
layout: page
title: Recommender Systems
tagline: 根据爱好相似的人来推荐商品
categories: machine-learning

---

#### Problem Formulation

$$
(1) \\
n_u \ \text{no.users} \\
n_m \ \text{no.movies} \\
r_{(i,j)} = 1 \ \text{if user j has rated movie i} \\
y^{(i,j)} = \ \text{rating given by user j to movie i} \\
(2)\\
\text{features} = (x_1, x_2, ... , x_n) \\
x_1 = romance \\
x_2 = action \\
\vdots \\
x_n = xxx \\
(3)\\
\text{weight} = (\theta_1, \theta_2, ... , \theta_n) \\
\text{value} = y = \text{5/4/3/2/1} \\
\theta^Tx = y
$$

Collaborative Filtering

Content-based Recommender Systems （基于内容的商品推荐）

Vectorization: Low Rank Matrix Factorization

Implement Detail: Mean Normalization
