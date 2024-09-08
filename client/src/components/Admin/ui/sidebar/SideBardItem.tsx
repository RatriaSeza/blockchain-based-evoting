import React from "react";

type SidebarItemProps = {
  isActive: boolean;
  icon: string;
  title: string;
  link: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ icon, title, link, isActive }) => {
  return (
    <li className={`sidebar-item ${isActive ? 'selected' : ''}`}>
      <a
        className={`sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative rounded-md text-gray-500 w-full ${isActive ? 'active' : ''}`}
        href={link}
      >
        <i className={`${icon} w-8 ps-2 text-lg`}></i> <span>{title}</span>
      </a>
    </li>
  );
}