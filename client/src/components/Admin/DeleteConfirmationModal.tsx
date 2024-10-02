import { CandidateType } from "@components/Vote/CandidateType";
import React from "react";

type DeleteConfirmationModalProps = {
  candidate: CandidateType;
  onConfirm: (event: React.MouseEvent<HTMLButtonElement>) => void; 
  onCancel: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({ candidate, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-all duration-300">
      <div className="bg-white w-1/4 p-6 rounded-lg">
        <h6 className="text-lg text-gray-500 font-semibold">Are you sure you want to delete candidate #{candidate.candidateNumber}?</h6>
        <div className="flex justify-end gap-4 mt-6">
          <button onClick={onCancel} className="px-4 py-2 text-neutral-500 text-sm font-medium border rounded-lg shadow cursor-pointer hover:bg-gray-100 active:bg-gray-50">Cancel</button>
          <button onClick={onConfirm} className="px-4 py-2 text-white text-sm font-medium bg-red-500 border rounded-lg shadow cursor-pointer hover:bg-red-600 active:bg-red-700">Delete</button>
        </div>
      </div>
    </div>
  )
}