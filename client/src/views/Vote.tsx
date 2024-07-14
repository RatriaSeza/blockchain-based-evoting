import Nav from "../components/Nav";
import CandidateCard from "../components/Vote/CandidateCard";
import FirstCandidateImage from "../assets/img/candidates/first-candidate.jpg";
import SecondCandidateImage from "../assets/img/candidates/second-candidate.jpg";

const firstCandidateData = {
  id: 1,
  chiefName: "Satria Reza Ramadhan",
  viceName: "Dimas Maulana",
  candidateImage: FirstCandidateImage,
  candidateNumber: 1,
  chiefMajor: "Informatika",
  viceMajor: "Biologi",
  chiefClassOf: 2021,
  viceClassOf: 2021,
};

const secondCandidateData = {
  id: 2,
  chiefName: "Donald Trump",
  viceName: "Barack Obama",
  candidateImage: SecondCandidateImage,
  candidateNumber: 2,
  chiefMajor: "Kimia",
  viceMajor: "Fisika",
  chiefClassOf: 2021,
  viceClassOf: 2021,
};

const Vote = () => {

  return (
    <div className="bg-[#111111] text-white">
      <div className="px-6 py-4">
        <div className="mb-24">
          <div>
            <h2 className="mt-3 mb-6 text-center text-xl font-bold">
              Calon Ketua BEM FSM Undip
            </h2>
            <div className="mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CandidateCard candidate={firstCandidateData} />
                <CandidateCard candidate={secondCandidateData} />
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