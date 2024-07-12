import { Navigate } from "react-router-dom";
import Loader from "../components/reUseComponents/Loader";
import useRole from "../hooks/useRole";


const AdminRoutes = ({children}) => {
    const [role, isLoading] = useRole()
    if(isLoading) return <Loader/>
    if(role ==='admin') children
    return <Navigate to={'/dashboard'}/>
};

export default AdminRoutes;