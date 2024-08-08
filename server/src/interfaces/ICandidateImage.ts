import { Document } from "mongoose";

export interface ICandidateImage extends Document {
  candidateNumber: number,
  image: string,
  createdAt?: Date,
  updatedAt?: Date
};