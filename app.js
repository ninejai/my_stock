const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello");
});

const port = 3000;
app.listen(port);
