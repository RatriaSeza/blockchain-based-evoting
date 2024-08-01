import { Request, Response } from "express";
import { User } from "../models/User";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const userVerication = (req: Request, res: Response) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "You need to login" });
  }

  jwt.verify(token, process.env.SECRET_TOKEN as string, async (err: unknown, data: any) => {
    if (err) {
      return res.status(401).json({ message: "You need to login" });
    } 

    const user = await User.findById(data.id);
    if (user) return res.status(200).json({ user });
    else return res.status(401).json({ message: "You need to login" });
  })
}
