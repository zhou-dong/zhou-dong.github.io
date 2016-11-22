---
layout: page
title: The Function and the Field
tagline: Note One of Coding the Matrix
categories: matrix python
---



#### Set terminology and Notation

- Set: and unordered collection of objects. Example: $$ \{ X, Y, Z \}$$
- $$ \in $$: indicates than an object belong to a set (equivalently, that the set contains the object). For example, $$ X \in \{X, Y, Z\}$$
- $$ A \subseteq B $$: Read this as "A is a subset of B". This measn A and B are sets, and every element of A is aslo an element of B.
- A = B: Two sets are equal if they contain the exactly the same elements. (There is no order among elements of a set.)
    + A convenient way to prove that A and B are equal is to prove that each is a subset of the other. The proof often consists two parts:
        1. a proof that $$ A \subseteq B, $$ and
        2. a proof that $$ B \subseteq A $$.

#### Set expressions:

In Mathese, we could write "the set of nonegative numbers" like that: $$ \{ x \in R: \  x \ge 0 \} $$

- The colon(":") stands for "such that".
- There are two parts of this expression:
    + the part before the colon: This part specifies where the elements of the set come from, and introduces a variable or variables that can be used in the second part.
    + the part after the colon: This gives a rule that restricts which elements specified in the first part actually get to make it into the set. 
- The analogous python expression is set `comprehension`:
- Python code:

<pre class="prettyprint linenums">
    S = {-4, 4, -3, 3, -2, 2, -1, 1, 0}
    result = {x for x in S if x >= 0}
    print result
    result: set([0, 1, 2, 3, 4])
</pre>

- you might see just $$ \{ x: x \ge 0 \}$$. For example: 
    + $$ \{ x: (x+1)(x-2) = 0 \}$$.
    + This time, the set consists of just two numbers, -1 and 2.

#### Set terminology and notation: Cartesian product

$$ A \times B$$ is the set of all pairs $$ (a, b) $$ where $$ a \in A$$ and $$ b \in B$$  
Example: for $$ A = \{ 1, 2 \}$$ and $$ B = \{ x, y \}, A \times B$$ is $$\{(1,x),(2,x)(1,y)(2,y)\} $$.

#### Tuples in set expressions

- $$ \{ (x,y) \in R \times R: y = x^2 $$ \} `equal` $$ \{ (x,y): y = x^2\} $$.
- $$ \{(x,y,z) \in R \times R \times R: x \ge 0, y \ge 0, z \ge 0 \} $$. `equal` $$ \{(x,y,z): x \ge 0, y \ge 0, z \ge 0\} $$.

#### The function

Informally, for each input element in a set A, a function assigns a single output element from another set B.

- A is called the `domain` of the function
- B is called the `co-domain`

**Definition**: The output of a given input is called the *image* of the input. The image of *q* under *a* function *f* is denoted *f(q)*.  
If *f(q) = r*, we say *q* maps to *r* under *f*. In Mathese, we write this as $$ q \mapsto r $$.

The set from which all the outputs are chosen is called the co-domain.  
We write: $$ f: D \to F $$  
when we want to say that **f** is a function with domain **D** and co-domain **F**.

**Definition**: The *image* of a function is the set of all images of inputs. Mathese: Im *f*.  
Example: Cosine Function **cos(x)**

cos: $$ R \to R $$, which means that domain is $$R$$ and the co-domain is $$R$$  
The image of *cos(x)*, Im *cos*, is $$ \{ x \in R: -1 \le x \le 1\}$$ 

**Definition**: For sets F and D, $$F^D$$ denotes all functions from D to F.

#### Identity function and composition

Indentity function: for any domain $$ D, id_D: D \to D$$, maps each domain element *d* to itself.

**Definition**: For functions $$ f: A \to B $$ and $$ g: B \to C $$, the *functional composition* of *f* and *g* is the function:  
$$ (g \ o \ f) : A \to C $$ defined by $$ (g \ o \ f)(x) = g(f(x))$$.  
Example: Composition of $$ g(y) = y^2 $$ and $$ f(x) = x +1 $$ is $$ (g \ o \ f)(x) = (x+1)^2$$.  
Proposition: $$ h \ o \ (g \ o \ f) = (h \ o \ g ) \ o \ f$$

#### Functional inverse

**Definition**: Functions *f* and *g* are functional inverses if *f o g* and *g o f* are defined and are indentity functions.  
Invertible functions are **one-to-one**.  
Invertible functions are **onto**.  
**Function Invertibility Theorem:** A function *f* is invertible if and only if it is one-to-one and onto.

