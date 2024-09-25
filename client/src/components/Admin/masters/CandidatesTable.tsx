import { CandidateType } from "@components/Vote/CandidateType";
import { EllipsisVerticalIcon, TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";

type CandidatesTableProps = {
  candidates: CandidateType[];
};

export const CandidatesTable: React.FC<CandidatesTableProps> = ({ candidates }) => {
  const [visibleActionIndex, setVisibleActionIndex] = useState<number | null>(null);
  const actionCardRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <table className="w-full overflow-auto">
        <thead className="bg-gray-100 text-sm border-gray-200 border-y-2">
          <tr className="text-gray-500">
            <th className="font-medium w-1/12 py-3 border-gray-200 border-r-2">No</th>
            <th className="font-medium w-1/6">Image</th>
            <th className="text-left font-medium py-3">Chief</th>
            <th className="text-left font-medium py-3">Vice</th>
            <th className="font-medium w-1/12 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate: CandidateType, index: number) => (
            <tr key={index} className="text-sm border-gray-200 border-b">
              <td className="text-gray-500 font-medium text-center py-3 border-gray-200 border-r">{candidate.candidateNumber}</td>
              <td className="flex justify-center py-1">
                  <img src={`${import.meta.env.VITE_API_URL}/api/candidate/image/${candidate.candidateNumber}`} alt={`Candidates ${candidate.candidateNumber} image`} className="w-24 h-auto" />
              </td>
              <td className="">
                <div className="">
                  <p className="text-gray-700 font-semibold">{candidate.chiefName}</p>
                  <p className="text-gray-500">{candidate.chiefMajor} ({candidate.chiefClassOf})</p>
                </div>
              </td>
              <td className="">
              <div className="">
                  <p className="text-gray-700 font-semibold">{candidate.viceName}</p>
                  <p className="text-gray-500">{candidate.viceMajor} ({candidate.viceClassOf})</p>
                </div>
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
                        <li className="flex items-center px-3 py-2 cursor-pointer rounded hover:bg-gray-50 hover:text-gray-900">
                          <PencilSquareIcon className="size-4 mr-2" />
                          Edit
                        </li>
                        <li className="flex items-center px-3 py-2 cursor-pointer rounded hover:bg-gray-50 hover:text-gray-900">
                          <TrashIcon className="size-4 mr-2" />
                          Delete
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}