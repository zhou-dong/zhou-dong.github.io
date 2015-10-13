---
layout: page
title: Information Flow Processing
tagline: 

---

#### Information Flow Processing(IFP)

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

There are several tools classified as active database systems, with different soft- ware architectures, functionality, and oriented toward different application domains

---

#### Section 3 

describes a framework to model and analyze the different aspects that are relevant for an IFP engine from its functional architecture, to its data and processing models, to the language it provides to express how information has to be processed, to its run-time architecture. 

1. Functional Model
    1. Each time a new item (including those periodically produced by the Clock) enters the engine through the Receiver
    2. Evaluates all the rules currently present in the Rules store to find those whose condition part is true.
    3. At the end of this phase we have a set of rules that have to be executed.

2. Processing Model
    Together with the last information item entering the Decider, the set of deployed rules, and the information stored in the History and in the Knowledge Base, three additional concepts concur at uniquely determining the output of a single detection- production cycle: the selection, consumption, and load shedding policies adopted by the system.
    1. 


---

#### Section 4 

We use this framework in Section 4 to describe and compare the state of the art in the field.

---

##### Section 5

Discussing the results of such classification in Section 5. 

---

##### Section 6

Finally, Section 6 reviews related work, while Section 7 provides some conclusive remarks and a list of open issues.

---

#### Online Machine Learning
