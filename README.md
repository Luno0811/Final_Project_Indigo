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

## Current Progress
- A Tableau visual is being created which displays charts and graphs regarding the questions to answer about the project.
-  Share doses used is a column that lists percentage of doses that have been used against the total distributed.
## Machine learning Process
- We plan to classify any record where share dosages used are under a certain percentage as "high percentage wasted" and under a certain percentage as "low percentage wasted" and then train the model to predict which one for that record based off of the data.

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");
  // Use the list of sample names to populate the select options
  d3.json("json_data.json").then((data) => {
    console.log(data);
    var recordLocation = data.locations;
    var recordDate = data.dates;
    recordLocation.forEach((location) => {
      selector.append("option").text(location).property("value", location);
    });
    recordDate.forEach((date) => {
      selector.append("option").text(date).property("value", date);
    });
    // Use the first sample from the list to build the initial plots
    var firstLocation = recordLocation[0]
    var firstDate = recordDate[0];
    buildCharts(firstLocation, firstDate);
    buildMetadata(firstLocation, firstDate);
  });

## HTML
- The javascript file which makes the charts and graphs is being edited to work with our cleaned and organized data.



## Results
We are predicting that there will be a need for redisitribution of vaccines based on use and scarcity accross the states. 
