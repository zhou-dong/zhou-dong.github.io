---
layout: page
title: Logistic Regression
tagline:
categories: machine-learning

---

$$
h_{\theta} = \theta^Tx \\
y = 1 \ \text{if} \ \theta^Tx \ge 0 \\
y = 0 \ \text{if} \ \theta^Tx <0
$$

Take into Logistic Regression:

$$
g(h_{\theta}) = g(\theta^Tx) = 0.5 \\
y = 1 \ \text{if} \ \theta^Tx \ge 0 \\
y = 0 \ \text{if} \ \theta^Tx <0
$$

In Linear Regression, the hypothesis function is:

$$ h_{\theta}(x) = \theta^Tx $$

Sigmoid Function is:

$$ g(z) = \frac{1}{1+ e^{-z}} $$

Logistic Regression, the hypothesis function is:

$$
h_{\theta}(x) = g(\theta^Tx) =
\frac{1}{1 + e^{-(\theta^Tx)}}
$$

Decision Boundary

$$
h_{\theta}(x) = g(\theta^Tx) = p(y=1 \ | \ x, \theta)
$$

Predict:

$$
(1) \\
y=1 \ \ \text{if} \ h_{\theta} \ge 0.5 \\
\Rightarrow g(z) \ge 0.5 \\
\Rightarrow g(z) = g({\theta^Tx}) \\
\Rightarrow g(\theta^Tx) \ge 0.5 \\
\Rightarrow \theta^Tx \ge 0 \\
(2) \\
y=0 \ \ \text{if} \ h_{\theta} < 0.5 \\
\Rightarrow g(z) < 0.5 \\
\Rightarrow g(z) = g({\theta^Tx}) \\
\Rightarrow g(\theta^Tx) < 0.5 \\
\Rightarrow \theta^Tx < 0
$$

---

#### 逻辑回归的推导过程：

- 首先“逻辑回归”是“线性回归”的延续。其中$$\theta_0$$是截距，$$\theta_1$$是斜率。

$$
h_{\theta}(x) = \theta_0 + \theta_1x \ \ (\text{其中}\theta_0 \text{是截距, } \theta_1 \text{是斜率})
$$

- 线性回归也是可以拟合（0，1）问题的，但是线性回归的值y，可能会>1,或者<0: { y<0 or y$$\in$${0,1} or y>1 }。

$$
h_{\theta}(x) \in (-\infty, +\infty) \\
y = (0, 1)
$$

- 我们希望“线性回归”的区间在（0，1）之间。首先想到的是：使所有<0的值，都==0；所有>1的值，都==1。

$$
\text{if} \ h_{\theta}(x) < 0 \ \text{then} \ h_{\theta}(x) = 0 \\
\text{if} \ h_{\theta}(x) > 1 \ \text{then} \ h_{\theta}(x) = 1
$$

- 为了优化（平滑）上面的结果，我们想到了：$$e^x$$曲线，它的所有值，都大于0，但是它的值会>1。带入公式得到：

$$
h_{\theta}(x) = e^x = e^{(\theta_0 + \theta_1x)} > 0
$$

- 我们再对上面的结果，做优化：$$\frac{e^x}{e^x+1}$$，这样就得到了“逻辑回归”函数，也叫Sigmoid Function。

$$
h_{\theta}(x) = \frac{e^x}{e^x+1} = \frac{1}{1+e^{-x}} = \frac{1}{1+e^{(\theta_0 + \theta_1x)}} < 1
$$

- 最后我们得到一个大于0，小于1的，平滑的函数：Sigmoid Function或者叫做：Logistic Function。

$$
0 < \frac{1}{1+e^{(\theta_0 + \theta_1x)}} < 1 \ (\text{其中}\theta_0 \text{是截距, } \theta_1 \text{是斜率}) \\
0 < h_{\theta}(x) < 1
$$

- 在这里$$h_{\theta}(x) $$ 有特殊的含义：它表示x对应的f(x)取值为1的概率。所以对于输入的x，结果为1和0的概率分别是：

$$
p(y=1 \ | \ x;\theta) = h_{\theta}(x) \\
p(y=0 \ | \ x;\theta) = 1 - h_{\theta}
$$

#### 逻辑回归的Cost Function：

- 我们可以像“线性回归”一样，使用方差的和，来表示“期望函数”与“真实值之间的偏差”。

$$
J_{\theta} = \frac{1}{2m} \sum_{i=1}^m (h_{\theta}(x)^{i} - y^{i})^2 \\
h_{\theta}(x) - y = \frac{e^x}{e^x + 1} - 1 = \frac{e^x}{e^x + 1} - \frac{e^x+1}{e^x+1} = \frac{-1}{e^x+1}  \ (\text{if} \ y = 1)\\
h_{\theta}(x) - y = \frac{e^x}{e^x + 1} - 0 = \frac{e^x}{e^x + 1} =  \frac{1}{e^x+1}  \ (\text{if} \ y = 0)\\
(h_{\theta}(x) - y)^2 = (\frac{1}{e^x+1})^2 = (e^x+1)^{-2} \ \text{where} \ y = (0,1) \\
J_{\theta} = \frac{1}{2m} \sum_{i=1}^m (e^x+1)^{-2}
$$

- 对上面的函数是一个“非凸函数”，有很多局部最优解，所以不能使用“梯度下降”。
- 需要用其它的思路来minimize cost function：“极大似然”。

$$
Cost(h_{\theta}(x), y) =
\begin{cases}
-\log(h_{\theta}(x)) \ \text{if} \ y = 1 \\
-\log(1- h_{\theta}(x)) \ \text{if} \ y = 0
\end{cases} \\
= (y^{(i)} \log(h_{\theta}(x^{(i)})) + (1-y^{(i)})\log(1-h_{\theta}(x^{(i)})))
$$

- 把上面的公式，写到同一个公式中。

- 使用“极大似然”推导cost function的过程

$$
p(y|x;\theta) = (h_{\theta}(x))^y(1-h_{\theta}(x))^{1-y} \\
$$

- 取似然函数为：

$$
L_{\theta} = \prod_{i=1}^m p(y^{(i)}|x^{(i)};\theta)
= \prod_{i=1}^m (h_{\theta}(x^{(i)}))^{y^{(i)}} (1-h_{\theta}(x^{(i)}))^{1-y^{(i)}}
$$

- 为了简化计算量，为似然函数取log，取对数可以得到对数似然度：

$$
l(\theta) = \log(L(\theta)) =
\sum_{i=1}^m (y^{(i)} \log(h_{\theta}(x^{(i)})) + (1-y^{(i)})\log(1-h_{\theta}(x^{(i)})))
$$

- 现在我们要求的就是可以是$$l(\theta)$$的值，为最大的$$\theta$$的值。

$$
\text{We wanna find } \theta \text{ let } l(\theta) \text{ to be maximized: } \\
\theta = \operatorname{arg} \max(l(\theta))
$$

- 这里我们要求最大值，可以用梯度上升法来求，也可以先对$$l(\theta)$$取负数，然后用梯度下降法来求最小值。

$$
J(\theta) = -\frac{1}{m} l(\theta)
$$

- 所以这里还用梯度下降法来最小值：

$$
\theta = \operatorname{arg} \min(l(\theta))
$$

#### 用“梯度下降”求使$$J(\theta)$$为最小值的$$\theta$$

$$
\theta_j := \theta_j - \alpha \frac{\partial}{\partial \theta_j} J_{(\theta)} \ (j=0...n)
$$


- Partial Derivative (1)

$$
\frac{\partial}{\partial x} (\log_ax) = \frac{1}{x \ln a}
$$

- Partial Derivative (2)

$$
\frac{\partial}{\partial x} e^x = e^x
$$

- Partial Derivative (3)

$$
h_{\theta}(x^{(i)}) = g(\theta^Tx^{(i)})  \\

\frac{\partial}{\partial x_i} g(\theta^Tx^{(i)}) =
\frac{\partial}{\partial x_i} (\frac{1}{1+e^{(\theta^Tx^{(i)})}}) \\
= (\frac{1}{1+e^{(\theta^Tx^{(i)})}})^2 e^{(\theta^Tx^{(i)})} \frac{\partial}{\partial x_i} (\theta^Tx^{(i)}) \\

= \frac{1}{1+e^{(\theta^Tx^{(i)})}} \frac{e^{(\theta^Tx^{(i)})}}{1+e^{(\theta^Tx^{(i)})}} \frac{\partial}{\partial x_i} (\theta^Tx^{(i)}) \\

= \frac{1}{1+e^{(\theta^Tx^{(i)})}} \frac{e^{(\theta^Tx^{(i)})}}{1+e^{(\theta^Tx^{(i)})}} x^{(i)}\\

= g(\theta^Tx^{(i)})(1-g(\theta^Tx^{(i)}))x^{(i)} \\

= h_{\theta}(x^{(i)})(1-h_{\theta}(x^{(i)}))x^{(i)}
$$

---

$$
\frac{\partial}{\partial \theta_j} J_{(\theta)} =
\frac{\partial}{\partial \theta_j} (-\frac{1}{m} \sum_{i=1}^m (y^{(i)} \log(h_{\theta}(x^{(i)})) + (1-y^{(i)})\log(1-h_{\theta}(x^{(i)})))) \\

= -\frac{1}{m} \sum_{i=1}^m (y^{(i)} \frac{1}{h_{\theta}(x^{(i)})} \frac{\partial}{\partial \theta_j}(h_{\theta}(x^{(i)})) - (1-y^{(i)}) \frac{1}{1-h_{\theta}(x^{(i)})} \frac{\partial}{\partial \theta_j}(h_{\theta}(x^{(i)}))) \\

= -\frac{1}{m} \sum_{i=1}^m (y^{(i)} \frac{1}{h_{\theta}(x^{(i)})} - (1-y^{(i)}) \frac{1}{1-h_{\theta}(x^{(i)})} ） \frac{\partial}{\partial \theta_j}(h_{\theta}(x^{(i)})） \\

= -\frac{1}{m} \sum_{i=1}^m (y^{(i)} \frac{1}{h_{\theta}(x^{(i)})} - (1-y^{(i)}) \frac{1}{1-h_{\theta}(x^{(i)})} ）h_{\theta}(x^{(i)})(1-h_{\theta}(x^{(i)}))x_j^{(i)} \\

= -\frac{1}{m} \sum_{i=1}^m (y^{(i)} (1-h_{\theta}(x^{(i)})) - (1-y^{(i)}) h_{\theta}(x^{(i)})）x_j^{(i)} \\

= -\frac{1}{m} \sum_{i=1}^m (y^{(i)} - h_{\theta}(x^{(i)})) x_j^{(i)} \\

= \frac{1}{m} \sum_{i=1}^m (h_{\theta}(x^{(i)}) - y^{(i)}) x_j^{(i)} \\
$$

$$
\theta_j := \theta_j - \alpha \frac{\partial}{\partial \theta_j} J_{(\theta)} \ (j=0...n) \\
\theta_j := \theta_j - \alpha \frac{1}{m} \sum_{i=1}^m (h_{\theta}(x_j^{(i)}) - y^{(i)}) x_j^{(i)}  \ (j=0...n) \\
\theta_j := \theta_j - \alpha \sum_{i=1}^m (h_{\theta}(x_j^{(i)}) - y^{(i)}) x_j^{(i)}  \ (j=0...n)
$$

- 如果“梯度上升”的话，与“梯度下降”的原理一样，公式可以改写为：

$$
\theta_j := \theta_j + \alpha \sum_{i=1}^m (y^{(i)} - h_{\theta}(x_j^{(i)})) x_j^{(i)}  \ (j=0...n)
$$

---

<pre><code>
x <- runif(100, 0, 10)
y <- runif(100, 0, 10)

plot(main="Tumour Or Not", xlab="tumour size", ylab="tumour or not", pch=19, col="red", col.axis="brown", fg="purple", bg="white", col.sub="orange", sub="Logistic Regression", x,y,col.main="blue",col.lab="brown", xlim=c(0,10), ylim=c(0,10))

abline(a=10, b=-1)
</code></pre>

<pre><code>
y <- c(0,0,0,0,1,1,1,1)
x <- c(-4,-3,-2,-1,1,2,3,4)
plot(main="Tumour Or Not", xlab="tumour size", ylab="tumour or not", pch=19, col="red", col.axis="brown", fg="purple", bg="white", col.sub="orange", sub="Logistic Regression", x,y,col.main="blue",col.lab="brown", xlim=c(-4,4), ylim=c(0,1.1))

</code></pre>

#### Reference：

http://blog.csdn.net/dongtingzhizi/article/details/15962797

http://tech.meituan.com/intro_to_logistic_regression.html
