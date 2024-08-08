import { Schema, model } from "mongoose";
import { ICandidateImage } from "../interfaces/ICandidateImage";

const CandidateImageSchema = new Schema<ICandidateImage>({
  candidateNumber: { type: Number, required: true, unique: true },
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { collection: 'candidate-images' });

export const CandidateImage = model<ICandidateImage>('CandidateImage', CandidateImageSchema);