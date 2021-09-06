import { useState, useEffect } from "react";
import MaterialTable from "material-table";
import {
  postNewItem,
  deleteTableItem,
  updateTableItem,
} from "../services/stockServices";

const StockTypes = () => {
  const [stock, setStock] = useState([]);
  const [refreshFlag, setrefreshFlag] = useState([]); // This is a hack - value does not matter but act of toggling kicks UseEffect into reloading. How should I be doing this..?

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
  ];

  useEffect(() => {
    fetch("http://localhost:5000/stock/")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setStock(jsonRes.result));
  }, [refreshFlag]);

  return (
    <div>
      <MaterialTable
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              setStock([newRow, ...stock]);
              postNewItem(newRow);
              console.log(newRow);
              resolve();
              setrefreshFlag(!refreshFlag);
            }),
        }}
        actions={[
          {
            icon: "delete",
            tooltip: "delete this entry",
            onClick: (item, rowdata) => {
              new Promise((resolve, reject) => {
                deleteTableItem(rowdata);
                resolve();
                setrefreshFlag(!refreshFlag);
              });
            },
          },
          {
            icon: "update",
            tooltip: "update this entry",
            onClick: (item, rowdata) => {
              new Promise((resolve, reject) => {
                updateTableItem(rowdata);
                resolve();
                setrefreshFlag(!refreshFlag);
              });
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
