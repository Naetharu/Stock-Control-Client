import React from "react";
import "../styles/dashboard.css";
import BarGraph from "./BarGraph";
import DonutGraph from "./DonutGraph";
import LineGraph from "./LineGraph";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [totalStock, setTotalStock] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:5000/stock/")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setTotalStock(jsonRes.result));
  }, []);

  console.log("totalStock", totalStock);

  return (
    <div className="dashboardContainer">
      <div class="outerBox">
        <BarGraph />
        <LineGraph />
      </div>
      <div className="donuts">
        <DonutGraph data={[1, 10, 4]} chartName="PC Builds" />
        <DonutGraph data={[12, 2, 3]} chartName="Phone Builds" />
        <DonutGraph data={[7, 19, 2]} chartName="Tablet Builds" />
      </div>
    </div>
  );
};

export default Dashboard;
