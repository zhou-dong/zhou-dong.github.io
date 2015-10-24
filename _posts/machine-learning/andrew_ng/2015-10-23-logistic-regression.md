---
layout: page
title: Logistic Regression
tagline:
categories: machine-learning

---

<pre><code>
x <- c(0:7)
y <- c(0,0,0,0,1,1,1,1)

plot(main="Tumour Or Not", xlab="tumour size", ylab="tumour or not", pch=19, col="red", col.axis="brown", fg="purple", bg="white", col.sub="orange", sub="Logistic Regression", x,y,col.main="blue",col.lab="brown", xlim=c(0,7), ylim=c(0,1.1))

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

predict:

$$
y=1 \ \ \text{if} \ h_{\theta} \ge 0.5 \\
y=0 \ \ \text{if} \ h_{\theta} < 0.5
$$
