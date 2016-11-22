---
layout: page
title: Perceptron Hypothesis
tagline: Machine Learning, Linear Classifier, Perceptron Learning Algorithm 
categories: machine-learning perceptron
---


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

**$$ h(x) = sign(w_0 + w_1x_1 + w_2x_2 + \cdots + w_nx_n) $$**

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

#### Guarantee of PLA

##### Linear Separable $$ D \Leftrightarrow $$ **exists perfect** $$w_t$$ such that **$$y_n = sign(w_t^T x_n)$$**  
$$w_t$$ perfect hence every $$x_n$$ correctly away from line:

- $$ y_{n(t)} w_f^T x_{n(t)} \ge  min \ y_n w_f^T x_n > 0 $$ by updating with any $$ (x_{n(t)}, y_{n(t)}) $$
- $$ w_f^T w_{t+1} = w_f^T(w_t + y_{n(t)} x_{n(t)}) \ge w_f^T w_t + min \ y_n w_f^T x_n > w_f^T w_t + 0 $$.

##### $$w_t$$ changed only when mistake ($$ w_t $$ Dose Not Grow Too Fast)

##### 两个向量内积越大夹角越小(长度不变的情况下)。

#### Non-Separable Data

##### Learning with **Noisy Data**
- Line with Noise Tolerance
    + 找出一条犯错误最少的分割线$$w_t$$
    + NP-hard to solve, unfortunately
- 使用贪心算法**pocket**
    + 保存当前为止最好的分割线$$w_t$$然后和其它策略想比较，如果更好就更新。
    + 不会自动停下来，所以需要设置挺下来的条件。(PLA是会自己停下来的)。
    + 效率比PLA要差。(PLA每次找一个点来修正，可是**pocket**会每次都对比所有的点来确认哪次效果更好)。
