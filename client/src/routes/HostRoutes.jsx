
import { Navigate } from 'react-router-dom';
import useRole from '../hooks/useRole';
import Loader from '../components/reUseComponents/Loader';

const HostRoutes = ({children}) => {
    const [role, isLoading] = useRole()
    console.log('role',role);
    if(isLoading) return <Loader/>
    if(role ==="host") return children
    return <Navigate to={'/dashboard'} replace/>
};

export default HostRoutes;