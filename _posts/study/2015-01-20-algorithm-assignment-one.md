---
layout: page
title: Algorithm Assignment One
tagline: Recursion, Big O natation
---
{% include JB/setup %}


#### Natations:   
 - $$ O $$ : Less than (Worst Situation)
 - $$ o $$ : Less or Equal
 - $$ \Omega $$ : Bigger than (Best Situation)
 - $$ \omega $$ : Big or Equal 
 - $$ \Theta $$ : Between { $$ O,\ \ \Omega $$ }  

#### Assignment Zero:  

##### $$ T(n) = aT(n/b) + f(n) $$  

#####Example :
**Let:** $$ a=2, \ b=2, \ f(n) = 1 $$   

|Step| Function One | Equal | Functin Two |
|:---:| :--- | :---: | : --- |
| 1 | $$ T(n) = 2T(n/2) + 1 $$ | = |  $$ 2^1T(n/2^1) + \log_{2}0 $$ |  
| 2 | $$ T(n) = 4T(n/4) + 1 + 1 $$ | = | $$ 2^2T(n/2^2) + \log_{2}1 $$ |
| 3 | $$ T(n) = 8T(n/8) + 1 + 1 + 1 $$ | = | $$ 2^3T(n/2^3) + \log_{2}2 $$ | 
| 4 | $$ T(n) = \ \ \ \ \ \ \  \vdots $$ | = | $$ \ \ \ \ \ \ \  \vdots $$ |
| 5 | $$ T(n) = nT(n/n) + \log_{2}(n-1) $$ | = | $$ 2^{\log_{2}n}T(n/2^{\log_{2}n}) + \log_{2}(n-1) $$ |

##### Step1 + Step2 + $$ \cdots $$ + Step5 : 
$$ T(n) = \sum_{i=1}^{\log_{2}n}2^iT(n/2^i)  + \sum_{i=0}^{\log_{2}(n-1)}i $$

#### Assignment One:
**Indicate, for each pair of expressions(A, B) in the table below, whether A is $$ O, o, \Omega, \omega \ or \ \Theta $$ of B. Assume that $$ k \geq 1, \epsilon > 0, and \ c > 1 $$ are constants. Your answer should be in the form of the table with “yes” or “no” written in each box.**

| &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp; A &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; B &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; $$ O $$ &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; $$ o $$ &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; $$ \Omega $$ &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; $$ \omega $$ &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; $$ \Theta $$ &nbsp;&nbsp;&nbsp; |
|:---|:---:|:---:|:---:|:---:|:---:|:---:| :---: | 
| a. | $$ \lg^kn $$ | $$ n^\epsilon $$ | yes | yes | no | no | no | 
| b. | $$ n^k $$ | $$ c^n $$ | yes | yes | no | no | no |
| c. | $$ \sqrt{n} $$ | $$ n^{\sin n} $$ | no | no | no | no | no |
| d. | $$ 2^n $$ | $$ 2^{n/2} $$ | no | no | yes | yes | no | 
| e. | $$ n^{\lg c} $$ | $$ c^{\lg n} $$ | yes | no | yes | no | yes | 
| f. | $$ \lg(n!) $$ | $$ \lg(n^n) $$ | yes | no | yes | no | yes |

#### Assigement Two:
**a. Rank the following functions by order of growth; that is, find an arrangement $$ g_1, g_2, \cdots ,g_{30} $$ of the functions satisfying $$ g_1 = \Omega(g_2), g_2 = \Omega(g_3), \cdots , g_{29} = \Omega(g_{30}) $$. Partition your list into equivalence classes such that functions $$ f(n) $$ and $$ g(n) $$ are in the same class if and only if $$ f(n) = \Theta(g(n)) $$**

| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
|:---:|:---:|:---:|:---:|:---:| :---: |
| $$ \lg(\lg^* n) $$ | $$  2^{\lg^* n} $$ | $$ (\sqrt{2})^{\lg n} $$ | $$ n^2 $$ | $$ n! $$ | $$ (\lg n)! $$ |
| $$ (\frac{3}{2})^n $$ | $$ n^3 $$ | $$ \lg^2 n $$ | $$ \lg(n!) $$ | $$ 2^{2^n} $$ | $$ n^{1/\lg n}$$ | 
| $$ \ln\ln n $$| $$ \lg^* n $$ | $$ n2^n $$ | $$ n^{\lg\lg n} $$ | $$ \ln n $$ | 1 |
| $$ 2^{\lg n}$$ | $$ (\lg n)^{\lg n} $$ | $$ e^n $$ | $$ 4^{\lg n}$$ | $$ (n+1)! $$ | $$ \sqrt{\lg n}$$ |
| $$ \lg^*(\lg n) $$ | $$ 2^{\sqrt{2\lg n}} $$ | $$ n $$ | $$ 2^n $$ | $$ n \lg n $$ | $$ 2^{2^{n+1}}$$ |  

##### Answer:

| $$ 2^{2n+1} $$ |  > | $$  2^{2n} $$ | > | $$  (n+1)! $$|  > |  $$ n! $$ | > | $$ e^n $$ | > | 
| $$ n2^n $$ | > | $$ 2^n $$ | > | $$ (\frac{3}{2})^n $$ | > | $$ n^{\lg\lg n} $$ | = | $$ (\lg n)^{\lg n} $$ | > |
| $$ \lg(n!) $$ | > | $$ n^3 $$ | > | $$ n^2 $$ | = | $$ 4^{\lg n}$$ | > | $$ n \lg n $$ | =  |  
| $$ (\lg n)! $$ | > | $$ 2^{\lg n}$$ | = | $$ n $$ | > | $$ (\sqrt{2})^{\lg n} $$ | > | $$ 2^{\sqrt{2\lg n}} $$ | > | 
| $$ \lg^2 n $$ | > | $$ \ln n $$ | > | $$ \sqrt{\lg n}$$ |  > | $$ \ln\ln n $$ | >  | $$  2^{\lg^* n} $$ |  = | 
| $$ \lg^*(\lg n) $$ | = | $$ \lg^* n $$ | > | $$ \lg(\lg^* n) $$ | > | $$ n^{1/\lg n}$$ |  = | 1 |

**b. Give an example of a single nonnegative function $$ f(n) $$ such that for all functions $$ g_i(n) $$ in part $$ (a) $$, $$ f(n)$$ is neither $$ O(g_i(n))$$  nor $$ \Omega(g_i(n)) $$**
