import { useState, useEffect } from "react";
import MaterialTable from "material-table";

const StockTypes = () => {
  const [stock, setStock] = useState([]);
  const [status, setStatus] = useState("idle"); // State machine - idle/pending/resolved - determines useEffect refreshes and render returns.

  // Material Table object to determine table layout.
  const columns = [
    { title: "Name", field: "name" },
    {
      title: "Status",
      field: "status",
      lookup: {
        Order: "Order",
        Stock: "Stock",
        Build: "Build",
        Ready: "Ready",
        Deployed: "Deployed",
        Scrapped: "Scrapped",
      },
    },
    {
      title: "Contract",
      field: "contract",
      lookup: {
        EH: "EH",
        CBC: "CBC",
        TFB: "TFB",
        CEH: "CEH",
        Corp: "Corp",
      },
    },
    { title: "Location", field: "location" },
    { title: "Serial", field: "serial" },
    { title: "Asset", field: "asset" },
    { title: "Date", field: "dueDate" },
  ];

  // CRUD functions for use in Material Table

  // Read table data from database
  useEffect(() => {
    if (status === "idle" || status === "pending") {
      fetch("http://localhost:5000/stock/")
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((jsonRes) => {
          setStock(jsonRes.result);
          setStatus("resolved");
        })
        .catch((err) => {
          console.error(err);
          setStatus("rejected");
        });
    }
  }, [status]);

  // Create a new entry in database
  const handleOnRowAdd = async (newRow) => {
    try {
      const result = await fetch("http://localhost:5000/stock/", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item: newRow }),
      });
      console.log(result);
      setStatus("pending");
    } catch (error) {
      console.error(error);
    }
  };

  // Delete entry from database
  const handleOnRowDelete = async (item) => {
    try {
      const result = await fetch("http://localhost:5000/stock/" + item._id, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
      setStatus("pending");
    } catch (error) {
      console.error(error);
    }
  };

  // Update entry status on button click
  const handleOnRowUpdate = async (item) => {
    try {
      const result = await fetch("http://localhost:5000/stock/" + item._id, {
        method: "PUT",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item }),
      })
        .then((res) => res.json())
        .then((res) => console.log("Update: ", res));
      setStatus("pending");
    } catch (error) {
      console.error(error);
    }
  };

  // Don't load until table data is returned
  if (status === "idle") {
    return null;
  }

  // Load error screen if table data goes wrong
  if (status === "rejected") {
    return <p>Something went wrong</p>;
  }

  // Main page
  return (
    <div>
      <MaterialTable
        editable={{
          onRowAdd: (newRow) => handleOnRowAdd(newRow),
        }}
        actions={[
          {
            icon: "delete",
            tooltip: "delete this entry",
            onClick: (item, rowdata) => {
              handleOnRowDelete(rowdata);
            },
          },
          {
            icon: "update",
            tooltip: "update this entry",
            onClick: (item, rowdata) => {
              handleOnRowUpdate(rowdata);
            },
          },
        ]}
        columns={columns}
        data={stock}
        title="Stock List"
        options={{
          searchFocus: true,
          filtering: true,
          pageSize: 10,
          pageSizeOptions: [10, 20, 50],
          exportButton: true,
          exportFileName: "StockData",
          addRowPosition: "first",
          actionsColumnIndex: -1,
        }}
      />
    </div>
  );
};

export default StockTypes;
