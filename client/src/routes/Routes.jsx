import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../errorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AboutUs from "../pages/AboutUs/AboutUs";
import AddRooms from "../components/AddRooms/AddRooms";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about',
                element:<AboutUs/>
            },
            {
                path:'/addRooms',
                element:<PrivateRoutes> <AddRooms/> </PrivateRoutes>
            }
        ],
        
        
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    }
])

export default router

