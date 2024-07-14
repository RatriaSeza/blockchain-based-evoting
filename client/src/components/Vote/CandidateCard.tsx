import React from 'react';

type CandidateCardProps = {
  candidate: {
    id: number;
    chiefName: string;
    viceName: string;
    candidateImage: string;
    candidateNumber: number;
    chiefMajor: string;
    viceMajor: string;
  };
};

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
  return (
    <div className="bg-dark-card">
      <img src={candidate.candidateImage} alt="" />
      <button>Vote</button>
    </div>
  );
}

export default CandidateCard;