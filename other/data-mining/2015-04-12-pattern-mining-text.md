---
layout: page
title: Frequent Pattern Mining for Text Data
tagline: 
categories: 

---



1. Simultaneously inferring phrases and topics
    - Bigram Topic Model
    - Topical N-Grams
    - Phrase-Discovering LDA
2. Post Topic Modeling Phrase Construction
3. First Phrase Mining then Topic Modeling

Phrase Mining and Topic Modeling

1. Generate bag-of-words to generate sequence of tokens
2. Post bag-of-words model inference, visualize topics with n-grams
3. Prior bag-of-words model inference, ming phrases and impose to the bag-of-words model

First Phrase Mining then Topic Modeling 先找出频繁项，然后再从里面找出文章的主题

- Perform frequent contiguous pattern mining to extract candidate phrases and their counts
- bag-of-phrases
- LDA

Challenges for Data Analysis in Data Streams

- Fast changing
- In and out streaming
- 有的方式，想apriori或者FPgrowth，需要2次或者2次以上的读取数据，这些算法就不能用在data streams

Spatiotemporal and Trajectory Pattern

- 在空间的维度上找出pattern，比如在坐标上相近的

Software bug mining

- Use pattern mining to find bugs in software
- Static bug detection
- dynamic bug detection
- debugging

- pattern mining
- some patterns are likely bugs
