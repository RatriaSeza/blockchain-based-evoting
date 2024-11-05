import { XMarkIcon, PlusIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { MastersType } from "src/types/MastersType";
import { MastersTable } from "./MastersTable";
import { LoadingIcon } from "../LoadingIcon";
import { MastersForm } from "./MastersForm";
import { ToastError, ToastSuccess } from "@components/Toast";

type MastersCardProps = {
  onCloseClick: () => void;
};

export const MastersCard: React.FC<MastersCardProps> = ({
  onCloseClick,
}) => {
  const [masters, setMasters] = useState<MastersType[]>([]);
  const [openFormModal, setOpenFormModal] = useState(false);
  const [editingMaster, setEditingMaster] = useState<MastersType | null>(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    const fetchMasters = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/masters`);
        setMasters(response.data);
      } catch (error) {
        console.error("Error fetching masters:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMasters();
  }, []);

  const handleEditClik = (master: MastersType) => {
    setEditingMaster(master);
    setOpenFormModal(true);
  }

  const handleAddMaster = (newMaster: MastersType) => {
    setMasters((prevMasters) => {
      const existingMasterIndex = prevMasters.findIndex(master => master._id === newMaster._id);
      if (existingMasterIndex !== -1) {
        const updatedMasters = [...prevMasters];
        updatedMasters[existingMasterIndex] = newMaster;
        return updatedMasters;
      } else {
        return [...prevMasters, newMaster];
      }
    });

    setOpenFormModal(false);
    setEditingMaster(null);
  };

  const handleDeleteMaster = async (masterId: string) => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_API_URL}/api/masters/${masterId}`);
      if (response.status === 200) {
        setMasters((prevMasters) => prevMasters.filter(master => master._id !== masterId));
        ToastSuccess({ message: "Master data deleted successfully", duration: 1500 });
      } else {
        ToastError({ message: "Failed to delete master data", duration: 1500 });
      }
    } catch (error) {
      console.error("Error deleting master data:", error);
    }
  }

  const handleCloseForm = () => {
    setOpenFormModal(false);
    setEditingMaster(null);
  }

  return (
    <div>
      {openFormModal && 
        <MastersForm
          onClick={handleCloseForm} 
          onAddMaster={handleAddMaster}
          editingMaster={editingMaster}
          existingMasters={masters.map(master => master.key)}
        />
      }

      <div className="flex justify-between items-center p-6">
        <h6 className="text-lg text-gray-500 font-semibold">Masters</h6>
        <button
          onClick={onCloseClick}
          className="flex items-center p-2 h-fit text-gray-500 border rounded shadow hover:bg-gray-100 active:bg-gray-50"
        >
          <XMarkIcon className="size-5" />
        </button>
      </div>

      <div className="flex justify-end mx-6">
        <button 
          onClick={() => setOpenFormModal(!openFormModal)}
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
      ) : masters.length === 0 ? (
        <div className="text-sm text-center py-3 text-gray-500 border-gray-200 border-b">No masters available</div>
      ) : (
        <MastersTable
          initialMasters={masters} 
          onEditClick={handleEditClik} 
          onDeleteMaster={handleDeleteMaster} />
      )}

      <ToastContainer />
    </div>
  );
};
