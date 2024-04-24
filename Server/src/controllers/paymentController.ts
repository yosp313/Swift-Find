import { Request, Response } from "express";
import { stripe } from "../config/stripe";

export const paymentController = async (req: Request, res: Response) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: "price_1P97eSRp5k7SULfvPnNmz4Ac",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000/products?success=true",
    cancel_url: "http://localhost:3000/products?canceled=true",
  });

  res.redirect(303, session.url as string);
};
