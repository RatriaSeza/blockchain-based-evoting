import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/IUser";
import bcrypt from 'bcrypt';

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'voter'],  required: true },
  createdAt: { type: Date, default: new Date().toLocaleString() },
  updatedAt: { type: Date, default: new Date().toLocaleString() }
});

// hashing password
UserSchema.pre<IUser>('save',async function() {
  this.password = await bcrypt.hash(this.password, 12);
});

export const User = model<IUser>('User', UserSchema);