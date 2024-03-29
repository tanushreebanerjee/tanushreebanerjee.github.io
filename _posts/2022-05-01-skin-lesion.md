---
layout: post
title:  "Bias in Skin Lesion Classification	"
date: 2023-05-01
image: /iw_spr22.png
categories: other
course: Independent Work Project, Spring 2022
author: "Tanushree Banerjee"
authors: "<strong>Tanushree Banerjee</strong>, Olga Russakovsky"
paper: pdfs/iw_spr22_final.pdf
slides: pdfs/iw_spr22_slides.pdf
venue: 
arxiv: 
code: 
website: 
---
I studied the tendency of Visual Question Answering (VQA) models to predict non-existent objects when queried with an image and an unrelated question. Based on these observations, I devised a procedure to quantify the extent to which VQA models can identify unrelated questions based on the tradeoff between the risk of failing to identify an irrelevant question and the number of related questions incorrectly identified as unrelated. Then, I proposed several approaches to identify questions unrelated to an image. The best approach involved quantifying the extent to which an off-the-shelf VQA model relies on the text input relative to the image input to determine whether the input image-question pair is unrelated. This approach achieved a 40% improvement over the random baseline.
