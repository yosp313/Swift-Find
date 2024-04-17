import { db } from "../config/db/db";
import { products } from "../config/db/schema";

export const allProducts = async () => await db.select().from(products);
