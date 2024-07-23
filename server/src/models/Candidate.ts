import { Schema, model } from "mongoose";
import { ICandidate } from "../interfaces/ICandidate";

const CandidateSchema = new Schema<ICandidate>({
  candidateNumber: { type: Number, required: true },
  chiefName: { type: String, required: true },
  viceName: { type: String, required: true },
  chiefMajor: { type: String, required: true },
  viceMajor: { type: String, required: true },
  chiefClassOf: { type: Number, required: true },
  viceClassOf: { type: Number, required: true },
  candidateImage: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const Candidate = model<ICandidate>('Candidate', CandidateSchema);