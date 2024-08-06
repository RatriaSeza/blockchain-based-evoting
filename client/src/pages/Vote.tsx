import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Nav from "../components/Nav";
import CandidateCard from "../components/Vote/CandidateCard";
import { Candidate } from "../components/Vote/CandidateType";

import FirstCandidateImage from "../assets/img/candidates/first-candidate-removebg-preview.png";
import SecondCandidateImage from "../assets/img/candidates/second-candidate.jpg";
import { CandidateSkeleton } from "../components/Vote/CandidateSkeleton";
import { ToastError } from "../components/Toast";

const Vote = () => {
  const [firstCandidate, setFirstCandidate] = useState<Candidate | null>(null);
  const [secondCandidate, setSecondCandidate] = useState<Candidate | null>(null);
  const navigate = useNavigate();
  const [cookies, ,removeCookie] = useCookies(["token"]);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      if (!localStorage.getItem("token")) {
        console.log('No token found, redirecting to login...');
        ToastError({ message: "You need to login first.", position: "top-right", duration: 1400 });

        navigate("/login");
        return;
      }

      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth`, {
        },{ 
          withCredentials: true 
        });
        
        const { status, data: { user } } = response;
        
        if (user) setIsLogin(true);

        if (!status) {
          localStorage.removeItem("token");
          ToastError({ message: "You need to login first.", position: "top-right", duration: 1400 });
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
      } catch (error: unknown) {
        navigate("/login");
      }
    };
    
    verifyToken();
  },  [cookies, navigate, removeCookie]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/candidates/1`)
      .then((res) => res.json())
      .then((res) => {
        setFirstCandidate(res);
      });

    fetch(`${import.meta.env.VITE_API_URL}/api/candidates/2`)
      .then((res) => res.json())
      .then((res) => {
        setSecondCandidate(res);
      });
  });

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
        <Nav active="vote" isLogin={isLogin} />
      </div>
    </div>
  );
};

export default Vote;
