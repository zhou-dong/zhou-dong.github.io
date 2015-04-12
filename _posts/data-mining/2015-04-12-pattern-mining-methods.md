---
layout: page
title: Pattern Mining Methods
tagline: Apriori Eclat FPgrowth
categories: apriori Eclat fpgrowth

---

{% include JB/setup %}

### Apriori

Basic Knowledge:

- Other name: Down Closure Property of Frequent Patterns
- Discription: Any subset of frequent itemset must be frequent
- Then: If any subset of itemset S is infrequent, then there is no change for S to be frequent

Steps:

- 先在所有的数据集中找出每个item出现的频率
- 删除频率低的
- 我们就得到了出现频率大于某个阀值的items

- 通过第一次得到的数据，再去数据集中去查询同时出现2个商品，并记录他们的频率
- 删除其中出现频率低的
- 这样我们就得到了出现频率大于某个阀值的一对items

- 通过第二次得到的数据，再去数据集中查询同时出现的3个商品，并记录他们的频率
- 删除其中频率低的
- 这样我们就得到了一组频率大于某个阀值的3个同时出现的items

- 通过上面的算法，继续计算更多商品同时出现的频率。

Improvements:

1. Reduce passes of transaction database scans
    - Partitioning: Scan database only twice
    - Partition database and find local frequent patterns
    - Consilidate global frequent patterns
2. Shrink the number of candidates
3. Exploring special data structure

---

### Eclat

Basic info

- Theory: Exploring vertical Data Format
- Whole NameEquivalence Class Transformation

Method:

- 给每个item建立索引，然后做并集

Improvement：

- 如果他们的并集很大的话，可以用他们的并集取反来来存贮结果，这样存贮和计算效率会更高。

---

### FPgrowth

Basic info

- FP-tree
- Mine each conditional pattern-base recursively

Steps:

- 需要扫描两次数据集
- 第一次统计所有items的出现频率，删除频率较低的，然后对所有items按出现频率排序
- 第二次扫描，把所有的数据生成一棵树
- 相同商品，在不同的分支之间，应该关联起来。这样在第二部分的统计的时候会方便。

- 分析生成的FP-tree，然后从下向上统计出与每个商品同时出现的商品。
