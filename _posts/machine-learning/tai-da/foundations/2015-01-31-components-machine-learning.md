---
layout: page
title: Compontents of Machine Learning
tagline: Basic Notation, Hypothsis
categories: machine-learning
---
{% include JB/setup %}

#### Basic Notations:
- input: $$ x \in X$$ (customer application)
- output: $$ y \in Y$$ (good/bad after approving credit card)
- target function: 
    - $$ f: X \rightarrow Y $$ (`ideal` credit approval formula)
- hypothesis: <=> skill with hopefully good performance:
    - $$ g: X \rightarrow Y $$ (`learned` formula to be used)
- **$$ \{(x_n,y_n)\} \ \ from \ \ f \rightarrow [ML] \rightarrow g $$**

#### Final hypothsis: $$ g \approx f $$

#### Definiton:
Trainint examples(`data`) --> learning algorithm(`A`) --> `final hypothsis` $$ g \approx f $$
