import { db } from "../config/db/db";
import { Order, orders } from "../config/db/schema";

export const postOrder = async (order: Order) => {
  return await db.insert(orders).values({
    userId: order.userId,
    products: order.products,
    city: order.city,
    country: order.country,
  });
};
