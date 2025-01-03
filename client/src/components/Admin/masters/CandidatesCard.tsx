import { XMarkIcon, PlusIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { ToastError, ToastSuccess } from "@components/Toast";
import { CandidateType } from "@components/Vote/CandidateType";
import { CandidatesTable } from "./CandidatesTable";
import { CandidatesForm } from "./CandidatesForm";
import { LoadingIcon } from "../LoadingIcon";

type CandidatesCardProps = {
  onCloseClick: () => void;
};

export const CandidatesCard: React.FC<CandidatesCardProps> = ({
  onCloseClick,
}) => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [candidates, setCandidates] = useState<CandidateType[]>([]);
  const [editingCandidate, setEditingCandidate] = useState<CandidateType | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchCandidates = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/candidates`);
        setCandidates(response.data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
        ToastError({ message: "Error fetching candidates", duration: 1500 });
      } finally {
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  const handleAddCandidate = (newCandidate: CandidateType) => {
    setCandidates((prevCandidates) => {
      const existingCandidateIndex = prevCandidates.findIndex(candidate => candidate._id === newCandidate._id);
      if (existingCandidateIndex !== -1) {
        const updatedCandidates = [...prevCandidates];
        updatedCandidates[existingCandidateIndex] = newCandidate;
        return updatedCandidates;
      } else {
        return [...prevCandidates, newCandidate];
      }
    });
    setOpenAddModal(false);
    setEditingCandidate(null);
  };

  const handleEditClik = (candidate: CandidateType) => {
    setEditingCandidate(candidate);
    setOpenAddModal(true);
  }

  const handleDeleteCandidate = async (candidateId: string) => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_API_URL}/api/candidates/${candidateId}`);
      if (response.status === 200) {
        setCandidates((prevCandidates) => prevCandidates.filter(candidate => candidate._id !== candidateId));
        ToastSuccess({ message: "Candidate deleted successfully", duration: 1500 });
      } else {
        ToastError({ message: "Failed to delete candidate", duration: 1500 });
      }
    } catch (error) {
      console.error("Error deleting candidate:", error);
      ToastError({ message: "Error deleting candidate", duration: 1500 });
    }
  };

  const handleCloseAddModal = () => {
    setOpenAddModal(false);
    setEditingCandidate(null);
  }

  return (
    <div>
      {openAddModal && 
        <CandidatesForm 
          onClick={handleCloseAddModal} 
          onAddCandidate={handleAddCandidate}
          editingCandidate={editingCandidate}
        />
      }

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

      {loading ? (
        <div className="text-sm text-center py-3 text-gray-500 border-gray-200 border-b">
          <p className="inline-flex items-center">
            <span className="mr-2"><LoadingIcon size={4}/></span>
            Loading
          </p>
        </div>
      ) : candidates.length === 0 ? (
        <div className="text-sm text-center py-3 text-gray-500 border-gray-200 border-b">No candidates available</div>
      ) : (
        <CandidatesTable 
          initialCandidates={candidates} 
          onEditClick={handleEditClik} 
          onDeleteCandidate={handleDeleteCandidate} 
        />
      )}

      <ToastContainer />
    </div>
  );
};
