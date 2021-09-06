import React from "react";
import { Line } from "react-chartjs-2";

const LineGraph = () => {
  return (
    <div className="lineContainer">
      <Line
        data={{
          labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          datasets: [
            {
              label: "Builds per Day",
              data: [10, 20, 3, 3, 10, 14],
              fill: true,
              borderColor: "rgba(255, 206, 86, 1)",
              tension: 0.1,
            },
          ],
        }}
      />
    </div>
  );
};

export default LineGraph;
