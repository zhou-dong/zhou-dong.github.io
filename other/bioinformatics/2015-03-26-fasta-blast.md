---
layout: page
title: FASTA AND BLAST
tagline: 
categories: FASTA BLAST bioinformatics
---


Pairwise alignment

- Global
    + Best score from among alignments of full-length sequences
    + Needelman-Wunch algorithm
- Local
    + Best score form among alignments of partial sequences
    + Smith-Waterman algorithm

FASTA: First fast sequence search algorithm for comparing query sequency against a database

BLAST: Basic Locial Alignment Search Technique, improvement of FASTA: search speed, ease of use, statistics rigor.

---

FASTA and BLAST

Dynamic programming

Basic idea: short lengths of exact matches:

- First: identify very short exact matches
- Next: the best short hits from the first step are extended to longer regions of similarity
- Finally: the best hits are optimized

---

FASTA Algorithm:

Derived from logic of dot plot

- computer best diagonals from all frames of alignment
- the method look for exact matches between words in query and test sequence
    + DNA sequence are usually 6 nucleotides long
    + protein words are 2 amino acids long

Five steps of FASTA:

1. idenfity common k-words between I and J （把query和Test同时放在一个matrix中）
2. score diagonals with k-word matches, identify 10 best diagonals （在matrix中，标记处横坐标和纵坐标相同的点，然后连城线段）
3. recore initial regions with a substitution of matrix (把一些较短的线段的分值调低)
4. join inital regions with gaps, penalise for gaps
5. perform dynamic programming to find final alignments

---

BLAST Algorithm

- BLAST can not handle gaps well

Three steps of BLAST:

1. word search method
    - find the list of high scoring words of length w
    - compare the word list to database and identify exact matches
2. identification of exact word method
    - break the query into words
    - break the database sequences into words
3. maximum segment pair alignment method
    - extend hits one base at a time
    - scroing of alignment

The result of word matching and attemps to extend the alignment are segments called HSPs:
- high scoring segmeng pair

BLAST ofter product sereral short HSPs

WEBSITE: www.expasy.org
