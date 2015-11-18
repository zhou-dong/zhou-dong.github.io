---
layout: page
title: Evaluating Learning Algorithm
tagline:
categories: machine-learning

---

Cross Validation

1. randomly shuffle or reorder the data
2. partial data into training set and test set
3. learn parameter from training data
4. computer test set error

Model Selection (choose polynomial degree)

1. use different polynomial degree to train data
2. use test set to find which degree is most fit the data

Split data into three pieces (Train/Validation/Test Sets)

1. Training Set (60%)
2. Cross Validation Set (20%)
3. Test Set (20%)

---

Bias vs. Variance

- Bias (underfit)
  + $$J_{cv} (\theta) \approx J_{train} (\theta)$$
- Variance (overfit)
  + $$J_{cv} (\theta) >> J_{train} (\theta)$$

Regularization and Bias/Variance

- choose different $$\lambda$$ in cost function


---

- Cross-validation for detecting and preventing overfitting

<img src="https://qph.is.quoracdn.net/main-qimg-33774ab551d31370fbe2a4fa57286781?convert_to_webp=true"/>

- Training size and Cross-validation Size

<img src="http://1.bp.blogspot.com/-ii5sPXFN0K4/T9Wrs34LiHI/AAAAAAAAAwI/K6Eu-97LY1A/s1600/p2.png" />

- If Learning Algorithm is suffer from overfitting(high Variance), getting more data is likely to help.

<img src="http://4.bp.blogspot.com/-uWXoQpZpdOs/T9WvcIcjpCI/AAAAAAAAAwc/Hr3pn8RPQz4/s1600/p3.png" />
