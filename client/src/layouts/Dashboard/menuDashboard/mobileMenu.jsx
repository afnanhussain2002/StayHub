import { RiArchiveDrawerFill } from "react-icons/ri";
import { FaHotel } from "react-icons/fa6";
import { LuHistory } from "react-icons/lu";
import { MdAddCircle, MdCollectionsBookmark, MdDashboard } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../sheard/header/Logo";
import useRole from "../../../hooks/useRole";

const MobileMenu = () => {
    return (
        <div className="drawer lg:hidden">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn bg-back-main-color text-white drawer-button text-xl"><RiArchiveDrawerFill /></label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">

        
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>


    </ul>
  </div>
</div>
    );
};

export default MobileMenu;