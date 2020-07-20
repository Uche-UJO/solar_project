function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset"); //TODO: BUILD DROPDOWN BOX IN INDEX.HTML WITH ID OF selDataset (See UFO homework)

  // Use the list of sample names to populate the select options
  d3.json("data.json").then((data) => {
    var entities = [];


    

    data.consumption.forEach(object => {
    //TODO: REMOVE ALL DUPLICATE COUNTRIES AND NULL VALUES
    // if (object.entities !== entities); 
    // if(entities.indexOf(data.consumption.entity) === -1);
    // if(!(object.entities in entities))

      entities.push(object.entity)});

      let newEntities = [...new Set(entities)];
      console.log(newEntities);
    
 
    newEntities.forEach((country) => {
     
      selector
        .append("option")
        .text(country)
        .property("value", country);
    });

    // Use the first sample from the list to build the initial plots
    var firstEntity = newEntities[0];
    buildCharts(firstEntity);
    // buildMetadata(firstSample);
  });
}

// ------------------
function buildCharts(entityChoice) {
  d3.json("data.json").then((data) => {
    
var test = data['consumption']
console.log(test);





// Create two arrays, each of which will hold data for a different trace
var y0 = [];
var y1 = [];
var y2 = [];
var y3 = [];
var year = [];
var solar = [];

// var entityChoice = 'Argentina';

// Fill each of the above arrays with randomly generated data
for (var i = 0; i < test.length; i++) {

  // if(entities.indexOf(data.consumption.entity) === -1);
  // if (object.entities !== entities);


  y0.push(test[i]['code']);
  y1.push(test[i]['entity']);
  y2.push(test[i]['solar_generation_twh']);
  y3.push(test[i]['year']);
  if (test[i]['entity'] == entityChoice) {// If the country name is Africa
    year.push(test[i]['year']);
    solar.push(test[i]['solar_generation_twh']);

  }
}
// Create a trace object with the data in `y0`
var trace1 = {
  x: year,
  y: solar,
  // boxpoints: "all",
  text: 'TWh',
  type: "bar"
};



// Create a data array with the above two traces
// var myData = [trace1, trace2, trace3, trace4];
var myData = [trace1];
console.log(myData);







// Use `layout` to define a title
var layout = {
  title: `${entityChoice}'s Solar Consumption`
};

// Render the plot to the `plot1` div
Plotly.newPlot("plot", myData, layout);
    // // Build a Bubble Chart
    // var bubbleLayout = {
    //   title: "Bacteria Cultures Per Sample",
    //   margin: { t: 0 },
    //   hovermode: "closest",
    //   xaxis: { title: "OTU ID" },
    //   margin: { t: 30}
    // };
    // var bubbleData = [
    //   {
    //     x: otu_ids,
    //     y: sample_values,
    //     text: otu_labels,
    //     mode: "markers",
    //     marker: {
    //       size: sample_values,
    //       color: otu_ids,
    //       colorscale: "Earth"
    //     }
    //   }
    // ];

    // Plotly.newPlot("bubble", bubbleData, bubbleLayout);

    // var yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
    // var barData = [
    //   {
    //     y: yticks,
    //     x: sample_values.slice(0, 10).reverse(),
    //     text: otu_labels.slice(0, 10).reverse(),
    //     type: "bar",
    //     orientation: "h",
    //   }
    // ];

    // var barLayout = {
    //   title: "Top 10 Bacteria Cultures Found",
    //   margin: { t: 30, l: 150 }
    // };

    // Plotly.newPlot("bar", barData, barLayout);
  });
}
// ----------------------------------


function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  // buildMetadata(newSample);
}

init();





































