---
layout: post
title:  "Lie Detection in the Diplomacy Game using Large Language Models"
date:   
image: images/placeholder.png
categories: research
author: "Tanushree Banerjee"
authors: "<strong>Tanushree Banerjee</strong>, Richard Zhu, Runzhe Yang, Denis Peskov, Brandon Stewart, Karthik Narasimhan"
venue: 
arxiv: 
code: 
website: 
---
We proposed a bootstrapping framework that leverages self-generated feedback to enhance LLM reasoning capabilities for nuanced natural language inference tasks. This framework consists of three stages: (i) the suggestion stage, where a cost-effective LLM generates an initial prediction; (ii) the feedback collection stage, where an LLM provides feedback on initial predictions; (iii) the modification stage, where an LLM refines the initial predictions based on the auto-generated feedback.
We investigated our proposed framework for detecting deception in Diplomacy games by collecting a novel dataset of human feedback on initial predictions and comparing the modification stage performance when using human feedback rather than LLM-generated feedback. Our LLM-generated feedback-based approach achieved superior performance, with a 39% improvement over the zero-shot baseline in lying-F1 without any training required.
