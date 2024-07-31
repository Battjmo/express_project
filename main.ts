import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
var reload = require("reload");
import { middleware } from "./middleware/middleware";
import { CustomRequest } from "./types";


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.set("view engine", "pug");
//app.use(express.static("assets"));
app.use(express.static('assets'));
app.use(express.static('dist'))

// gotta tell it how to use json manually? this is dumb
app.use(express.json());
//tell it how to use form data
app.use(express.urlencoded({ extended: true }));

app.use(middleware);

app.get("/", (req: CustomRequest, res: Response) => {
  const title = "carrots";
  res.render("index", { title: title });
});

app.post("/basket", (req: CustomRequest, res: Response) => {
  console.log(req.body);
  console.log(req?.middlewareMessage);
  setTimeout(() => {
    const email = req?.body?.email;
    if (email) {
      res.send(`Your email is ${email}`);
    } else {
      res.status(400).send("Invalid email");
    }
  }, 1000);
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
  console.log('carrots')
});

reload(app); // reload the server when the code changes