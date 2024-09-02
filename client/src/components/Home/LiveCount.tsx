import { useEffect, useState } from "react";
import BallotIcon from "../../assets/img/ballot-box.png";
import { ToastError } from "../Toast";
import axios from "axios";
import { CandidateType } from "../Vote/CandidateType";

const LiveCount = () => {
  const [candidates, setCandidates] = useState<CandidateType[]>([]);
  const [totalVotes, setTotalVotes] = useState<number>(0);

  useEffect(() => {
    getLiveCount();
  }, []);

  const getLiveCount = async () => {
    try {
      const responseGetCandidates = await axios.get(`${import.meta.env.VITE_API_URL}/api/candidates`);
      const candidates = responseGetCandidates.data;
      
      let totalVotes = 0;
      const candidatesWithVotes = await Promise.all(
        candidates.map(async (candidate: CandidateType) => {
          const responseGetVotes = await axios.get(`${import.meta.env.VITE_API_URL}/api/candidates/${candidate.candidateNumber}/votes`);
          const votes = parseInt(responseGetVotes.data.totalVotes);
          
          totalVotes += votes;
          return {
            ...candidate,
            votes
          };
        })
      );

      setCandidates(candidatesWithVotes);
      setTotalVotes(totalVotes);
    } catch (error: unknown) {
      console.error(error);
      ToastError({ message: "Something is wrong, please try again.", position: "top-right", duration: 1400 });
    }
  }

  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-6">
      <div className="bg-votecount px-6 md:px-12 py-4 flex md:flex-col justify-around items-center gap-1 rounded">
        <img className="h-24 w-auto" src={BallotIcon} alt="BallotIcon" />
        <div className="flex flex-col justify-center items-center text-black text-center">
          <h2 className="text-5xl font-bold">{totalVotes}</h2>
          <h2 className="text-gray-900 text-sm font-medium">
            Total Vote Count
          </h2>
        </div>
      </div>
      <div className="grow bg-dark-card px-6 py-4 shadow-dark-card rounded">
        <h4 className="flex items-center text-white font-semibold text-xl mb-3"><span className="text-xs text-red-500 mr-2"><i className="fa-solid fa-circle animate-pulse"></i></span>Live Count</h4>
        <div>
          {candidates && candidates.map((candidate, index) => (
            <div key={candidate._id} className="flex justify-between items-center gap-2 mb-2">
              <div className={`bg-neutral-800 ${index % 2 == 0 ? 'text-[#55d9c6]' : 'text-[#ef82ef]'} text-lg w-14 h-14 flex justify-center items-center rounded-full`}>
                {candidate.candidateNumber}
              </div>
              <div className="grow flex flex-col justify-between h-14">
                <p className="text-sm">{candidate.chiefName} & {candidate.viceName}</p>
                <div className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-neutral-800 font-sans text-xs font-medium">
                  <div className={`flex items-center justify-center h-full overflow-hidden text-white break-all ${index % 2 == 0 ? 'bg-[#55d9c6]' : 'bg-[#ef82ef]'} rounded-full`} style={{ width: `${(candidate.votes ?? 0 / totalVotes) * 100}%` }}>
                  </div>
                </div>
                <p className="text-xs">{candidate.votes} votes</p>
              </div>
              <p className="basis-12 text-sm text-right">
                {((candidate.votes ?? 0) / totalVotes * 100).toFixed(1)}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveCount;
