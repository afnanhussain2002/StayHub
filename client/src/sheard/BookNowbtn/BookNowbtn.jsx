import { Link } from "react-router-dom";


const DashboardBtn = () => {
    return (
        <div>
          <Link to={'/dashboard'} className="bg-white p-1 text-xs font-bold text-back-main-color rounded lg:px-4 lg:py-3 lg:text-xl">Go To Dashboard</Link>
        </div>
    );
};

export default DashboardBtn;