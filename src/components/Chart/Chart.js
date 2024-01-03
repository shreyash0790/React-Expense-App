import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (prop) => {
  const datapointsValues = prop.dataPoints.map((datapoint) => datapoint.value);

  const totalMaximum = Math.max(...datapointsValues);

  return (
    <div className="chart">
      {prop.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
