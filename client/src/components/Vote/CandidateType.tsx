export type CandidateType = {
  _id: string;
  candidateImage: string;
  candidateNumber: number;
  chiefName: string;
  chiefMajor: string;
  chiefClassOf: number;
  viceName: string;
  viceMajor: string;
  viceClassOf: number,
  isLogin: boolean;
  votes?: number;
}