import { Outlet } from "react-router-dom";
import MenuDashboard from "./menuDashboard/menuDashboard";
import MobileMenu from "./menuDashboard/mobileMenu";



const DashBoard = () => {
    return (
        <>
        <div className="min-h-screen md:flex">
             {/* computer menu */}
             <div className="max-w-lg">
               
                <MenuDashboard/>
                <MobileMenu/>
             </div>
           
             <div className=" ml-32 flex-1">
              <Outlet/>
             </div>
 
     
        </div>

        
        </>
    );
};

export default DashBoard;