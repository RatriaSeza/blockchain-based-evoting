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
        <span className="flex justify-center w-8 text-lg"><i className={`${icon} ps-2`}></i></span>{title}
      </a>
    </li>
  );
}