---
layout: page
title: Data Stream Analyze
tagline: -- Thinking of the Data Analyze

---

#### 流式计算的特殊性:

1. 数据实时到达;
2. 数据到达次序独立,不受应用系统所控制;
3. 数据规模宏大且不能预知其最大值;
4. 数据一经处理,除非特意保存,否则不能被再次取出处理,或者再次提取数据代价昂贵(one pass).

---

#### 我们觉得流计算的技术难点不是算法：

1. 而是怎样在低成本、高可用的环境下快速的处理和存储流数据。
2. 在不同的应用场景之下，使用一些经过优化以后的数据挖掘算法，或者普通的算法。

- 首先所有的算法，只要效率够高，都可以使用在流计算中。
- 而真正的问题是分布式该工程的实现上。

---

算法的关键在于设计一个远小于数据集规模的结构,从而可以在内存中处理数据.相对于数据流的规模而言,这种名为概要数据结构(synopsis data structure)的规模至多应该是次线性的.即如果流的长度为 N,则概要数据结构大小不超过 O(polylog(N)),并且处理流上每一组数据的时间不超过 O(polylog(N)).

#### 可以用到一些方法或者是指导思想:

1. Histogram
    + 直方图技术就是将一个大数据集划分为很多个连续的桶(bucket),也就是小数据集,每个桶都由一个数字来代表其特征
2. Sampling
    + 抽样方法也是生成概要数据结构的常用手段.它从数据集中抽取小部分数据代表整个数据集,并根据该样本集合获得查询结果.抽样方法可以分成均匀抽样(uniform sampling)和偏倚抽样(biased sampling)两种.
    + (Wavelet)小波分析方法是一种通用的数字信号处理技术.类似于傅立叶变换,小波分析根据输入的模拟量,变换成一系列的小波参数,并且少数几个小波参数就拥有大部分能量
3. Hash Method
    + Bloom Filter

---

#### 科研界的成果：

Data stream managerment system(DSMS)

1. STREAM [Stanford University] http://infolab.stanford.edu/stream/
2. Telegraph [berkeley] http://telegraph.cs.berkeley.edu/
3. Aurora [Brown University] http://cs.brown.edu/research/aurora/

---

#### 工业界的成果：

PlatForm for Data Strem:

- Apache Storm https://storm.apache.org/
    + 在Storm中，先要设计一个用于实时计算的图状结构，我们称之为拓扑（topology）。这个拓扑将会被提交给集群，由集群中的主控节点（master node）分发代码，将任务分配给工作节点（worker node）执行。
- Apache Spark https://spark.apache.org/streaming/
    + Spark Streaming是核心Spark API的一个扩展，它并不会像Storm那样一次一个地处理数据流，而是在处理前按时间间隔预先将其切分为一段一段的批处理作业。Spark针对持续性数据流的抽象称为DStream（DiscretizedStream），一个DStream是一个微批处理（micro-batching）的RDD（弹性分布式数据集）；而RDD则是一种分布式数据集，能够以两种方式并行运作，分别是任意函数和滑动窗口数据的转换。
- Apache Samza http://samza.apache.org/
    + Samza处理数据流时，会分别按次处理每条收到的消息。Samza的流单位既不是元组，也不是Dstream，而是一条条消息。在Samza中，数据流被切分开来，每个部分都由一组只读消息的有序数列构成，而这些消息每条都有一个特定的ID（offset）。该系统还支持批处理，即逐次处理同一个数据流分区的多条消息。Samza的执行与数据流模块都是可插拔式的，尽管Samza的特色是依赖Hadoop的Yarn（另一种资源调度器）和Apache Kafka。

---

#### 流式应用的相关组件

Distributed Queue:

- Apache Kafka http://kafka.apache.org/
- Beanstalkd http://kr.github.io/beanstalkd/
- Apache Flume https://flume.apache.org/

---

Reference

Finding frequent items in data streams
http://www.sciencedirect.com/science/article/pii/S0304397503004006

Counting Distinct Elements in a Data Stream
http://link.springer.com/chapter/10.1007/3-540-45726-7_1

http://www.jos.org.cn/ch/reader/create_pdf.aspx?file_no=20040809&journal_id=jos
