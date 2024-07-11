import { Link } from "react-router-dom";


const MenuDashboard = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col gap-4">
                <Link to={'/dashboard'}>Home</Link>
                <Link to={'/dashboard'}>Home</Link>
                <Link to={'/dashboard'}>Home</Link>
                <Link to={'/dashboard'}>Home</Link>
            </div>
            <div>
                <Link>Logout</Link>
            </div>
        </div>
    );
};

export default MenuDashboard;