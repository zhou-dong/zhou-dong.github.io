---
layout: page
title: Comprehensive Exam Syllabus
tagline: Analysis of Algorithm, Computer Organization and Architecture, Operating System
---

### Operating System

#### Process

In computing, a process is an instance of a computer program that is being executed. It contains the program code and its current activity. Depending on the operating system (OS), a process may be made up of multiple threads of execution that execute instructions concurrently.

#### fork()

- System call fork() is used to create processes. It takes no arguments and returns a process ID. 
- The purpose of fork() is to create a new process, which becomes the child process of the caller. 
- After a new child process is created, both processes will execute the next instruction following the fork() system call. 
- Therefore, we have to distinguish the parent from the child. This can be done by testing the returned value of fork():

- If fork() returns a negative value, the creation of a child process was unsuccessful.
- fork() returns a zero to the newly created child process.
- fork() returns a positive value, the process ID of the child process, to the parent. 

- The returned process ID is of type pid_t defined in sys/types.h. Normally, the process ID is an integer. Moreover, a process can use function getpid() to retrieve the process ID assigned to this process.

<pre><code>
void main(void)
{
    pid_t pid;

    pid = fork();
    
    if (pid == 0) 
        childProcess();
    else 
        parentProcess();
}
</code></pre>

#### Process Scheduling

The process scheduling is the activity of the process manager that handles the removal of the running process from the CPU and the selection of another process on the basis of a particular strategy.

Process scheduling is an essential part of a Multiprogramming operating system. Such operating systems allow more than one process to be loaded into the executable memory at a time and loaded process shares the CPU using time multiplexing.

#### Process States

As a process executes, it changes state. The state of a process is defined as the current activity of the process.

Process can have one of the following five states at a time.

1. New
    + The process is being created.
2. Ready
    + The process is waiting to be assigned to a processor. Ready processes are waiting to have the processor allocated to them by the operating system so that they can run.
3. Running
    + Process instructions are being executed (i.e. The process that is currently being executed).
4. Waiting
    + The process is waiting for some event to occur (such as the completion of an I/O operation).
5. Terminated
    + The process has finished execution.

#### State transition


#### Inter-process communication

#### Thread


#### CPU scheduling


#### FCFS


#### SJF

#### Priority scheduling


#### RR scheduling


#### Process synchronization


#### Critical section


#### Semaphore


#### Deadlock


#### Starvation


#### Dinning philosopher


#### Monitor


#### Deadlock prevention and avoidance


#### Paging


#### Virtual memory


#### Page replacement algorithms
