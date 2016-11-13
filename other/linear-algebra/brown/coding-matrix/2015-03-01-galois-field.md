---
layout: page
title: Play with Galois Field
tagline: Note four of Coding the Matrix
categories: matrix python
---

{% include JB/setup %}

#### Decsciption: 

Galois Field 2: has just two element 0 and 1

Addition is like exclusive-or:
$$ 
    \begin{array}{c | c c } + & 0 & 1 \\
        \hline 
        0 & 0 & 1 \\
        1 & 1 & 0 \\
    \end{array}
$$

Multiplication is like ordinary mutipication:
$$ 
    \begin{array}{c | c c } \times & 0 & 1 \\
        \hline 
        0 & 0 & 0 \\
        1 & 0 & 1 \\
    \end{array}
$$

And: $$ a \cdot (b + c) = a \cdot b + a \cdot c $$

#### Application:
- Encription
- Network coding
