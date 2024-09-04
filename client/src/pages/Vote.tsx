import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import CandidateCard from "../components/Vote/CandidateCard";

import { CandidateSkeleton } from "../components/Vote/CandidateSkeleton";
import { ToastError } from "../components/Toast";
import { CandidateType } from "../components/Vote/CandidateType";

const Vote = () => {
  const [candidates, setCandidates] = useState<CandidateType[]>([]);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      if (!localStorage.getItem("token")) {
        if (localStorage.getItem("user")) localStorage.removeItem("user");
        setIsLogin(false);
        return;
      } else {
        try {
          const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth`, {
          },{ 
            withCredentials: true 
          });
          
          const { status, data: { user } } = response;
          
          if (user) {
            setIsLogin(true);
          }
  
          if (!status) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            ToastError({ message: "You need to login first.", position: "top-right", duration: 1400 });
            setTimeout(() => {
              navigate("/login");
            }, 2000);
          }
        } catch (error: unknown) {
          if (localStorage.getItem("token")) localStorage.removeItem("token");
          if (localStorage.getItem("user")) localStorage.removeItem("user");
          console.error(error);
          ToastError({ message: "Something is wrong, please login.", position: "top-right", duration: 1400 });
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
      }
    };
    
    verifyToken();
  },  [navigate]);

  useEffect(() => {
    const getCandidates = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/candidates`);
        const candidates = response.data;

        setCandidates(candidates);
      } catch (error: unknown) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    
    getCandidates();    
  }, []);

  return (
    <div className="min-h-dvh text-white md:flex md:items-center justify-center profile-background">
      <div className="px-6 py-4">
        <div className="mb-24 md:mb-0 md:container md:mx-auto">
          <div>
            <h2 className="mt-3 mb-6 text-center text-xl md:text-2xl lg:text-3xl font-extrabold">
              Calon Ketua BEM FSM Undip
            </h2>
            <div className="mb-6">
              <div className="md:max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {loading ? (
                  Array.from({ length: 2 }).map((_, index) => (
                    <CandidateSkeleton key={index} />
                  ))
                ) : (
                  candidates.map((candidate) => (
                    <CandidateCard key={candidate.candidateNumber} {...candidate} isLogin={isLogin} />
                  ))
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
