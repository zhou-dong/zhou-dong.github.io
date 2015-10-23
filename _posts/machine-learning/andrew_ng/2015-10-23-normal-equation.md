---
layout: page
title: Normal Equation
tagline:
categories: machine-learning

---

### $$\theta = (X^TX)^{-1}X^Ty$$

---

#### $$ \theta \in R $$

$$
J_{(\theta)} = a \theta^2 + b \theta + c \\
\frac{\partial}{\partial \theta} J_{(\theta)} = 0 \\
\text{solve for } \theta
$$

#### $$ \theta \in R^{n+1} $$

$$

J_{(\theta_0, \theta_1, ... , \theta_m)} = \frac{1}{2m} \sum_{i=1}^m (h_{\theta} (x^{(i)}) - y^{(i)})^2 \\
\frac{\partial}{\partial \theta} J_{(\theta)} = \cdots = 0 \ \text{(for every j)} \\
\text{solve for } \theta_0, \theta_1, ... , \theta_n \\
\theta = (X^TX)^{-1}X^Ty
$$

---

$$
x^{(i)} =
\begin{bmatrix}
x_0^{(i)} \\
x_1^{(i)} \\
x_2^{(i)} \\
\vdots  \\
x_n^{(i)}
\end{bmatrix}
\in R^{n+1}
$$

$$
(x^{(i)})^T =
\begin{bmatrix}
x_0^{(i)}, x_1^{(i)}, \cdots, x_n^{(i)}
\end{bmatrix}
\in R^{n+1}
$$

$$
X_{m \times n} =
\begin{bmatrix}
(x^{(i)})^T
\end{bmatrix}
=
\begin{bmatrix}
(x^{(1)})^T \\
(x^{(2)})^T \\
(x^{(3)})^T \\
\vdots  \\
(x^{(m)})^T
\end{bmatrix}
\in R^{m}
$$

$$
\theta_{n \times 1} =
\begin{bmatrix}
\theta_0 \\
\theta_1 \\
\theta_2 \\
\vdots  \\
\theta_n
\end{bmatrix}
\in R^{n+1}
$$

$$
y_{m \times 1} =
\begin{bmatrix}
y^{(1)} \\
y^{(2)} \\
y^{(3)} \\
\vdots  \\
y^{(m)}
\end{bmatrix}
\in R^{m+1}
$$

$$
X_{m \times n} \theta_{n \times 1} = y_{m \times 1} \\
X \theta = y \\
X^T X \theta = X^T y \\
(X^T X)^{-1} (X^T X) \theta = (X^T X)^{-1} X^T y \\
\theta = (X^T X)^{-1} X^T y
$$

---

#### Normal Equation VS Gradient Descent

1. Gradient Descent
  - need to choose $$\alpha$$.
  - need many iterations.
  - works well even when $$n$$ is large.
2. Normal Equation
  - no need to choose choose $$\alpha$$.
  - do not need to iterate.
  - slow is $$n$$ is very large.
