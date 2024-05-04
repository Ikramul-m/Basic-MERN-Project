const express = require("express");
const app = express();
const mongoose = require("mongoose");



// MongoDB starts
mongoose
  .connect("mongodb://127.0.0.1:27017/moudb")
  .then(() => {
    console.log("Connected successfully");
  })
  .catch((error) => {
    console.log("error", error);
  });
//MongoDB ends




const PORT = 4000;
const hostName = "localhost";

app.get("/", (req, res) => {
  res.send("Api is Working...");
});

app.listen(PORT, () => {
  console.log(`listening to the http://${hostName}:${PORT}`);
});
