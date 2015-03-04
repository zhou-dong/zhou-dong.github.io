---
layout: page
title: Notes for people-to-people
tagline: 
---
{% include JB/setup %}

#### Natural Language Processing:
1. Stop word(should we eliminate stop word)
2. Word Tokenization
- 用自然语言分析，最归一化，如data mining == data mine, Nosql = NOSQL, 

#### Weight of The Attributes:
1. Company Name Have `negative` Weight
2. Others have the `positive` Weight

#### Cold start Problem
- If most of the key words have the TF of 0, our result will not go will.
- Answer: We initialize all the words with small weight to smooth the data.
