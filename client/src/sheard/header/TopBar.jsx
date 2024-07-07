import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="bg-white w-full font-semibold py-1">

    <div className=" flex justify-around max-w-screen-xl mx-auto">
      <div className="flex items-center gap-1 font-bold text-back-main-color text-xs lg:text-sm">
        <FaLocationDot />
        <p>96 Ernser Vista Suite 437, NY, US</p>
      </div>
      <div className="flex items-center gap-1 font-bold text-back-main-color text-xs lg:text-sm">
      <IoIosCall />
        <p> (123) 456-78-910 </p>
      </div>
      <div className="flex items-center gap-1 font-bold text-back-main-color text-xs lg:text-sm">
        <Link to={'/login'}>Login |</Link>
        <Link to={'/register'}>Register</Link>
      </div>
      
    </div>
    </div>
  );
};

export default TopBar;
