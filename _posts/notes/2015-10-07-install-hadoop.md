---
layout: page
title: Install Hadoop for Computer Lab

---

Universal USB Installer

http://www.pendrivelinux.com/universal-usb-installer-easy-as-1-2-3/#button

Set up hadoop Reference

 http://tashan10.com/yong-dockerda-jian-hadoopwei-fen-bu-shi-ji-qun/

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

- sudo apt-get install apt-transport-https
- sudo apt-key adv `--keyserver` hkp://keyserver.ubuntu.com:80 `--recv-keys` 36A1D7869245C8950F966E92D8576A8BA88D21E9
- sudo bash -c "echo deb https://get.docker.io/ubuntu docker main > /etc/apt/sources.list.d/docker.list"
- sudo apt-get update
- sudo apt-get install lxc-docker

- sudo service docker start

##### Add user into docker

- Create a docker group
    - sudo groupadd docker
- Adding user `hadoop` to group docker
    - sudo gpasswd -a hadoop docker
- Restart Docker
    - sudo service docker restart
- Test Docker
    - docker version

##### Docker common command

- docker images：列出所有镜像(images)
- docker ps：列出正在运行的(容器)containers
- docker pull ubuntu：下载镜像
- docker run -i -t ubuntu /bin/bash：运行ubuntu镜像
- docker commit 3a09b2588478 ubuntu:mynewimage：提交你的变更，并且把容器保存成Tag为mynewimage的新的ubuntu镜像.(注意，这里提交只是提交到本地仓库，类似git)

##### Download ubuntu mirror by docker

- docker pull ubuntu:14.04

##### start ubuntu in docker

- docker run -ti ubuntu
- docker run -ti ubuntu:14.04

##### Test docker then exit

- docker run ubuntu /bin/echo 'Hello world'

##### Install SSH In docker

- sudo apt-get install openssh-server
- sudo apt-get install openssh-client

##### Install Java In docker

- vim ~/.bashrc
- export JAVA_HOME=/workspace/jdk1.8.0_60
- export PATH=$JAVA_HOME/bin:$PATH
- source ~/.bashrc

##### Commit change of docker

- docker commit -m "java install" 122a2cecdd14 ubuntu:java

#### Install Hadoop

##### Install wget
- apt-get install wget

##### Download Hadoop

- mkdir -p soft/apache/hadoop
- cd /root/soft/apache/hadoop
- wget http://www.apache.org/dyn/closer.cgi/hadoop/common/hadoop-2.7.1/hadoop-2.7.1.tar.gz

##### Config Hadoop in ./bashrc

- export HADOOP_HOME=/root/soft/apache/hadoop/hadoop-2.6.0
- export HADOOP_CONFIG_HOME=$HADOOP_HOME/etc/hadoop
- export PATH=$PATH:$HADOOP_HOME/bin
- export PATH=$PATH:$HADOOP_HOME/sbin

##### Config Hadoop

1. Create three folder
    - mkdir tmp
    - mkdir namenode
    - mkdir datanode

2. Config 
    - cd $HADOOP_CONFIG_HOME/
    - cp mapred-site.xml.template mapred-site.xml
    - .core-site.xml
    - .hdfs-site.xml
    - .mapred-site.xml
    - hadoop-env.sh (export JAVA_HOME=/workspace/jdk1.8.0_60)

3. Format namenode
    - hadoop namenode -format

4. Install ssh
    - apt-get install ssh
    - /var/run/sshd

5. Add ssh to barshrc
    - vim ~/.bashrc
    - /usr/sbin/sshd

6. Create key
    - ssh-keygen -t rsa -P '' -f ~/.ssh/id_dsa
    - cd .ssh
    - cat id_dsa.pub >> authorized_keys

#### Config Master and Slave

1. Start up all the master and slave
    - docker run -ti -h master ubuntu
    - docker run -ti -h slave1 ubuntu
    - docker run -ti -h slave2 ubuntu

2. check the ip of the machine
    - ifconfig

3. config host
    - vim /etc/hosts
    - 172.17.0.15 master
    - 172.17.0.16 slave1
    - 172.17.0.17 slave2

4. Config slave
    1. go to master machine
    2. cd $HADOOP_CONFIG_HOME/
    3. vim slaves
        - slave1
        - slave2

5. Start Hadoop
    - start-dfs.sh

6. Check run status in master
    - hdfs dfsadmin -report

7. stop hadoop
    - stop-dfs.sh

8. Start stop docker
    - docker start bob_the_container
    - docker start aa3f365f0f4e

9. Start demaon docker
    - docker run -ti -d ubuntu


#### 运行镜像，并让生成的容器一直在后台运行：

- 第一个-d表示让容器在后台运行
- 末尾的-D表示启动ssh的daemon模式，不然容器启动后立刻就变为停止状态了

- docker run -d NAME/VERSION /etc/init.d/ssh start -D


#### 现在，便可以ssh登陆容器了。

-  查询容器IP
    + docker inspect CONTAINER_ID | grep IP

- 登入
    + ssh root@IP

---

##### start docker as deman

- docker run -d `--name master` `-h master` ubuntu /etc/init.d/ssh start -D
- docker run -d `--name slave1` `-h slave1` ubuntu /etc/init.d/ssh start -D
- docker run -d `--name slave2` `-h slave2` ubuntu /etc/init.d/ssh start -D

##### Find IP of docker
- docker inspect master | grep IP
- docker inspect slave1 | grep IP
- docker inspect slave2 | grep IP

- ssh root@172.17.0.29

##### add user into server

- sudo useradd userone
- sudo passwd userone

##### create foler of userone
- sudo mkdir /home/userone

- sudo useradd -d /home/usertwo -m usertwo

##### Add user to docker group

- sudo gpasswd -a userone docker

- userone 157432
- usertwo 17728
- userthree 15062
- userfour 17743
- userfive 96574
- usersix 45732
- userseven 66843
- usereight 57832
- usernine 44573
- userten 35762
- usereleven 24876
- userthirteen 13249




Thank you!
