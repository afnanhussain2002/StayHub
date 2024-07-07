import { Link } from "react-router-dom";
import Logo from "./Logo";
import BookNowbtn from "../BookNowbtn/BookNowbtn";
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
          <li>
            <Link className=" mr-2 border-primary-color" to={"/contact"}>
              News
            </Link>
          </li>
          <li>
            <Link className="mr-2 border-primary-color" to={"/contact"}>
              Contact
            </Link>
          </li>
        </>
      );
  return (
    <>
      <div className="bg-back-main-color">
         <div className="max-w-7xl flex justify-between items-center mx-auto py-3 ">
          <Logo/>

        <ul className="flex gap-2 text-xs text-white font-bold lg:text-xl lg:gap-8">
         {navItems}
        </ul>
      {
        user ? 
        <img className="w-10 h-10 rounded-full border-2 border-white" src={user?.photoURL} alt="Rounded avatar"></img>
        :

        <BookNowbtn/>
      }
         </div>
      </div>
    </>
  );
};

export default Navbar;
