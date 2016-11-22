---
layout: page
title: Technology From Computer Architecture to Cloud Computing
tagline:

---


#### ABSTRACT

There are lots of same technology ideas between single computer architecture and cloud Computing system(Distributed system). We will discuss these ideas in these area:

- Abstractions of the computer system and the abstractions of the distribution system.
- How Queue implemented both the threads control in the single computer and balance control in the cloud computing.
- The ideas of the File system between the Linux system and distribution system(HDFS, GFS).
- Data communication between GPU, memory and project, database.
- notify idea in thread control and zookeeper in Hadoop system.
- pipeline in CPU and big data, example: photo OCR

No matter build a single computer or cloud system, basically people use the same idea.  

#### Same knowledge

- Abstraction
    + How people use abstraction to define different lays of the system.
    + Abstraction is always the most important idea in building the system, not only computer architecture, but all the things, by the way I believe the humans' history is the abstractions history, we abstract the nature and the world. We abstract more level of the nature, humans become more intelligent.
    + In the computer system, we abstract the computer into:
      1. hardware
      2. operating system
      3. software
    + other way the abstract computer
      1. instruction set
      2. operating system api
      3. virtual machine api
      4. modern language
    + Clouding computing system
      1. File system(HDFS,GFS)
      2. Database: HBase, Bigtable
      3. Database API
      4. Service API
-  Add cache to every level to optimize system.
    + We been study that there are several levels cache in the computer system, like L1, L2, L3, Main Memory.
    + In the cloud computing also need several level cache to optimize the system.
    + Cache in project(Ehcache), Embedded Cache(LevelDB), distributed Cache(Redis), and so on...
- Queue implemented in the threads control and balance control in the cloud.
    + thread control is one of the most important part in CPU development, it has been evolved several methods.
    + Now we use the priority queue to control the "context switch".
    + how queue be implemented in the thread control of the CPU
    + In Clouding computing, queue also very very important, queue is implemented in every where.
    + balance the request: Facebook's beanstalk
    + balance the log system: Fafka in Linkedin
    + zookeeper in Hadoop
    + control the command: MapReduce command control
- File system of the Linux system and distribution system(HDFS, GFS).
    + Hadoop system use the same idea of the Linux system.
    + Even use all most the same command to operate.
    + Hadoop fs -ls /home/
    + ls /home/
- Data communication between GPU, memory and project, database.
    + We been discuss so much during the class.
    + But in the database system, people use the same ideas to Create, Read, Update, Delete the data.
- pipeline in CPU and big data, example: photo OCR
    + We beed discuss how important the pipeline in operating system.
    + pipeline also very important in distributed system.
    + shopping cart steps
    + order steps
    + photo OCR

#### Future

- GPU plus Map Reduce
- Low level of mongoDB let operating system control the thread for it.
- HDFS is based on Linux file system.

The use the same ideas to build different level of the system, and then combine them to a large system, to make the system more powerful.

Future is join all these ideas together to optimize the whole system, like GPU plus Map Reduce, HDFS with Linux file system(ext3). Because of abstraction, people in different levels to optimize the system, they are not disturbed each other, but they can use ideas from the other levels to optimize their work. So no matter which level have good ideas or solutions will be implemented in other level. 

#### Conclusion

In our area, every part they always have same idea, if we can master one of the idea, I believe we can make our selves better.

From operation system, hardware of computer to the cloud, there are some many commons ideas between. And these ideas are the basic knowledge of computer science.

The ideas between computer architecture and cloud Computing or distributed system. More I think all the ideas between technology are same. If we like or interest something, just word hard for it.

Computer science is an great major, it's not only need thinking things logically but also need us do it manually which is by our hand.

The creative is not only invent the totally new things, but standing on the shoulders of giants and step forward. Wish after we leaned the basic ideas, we could create our own cool things, to make the world a little different.

Add more informatino of Computer Architecture.
