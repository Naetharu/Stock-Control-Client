import React from "react";
import "../styles/dashboard.css";
import { Bar, Doughnut } from "react-chartjs-2";

const Dashboard = () => {
  return (
    <div className="dashboardContainer">
      <div className="graphContainer">
        <Bar
          data={{
            labels: ["Computers", "Tablets", "Phones"],
            datasets: [
              {
                label: "Items in Stock",
                data: [12, 19, 3],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                ],
                borderWidth: 1,
              },
              {
                label: "Items on Order",
                data: [2, 4, 7],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                ],
                borderWidth: 1,
              },
              {
                label: "Items in Build",
                data: [1, 1, 3],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
          height={360}
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
      <div className="donutContainer">
        <Doughnut
          data={{
            labels: [
              "Essex Highways",
              "Central Beds",
              "Buckinghamshire",
              "Cheshire",
              "Corp",
            ],
            datasets: [
              {
                label: "Builds Per Contract",
                data: [3, 2, 1, 7, 10],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.4)",
                  "rgba(54, 162, 235, 0.4)",
                  "rgba(255, 205, 86, 0.4)",
                ],
                borderColor: [
                  "rgb(60, 60, 0)",
                  "rgb(60, 60, 0)",
                  "rgb(60, 60, 0)",
                ],
                hoverOffset: 4,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
