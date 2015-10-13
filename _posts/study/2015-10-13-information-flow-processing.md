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
