---
layout: page
title: Bioinformatics
tagline: Introduction Amino Protein Database Nucleotide
categories: bioinformatics
---


Analysis of: 

- gene
- genome
- protein
- cell
- ecological system
- medical information
- robots
- artifical intelligence


Use the knowledge for:

- prediction
- modelling
- design

amino acid: 氨基酸

data type：

---

| primary data | sequence | --> | primary database |
| :---: | :---: | :---: |:---: |
| AATGCGTAAGTC |  DNA | | | 
| DMPVERILEALAVE | amino acid | | | 

---

| secondary data | secondary protein structure | --> | secondary db |
| :---: | :---: | :---: |:---: |
| "motif" |  e.g. | | | 
| regular expressions |  e.g. | | | 
|  block |  e.g. | | | 
| profiles |  e.g. | | | 
| fingerprints |  e.g. | | | 

---

| teriary data | teriary protein structure | --> | teriary db |
| :---: | :---: | :---: |:---: |
| atomic co-ordinates | domains, folding units | | | 

---

databases:

1. Nucleotide: 核酸
    - primary db
    - secondary db
    - tritiary db

    - EMBL [The European Molecular Boilogy Laboratory] Germany
    - GenBank 
    - DDBJ [DNA data bank of Janpan]

    - All together is under INSDC [International Nucleotide Sequence Databases] 

2. protein
    - sequence
        + Uniprot
        + PIR
        + SwissProt
    - interaction
        + Biogrid
        + STRING
    - structure
        + PDB
        + CATH
        + SCOPE

3. INSDC [International Nucleotide Sequence Databases]
    - EMBL (EUROPE)
        + EMBL
        + EBI
    - DDBJ (JAPAN)
        + NIG
        + CIB
    - GenBank (USA)
        + NLM
        + NCBI

---

sequence alignment

| 1 | 2 | 3 | 4 | 5 | 6 |
| :---: | :---: | :---: | :---: |:---: | :---: |
| A | T | C | G | -> | Sequence one |
|   | T | C | A | -> | Sequcece two |
| GAP | MATCH | MATCH | MISMATCH | | | 

**we wanna use that way to get maximum match**

| 1 | 2 | 3 | 4 | 5 | 6 |
| :---: | :---: | :---: | :---: |:---: | :---: |
| A | T | C | G | -> | Sequence one |
| T | C | A | | -> | Sequcece two |
| MISMATCH | MISMATCH | MISMATCH | GAP | | | 

---

Score for sequcen alignment

- Match **positive** score
- Mismatch **negtive** score
- Gap **negtive** score

Align sequence must be more than one sequence

Align sequence is basic of the bioinformatics
