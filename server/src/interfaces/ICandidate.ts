import { Document } from 'mongoose';

interface ICandidate extends Document {
  chiefName: string,
  viceName: string,
  candidateNumber: number,
  chiefMajor: string,
  viceMajor: string,
  chiefClassOf: number,
  viceClassOf: number,
  candidateImage: string,
  createdAt?: Date,
  updatedAt?: Date
}