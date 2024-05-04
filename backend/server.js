const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const User = require("./Models/useModel");

app.use(express.json());

// MongoDB starts
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected successfully");
    app.listen(process.env.PORT || 8000, (err) => {
      if (err) console.log(err);

      console.log("Running successfully at", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("error", error);
  });
//MongoDB ends

const PORT = 4000;
const hostName = "localhost";




app.listen(PORT, () => {
  console.log(`listening to the http://${hostName}:${PORT}`);
});
