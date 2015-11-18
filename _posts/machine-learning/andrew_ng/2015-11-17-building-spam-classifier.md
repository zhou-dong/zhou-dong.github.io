---
layout: page
title: Building a Spam Classifier
tagline:
categories: machine-learning

---

How to spend your time to make it have low error?

- Collect lots of data
- Develop sophisticated features based on email routing information (for email header)
- Develop sophisticated features for message body. e.g. (should "discount" or "discounts" be treated as same word)?
- Develop sophisticated algorithm to detect misspelling.

Error Analysis

- Start with a simple algorithm that you can improve quickly. Implement it and test it on cross-validation data.
- Plot learning curves to decide if more data, more features, etc. are likely to help.
- Error Analysis

Error Analysis:

- manually examine the errors.
- what cues you think would have helped the algorithm classifier them correctly.
- can use "Porter stemmer"?
- Distinguish upper vs. lower case?

Error Metrics for Skewed Classes

- precision/recall
- precision 查准率
- recall 查全率

Trading Off Precision and Recall

- 在precision和recall之间找到平衡点。
- F score: $$2\frac{PR}{P+R}$$

Data For Machine Learning
