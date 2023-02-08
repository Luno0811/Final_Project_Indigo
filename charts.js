// link to samples.json file for the data 
const url = "static/json_data.json";

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");
  var selectorTwo = d3.select("#selDataset2");

  // Use the list of sample names to populate the select options
  d3.json(url).then((data) => {
    console.log(data);
    var recordLocation = data.locations;
    var recordDate = data.dates;
    recordLocation.forEach((location) => {
      selector.append("option").text(location).property("value", location);
    });
    recordDate.forEach((date) => {
      selectorTwo.append("option").text(date).property("value", date);
    });
    // Use the first sample from the list to build the initial plots
    var firstLocation = recordLocation[0];
    var firstDate = recordDate[0];
    buildCharts(firstLocation, firstDate);
    buildMetadata(firstLocation, firstDate);
  });
};

// Initialize the dashboard
init();

function optionChanged() {
  // Fetch new data each time a new sample is selected
  var firstValue = document.getElementById("selDataset").value;
  var secondValue = document.getElementById("selDataset2").value;
  console.log(firstValue);
  buildMetadata(firstValue, secondValue);
  buildCharts(firstValue, secondValue);
}

// Record Data Panel 
function buildMetadata(location, date) {
  d3.json("static/json_data.json").then((data) => {
    var records = data.records;
    // Filter the data for the object with the desired sample number
    var resultArray = records.filter(sampleObj => sampleObj.location == location && sampleObj.date == date);
    console.log(resultArray)
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
      console.log("success")
    });
  });
}

// Create the buildCharts function.
function buildCharts(location, date) {
  // Use d3.json to load and retrieve the samples.json file 
  d3.json(url).then((data) => {

    var records = data.records;
    // Filter the data for the object with the desired sample number
    var resultArray = records.filter(sampleObj => sampleObj.location == location && sampleObj.date == date);
    console.log(resultArray)
    var result = resultArray[0];

    var stateArray = records.filter(sampleObj => sampleObj.location == location)
    
    // Create variables for the vaccinations data.
    let total_vaccinations = result.total_vaccinations;
    let total_distributed = result.total_distributed;
    let unused_doses = result.unused_doses;
    let people_vaccinated = result.people_vaccinated;
    let daily_vaccinations = result.daily_vaccinations;

    var bar_x_ticks = [total_vaccinations, total_distributed, unused_doses, people_vaccinated, daily_vaccinations]

    // Create date array for line chart
    var line_x_ticks = data.dates;
    var line_y_ticks = [];
    stateArray.forEach((date) => {
      line_y_ticks.push(date.people_fully_vaccinated);
    });
    console.log(line_y_ticks);
    // Create the trace for the bar chart. 


    var barData = [{
      x: bar_x_ticks,
      y: 'Total',
      type:'bar',
      orientation: 'h'
    }];

    // Create the layout for the bar chart. 
    var barLayout = {
        hovermode: 'closest',
        title: "Vaccinations by State",
        xaxis: {title: "States"},
        yaxis: {title: "Fully Vaccinated"}
    };
    // Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar",barData, barLayout);

    // Create the trace for the line chart.
    var lineData = [{
      x: line_x_ticks,
      y: line_y_ticks,
      /*text: otu_labels,
      mode: 'markers',
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: 'Earth'
      }*/
    }];

    // Create the layout for the line chart.
    var lineLayout = {
      hovermode: 'closest',
      title: "Fully vaccinated in the United States",
      xaxis: {title: "Date"},
      yaxis: {title: "State population fully vaccinated"}  
    };

    // Use Plotly to plot the data with the layout.
    Plotly.newPlot("line", lineData, lineLayout);

});
}