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
  address: string;
};

export const paymentController = async (req: Request, res: Response) => {
  const itemsList: Items[] = req.body.data;
  const location: Location = req.body.location;
  const userData = req.body.userId;
  const totalCost = req.body.totalCost;

  const itemsString: string = JSON.stringify(itemsList);

  const order: Order = {
    city: location.city,
    country: location.country,
    address: location.address,
    products: itemsString,
    userId: userData,
    cost: totalCost,
  };

  const session = await stripe.checkout.sessions.create({
    line_items: itemsList,
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/shopping-cart/success`,
    cancel_url: `${process.env.CLIENT_URL}/shopping-cart/canceled`,
  });
  console.log(session.payment_intent);
  console.log(session.payment_status);

  if (order !== null) {
    await postOrder(order);
  }

  res.send(session.url as string);
};
