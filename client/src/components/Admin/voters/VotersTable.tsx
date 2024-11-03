import React, { useEffect, useRef, useState } from "react";

import { VoterType } from "src/types/VotersType";

import { EllipsisVerticalIcon, TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { DeleteConfirmationModal } from "../DeleteConfirmationModal";
import { LoadingIcon } from "../LoadingIcon";

type VotersTableProps = {
  initialVoters: VoterType[];
  onDeleteVoter: (candidateId: string) => void;
  onEditClick: (candidate: VoterType) => void;
};

export const VotersTable: React.FC<VotersTableProps> = ({ initialVoters, onDeleteVoter, onEditClick }) => {
  const [voters, setVoters] = useState<VoterType[]>([]);
  const [loading, setLoading] = useState(false);
  const [visibleActionIndex, setVisibleActionIndex] = useState<number | null>(null);
  const actionCardRef = useRef<HTMLDivElement | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [voterToDelete, setVoterToDelete] = useState<VoterType | null>(null);

  useEffect(() => {
    setLoading(true);
    setVoters(initialVoters);
    setLoading(false);
  }, [initialVoters]);

  const toggleActionCard = (index: number) => {
    setVisibleActionIndex(visibleActionIndex === index ? null : index);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (actionCardRef.current && !actionCardRef.current.contains(event.target as Node)) {
      setVisibleActionIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDeleteClick = (voter: VoterType) => {
    setVoterToDelete(voter);
    setShowDeleteModal(true);
  }

  const handleConfirmDelete = async () => {
    if (voterToDelete) {
      onDeleteVoter(voterToDelete._id);
      setShowDeleteModal(false);
      setVisibleActionIndex(null);
    }
  }

  return (
    <>
      {showDeleteModal && voterToDelete && (
        <DeleteConfirmationModal
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={handleConfirmDelete}
          message="Are you sure you want to delete this voter?"
        />
      )}
      
      <table className="w-full overflow-auto">
        <thead className="bg-gray-100 text-sm border-gray-200 border-y-2">
          <tr className="text-gray-500">
            <th className="font-medium w-1/12 py-3 border-gray-200 border-r-2">No</th>
            <th className="px-4 text-left font-medium">Voter</th>
            <th className="w-1/6 font-medium py-3">Status</th>
            <th className="font-medium w-1/12 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={5} className="text-sm text-center py-3 text-gray-500 border-gray-200 border-b">
                <p className="inline-flex items-center">
                  <span className="mr-2"><LoadingIcon size={4}/></span>
                  Loading
                </p>
              </td>
            </tr>
          ) : (
            voters.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-sm text-center py-3 text-gray-500 border-gray-200 border-b">No voters available</td>
              </tr>
            ) : (
              voters.map((voter: VoterType, index: number) => (
                <tr key={index} className="text-sm border-gray-200 border-b">
                  <td className="text-gray-500 font-medium text-center py-3 border-gray-200 border-r">{index+1}</td>
                  <td className="px-4 py-2">
                    <div className="">
                      <p className="text-gray-700 font-semibold">{voter.name} ({voter.nim})</p>
                      <p className="text-gray-500">{voter.major} ({voter.classOf})</p>
                    </div>
                  </td>
                  <td className="">
                    {voter.isVoted ? 
                    (
                    <div className="mx-auto w-fit rounded-md bg-green-600 py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm">
                      Voted
                    </div>
                    ) : (
                    <div className="mx-auto w-fit rounded-md bg-red-600 py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm">
                      Not Voted
                    </div>
                    )
                    }
                  </td>
                  <td>
                    <div className="relative">
                      <span className="flex justify-center">
                        <button 
                          onClick={() => toggleActionCard(index)}
                          className="p-2 text-neutral-500 text-sm font-medium rounded-full cursor-pointer hover:bg-gray-100 active:bg-gray-200">
                          <EllipsisVerticalIcon className="size-6" />
                        </button>
                      </span>
                      {visibleActionIndex === index && (
                        <div ref={actionCardRef} className="absolute -left-14 bg-white p-1 w-32 shadow rounded z-10">
                          <ul className="flex flex-col text-gray-600 font-medium">
                            <li 
                              onClick={() => onEditClick(voter)}
                              className="flex items-center px-3 py-2 cursor-pointer rounded hover:bg-gray-50 hover:text-yellow-600 transition-colors">
                              <PencilSquareIcon className="size-4 mr-2" />
                              Edit
                            </li>
                            <li 
                              onClick={() => handleDeleteClick(voter)} 
                              className="flex items-center px-3 py-2 cursor-pointer rounded hover:bg-gray-50 hover:text-red-500 transition-colors">
                              <TrashIcon className="size-4 mr-2" />
                              Delete
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )
          )}
        </tbody>
      </table>
    </>
  )
}