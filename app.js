const path = require("path");
const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/url/meta/:page", (req, res) => {
  const lang = req.query.lang;
  const page = req.params.page ? req.params.page.toLowerCase() : undefined;
  if (!lang && page) {
    res.sendFile(`./en/${page}.html`, { root: __dirname + "/public" });
  } else if (lang && !page) {
    res.sendFile(`./${lang}/home.html`, { root: __dirname + "/public" });
  } else if (!lang && !page) {
    res.sendFile(`./en/home.html`, { root: __dirname + "/public" });
  } else {
    res.sendFile(`./${lang}/${page}.html`, { root: __dirname + "/public" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
