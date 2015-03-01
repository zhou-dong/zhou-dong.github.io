---
layout: page
title: CS-5549 Midterm Review
tagline: Sort method, Recursion, Dynamic Programming 
---
{% include JB/setup %}

## Sorting Method

| Sort Name | Description | Best Case | Worst Case | Average Case |
| :--- | :--- | :---: | :---: | :---: | 
| BubbleSort | 比较相邻的元素，第一个比第二个大就交换位置。对每个元素重复上一个步骤 | $$O(n)$$ | $$O(n^2)$$ | $$O(n^2)$$ |
| SelectionSort | 每次查找剩下元素中最小的元素，然后放在已经排序好的前面序列的最后一位 | $$O(n^2)$$ | $$O(n^2)$$ | $$O(n^2)$$ |
| InsertionSort | 将当前元素插入到比它大的元素前,现实中比Bubble Sort，Selection Sort更有效 | $$O(n)$$ | $$O(n^2)$$ | $$O(n^2)$$ |
| GnomeSort |比较相邻元素如果第2个比第1个小替换位置并继续与前面的元素比较直到遇到比它大的。对每个元素重复上一个步骤| $$O(n)$$ | $$O(n^2)$$ | $$O(n^2)$$ |
| ShellSort | 比较第i个和第i+n/2个元素，并继续与前i+n/2个元素比较，重复前面步骤| $$O(n\lg_{n})$$ | $$O(n^2)$$ | Depends on Gap Sequence |
| QuickSort | 1.找出pivot 2.从数组两边找出比pivot大和小的替换位置，直到大、小元素相遇确定pivot位置，循环上面的步骤 | $$O(n\lg_{n})$$ | $$O(n^2)$$ | $$O(n\lg_{n})$$ |
| MergeSort | 一半元素之间进行比较，然后合并。递归调用 | $$O(n\lg_{n})$$ | $$O(n\lg_{n})$$ | $$O(n\lg_{n})$$ |
| HeapSort | 先建立一棵树，然后依次从数种取出root，heapify tree，再取出root直到数为空 | $$O(n\lg_{n})$$ | $$O(n\lg_{n})$$ | $$O(n\lg_{n})$$ |
| BucketSort | 以最大数初始化空数组，然后循环要排序的数组，把下标为元素的值设置为1，打印初始数组 | $$ \Theta(n+k)$$ | $$ \Theta(n+k)$$ | $$ \Theta(n+k)$$ |
| CountingSort | Bucketsort的优化版，先bucketsort，然后查看每个元素前面有多少个元素比它小，然后排序 | $$ \Theta(n+k)$$ | $$ \Theta(n+k)$$ | $$ \Theta(n+k)$$ |
| RadixSort | 一次从最后一位数取模，然后放在bucket中，然后再除以10取模，重复前面步骤 | $$O(N)$$ | $$O(kN)$$ | --- --- --- |

##### Conclusion:

- Heapsort、Mergesort会占用额外的空间。
- Bucketsort、Countingsort、Radixsort要占用额外的空间，尤其是bucketsort和countingsort，占用空间不可控。而且对小数和分数很难支持。
- 一般排序的时候，使用的还是comparison，因为它对小数和分数有很好的支持，而且它的空间负责度也低。

## Medians and Order Statistics

- 同时找出最大值和最小值，有两种方法：
    1. 循环整个数组，一个元素与最大值比较一次，与最小值比较一次。
    2. 先比较两个元素，然后小的与最小值比较，大的与最大值比较。这样每两个数比较3次。
        + 奇数个元素，从第2个元素开始循环
        + 偶数个元素，从第3个元素开始循环
- Randomized Selection
    1. 与Quicksort相似，先找pivot，然后进行一轮排序
    2. 比较pivot是否在要查找的元素的位置：
        + 如果是返回pivot
        + 如果pivot的位置比要找元素的位置靠前，在后半个数组使用`Quicksort`查找
        + 如果pivot的位置比要找元素的位置靠后，在前半个数组使用`Quicksort`查找
- Mideum of Mideum
    + 作用：为了优化Quicksort和Randomized-Selection，我们需要找到中位数来做pivot
    + 步骤：
        1. 把数组分成最小5份
        2. 在每份使用Insertion sort找出中位数
        3. 在这五份中位数中找出中位数
    + 做为quicksort的中位数
    + Worst Case：
        1. 5份数据的第一份里面找出的是最小的20% = n/5,中位数等于 n/5/2 = 10%
        2. 在5份数据中的中位数，最少有多少个数小于中位数：3 * 10% = 30%
        3. For large n, 3[n/10] $$\le$$ n/4
        4. So at least n/4 elements $$\le$$ x
        5. Similarly: at least n/4 elements $$\ge$$ x

## Recursion
1. Telescoping
2. 


## Datastructure

- Binary Tree
    + one root
    + every node has no parent
    + every node can have at most two children
- Complete Binary Tree
    + Is Binary Tree
    + In every level, except possibly the last, is completely filled
    + Basic for HeapSort
- Binary Search Tree
    + Is Binary Tree
    + Left child is small
    + Right child is bigger
- Avl Tree
    + Is Binary Search Tree
    + Balanced Tree
    + left child level is less than or eq 1 to right level
    + compore to Red Black Tree more balanced
- Red Black Tree
    + Is Binary Search Tree
    + Balanced Tree
    + Use 5 rules to make sure tree is Balanced
    + Popular in memory, compare to Avl Tree has less rotations
- B Tree
    + Not Binary Tree
    + One node has more than two children
    + Self balanced tree
    + Popular in databases
- B Plus Tree
    + Enhanced B Tree
    + All value instored in leafs
    + Leaf connected to next and above

## Big O Notation


## Dynamic Programming
