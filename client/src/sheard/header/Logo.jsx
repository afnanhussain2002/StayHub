import { FaBed } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Logo = () => {
    return (
        <Link to={'/'} className='w-40 flex items-center text-xl text-white font-bold gap-1 lg:text-3xl'>
            <span>

       <FaBed />
            </span>
       <p>STAYHUB</p>
        </Link>
    );
};

export default Logo;