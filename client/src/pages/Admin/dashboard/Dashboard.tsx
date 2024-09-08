import { Sidebar } from "@components/Admin/ui/sidebar/Sidebar";
import { Header } from "@components/Admin/ui/header/Header";
import { Footer } from "@components/Admin/ui/footer/Footer";
import { TotalVotesCard } from "@components/Admin/dashboard/TotalVotesCard";
import { CountdownCard } from "@components/Admin/dashboard/CountdownCard";

export const Dashboard = () => {
  return (
    <main className="bg-surface">
      <div id="main-wrapper" className="flex p-5 xl:pr-0">
        <aside
          id="application-sidebar-brand"
          className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transform hidden xl:block xl:translate-x-0 xl:end-auto xl:bottom-0 fixed xl:top-5 xl:left-auto top-0 left-0 with-vertical h-screen z-[999] shrink-0 w-[270px] shadow-md xl:rounded-md rounded-none bg-white left-sidebar transition-all duration-300"
        >
          <Sidebar active="dashboard" />
        </aside>
        <div className="w-full page-wrapper xl:px-6 px-0">
          <main className="h-full max-w-full">
            <div className="container full-container p-0 flex flex-col gap-6">
              <header className="bg-white shadow-md rounded-md w-full text-sm py-4 px-6">
                <Header/>
              </header>

              {/* main content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6 gap-x-0 lg:gap-y-0 gap-y-6">
								<div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 ">
                  <CountdownCard/>
                  <TotalVotesCard />
                  <div className="card">
										<div className="card-body">
											<div className="flex gap-6 items-center justify-between">
												<div className="flex flex-col gap-4">
													<h4 className="text-gray-500 text-lg font-semibold">Product Sales</h4>
													<div className="flex flex-col gap-4">
														<h3 className="text-[22px] font-semibold text-gray-500">$6,820</h3>
														<div className="flex items-center gap-1">
															<span className="flex items-center justify-center w-5 h-5 rounded-full bg-red-400">
																<i className="ti ti-arrow-down-right text-red-500"></i>
															</span>
															<p className="text-gray-500 text-sm font-normal">+9%</p>
															<p className="text-gray-400 text-sm font-normal text-nowrap">last year</p>
														</div>
													</div>
												</div>

												<div
													className="w-11 h-11 flex justify-center items-center rounded-full bg-red-500 text-white self-start">
													<i className="ti ti-currency-dollar text-xl"></i>
												</div>
											</div>
										</div>
										<div id="earning"></div>
									</div>
                  <div className="card">
										<div className="card-body">
											<div className="flex gap-6 items-center justify-between">
												<div className="flex flex-col gap-4">
													<h4 className="text-gray-500 text-lg font-semibold">Product Sales</h4>
													<div className="flex flex-col gap-4">
														<h3 className="text-[22px] font-semibold text-gray-500">$6,820</h3>
														<div className="flex items-center gap-1">
															<span className="flex items-center justify-center w-5 h-5 rounded-full bg-red-400">
																<i className="ti ti-arrow-down-right text-red-500"></i>
															</span>
															<p className="text-gray-500 text-sm font-normal">+9%</p>
															<p className="text-gray-400 text-sm font-normal text-nowrap">last year</p>
														</div>
													</div>
												</div>

												<div
													className="w-11 h-11 flex justify-center items-center rounded-full bg-red-500 text-white self-start">
													<i className="ti ti-currency-dollar text-xl"></i>
												</div>
											</div>
										</div>
										<div id="earning"></div>
									</div>
								</div>

								<div className="flex flex-col gap-6">
								</div>
							</div>
              <Footer />
            </div>
          </main>
        </div>
      </div>
    </main>
  );
};
