export type VoterType = {
  _id: string;
  name: string;
  major: string;
  classOf: number;
  isVoted: boolean;
  userId: string;
  selectedCandidateId?: string;
  createdAt?: Date;
  updatedAt?: Date;
};