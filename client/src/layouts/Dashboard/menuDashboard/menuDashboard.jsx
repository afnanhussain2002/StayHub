import { Link, NavLink } from "react-router-dom";
import Logo from "../../../sheard/header/Logo";
import useRole from "../../../hooks/useRole";

const MenuDashboard = () => {
  const [role] = useRole();

  return (
    <div className="flex flex-col bg-back-main-color h-full p-12 text-white font-bold text-xl">
      <div className="flex flex-col gap-4 flex-1">
        <Logo />
        <NavLink
          to={"/dashboard"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "" : ""
          }
        >
          Dashboard
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
          Add Hotel
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
          View Orders
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
          Your Hotels
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
          Payment History
        </NavLink>
      </div>
      <div>
        <button className="bg-white p-2 rounded-md text-back-main-color">
          Logout
        </button>
      </div>
    </div>
  );
};

export default MenuDashboard;
