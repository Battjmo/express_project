// import express, { Express, Request, Response } from "express";
// const dotenv = require("dotenv");

// dotenv.config();

// const app: Express = express();
// const port = process.env.PORT || 3000;

// app.set("view engine", "ejs");
// app.use(express.static("public"));

// app.get("/", (req: Request, res: Response) => {
//   // get the user's name from the request
//   res.send({ 'name': 'John Doe' });
// });

// app.listen(port, () => {
//   console.log(`hi`);
//   // render some more stuff:
// });

// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
app.use(express.static(__dirname + "/public"));
const port = process.env.PORT || 3000;
// set the view engine to ejs
app.set("view engine", "pug");

app.get("/", (req: Request, res: Response) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});