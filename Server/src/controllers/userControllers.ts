import { Request, Response } from "express";
import { allUsers, postUser } from "../services/userService";
import { User } from "../config/db/schema";

export const usersGetController = async (req: Request, res: Response) => {
  const users = await allUsers();
  res.json(users);
};

export const userGetController = async (req: Request, res: Response) => {
  const user = req.cookies.user;
  res.send(user);
};

export const userPostController = async (req: Request, res: Response) => {
  const data = req.body;
  const user: User = {
    id: data.id,
    email: data.email,
    fullName: data.name,
    imageUrl: data.imageUrl,
  };

  await postUser(user);

  res.json(user);
};
