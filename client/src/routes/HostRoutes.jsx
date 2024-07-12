
import { Navigate } from 'react-router-dom';
import useRole from '../hooks/useRole';
import Loader from '../components/reUseComponents/Loader';

const HostRoutes = ({children}) => {
    const [role, isLoading] = useRole()
    if(isLoading) return <Loader/>
    if(role ==='host') children
    return <Navigate to={'/dashboard'} replace/>
};

export default HostRoutes;