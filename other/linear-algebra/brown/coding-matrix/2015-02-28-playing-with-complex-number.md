---
layout: page
title: Play with complex numbers
tagline: Note three of Coding the Matrix
categories: python matrix
---

{% include JB/setup %}

#### Complex number as points in the complex plane

Can interpret *real* and *imaginary* parts of a complex number as *x* and *y* coordinates.
Thus can interpret a complex number as a *point* in the plane.

<pre class="prettyprint linenums">
import matplotlib.pyplot as plt
import numpy as np

number_list = [2+2j, 3+2j, 1.75+1j, 2+1j, 2.25+1j, 2.5+1j, 2.75+1j, 3+1j, 3.25+1j]
for number in number_list:
    plt.scatter(number.real, number.imag)
plt.title("Interpert Complex Number")
plt.xlabel("Real number")
plt.ylabel("Imaginary number")
plt.show()
</pre>

#### Complex numbers as arrows

<pre class="prettyprint linenums">
z = -6 + 5j
plt.title("Complex as Arrow")
plt.xlabel("Real Number")
plt.ylabel("Imaginary Number")
plt.arrow(0, 0, z.real, z.imag)
plt.xlim(-10,10)
plt.ylim(-10,10)
plt.grid(True)
plt.show()
</pre>

#### Add two complex numbers

<pre class="prettyprint linenums">
z = x + y
plt.title("Complex Composition")
plt.xlabel("Real Number")
plt.ylabel("Imaginary Number")
plt.arrow(0, 0, x.real, x.imag, color='g')
plt.arrow(0, 0, y.real, y.imag, color='b')
plt.arrow(0, 0, z.real, z.imag, color='r')
plt.xlim(-3,6)
plt.ylim(-3,6)
plt.grid(True)
plt.show()
</pre>

#### Multiply complex numbers

<pre class="prettyprint linenums">
z = time * complex_number
plt.title("Multiply Complex")
plt.xlabel("Real Number")
plt.ylabel("Imaginary Number")
plt.arrow(0, 0, complex_number.real, complex_number.imag, color='b')
plt.arrow(0, 0, z.real, z.imag, color='y')
plt.xlim(-3,6)
plt.ylim(-3,6)
plt.grid(True)
plt.show()
</pre>

#### Rotate ninty degree

<pre class="prettyprint linenums">
 z = 1j * complex_number
plt.title("Multiply Complex")
plt.xlabel("Real Number")
plt.ylabel("Imaginary Number")
plt.arrow(0, 0, complex_number.real, complex_number.imag, color='b')
plt.arrow(0, 0, z.real, z.imag, color='y')
plt.xlim(-3,3)
plt.ylim(-3,3)
plt.grid(True)
plt.show()
</pre>

#### Rotate with $$\Theta$$ degree
Use: **Euler's formula**
