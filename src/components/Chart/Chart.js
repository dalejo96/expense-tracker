import React from "react";

import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((point) => (
        <ChartBar
          key={point.id}
          value={point.value}
          maxValue={totalMaximum}
          label={point.label}
        />
      ))}
    </div>
  );
};

export default Chart;
