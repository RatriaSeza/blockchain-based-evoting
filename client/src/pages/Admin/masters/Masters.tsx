import { Footer } from "@components/Admin/ui/footer/Footer"
import { Header } from "@components/Admin/ui/header/Header"
import { Sidebar } from "@components/Admin/ui/sidebar/Sidebar"

export const Masters = () => {
  return (
    <main className="bg-surface">
      <div id="main-wrapper" className="flex p-5 xl:pr-0">
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
              <Footer />
            </div>
          </main>
        </div>
      </div>
    </main>
  )
}