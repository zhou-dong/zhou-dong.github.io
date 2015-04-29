---
layout: page
title: CS-5549 Final Review
tagline: 

---

{% include JB/setup %}

Greddy Algorithm

- Description:
    + 是一种在每一步选择中都采取在当前状态下最好或最优（即最有利）的选择，从而希望导致结果是最好或最优的算法。比如在旅行推销员问题中，如果旅行员每次都选择最近的城市，那这就是一种贪心算法。

- 用在哪些地方：
    + 贪心法可以解决一些最优化问题，如：求图中的最小生成树、求哈夫曼编码……对于其他问题。
    + 贪心法一般不能得到我们所要求的答案。一旦一个问题可以通过贪心法来解决，那么贪心法一般是解决这个问题的最好办法。
    + 由于贪心法的高效性以及其所求得的答案比较接近最优结果，贪心法也可以用作辅助算法或者直接解决一些要求结果不特别精确的问题。

- 我们学过的贪心算法：
    + Prime
    + Kruskal
    + Dijkstra

Search Tree or Map

1. Breadth First Search
    - 先建立priori queue
    - 先进先出，然后遍历所有的的结点。

2. Depth First Search
    - 朝一个方向深度遍历。

Minimum Spanning Tree

- 最小生成树的边，应该是顶点总数减一：(total_vertex-1)。

1. Prime
    - Description: 由一条最短的边，逐渐扩展成一棵树
    - Steps:
        1. 随便找一个顶点，然后找出与这个顶点相连的最的边。把这条变加入到树中。
        2. 找出与这棵树相连的最短的边，加入树中。
        3. 重复步骤2，直到所有的定点都加入到树中。

2. Kruskal
    - Description: 找出最短的边，以每个边为基础，生成多个tree，然后这些tree合并成一个tree。
    - Steps:
        1. 首先按边进行排序，并放在queue中。
        2. 新建一个key-value set，来标记这些点是否已经在set中。
        2. 依次中queue中取出边，如果两个顶点都不在set中，这个边加入到set中。
        3. 重复第二步，直到所有的点都加入到set中。

Single Source Shortest Path

1. Bellman Ford
    - Specical: can work on negative edge weight graph
    - Description: 多次松弛。
    - Steps:
        1. 设置开始结点离所有点的距离都为无穷大。
        2. 遍历所开始结点相邻的所有点，并且更新距离。
        3. 依次遍历，剩下的结点，如果通过剩下的结点，可以使到开始结点的距离变短，更新结点，并更新父结点。
        4. 重复上面的步骤n(结点的个数)次。

2. Dijkstra:
    - [教学视频](https://www.youtube.com/watch?v=5GT5hYzjNoo)
    - Description: 找到最短的路径，然后逐渐的松弛每条边，然后找出单点到其它点的最短路径。
    - Stepson：
        1. 找出与起始点相连的所有点，然后找出其中距离最短的点
        2. 通过最短的点来做松弛。并标记松弛点的来源。
        3. 在剩下的点中，找出最短的点，并通过这个点做松弛。
        4. 重复第3步，直到使用完所有的点做松弛。
    - More：
        + 可以用堆做优化，来找出距离最短的电
        + 可以继续优化成斐波那契堆，可以更高的提高效率。

Multiple Source Shortest Path

1. Floyd Warshall
    - 时间复杂度是n的立方
    - Steps: 所有点依次通过每个点，到其它点的距离做松弛。

2. Johnson's Algorithm
    1. 在图的外边添加另一个顶点q，并初始化q到其它点的距离为0
    2. 使用Bellman Ford算法，求q到其它点的距离。
    3. reweight各个点之间的距离。
    4. 使用Dijkstra算法，分别求出每个点到其它点的最短距离。

NP-complete

**简单来说，P = NP问题问道：如果是／不是问题的正面答案可以很快验证，其答案是否也可以很快计算？**

**不严格的讲，NP完全问题是NP类中“最难”的问题，也就是说它们是最可能不属于P类的。**

- Some problems are intractable: as they grow large, we are unable to solve them in reasonable time.
- What constitutes `reasonable time`? Standard working definition: `polynomial time`.

- Polynomial time: $$ O(n^2), O(n^3), O(1), O(n \log n) $$
- Not in polynomial time: $$ O(2^n), O(n^n), O(n!) $$

Polynomial-Time Algorithms

- We define P to be the class of problems solvable in polynomial time.

NP-Complete Problems

- The NP-Complete problems are an interesting class of problems whose status is unknown.
- NP (nondeterministic polynomial time) is the set of problems that can be solved in polynomial time by a nondeterministic computer.

- NP = problems verifiable in polynomial time

1. P: problems that can be solved in polynomial time

2. NP: problems for which a solution can be verified in polynomial time

3. Unknown whether P = NP (most suspect not)

Example: Hamiltonian-cycle problem is in NP:

- Cannot solve in polynomial time
- Easy to verify solution in polynomial time (How?)

- All the P problem is NP problem.
- Not all the NP problem are p problem.

NP-Complete problems are the “hardest” problems in NP.

NP-Complete可以简单地理解为：那些在NP中，同时最不可能在P中的问题。

