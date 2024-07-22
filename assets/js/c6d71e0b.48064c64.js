"use strict";(self.webpackChunktandem=self.webpackChunktandem||[]).push([[8019],{2087:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=s(4848),r=s(8453);const i={sidebar_label:"Technical Architecture",sidebar_position:2},o="NonStop Technical Architecture",a={id:"architecture",title:"NonStop Technical Architecture",description:"NonStop systems, developed by Hewlett Packard Enterprise, are designed for environments that require continuous availability and fault tolerance. This article delves into the technical architecture of NonStop systems, highlighting their unique features and components.",source:"@site/docs/2-architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/nonstop101/docs/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/2-architecture.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Technical Architecture",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/nonstop101/docs/overview"},next:{title:"Know Your NonStop",permalink:"/nonstop101/docs/category/know-your-nonstop"}},c={},l=[{value:"Key Features:",id:"key-features",level:2}];function d(e){const n={h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"nonstop-technical-architecture",children:"NonStop Technical Architecture"}),"\n",(0,t.jsx)(n.p,{children:"NonStop systems, developed by Hewlett Packard Enterprise, are designed for environments that require continuous availability and fault tolerance. This article delves into the technical architecture of NonStop systems, highlighting their unique features and components."}),"\n",(0,t.jsx)(n.h1,{id:"core-architecture",children:"Core Architecture"}),"\n",(0,t.jsx)(n.p,{children:"NonStop systems employ a loosely-coupled cluster of processors connected by a high-speed bus known as ServerNet. This architecture is fundamental to the system's fault tolerance and scalability."}),"\n",(0,t.jsx)(n.h2,{id:"key-features",children:"Key Features:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Shared-Nothing Architecture"}),": Each processor operates independently without sharing memory, enhancing fault isolation and system robustness."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ServerNet"}),": A high-speed interconnect that provides redundant paths between system components, ensuring continuous communication even if one path fails."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"nonstop-advanced-architecture-nsaa",children:"NonStop Advanced Architecture (NSAA)"}),"\n",(0,t.jsx)(n.p,{children:"The NonStop Advanced Architecture (NSAA) represents an evolution in the platform's design, emphasizing modular redundancy and the use of standard hardware components."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Modular Redundancy"}),": NSAA systems can be configured with dual or triple modular redundancy, enhancing fault tolerance by ensuring that multiple copies of critical components are available."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Standard Hardware Integration"}),": NSAA leverages standard HPE's 4-way SMP Xeon server modules, combining off-the-shelf hardware with NonStop's robust software architecture."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"processor-and-memory-management",children:"Processor and Memory Management"}),"\n",(0,t.jsx)(n.p,{children:"NonStop systems utilize a distributed processing model to ensure continuous operation:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Multiple Processors"}),": Each processor runs its own copy of the NonStop OS, allowing the system to scale horizontally by adding more processors."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Process Pairs"}),": Critical processes are run as primary and backup pairs on different processors. In case of a failure, the backup process seamlessly takes over, ensuring no interruption in service."]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"io-subsystem",children:"I/O Subsystem"}),"\n",(0,t.jsx)(n.p,{children:"The I/O subsystem in NonStop systems is designed for high performance and reliability:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Redundant Paths"}),": Multiple I/O adapters and storage devices are interconnected to prevent single points of failure."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Dynamic Load Balancing"}),": The system automatically distributes I/O operations across available resources for optimal performance."]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"software-components",children:"Software Components"}),"\n",(0,t.jsx)(n.p,{children:"The software stack is integral to the NonStop architecture, providing the necessary tools for fault-tolerant operations:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"NonStop OS"}),": A fault-tolerant operating system that supports process pairs and ensures data integrity during failovers. It includes the Guardian layer and the Open System Services (OSS) personality, which provides a Unix-like interface."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"NonStop SQL"}),": A distributed, parallel database management system optimized for high-performance transaction processing."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Middleware"}),": Components like Pathway for transaction processing and NonStop Server for Java for running Java applications."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"manageability-and-monitoring",children:"Manageability and Monitoring"}),"\n",(0,t.jsx)(n.p,{children:"NonStop systems include robust tools for system management and monitoring:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Subsystem Control Facility (SCF)"}),": A command-line interface for configuring and managing NonStop subsystems.\r\nMeasure: A subsystem for performance measurement and analysis."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Safeguard"}),": Provides security management and access control features."]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"scalability",children:"Scalability"}),"\n",(0,t.jsx)(n.p,{children:"The NonStop architecture is designed to scale seamlessly:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Horizontal Scaling"}),": Additional processors can be added to increase system capacity without disrupting operations."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Vertical Scaling"}),": Support for more powerful processors and increased memory capacity within each node."]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"The NonStop technical architecture combines hardware redundancy, distributed processing, and specialized software components to create a system capable of continuous operation even in the face of hardware failures or software errors. This unique design makes NonStop systems ideal for applications in finance, telecommunications, and other industries where downtime can have severe consequences."}),"\n",(0,t.jsx)(n.p,{children:"By leveraging standard hardware components within a fault-tolerant framework, the NonStop Advanced Architecture continues to evolve, providing cutting-edge performance while maintaining the platform's legendary reliability and availability."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(6540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);