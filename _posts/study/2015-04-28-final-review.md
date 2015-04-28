---
layout: page
title: CS-5549 Final Review
tagline: 

---

{% include JB/setup %}

Greddy Algorithm

Search Tree or Map

1. Breadth First Search

2. Depth First Search

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

2. Dijkstra:
    - [教学视频](https://www.youtube.com/watch?v=5GT5hYzjNoo)
    - Description: 找到最短的路径，然后逐渐的松弛每条边，然后找出单点到其它点的最短路径。
    - Stepson：
        1. 找出与起始点相连的所有点，然后找出其中距离最短的点
        2. 通过最短的点来做松弛。并标记松弛点的来源。
        3. 在剩下的点中，找出最短的点，并通过这个点做松弛。
        4. 重复第3步，直到使用完所有的点做松弛。

Multiple Source Shortest Path

1. Floyd Warshall

2. Johnson's Algorithm

NP-complete

1. P

2. NP
