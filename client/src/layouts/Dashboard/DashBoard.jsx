import MenuDashboard from "./menuDashboard/menuDashboard";


const DashBoard = () => {
    return (
        <div className="min-h-screen md:flex">
             {/* menu */}
             <div className="max-w-lg">
                <MenuDashboard/>
             </div>
             <div className="bg-green-600 ml-64 flex-1">
              content
             </div>
        </div>
    );
};

export default DashBoard;