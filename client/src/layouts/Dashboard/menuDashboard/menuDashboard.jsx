import { Link, NavLink } from "react-router-dom";
import Logo from "../../../sheard/header/Logo";
import useRole from "../../../hooks/useRole";
import { MdDashboard,MdAddCircle, MdCollectionsBookmark  } from "react-icons/md";
import { FaHotel } from "react-icons/fa";
import { LuHistory } from "react-icons/lu";
import MobileMenu from "./mobileMenu";

const MenuDashboard = () => {
  const [role] = useRole();

  return (
<>
    <div className=" hidden lg:flex flex-col bg-back-main-color h-full p-12 text-white font-bold text-xl">
      <div className="flex flex-col gap-4 flex-1">
        <Logo />
       
        <NavLink
          to={"/dashboard"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "flex items-center gap-1" : ""
          }
        >
         <MdDashboard/> Dashboard
        </NavLink>
        <NavLink
          to={"addHotel"}
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "bg-white text-back-main-color rounded pl-1"
              : ""
          }
        >
         <div className="flex items-center gap-1"><MdAddCircle/> Add Hotel</div>
        </NavLink>
        <NavLink
          to={"viewOrders"}
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "bg-white text-back-main-color rounded pl-1"
              : ""
          }
        >
         <div className="flex items-center gap-1"> <MdCollectionsBookmark/> View Orders</div>
        </NavLink>
        <NavLink
          to={"yourHotels"}
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "bg-white text-back-main-color rounded pl-1"
              : ""
          }
        >
          <div className="flex items-center gap-1"><FaHotel/> Your Hotels</div>
        </NavLink>
        {role === "admin" && <Link to={"allUsers"}>All Users</Link>}
        <NavLink
          to={"paymentHistory"}
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "bg-white text-back-main-color rounded pl-1"
              : ""
          }
        >
        <div className="flex items-center gap-1"> <LuHistory/> Payment History</div>
        </NavLink>
      </div>
      <div>
        <button className="bg-white p-2 rounded-md text-back-main-color">
          Logout
        </button>
      </div>
    </div>
    {/* tablet and mobile menu */}
   

</>
  );
};

export default MenuDashboard;
