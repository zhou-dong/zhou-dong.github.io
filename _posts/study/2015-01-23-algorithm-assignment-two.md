---
layout: page
title: Algorithm Assignment Two
tagline: Class 5549, Master Theorem
---
{% include JB/setup %}

#### Master Theorem  

Let a $$ \ge $$ 1 and b > 1 be constants, let f(n) be a function. `T(n) = aT(n/b) + f(n)` ;  

1. If $$ f(n) = O(n^{\log_{b} a - \epsilon}) $$ for some constant $$ \epsilon > 0 $$, then $$ T(n) = \Theta(n^{\log_{b} a })$$.  
2. If $$ f(n) = \Theta(n^{\log_{b} a}) $$ then $$ T(n) = \Theta(n^{\log_{b} a} \lg n) $$.        
3. If $$ f(n) = \Omega(n^{\log_{b} a + \epsilon}) $$ for some constant $$ \epsilon > 0 $$, and if $$ af(n/b) \le cf(n)$$ for some constant c < 1 and all sufficiently large n, then $$ T(n) = \Theta(f(n))$$.    

#### 4-1 Recurrence examples  
Give asymptotic upper and lower bounds for T(n) in each of the following recurrences. Assume that T(n) is constant for n $$ \le $$ 2. Make your bounds as tight as possible, and justify your answers.

**a. $$ T(n)  =  2T(n/2) + n^4 $$ ;**  
$$ 
\ \ 1). \  a = 2, \ b = 2, \ f(n) = n^4 ; \\
\ \ 2). \  n^{\log_{b} a} = n^{\log_{2} 2} = n^1 ; \\
\ \ 3). \  f(n) = n^4 = \Omega(n^{\log_{b}a + \epsilon})  = \Omega(n^{1 + 3}) ;  \\
\ \ 4). \  \epsilon = 3 ; \\ 
\ \ Thus, T(n) = \Theta(n^4)
$$  

**b. $$ T(n)  =  T(n7/10) + n $$ ;**  
$$
\ \ 1). \  a = 1, \ b = 10/7, \ f(n) = n ; \\
\ \ 2). \  n^{\log_{b} a} = n^{\log_{10/7} 1} = n^{0} ; \\
\ \ 3). \  f(n) = n^1 = \Omega(n^{\log_{b}a + \epsilon})  = \Omega(n^{0 + 1}) ;  \\
\ \ 4). \  \epsilon = 1 ; \\
\ \ Thus, T(n) = \Theta(n)
$$ 

**c. $$ T(n)  =  16T(n/4) + n^2 $$ ;**    
$$
\ \ 1). \  a = 16, \ b = 4, \ f(n) = n^2 ; \\
\ \ 2). \  n^{\log_{b} a} = n^{\log_{4} 16} = n^2 ; \\
\ \ 3). \  f(n) = n^2 ; \\
\ \ Thus, T(n) = \Theta(n^2 \lg n)
$$

**d. $$ T(n)  =  7T(n/3) + n^2 $$ ;**  
$$
\ \ 1). \  a = 7, \ b = 3, \ f(n) = n^2 ; \\
\ \ 2). \  n^{\log_{b} a} = n^{\log_{3} 7} = n^{1.772} ; \\
\ \ 3). \  f(n) = n^2 = \Omega(n^{\log_{b}a + \epsilon})  = \Omega(n^{1.772 + 0.228}) ;  \\
\ \ 4). \  \epsilon = 0.228 ; \\
\ \ Thus, T(n) = \Theta(n^2)
$$ 

**e. $$ T(n)  =  7T(n/2) + n^2 $$ ;**  
$$
\ \ 1). \  a = 7, \ b = 2, \ f(n) = n^2 ; \\
\ \ 2). \  n^{\log_{b} a} = n^{\log_{2} 7} = n^{2.8074} ; \\
\ \ 3). \  f(n) = n^2 = \Omega(n^{\log_{b}a - \epsilon})  = \Omega(n^{2.8074 - 0.8074}) ;  \\
\ \ 4). \  \epsilon = 0.8074 ; \\
\ \ Thus, T(n) = \Theta(n^{\log_{2} 7})
$$  

**f. $$ T(n)  =  2T(n/4) + \sqrt{n} $$ ;**   
$$
\ \ 1). \  a = 2, \ b = 4, \ f(n) = 1/2 ; \\
\ \ 2). \  n^{\log_{b} a} = n^{\log_{4} 2} = n^{1/2} ; \\
\ \ 3). \  f(n) = n^{1/2} ;  \\
\ \ Thus, T(n) = \Theta(n^{1/2} \lg n) = \Theta(\sqrt{n} \lg n)
$$  

**g. $$ T(n)  =  T(n-2) + n^2 $$ ;**    
$$
\ \ 1). \  a = 7, \ b = 2, \ f(n) = n^2 ; \\
\ \ 2). \  n^{\log_{b} a} = n^{\log_{2} 7} = n^{2.8074} ; \\
\ \ 3). \  f(n) = n^2 = \Omega(n^{\log_{b}a - \epsilon})  = \Omega(n^{2.8074 - 0.8074}) ;  \\
\ \ 4). \  \epsilon = 0.8074 ; \\
\ \ Thus, T(n) = \Theta(n^{\log_{2} 7}) = 
$$

