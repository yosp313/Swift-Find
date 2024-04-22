import { Router } from "express";
import {
  usersGetController,
  userPostController,
  userGetController,
} from "../controllers/userControllers";

export const userRouter = Router();

userRouter.get("/", usersGetController);

userRouter.get("/profile", userGetController);

userRouter.post("/", userPostController);
