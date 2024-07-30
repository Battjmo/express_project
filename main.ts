import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
var reload = require("reload");

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.set("view engine", "pug");

app.get("/", (req: Request, res: Response) => {
  const title = "Home";
  res.render("index", { title: title });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
  console.log('carrots')
});

reload(app); // reload the server when the code changes