import { Link } from "react-router-dom";


const DashboardBtn = () => {
    return (
        <div>
          <Link to={'/dashboard'} className="bg-white p-1 text-xs font-bold text-back-main-color rounded lg:text-xs">Go To Dashboard</Link>
        </div>
    );
};

export default DashboardBtn;