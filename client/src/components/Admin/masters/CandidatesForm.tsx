// import { Dialog, DialogHeader, DialogFooter, DialogBody, Button } from "@material-tailwind/html";
import React, { useState } from "react";

type CandidatesFormType = {
  onClick: () => void;
};

export const CandidatesForm: React.FC<CandidatesFormType> = ({ onClick }) => {
  const [candidate, setCandidate] = useState({
    candidateNumber: "",
    chiefName: "",
    viceName: "",
    chiefMajor: "",
    viceMajor: "",
    chiefClassOf: "",
    viceClassOf: ""
  })

  return (
    <div className="fixed top-0 left-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-all duration-300">
      <div className="relative m-4 p-4 w-11/12 md:min-w-[40%] md:max-w-[40%] rounded-lg bg-white shadow-sm">
        <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
          Add Candidate
        </div>
        <div className="relative border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <label className="block mb-2 text-sm text-slate-600">Candidate Number</label>
              <input
                onChange={(e) => setCandidate({ ...candidate, candidateNumber: e.target.value })}
                type="number"
                className="w-1/5 bg-gray-50 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder=""
              />
            </div>

            <div className="w-full flex gap-4">
              <div className="w-full">
                <label className="block mb-2 text-sm text-slate-600">Chief Name</label>
                <input
                  onChange={(e) => setCandidate({ ...candidate, chiefName: e.target.value })}
                  type="text"
                  className="w-full bg-gray-50 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder=""
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm text-slate-600">Vice Name</label>
                <input
                  onChange={(e) => setCandidate({ ...candidate, viceName: e.target.value })}
                  type="text"
                  className="w-full bg-gray-50 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder=""
                />
              </div>
            </div>

            <div className="w-full flex gap-4">
              <div className="w-full">
                <label className="block mb-2 text-sm text-slate-600">Chief Major</label>
                <input
                  onChange={(e) => setCandidate({ ...candidate, chiefMajor: e.target.value })}
                  type="text"
                  className="w-full bg-gray-50 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder=""
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm text-slate-600">Vice Major</label>
                <input
                  onChange={(e) => setCandidate({ ...candidate, viceMajor: e.target.value })}
                  type="text"
                  className="w-full bg-gray-50 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder=""
                />
              </div>
            </div>

            <div className="w-full flex gap-4">
              <div className="w-full">
                <label className="block mb-2 text-sm text-slate-600">Chief Class Of</label>
                <input
                  onChange={(e) => setCandidate({ ...candidate, chiefClassOf: e.target.value })}
                  type="number"
                  className="w-full bg-gray-50 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="2xxx"
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm text-slate-600">Vice Class Of</label>
                <input
                  onChange={(e) => setCandidate({ ...candidate, viceClassOf: e.target.value })}
                  type="number"
                  className="w-full bg-gray-50 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="2xxx"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
          <button
            onClick={onClick}
            className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Cancel
          </button>
          <button
            className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
            type="button"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};