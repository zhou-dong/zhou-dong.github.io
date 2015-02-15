---
layout: page
title: ML-NTU-F-08 Linear Regression, Logistic Regression
tagline: 
---
{% include JB/setup %}

#### Linear Regression

Description: 在二维空间找出一条线，或者三维空间找出一个面,分割这个Set。 

Mathese: $$ E_{in}(W) = \frac{1}{N} \sum_{n=1}^N (w^Tx_n - y_n)^2$$

Popular/historical error measure: squared error 

How to minimize the $$ E_{in} (W) $$

Matrix: $$ min E_{in}(W) = \frac{1}{N} \begin{Vmatrix} Xw - y \end{Vmatrix}^2 $$

他是一个convex function，所以我们能找到极值点。

应该是求导值（或者梯度的意思）应该是0.

求导个人理解是曲线加速的方向。

*在向量空间中求出梯度为0的点*就应该是极值点。

#### Linear Classification vs. Linear Regression

可以用Linear Rregression来做Linear classification

可以现在用linear regression现在初步的分割数据，然后再用linear classification

#### Logistic Regression


