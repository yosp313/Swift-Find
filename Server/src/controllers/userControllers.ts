import { Request, Response } from "express";
import { allUsers } from "../services/userService";

export const userGetController = async (req: Request, res: Response) => {
  const users = await allUsers();
  res.json(users);
};
