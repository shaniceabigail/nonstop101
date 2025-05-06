---
sidebar_label: 'Platform Overview'
sidebar_position: 2
---

# NonStop Platform Overview

So what is it about the NonStop that makes it fault-tolerant, reliable, and scalable? We'll take a closer look at some of its key components to have a better understanding of how it works.

## Core Concepts
At its core, NonStop has a **message-based architecture**. This architecture surrounds 2 core concepts of the operating system - processes and messages.

### Processes within NonStop
Processes are the basis of all modern computation - it is defined as a program that is running on the system.

There are application processes and system processes - they perform different functions, but behave the same way. Take a look at your own PC.

If you're running a Windows machine, Task Manager will display a list of processes. Most of the applications are the ones that you are currently running, and most are processes that run without the user's knowledge.

For a Linux or Mac OS - you can open the command prompt and type __ps - A__. A similar list of processes with current programs and existing system processes can be observed.

Processes running in the background doing important work exist on other operating systems - services in Windows, and daemons in Unix. However, there are two important differences in the way that processes work on the HPE NonStop:

#### 1. All critical operating system processes run as process pairs spanned across two CPUs.

Any process that encounters a fault is automatically switched to its backup instance When the backup instance has taken over, after only a few milliseconds, it will then become the primary, and create a new backup instance.

Process pairs implement all central OS services - they provide access to network, storage etc. A single failure of any of these services will leave the system intact.

#### 2. Named processes can exist concurrently with the same name on two different CPUs.

This is so that even if one CPU fails, the process will still be usable by the application.

### Message Based Processing
Every OS functions based on the idea of delegation - if one cannot do the task, they have to find another who can, and hand the task over. The basic agents within systems are known as the processes.

**The main difference between the way the NonStop and other systems is the way that delegation is being implemented.** 

Case: Process A wants Process B to do something
1. Process A puts together a letter descibing what needs to be done as a message, and sends it to B.

2. B does the work and sends the reply back to A.

Other operating systems typically require process A and B to be more closely coupled, such as sharing common memory.

#### Benefits of messages
1. Location Independence: Messages sent between processes can travel between the same CPU, to a differnt CPU and even to a different node in the NonStop network.

2. Fault Tolerance when using process pairs: Technically process B can consist of 2 instances, on two different CPUs as a process pair. If the first instance fails to send a reply, the NonStop OS can automatically route the message to the other instance where work is done, and process A is unaware that there was even a fault.

3. Isolation: If process B becomes internally corrupted, B cannot corrupt A. This means that the reply from B might be msising, or corrupted, but A will be able to find out and stay intact. This greatly improves the overall robustness and security of the systems.

4. Performance Manageability: By measuring resource consumption on a process basis, analysts will be able to easily identify issues with performance (see Measure).


### How processes and messages work together
Every process has its own mailbox, used to read and reply messages that arrive there. The mailbox maintains a queue of messages, so that the serving process (both application and system processes) can work on them one by one.

[insert image]

## Conclusion
it might seem like a lot of effort to implement a server to pass the message around instead of moving pointers to buffers in the kernel. However, it is because of this design that the NonStop is able to achieve its extreme reliability and scalability, into the OS.

All critical processes on the NonStop are made self-healing by running as process pairs. Also, all processes can and do run in different CPUs, even in systems that are physically far apart that communicate via messages.

And all these fault-tolerant, reliable and scalable features of the NonStop OS, can be inherited by the applications that run on the NOnStop - the development framework will take care of this for the developer.