import { toast, ToastContainer } from "react-toastify"
import { PlusIcon } from "@heroicons/react/24/solid";

import { Footer } from "@components/Admin/ui/footer/Footer"
import { Header } from "@components/Admin/ui/header/Header"
import { Sidebar } from "@components/Admin/ui/sidebar/Sidebar"
import { VotersTable } from "@components/Admin/voters/VotersTable";
import { VoterType } from "src/types/VotersType";
import { useEffect, useState } from "react";
import axios from "axios";
import { VotersForm } from "@components/Admin/voters/VotersForm";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Voters = () => {
  const [openFormModal, setOpenFormModal] = useState(false);
  const [voters, setVoters] = useState<VoterType[]>([]);
  const [editingVoter, setEditingVoter] = useState<VoterType | null>(null);

  const navigate = useNavigate();
  const [cookies, ,removeCookie] = useCookies(["admin-token"]);

  useEffect(() => {
    const verifyToken = async () => {
      if (!localStorage.getItem("admin-token")) {
        console.log('No token found, redirecting to login...');
        navigate("/admin/login");
        return;
      }

      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth`, {
        },{ 
          withCredentials: true 
        });
        
        const { status, data: { user } } = response;

        if (status == 200) {
          if (!user) {
            localStorage.removeItem("admin-token");
            navigate("/admin/login");
          }
        } else {
          localStorage.removeItem("admin-token");
          navigate("/admin/login");
        }
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          if (error.response) {
            console.error(error.response.data.message || "An error occurred. Please try again.");
          } else if (error.request) {
            console.error("No response from server. Please try again later.");
          } else {
            console.error("An error occurred. Please try again.");
          }
        }
        navigate("/admin/login");
      }
    };

    verifyToken();

    const fetchVoters = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/voters`);
        setVoters(response.data);
      } catch (error) {
        console.error("Error fetching voters:", error);
      }
    };

    fetchVoters();
  }, [cookies, navigate, removeCookie]);

  const handleAddVoter = (newVoter: VoterType) => {
    setVoters((prevVoters) => {
      const existingVoterIndex = prevVoters.findIndex(voter => voter._id === newVoter._id);
      if (existingVoterIndex !== -1) {
        // Update existing candidate
        const updatedVoters = [...prevVoters];
        updatedVoters[existingVoterIndex] = newVoter;
        return updatedVoters;
      } else {
        // Add new candidate
        return [...prevVoters, newVoter];
      }
    });
    setOpenFormModal(false);
    setEditingVoter(null);
  };

  const handleEditClik = (voter: VoterType) => {
    setEditingVoter(voter);
    setOpenFormModal(true);
  }

  const handleDeleteVoter = async (voterId: string) => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_API_URL}/api/voters/${voterId}`);
      if (response.status === 200) {
        setVoters((prevVoters) => prevVoters.filter(voter => voter._id !== voterId));
        toast.success("Voter deleted successfully", {
          position: "bottom-right",
          autoClose: 1400
        });
      } else {
        toast.error("Failed to delete voter", {
          position: "bottom-right",
          autoClose: 1400
        });
      }
    } catch (error) {
      console.error("Error deleting voter:", error);
    }
  }

  const handleCloseForm = () => {
    setOpenFormModal(false);
    setEditingVoter(null);
  }

  return (
    <main className="bg-surface">
      <div id="main-wrapper" className="flex p-5 xl:pr-0 min-h-dvh">
        <aside
          id="application-sidebar-brand"
          className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transform hidden xl:block xl:translate-x-0 xl:end-auto xl:bottom-0 fixed xl:top-5 xl:left-auto top-0 left-0 with-vertical h-screen z-[999] shrink-0 w-[270px] shadow-md xl:rounded-md rounded-none bg-white left-sidebar transition-all duration-300"
        >
          <Sidebar active="voters" />
        </aside>
        <div className="w-full xl:ml-[270px] xl:px-6 px-0">
          <main className="h-full max-w-full">
            <div className="container full-container p-0 flex flex-col gap-6">
              <header className="bg-white shadow-md rounded-md w-full text-sm py-4 px-6">
                <Header />
              </header>

              {/* main content */}
              <div className="card">
                <div className="pb-6">
                  {openFormModal && 
                    <VotersForm
                      onClick={handleCloseForm} 
                      onAddVoter={handleAddVoter}
                      editingVoter={editingVoter}
                    />
                  }

                  <div className="flex justify-between items-center p-6">
                    <h6 className="text-lg text-gray-500 font-semibold">Voters</h6>
                  </div>

                  <div className="flex justify-end mx-6">
                    <button 
                      onClick={() => setOpenFormModal(!openFormModal)}
                      className="flex items-center gap-1 px-4 py-2 text-neutral-500 text-sm font-medium border rounded-lg shadow mb-2 cursor-pointer hover:bg-gray-100 active:bg-gray-50">
                      <PlusIcon className="size-4" />
                      <p>Add</p>
                    </button>
                  </div>

                  <VotersTable 
                    initialVoters={voters} 
                    onDeleteVoter={handleDeleteVoter} 
                    onEditClick={handleEditClik} 
                  />

                  <ToastContainer />
                </div>
              </div>

              <Footer />
            </div>
          </main>
        </div>
      </div>
      <ToastContainer />
    </main>
  )
}