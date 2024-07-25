import { Document } from "mongoose";

export interface IMaster extends Document {
  key: string,
  value: string,
  createdAt?: Date,
  updatedAt?: Date
}
