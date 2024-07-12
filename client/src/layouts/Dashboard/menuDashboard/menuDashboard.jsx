import { Link } from "react-router-dom";
import Logo from "../../../sheard/header/Logo";
import useRole from "../../../hooks/useRole";


const MenuDashboard = () => {
    const [role] = useRole()

    return (
        <div className="flex flex-col bg-back-main-color h-full p-12 text-white font-bold text-xl">
            <div className="flex flex-col gap-4 flex-1">
                <Logo/>
                <Link to={'/dashboard'}>Dashboard</Link>
                <Link to={'addHotel'}>Add Hotel</Link>
                <Link to={'/dashboard'}>View Orders</Link>
                <Link to={'yourHotels'}>Your Hotels</Link>
                {role ==='admin' && <Link to={'allUsers'}>All Users</Link>}
                <Link to={'paymentHistory'}>Payment History</Link>
            </div>
            <div>
                <button className="bg-white p-2 rounded-md text-back-main-color">Logout</button>
            </div>
        </div>
    );
};

export default MenuDashboard;