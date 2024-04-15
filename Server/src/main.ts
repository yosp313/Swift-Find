import express, { Express } from "express";
import cors from "cors";
import { basicController } from "./Controllers/basicController";

const ts: string = "TS";
const port = 8000;
const app: Express = express();

app.use(express.json())
app.use(cors())

app.get("/", basicController);

app.listen(port, () => {
  console.log("Server running with " + ts);
});
