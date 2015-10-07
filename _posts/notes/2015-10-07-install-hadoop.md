---
layout: page
title: Install Hadoop for Computer Lab

---

Operating System: 

- Ubuntu 14.04.1 LTS

User:

- Username: hadoop
- Password: hadoop

Ip Address: 10.33.1.74

#### Configurate Ubuntu

1. Install SSH
    - sudo apt-get install openssh-server
    - sudo apt-get install openssh-client

2. Update
    - sudo apt-get update

3. Update vim
    - sudo apt-get install vim

4.  Create folder of workspace
    - mkdir workspace

5. Install Java
    1. Download JDK
        - http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
    2. copy to ubuntu
        - scp ~/Downloads/jdk-8u60-linux-x64.gz hadoop@10.33.1.74:/home/hadoop/workspace/download/.
    3. upzip jdk
        - tar -xzvf jdk-8u60-linux-x64.gz
    4. config jdk environment
        - vim ~/.profile
        - export JAVA_HOME=/home/hadoop/workspace/jdk1.8.0_60
        - export PATH=$JAVA_HOME/bin:$PATH
        - source ~/.profile
        - java -version
        - javac -version

#### Install Docker
