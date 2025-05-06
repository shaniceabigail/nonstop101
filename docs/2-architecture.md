---
sidebar_label: 'Technical Architecture'
sidebar_position: 2
---

# System Architecture
In the market today, a variety of hardware platforms run an even more diverse range of operating systems, and aside from a few other vendors, most hardware and software pieces seldom come from the same vendor. **HPE NonStop's tight hardware and software integration** enables fault-tolerance and its self-healing capabilities to be consistent throughout its hardware and software components.

![system-architecture-v1](/img/system-architecture.png)

### Clusters vs NonStop's Fault Tolerance 
Quality servers with RAID (redundant array of independent disks) arrays is one of the ways to provide basic fault tolerance to storage. However this level of fault tolerance is often insufficient for most applications - hence the invention of **clusters**. 

Clusters are a set of tightly coupled servers and systems sharing resources, to protect mission-critical workloads from certain failures. Clustering is a complex task - requiring meticulous load balancing and fine tuning, especially with syncronous data between individual systems.

NonStop's hardware reinforces redundancy to the extreme, providing effectively 100 percent uptime - every hardware component on the NonStop system is duplicated. This means that there is at least two storage units, two processors and two RAM busses.

### Self-Healing Software
From a high-level overview, the HPE NonStop system can be described as a self-managing, self-healing cluster in one OS image. This is possible because of the **shared nothing architecture**, preventing malware and viruses from spreading between the components of the systems.

Critical operating system processes run in what is called **process pairs** in over two CPUs, allowing the processes to survive failures of any one particular CPU.

Because of the design, the software is able to **transparently fail-over** over to the second set of components without interrupting existing operations.


# NonStop TS/MP - Transaction Services / Massively Parallel

Under the hood, HPE NonStop Pathway with TS/MP software provides the application server functionality to develop and deploy business-critical online transaction processing (OLTP) applications on HPE NonStop X servers. 

TS/MP allows developers to focus on implementing and refining business logic without having to be concerned about common application services such as:
- Load balancing
- Communications I/O
- Memory management 
- Fault tolerance 
- Threading and scheduling

The module supports applications written in C/C++, COBOL, Java and TAL, and is used internally by many NonStop products to inherit the platform's high availability and fault tolerance characteristics.

<!-- 
# Core Architecture

NonStop systems employ a loosely-coupled cluster of processors connected by a high-speed bus known as InfiniBand from Mellanox. This architecture is fundamental to the system's fault tolerance and scalability.

## Key Features:
- **Shared-Nothing Architecture**: Each processor operates independently without sharing memory, enhancing fault isolation and system robustness.

- **InfiniBand**: A high-speed interconnect that provides redundant paths between system components, ensuring continuous communication even if one path fails.

# NonStop Advanced Architecture (NSAA)
The NonStop Advanced Architecture (NSAA) represents an evolution in the platform's design, emphasizing modular redundancy and the use of standard hardware components.
- **Modular Redundancy**: NSAA systems can be configured with dual or triple modular redundancy, enhancing fault tolerance by ensuring that multiple copies of critical components are available.

- **Standard Hardware Integration**: NSAA leverages standard HPE's 4-way SMP Xeon server modules, combining off-the-shelf hardware with NonStop's robust software architecture.

# Processor and Memory Management
NonStop systems utilize a distributed processing model to ensure continuous operation:
- **Multiple Processors**: Each processor runs its own copy of the NonStop OS, allowing the system to scale horizontally by adding more processors.
- **Process Pairs**: Critical processes are run as primary and backup pairs on different processors. In case of a failure, the backup process seamlessly takes over, ensuring no interruption in service.

# I/O Subsystem
The I/O subsystem in NonStop systems is designed for high performance and reliability:
- **Redundant Paths**: Multiple I/O adapters and storage devices are interconnected to prevent single points of failure.
- **Dynamic Load Balancing**: The system automatically distributes I/O operations across available resources for optimal performance.

# Software Components
The software stack is integral to the NonStop architecture, providing the necessary tools for fault-tolerant operations:
1. **NonStop OS**: A fault-tolerant operating system that supports process pairs and ensures data integrity during failovers. It includes the Guardian layer and the Open System Services (OSS) personality, which provides a Unix-like interface.

2. **NonStop SQL**: A distributed, parallel database management system optimized for high-performance transaction processing.
3. **Middleware**: Components like Pathway for transaction processing and NonStop Server for Java for running Java applications.

# Manageability and Monitoring
NonStop systems include robust tools for system management and monitoring:
- **Subsystem Control Facility (SCF)**: A command-line interface for configuring and managing NonStop subsystems.
Measure: A subsystem for performance measurement and analysis.
- **Safeguard**: Provides security management and access control features.

# Scalability
The NonStop architecture is designed to scale seamlessly:
- **Horizontal Scaling**: Additional processors can be added to increase system capacity without disrupting operations.
- **Vertical Scaling**: Support for more powerful processors and increased memory capacity within each node.

# Conclusion
The NonStop technical architecture combines hardware redundancy, distributed processing, and specialized software components to create a system capable of continuous operation even in the face of hardware failures or software errors. This unique design makes NonStop systems ideal for applications in finance, telecommunications, and other industries where downtime can have severe consequences.

By leveraging standard hardware components within a fault-tolerant framework, the NonStop Advanced Architecture continues to evolve, providing cutting-edge performance while maintaining the platform's legendary reliability and availability. -->