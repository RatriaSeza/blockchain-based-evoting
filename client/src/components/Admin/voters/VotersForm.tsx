import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { VoterType } from "src/types/VotersType";

type VotersFormProps = {
  onClick: () => void;
  onAddVoter?: (newVoter: VoterType) => void;
  editingVoter?: VoterType | null;
};

export const VotersForm: React.FC<VotersFormProps> = ({ onClick, onAddVoter, editingVoter }) => {
  const [voter, setVoter] = useState({
    name: '',
    nim: '',
    major: '',
    classOf: '',
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!voter.name) newErrors.name = "Name is required";
    if (!voter.nim) newErrors.nim = "NIM is required";
    if (!voter.major) newErrors.major = "Major is required";
    if (!voter.classOf) newErrors.classOf = "Class Of is required";
    if (parseInt(voter.classOf) < 2000 || parseInt(voter.classOf) > 2030) newErrors.classOf = "Invalid format";

    return newErrors;
  };

  useEffect(() => {
    if (editingVoter) {
      setVoter({
        name: editingVoter.name,
        nim: editingVoter.nim,
        major: editingVoter.major,
        classOf: editingVoter.classOf.toString(),
      });
    }
  }, [editingVoter]);

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    try {
      if (editingVoter) {
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/api/voter/${editingVoter._id}`, { ...voter }, {
          withCredentials: true
        });

        const { status, data } = response;

        if (status == 200) {
          const updatedVoter = data.voter;

          if (updatedVoter) {
            onAddVoter?.(updatedVoter);
          } else {
            toast.error("Failed to retrieve the updated candidate", {
              position: "bottom-right",
              autoClose: 1400
            });
          }
        } else {
          toast.error(data.message, {
            position: "bottom-right",
            autoClose: 1400
          });
        }
      } else {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/voter`, { ...voter }, {
          withCredentials: true
        });
        
        const { status, data } = response;
  
        if (status == 201) {
          const newVoter = data.voter; 
  
          if (newVoter) {
            onAddVoter?.(newVoter);
          } else {
            toast.error("Failed to retrieve the new candidate", {
                position: "bottom-right",
                autoClose: 1400
            });
          }
        } else {
          toast.error(data.message, {
            position: "bottom-right",
            autoClose: 1400
          });
        }
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          toast.error(error.response.data.message || "An error occurred. Please try again.", {
            position: "bottom-right",
            autoClose: 1400
          });
        } else if (error.request) {
          toast.warning("No response from server. Please try again later." , {
            position: "bottom-right",
            autoClose: 1400
          });
        } else {
          toast.warning("An error occurred. Please try again.", {
            position: "bottom-right",
            autoClose: 1400
          });
        }
      } else {
        toast.warning("An unexpected error occurred. Please try again.", {
          position: "bottom-right",
          autoClose: 1400
        });
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed top-0 left-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-all duration-300 overflow-hidden">
      <div className="relative m-4 pt-4 px-4 w-11/12 md:min-w-[40%] md:max-w-[40%] rounded-lg bg-white shadow-sm">
        <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
        {editingVoter ? "Edit Voter" : "Add Voter"}
        </div>
        <form  
          onSubmit={handleSubmit}
          className="relative border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <label className="block mb-2 text-sm text-slate-600">Name</label>
              <input
                value={voter.name}
                onChange={(e) => setVoter({ ...voter, name: e.target.value })}
                type="text"
                className={`w-full bg-gray-50 placeholder:text-slate-400 text-slate-700 text-sm border ${errors.name ? 'border-red-500' : 'border-slate-200'} rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`}
                autoFocus
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div className="w-full">
              <label className="block mb-2 text-sm text-slate-600">NIM</label>
              <input
                value={voter.nim}
                onChange={(e) => setVoter({ ...voter, nim: e.target.value })}
                type="text"
                className={`w-full bg-gray-50 placeholder:text-slate-400 text-slate-700 text-sm border ${errors.nim ? 'border-red-500' : 'border-slate-200'} rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`}
              />
              {errors.nim && <p className="text-red-500 text-xs mt-1">{errors.nim}</p>}
            </div>

            <div className="w-full">
              <label className="block mb-2 text-sm text-slate-600">Major</label>
              <input
                value={voter.major}
                onChange={(e) => setVoter({ ...voter, major: e.target.value })}
                type="text"
                className={`w-full bg-gray-50 placeholder:text-slate-400 text-slate-700 text-sm border ${errors.major ? 'border-red-500' : 'border-slate-200'} rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`}
              />
              {errors.major && <p className="text-red-500 text-xs mt-1">{errors.major}</p>}
            </div>

            <div className="w-full">
              <label className="block mb-2 text-sm text-slate-600">Class Of</label>
              <input
                value={voter.classOf}
                onChange={(e) => setVoter({ ...voter, classOf: e.target.value })}
                type="number"
                className={`w-full bg-gray-50 placeholder:text-slate-400 text-slate-700 text-sm border ${errors.classOf ? 'border-red-500' : 'border-slate-200'} rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`}
              />
              {errors.classOf && <p className="text-red-500 text-xs mt-1">{errors.classOf}</p>}
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

            <button 
              disabled={loading}
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
  )
}