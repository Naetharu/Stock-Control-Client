import React from "react";
import { Doughnut } from "react-chartjs-2";

const DonutGraph = ({ data, chartName }) => {
  const primary = data[0];

  console.log("primary", primary);

  return (
    <div className="donutContainer">
      <h2>{chartName}</h2>
      <Doughnut
        data={{
          labels: ["E-H", "CBC", "TFB"],
          datasets: [
            {
              data: [data[0], data[1], data[2]],
              backgroundColor: [
                "rgba(255, 99, 132, 0.4)",
                "rgba(54, 162, 235, 0.4)",
                "rgba(255, 205, 86, 0.4)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
              ],
              hoverOffset: 10,
              borderRadius: 2,
              borderWidth: 3,
              spacing: 0,
              weight: 10,
            },
          ],
        }}
      />
    </div>
  );
};

export default DonutGraph;
