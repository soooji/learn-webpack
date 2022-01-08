const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.get("/", function (req, res) {
  const pathToFile = path.resolve(__dirname, "../dist/index.html");
  const fileContent = fs.readFileSync(pathToFile, "utf-8");
  res.send(fileContent);
});

app.use("/static", express.static(path.resolve(__dirname, "../dist")));

app.listen(3000, function () {
  console.log("Server Started");
});
