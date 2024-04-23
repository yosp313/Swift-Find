import { Router } from "express";
import {
  cartGetController,
  cartPostController,
} from "../controllers/cartController";

export const cartRouter = Router();

cartRouter.post("/", cartPostController);

cartRouter.get("/", cartGetController);
