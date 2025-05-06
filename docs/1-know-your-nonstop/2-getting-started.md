---
sidebar_label: 'Crash Course - Guardian'
sidebar_position: 2

tags:
- guardian
---
# Getting Started with HPE NonStop Guardian

HPE NonStop Guardian is a robust operating system designed for mission-critical environments that require high availability and fault tolerance. This guide will help you get started with the basics of NonStop Guardian.

Watch [this video](https://vimeo.com/showcase/7776942/video/479116681) to understand the basic concepts of the NonStop system! 

## System Access

To begin working with NonStop Guardian, you'll need to access the system through a terminal emulator. The most common method is using [MR-Win6530, a Windows-based terminal emulator specifically designed for NonStop systems](https://www.comforte.com/fileadmin/Collateral/FS_MRWin6530.pdf).

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

[5] http://www.nonstoptools.com/manuals/Guardian-Operations-Guide.pdf


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
- NSDevOps --> -->