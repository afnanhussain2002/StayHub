import { Link } from "react-router-dom";
import Logo from "./Logo";
import DashboardBtn from "../BookNowbtn/BookNowbtn";
import useAuth from "../../hooks/useAuth";



const Navbar = () => {
  const {user} = useAuth()
    const navItems = (
        <>
          <li>
            <Link className=" mr-2 border-primary-color" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className=" mr-2 border-primary-color" to={"/rooms"}>
              Rooms
            </Link>
          </li>
          <li>
            <Link className=" mr-2 border-primary-color" to={"/about"}>
              About us
            </Link>
          </li>
          {user &&
          
          <li>
            <Link className=" mr-2 border-primary-color" to={"/dashboard"}>
              Dashboard
            </Link>
          </li>
          }
          <li>
            <Link className="mr-2 border-primary-color" to={"/contact"}>
              Contact
            </Link>
          </li>
        </>
      );
  return (
    <>
 <div className=" bg-back-main-color">
  <div className="max-w-7xl mx-auto navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {navItems}
      </ul>
    </div>
    <Logo/>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white font-bold">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    {user ?
 
    <div className="avatar">
    <div className="ring-white ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
      <img src={user?.photoURL ? user.photoURL : 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} />
    </div>
  </div>
    
  :
    <Link to={'/login'} className="btn">Book Now</Link>
    }
  </div>

  </div>
</div>
    </>
  );
};

export default Navbar;
