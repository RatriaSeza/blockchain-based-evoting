import LogoBemUndip from "@assets/img/logo-bem-undip-removed.png"
import { SidebarItem } from "./SideBardItem";
import React from "react";

type SidebarProps = {
  active: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ active }) => {
  return (
    <div>
      <div className="p-4">
        <a href="../" className="flex flex-col items-center justify-center text-gray-500 text-lg font-bold"><img src={LogoBemUndip} className="w-16  h-auto" alt="Logo-Dark"/> Pemira FSM</a>
      </div>
      <div className="scroll-sidebar" data-simplebar="">
        <nav className="w-full flex flex-col sidebar-nav px-4 mt-5">
          <ul id="sidebarnav" className="text-gray-600 text-sm">
            <SidebarItem isActive={active === 'dashboard'} icon="fa-solid fa-chart-simple" title="Dashboard" link="/admin/dashboard"/>
            <SidebarItem isActive={active === 'masters'} icon="fa-solid fa-user-tie" title="Master Data" link="/admin/master"/>
            <SidebarItem isActive={active === 'voters'} icon="fa-solid fa-user-group" title="Voters" link="/admin/voters"/>

            <li className="text-xs font-bold mb-4 mt-8">
              <i className="ti ti-dots nav-small-cap-icon text-lg hidden text-center"></i>
              <span className="text-xs text-gray-400 font-semibold">AUTH</span>
            </li>

            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative rounded-md text-gray-500 w-full"
                href="@@webRoot/pages/authentication-login.html"
              >
                <i className="ti ti-login ps-2 text-2xl"></i> <span>Login</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative rounded-md text-gray-500 w-full"
                href="@@webRoot/pages/authentication-register.html"
              >
                <i className="ti ti-user-plus ps-2 text-2xl"></i>{" "}
                <span>Register</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
