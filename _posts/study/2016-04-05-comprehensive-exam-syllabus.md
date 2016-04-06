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


#### FCFS (First Come First Served)

|Process| Burst Time | Arrival Time | Waiting Time |
|:---:|:---:|:---:| :---: |
| p1 | 5 | 0 | 0        |
| p2 | 4 | 2 | 3 (5-2)  | 
| p3 | 3 | 4 | 5 (9-4)  |
| p4 | 6 | 6 | 6 (12-6) |

Gantt Chart:

| p1 | p2 | p3 | p4 |
| ---: | ---: | ---: | ---: |
| ---5 | ---9 | ---12 | ---18 |

#### SJF (Non-Preemptive Shortest Job First)

|Process| Arrival Time | Burst Time | Waiting Time | Turnaround Time |
|:---:|:---:|:---:| :---: | :---: |
| p1 | 0 | 5 | 0  | 5 |
| p2 | 2 | 3 | 6  | 9 |
| p3 | 4 | 2 | 1  | 3 |
| p4 | 6 | 4 | 5  | 9 |
| p5 | 7 | 1 | 0  | 1 |

Gantt Chart:

| p1 | p3 | p5 | p2 | p4 |
| ---: | ---: | ---: | ---: | ---: |
| ---5 | ---7 | ---8 | ---11 | --- 15 |

#### Priority scheduling

|Process| Burst Time | Priority | Waiting Time |
|:---:|:---:|:---:| :---: |
| p1 | 10 | 3 | 6 |
| p2 | 1 | 1 | 0  |
| p3 | 2 | 4 | 16 |
| p4 | 1 | 5 | 18 |
| p5 | 5 | 2 | 1  |

Gantt Chart:

| p2 | p5 | p1 | p3 | p4 |
| ---: | ---: | ---: | ---: | ---: |
| ---1 | ---6 | ---16 | ---18 | --- 19 |

#### RR scheduling (Round-robin scheduling)


#### Process synchronization


#### Critical section


#### Semaphore


#### Deadlock


#### Starvation


#### Dinning philosopher


#### Monitor


#### Deadlock prevention and avoidance


#### Paging Virtual memory


#### Page replacement algorithms
