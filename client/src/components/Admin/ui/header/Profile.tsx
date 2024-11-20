import ProfileImage from "@assets/img/admin/profiles/user-3.jpg";
import { useState } from "react";

export const Profile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  const handleLogout = () => {
    localStorage.removeItem("admin-token");
    localStorage.removeItem("admin");
    window.location.href = "/admin/login";
  }

  return (
    <div className="hs-dropdown relative inline-flex [--placement:bottom-right] sm:[--trigger:hover]">
      <a 
        className="relative hs-dropdown-toggle cursor-pointer align-middle rounded-full"
        onClick={toggleDropdown}
      >
        <img
          className="object-cover w-9 h-9 rounded-full"
          src={ProfileImage}
          alt=""
          aria-hidden="true"
        />
      </a>
      <div
        className={`absolute right-0 top-12 card hs-dropdown-menu transition-[opacity,margin] rounded-md duration ${
          isDropdownOpen ? "opacity-100 mt-2" : "opacity-0 mt-0"
        } min-w-max w-[200px] ${isDropdownOpen ? "block" : "hidden"} z-[12]`}
        aria-labelledby="hs-dropdown-custom-icon-trigger"
      >
        <div className="card-body p-0 py-2">
          <div className="px-4 grid">
            <button onClick={handleLogout}
              className="btn-outline-primary font-medium text-[15px] w-full hover:bg-blue-600 hover:text-white"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
