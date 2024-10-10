import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { ToastError, ToastWarning } from "../../../components/Toast";
import axios from "axios";
import { CandidateType } from "@components/Vote/CandidateType";

type CandidatesFormType = {
  onClick: () => void;
  onAddCandidate?: (newCandidate: CandidateType) => void;
  editingCandidate?: CandidateType | null;
};

export const CandidatesForm: React.FC<CandidatesFormType> = ({ onClick, onAddCandidate, editingCandidate }) => {
  const [candidate, setCandidate] = useState({
    candidateNumber: "",
    chiefName: "",
    viceName: "",
    chiefMajor: "",
    viceMajor: "",
    chiefClassOf: "",
    viceClassOf: "",
    image: null as File | null,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setCandidate({ ...candidate, image: e.target.files[0] });
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!candidate.candidateNumber) {
      newErrors.candidateNumber = "Candidate number is required";
    }
    if (!candidate.chiefName) {
      newErrors.chiefName = "Chief name is required";
    }
    if (!candidate.viceName) {
      newErrors.viceName = "Vice name is required";
    }
    if (!candidate.chiefMajor) {
      newErrors.chiefMajor = "Chief major is required";
    }
    if (!candidate.viceMajor) {
      newErrors.viceMajor = "Vice major is required";
    }
    if (!candidate.chiefClassOf) {
      newErrors.chiefClassOf = "Chief class of year is required";
    }
    if (!candidate.viceClassOf) {
      newErrors.viceClassOf = "Vice class of year is required";
    }
    if (!candidate.image) {
      newErrors.image = "Image is required";
    }

    return newErrors;
  };

  useEffect(() => {
    if (editingCandidate) {
      console.log("Editing candidate:", editingCandidate);
      
      setCandidate({
        candidateNumber: editingCandidate.candidateNumber.toString(),
        chiefName: editingCandidate.chiefName,
        viceName: editingCandidate.viceName,
        chiefMajor: editingCandidate.chiefMajor,
        viceMajor: editingCandidate.viceMajor,
        chiefClassOf: editingCandidate.chiefClassOf.toString(),
        viceClassOf: editingCandidate.viceClassOf.toString(),
        image: null, // Set to null initially
      });
    }
  }, [editingCandidate]);

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("candidateNumber", candidate.candidateNumber);
    formData.append("chiefName", candidate.chiefName);
    formData.append("viceName", candidate.viceName);
    formData.append("chiefMajor", candidate.chiefMajor);
    formData.append("viceMajor", candidate.viceMajor);
    formData.append("chiefClassOf", candidate.chiefClassOf);
    formData.append("viceClassOf", candidate.viceClassOf);

    if (candidate.image) formData.append("image", candidate.image);

    try {
      if (editingCandidate) {

      } else {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/candidates`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        
        const { status, data } = response;
  
        if (status == 201) {
          const newCandidate = data.candidate; 
  
          if (newCandidate) {
            onAddCandidate?.(newCandidate);
          } else {
            ToastError({ message: "Failed to retrieve the new candidate" });
          }
        } else {
          ToastError({ message: data.message });
        }
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          ToastError({ message:error.response.data.message || "An error occurred. Please try again."});
        } else if (error.request) {
          ToastWarning({ message: "No response from server. Please try again later." });
        } else {
          ToastWarning({ message: "An error occurred. Please try again." });
        }
      } else {
        ToastWarning({ message: "An unexpected error occurred. Please try again." });
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed top-0 left-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-all duration-300 overflow-auto">
      <div className="relative m-4 pt-4 px-4 w-11/12 md:min-w-[40%] md:max-w-[40%] rounded-lg bg-white shadow-sm">
        <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
        {editingCandidate ? "Edit Candidate" : "Add Candidate"}
        </div>
        <form  
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="relative border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <label className="block mb-2 text-sm text-slate-600">Candidate Number</label>
              <input
                onChange={(e) => setCandidate({ ...candidate, candidateNumber: e.target.value })}
                type="number"
                className={`w-1/5 bg-gray-50 placeholder:text-slate-400 text-slate-700 text-sm border ${errors.candidateNumber ? 'border-red-500' : 'border-slate-200'} rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`}
                placeholder=""
              />
              {errors.candidateNumber && <p className="text-red-500 text-xs mt-1">{errors.candidateNumber}</p>}
            </div>

            <div className="w-full flex gap-4">
              <div className="w-full">
                <label className="block mb-2 text-sm text-slate-600">Chief Name</label>
                <input
                  onChange={(e) => setCandidate({ ...candidate, chiefName: e.target.value })}
                  type="text"
                  className={`w-full bg-gray-50 placeholder:text-slate-400 text-slate-700 text-sm border ${errors.chiefName ? 'border-red-500' : 'border-slate-200'} rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`}
                  placeholder=""
                />
                {errors.chiefName && <p className="text-red-500 text-xs mt-1">{errors.chiefName}</p>}
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm text-slate-600">Vice Name</label>
                <input
                  onChange={(e) => setCandidate({ ...candidate, viceName: e.target.value })}
                  type="text"
                  className={`w-full bg-gray-50 placeholder:text-slate-400 text-slate-700 text-sm border ${errors.viceName ? 'border-red-500' : 'border-slate-200'} rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`}
                  placeholder=""
                />
                {errors.viceName && <p className="text-red-500 text-xs mt-1">{errors.viceName}</p>}
              </div>
            </div>

            <div className="w-full flex gap-4">
              <div className="w-full">
                <label className="block mb-2 text-sm text-slate-600">Chief Major</label>
                <input
                  onChange={(e) => setCandidate({ ...candidate, chiefMajor: e.target.value })}
                  type="text"
                  className={`w-full bg-gray-50 placeholder:text-slate-400 text-slate-700 text-sm border ${errors.chiefMajor ? 'border-red-500' : 'border-slate-200'} rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`}
                  placeholder=""
                />
                {errors.chiefMajor && <p className="text-red-500 text-xs mt-1">{errors.chiefMajor}</p>}
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm text-slate-600">Vice Major</label>
                <input
                  onChange={(e) => setCandidate({ ...candidate, viceMajor: e.target.value })}
                  type="text"
                  className={`w-full bg-gray-50 placeholder:text-slate-400 text-slate-700 text-sm border ${errors.viceMajor ? 'border-red-500' : 'border-slate-200'} rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`}
                  placeholder=""
                />
                {errors.viceMajor && <p className="text-red-500 text-xs mt-1">{errors.viceMajor}</p>}
              </div>
            </div>

            <div className="w-full flex gap-4">
              <div className="w-full">
                <label className="block mb-2 text-sm text-slate-600">Chief Class Of</label>
                <input
                  onChange={(e) => setCandidate({ ...candidate, chiefClassOf: e.target.value })}
                  type="number"
                  className={`w-full bg-gray-50 placeholder:text-slate-400 text-slate-700 text-sm border ${errors.chiefClassOf ? 'border-red-500' : 'border-slate-200'} rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`}
                  placeholder="2xxx"
                />
                {errors.chiefClassOf && <p className="text-red-500 text-xs mt-1">{errors.chiefClassOf}</p>}
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm text-slate-600">Vice Class Of</label>
                <input
                  onChange={(e) => setCandidate({ ...candidate, viceClassOf: e.target.value })}
                  type="number"
                  className={`w-full bg-gray-50 placeholder:text-slate-400 text-slate-700 text-sm border ${errors.viceClassOf ? 'border-red-500' : 'border-slate-200'} rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`}
                  placeholder="2xxx"
                />
                {errors.viceClassOf && <p className="text-red-500 text-xs mt-1">{errors.viceClassOf}</p>}
              </div>
            </div>

            <div className="w-full">
              <label className="block mb-2 text-sm text-slate-600">Image</label>
              <input
                onChange={handleFileChange}
                type="file"
                accept="image/*"
                className={`w-full bg-gray-50 placeholder:text-slate-400 text-slate-700 text-sm border ${errors.image ? 'border-red-500' : 'border-slate-200'} rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`}
                placeholder=""
              />
              {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}           
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap items-center pt-6 justify-end">
            <button
              onClick={onClick}
              className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Cancel
            </button>

            <button disabled={loading}
              className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
              type="submit"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};
