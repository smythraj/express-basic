const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(201).json({ message: "done!" });
});

app.listen(8080, function () {
  console.log("Server is running on 8080");
});
