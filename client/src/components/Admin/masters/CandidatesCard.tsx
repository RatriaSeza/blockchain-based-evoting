import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

type CandidatesCardProps = {
  onCloseClick: () => void;
}

export const CandidatesCard: React.FC<CandidatesCardProps> = ({ onCloseClick }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h6 className="text-lg text-gray-500 font-semibold">Candidates</h6>
        <button
          onClick={onCloseClick}
          className="flex items-center p-2 h-fit text-gray-500 border rounded shadow hover:bg-gray-100 active:bg-gray-50"
        >
          <XMarkIcon className="size-5" />
        </button>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6">
          <div className="card p-4">
            <h6 className="text-lg text-gray-500 font-semibold mb-4">
              Add Candidate
            </h6>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="candidateNumber"
                  className="block text-sm text-gray-500"
                >
                  Candidate Number
                </label>
                <input
                  type="text"
                  id="candidateNumber"
                  name="candidateNumber"
                  className="w-full px-3 py-2 text-base border rounded-lg shadow-sm focus:outline-none focus:border-sky-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="candidateName"
                  className="block text-sm text-gray-500"
                >
                  Candidate Name
                </label>
                <input
                  type="text"
                  id="candidateName"
                  name="candidateName"
                  className="w-full px-3 py-2 text-base border rounded-lg shadow-sm focus:outline-none focus:border-sky-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="candidateMajor"
                  className="block text-sm text-gray-500"
                >
                  Candidate Major
                </label>
                <input
                  type="text"
                  id="candidateMajor"
                  name="candidateMajor"
                  className="w-full px-3 py-2 text-base border rounded-lg shadow-sm focus:outline-none focus:border-sky-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="candidatePhoto"
                  className="block text-sm text-gray-500"
                >
                  Candidate Photo
                </label>
                <input
                  type="file"
                  id="candidatePhoto"
                  name="candidatePhoto"
                  className="w-full px-3 py-2 text-base border rounded-lg shadow-sm focus:outline-none focus:border-sky-500"
                />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full px-3 py-2 text-base bg-sky-500 text-white rounded-lg shadow-sm hover:bg-sky-600"
                >
                  Add Candidate
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="card p-4">
            <h6 className="text-lg text-gray-500 font-semibold mb-4">
              Candidates List
            </h6>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b text-gray-500">No</th>
                  <th className="px-4 py-2 border-b text-gray-500">Name</th>
                  <th className="px-4 py-2 border-b text-gray-500">Major</th>
                  <th className="px-4 py-2 border-b text-gray-500">Photo</th>
                  <th className="px-4 py-2 border-b text-gray-500">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b">1</td>
                  <td className="px-4 py-2 border-b">John Doe</td>
                  <td className="px-4 py-2 border-b">Computer Science</td>
                  <td className="px-4 py-2 border-b">Photo</td>
                  <td className="px-4 py-2 border-b">
                    <button className="text-sky-500 hover:text-sky-600">
                      Edit
                    </button>
                    <button className="text-red-500 hover:text-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
