import Nav from "../components/Nav";
import CandidateCard from "../components/Vote/CandidateCard";

const firstCandidateData = {
  id: 1,
  chiefName: "Satria Reza Ramadhan",
  viceName: "Dimas Maulana",
  candidateImage: "../assets/img/candidates/first-candidate.jpg",
  candidateNumber: 1,
  chiefMajor: "Computer Science",
  viceMajor: "Computer Engineering",
};

const Vote = () => {

  return (
    <div className="bg-[#111111] text-white">
      <div className="px-6 py-4">
        <div className="mb-24">
          <div>
            <p className="text-base leading-4 mb-6">
              Hi, <br />
              <span className="text-xl font-bold">Satria Reza Ramadhan</span>
            </p>
            <div className="mb-6">
              <div>
                <CandidateCard candidate={firstCandidateData} />
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