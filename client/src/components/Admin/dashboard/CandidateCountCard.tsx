import React from "react";

type CandidateCountCardProps = {
  candidateNumber: number;
  totalVotes: number;
  percentage: string;
}

export const CandidateCountCard: React.FC<CandidateCountCardProps> = ({candidateNumber, totalVotes, percentage}) => {
  return (
    <div className="card flex-1">
      <div className="card-body p-4 md:p-6 flex items-center gap-4 lg:gap-5">
        <div className="bg-gray-200 w-12 md:w-14 h-12 md:h-14 flex justify-center items-center rounded-md text-xl md:text-2xl text-gray-700">
          <span className="font-semibold">
            {candidateNumber}
          </span>
        </div>
        <div>
          <h4 className="text-gray-500 text-3xl md:text-4xl font-semibold">{totalVotes}</h4>
          <p className="text-gray-400 text-sm font-normal text-nowrap">{percentage}%</p>
        </div>
      </div>
    </div>
  )
}