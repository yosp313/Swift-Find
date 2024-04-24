import { Router } from "express";
import { paymentController } from "../controllers/paymentController";

export const paymentRouter = Router();

paymentRouter.post("/", paymentController);
