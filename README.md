# Covid-19 Vaccinations
![image](https://user-images.githubusercontent.com/111723067/214435454-0d983867-b753-427f-bf8d-bd6a5254b933.png)
## Overview
Using Covid-19 vaccination data around the United States to answer multiple questions regarding the pandemic. 
### Why?
This topic was selected because it is currently very relevant and has impacted everyone 's lives. This was also chosen because the results of the analysis can be useful in the real world.
## Data Sources:
https://www.kaggle.com/datasets/sandhyakrishnan02/united-states-covid19-vaccinations
#### Columns:
- date
- location (by state)
- total vaccinations
- total vaccines distributed
- people vaccinated
- people fully vaccinated per hundred
- total vaccinations per hundred
- people fully vaccinated
- people vaccinated per hundred
- distributed per hundred
- daily vaccinations raw
- daily vaccinations
- daily vaccinations per million
- share doses used
- total boosters
- total boosters per hundred

https://www.kaggle.com/datasets/peretzcohen/2019-census-us-population-data-by-state
#### Columns being used:
- state
- population estimate


## Questions to Answer
- What is the total percentage of those fully vaccinated accross the United States?
- Does a redistribution of vaccinations need to take place?
- How many vaccine dosages are wasted and how many are used?
## Process
- Clean both data sets then combine them.
- Create an HTML which will include a drop-down selection of vaccination statistics by day and by state.
- Use supervised and unsupervised machine learning to answer the project questions.

## Graphs and Charts
- The following graphs will be visualized as part of the project HTML and in Tableau to be presented to the class.

![image](https://user-images.githubusercontent.com/111723067/216505573-1e7c4486-006c-4f64-be1d-a77181cc8280.png)

## Tableau Progress
- A Tableau visual is being created which displays charts and graphs regarding the questions to answer about the project.

## Machine learning Process
- We plan to classify any record where share dosages used are under a certain percentage as "high percentage wasted" and under a certain percentage as "low percentage wasted" and then train the model to predict which one for that record based off of the data. For instance, If waste percentage is above 60%, we conclude that it is a high waste state with lots of unused vaccines that could be distrubuted elsewhere.

- Grab a reference to the dropdown select element

- Use the list of sample names to populate the select options

- Use the first sample from the list to build the initial plots
  
## HTML
- The javascript file which makes the charts and graphs is being edited to work with our cleaned and organized data.
![HTML progress](https://user-images.githubusercontent.com/111723067/216503827-5b15ab1c-d6b7-4de9-be09-eeb2a98fe48f.png)


## Results
We are predicting that there will be a need for redisitribution of vaccines based on use and scarcity accross the states. 
