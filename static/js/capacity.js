var data = data; 

console.log(data['capacity']);

// Create two arrays, each of which will hold data for a different trace
var y0 = [];
var y1 = [];
var y2 = [];
var y3 = [];


// Fill each of the above arrays with randomly generated data
for (var i = 0; i < data['capacity'].length; i++) {
  y0.push(i['code']);
  y1.push(i['entity']);
  y2.push(i['solar_capacity_gwh']);
  y3.push(i['year']);
}




// Create a trace object with the data in `y0`
var trace1 = {
  y: y0,
  // boxpoints: "all",
  type: "code"
};

// Create a trace object with the data in `y0`
var trace2 = {
    y: y1,
    // boxpoints: "all",
    type: "entity"
  };

// Create a trace object with the data in `y0`
var trace3 = {
    y: y2,
    // boxpoints: "all",
    type: "solar capacity gwh"
  };


// Create a trace object with the data in `y1`
var trace4 = {
  y: y3,
  // boxpoints: "all",
  type: "year"
};

// Create a data array with the above two traces
var data = [trace1, trace2, trace3, trace4];
console.log(data);



// Use `layout` to define a title
var layout = {
  title: "Basic Box Plot"
};

// Render the plot to the `plot1` div
Plotly.newPlot("plot", data, layout);


// var svgWidth = 900;
// var svgHeight = 500;

// var margin = { top: 20, right: 40, bottom: 80, left: 100 };

// var width = svgWidth - margin.left - margin.right;
// var height = svgHeight - margin.top - margin.bottom;

// // Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
// var svg = d3
//   .select(".chart")
//   .append("svg")
//   .attr("width", svgWidth)
//   .attr("height", svgHeight)
//   .append("g")
//   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// // Append an SVG group
// var chartGroup = svg.append("g");

// // Append a div to the body to create tooltips, assign it a class
// d3.select(".chart").append("div").attr("class", "tooltip").style("opacity", 0);

// // Retrieve data from the CSV file and execute everything below
// d3.csv("/static/capacity.csv", function(err, solarData) {
//   if (err) throw err;

//   solarData.forEach(function(data) {
//     data.code = Number(data.code);
//     data.entity = Number(data.entity);
//     data.solar_capacity_gwh = Number(data.solar_capacity_gwh);
//   });

//   console.log(solarData);

//   // Step 4: Parse the data
//   // Format the data and convert to numerical and date values
//   // =================================
//   // Create a function to parse date and time
//   var parseTime = d3.timeParse("%d-%b");

//   // Format the data
//   solarData.forEach(function(data) {
//     data.date = parseTime(data.date);
//     data.morning = +data.morning;
//     data.evening = +data.evening;
//   });

//   // Step 5: Create the scales for the chart
//   // =================================
//   var xTimeScale = d3.scaleTime()
//     .domain(d3.extent(solarData, d => d.date))
//     .range([0, width]);

//   var yLinearScale = d3.scaleLinear().range([height, 0]);

//   // Step 6: Set up the y-axis domain
//   // ==============================================
//   // @NEW! determine the max y value
//   // find the max of the morning data
//   var morningMax = d3.max(solarData, d => d.morning);

//   // find the max of the evening data
//   var eveningMax = d3.max(solarData, d => d.evening);

//   var yMax;
//   if (morningMax > eveningMax) {
//     yMax = morningMax;
//   }
//   else {
//     yMax = eveningMax;
//   }

//   // var yMax = morningMax > eveningMax ? morningMax : eveningMax;

//   // Use the yMax value to set the yLinearScale domain
//   yLinearScale.domain([0, yMax]);


//   // Step 7: Create the axes
//   // =================================
//   var bottomAxis = d3.axisBottom(xTimeScale).tickFormat(d3.timeFormat("%d-%b"));
//   var leftAxis = d3.axisLeft(yLinearScale);

//   // Step 8: Append the axes to the chartGroup
//   // ==============================================
//   // Add x-axis
//   chartGroup.append("g")
//     .attr("transform", `translate(0, ${height})`)
//     .call(bottomAxis);

//   // Add y-axis
//   chartGroup.append("g").call(leftAxis);

//   // Step 9: Set up two line generators and append two SVG paths
//   // ==============================================

//   // Line generator for morning data
//   var line1 = d3.line()
//     .x(d => xTimeScale(d.date))
//     .y(d => yLinearScale(d.morning));

//   // Line generator for evening data
//   var line2 = d3.line()
//     .x(d => xTimeScale(d.date))
//     .y(d => yLinearScale(d.evening));

//   // Append a path for line1
//   chartGroup
//     .append("path")
//     .attr("d", line1(solarData))
//     .classed("line green", true);

//   // Append a path for line2
//   chartGroup
//     .data([solarData])
//     .append("path")
//     .attr("d", line2)
//     .classed("line orange", true);

// });
