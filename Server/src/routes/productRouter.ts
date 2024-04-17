import { Router } from "express";
import { getProductsController } from "../controllers/productController";

export const productRouter = Router();

productRouter.get("/", getProductsController);
