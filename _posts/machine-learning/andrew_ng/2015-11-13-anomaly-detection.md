---
layout: page
title: Anomaly Detection
tagline: Density Estimation, Gaussian Distribution
categories: machine-learning

---

$$
x_1 \approx N(\mu_1, \sigma_1^2)
\\
x_2 \approx N(\mu_2, \sigma_2^2)
\\
x_3 \approx N(\mu_3, \sigma_3^2)
\\
\vdots
\\
x_n \approx N(\mu_n, \sigma_n^2)
\\
p(x) = p(x_1| \mu_1, \sigma_1^2)p(x_2| \mu_2, \sigma_2^2)p(x_3| \mu_3, \sigma_3^2) \cdots p(x_n| \mu_n, \sigma_n^2)
\\
=\prod_{j=1}^n p(x_j| \mu_j, \sigma_j^2)
$$


#### Anomaly Detection Algorithm

1. Choose features $$x_i$$ that you think might be indicative of anomalous example.
2. Fit parameters $$\mu_1,...,\mu_n, \ \sigma_1^2,...,\sigma_n^2$$
  - $$\mu_j = \frac{1}{m} \sum_{i=1}^m x_j^{(i)}$$
  - $$\sigma_j^2 = \frac{1}{m} \sum_{i=1}^m (x_j^{(i)} - \mu)^2 $$
3. Given new example x,  compute p(x):
  - $$p(x)=\prod_{j=1}^n p(x_j| \mu_j, \sigma_j^2)$$
4. Anomaly if $$ p(x) < \varepsilon $$

---

#### Gaussian Distribution

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

#### Transform other data distribution to Gaussian Distribution

$$
x_2 \leftarrow log(x_2 + c)\\
x_3 \leftarrow \sqrt{x_2}
$$

---

#### Multivariate Gaussian Distribution

- Don't model $$p(x_1) \ , p(x_2), \  p(x_n)$$ one by one.
- Model $$p(x)$$ all in one go.
- parameters:
  + $$\mu \in R^n$$ vector
  + $$\Sigma \in R^{n \times n}$$ Covariance Matrix
