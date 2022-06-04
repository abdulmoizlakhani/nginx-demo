const express = require("express");

const app = express();

app.use(express.static("public"));

app.use("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
