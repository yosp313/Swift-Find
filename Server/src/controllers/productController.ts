import { Request, Response } from "express";
import { allProducts } from "../services/productService";

export const getProductsController = async (req: Request, res: Response) => {
  const products = await allProducts();
  res.json(products);
};
