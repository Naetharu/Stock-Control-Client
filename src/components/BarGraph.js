import React from "react";
import { Bar } from "react-chartjs-2";

const BarGraph = () => {
  return (
    <div className="graphContainer">
      <Bar
        data={{
          labels: ["Computers", "Tablets", "Phones"],
          datasets: [
            {
              label: "Items in Stock",
              data: [12, 19, 3],
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
            {
              label: "Items on Order",
              data: [2, 4, 7],
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
            {
              label: "Items in Build",
              data: [1, 1, 3],
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
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default BarGraph;
