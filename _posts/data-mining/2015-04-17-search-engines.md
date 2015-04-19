---
layout: page
title: Text Retrieval and Search Engines
tagline:
categories: data-mining

---

{% include JB/setup %}

### Vector Space Model

Basic Idea is: 

- Use `Dot Product` to calculate the similarity between Query and Documents
- 两个向量求内积，通过这两个向量的内积来判断相似度。

Difficult part is to calculate the weight of the terms

- TF
    + 词频
    + Term在文档中出现的频率
    + Term在文章中出现的频率越高，说明Term与这个文章的主题越接近
- IDF
    + 逆文档频率
    + 文档总数/包含这个term的文档数
    + 包含这个Term的文档越多，说明这个Term在整体文档库中越不重要。
    + 可以对这个值取log，来避免这个值太大
- Doc Length Normation
    + Pivoted length normalization
    + 以doc的平均长度作为pivot，如果长度大于pivot减分；如果长度小于pivot加分。
    + K = (1-b) + b(dl/avdl)
    + 把K作为分母，这样就可以保证大于pivot减分，小于pivot加分。

- BM25
    +  通过4个维度来计算weight值
        1. IDF
        2. TF
        3. Doc Length
        4. Query TF
    + 个人理解：
        - 在各个维度都可以添加调节因子来计算weight的值
- BM25F 
    + Name From: BM25 and Fields
    + (Term在各个域中出现的频率*这个域的调节因子)/这个域的文档长度
    + Term出现在doc的不同域中，会对doc的weight做出不同大小的贡献

### Probabilistic Retrieval Model 

Basic Idea is: 

- 计算每个Term出现在各个doc中的概率，可通过贝叶斯规则进行计算
- P(A,B) = P(A) * P(B|A) = P(B) * P(A|B)

- d1 a, a, a, b, c, e, f, f
- d2 a, b, b, d, f, f, f, f
- d3 b, b, c, c, d, d, d, f
- total_a = 4
- total_b = 5
- total_c = 3
- total_d = 4
- total_e = 1
- total_f = 7

- p(d1,a)=3/4 p(d1,b)=1/5 p(d1,c)=1/3 p(d1,d)=0/4 p(d1,e)=1/1 p(d1,f)=2/7 
- p(d2,a)=1/4 p(d2,b)=2/5 p(d2,c)=0/3 p(d2,d)=1/4 p(d2,e)=0/1 p(d2,f)=4/7 
- p(d3,a)=0/4 p(d3,b)=2/5 p(d3,c)=2/3 p(d3,d)=3/4 p(d3,e)=0/1 p(d3,f)=1/7
- p(d1) = 5/6
- p(d2) = 4/6
- p(d3) = 4/6 
- p(a) = 4/24 
- p(b) = 5/24 
- p(c) = 3/24 
- p(d) = 4/24 
- p(e) = 1/24 
- p(f) = 7/24
 
- Smoothing Methods
- Rocchio Method

## Collaborative Filtering

- Items Based Filtering
- Users Based Filtering

其实我以前的项目就是“协同过滤”的一种。

## Page Rank


## HIT
