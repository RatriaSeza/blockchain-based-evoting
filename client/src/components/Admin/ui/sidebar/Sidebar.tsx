import LogoBemUndip from "@assets/img/logo-bem-undip-removed.png"
import { SidebarItem } from "./SideBardItem";
import React from "react";

type SidebarProps = {
  active: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ active }) => {
  const handleLogout = () => {
    localStorage.removeItem("admin-token");
    localStorage.removeItem("admin");
    window.location.href = "/admin/login";
  }

  return (
    <div>
      <div className="p-4">
        <a href="/admin/dashboard" className="flex flex-col items-center justify-center text-gray-500 text-lg font-bold"><img src={LogoBemUndip} className="w-16  h-auto" alt="Logo-Dark"/> Pemira FSM</a>
      </div>
      <div className="scroll-sidebar" data-simplebar="">
        <nav className="w-full flex flex-col sidebar-nav px-4 mt-5">
          <ul id="sidebarnav" className="text-gray-600 text-sm">
            <SidebarItem isActive={active === 'dashboard'} icon="fa-solid fa-chart-simple" title="Dashboard" link="/admin/dashboard"/>
            <SidebarItem isActive={active === 'masters'} icon="fa-solid fa-database" title="Masters" link="/admin/masters"/>
            <SidebarItem isActive={active === 'voters'} icon="fa-solid fa-user-group" title="Voters" link="/admin/voters"/>

            <li className="text-xs font-bold mb-4 mt-8">
              <i className="ti ti-dots nav-small-cap-icon text-lg hidden text-center"></i>
              <span className="text-xs text-gray-400 font-semibold">AUTH</span>
            </li>

            <li className="sidebar-item">
              <button onClick={handleLogout}
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative rounded-md text-gray-500 w-full"
              >
                <span className="flex justify-center w-8 text-lg"><i className="fa-solid fa-right-from-bracket"></i></span> Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
