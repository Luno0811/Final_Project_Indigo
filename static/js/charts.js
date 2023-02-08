// link to samples.json file for the data 
const url = "static/js/json_data.json"

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
    var firstLocation = recordLocation[0]
    var firstDate = recordDate[0];
    buildCharts(firstLocation, firstDate);
    buildMetadata(firstLocation, firstDate);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);

}

// Record Data Panel 
function buildMetadata(location, date) {
  d3.json(url).then((data) => {
    var records = data.records;
    // Filter the data for the object with the desired sample number
    var resultArray = records.filter((sampleObj) => sampleObj.location == location && sampleObj.date == date);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `sample-metadata`
    var PANEL = d3.select("sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
  });
}

// Create the buildCharts function.
function buildCharts(sample) {
  // Use d3.json to load and retrieve the samples.json file 
  d3.json(url).then((data) => {
    // Create a variable that holds the samples array. 
    let samples = data.samples;
    // Create a variable that filters the samples for the object with the desired sample number.
    let sampleArray = samples.filter(sampleObj => sampleObj.id == sample);
    // Create a variable that holds the first sample in the array.
    let firstSample = sampleArray[0];
    let result = data.metadata.filter(sampleObj => sampleObj.id == sample)[0];
    
    // Create variables for the vaccinations data.
    let states = firstSample.states;
    let vaccinations_total = firstSample.vaccinations_total;
    let distributed_vaxs = firstSample.distributed_vaxs;

    // Create the yticks for the bar chart.
    var yticks = states.slice(0,10).map(id => `States` +id).reverse();
    console.log(yticks)

    // Create the trace for the bar chart. 
    var barData = [{
      x: states.slice(0,10).reverse(),
      y: yticks,
      text: vaccinations_total,
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
  x: states,
  y: sample_values,
  text: otu_labels,
  mode: 'markers',
  marker: {
    size: sample_values,
    color: otu_ids,
    colorscale: 'Earth'
  } 
}];

// Create the layout for the line chart.
var lineLayout = {
  hovermode: 'closest',
  title: "Fully vaccinated in the United States",
  xaxis: {title: "Fully Vaccinated"},
  yaxis: {title: "US population by State"}  
};

// Use Plotly to plot the data with the layout.
Plotly.newPlot("line",lineData, lineLayout);

// Creating the Pie chart
anychart.onDocumentReady(function() {

  // set the data
  var data = [
      {x: "", value: 8},
      {x: "", value: 8},
      {x: "", value: 8},
      {x: "", value: 8},
      {x: "", value: 8},
      {x: "", value: 1},
      {x: "", value: 9}
  ];

  // create the  pie chart
  var chart = anychart.pie();

  // set the chart title
  chart.title("Wasted Vaccination dosages in each state");

  // add the data
  chart.data(data);

  // sort elements
  chart.sort("desc");  
  
  // set legend position
  chart.legend().position("right");
  // set items layout
  chart.legend().itemsLayout("vertical");  

  // display the chart in the container
  chart.container('container');
  chart.draw();

});

// // Create the layout for the pie chart.
var pieLayout = {
  width: 500, height: 350, 
  margin: { l: 25, r: 25, t: 0, b: 0 }
};
//  Use Plotly to plot the pie data and layout.
Plotly.newPlot("pie", pieData, pieLayout);
});
}
