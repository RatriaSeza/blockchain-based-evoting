import axios from "axios";
import { LoadingIcon } from "../LoadingIcon";
import { useEffect, useState } from "react";
import { UserIcon } from "@heroicons/react/24/solid";

interface RecentVotesProps {
  voter: {
    name: string;
    major: string;
    classOf: string;
  };
  timestamp: string;
}

export const RecentVotes = () => {
  const [loading, setLoading] = useState(false);
  const [votes, setVotes] = useState<RecentVotesProps[]>([]);

  useEffect(() => {
    setLoading(true);
    const fetchVotes = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/votes/history/8`);
        setVotes(response.data.recentVotes);
      } catch (error: unknown) {
        console.error(error);
        setVotes([]);
      } finally {
        setLoading(false);
      }
    }

    fetchVotes();
  }, []);

  return (
    <div className="card grow">
      <div className="card-body">
        <h4 className="text-gray-500 font-semibold mb-3">Recent Votes</h4>
        <div className="grid grid-cols-1 divide-y">
        {loading ? (
          <p className="inline-flex items-center">
            <span className="mr-2"><LoadingIcon size={4}/></span>
            Loading
          </p>
          ) : (
            votes.map((vote, index) => (
              <div key={index} className="flex justify-between gap-3 py-3">
                <div className="bg-[#006aaf] flex justify-center items-center p-2 rounded-full"><UserIcon className="size-6 text-white" /></div>
                <div className="grow">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-500 font-semibold text-sm">{vote.voter.name}</p>
                    <p className="text-[#006aaf] text-xs">{vote.timestamp}</p>
                  </div>
                  <p className="text-gray-400 text-xs font-medium">{vote.voter.major} ({vote.voter.classOf})</p>
                </div>
              </div>
            ))
          )
        }
        </div>
      </div>
    </div>
  );
};
