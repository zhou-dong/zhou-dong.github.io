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
- P(A,B) = P(A) * P(B|A) = P(B) * P(A|B).
- Example:
- d1 a, a, a, b, c, e, f, f
- d2 a, b, b, d, f, f, f, f
- d3 b, b, c, c, d, d, d, f
- total_a = 4
- total_b = 5
- total_c = 3
- total_d = 4
- total_e = 1
- total_f = 7
- Data:
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

### Collaborative Filtering

Basic Info： 根据相似的物或者相似的人，来推荐商品。

1. Items Based Filtering：基于item的协同过滤
    - 通过商品的各个属性来求商品之间的相似度。
    - 可以通过余弦相似来求给个商品之间的相似度。
    - 通过这种方法可以返回与某个商品相似的商品。
2. Users Based Filtering：基于user的协同过滤
    - 购买过这个商品的人还买过什么，是典型的协同过滤。
    - 通过公共感兴趣的商品，来求人人之间的相似度。
    - 然后根据相似的人来推荐产品。

协同过滤的劣势是：如果一个人以前没有任何行为

- 就没有办法找到与他相似的人。
- 就没法适用协同过滤推荐商品。

我们PEOPLE-TP-PEOPLE项目其实使用的就是协同过滤的思想。

### Feedback

1. 在用户中，做调查，哪些是有效的结果，哪些是无效的结果。
    - 可以通过这些来查找同义词
    - 也可以慢慢增加Term在doc中的权重

2. Pseudo Feedback
    - 假设搜索返回的前N个是相关度高的，用这些相关度高的文章来训练query的同义词。

3. Implicit Feedback
    - 通过分析的对搜索结果的行为，如浏览、点击等来查找query的同义词。
    - 也可以增加Term在doc中的权重。

4. 通过query中同时出现的词，来查找query的同义词。
    - FP-Growth
    - Aprior
    - Vertical index

5. Rocchio Feedback
    - 使query逐渐与目标doc相似
    - 增加query的同义词
    - 增强正影响，减少负影响

### 二次搜索：

1. 加入同义词重新搜索同一个索引库。
2. 建立新的索引库专门为二次搜索提供服务。

### Page Rank


## HIT
