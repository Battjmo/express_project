const express = require("express");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  // get the user's name from the request
  res.render("index");
});

app.listen(port, () => {
  console.log(`hi`);
  // render some more stuff:
});
