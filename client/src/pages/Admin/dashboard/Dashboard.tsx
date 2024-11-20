import { Sidebar } from "@components/Admin/ui/sidebar/Sidebar";
import { Header } from "@components/Admin/ui/header/Header";
import { Footer } from "@components/Admin/ui/footer/Footer";
import { VotesCard } from "@components/Admin/dashboard/VotesCard";
import { CountdownCard } from "@components/Admin/dashboard/CountdownCard";
import { CandidateCountCard } from "@components/Admin/dashboard/CandidateCountCard";
import { SummaryChart } from "@components/Admin/dashboard/SummaryChart";
import { VoteByMajor } from "@components/Admin/dashboard/VoteByMajor";
import { CandidateType } from "@components/Vote/CandidateType";
import { useEffect, useState } from "react";
import axios from "axios";
import { RecentVotes } from "@components/Admin/dashboard/RecentVotes";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Dashboard = () => {
  const [candidates, setCandidates] = useState<CandidateType[]>([]);
  const [totalVotes, setTotalVotes] = useState<number>(0);
  const [totalVoters, setTotalVoters] = useState<number>(0);

  const navigate = useNavigate();
  const [cookies, ,removeCookie] = useCookies(["admin-token"]);

	useEffect(() => {
    const verifyToken = async () => {
      if (!localStorage.getItem("admin-token")) {
        console.log('No token found, redirecting to login...');
        navigate("/admin/login");
        return;
      }

      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth`, {
        },{ 
          withCredentials: true 
        });
        
        const { status, data: { user } } = response;

        if (status == 200) {
          if (!user) {
            localStorage.removeItem("admin-token");
            navigate("/admin/login");
          }
        } else {
          localStorage.removeItem("admin-token");
          navigate("/admin/login");
        }
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          if (error.response) {
            console.error(error.response.data.message || "An error occurred. Please try again.");
          } else if (error.request) {
            console.error("No response from server. Please try again later.");
          } else {
            console.error("An error occurred. Please try again.");
          }
        }
        navigate("/admin/login");
      }
    };
    
    const fetchData = async () => {
      try {
        const responseGetCandidates = await axios.get(`${import.meta.env.VITE_API_URL}/api/candidates`);
        const responseTotalVoters = await axios.get(`${import.meta.env.VITE_API_URL}/api/voters/total`);
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
        

        setCandidates(candidatesWithVotes.sort((a, b) => a.candidateNumber - b.candidateNumber));
        setTotalVotes(totalVotes);
        setTotalVoters(responseTotalVoters.data.totalVoters);
      } catch (error: unknown) {
        console.error(error);
      } 
    }
    
    verifyToken();   
    fetchData(); 
  }, [cookies, navigate, removeCookie]);

  return (
    <main className="bg-surface">
      <div id="main-wrapper" className="flex p-5 xl:pr-0">
        <aside
          id="application-sidebar-brand"
          className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transform hidden xl:block xl:translate-x-0 xl:end-auto xl:bottom-0 fixed xl:top-5 xl:left-auto top-0 left-0 with-vertical h-screen z-[999] shrink-0 w-[270px] shadow-md xl:rounded-md rounded-none bg-white left-sidebar transition-all duration-300"
        >
          <Sidebar active="dashboard" />
        </aside>
        <div className="w-full xl:ml-[270px] xl:px-6 px-0">
          <main className="h-full max-w-full">
            <div className="container full-container p-0 flex flex-col gap-6">
              <header className="bg-white shadow-md rounded-md w-full text-sm py-4 px-6">
                <Header/>
              </header>

              {/* main content */}
              <div className="flex flex-col md:flex-row h-full md:gap-x-6 gap-x-0 md:gap-y-0 gap-y-6">
								<div className="basis-3/5 grid grid-cols-5 gap-4 md:gap-6 h-full">
									<div className="col-span-5">
										<CountdownCard />
									</div>
									<div className="col-span-5 flex flex-wrap justify-between gap-4 md:gap-6">
										<VotesCard count={totalVoters} description="Registered Voters" />
										<VotesCard count={totalVotes} description="Total Votes" />
									</div>
                  <div className="col-span-5 flex flex-wrap justify-between gap-4 md:gap-6">
										{candidates && candidates.map((candidate, index) => (
                      <CandidateCountCard 
                        key={index} 
                        candidateNumber={candidate.candidateNumber} 
                        totalVotes={candidate.votes ?? 0} 
                        percentage={candidate.votes ? ((candidate.votes ?? 0) / totalVotes * 100).toFixed(1) : '0' } 
                        backgroundColor={candidate.candidateNumber % 2 === 0 ? 'bg-[#5284B4]' : 'bg-[#D8E1B8]'}
                        numberColor={candidate.candidateNumber % 2 === 0 ? 'text-white' : 'text-gray-700'}
                        />
										))}
									</div>
									<div className="col-span-5">
										<VoteByMajor />
									</div>
								</div>

								<div className="basis-2/5 flex flex-col justify-between gap-6 grow">
                  <SummaryChart candidates={candidates.sort((a, b) => a.candidateNumber - b.candidateNumber)} />
                  <RecentVotes />
								</div>
							</div>
              <Footer />
            </div>
          </main>
        </div>
      </div>
    </main>
  );
};
