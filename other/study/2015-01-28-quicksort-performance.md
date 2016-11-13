---
layout: page
title: QuickSort Performance
tagline: QuickSort, Master Theorem
---
{% include JB/setup %}

#### Description of QuickSort:   
1. Find a pivot.
2. Scan the elements of array from the end, and compare each with pivot if it is bigger than pivot stop remember element.
3. Scan the elements of array from the begin, and compare each with pivot if it is smaller than pivot stop and remember element.
4. Switch two elements of step 2 and step 3.
5. keep doing step 2-4 until pivot in the middle, which means all the elements in the left of pivot smaller than pivot and all the elements in the right side of pivot bigger than pivot.
6. Recursive doing the 1-5, until all the number sorted.

#### Summary:  
* It is kind of `divide and conquer` method.
* I think it is similar with ShellSort but more effiency.
 - ShellSort every time change two place of elements, so it is better than sort one element by one time.
 - QuickSort every time change two place of elements meanwhile fixed one position of the element, it is brilliant.

#### Master Theorem:  
Let a $$ \ge $$ 1 and b > 1 be constants, let f(n) be a function. `T(n) = aT(n/b) + f(n)` ;  

1. If $$ f(n) = O(n^{\log_{b} a - \epsilon}) $$ for some constant $$ \epsilon > 0 $$, then $$ T(n) = \Theta(n^{\log_{b} a })$$.  
2. If $$ f(n) = \Theta(n^{\log_{b} a}) $$ then $$ T(n) = \Theta(n^{\log_{b} a} \lg n) $$.  
3. If $$ f(n) = \Omega(n^{\log_{b} a + \epsilon}) $$ for some constant $$ \epsilon > 0 $$, and if $$ af(n/b) \le cf(n)$$ for some constant c < 1 and all sufficiently large n, then $$ T(n) = \Theta(f(n))$$.  

#### Evaluation with Master Theorem:  

- The most balance cast: pivot is the middle large of the array
- Prove: $$
     T(n) = aT(n/b) + f(n) \\ 
     a = 2 \\
     b = 2 \\
     f(n) = n \\
     T(n) = 2T(n/2) + n \\
     n^{\log_b a} = n^{\log_2 2} = n ^1 = n \\
     f(n) = n^{\log_b a} \\
     T(n) = \Theta(n \log_n)
$$

- Already sorted cast: pivot is the smallest or biggest of the array
- Prove: $$
     T(n) = T(n-1) + f(n) \\
     T(n) = O(n^2)
$$

#### Improvement:  
- Every time choose there elments.
- Choose middle one to be the pivot.
- Just can improve, but can not avoid worst cast.
- Best middle elements, the performance wiill be $$ n \lg n $$.
- One method: we can random pick the pivot, so in chance, we can avoid the bad case.
- There are some methods to find the middle, we will be talk later.
