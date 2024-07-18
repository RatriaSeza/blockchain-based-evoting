import { hash } from "crypto";
import dotenv from "dotenv";
import { User } from "../models/user";

export const insert = async () => {
  dotenv.config();

  const password = await hash('password', process.env.SALT as string);
  const user = await new User({
    username: 'Yazid',
    password: password,
    role: 'admin',
    createdAt: new Date(Date.now()),
  });
}