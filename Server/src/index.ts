import express, { Express } from "express";
import { userGetController } from "./controllers/userControllers";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", userGetController);

app.listen("8000", () => {
  console.log("server running on TS at port 8000");
});
