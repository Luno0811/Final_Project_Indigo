# Covid-19 Vaccinations Distribution across the U.S.
## By: Salil Valiaparampil, Ross Halley, & Dania Abdulrahman

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
### Data Exploration
- First step of the process after finding the data is cleaning and combining the two data sets.
- Cleaning was done through Jupyter Notebook by first understanding the data types of each column and changing them if necessary, as well as using drop function to remove unwanted columns.
- Once the data was combined, we looked through the data and made some exploratory graphs to notice trends in the data. The first thing we noticed was to
help answer our top question of who is wasting and who is using, is that we should add a unused doses column
- After, we plotted line graphs of total people fully vaccinated versus wasted doses against the total population by state, and immediately saw two large areas
that we thought were affecting wastage; state population, and political alignment.
- When the planned to create both a Tableau presentation for a general sense of the data, and also an interactive HTML page with options for filtering the data 
yourself

### Tableau
- Population: We are showing this visual to make it clear that there are some states in the US significantly more populated than others, such as Texas, California, Florida and NY state. This helps clarify why data is much bigger for those states.

![image](https://user-images.githubusercontent.com/111723067/217965248-329a3328-39c9-42ff-9ef1-5f136a393684.png)

- Unused Doses Per State: This graph shows us a side-by-side of total distributed vs total unused doses. CA has the highest number of unused doses, but is also the most populated. The lowest waste is by smaller states such as islands in America, which are also not very populated.

![image](https://user-images.githubusercontent.com/111723067/217965440-e12dcb49-88a9-4183-b813-3a465f3a0bad.png)

- People Fully Vaccinated Per State: This graph shows us vaccinations per state INCLUDING booster shots, we see that California has the highest amount as expected. 

![image](https://user-images.githubusercontent.com/111723067/217965736-80cdc812-8caa-4d7a-9cab-4453a34ab15a.png)

- Total Vaccinations vs. Total Distributed per State: This graph shows us the other side of the story, how many vaccines were administered from the ones distributed per state. We see that NY state by percentage used the most of their vaccines in comparison to the other densely populated states.

![image](https://user-images.githubusercontent.com/111723067/217966001-9b29e0c4-007b-479d-b3db-2cb42f85f7da.png)

- People Vaccinated by Date (LINE): This line graph shows the consistency of people getting vaccinations over 3 years, from December of 2020 to January of 2023. We see an initial spike at the time where the pandemic had just begun to spread. We also see that June of 2022 had the lowest vaccination rates. Overall, no dramatic changes other than the initial spike.

![image](https://user-images.githubusercontent.com/111723067/217966054-edd9afb3-60f3-4528-ab45-e6737a9f4849.png)

- Boosters Administered by Date(LINE): This line graph shows a similar pattern except it was started later due to boosters being administered later than the first initial vaccine. We also see that June of 2022 had the lowest amount of boosters administered compared to the rest of the timeline. 

![image](https://user-images.githubusercontent.com/111723067/217966106-d661c2fa-3bb4-4f1e-a060-02fbe1fd00ec.png)

### HTML
- Using Javascript, the website was made to include 2 drop down menus, one by date and another by state.
- Once a date and state is selected, the drop down menus create multiple visuals through the dataset.
  - Populates a bar graph with vaccination data including distributed and wasted doses, as well as vaccinations
  - Generates full record data for the date and state
  - Generates a line graph for that state over the whole time period showing that states overall trends in vaccinated versus wasted doses against total population

![image](https://user-images.githubusercontent.com/111723067/217967729-431058c3-392d-44a9-802b-6b2bc09b09fc.png)

![image](https://user-images.githubusercontent.com/111723067/217967672-7fc5b3c1-2877-4506-8305-378cf7c315b0.png)

### Machine Learning

- Initial Analysis: For the machine learning model, to reduce our data to a yes/no question we could fit a model too, we looked at the share doses used value.
The faster a state used their distributed doses, the less they would waste future doses of vaccine was the logic, so we picked 0.7 as
a value and changed our data set to label any time a state had spent under 0.7 share doses used as a "waster" of doses and the time
spent above 0.7 as a "user" of doses; we then set about making a model to predict which one a state would be by date given the data.

- Model: For the model, after changing the share doses used data into the binary choice we wanted, we then encoded the data we would use to train 
our model and dropped meaningless columns as well as columns that would have given our model an unfair advantage. We then did a train
test split, resampled the data with a Random Forst Classifier, than ran it it to produce a confusion matrix and accuracy score.
We also populated an array of features that were most helpful in the learning process.

- Summary: The model ended up being highly accurate at 0.7 being the divide between waster states and user states, scoring 98% accuracy.
Run at a couple other values it never dipped lower than 96% accuracy. The most useful feature ended up being doses distributed per hundred
and total vaccinations per hundred, with a lot of the boost and national data not being as useful to the model. Surprisingly, population
was of medium high importance, leading us to belive that logistics might be a big part of wasted doses and larger states might have more 
trouble getting their doses out than smaller states.

## Conclusion
- Waste amounts seem excessive for densely populated states. But with a higher population comes a bigger chance of more doses being used; meaning the CDC was just being prepared when distributing the amounts they did. 
- If we were to do another project regarding this subject, I believe it’d be useful to find vaccination data for specific counties of each state. I believe this would show us more clear results because many of us have been in the situation or know people who were struggling to find vaccines in their area. 
