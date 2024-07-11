import { Link } from "react-router-dom";


const MenuDashboard = () => {
    
    return (
        <div className="flex flex-col bg-back-main-color h-full p-12 text-white font-bold text-2xl">
            <div className="flex flex-col gap-4 flex-1">
                <Link to={'/dashboard'}>Dashboard</Link>
                <Link to={'/dashboard'}>Home</Link>
                <Link to={'/dashboard'}>Home</Link>
                <Link to={'/dashboard'}>Home</Link>
            </div>
            <div>
                <button className="bg-white p-2 rounded-md text-back-main-color">Logout</button>
            </div>
        </div>
    );
};

export default MenuDashboard;