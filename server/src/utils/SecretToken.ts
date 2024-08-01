import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const createSecretToken = (id: string) => {
  return jwt.sign({ id }, process.env.SECRET_TOKEN as string, {
    expiresIn: "3d",
  })
}