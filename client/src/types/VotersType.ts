export type VoterType = {
  _id: string;
  name: string;
  nim: string;
  major: string;
  classOf: number;
  isVoted: boolean;
  userId: string;
  selectedCandidateId?: string;
  createdAt?: Date;
  updatedAt?: Date;
};