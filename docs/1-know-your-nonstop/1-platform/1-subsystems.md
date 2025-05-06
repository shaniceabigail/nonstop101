---
sidebar_label: 'Subsystems Overview'
sidebar_position: 1
---

# NonStop Subsystems: A Technical Overview

NonStop systems are renowned for their fault-tolerant architecture and high availability. At the core of this reliability are the various subsystems that work together to ensure continuous operation. This article explores the key aspects of NonStop subsystems and their role in maintaining system integrity.

## Kernel Subsystem
The Kernel subsystem is the foundation of NonStop server management. It configures and maintains subsystem managers, providing essential services for system operation.Key Features:
•	Configuration Management: The Kernel subsystem allows administrators to configure various system parameters using the **Subsystem Control Facility (SCF)**.
•	Attribute Control: Administrators can modify system attributes such as TNSMISALIGN, which controls how data misalignment is handled.

## Time Synchronization
NonStop systems rely on accurate time synchronization for various operations:
•	Time Zone Management: The Kernel subsystem manages time zone offsets and daylight saving time settings.
•	System Clock: Precise timekeeping is crucial for transaction processing and log management.

## Process Pair Management
One of the hallmarks of NonStop architecture is the use of process pairs for fault tolerance:
•	Primary and Backup Processes: Critical processes run as pairs, with a primary and backup on different processors.
•	Automatic Failover: In case of a primary process failure, the backup seamlessly takes over, ensuring continuous operation.

## I/O Subsystem
The I/O subsystem in NonStop servers is designed for high performance and reliability:
•	Redundant Paths: Multiple I/O adapters and storage devices are interconnected to prevent single points of failure.
•	Dynamic Load Balancing: The system automatically distributes I/O operations across available resources for optimal performance.

## NonStop SQL
NonStop SQL is a critical subsystem for database management:
•	Distributed Processing: It leverages the parallel processing capabilities of NonStop servers for high-performance transaction processing.
•	Data Integrity: NonStop SQL ensures data consistency across distributed nodes, even in the event of hardware failures.

## Manageability Subsystems
NonStop systems include various manageability subsystems to simplify administration:
•	SCF (Subsystem Control Facility): A command-line interface for configuring and managing NonStop subsystems.
•	Measure: A subsystem for performance measurement and analysis.
•	Safeguard: Provides security management and access control features.
