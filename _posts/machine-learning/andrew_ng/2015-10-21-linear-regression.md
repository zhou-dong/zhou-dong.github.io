---
layout: page
title: Linear Regression
tagline: Model Representation, Cost Function, Gradient Descent
categories: machine-learning

---

#### Model Representation

<img src="/images/linear-regression-1.png">

<pre clas="r language"><code>
# Use R language to create plot

x <- c(1:6)
y <- c(1:6)

plot(main="Plot Recent House Sale", xlab="square feet (sq.ft.)", ylab="price ($)", pch=19, col="red", col.axis="brown", fg="purple", bg="white", col.sub="orange", sub="Relation between size and price", x,y,col.main="blue",col.lab="brown", xlim=c(0,7), ylim=c(0,7))

</code></pre>

---

#### Cost Function

<img src="/images/linear-regression-3.png">

<pre clas="r language"><code>
plot(main="Plot Recent House Sale", xlab="square feet (sq.ft.)", ylab="price ($)", pch=19, col="red", col.axis="brown", fg="purple", bg="yellow", col.sub="orange", sub="Relation between size and price", x,y,col.main="blue",col.lab="brown", xlim=c(0,7), ylim=c(0,7))

abline(a=1,b=3, col="blue")
abline(a=1,b=2, col="green")
abline(a=1,b=1, col="red")
abline(a=0,b=1, col="black")

</code></pre>

---

<img src="/images/linear-regression-2.png">

<pre clas="r language"><code>
model <- lm(y~x)

plot(main="Plot Recent House Sale", xlab="square feet (sq.ft.)", ylab="price ($)", pch=19, col="red", col.axis="brown", fg="purple", bg="yellow", col.sub="orange", sub="Relation between size and price", x,y,col.main="blue",col.lab="brown", xlim=c(0,7), ylim=c(0,7))

abline(model, col="blue")

</code></pre>

---

#### Gradient Descent

<img src="/images/linear-regression-4.png">

<pre clas="r language"><code>
x <- seq(-6,6,0.5)
f <- function(x)x^2
y <- f(x)
plot(main="Gradient Descent", x,y)
lines(loess.smooth(x,y),col='red',lwd=2)

</code></pre>

---
