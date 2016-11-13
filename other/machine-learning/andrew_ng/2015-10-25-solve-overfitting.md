---
layout: page
title: Solving Overfitting
tagline:
categories: machine-learning

---

#### 1. Regularization

$$
J(\theta) = \frac{1}{2m} \Biggr[\sum_{i=1}^m (h_{\theta}x^{(i)}-y^{(i)})^2 - \lambda \sum_{j=1}^n \theta_j^2 \Biggr]
$$

#### 2. Cross Validation

Cross-validation for detecting and preventing overfitting

<img src="https://qph.is.quoracdn.net/main-qimg-33774ab551d31370fbe2a4fa57286781?convert_to_webp=true"/>

---

#### choose data size

- Training size and Cross-validation Size

<img src="http://1.bp.blogspot.com/-ii5sPXFN0K4/T9Wrs34LiHI/AAAAAAAAAwI/K6Eu-97LY1A/s1600/p2.png" />

- If Learning Algorithm is suffer from overfitting(high Variance), getting more data is likely to help.

<img src="http://4.bp.blogspot.com/-uWXoQpZpdOs/T9WvcIcjpCI/AAAAAAAAAwc/Hr3pn8RPQz4/s1600/p3.png" />
