---
sidebar_label: 'NonStop for Dummies - A Summary'
sidebar_position: 1

tags:
- where to start
---
# NonStop for Dummies - A Summary

HPE NonStop is an **integrated hardware and software solution** that has been designed and **built to survive the loss of components is considered to be critical to other systems**.

It is a self-healing platform, with the ability to reconfigure itself in the case of failure. HPE NonStop, or Tandem, as it is also fondly remembered - is used by organizations who need their systems to be always on.

## HPE NonStop today
HPE NonStop servers have been around for more than 50 years, and are the backbone of core systems that most of us don't think twice about using today.

**Immigration, manufacturing, ATMs and point-of-sale systems (POS)**, are just some of the applications that depend on HPE NonStop to reduce global downtime to a couple of seconds of unplanned downtime a year.

### Common Characteristics of NonStop Workloads
The exponential increase in data generated demands for mission-critical data to be **have data integrity and availability**. This means that the data generated has to be consistent and available at any point in time.

In the industry, operations on such data is known as a transaction - **either the entire operation happens, or nothing happens**. For example, either money is withdrawn from your savings account, and dispensed at the ATM you're getting it from, or nothing happens at all. 

The system either performs all the steps required to complete the transaction, or none of them.

### Fault Tolerance and High Availability
Aside from maintaining transaction and data integrity, fault tolerance and high availability have also been built into the NonStop. **Fault tolerance in the NonStop mean that no single point of failure will impact the system.**

High availabilty, as defined by the IDC (Intenational Data Corporation), means that **an application is available even in the face of failure in part of the system, avoiding any planned or unplanned outages.** This translates to a total downtime of about 30 seconds a year, at 99.9999% uptime.

### Data Integrity and Reliability
Data integrity is the quality of maintaining data correctly, despite flaws in the surrounding systems, and a reliable system is one that would rather not return a result, rather than returning a wrong result or corrupting a database.

A mission critical system should be one that is reliable, available and fault-tolerant.


## What makes the NonStop nonstop
In the market today, a variety of hardware platforms run an even more diverse range of operating systems, and aside from a few other vendors, most hardware and software pieces seldom come from the same vendor. **HPE NonStop's tight hardware and software integration** enables fault-tolerance and its self-healing capabilities to be consistent throughout its hardware and software components.

### Clusters vs NonStop's Fault Tolerance 
Quality servers with RAID (redundant array of independent disks) arrays is one of the ways to provide basic fault tolerance to storage. However this level of fault tolerance is often insufficient for most applications - hence the invention of **clusters**. 

Clusters are a set of tightly coupled servers and systems sharing resources, to protect mission-critical workloads from certain failures. Clustering is a complex task - requiring meticulous load balancing and fine tuning, especially with syncronous data between individual systems.

NonStop's hardware reinforces redundancy to the extreme, providing effectively 100 percent uptime - every hardware component on the NonStop system is duplicated. This means that there is at least two storage units, two processors and two RAM busses.

### Self-Healing Software
From a high-level overview, the HPE NonStop system can be described as a self-managing, self-healing cluster in one OS image. This is possible because of the **shared nothing architecture**, preventing malware and viruses from spreading between the components of the systems.

Critical operating system processes run in what is called **process pairs** in over two CPUs, allowing the processes to survive failures of any one particular CPU.

Because of the design, the software is able to **transparently fail-over** over to the second set of components without interrupting existing operations.

<!-- ## Platform Overview -->



<!-- 
### TACL: Your Command Interface

Once connected, you'll interact with the system using TACL (Tandem Advanced Command Language). TACL is the primary command-line interface for Guardian.

Here are some basic TACL commands to get you started:

- `LOGON [username]`: Log into the system
- `VOLUME [$disk.subvolume]`: Change the current subvolume
- `FILES`: List files in the current subvolume
- `TYPE`: Display the contents of a file
- `EDIT`: Open the text editor to create or modify files
- `RUN`: Execute a program
- `HELP`: Display help information for commands

### File System Structure

Guardian uses a hierarchical file system structure:

- System: The top level, represented by a backslash ($$
- Volume: A disk or logical partition, e.g., $DATA
- Subvolume: A directory-like structure within a volume
- File: Individual files within a subvolume

A full file name might look like this: \SYSTEM.$DATA.MYSUBVOL.MYFILE

### Process Management

Guardian processes are identified by a process name or a process ID. Use the `STATUS` command to view running processes and the `STOP` command to terminate a process.

### Security

Guardian uses a robust security model. Users are assigned to user groups, and access to files and other system resources is controlled through access control lists (ACLs).

### Developing Applications

For application development, Guardian supports various programming languages, including COBOL, C, C++, and Java. The specific development environment will depend on your chosen language and tools.

### Monitoring and Management

Guardian provides several tools for system monitoring and management:

- Measure: Performance monitoring subsystem
- Pathway: Transaction processing environment
- TMF (Transaction Management Facility): For managing distributed transactions

As you become more familiar with Guardian, you'll discover its powerful features for ensuring high availability, scalability, and data integrity in mission-critical environments.

Remember, this is just a starting point. HPE provides comprehensive documentation and training resources to help you master the NonStop Guardian environment.

### Citations:

[1] https://img1.wsimg.com/blobby/go/9a32841c-0d54-4ad0-8acd-a5b15c41cae1/downloads/jajorogatilaneba.pdf

[2] https://www.hpe.com/us/en/collaterals/collateral.a50005133enw.html

[3] https://gtug.de/Download/Tagungen/2019_05/Bernhard%20-%20GTUG%20May%202019%20final%20external.pdf

[4] https://docs.oracle.com/en/middleware/goldengate/non-stop/12.3.0.1/reference/reference-guide-oracle-goldengate-hp-nonstop-guardian.pdf

[5] http://www.nonstoptools.com/manuals/Guardian-Operations-Guide.pdf -->


<!-- # Getting Started

## Platform
- Logging into the TACL System
- Logging into OSS
- Navigating subsystems
    - File Systems
        - FUP
        - Overview of NonStop DB (Enscribe) - link it below
        - link to the page in documentation
    - Monitoring and System Analytics - MEASURE
    - Subsystem Managements - Subsystem Control Facility (SCF)
    - User Authentication - SAFECOM
    - Containerisation - PATHCOM (referenced later)
- Starting and Stopping Programs

## Database
### SQL/MX
- Logging into CLI
- CRUD
- ACID Properties 
- **WebDBS

### SQL/MP
- Logging into CLI
- CRUD

### Enscribe
- CRUD
- API Based Access - CRUD 
    <!-- - J Toolkit - key seq, queue seq and entry seq - CRUD using Java
    - J Cache -  -->

<!-- ## Middleware
Layer that works between the Database and Platform
- TS/MP (containerisation)
- Java Middleware
- JEE Containers
- TMF


## Development Environment
- NSDEE - language compilers and runtimes
- NSDevEnv (on Cloud)
- NSDevOps -->