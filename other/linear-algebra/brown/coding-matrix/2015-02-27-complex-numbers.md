---
layout: page
title: Introduction to complex numbers
tagline: Note Two of Coding the Matrix
categories: python matrix
---



Solutions to $$ x^2 = -1 $$ ?  
Mathematicians invented *i* to be one solution.

Example: $$ x^2 = -1 $$ *solution is* $$ x = 3i $$

Numbers such as $$ i, -i, 3i, 2.17i $$ are called **imaginary** numbers.

Solution to $$ (x-1)^2  = -9 ? \ x = 1 + 3i $$

A real number plus an imaginary number is a **complex number**.  
A real number has **real part** and an **imgianary part**.

<pre class="prettyprint linenums">
# (x-1)**2 = -9, x = 1 + 3j
x = 1 + 3j

print x
print (x-1)**2
print type(x)

# ax + b = c
def solve(a, b, c):
    return (c-b)/a

# 10x + 5 = 30
print solve(10.0, 5.0, 30.0)

# (10 + 5i)x + 5 = 20
print solve(10+5j, 5.0, 20.0)
</pre>
