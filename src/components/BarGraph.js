import React from "react";
import { Bar } from "react-chartjs-2";
import { getStockNumbers } from "../services/stockFilters";

const BarGraph = ({ data }) => {
  console.log("totalStock", data);

  return (
    <div className="graphContainer">
      <Bar
        data={{
          labels: ["Order", "Stock", "Build"],
          datasets: [
            {
              label: "Stock Status",
              data: [data.Order, data.Stock, data.Build],
              backgroundColor: [
                "rgba(255, 99, 132, 0.4)",
                "rgba(54, 162, 235, 0.4)",
                "rgba(255, 205, 86, 0.4)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
              ],
              borderWidth: 3,
            },
          ],
        }}
        height={300}
        width={700}
        options={{
          scales: {
            y: {
              ticks: {
                min: 0,
                stepSize: 1,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default BarGraph;
