// Convention: https://bl.ocks.org/mbostock/3019563
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 1000 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#root")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("https://flunky.github.io/cars2017.csv", function(data) {

  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 200])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 12])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.AverageCityMPG); } )
      .attr("cy", function (d) { return y(d.EngineCylinders); } )
      .attr("r", 1.5)
      .style("fill", "#69b3a2")

})