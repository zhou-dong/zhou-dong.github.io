---
layout: page
title: Example of the Machine Learning Steps
categories: machine-learning

---

{% include JB/setup %}

Example: The project steps of "Detect Stree" with sensor. It is a project in: Mobile Sensor Data-to-knowledge

Reference website: https://md2k.org/

---

#### 1. 收集数据

以收集用户“情绪紧张”的数据为例：

- 主动收集（实验室收集）效果90%
    + 让参与者模拟当众“演讲”，来收集当时的参数
    + 让参与者“把手放入冰水中”，来收集用户参数
    + 让参与者考试：“做一份难度很大的测试”，来收集参数
- 被动收集（参与者主动汇报）效果75%
    + 不是让用户“情绪紧张的时候汇报”，而是
    + 随机在不同的时间，让用户填一份收集信息的表格，并检查当时的数据
    + 被动收集数据的时候，可能用户的紧张情绪已经过了，但是用户仍然会认为还处在紧张情绪中，但是身体的各个指标已经恢复正常了，所以`由于每个人对紧张情绪理解的不一样，会造成数据和结果的偏差`

#### 2. 清洗数据

收集数据的时候，会不可避免的出现一些数据的异常，比如：

- 由于sensor的性能影响，有时候传入“收集系统”的数据时间间隔会不一样
- 由于sensor没有佩戴好，所以导致数据的异常
- sensor本身可能会出现故障

由于上面的原因，需要对收集到的数据做清洗

#### 3. 确定feature

一次数据收集，可能会收集到很多的数据，供多个实验，这就需要找出不同实现需要的数据了。同一组数据收集，对应的实验：

- 压力测试
- 饮酒测试
- 抽烟测试

#### 4. 归一化

不同的人，收集的到底数据样本是不一样的，比如：

- 模型人的心跳速度本来就会快些
- 有些人的体温本来就比正常人高或者低些
- 每个人对相同的压力，或者刺激，数据`变化的幅度`也不一样。

我们需要训练出来的数据，是“普遍”意义上的数据，所以需要“normalize”

1. min-max标准化（Min-Max Normalization）也称为离差标准化，是对原始数据的线性变换，使结果值映射到[0 - 1]之间。
2. Z-score标准化方法. 这种方法给予原始数据的均值（mean）和标准差（standard deviation）进行数据的标准化。经过处理的数据符合标准正态分布，即均值为0，标准差为1。

#### 5. 训练模型

1. 可是使用传入的二分算法训练模型，如：
    - Support Vector Machine
    - Logistic Regression

2. 可以使用二分算法，来就出各种结果的可能性，如：
    - Support Vector Machine
        + 可以通过计算，测试节点`离`分界线的`距离`，来计算“百分比”
        + Logistic Regression，本来就可以计算“百分比”。

3. 可以使用一些算法，来分析模型，分析每个feature的权重。如：
    - Decision Tree
        + 它本来就是训练每个branch的重要性的。

#### 6. 交叉验证

通过cross validation多次运算，计算结果。
