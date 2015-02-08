---
layout: page
title: Perceptron Hypothesis
tagline: Machine Learning, Linear Classifier, When can Machines Learn? 
---
{% include JB/setup %}

#### Lecture 1: The learning problem
- $$ A $$ takes $$ D $$ and $$ H $$ to get $$ g $$

| Math Sign | Definition | Detail |
|:--:|:--:|:--:|
| $$ A $$ | Learning Algorithm| -- |
| $$ D:(x_1, y_1), \cdots, (x_n, y_n) $$ |  training examples | historical records | 
| $$ H $$ | Hypothesis set | -- |
| $$ g \approx f $$ | final hypothesis | "learned" formula to be useds |
| $$ f: X \rightarrow Y $$ | unknown target function | ideal credit approval formula |

#### Lecture 2: Learning to answer **Yes/No**
- Perceptron Hyphothesis Set
- Perceptron Learning Algorithm (PLA)
- Guarantee of PLA
- Non-Separable Data

#### A Simple Hypothesis Set: the "perceptron"
For $$ x = (x_1, x_2, \cdots, x_d) $$ **features of customer**, computer a weight `score` and

- approve credit if $$ \sum_{i=1}^d w_i x_i > threshold $$.
- deny credit if $$ \sum_{i=1}^d w_i x_i <  threshold $$.
- $$ y : \{ +1(good), -1(bad) \}, $$ **0** ignored - linear formula $$ h \in H $$ are

$$
 h(x) = sign((\sum_{i=1}^d w_i x_i) - threshold ) \\
 \ \ \ \ \ = sign((\sum_{i=1}^d w_i x_i) + (-threshold) \cdot (+1)) \\
 \ \ \ \ \ = sign((\sum_{i=1}^d w_i x_i) + w_0 \cdot x_0 ) \\
 \ \ \ \ \ = sign(\sum_{i=0}^d w_i x_i) \\
 \ \ \ \ \ = sign(w^T x) \\
$$.

#### $$ h(x) = sign(w_0 + w_1x_1 + w_2x_2 + \cdots + w_nx_n) $$
