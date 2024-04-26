import { Request, Response } from "express";
import { stripe } from "../config/stripe";

type Items = {
  price: string;
  quantity: number;
};

export const paymentController = async (req: Request, res: Response) => {
  const itemsList: Items[] = req.body.data;
  console.log(itemsList);

  const session = await stripe.checkout.sessions.create({
    line_items: itemsList,
    mode: "payment",
    success_url: "http://localhost:3000/products?success=true",
    cancel_url: "http://localhost:3000/products?canceled=true",
  });

  res.send(session.url as string);
};
