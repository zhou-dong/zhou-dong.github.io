---
layout: page
title: Logistic Regression
tagline:
categories: machine-learning

---

<pre><code>
x <- runif(100, 0, 10)
y <- runif(100, 0, 10)

plot(main="Tumour Or Not", xlab="tumour size", ylab="tumour or not", pch=19, col="red", col.axis="brown", fg="purple", bg="white", col.sub="orange", sub="Logistic Regression", x,y,col.main="blue",col.lab="brown", xlim=c(0,10), ylim=c(0,10))

abline(a=10, b=-1)
</code></pre>

<img src="/images/logistic-regression-2.png">

<img style="border: 1px solid purple" src="/images/logistic-regression-3.png">

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

<pre><code>
y <- c(0,0,0,0,1,1,1,1)
x <- c(-4,-3,-2,-1,1,2,3,4)
plot(main="Tumour Or Not", xlab="tumour size", ylab="tumour or not", pch=19, col="red", col.axis="brown", fg="purple", bg="white", col.sub="orange", sub="Logistic Regression", x,y,col.main="blue",col.lab="brown", xlim=c(-4,4), ylim=c(0,1.1))

</code></pre>

<img src="/images/logistic-regression-1.png">

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

---

$$
y=1 \ \ \text{if} \ h_{\theta} \ge 0.5 \\
\Rightarrow g(z) \ge 0.5 \\
\Rightarrow g(z) = g({\theta^Tx}) \\
\Rightarrow g(\theta^Tx) \ge 0.5 \\
\Rightarrow \theta^Tx \ge 0
$$

---

$$
y=0 \ \ \text{if} \ h_{\theta} < 0.5 \\
\Rightarrow g(z) < 0.5 \\
\Rightarrow g(z) = g({\theta^Tx}) \\
\Rightarrow g(\theta^Tx) < 0.5 \\
\Rightarrow \theta^Tx < 0
$$
