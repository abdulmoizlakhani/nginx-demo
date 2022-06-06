const path = require("path");
const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/url/meta/:lang?", (req, res) => {
  const lang = req.params.lang;
  if (lang) {
    if (lang === "en") {
      res.sendFile(`./page.html`, { root: __dirname + "/public" });
    } else {
      res.sendFile(`./${lang}/page.html`, { root: __dirname + "/public" });
    }
  } else {
    res.redirect("/url/meta/en");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
