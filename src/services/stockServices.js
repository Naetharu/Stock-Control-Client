exports.postNewItem = (item) => {
  fetch("http://localhost:5000/stock/", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ item }),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
};

exports.deleteTableItem = (item) => {
  fetch("http://localhost:5000/stock/" + item._id, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
};

exports.updateTableItem = (item) => {
  console.log("updating item: ", item);

  fetch("http://localhost:5000/stock/" + item._id, {
    method: "PUT",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ item }),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
};
