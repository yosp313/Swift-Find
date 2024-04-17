import { Request, Response } from "express";

export const authGetController = (req: Request, res: Response) => {
  res.send("Logging in with Google and you are in the callback uri");
};
