import { Sidebar } from "@components/Admin/ui/sidebar/Sidebar";
import { Header } from "@components/Admin/ui/header/Header";
import { Footer } from "@components/Admin/ui/footer/Footer";
import { TotalVotesCard } from "@components/Admin/dashboard/TotalVotesCard";
import { CountdownCard } from "@components/Admin/dashboard/CountdownCard";
import { CandidateCountCard } from "@components/Admin/dashboard/CandidateCountCard";
import { StatisticsCard } from "@components/Admin/dashboard/StatisticsCard";
import { SummaryChart } from "@components/Admin/dashboard/SummaryChart";
import { VoteByMajor } from "@components/Admin/dashboard/VoteByMajor";
import { CandidateType } from "@components/Vote/CandidateType";
import { useEffect, useState } from "react";
import axios from "axios";

export const Dashboard = () => {
  const [candidates, setCandidates] = useState<CandidateType[]>([]);
  const [totalVotes, setTotalVotes] = useState<number>(0);

	useEffect(() => {
    const getCandidates = async () => {
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

        setCandidates(candidatesWithVotes.sort((a, b) => a.candidateNumber - b.candidateNumber));
        setTotalVotes(totalVotes);
      } catch (error: unknown) {
        console.error(error);
      } 
    }
    
    getCandidates();    
  }, []);

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
              <div className="flex flex-col md:flex-row md:gap-x-6 gap-x-0 md:gap-y-0 gap-y-6">
								<div className="basis-2/3 grid grid-cols-5 gap-4 md:gap-6 h-fit">
									<div className="col-span-3">
										<CountdownCard />
									</div>
									<div className="col-span-2">
										<TotalVotesCard totalVotes={totalVotes} />
									</div>
                  <div className="col-span-5 flex flex-wrap justify-between gap-4 md:gap-6">
										{candidates && candidates.map((candidate, index) => (
                      <CandidateCountCard key={index} candidateNumber={candidate.candidateNumber} totalVotes={candidate.votes ?? 0} percentage={candidate.votes ? ((candidate.votes ?? 0) / totalVotes * 100).toFixed(1) : '0' } />
										))}
									</div>
									<div className="col-span-5">
										<StatisticsCard />
									</div>
								</div>

								<div className="grow">
									<div className="card mb-4 md:mb-6">
										<div className="card-body">
											<SummaryChart candidates={candidates.sort((a, b) => a.candidateNumber - b.candidateNumber)} />
											<VoteByMajor />
										</div>
									</div>
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
