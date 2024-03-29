---
layout: post
title:  "Lie Detection in the Diplomacy Game using Large Language Models"
date: 2023-07-01
image: /diplomacy.png
categories: other
course: Independent Work Project, Spring 2022
author: "Tanushree Banerjee"
authors: <strong>Tanushree Banerjee</strong>, <a href="https://richardzhu123.github.io/">Richard Zhu</a>,
<a href="https://runzhe-yang.science/">Runzhe Yang</a>, <a href="https://denis.ai/">Denis Peskov</a>,<a href="https://bstewart.scholar.princeton.edu/">Brandon Stewart</a>,<a href="https://www.cs.princeton.edu/~karthikn/">Karthik Narasimhan</a>
paper: pdfs/diplomacy_main.pdf
slides: pdfs/diplomacy_slides.pdf
venue: Under review
arxiv: 
code: 
website: 
---
We proposed a bootstrapping framework that leverages self-generated feedback to enhance LLM reasoning capabilities for nuanced natural language inference tasks. This framework consists of three stages: (i) the suggestion stage, where a cost-effective LLM generates an initial prediction; (ii) the feedback collection stage, where an LLM provides feedback on initial predictions; (iii) the modification stage, where an LLM refines the initial predictions based on the auto-generated feedback.
We investigated our proposed framework for detecting deception in Diplomacy games by collecting a novel dataset of human feedback on initial predictions and comparing the modification stage performance when using human feedback rather than LLM-generated feedback. Our LLM-generated feedback-based approach achieved superior performance, with a 39% improvement over the zero-shot baseline in lying-F1 without any training required.
