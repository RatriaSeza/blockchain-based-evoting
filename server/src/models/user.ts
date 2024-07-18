import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  username: string,
  password: string,
  role: string,
  createdAt?: Date,
  updatedAt?: Date
}

const UserSchema = new Schema<IUser>(
  {
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String,  required: true }
  }, 
  { timestamps: true }
)

export const User = model<IUser>('User', UserSchema);