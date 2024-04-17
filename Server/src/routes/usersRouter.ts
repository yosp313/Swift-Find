import { Router } from "express";
import { userGetController } from "../controllers/userControllers";

export const userRouter = Router();

userRouter.get("/", userGetController);
