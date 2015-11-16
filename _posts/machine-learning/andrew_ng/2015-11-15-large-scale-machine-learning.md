---
layout: page
title: Large Scale Machine Learning
tagline:
categories: machine-learning

---

Batch Gradient Descent

- classic way to do gradient descent

Stochastic Gradient Descent

1. Randomly shuffle dataset
2. Repeat for {i := 1,...,m} update the $$\theta$$

Mini-Batch Gradient Descent

1. Randomly shuffle dataset
2. Repeat for {i := 1,11,21,..,m}, every time use b items to update the $$\theta$$

Stochastic Gradient Descent Convergence

$$
\alpha = \frac{const1}{iterationNumner + const2}
$$

---

#### Online Learning

- method：
  + 可以借鉴Stochastic Gradient Descent（随机梯度下降）的思想。
- scenario:
  + Large data streaming coming into the application
  + Calculate one time then throw away
  + weight of different features were changed with times
  + 大量的数据源源不断的流入系统中
  + One time process
  + 随着时间的变化，不同的feature的权重会发生变化。（比如以前买汽车的话，马力比比重高，现在是否节能的比重更高）。

##### 在搜索中使用online learning (CTR: CLICK THROUGH RATE)

1. features choose
  - 关键字与query的匹配程度
  - 用户的搜索历史
  - facets
2. Implement Online Learning
  - 根据用户的query返回用户搜素的结果
  - 统计用户对搜索结果的点击结果
  - 根据用户的点击为（0/1），来训练不同feature的weight。
  - 可以使用Mini-Batch Gradient Descent

---

#### Map Reduce and Data Parallelism

可以使用Map-Reduce来实现Mini-Batch Gradient Descent
