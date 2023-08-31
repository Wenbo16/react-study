import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';

const dataset = [
    [10, 30, 40, 20],
    [10, 30, 40, 30],
    [10, 30, 40, 40],
]
var i = 0;

function initChart(height, width){
  d3.select("#chart")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("border", "1px solid black")
}


function drawChart(height, width, data){
  const svg = d3.select("#chart svg");
  
  var selection = svg.selectAll("rect").data(data);
  var yScale = d3.scaleLinear()
                      .domain([0, d3.max(data)])
                      .range([0, height-100]);
  
      selection
          .transition().duration(300)
              .attr("height", (d) => yScale(d))
              .attr("y", (d) => height - yScale(d))

      selection
          .enter()
          .append("rect")
          .attr("x", (d, i) => i * 45)
          .attr("y", (d) => height)
          .attr("width", 40)
          .attr("height", 0)
          .attr("fill", "orange")
          .transition().duration(300)
              .attr("height", (d) => yScale(d))
              .attr("y", (d) => height - yScale(d))
      
      selection
          .exit()
          .transition().duration(300)
              .attr("y", (d) => height)
              .attr("height", 0)
          .remove()
}

function Chart() {
    const [data, setData] = useState([]);
    const [width, setWidth] = useState(600);
    const [height, setHeight] = useState(400);

    useEffect(() => {
      d3.select("#chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("border", "1px solid black")
      changeChart();
    }, []);

    const changeWidth = () => {
      setWidth(800)
    }

    const changeChart = () => {
      setData(dataset[i++]);
      if(i === dataset.length) i = 0;
      drawChart(400, 600, data);
    }

    return (
      <div className="Chart">
          <h2>Graphs with React</h2>
          <button onClick={changeChart}>Change Data</button>
          <button onClick={changeWidth}>Change Width</button>
          <div id="chart" />
      </div>
    );
}

export default Chart;