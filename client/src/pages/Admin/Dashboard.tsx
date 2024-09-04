import { Sidebar } from "../../components/Admin/ui/sidebar/Sidebar";
import { Header } from "../../components/Admin/ui/header/Header";

export const Dashboard = () => {
  return (
    <main>
      <div id="main-wrapper" className="flex p-5 xl:pr-0">
        <aside
          id="application-sidebar-brand"
          className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transform hidden xl:block xl:translate-x-0 xl:end-auto xl:bottom-0 fixed xl:top-5 xl:left-auto top-0 left-0 with-vertical h-screen z-[999] shrink-0 w-[270px] shadow-md xl:rounded-md rounded-none bg-white left-sidebar transition-all duration-300"
        >
          <Sidebar />
        </aside>
        <div className="w-full page-wrapper xl:px-6 px-0">
          <main className="h-full max-w-full">
            <div className="container full-container p-0 flex flex-col gap-6">
              <header className="bg-white shadow-md rounded-md w-full text-sm py-4 px-6">
                <Header/>
              </header>
              <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6 gap-x-0 lg:gap-y-0 gap-y-6">
                <div className="col-span-2">
                  <div className="card">
                    <div className="card-body">
                      <div className="flex justify-between mb-5">
                        <h4 className="text-gray-500 text-lg font-semibold sm:mb-0 mb-2">
                          Profit & Expenses
                        </h4>
                        <div className="hs-dropdown relative inline-flex [--placement:bottom-right] sm:[--trigger:hover]">
                          <a className="relative hs-dropdown-toggle cursor-pointer align-middle rounded-full">
                            <i className="ti ti-dots-vertical text-2xl text-gray-400"></i>
                          </a>
                          <div
                            className="card hs-dropdown-menu transition-[opacity,margin] rounded-md duration hs-dropdown-open:opacity-100 opacity-0 mt-2 min-w-max w-[150px] hidden z-[12]"
                            aria-labelledby="hs-dropdown-custom-icon-trigger"
                          >
                            <div className="card-body p-0 py-2">
                              <a
                                href="javscript:void(0)"
                                className="flex gap-2 items-center font-medium px-4 py-2.5 hover:bg-gray-200 text-gray-400"
                              >
                                <p className="text-sm">Action</p>
                              </a>
                              <a
                                href="javscript:void(0)"
                                className="flex gap-2 items-center font-medium px-4 py-2.5 hover:bg-gray-200 text-gray-400"
                              >
                                <p className="text-sm">Another Action</p>
                              </a>
                              <a
                                href="javscript:void(0)"
                                className="flex gap-2 items-center font-medium px-4 py-2.5 hover:bg-gray-200 text-gray-400"
                              >
                                <p className="text-sm">Something else here</p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="profit"></div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="text-gray-500 text-lg font-semibold mb-4">
                        Traffic Distribution
                      </h4>
                      <div className="flex items-center justify-between gap-12">
                        <div>
                          <h3 className="text-[22px] font-semibold text-gray-500 mb-4">
                            $36,358
                          </h3>
                          <div className="flex items-center gap-1 mb-3">
                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-teal-400">
                              <i className="ti ti-arrow-up-left text-teal-500"></i>
                            </span>
                            <p className="text-gray-500 text-sm font-normal">
                              +9%
                            </p>
                            <p className="text-gray-400 text-sm font-normal text-nowrap">
                              last year
                            </p>
                          </div>
                          <div className="flex gap-4">
                            <div className="flex gap-2 items-center">
                              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                              <p className="text-gray-400 font-normal text-xs">
                                Oragnic
                              </p>
                            </div>
                            <div className="flex gap-2 items-center">
                              <span className="w-2 h-2 rounded-full bg-red-500"></span>
                              <p className="text-gray-400 font-normal text-xs">
                                Refferal
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div id="grade"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="flex gap-6 items-center justify-between">
                        <div className="flex flex-col gap-4">
                          <h4 className="text-gray-500 text-lg font-semibold">
                            Product Sales
                          </h4>
                          <div className="flex flex-col gap-4">
                            <h3 className="text-[22px] font-semibold text-gray-500">
                              $6,820
                            </h3>
                            <div className="flex items-center gap-1">
                              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-red-400">
                                <i className="ti ti-arrow-down-right text-red-500"></i>
                              </span>
                              <p className="text-gray-500 text-sm font-normal">
                                +9%
                              </p>
                              <p className="text-gray-400 text-sm font-normal text-nowrap">
                                last year
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="w-11 h-11 flex justify-center items-center rounded-full bg-red-500 text-white self-start">
                          <i className="ti ti-currency-dollar text-xl"></i>
                        </div>
                      </div>
                    </div>
                    <div id="earning"></div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6 gap-x-0 lg:gap-y-0 gap-y-6">
                <div className="card">
                  <div className="card-body">
                    <h4 className="text-gray-500 text-lg font-semibold mb-5">
                      Upcoming Schedules
                    </h4>
                    <ul className="timeline-widget relative">
                      <li className="timeline-item flex relative overflow-hidden min-h-[70px]">
                        <div className="timeline-time text-gray-500 text-sm min-w-[90px] py-[6px] pr-4 text-end">
                          9:30 am
                        </div>
                        <div className="timeline-badge-wrap flex flex-col items-center">
                          <div className="timeline-badge w-3 h-3 rounded-full shrink-0 bg-transparent border-2 border-blue-600 my-[10px]"></div>
                          <div className="timeline-badge-border block h-full w-[1px] bg-gray-100"></div>
                        </div>
                        <div className="timeline-desc py-[6px] px-4">
                          <p className="text-gray-500 text-sm font-normal">
                            Payment received from John Doe of $385.90
                          </p>
                        </div>
                      </li>
                      <li className="timeline-item flex relative overflow-hidden min-h-[70px]">
                        <div className="timeline-time text-gray-500 min-w-[90px] py-[6px] text-sm pr-4 text-end">
                          10:00 am
                        </div>
                        <div className="timeline-badge-wrap flex flex-col items-center">
                          <div className="timeline-badge w-3 h-3 rounded-full shrink-0 bg-transparent border-2 border-blue-300 my-[10px]"></div>
                          <div className="timeline-badge-border block h-full w-[1px] bg-gray-100"></div>
                        </div>
                        <div className="timeline-desc py-[6px] px-4 text-sm">
                          <p className="text-gray-500 font-semibold">
                            New sale recorded
                          </p>
                          <a
                            href="javascript:void('')"
                            className="text-blue-600"
                          >
                            #ML-3467
                          </a>
                        </div>
                      </li>

                      <li className="timeline-item flex relative overflow-hidden min-h-[70px]">
                        <div className="timeline-time text-gray-500 min-w-[90px] text-sm py-[6px] pr-4 text-end">
                          12:00 am
                        </div>
                        <div className="timeline-badge-wrap flex flex-col items-center">
                          <div className="timeline-badge w-3 h-3 rounded-full shrink-0 bg-transparent border-2 border-teal-500 my-[10px]"></div>
                          <div className="timeline-badge-border block h-full w-[1px] bg-gray-100"></div>
                        </div>
                        <div className="timeline-desc py-[6px] px-4">
                          <p className="text-gray-500 text-sm font-normal">
                            Payment was made of $64.95 to Michael
                          </p>
                        </div>
                      </li>

                      <li className="timeline-item flex relative overflow-hidden min-h-[70px]">
                        <div className="timeline-time text-gray-500 min-w-[90px] text-sm py-[6px] pr-4 text-end">
                          9:30 am
                        </div>
                        <div className="timeline-badge-wrap flex flex-col items-center">
                          <div className="timeline-badge w-3 h-3 rounded-full shrink-0 bg-transparent border-2 border-yellow-500 my-[10px]"></div>
                          <div className="timeline-badge-border block h-full w-[1px] bg-gray-100"></div>
                        </div>
                        <div className="timeline-desc py-[6px] px-4 text-sm">
                          <p className="text-gray-500 font-semibold">
                            New sale recorded
                          </p>
                          <a
                            href="javascript:void('')"
                            className="text-blue-600"
                          >
                            #ML-3467
                          </a>
                        </div>
                      </li>

                      <li className="timeline-item flex relative overflow-hidden min-h-[70px]">
                        <div className="timeline-time text-gray-500 text-sm min-w-[90px] py-[6px] pr-4 text-end">
                          9:30 am
                        </div>
                        <div className="timeline-badge-wrap flex flex-col items-center">
                          <div className="timeline-badge w-3 h-3 rounded-full shrink-0 bg-transparent border-2 border-red-500 my-[10px]"></div>
                          <div className="timeline-badge-border block h-full w-[1px] bg-gray-100"></div>
                        </div>
                        <div className="timeline-desc py-[6px] px-4">
                          <p className="text-gray-500 text-sm font-semibold">
                            New arrival recorded
                          </p>
                        </div>
                      </li>
                      <li className="timeline-item flex relative overflow-hidden">
                        <div className="timeline-time text-gray-500 text-sm min-w-[90px] py-[6px] pr-4 text-end">
                          12:00 am
                        </div>
                        <div className="timeline-badge-wrap flex flex-col items-center">
                          <div className="timeline-badge w-3 h-3 rounded-full shrink-0 bg-transparent border-2 border-teal-500 my-[10px]"></div>
                          <div className="timeline-badge-border block h-full w-[1px] bg-gray-100"></div>
                        </div>
                        <div className="timeline-desc py-[6px] px-4">
                          <p className="text-gray-500 text-sm font-normal">
                            Payment Done
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="card h-full">
                    <div className="card-body">
                      <h4 className="text-gray-500 text-lg font-semibold mb-5">
                        Top Paying Clients
                      </h4>
                      <div className="relative overflow-x-auto">
                        <table className="text-left w-full whitespace-nowrap text-sm text-gray-500">
                          <thead>
                            <tr className="text-sm">
                              <th scope="col" className="p-4 font-semibold">
                                Profile
                              </th>
                              <th scope="col" className="p-4 font-semibold">
                                Hour Rate
                              </th>
                              <th scope="col" className="p-4 font-semibold">
                                Extra classes
                              </th>
                              <th scope="col" className="p-4 font-semibold">
                                Status
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="p-4 text-sm">
                                <div className="flex gap-6 items-center">
                                  <div className="h-12 w-12 inline-block">
                                    <img
                                      src="@@webRoot/assets/images/profile/user-1.jpg"
                                      alt=""
                                      className="rounded-full w-100"
                                    />
                                  </div>
                                  <div className="flex flex-col gap-1 text-gray-500">
                                    <h3 className="font-bold">
                                      Mark J. Freeman
                                    </h3>
                                    <span className="font-normal">
                                      Prof. English
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="p-4">
                                <h3 className="font-medium">$150/hour</h3>
                              </td>
                              <td className="p-4">
                                <h3 className="font-medium text-teal-500">
                                  +53
                                </h3>
                              </td>
                              <td className="p-4">
                                <span className="inline-flex items-center py-2 px-4 rounded-3xl font-semibold bg-teal-400 text-teal-500">
                                  Available
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-4 text-sm">
                                <div className="flex gap-6 items-center">
                                  <div className="h-12 w-12 inline-block">
                                    <img
                                      src="@@webRoot/assets/images/profile/user-2.jpg"
                                      alt=""
                                      className="rounded-full w-100"
                                    />
                                  </div>
                                  <div className="flex flex-col gap-1 text-gray-500">
                                    <h3 className="font-bold">
                                      Nina R. Oldman
                                    </h3>
                                    <span className="font-normal">
                                      Prof. History
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="p-4">
                                <h3 className="font-medium">$150/hour</h3>
                              </td>
                              <td className="p-4">
                                <h3 className="font-medium text-teal-500">
                                  +68
                                </h3>
                              </td>
                              <td className="p-4">
                                <span className="inline-flex items-center py-2 px-4 rounded-3xl font-semibold bg-blue-500 text-blue-600">
                                  In Class
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-4 text-sm">
                                <div className="flex gap-6 items-center">
                                  <div className="h-12 w-12 inline-block">
                                    <img
                                      src="@@webRoot/assets/images/profile/user-3.jpg"
                                      alt=""
                                      className="rounded-full w-100"
                                    />
                                  </div>
                                  <div className="flex flex-col gap-1 text-gray-500">
                                    <h3 className="font-bold">Arya H. Shah</h3>
                                    <span className="font-normal">
                                      Prof. Maths
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="p-4">
                                <h3 className="font-medium">$150/hour</h3>
                              </td>
                              <td className="p-4">
                                <h3 className="font-medium text-teal-500">
                                  +94
                                </h3>
                              </td>
                              <td className="p-4">
                                <span className="inline-flex items-center py-2 px-4 rounded-3xl font-semibold bg-red-400 text-red-500">
                                  Absent
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-4 text-sm">
                                <div className="flex gap-6 items-center">
                                  <div className="h-12 w-12 inline-block">
                                    <img
                                      src="@@webRoot/assets/images/profile/user-4.jpg"
                                      alt=""
                                      className="rounded-full w-100"
                                    />
                                  </div>
                                  <div className="flex flex-col gap-1 text-gray-500">
                                    <h3 className="font-bold">June R. Smith</h3>
                                    <span className="font-normal">
                                      Prof. Arts
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="p-4">
                                <h3 className="font-medium">$150/hour</h3>
                              </td>
                              <td className="p-4">
                                <h3 className="font-medium text-teal-500">
                                  +27
                                </h3>
                              </td>
                              <td className="p-4">
                                <span className="inline-flex items-center py-2 px-4 rounded-3xl font-semibold bg-yellow-400 text-yellow-500">
                                  Absent
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-2 gap-6">
                <div className="card overflow-hidden">
                  <div className="relative">
                    <a href="javascript:void(0)">
                      <img
                        src="@@webRoot/assets/images/products/product-1.jpg"
                        alt="product_img"
                        className="w-full"
                      />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="bg-blue-600 w-8 h-8 flex justify-center items-center text-white rounded-full absolute bottom-0 right-0 mr-4 -mb-3"
                    >
                      <i className="ti ti-basket text-base"></i>
                    </a>
                  </div>
                  <div className="card-body">
                    <h6 className="text-base font-semibold text-gray-500 mb-1">
                      Boat Headphone
                    </h6>
                    <div className="flex justify-between">
                      <div className="flex gap-2 items-center">
                        <h6 className="text-gray-500 font-semibold text-base">
                          $50
                        </h6>
                        <span className="text-gray-400 font-medium text-sm opacity-80">
                          <del>$65</del>
                        </span>
                      </div>
                      <ul className="list-none flex gap-1">
                        <li>
                          <a href="javascript:void(0)">
                            <i className="ti ti-star-filled text-yellow-500 text-sm"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="ti ti-star-filled text-yellow-500 text-sm"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="ti ti-star-filled text-yellow-500 text-sm"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="ti ti-star text-yellow-500 text-sm"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="ti ti-star text-yellow-500 text-sm"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card overflow-hidden">
                  <div className="relative">
                    <a href="javascript:void(0)">
                      <img
                        src="@@webRoot/assets/images/products/product-2.jpg"
                        alt="product_img"
                        className="w-full"
                      />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="bg-blue-600 w-8 h-8 flex justify-center items-center text-white rounded-full absolute bottom-0 right-0 mr-4 -mb-3"
                    >
                      <i className="ti ti-basket text-base"></i>
                    </a>
                  </div>
                  <div className="card-body">
                    <h6 className="text-base font-semibold text-gray-500 mb-1">
                      MacBook Air Pro
                    </h6>
                    <div className="flex justify-between">
                      <div className="flex gap-2 items-center">
                        <h6 className="text-base text-gray-500 font-semibold">
                          $650
                        </h6>
                        <span className="text-gray-400 text-sm opacity-80">
                          <del>$900</del>
                        </span>
                      </div>
                      <ul className="list-none flex gap-1">
                        <li>
                          <a href="javascript:void(0)">
                            <i className="ti ti-star-filled text-yellow-500 text-sm"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="ti ti-star-filled text-yellow-500 text-sm"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="ti ti-star-filled text-yellow-500 text-sm"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="ti ti-star text-yellow-500 text-sm"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="ti ti-star text-yellow-500 text-sm"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card overflow-hidden">
                  <div className="relative">
                    <a href="javascript:void(0)">
                      <img
                        src="@@webRoot/assets/images/products/product-3.jpg"
                        alt="product_img"
                        className="w-full"
                      />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="bg-blue-600 w-8 h-8 flex justify-center items-center text-white rounded-full absolute bottom-0 right-0 mr-4 -mb-3"
                    >
                      <i className="ti ti-basket text-base"></i>
                    </a>
                  </div>
                  <div className="card-body">
                    <h6 className="text-base font-semibold text-gray-500 mb-1">
                      Red Valvet Dress
                    </h6>
                    <div className="flex justify-between">
                      <div className="flex gap-2 items-center">
                        <h6 className="text-base text-gray-500 font-semibold">
                          $150
                        </h6>
                        <span className="text-gray-400 text-sm opacity-80">
                          <del>$200</del>
                        </span>
                      </div>
                      <ul className="list-none flex gap-1">
                        <li>
                          <a href="javascript:void(0)">
                            <i className="ti ti-star-filled text-yellow-500 text-sm"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="ti ti-star-filled text-yellow-500 text-sm"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="ti ti-star-filled text-yellow-500 text-sm"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="ti ti-star text-yellow-500 text-sm"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="ti ti-star text-yellow-500 text-sm"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card overflow-hidden">
                  <div className="relative">
                    <a href="javascript:void(0)">
                      <img
                        src="@@webRoot/assets/images/products/product-4.jpg"
                        alt="product_img"
                        className="w-full"
                      />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="bg-blue-600 w-8 h-8 flex justify-center items-center text-white rounded-full absolute bottom-0 right-0 mr-4 -mb-3"
                    >
                      <i className="ti ti-basket text-base"></i>
                    </a>
                  </div>
                  <div className="card-body">
                    <h6 className="text-base font-semibold text-gray-500 mb-1">
                      Cute Soft Teddybear
                    </h6>
                    <div className="flex justify-between">
                      <div className="flex gap-2 items-center">
                        <h6 className="text-base text-gray-500 font-semibold">
                          $285
                        </h6>
                        <span className="text-gray-400 text-sm">
                          <del>$345</del>
                        </span>
                      </div>
                      <ul className="list-none flex gap-1">
                        <li>
                          <a href="javascript:void(0)">
                            <i className="ti ti-star-filled text-yellow-500 text-sm"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="ti ti-star-filled text-yellow-500 text-sm"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="ti ti-star-filled text-yellow-500 text-sm"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="ti ti-star text-yellow-500 text-sm"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="ti ti-star text-yellow-500 text-sm"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <footer>
                <p className="text-base text-gray-400 font-normal p-3 text-center">
                  Design and Developed by
                  <a
                    href="https://www.wrappixel.com/"
                    target="_blank"
                    className="text-blue-600 underline hover:text-blue-700"
                  >
                    wrappixel.com
                  </a>
                </p>
              </footer>
            </div>
          </main>
        </div>
      </div>
    </main>
  );
};
