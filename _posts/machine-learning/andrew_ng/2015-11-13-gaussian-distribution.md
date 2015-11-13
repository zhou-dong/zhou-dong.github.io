---
layout: page
title: Gaussian Distribution
tagline:
categories: machine-learning

---

Say $$x \in R$$ if x is a distributed Gaussian with mean $$\mu$$, variance $$\sigma^2$$

- 其中$$\mu$$是控制曲线的中心点，$$\mu$$ standard deviation
- $$\sigma$$是控制曲线的宽度

$$

P(x| \mu, \sigma^2) = \frac{1}{\sigma \sqrt{2 \pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}
\\
\mu = \frac{1}{m} \sum_{i=1}^m x^{(i)}
\\
\sigma^2 = \frac{1}{m} \sum_{i=1}^m (x^{(i)}-\mu)^2
$$
