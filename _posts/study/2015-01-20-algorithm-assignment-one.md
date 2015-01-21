---
layout: page
title: Algorithm Assignment One
tagline: Class 5549, Recursion, Big O Notation, Logarithm
---
{% include JB/setup %}

#### Notations:   
 - $$ O $$ : Less than (Worst Situation)
 - $$ o $$ : Less or Equal
 - $$ \Omega $$ : Bigger than (Best Situation)
 - $$ \omega $$ : Big or Equal 
 - $$ \Theta $$ : Between { $$ O,\ \ \Omega $$ }  

<!-- PDF page 77 -->  

#### Definition from book (page 56):  
 - $$\lg n = \log_{2} n $$ (binary logarithm) ,  
 - $$\ln n = \log_{e} n $$ (natural logarithm) ,  
 - $$\lg^k n = (\lg n)^k $$ (exponentiation) ,
 - $$\lg \lg n = \lg(\lg n) $$ (composition) .  

<!-- PDF page 79 -->

#### Definition of [ $$ \lg^* n $$ ] from book (page 58):  
 - $$\lg^* 2 = 1 $$ ,
 - $$\lg^* 4 = 2 $$ ,  
 - $$\lg^* 16 = 3 $$ ,  
 - $$\lg^* 65536 = 4 $$ ,  
 - $$\lg^* 2^{65536} = 5 $$ .  
 - **Translated from book by me(Dong Zhou)**:  
 - $$\lg^* 2^{2^0} = 1 $$ ,  
 - $$\lg^* 2^{2^1} = 2 $$ ,  
 - $$\lg^* 2^{2^2} = 4 $$ ,
 - $$\lg^* 2^{2^4} = 4 $$ ,
 - $$\lg^* 2^{2^{16}} = 5 $$ .

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

##### a. compare between $$ \lg^kn $$ and $$ n^\epsilon $$
 - $$\lim_{n \to \infty} \frac{\lg^k n}{n^\epsilon} = \lim_{n \to \infty} \frac{(\lg n)^k}{n^\epsilon} \approx \lim_{n \to \infty} \frac{\ln (\lg n)^k}{\ln n^\epsilon} = \lim_{n \to \infty} \frac{k \ln(\lg n)}{\epsilon\ln n} = \lim_{n \to \infty} (\frac{k}{\epsilon} \cdot \frac{\ln lg n}{\ln n})  \approx \lim_{n \to \infty} \frac{\ln \lg n}{\ln n} \approx \lim_{n \to \infty} \frac{\lg n}{ n} = 0 $$ .

##### b. compare between $$ n^k $$ and $$ c^n $$
 - $$\lim_{n \to \infty} \frac{n^k}{c^n} \approx \lim_{n \to \infty} \frac{\ln n^k}{\ln c^n} = \lim_{n \to \infty} \frac{k\ln n}{n\ln c} =  \lim_{n \to \infty} (\frac{k}{\ln c} \cdot \frac{\ln n}{n}) \approx  \lim_{n \to \infty} \frac{\ln n}{n} = 0 $$ .  

##### c. compare between $$ \sqrt{n} $$ and $$ n^{\sin n} $$  
 - $$\sin n $$ in range [-1, 1]  
 - when $$\sin n = 1, \lim_{n \to \infty} \frac{n}{n^{1/2}} = \lim_{n \to \infty} n^{1/2} = \infty $$  ,
 - when $$\sin n = -1, \lim_{n \to \infty} \frac{n^{-1}}{n^{1/2}} = \lim_{n \to \infty} \frac{1}{n^{3/2}} = 0 $$  ,

##### d. compare between $$ 2^n $$ and $$ 2^{n/2} $$
 - $$\lim_{n \to \infty} \frac{2^n}{2^{n/2}}  = \lim_{n \to \infty} 2^{n/2} = \infty $$  .

##### e. compare between $$ n^{\lg c} $$ adn  $$ c^{\lg n} $$  
 - assume $$ n^{\lg c} = c^{\lg n} $$ both side lg  
 - $$(\lg n)^{\lg c}  = (\lg c)^{\lg n}$$  ,
 - $$(\lg c)(\lg n) = (\lg n)(\lg c)$$ ,   

##### f. compare between $$ \lg(n!) $$ and $$ \lg(n^n) $$  
1. $$\lg n^n = n\lg n$$ ;
2. $$\lg (n!) = \lg n + \lg (n-1) + \cdots + \lg 1 = \sum_{i=1}^n \lg i $$ ;
  - $$\sum_{i=1}^n \lg i \le \sum_{i=1}^n \lg n  = n\lg n$$ ;   
  - $$ \lg (n!) = O(n\lg n) $$ ;
  - $$\sum_{i=1}^n \lg i \ge \sum_{i=1 + n/2}^n \lg n/2  = (n/2)\lg (n/2) $$ ;
  - $$ \lg (n!) = \Omega(n\lg n) $$ ;

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

| $$ 2^{2^{n+1}} $$ |  > | $$  2^{2^n} $$ | > | $$  (n+1)! $$|  > |  $$ n! $$ | > | $$ e^n $$ | > | 
| $$ n2^n $$ | > | $$ 2^n $$ | > | $$ (\frac{3}{2})^n $$ | > | $$ n^{\lg\lg n} $$ | = | $$ (\lg n)^{\lg n} $$ | > |
| $$ \lg(n!) $$ | > | $$ n^3 $$ | > | $$ n^2 $$ | = | $$ 4^{\lg n}$$ | > | $$ n \lg n $$ | =  |  
| $$ (\lg n)! $$ | > | $$ 2^{\lg n}$$ | = | $$ n $$ | > | $$ (\sqrt{2})^{\lg n} $$ | > | $$ 2^{\sqrt{2\lg n}} $$ | > | 
| $$ \lg^2 n $$ | > | $$ \ln n $$ | > | $$ \sqrt{\lg n}$$ |  > | $$ \ln\ln n $$ | >  | $$  2^{\lg^* n} $$ | > | 
| $$ \lg^* n $$ | > | $$ \lg^* (\lg n) $$ | > | $$ \lg(\lg^* n) $$ | > | $$ n^{1/\lg n}$$ | > | 1 |

##### Detail:  
 - $$ \lim_{n \to \infty} \frac{(n+1)!}{2^{2^n}} \approx \lim_{n \to \infty} \frac{\lg (n+1)!}{\lg 2^{2^n}} = \lim_{n \to \infty} \frac{(n+1) + n + \cdots + 1}{2^n} = \lim_{n \to \infty} \frac{(n+1)(n+2)}{2^{n-1}} \le \lim_{n \to \infty} \frac{(n+2)^2}{2^{n-1}} \approx \lim_{n \to \infty} \frac{\lg (n+2)^2}{\lg 2^{n-1}} = \lim_{n \to \infty} \frac{2\lg (n+2)}{n-1}$$ ,  
 $$ \approx \lim_{n \to \infty} \frac{\lg (n + 2)}{n-1}  \approx \lim_{n \to \infty} \frac{\lg n}{n} = 0  $$  ;    

 - $$ \lim_{n \to \infty} \frac{n2^n}{e^n} \approx  \lim_{n \to \infty} \frac{\ln n2^n}{\ln e^n} = \lim_{n \to \infty} \frac{\ln n + n\ln 2}{n} = \lim_{n \to \infty} (\frac{\ln n}{n} + \ln 2) \approx \lim_{n \to \infty} \frac{\ln n}{n} = 0 $$ ;  

 - $$\lim_{n \to \infty} \frac{(\lg n)^{\lg n}}{(3/2)^n} \approx \lim_{n \to \infty} \frac{\lg n(\lg \lg n)}{n \lg (3/2)} \approx \lim_{n \to \infty} \frac{\lg n(\lg \lg n)}{n} = \lim_{n \to \infty} \frac{\lg n(\lg \lg n)}{\sqrt{n}\sqrt{n}} \le \lim_{n \to \infty} \frac{(\lg n)^2}{\sqrt{n}\sqrt{n}} \approx \lim_{n \to \infty} \frac{\lg n}{\sqrt{n}} \approx \lim_{n \to \infty} \frac{2\lg \lg n}{1/2 \lg n} = \lim_{n \to \infty} \frac{4\lg \lg n}{\lg n} = 0 $$  ; 

 - $$ n^{\lg \lg n} = (2^{\lg n })^{\lg \lg n} = 2^{\lg n \lg \lg n} = (2^{\lg \lg n})^{\lg n} = (\lg n)^{\lg n}$$ ;

 - $$ \lim_{n \to \infty} \frac{\lg (n!)}{(\lg n)^{\lg n}} \le \lim_{n \to \infty} \frac{\lg n^n}{(\lg n)^{\lg n}} = \lim_{n \to \infty} \frac{n\lg n}{(\lg n)^{\lg n}} \approx \lim_{n \to \infty} \frac{\lg n + \lg \lg n}{\lg n \lg \lg n} = \lim_{n \to \infty} (\frac{1}{\lg \lg n} + \frac{1}{\lg n}) = 0 $$ ;  

 - $$ 4^{\lg n} = (2^2)^{\lg n} = 2^{2\lg n} =  2^{\lg^{n^2}} = n^2 $$ ;

 - $$ n^{\sqrt{2/\lg n}} = (2^{\lg n})^{\sqrt{2/\lg n}} = 2^{\lg n \sqrt{2/\lg n}} = 2^{\sqrt{2\lg n}} $$ ;

 - $$ n = 2^{\lg n} $$ ; 

 - $$\lim_{n \to \infty} \frac{\sqrt{\lg n}}{\ln n} \approx \lim_{n \to \infty} \frac{1/2 \ln \lg n}{\ln \ln n} \approx \lim_{n \to \infty} \frac{\ln \lg n}{\ln \ln n} \approx \lim_{n \to \infty} \frac{\lg n}{\ln n} = 0 $$ ;  

 - $$ (\sqrt{2})^{\lg n} = 2^{1/2 \lg n} = (2^{\lg n})^{1/2} = n^{1/2} = \sqrt{n}$$ ;  

 - $$\lim_{n \to \infty} \lg(\lg^*n) = \lim_{n \to \infty} \lg 5$$ less than 3 ;     
   $$\lim_{n \to \infty} \lg^* (\lg n) = \lim_{n \to \infty} \lg^* \lg n $$ could be 4 or 5 ;    

 - $$ n^{1/{\lg n}} = (2^{\lg n})^{1/{\lg n}} = 2^1 = 2 $$ ;

**b. Give an example of a single nonnegative function $$ f(n) $$ such that for all functions $$ g_i(n) $$ in part $$ (a) $$, $$ f(n)$$ is neither $$ O(g_i(n))$$  nor $$ \Omega(g_i(n)) $$**

##### Answer:   
 - **Could be bigger than $$ 2^{2n+1} $$ and less than 1**  
 - **$$ f(n) = 2^{3n+1}(1 + \sin n) $$ or**  
 - **$$ f(n) = 2^{2n+3}(1 + \cos n) $$**

##### i am reading thing in here!
