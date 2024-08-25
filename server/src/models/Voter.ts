import { Schema, model } from "mongoose";
import { IVoter } from "../interfaces/IVoter";

const VoterSchema = new Schema<IVoter>({
  name: { type: String, required: true },
  major: { type: String, required: true },
  classOf: { type: Number, required: true },
  isVoted: { type: Boolean, default: false },
  userId: { type: String, required: true },
  createdAt: { type: Date, default: new Date().toLocaleString() },
  updatedAt: { type: Date, default: new Date().toLocaleString() }
}, { collection: 'voters' });

export const Voter = model<IVoter>('Voter', VoterSchema);