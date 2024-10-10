import { ToastContainer } from "react-toastify"
import { PlusIcon } from "@heroicons/react/24/solid";

import { Footer } from "@components/Admin/ui/footer/Footer"
import { Header } from "@components/Admin/ui/header/Header"
import { Sidebar } from "@components/Admin/ui/sidebar/Sidebar"
import { VotersTable } from "@components/Admin/voters/VotersTable";
import { VoterType } from "src/types/VotersType";
import { useEffect, useState } from "react";
import axios from "axios";

export const Voters = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [voters, setVoters] = useState<VoterType[]>([]);
  // const [editingVoter, setEditingVoter] = useState<VoterType | null>(null);

  useEffect(() => {
    const fetchVoters = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/voters`);
        setVoters(response.data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    fetchVoters();
  }, []);

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
                  {/* {openAddModal && 
                    <VotersForm 
                      onClick={handleCloseAddModal} 
                      onAddCandidate={handleAddCandidate}
                      editingCandidate={editingCandidate}
                    />
                  } */}

                  <div className="flex justify-between items-center p-6">
                    <h6 className="text-lg text-gray-500 font-semibold">Voters</h6>
                  </div>

                  <div className="flex justify-end mx-6">
                    <button 
                      onClick={() => setOpenAddModal(!openAddModal)}
                      className="flex items-center gap-1 px-4 py-2 text-neutral-500 text-sm font-medium border rounded-lg shadow mb-2 cursor-pointer hover:bg-gray-100 active:bg-gray-50">
                      <PlusIcon className="size-4" />
                      <p>Add</p>
                    </button>
                  </div>

                  <VotersTable 
                    initialVoters={voters} 
                    // onEditClick={handleEditClik} 
                    // onDeleteCandidate={handleDeleteCandidate} 
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