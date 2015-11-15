---
layout: page
title: Recommender Systems
tagline: 根据爱好相似的人来推荐商品
categories: machine-learning

---


#### Content-based Recommender Systems （基于内容的商品推荐）

##### 相当于对每个人的记录做线性回归

##### Problem Formulation

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
\theta^Tx = y \\
(4)\\
\text{to learn} \ \theta^{(j)} \\
(5)\\
\min_{\theta^{(j)}} = \frac{1}{2m^{(j)}} \sum_{i:r(i,j)=1} ( (\theta^{(j)})^Tx^{(i)} - y^{(i,j)} )^2\\
(6) \\
\min_{\theta^{(j)}} = \frac{1}{2m^{(j)}} \sum_{i:r(i,j)=1} ( (\theta^{(j)})^Tx^{(i)} - y^{(i,j)} )^2 +
\frac{\lambda}{2m^j} \sum_{k=1}^n (\theta_k^{(i)})^2 \\
(7) \\
\min_{\theta^{(j)}} = \frac{1}{2} \sum_{i:r(i,j)=1} ( (\theta^{(j)})^Tx^{(i)} - y^{(i,j)} )^2 +
\frac{\lambda}{2} \sum_{k=1}^n (\theta_k^{(i)})^2 \\
$$

##### Optimization Algorithm

$$
\min_{\theta^{(1)},...,\theta^{(n_u)}} = \frac{1}{2} \sum_{j=1}^{n_u} \sum_{i:r(i,j)=1} ( (\theta^{(j)})^Tx^{(i)} - y^{(i,j)} )^2 +
\frac{\lambda}{2} \sum_{j=1}^{n_u} \sum_{k=1}^n (\theta_k^{(i)})^2 \\
$$

##### Then Use Gradient or Normal Equation

---

#### Collaborative Filtering

Given $$ \theta^{(1)}, ... , \theta^{(n_u)} $$ to learn $$ x^{(i)} $$

$$
\min_{x^{(i)}} = \frac{1}{2} \sum_{j:r(i,j)=1} ( (x^{(j)})^Tx^{(i)} - y^{(i,j)} )^2 +
\frac{\lambda}{2} \sum_{k=1}^n (x^{(i)})^2 \\

\min_{x^{(1)},...,x^{(n_m)}} = \frac{1}{2} \sum_{j=1}^{n_m} \sum_{j:r(i,j)=1} ( (\theta^{(j)})^Tx^{(i)} - y^{(i,j)} )^2 +
\frac{\lambda}{2} \sum_{i=1}^{n_m} \sum_{k=1}^n (x^{(i)})^2 \\
$$

Vectorization: Low Rank Matrix Factorization

Implement Detail: Mean Normalization
