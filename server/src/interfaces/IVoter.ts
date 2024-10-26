import { Document } from 'mongoose';

export interface IVoter extends Document {
  name: string;
  nim: string;
  major: string;
  classOf: number;
  isVoted: boolean;
  userId: string;
  selectedCandidateId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}