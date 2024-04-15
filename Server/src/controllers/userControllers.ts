import { Request, Response } from "express";

export const userGetController = (req: Request, res: Response) => {
  res.send("All users");
};
