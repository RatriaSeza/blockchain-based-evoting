import { Document } from 'mongoose';

export interface ICandidate extends Document {
  candidateNumber: number,
  chiefName: string,
  viceName: string,
  chiefMajor: string,
  viceMajor: string,
  chiefClassOf: number,
  viceClassOf: number,
  candidateImage: string,
  voteCount: number,
  createdAt?: Date,
  updatedAt?: Date
}