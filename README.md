# Covid-19 Vaccinations Distribution across the U.S.
![image](https://user-images.githubusercontent.com/111723067/214435454-0d983867-b753-427f-bf8d-bd6a5254b933.png)

### Why?
This topic was selected because it is currently very relevant and has impacted everyone 's lives. This was also chosen because the results of the analysis can be useful in the real world.

## Questions
- Does a redistribution of vaccinations need to take place across states?

- How many vaccines are wasted and how many are used?

- Is there a pattern of vaccines wasted based on geographic location, population, or other factors?

## Data Sources:
- We found our data set through Kaggle. We found the collection of data in the set very handy because it included total vaccinations, total distributed, total boosters, total wasted, and all were categorized by state and date by day from the year 2021 to beginning of 2023. 
- One factor that was missing from our data set was population by state, which is crucial for putting the data in perspective, and properly analyzing vaccination and waste patterns. This led us to another data set which had what we were looking for.
- https://www.kaggle.com/datasets/sandhyakrishnan02/united-states-covid19-vaccinations
- https://www.kaggle.com/datasets/peretzcohen/2019-census-us-population-data-by-state

## Process
### Data
- First step of the process after finding the data is cleaning and combining the two data sets.
- Cleaning was done through Jupyter Notebook by first understanding the data types of each column and changing them if necessary, as well as using drop function to remove unwanted columns.

### Tableau
- Population: We are showing this visual to make it clear that there are some states in the US significantly more populated than others, such as Texas, California, Florida and NY state. This helps clarify why data is much bigger for those states.
- Unused Doses Per State: This graph shows us a side-by-side of total distributed vs total unused doses. CA has the highest number of unused doses, but is also the most populated. The lowest waste is by smaller states such as islands in America, which are also not very populated.
- People Fully Vaccinated Per State: This graph shows us vaccinations per state INCLUDING booster shots, we see that California has the highest amount as expected. 
- Total Vaccinations vs. Total Distributed per State: This graph shows us the other side of the story, how many vaccines were administered from the ones distributed per state. We see that NY state by percentage used the most of their vaccines in comparison to the other densely populated states.
- People Vaccinated by Date (LINE): This line graph shows the consistency of people getting vaccinations over 3 years, from December of 2020 to January of 2023. We see an initial spike at the time where the pandemic had just begun to spread. We also see that June of 2022 had the lowest vaccination rates. Overall, no dramatic changes other than the initial spike.
- Boosters Administered by Date(LINE): This line graph shows a similar pattern except it was started later due to boosters being administered later than the first initial vaccine. We also see that June of 2022 had the lowest amount of boosters administered compared to the rest of the timeline. 

### HTML
- Using Javascript, the website was made to include 2 drop down menus, one by date and another by state.
- Once a date and state is selected, the drop down menus create multiple visuals through the dataset. 

### Machine Learning
- We plan to classify any record where share dosages used are under a certain percentage as "high percentage wasted" and under a certain percentage as "low percentage wasted" and then train the model to predict which one for that record based off of the data. For instance, If waste percentage is above 60%, we conclude that it is a high waste state with lots of unused vaccines that could be distrubuted elsewhere.

-  We grab a reference to the dropdown select element

- Use the list of sample names to populate the select options

- Use the first sample from the list to build the initial plots

## Conclusion
- Waste amounts seem excessive for densely populated states. But with a higher population comes a bigger chance of more doses being used; meaning the CDC was just being prepared when distributing the amounts they did. 
- If we were to do another project regarding this subject, I believe it’d be useful to find vaccination data for specific counties of each state. I believe this would show us more clear results because many of us have been in the situation or know people who were struggling to find vaccines in their area. 
