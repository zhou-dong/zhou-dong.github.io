---
layout: page
title: HeapSort Performance
tagline: HeapSort, Master Theorem
---


#### Steps of HeapSort:  
1. Create a CompleteBinaryTree Meanwhile heapify the tree.
2. Remove the root from the tree.
3. Switch the last leaf to the root.
4. Heapify the tree.
5. Recurisive the steps from 2 to 4 until tree is empty.

#### Master Theorem
Let a $$ \ge $$ 1 and b > 1 be constants, let f(n) be a function. `T(n) = aT(n/b) + f(n)` ;

1. If $$ f(n) = O(n^{\log_{b} a - \epsilon}) $$ for some constant $$ \epsilon > 0 $$, then $$ T(n) = \Theta(n^{\log_{b} a })$$.
2. If $$ f(n) = \Theta(n^{\log_{b} a}) $$ then $$ T(n) = \Theta(n^{\log_{b} a} \lg n) $$.
3. If $$ f(n) = \Omega(n^{\log_{b} a + \epsilon}) $$ for some constant $$ \epsilon > 0 $$, and if $$ af(n/b) \le cf(n)$$ for some constant c < 1 and all sufficiently large n, then $$ T(n) = \Theta(f(n))$$.

#### Evaluation with Master Theorem:
1. Heapify the n elements tree from the laste leaf will cost steps n.
2. EveryTime change the position from leaf to root will cost steps 1.
3. EveryTime Heapify the tree from root to leaf will cost step $$ \lg n$$.
4. Result: $$ T(n) = \Theta(n \lg n) $$
