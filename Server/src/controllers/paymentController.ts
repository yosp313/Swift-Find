import { Request, Response } from "express";
import { stripe } from "../config/stripe";
import { postOrder } from "../services/orderService";
import { Order } from "../config/db/schema";

type Items = {
  price: string;
  quantity: number;
};

type Location = {
  country: string;
  city: string;
};

export const paymentController = async (req: Request, res: Response) => {
  const itemsList: Items[] = req.body.data;
  const location: Location = req.body.location;
  const userData = req.body.userId;

  const itemsString: string = JSON.stringify(itemsList);

  const order: Order = {
    city: location.city,
    country: location.country,
    products: itemsString,
    userId: userData,
  };

  console.log(order);
  console.log(itemsString);
  console.log(userData);

  const session = await stripe.checkout.sessions.create({
    line_items: itemsList,
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/products?success=true`,
    cancel_url: `${process.env.CLIENT_URL}/products?canceled=true`,
  });

  if (order.city !== null) await postOrder(order);

  res.send(session.url as string);
};
