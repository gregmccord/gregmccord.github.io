---
layout: page
title: Sentiment Analysis
description: A Kaggle-style research project from COS 424 at Princeton
importance: 3
category: explorations
related_publications: false
full_paper_pdf: /assets/pdf/research_papers/cos424-sentiment-analysis.pdf
repository_link: https://github.com/gregmccord/cos424-research-projects/tree/main/1-sentiment-analysis
---

## Abstract

One of the best ways for a company to receive feedback on its product is through customer reviews like those on third party sites like IMDB or Amazon. A shoe company like Nike or a film studio like Marvel Studios might seek feedback on their most recent product before beginning development on the next generation of products to cater to the desires of the customers. Companies may want to gather several data points about their product from the reviews, but in general, the major source of data they seek from a review is whether the customer felt positively or negatively about their experience with the product. In this paper, we address the problem of automating the process of determining the sentiment of each customer in their review. We initially analyze 3000 customer reviews from Yelp, IMDB, Netflix, and Amazon and classify them as either positive or negative. We train the classifiers on bag-of-words representations of each review, with and without feature selection. We find that most of the methods tested, especially the Support Vector Machine, prove effective in classifying the data based on estimates of misclassification rate and the area under the Receiver Operating Characteristic (ROC) curve while the K-Nearest Neighbors classifier fell short. However, we also observe the power of a pre-trained recursive neural network, which proves to be even more effective than any of our classifiers.

## Reproducibility

If you follow the link at the top of this page to my public repository for this project, you will be able to follow the following steps in order to reproduce all of the results contained within the paper. See the corresponding README for additional steps.

1. Setup your python environment using requirements.txt in the root directory. I am using Python 3.7.4 in a virtual environment.
2. Run `python preprocessSentences.py` to create the output embeddings for the train data set.
3. Run `python featureSelection.py` to perform feature selection on the embeddings using a LinearSVC.
   1. This program performs 5-fold cross-validation to tune the hyperparameters.
   2. Once tuned, it outputs the "\_transform" embeddings.
4. Generate the embeddings for the test dataset:
   1. Run `python preprocessSentences.py -v out_vocab_5.txt` to create the output embeddings for the regular test data set.
   2. Run `python preprocessSentences.py -v out_vocab_transform.txt` to create the output embeddings for the transformed test data set.
5. Run the classifier for any combination of regular/transformed input and any of the supported classifiers
   1. Use the command `python classification.py [True/False] [svm/nb/knn/lr/rf]`.
   2. The random forest classifier use a set seed for reproducibility.
6. To sort the words in the vocabulary by importance in the random forest model by Gini Criterion, you can run `python preprocessSentences.py [True/False]` to use either the original or transformed dictionary.
7. You can then compare these results to the StanfordCoreNLP results
   1. Download the standalone server [here](https://stanfordnlp.github.io/CoreNLP/download.html)
   2. Launch the server with this command `java -mx5g -cp "*" edu.stanford.nlp.pipeline.StanfordCoreNLPServer -timeout 10000`
   3. Use the server to score the test dataset with `python testStandfordNLP.py`
   4. Close the server.
