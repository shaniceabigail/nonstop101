---
sidebar_label: 'Overview'
sidebar_position: 1

tags:
- where to start
---

# What is the NonStop?
[Watch: HPE NonStop Solutions: Always on and always adapting ](https://www.hpe.com/h22228/video-gallery/us/en/f02dbc84-c372-4228-a114-aab60fb43e10/hpe-nonstop-solutions--always-on-and-always-adapting/video/)

NonStop is a platform that runs some of the world’s most exciting workloads in our day-to-day life. From producing luxury cars, to making payments in our grocery shops, NonStop is the platform that lets our customers, and their engineers get their sleep, while their mission-critical applications continue in data centres and on private clouds.

![What Makes NonStop, NonStop](/img/vp.png)


## Many Nodes, One System Administration

Typically, a system of multiple nodes would require a team of administrators to maintain the cluster and ensure load is balanced when there is failure. **The more nodes we have, the more complex the system**.

Not for the NonStop.

On this platform, a cluster of multiple nodes (we're talking about up to 1000+ CPUS) is seen as one single system image. We do not worry about version control across the nodes, and any code to handle failures - data and processes are mirrored across the entire system and **a NonStop system of many nodes is seen as one**.

## Patented Process Pair Technology
The NonStop OS runs applications and its processes using the MPP (massively parallel) architecture, which is a shared-nothing architecture, with mirrored paths between instructions etc.

It is IDC Availability Level 4 and provides continuous, uninterrupted operation in the event of failure.

This means we specialise in applications that require clustering for highest availabilities.

![Simplicity is Best](/img/simplicity.PNG)

The NonStop OS has patented its fault-tolerant and self-healing technology by allowing paired processes to takeover when a primary component fails.

### What happens when there is a process failure?

1. Primary process fails.

2. Backup process takes over the role of the primary process and becomes the new primary process.

3. The new primary process then starts a new backup process in the original CPU of the old primary process.

The process can repeat as many times as necessary to ensure the **highest level of availability** qualified by IDC.

### What happens where is a component failure / online upgrades?
Let's take a scenario where one of the CPUs fail in a NonStop.

1. Primary component fails.

2. Backup component takes over as the new primary component - all processes assigned to the both of them will be done by the new primary component.

3. Old primary component restarts itself.

Let's take a look at what 


<!-- cooperative and interuptive OS -->

