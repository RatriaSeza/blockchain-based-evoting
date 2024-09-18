import { CandidatesCard } from "@components/Admin/masters/CandidatesCard"
import { Footer } from "@components/Admin/ui/footer/Footer"
import { Header } from "@components/Admin/ui/header/Header"
import { Sidebar } from "@components/Admin/ui/sidebar/Sidebar"
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { useState } from "react"

export const Masters = () => {
  const [active, setActive] = useState("");

  const handleCloseClick = () => {
    setActive("");
  }

  return (
    <main className="bg-surface">
      <div id="main-wrapper" className="flex p-5 xl:pr-0 h-dvh">
        <aside
          id="application-sidebar-brand"
          className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transform hidden xl:block xl:translate-x-0 xl:end-auto xl:bottom-0 fixed xl:top-5 xl:left-auto top-0 left-0 with-vertical h-screen z-[999] shrink-0 w-[270px] shadow-md xl:rounded-md rounded-none bg-white left-sidebar transition-all duration-300"
        >
          <Sidebar active="masters" />
        </aside>
        <div className="w-full page-wrapper xl:px-6 px-0">
          <main className="h-full max-w-full">
            <div className="container full-container p-0 flex flex-col gap-6">
              <header className="bg-white shadow-md rounded-md w-full text-sm py-4 px-6">
                <Header />
              </header>

              {/* main content */}
              <p className="capitalize text-neutral-400">Masters {active !== '' && <span>/ <span className="text-sky-500 font-medium">{active}</span></span>}</p>

              <div className="card p">
                <div className="card-body">
                  {active.length == 0 && 
                    <div>
                      <h6 className="text-lg text-gray-500 font-semibold mb-6">Masters</h6>
                      <button 
                        onClick={() => setActive(active === 'candidates' ? "" : 'candidates')}
                        className="flex justify-between w-full px-4 py-2 text-neutral-500 border rounded-lg shadow mb-2 cursor-pointer hover:bg-gray-100 active:bg-gray-50">
                        <p className="font-medium">Candidates</p>
                        <span>
                          {active === 'candidates' ? (
                            <ChevronDownIcon className="size-6" />
                          ) : (
                            <ChevronRightIcon className="size-6" /> 
                          )}
                        </span>
                      </button>
                      
                      <button 
                        onClick={() => setActive(active === 'deadline' ? "" : 'deadline')}
                        className="flex justify-between w-full px-4 py-2 text-neutral-500 border rounded-lg shadow mb-2 cursor-pointer hover:bg-gray-100 active:bg-gray-50">
                        <p className="font-medium">Deadline</p>
                        <span>
                          {active === 'deadline' ? (
                            <ChevronDownIcon className="size-6" />
                          ) : (
                            <ChevronRightIcon className="size-6" /> 
                          )}
                        </span>
                      </button>    
                    </div>
                  }

                  {active === 'candidates' && <CandidatesCard onCloseClick={handleCloseClick} />}
                </div>
              </div>

              <Footer />
            </div>
          </main>
        </div>
      </div>
    </main>
  )
}