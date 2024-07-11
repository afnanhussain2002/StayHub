import { Outlet } from "react-router-dom";
import MenuDashboard from "./menuDashboard/menuDashboard";



const DashBoard = () => {
    return (
        <div className="min-h-screen md:flex">
             {/* menu */}
             <div className="max-w-lg">
               
                <MenuDashboard/>
             </div>
             <div className=" ml-64 flex-1">
              <Outlet/>
             </div>
        </div>
    );
};

export default DashBoard;