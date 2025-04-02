---
layout: page
title: Netflix Genre-Based Predictions
description: An open-ended research project from COS 424 at Princeton
importance: 2
category: explorations
related_publications: false
full_paper_pdf: /assets/pdf/research_papers/cos424-netflix-recommendations.pdf
repository_link: https://github.com/gregmccord/cos424-research-projects/tree/main/3-netflix-recommendations
---

## Abstract

Over the past 5 years, Netflix has grown from having 26.5 million subscribers in 2012 to having 117.6 million subscribers in the first quarter of 2018. Accordingly, their net worth just hit a milestone, with the value of the company reaching \$100 billion this year, cementing itself as the premier source for streaming video. With so many subscribers, Netflix must maintain their vast movie collection and predict what movies and shows a user would like based on their specific set of preferences, which can be complicated since many users do not have many data points. Since Netflix offers tens of thousands of movies and shows to its millions of subscribers, the prediction matrix is inherently sparse, but the issues outlined prior contribute to the difficulty of accurately predicting movies that users will want to watch. For this assignment, we used the official Netflix Prize competition dataset consisting of 2,649,430 users' star ratings (out of 5) for 17,770 movies. We reduced the dimensionality of the data by removing users with a small number of movies watched and movies with few ratings. We used a combination of the users' ratings of the movies and the genres of the movies to predict whether or not a user would like a movie. Our baseline implementation performed logistic regression on each individual to determine if they would like or dislike each each movie. Additionally, we used coordinate descent to optimize hyperparameters while determining point estimates for the latent factors that characterize each movie. In our study, the coordinate descent approach obtained small improvements in classification rate over basic logistic regression on out-of-sample test cases.

## Reproducibility

If you follow the link at the top of this page to my public repository for this project, you will be able to follow the following steps in order to reproduce all of the results contained within the paper. I've outlined the following steps to run the code and for reproducibility. It's worth noting that the genre assignments of some movies may have changed over the years on IMDb. I've preserved the original output in the repository linked above. For the full results and analysis, please see the full paper.

1. Run `python imdb_genre.py` in order to generate the output files. When I originally ran this, IMDb only supported querying a single movie at a time with a strict rate limit. I don't believe this has since changed, but as a result, my initial code runs verys slowly and requires manually setting changing which group of movies to query at once before merging. If you don't want to rerun the script, the full output of this file is saved in `data/movie_titles_genre.txt`.
2. Run `python data_cleaning.py`, which pulls data from the assembled `movie_titles_genre.txt` file and the provided `netflix_full_csr.npz`, which is a sparse representation of the ratings matrix. It will then output plots for picking thresholds as well as truncated movie and ratings lists called `movies_small.csv` and `netflix_small.npy`.
3. Run `python analysis.py`, which establishes a baseline and then runs an EM/CD algorithm to optimize the hyperparameters.
