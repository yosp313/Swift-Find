import { configDotenv } from "dotenv";
import Stripe from "stripe";

configDotenv();

export const stripe: Stripe = new Stripe(process.env.STRIPE_API_KEY as string);
