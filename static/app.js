// var trace1 = {
//     x: ["beer", "wine", "martini", "margarita",
//       "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
//   };
  
//   var data = [trace1];
  
//   var layout = {
//     title: "'Bar' Chart"
//   };
  
//   Plotly.newPlot("plot", data, layout);
    

var solarData = new XMLHttpRequest();
console.log(solarData);
solarData.open('GET', "http://localhost:5000/api")
solarData.onload = function() {
    console.log(solarData.responseText);
};
// var url = "http://localhost:5000/api"
// solarData.open("GET", url, true);
// solarData.setRequestHeader("content-type", "application/json");
// solarData.onreadystatechange = function () {
//     if (solarData.readyState == 4 && solarData.status == 200)
//     {
//         var content = solarData;
//         console.log(content);
//         console.log(solarData);
//     }
// }
// solarData.send(null);
