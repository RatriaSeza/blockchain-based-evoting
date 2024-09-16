import { Profile } from "./Profile";

export const Header = () => {
  return (
    <nav className=" w-ful flex items-center justify-between" aria-label="Global">
      <ul className="icon-nav flex items-center gap-4">
        <li className="relative xl:hidden">
          <a
            className="text-xl  icon-hover cursor-pointer text-heading"
            id="headerCollapse"
            data-hs-overlay="#application-sidebar-brand"
            aria-controls="application-sidebar-brand"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </a>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <Profile/>
      </div>
    </nav>
  );
};
