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
 \ \ \ \ \ \ = sign((\sum_{i=1}^d w_i x_i) + (-threshold) \cdot (+1)) \\
 \ \ \ \ \ \ = sign((\sum_{i=1}^d w_i x_i) + w_0 \cdot x_0 ) \\
 \ \ \ \ \ \ = sign(\sum_{i=0}^d w_i x_i) \\
 \ \ \ \ \ \ = sign(w^T x) 
$$.

#### $$ h(x) = sign(w_0 + w_1x_1 + w_2x_2 + \cdots + w_nx_n) $$

#### Perceptron Learning Algorithm
For $$ t = 0, 1, 2, \cdots $$

1. find a mistake of $$ w_t $$ called $$ (x_{n(t)}, y_{n(t)}) $$
    - **$$ sign(w_{t}^T x_{n(t)}) \neq y_{n(t)}$$.**
2. (try to) correct the mistake by
    - **$$ w_{t+1} \leftarrow w_{t} + y_{n(t)}x_{n(t)} $$.**
3. until no more mistake
    - **return last $$ w \ (called \ w_{PLA}) \ as \  g$$**

#### 中文解释
在不断的循环中:
 
1. 如果在第t轮的循环中发现$$ w_t $$对一个点$$ (x_{n(t)}, y_{n(t)}) $$的判断是错误的，即：**$$ sign(w_{t}^T x_{n(t)}) \neq y_{n(t)}$$**
2. 加入这个点$$ (x_{n(t)}, y_{n(t)}) $$对$$ w_t $$进行修正，即：**$$ w_{t+1} \leftarrow w_{t} + y_{n(t)}x_{n(t)} $$**
3. 直到没有错误点为止，返回结果**$$g = \ w \ (called \ w_{PLA})$$**


