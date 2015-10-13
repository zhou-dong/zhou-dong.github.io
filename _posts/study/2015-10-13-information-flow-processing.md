---
layout: page
title: Information Flow Processing
tagline: 

---

#### Section 1

- Information Flow Processing(IFP)

- Information of Data no need to be stored into Database systems
    + Not deal with persistent data
    + Deal with transient data

- Data from different source 
    + Device sensors
    + Mobile phones
    + Web servers

- Contributions to this model come from different communities
    + distributed information systems
    + nusiness process automation
    + control systems
    + network monitoring
    + sensor networks
    + middleware in general

May be come from the publish-subsribe domain


#### Section 2 

describes the IFP domain in more detail, provides an initial description of the different technologies that have been developed to support it, and explains the need for combining the best of different worlds to fully support IFP applications. 

##### Active database system

- Something origial DB can not do
- There are several tools classified as active database systems, with different software architectures, functionality, and oriented toward different application domains

---

#### Section 3 

describes a framework to model and analyze the different aspects that are relevant for an IFP engine from its functional architecture, to its data and processing models, to the language it provides to express how information has to be processed, to its run-time architecture. 

1. Functional Model
    1. Each time a new item (including those periodically produced by the Clock) enters the engine through the Receiver
    2. Evaluates all the rules currently present in the Rules store to find those whose condition part is true.
    3. At the end of this phase we have a set of rules that have to be executed.

2. Processing Model
    - Together with the last information item entering the Decider, the set of deployed rules, and the information stored in the History and in the Knowledge Base, three additional concepts concur at uniquely determining the output of a single detection- production cycle: the selection, consumption, and load shedding policies adopted by the system.
    - some systems offer a programmable policy, by including special language constructs that enable users to decide, often rule by rule, if they have to fire once or more than once at each detection-production cycle, and in the former case, which elements have to be actually selected among the different possible combinations. 
    - Load shedding. Load shedding is a technique adopted by some IFP systems to deal with bursty inputs. It can be described as an automatic drop of information items when the input rate becomes too high for the processing capabilities of the engine.

3. Deployment Model

    - A networked IFP engine focuses on minimizing network usage by dispersing processors over a wide area network, with the goal of `processing information as close as possible to the sources`.
    - In summary, in their seek for better scalability, clustered and networked engines focus on different aspects: the former on increasing the available processing power by sharing the workload among a set of well connected machines, the latter on minimizing bandwidth usage by processing information as close as possible to the sources.

4. Interaction Model 
    - In a pull observation model, the IFP engine is the initiator of the interaction to bring information from sources to the engine; otherwise we have a push observation model.
 
5. Data Model
    - Former manipulate generic data items
    - While the latter manipulates event notifications
    - In many IFP scenarios, in fact, information received from sources has an associated degree of uncertainty. As an example, if sources were only able to provide rounded data [Wasserkrug et al. 2008], the system could associate such data with a level of uncertainty instead of accepting it as a precise information.
    - Engines allow different types of information items in the same flow.

6. Time Model

    - With the term time model we refer to the relationship between the information items flowing into the IFP engine and the passing of time. More precisely, we refer to the ability of the IFP system of associating some kind of happened-before relationship to information items.
    - There is the case of systems that associate items with an interval, i.e., two timestamps taken from a global time, usually representing: the time when the related event started, the time when it ended. In this case, depending on the semantics associated with intervals, a total or a partial ordering among items can be defined.

7. Rule Model

    - Rules are much more complex entities than data. Looking at existing systems we can find many different approaches to represent rules, which depend on the adopted rule language. However, we can roughly classify them in two macro classes: transforming rules and detecting rules.

8. Language Model
    - It is worth mentioning that existing systems sometime allow users to express rules using more than one paradigm. For example, many commercial systems offer both a declarative language for rule creation, and a graphical tool for connecting defined rules in an imperative way. Moreover, some existing declarative languages embed simple operators for pattern detection, blurring the distinction between transform- ing and detecting languages.
    - SQL
    - Available Operators
    - Logistic Operators 
    - COMMAND ( A && B, A || B)

---

#### Section 4 

We use this framework in Section 4 to describe and compare the state of the art in the field.

- In the following we use the concepts introduced in Section 3 to present and classify existing IFP systems. We provide a brief description of each system and summarize its characteristics by compiling four tables.

1. Table I focuses on the functional and processing models of each system: it shows if a system includes the Clock (i.e., it supports periodic processing) and the Knowl- edge Base, and if the maximum size of the sequences (Seq) that the Decider sends to the Producer is bounded or unbounded, given the set of deployed rules. Then, it analyzes if information items produced by fired rules may re-enter the system (recursion), and if the rule set can be changed by fired actions at run-time. Fi- nally, it presents the processing model of each system, by showing its selection, consumption, and load shedding policies.

2. Table II focuses on the deployment and interaction models, by showing the type of deployment supported by each system, and the interaction styles allowed in the observation, notification, and forwarding models.

3. Table III focuses on the data, time, and rule models, presenting the nature of the items processed by each systems (generic data or event notifications), the format of data, the support for data uncertainty, and the nature of flows (homogeneous or heterogeneous). It also introduces how the notion of time is captured and rep- resented by each system, the type of rules adopted, and the possibility to define probabilistic rules.

3. Finally, Table IV focuses on the language adopted by each system, by listing its type and the set of operators available.

- Active databases
- Data Stream Management Systems
    + Usually, these systems are designed for application domains in which the timeliness requirement is less critical, like for example Internet updates monitoring. On the contrary, all remaining systems are heavily tailored for the processing of high rate streams.
- Commercial Systems
    + The platform is designed to scale by exploiting multiple cores on a single ma- chine or multiple machines in a clustered environment. 
    + Aleri Streaming Platform.
    + Coral8 CEP Engine.
    + StreamBase. 
    + Oracle CEP. 
    + Esper.
    + Tibco Business Events.
    + IBM System S. 
    + Other commercial systems. 
    + IBM WebSphere Business Events.
    + Event Zero.
    + Progress Apama Event Processing Platform.

---

#### Section 5

Discussing the results of such classification in Section 5. 

---

#### Section 6

Finally, Section 6 reviews related work, while Section 7 provides some conclusive remarks and a list of open issues.

- In this section we briefly discuss the results of on-going or past research which aims at providing a more complete understanding of the IFP domain. In particular we cover four different aspects: 

1. we present work that studies general mechanisms for IFP; 
2. we review specific models used to describe various classes of systems, or to address single issues; 
3. we provide an overview of systems presenting similarities with IFP systems; 
4. we discuss existing attempts to create a standard for the IFP domain.

- Many researchers focused on developing general mechanisms for IFP by studying (i) rule processing strategies, (ii) operator placement and load balancing algorithms, (iii) communication protocols for distributed rule processing, (iv) techniques to provide adequate levels of QoS, and (v) mechanisms for high availability and fault tolerance.
- In distributed scenarios it is of primary importance to define efficient communica- tion strategies between the different actors (sources, processors, and sinks).
- Different contributions, primarily from people working on stream processing, fo- cused on the problem of bursty arrival of data 
- Recently, a few works coming from the event-based community
- Finally, a few works have focused on high-availability and fault tolerance for dis- tributed stream processing. 

##### Other Models

- As we have seen, IFP is a large domain, including many systems. Although the literature misses a unifying model, which is able to capture and classify all existing works, various contributions are worth mentioning. 

- System Models. 
    + As described in Section 2, two main models for IFP have emerged, one coming from the database community and one coming from the event- processing community.

- Models for Single Aspects of IFP.
    + A relevant part of our classification focuses on the data representations and rule definition languages adopted by IFP systems, and on the underlying time model assumed for processing. 

- Related Systems
    + Besides the systems described in Section 4, other tools exist, which share many similarities with IFP systems.
    + Runtime Verification Tools.
    + Runtime Monitoring Tools.
    + Scalable Distributed Information Management Systems. 

---

#### Online Machine Learning
