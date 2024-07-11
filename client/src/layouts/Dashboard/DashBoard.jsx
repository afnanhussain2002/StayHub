import MenuDashboard from "./menuDashboard/menuDashboard";


const DashBoard = () => {
    return (
        <div className="flex">
             {/* menu */}
             <div className="max-w-lg">
                <MenuDashboard/>
             </div>
             <div className="max-w-5xl">
              content
             </div>
        </div>
    );
};

export default DashBoard;