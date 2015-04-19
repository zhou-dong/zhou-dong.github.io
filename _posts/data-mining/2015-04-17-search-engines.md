---
layout: page
title: Text Retrieval and Search Engines
tagline:
categories: data-mining

---

{% include JB/setup %}

## Vector Space Model

### Basic Idea is: Use `Dot Product` to calculate the similarity between Query and Documents

- 两个向量求内积，通过这两个向量的内积来判断相似度。

### Hard part is to calculate the weight of the terms

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

## Probabilistic Retrieval Model 

### Basic Idea is: 

- Smoothing Methods
- Rocchio Method

## Collaborative Filtering

- Items Based Filtering
- Users Based Filtering

其实我以前的项目就是“协同过滤”的一种。
