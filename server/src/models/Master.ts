import { Schema, model } from "mongoose";
import { IMaster } from "../interfaces/IMaster";

const MasterSchema = new Schema<IMaster>({
  key: { type: String, required: true },
  value: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const Master = model<IMaster>('Master', MasterSchema);