import { ToastError, ToastSuccess, ToastWarning } from "@components/Toast";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { MastersType } from "src/types/MastersType";

type MastersFormProps = {
  onClick: () => void;
  onAddMaster?: (newMaster: MastersType) => void;
  editingMaster?: MastersType | null;
  existingMasters: string[];
};

export const MastersForm: React.FC<MastersFormProps> = ({ onClick, onAddMaster, editingMaster, existingMasters }) => {
  const [master, setMaster] = useState({
    key: "",
    value: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (master.key == '') { newErrors.key = "Master key is required"; }
    if (existingMasters.includes(master.key)) { newErrors.key = "Master key already exists"; }
    if (!master.value) { newErrors.value = "Master value is required"; }

    return newErrors;
  };

  useEffect(() => {
    if (editingMaster) {
      setMaster({
        key: editingMaster.key,
        value: editingMaster.value
      });
    }
  }, [editingMaster]);

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
      if (editingMaster) {
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/api/masters/${editingMaster._id}`, { ...master }, {
          withCredentials: true
        });

        const { status, data } = response;

        if (status == 200) {
          const updatedMaster = data.master;

          if (updatedMaster) {
            onAddMaster?.(updatedMaster);
          } else {
            toast.error("Failed to retrieve the updated master", {
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
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/masters`, { ...master }, {
          withCredentials: true
        });
        
        const { status, data } = response;
  
        if (status == 201) {
          const newMaster = data.master; 

          if (newMaster) {
            ToastSuccess({ message: "Master data added successfully", duration: 1400 });
            setTimeout(() => {
              onAddMaster?.(newMaster);
              setLoading(false);
            }, 2000);
          } else {
            ToastError({ message: "Failed to retrieve the new master data", duration: 1400 });
            setLoading(false);
          }
        } else {
          ToastError({ message: data.message, duration: 1400 });
          setLoading(false);
        }
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          ToastError({ message: error.response.data.message || "An error occurred. Please try again.", duration: 1400 });
        } else if (error.request) {
          ToastWarning({ message: "No response from server. Please try again later.", duration: 1400 });
        } else {
          ToastError({ message: "An error occurred. Please try again.", duration: 1400 });
        }
      } else {
        ToastError({ message: "An unexpected error occurred. Please try again.", duration: 1400 });
      }
      setLoading(false);
    }
  }

  return (
    <div className="fixed top-0 left-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-all duration-300 overflow-hidden">
      <div className="relative m-4 pt-4 px-4 w-11/12 md:min-w-[40%] md:max-w-[40%] rounded-lg bg-white shadow-sm">
        <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
        {editingMaster ? "Edit Master" : "Add Master"}
        </div>
        <form  
          onSubmit={handleSubmit}
          className="relative border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <label className="block mb-2 text-sm text-slate-600">Key</label>
              <select
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                value={master.key}
                onChange={(e) => setMaster({ ...master, key: e.target.value })}
              >
                <option value="">-- Select key--</option>
                <option value="Start Time">Start Time</option>
                <option value="End Time">End Time</option>
              </select>
              {errors.key && <p className="text-red-500 text-xs mt-1">{errors.key}</p>}
            </div>

            <div className="w-full">
              <label className="block mb-2 text-sm text-slate-600">Value</label>
              <input
                value={master.value}
                onChange={(e) => setMaster({ ...master, value: e.target.value })}
                type="datetime-local"
                className={`w-full bg-gray-50 placeholder:text-slate-400 text-slate-700 text-sm border ${errors.value ? 'border-red-500' : 'border-slate-200'} rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`}
              />
              {errors.value && <p className="text-red-500 text-xs mt-1">{errors.value}</p>}
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