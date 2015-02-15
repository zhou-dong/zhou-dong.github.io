---
layout: page
title: ML-NTU-F-10 Regularization, Validation
tagline: 
---
{% include JB/setup %}

### Regularization

- Description:
    1. 我们可以把$$E(in)$$和regularizer加在一起
    2. minimizes augmented error, where the added regularizer effectively limits model complexity

- Regression with Constraint
    1. Constraint
    2. Softer constraint

---

### Validation

#### Model selection problemi, so many models:

- Classification:
    + PLA
    + pocket
    + linear regression
    + logistic regression
- transform:
    + linear
    + quadratic
    + poly-10
    + Legendre-poly-10
- regularizer
    + L2 regularizer
    + L1 regularizer
    + symmetry regularizer 

####  Validation

- Description:
    + 留一份手中的资料做测试集。
    + legeal cheeting
    + $$ E_{val}(h) $$.
- Method: 
    + Leave-one-out Cross Validation
    + V-Flod Cross Validation 

