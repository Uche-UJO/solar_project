// var data = data; 

// console.log(data['capacity']);
// console.log(data['consumption']);
// console.log(data);

// ----------------------- CAPACITY-------------------------------------//


// Declare variables
var button = d3.select("#filter-btn");
var inputField1 = d3.select("#datetime");
var inputField2 = d3.select("#country");
var tbody = d3.select("tbody");
var resetbtn = d3.select("#reset-btn");
var columns = ["code", "entity", "solar_capacity_gwh", "year"]

var populate = (dataInput) => {
    
    dataInput.forEach(solar_input => {

    // let newData = [...new Set(dataInput)];
    // console.log(newData);
    var row = tbody.append("tr");
    columns.forEach(column => row.append("td").text(solar_input[column])
    )
  });
}



//Populate table


// populate(data.capacity);

// var entities = [];
//     console.log(data);
//     data.capacity.forEach(object => {
    
//     entities.push(object.entity)});
      
//     let newEntities = [...new Set(entities)];
//     console.log(newEntities);

    // var firstEntity = newEntities[0];
populate(data.capacity);
// Filter by attribute


button.on("click", () => {
  d3.event.preventDefault();
  var inputDate = inputField1.property("value").trim();
  var inputCountry = inputField2.property("value").toLowerCase().trim();
  
  // Filter by field matching input value
  var filterDate = data['capacity'].filter(data => data.year === inputDate);
  console.log(filterDate)
  
  var filterCountry = data['capacity'].filter(data => data.entity === inputCountry);
  console.log(filterCountry)
  var filterData = data['capacity'].filter(data => data.year === inputDate && data.entity === inputCountry);
  console.log(filterData)
  
  // Add filtered sightings to table
  tbody.html("");
  
  let response = {
    filterData, filterCountry, filterDate
  }

  if (response.filterData.length !== 0) {
    populate(filterData);
  }
    else if (response.filterData.length === 0 && ((response.filterCountry.length !== 0 || response.filterDate.length !== 0))){
      populate(filterCountry) || populate(filterDate);
  
    }
    else {
      tbody.append("tr").append("td").text("No results found!"); 
    }
})

resetbtn.on("click", () => {
  tbody.html("");
  populate(data['capacity'])
  console.log("Table reset")
})



















// --------------------------- CONSUMPTION-----------------------------------//

