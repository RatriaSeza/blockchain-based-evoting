import { Document } from 'mongoose';

export interface IUser extends Document {
  username: string,
  password: string,
  role: 'admin' | 'voter',
  createdAt?: Date,
  updatedAt?: Date
}