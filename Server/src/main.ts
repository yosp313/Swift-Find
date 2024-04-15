import express, { Express } from "express";
import { basicController } from "./Controllers/basicController";

const ts: string = "TS";
const port = 8000;
const app: Express = express();

app.get("/", basicController);

app.listen(port, () => {
  console.log("Server running with " + ts);
});
