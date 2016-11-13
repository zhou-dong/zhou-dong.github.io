---
layout: page
title: Training, Generaliztion, VC
tagline: Effective Lines, Dichotomy, VC Dimension
categories: machine-learning vc-dimension
---
{% include JB/setup %}

#### 1. Traing versus Testing

1. Effective number of Lines:
    - some time we can not dichot a set
    - how many lines can dichot a set
2. Dichotomies: Mini-hypotheses
    - dichotomy set: depend on inputs
    - growth function: remove dependence by taking max of all possible
    - finite, upper-bounded by $$ 2^n $$
    - growth function for positive pays
    - Convex set
3. Break Point
    - growth function: max number of dichotmies

---

#### 2. Theory of Generaliztion

Description: 举一反三

Detail:

1. REstriction of Break Point
    - bounding function: maximum number of length-N vectors with(o,x) while "no shatter" any length-k subvectors
2. Pictorial Proof

---

#### 3. VC Dimension

Description: maximum non-break point. 一个集合，在vc dimension在这个点上可以shatter某N个点

Example:

- positive rays: $$ d_{vc} = 1 $$
- positive intervals: $$ d_{vc} = 2 $$
- positive convex sets: $$ d_{vc} = \infty $$
- 2D perceptrons: $$ d_{vc} = 3 $$
