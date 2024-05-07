import { Request, Response } from "express";
import { stripe } from "../config/stripe";

type Items = {
  price: string;
  quantity: number;
};

export const paymentController = async (req: Request, res: Response) => {
  const itemsList: Items[] = req.body.data;

  const session = await stripe.checkout.sessions.create({
    line_items: itemsList,
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/products?success=true`,
    cancel_url: `${process.env.CLIENT_URL}/products?canceled=true`,
  });

  res.send(session.url as string);
};
