---
layout: page
title: Fragile Families
description: A Kaggle-style research project from COS 424 at Princeton
importance: 4
category: explorations
related_publications: false
full_paper_pdf: /assets/pdf/research_papers/cos424-fragile-families.pdf
repository_link: https://github.com/gregmccord/cos424-research-projects/tree/main/2-fragile-families
---

## Abstract

Every year in the United States, millions of children and their families are evicted each year. Poverty can create a hostile environment for these children to grow up in, and as a result, the cycle of poverty can continue for generations if these children fail to gain access to education, steady employment, or other forms of aid. One such category of children are those that come from fragile families - families which are single-parent and generally low-income. These families have a greater risk of falling into poverty than the traditional nuclear family. In this assignment, we attempt to predict several response variables such as whether the fragile family was evicted or not given survey data accrued over 15 years of research of nearly $5,000$ families. This data comes from the Fragile Families Challenge and is an effort to predict how a child will perform under these circumstances and to discover what indicators in a child's upbringing should trigger red flags and indicate the need for potential third-party aid or intervention. The results of our study (and the results of other participants in the competition) have shown that the response variables were difficult to predict from the supplied data. Despite our eviction classifier (the primary response variable we focused on predicting) placing in the top 5 in the competition, our results were comparable to those of a random classifier. Ultimately, our results show that the Random Forest classifier with 500 trees predicted the outcomes best for the eviction response variable.

## Reproducibility

Due to the sensitive nature of the data, I cannot share fully reproducible code (as I cannot share the underlying data). However, I have outlined the approach that I took below and have included the code in the repository linked above. Please see the paper for the full results.

1. Run `python missingData.py` to generate `output.csv` from `background.csv` to fill missing data.
2. Run `python genData.py [all/both/question/constructed]` to create labeled versions of the training data matching the input specifications.
3. Run `python classificationDiscrete.py [eviction/layoff/jobTraining] [lr/mnb/gnb/svm/rf] [all/both/question/constructed]` generate model files:
   1. First parameter controls which discrete target you are predicting
   2. Second parameter controls the algorithm used for prediction
   3. Third parameter controls which dataset is used
4. Run `python predict.py [lr/mnb/gnb/svm/rf] [all/both/question/constructed]` to generate predictions for the specified model.
5. Run `python topTerms.py [all/both/question/constructed]` to find the top variables according to the random forest classifier.

## Challenge Results

Unfortunately, overall prediction rates from scientists across the globe were unable to accurately predict life outcomes from the dataset. However, I hope that future datasets may prove more useful in predicting and addressing these issues. Please see [here](https://ffcws.princeton.edu/news/fragile-families-challenge-mass-collaboration-paper-published) for the results of the challenge at large.
