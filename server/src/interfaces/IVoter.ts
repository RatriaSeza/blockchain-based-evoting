import { Document } from 'mongoose';

export interface IVoter extends Document {
  name: string;
  major: string;
  classOf: number;
  isVoted: boolean;
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
}