import { Request, Response } from "express";

export type Product = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  createdAt: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
};

let products: Product[] = [];

export const cartPostController = (req: Request, res: Response) => {
  const data = req.body;

  products.push(data);
};

export const cartGetController = (req: Request, res: Response) => {
  res.send(products);
};
