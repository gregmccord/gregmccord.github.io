---
layout: page
title: Inferring Movie Characteristics from Dialogue
description: A novel, self-designed research paper from COS 424 at Princeton
importance: 1
category: explorations
related_publications: false
full_paper_pdf: /assets/pdf/research_papers/cos424-movie-dialogue.pdf
repository_link: https://github.com/gregmccord/cos424-research-projects/tree/main/4-movie-dialogue
---

## Overview

For the final project, we were given the open-ended assignment to perform any analysis on any dataset of our choosing. I had the idea while exploring the Netflix data to see if there were any interesting relationships in movie scripts (rather than just recommending movies based on viewing/rating history) and if that could be used to show an evolution of language and genres over time. In my survey of related work, I did not find evidence of anyone else who had followed a similar approach, so I believe this to be a novel area of research. I found a relevant movie corpus dataset on Kaggle and made my initial proposal. I broke my research into two categories - first to try and classify a movie as being older or newer based on its language and second to uncover latent patterns in the dialogue between movies of different genres. I was particularly interested to see what patterns would emerge from movies that were set in different time periods. After completing my research and making several interesting discoveries, I collected my results and put out a paper in addition to a poster session to share the interesting findings. Please see the paper linked above for the full results.

With the advent of modern LLMs, a new approach could be employed instead of the tokenized bag of words model used here. LLMs could incorporate patterns like sentence structure in ways that were unavailable several years ago. Language models are rapidly evolving, offering a wealth of possibilities for innovation and discovery, and I believe using them to further explore this field would be a fascinating extension in the future.

## Abstract

In the modern era, analysts use big data to predict outcomes and make decisions throughout different aspects of our lives. Now, algorithms are even being used to cast actors for movies and shows. The producers of the hit Netflix show House of Cards cast the protagonist based on the analysis of viewer preferences of an old British show by the same name. Someday perhaps, machine learning will even be used to generate movie scripts, but before this happens, it is imperative to understand if the set of words used in the dialogue of the movie correlates with properties of the movie itself. This study uses several methods to understand the properties of a movie using a bag-of-words representation of its dialogue to explore this paradigm. We used several labeled methods to predict well-defined characteristics of movies such as its genre(s) and year of production (old or recent). We also use an unlabeled method to infer the latent structure of each movie. We compared all classification methods using the misclassification rate and area under the receiver operating characteristic curve. For most cases of labeled prediction, the random forest classifier performed the best in terms of our evaluation metrics while logistic regression and naive bayes tended to perform equally well to each other. Latent dirichlet allocation helped us to understand the language of the movie outside of the bounds of typical forms of standard labeling methods in terms of language similarity between different genres while also demonstrating changes in the language in movies over time.

## Reproducibility

If you follow the link at the top of this page to my public repository for this project, you will be able to use these steps in order to reproduce all of the results contained within the paper. For the full results and analysis, please see the full paper.

1. Setting up the environment (all data and libraries have been included in the repository):
   1. [Download Mallet](http://mallet.cs.umass.edu/download.php) for LDA analysis
   2. [Download dialogue corpus](https://www.kaggle.com/Cornell-University/movie-dialog-corpus) from Kaggle
2. Run `python data.py [lr|nb|rf|lda|confusion]` depending on which classifier you want to use or if you want to generate the confusion matrix. This file handles:
   1. Preprocessing and tokenizing the data
   2. Assigning labels for binary classification
   3. Executes 1 of 3 families of functions:
      1. `lr/nb/rf` classifiers for new vs. old film based on the language
      2. `confusion` matrix for language used in each genre
      3. `lda` analysis to investigate the latent language space in each genre over time
