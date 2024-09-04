import AdminLogo from "@assets/img/admin/logos/logo-light.svg";

export const Sidebar = () => {
  return (
    <div>
      <div className="p-4">
        <a href="../" className="text-nowrap"><img src={AdminLogo} alt="Logo-Dark"/></a>
      </div>
      <div className="scroll-sidebar" data-simplebar="">
        <nav className="w-full flex flex-col sidebar-nav px-4 mt-5">
          <ul id="sidebarnav" className="text-gray-600 text-sm">
            <li className="text-xs font-bold pb-[5px]">
              <i className="ti ti-dots nav-small-cap-icon text-lg hidden text-center"></i>
              <span className="text-xs text-gray-400 font-semibold">HOME</span>
            </li>

            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative rounded-md text-gray-500 w-full"
                href="@@webRoot/index.html"
              >
                <i className="ti ti-layout-dashboard ps-2 text-2xl"></i>{" "}
                <span>Dashboard</span>
              </a>
            </li>

            <li className="text-xs font-bold mb-4 mt-6">
              <i className="ti ti-dots nav-small-cap-icon text-lg hidden text-center"></i>
              <span className="text-xs text-gray-400 font-semibold">
                UI COMPONENTS
              </span>
            </li>

            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative rounded-md text-gray-500 w-full"
                href="@@webRoot/components/buttons.html"
              >
                <i className="ti ti-article ps-2 text-2xl"></i> <span>Buttons</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative rounded-md text-gray-500 w-full"
                href="@@webRoot/components/alerts.html"
              >
                <i className="ti ti-alert-circle ps-2 text-2xl"></i>{" "}
                <span>Alerts</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative rounded-md text-gray-500 w-full"
                href="@@webRoot/components/cards.html"
              >
                <i className="ti ti-cards ps-2 text-2xl"></i> <span>Card</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative rounded-md text-gray-500 w-full"
                href="@@webRoot/components/forms.html"
              >
                <i className="ti ti-file-description ps-2 text-2xl"></i>{" "}
                <span>Forms</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative rounded-md text-gray-500 w-full"
                href="@@webRoot/components/typography.html"
              >
                <i className="ti ti-typography ps-2 text-2xl"></i>{" "}
                <span>Typography</span>
              </a>
            </li>

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

            <li className="text-xs font-bold mb-4 mt-8">
              <i className="ti ti-dots nav-small-cap-icon text-lg hidden text-center"></i>
              <span className="text-xs text-gray-400 font-semibold">EXTRA</span>
            </li>

            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative rounded-md text-gray-500 w-full"
                href="@@webRoot/pages/icons.html"
              >
                <i className="ti ti-mood-happy ps-2 text-2xl"></i>{" "}
                <span>Icons</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative rounded-md text-gray-500 w-full"
                href="@@webRoot/pages/sample-page.html"
              >
                <i className="ti ti-aperture ps-2 text-2xl"></i>{" "}
                <span>Sample Page</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
