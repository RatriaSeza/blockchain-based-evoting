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
    <div className="min-h-dvh text-white">
      <div className="px-6 py-4">
        <div className="mb-24 md:mb-8 md:mt-20 md:container md:mx-auto">
          <div>
            <h2 className="mt-3 mb-6 text-center text-xl md:text-2xl lg:text-3xl font-bold">
              Calon Ketua BEM FSM Undip
            </h2>
            <div className="mb-6">
              <div className="md:max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
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