import { XMarkIcon, PlusIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { CandidatesTable } from "./CandidatesTable";

import { CandidatesForm } from "./CandidatesForm";
import { CandidateType } from "@components/Vote/CandidateType";
import axios from "axios";

type CandidatesCardProps = {
  onCloseClick: () => void;
};

export const CandidatesCard: React.FC<CandidatesCardProps> = ({
  onCloseClick,
}) => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [candidates, setCandidates] = useState<CandidateType[]>([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/candidates`);
        setCandidates(response.data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    fetchCandidates();
  }, []);

  const handleAddCandidate = (newCandidate: CandidateType) => {
    setCandidates((prevCandidates) => [...prevCandidates, newCandidate]);
  };

  const handleCloseAddModal = () => {
    setOpenAddModal(false);
  }
  
  return (
    <div>
      {openAddModal && <CandidatesForm onClick={handleCloseAddModal} onAddCandidate={handleAddCandidate} />}

      <div className="flex justify-between items-center p-6">
        <h6 className="text-lg text-gray-500 font-semibold">Candidates</h6>
        <button
          onClick={onCloseClick}
          className="flex items-center p-2 h-fit text-gray-500 border rounded shadow hover:bg-gray-100 active:bg-gray-50"
        >
          <XMarkIcon className="size-5" />
        </button>
      </div>

      <div className="flex justify-end mx-6">
        <button 
          onClick={() => setOpenAddModal(!openAddModal)}
          className="flex items-center gap-1 px-4 py-2 text-neutral-500 text-sm font-medium border rounded-lg shadow mb-2 cursor-pointer hover:bg-gray-100 active:bg-gray-50">
          <PlusIcon className="size-4" />
          <p>Add</p>
        </button>
      </div>

      <CandidatesTable initialCandidates={candidates}/>
    </div>
  );
};
