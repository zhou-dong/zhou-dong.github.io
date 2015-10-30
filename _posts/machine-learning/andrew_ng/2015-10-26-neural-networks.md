---
layout: page
title: Neural Networks
tagline:
categories: machine-learning

---

#### Introduction

总的来说，人工神经网络，可以看做分为3层：输入层、隐含层、输出层

下面以最简单的三层神经网络为例来描述人工神经网络：

- Neural Model: Logistic Unit

$$
g(z) = \frac{1}{1+e^{-(\theta^Tx)}}
$$

- 输入层

$$
x =
\begin{bmatrix}
x_0 \\
x_1 \\
\vdots \\
x_n
\end{bmatrix} \ \ \

\theta =
\begin{bmatrix}
\theta_0 \\
\theta_1 \\
\vdots \\
\theta_n
\end{bmatrix}
$$


- 隐含层

$$
z^{(2)} =
\begin{bmatrix}
z_0^{(2)} \\
z_1^{(2)} \\
\vdots \\
z_n^{(2)}
\end{bmatrix} \\
$$

$$
a_1^{(2)} = g(\theta_{10}^{(1)}x_0 + \theta_{11}^{(1)}x_1 + \cdots + \theta_{1n}^{(1)}x_n) \\

a_2^{(2)} = g(\theta_{20}^{(1)}x_0 + \theta_{21}^{(1)}x_1 + \cdots + \theta_{2n}^{(1)}x_n) \\

\vdots \\

a_m^{(2)} = g(\theta_{m0}^{(1)}x_0 + \theta_{m1}^{(1)}x_1 + \cdots + \theta_{mn}^{(1)}x_n)
$$

- 输出层

$$
h(x)=g(\theta_0^{(2)} a_0^{(2)} + \theta_1^{(2)} a_1^{(2)} + \cdots + \theta_n^{(2)} a_n^{(2)})
$$

#### Cost Function

---

#### Reference：

http://tieba.baidu.com/p/3013551686

http://www.cnblogs.com/heaad/archive/2011/03/07/1976443.html

https://github.com/ty4z2008/Qix/blob/master/dl.md
