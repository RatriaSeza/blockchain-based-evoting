import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import CandidateCard from "../components/Vote/CandidateCard";
import { Candidate } from "../components/Vote/CandidateType";

import FirstCandidateImage from "../assets/img/candidates/first-candidate-removebg-preview.png";
import SecondCandidateImage from "../assets/img/candidates/second-candidate.jpg";
import { CandidateSkeleton } from "../components/Vote/CandidateSkeleton";

const Vote = () => {
  const [firstCandidate, setFirstCandidate] = useState<Candidate | null>(null);
  const [secondCandidate, setsecondCandidate] = useState<Candidate | null>(
    null
  );

  useEffect(() => {
    fetch("http://localhost:5000/api/candidates/1")
      .then((res) => res.json())
      .then((res) => {
        setFirstCandidate(res);
      });

    fetch("http://localhost:5000/api/candidates/2")
      .then((res) => res.json())
      .then((res) => {
        setsecondCandidate(res);
      });
  });

  console.log(firstCandidate);

  return (
    <div className="min-h-dvh text-white md:flex md:items-center justify-center">
      <div className="px-6 py-4">
        <div className="mb-24 md:mb-0 md:container md:mx-auto">
          <div>
            <h2 className="mt-3 mb-6 text-center text-xl md:text-2xl lg:text-3xl font-extrabold">
              Calon Ketua BEM FSM Undip
            </h2>
            <div className="mb-6">
              <div className="md:max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {firstCandidate ? (
                  <CandidateCard
                    _id={firstCandidate._id}
                    candidateImage={FirstCandidateImage}
                    chiefName={firstCandidate.chiefName}
                    viceName={firstCandidate.viceName}
                    candidateNumber={firstCandidate.candidateNumber}
                    chiefMajor={firstCandidate.chiefMajor}
                    viceMajor={firstCandidate.viceMajor}
                    chiefClassOf={firstCandidate.chiefClassOf}
                    viceClassOf={firstCandidate.viceClassOf}
                  />
                ) : (
                  <CandidateSkeleton />
                )}
                {secondCandidate ? (
                  <CandidateCard
                    _id={secondCandidate._id}
                    candidateImage={SecondCandidateImage}
                    chiefName={secondCandidate.chiefName}
                    viceName={secondCandidate.viceName}
                    candidateNumber={secondCandidate.candidateNumber}
                    chiefMajor={secondCandidate.chiefMajor}
                    viceMajor={secondCandidate.viceMajor}
                    chiefClassOf={secondCandidate.chiefClassOf}
                    viceClassOf={secondCandidate.viceClassOf}
                  />
                ) : (
                  <CandidateSkeleton />
                )}
              </div>
            </div>
          </div>
        </div>
        <Nav active="vote" />
      </div>
    </div>
  );
};

export default Vote;
