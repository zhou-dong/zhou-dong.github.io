---
layout: page
title: Linear Regression
tagline: Model Representation, Cost Function, Gradient Descent
categories: machine-learning

---

#### Model Representation

<pre clas="r language"><code>
# Use R language to create plot

x <- c(1:6)
y <- c(1:6)

plot(main="Plot Recent House Sale", xlab="square feet (sq.ft.)", ylab="price ($)", pch=19, col="red", col.axis="brown", fg="purple", bg="white", col.sub="orange", sub="Relation between size and price", x,y,col.main="blue",col.lab="brown", xlim=c(0,7), ylim=c(0,7))

</code></pre>

<img src="/images/linear-regression-1.png">

We have a dataset:

$$
d_1 = \{1, 1\} \\
d_2 = \{2, 2\} \\
d_3 = \{3, 3\} \\
d_4 = \{4, 4\} \\
d_5 = \{5, 5\} \\
d_6 = \{6, 6\}
$$

We can find a line can fitting all these data, which is:

$$
f(x) = w_0 + w_1x
$$

---

<pre clas="r language"><code>
model <- lm(y~x)

plot(main="Plot Recent House Sale", xlab="square feet (sq.ft.)", ylab="price ($)", pch=19, col="red", col.axis="brown", fg="purple", bg="yellow", col.sub="orange", sub="Relation between size and price", x,y,col.main="blue",col.lab="brown", xlim=c(0,7), ylim=c(0,7))

abline(model, col="blue")

</code></pre>

<img src="/images/linear-regression-2.png">

In this plot, the scope is:

$$
f(x) = 0 + 1 \cdot x
$$

---

#### Cost Function

<pre clas="r language"><code>
plot(main="Plot Recent House Sale", xlab="square feet (sq.ft.)", ylab="price ($)", pch=19, col="red", col.axis="brown", fg="purple", bg="yellow", col.sub="orange", sub="Relation between size and price", x,y,col.main="blue",col.lab="brown", xlim=c(0,7), ylim=c(0,7))

abline(a=1,b=3, col="blue")
abline(a=1,b=2, col="green")
abline(a=1,b=1, col="red")
abline(a=0,b=1, col="black")

</code></pre>

<img src="/images/linear-regression-3.png">

$$

total \ deviation \ is: \ \sum_{x=1}^6 (f_{\theta}(x)-y)^2 \\
to \ general \ is: \ \sum_{x=i}^m (f_{\theta}(x)-y)^2 \\
we \ can \ rewrite \ to: \frac{1}{m} \sum_{x=i}^m (f_{\theta}(x)-y)^2 \\
also \ we \ can \ rewrite \ to: \frac{1}{2m} \sum_{x=i}^m (f_{\theta}(x)-y)^2 \\
we \ define: \ J_{\theta} = \frac{1}{2m} \sum_{x=i}^m (f_{\theta}(x)-y)^2 \\
we \ wanna \ minimize \ J_{\theta} : \theta = \operatorname{arg} \min{(J_{\theta})}
$$

---

#### Gradient Descent

<pre clas="r language"><code>
x <- seq(-6,6,0.5)
f <- function(x)x^2
y <- f(x)
plot(main="Gradient Descent", x,y)
lines(loess.smooth(x,y),col='red',lwd=2)

</code></pre>

<img src="/images/linear-regression-4.png">

#### Partial Derivative

$$
J_{(\theta_0, \ \theta_1)} = (f_{\theta}(x)-y)^2 = (f_{\theta}(x))^2 - 2f_{\theta}(x)y- y^2 =
(w_0 + w_1x)^2 - 2(w_0+w_1x)y - y^2 =
w_0^2 + 2w_0w_1x + w_1^2x^2 - 2w_0y - 2w_1xy - y^2
$$

$$
J_{(w_0, \ w_1)} = w_0^2 + 2w_0w_1x + w_1^2x^2 - 2w_0y - 2w_1xy - y^2
$$

$$
\frac{\partial J_{(w_0, \ w_1)}}{\partial w_0} = 2w_0 + 2w_1x -2y = 2(w_0 + w_1x - y) = 2(f_{\theta}(x) - y) \\
\frac{\partial J_{(w_0, \ w_1)}}{\partial w_1} = 2w_0x + 2w_1x^2 - 2xy = 2x(w_0 + w_1x - y) = 2x(f_{\theta}(x) - y)
$$

---

$$
\theta := \theta - \alpha \frac{\partial J_{\theta}}{\partial \theta} \\
\theta_0 := \theta_0 - \alpha \frac{\partial J_{(\theta_0, \ \theta_1)}}{\partial \theta_0} \\
\theta_1 := \theta_1 - \alpha \frac{\partial J_{(\theta_0, \ \theta_1)}}{\partial \theta_1} \\

\theta_0 := \theta_0 - \alpha \frac{1}{m} \sum_{i=1}^m(f_{\theta}(x) - y) \\
\theta_1 := \theta_1 - \alpha \frac{1}{m} \sum_{i=1}^m(f_{\theta}(x) - y)x
$$
