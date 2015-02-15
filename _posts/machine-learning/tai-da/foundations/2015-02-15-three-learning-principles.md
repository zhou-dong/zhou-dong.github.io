---
layout: page
title: ML-NTU-F-11 Three Learning Principles
tagline: 
---
{% include JB/setup %}

#### Occam's Razor

- History:
    + An explanation of the data should be made as simple as possible, but no simpler. --Albert Einstein**?**(1879-1955)
    + entia non sunt mutiplicanda praeter necessitatem (entities must not be mutiplied **beyond necessity**) --William of Occam (1287-1347)

- Definition:
    + **Occam's razor** for trimming down unnessary explanation

- Explain:
    + The simplest model that fits the data is aslo the most plausible.

- One word:
    + **Simple is Better**

#### Sampling Bias

- Description:
    + If the data is sampled in a **biased** way, learning will produce a similarly biased outcome.

- Practical rule of thumb:
    + match test scenario as much as possible

#### Data Snooping

- Data snooping
    + careful about **your brain's "model complexity"**.
    + shall be decided **without "snooping" data**
    + If data set has affected any step in the learning process, its ability to assess the outcome has been compromised.

- Dealing with data snooping
    + truth - **very hard to avoid**, unless being extrnmely honest
    + extremely honest: **lock your test data in safe**
    + less honest: **reserve validation and use cautiously**
    + be blind: avoid making modeling decision by data
    + be suspicious: interpret research results (including your own)
