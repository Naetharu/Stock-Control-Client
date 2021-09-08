import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useState, useEffect } from "react";

const StockTable = () => {
  // Stock data fetched from mongoDB to be rendered in table
  const [data, setData] = useState(null);

  // State Machine
  // #1: idle = initial state for fetching data
  // #2: primed = data fetch completed and ready for formatting
  // #3: resolved = ready to render table
  // #4: rejected = data fetch failed
  const [status, setStatus] = useState("idle");

  // Fetch data from backend
  useEffect(() => {
    if (status === "idle" || status === "pending") {
      fetch("http://localhost:5000/stock/")
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((jsonRes) => {
          setData(jsonRes.result);
          setStatus("primed");
          return data;
        })
        .catch((err) => {
          console.error(err);
          setStatus("rejected");
        });
    }
  }, [status]);

  const columns = [
    {
      field: "name",
      headerName: "name",
      width: 300,
      editable: true,
    },
    {
      field: "status",
      header: "status",
      width: 160,
    },
    {
      field: "contract",
      header: "contract",
      width: 160,
    },
    {
      field: "location",
      header: "location",
      width: 240,
    },
    {
      field: "serial",
    },
  ];

  // Default row data to avoid crash. This data is replaced by live data once primed status is set
  // and the id key is mapped into the data objects.
  let rows = [
    {
      id: 0,
      name: "Dell 5200",
      status: "Ready",
    },
  ];

  // adds an "id" field to each entry in data to comply with the material ui datagrid requirements
  if (status === "primed") {
    let answer = [];

    // map through the data, inserting an id key into the first position of each object.
    data.map((item, index) => {
      let temp = { id: index, ...item };
      console.log("TEMP: ", temp);
      answer.push(temp);
    });

    setData(answer);
    rows = answer;
    setStatus("resolved");
    console.log("New Data: ", data);
  }

  // only set rows to data after it has been primed with an id field else it will not be accepted by material ui datagrid
  if (status == "resolved") {
    rows = data;
  }

  // statemachine - render null while fetching data and priming ready for insertion into table
  if (status === "idle || primed ") {
    return null;
  }

  // statemachine - render error message in the event data is not accesable
  if (status === "rejected") {
    return <p> Error: something went wrong connecting to data...</p>;
  }

  return (
    <>
      <div className="dataGridContainer">
        <DataGrid
          rows={rows}
          columns={columns}
          pagesize={10}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default StockTable;
