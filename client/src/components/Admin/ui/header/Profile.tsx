import ProfileImage from "@assets/img/admin/profiles/user-3.jpg";

export const Profile = () => {
  return (
    <div className="hs-dropdown relative inline-flex [--placement:bottom-right] sm:[--trigger:hover]">
      <a className="relative hs-dropdown-toggle cursor-pointer align-middle rounded-full">
        <img
          className="object-cover w-9 h-9 rounded-full"
          src={ProfileImage}
          alt=""
          aria-hidden="true"
        />
      </a>
      <div
        className="card hs-dropdown-menu transition-[opacity,margin] rounded-md duration hs-dropdown-open:opacity-100 opacity-0 mt-2 min-w-max w-[200px] hidden z-[12]"
        aria-labelledby="hs-dropdown-custom-icon-trigger"
      >
        <div className="card-body p-0 py-2">
          <a
            href="javscript:void(0)"
            className="flex gap-2 items-center font-medium px-4 py-1.5 hover:bg-gray-200 text-gray-400"
          >
            <i className="ti ti-user text-xl"></i>
            <p className="text-sm">My Profile</p>
          </a>
          <a
            href="javscript:void(0)"
            className="flex gap-2 items-center font-medium px-4 py-1.5 hover:bg-gray-200 text-gray-400"
          >
            <i className="ti ti-mail text-xl"></i>
            <p className="text-sm">My Account</p>
          </a>
          <a
            href="javscript:void(0)"
            className="flex gap-2 items-center font-medium px-4 py-1.5 hover:bg-gray-200 text-gray-400"
          >
            <i className="ti ti-list-check text-xl"></i>
            <p className="text-sm">My Task</p>
          </a>
          <div className="px-4 mt-[7px] grid">
            <a
              href="../../pages/authentication-login.html"
              className="btn-outline-primary font-medium text-[15px] w-full hover:bg-blue-600 hover:text-white"
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
