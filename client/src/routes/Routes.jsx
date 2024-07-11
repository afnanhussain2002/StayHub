import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../errorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AboutUs from "../pages/AboutUs/AboutUs";
import AddRooms from "../components/AddRooms/AddRooms";
import PrivateRoutes from "./PrivateRoutes";
import HotelDetails from "../pages/hotelDetails/HotelDetails";
import { getSingleHotels } from "../api/hotels";
import DashBoard from "../layouts/Dashboard/DashBoard";



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
                path:'/hotel/:id',
                element:<PrivateRoutes><HotelDetails/></PrivateRoutes>,
                loader: ({params}) => getSingleHotels(params.id)
            
            }
        ],
        
        
    },
    {
       path:'/dashboard',
       element:<PrivateRoutes><DashBoard/></PrivateRoutes>,
       children:[
        {
            path:'addHotel',
            element:<PrivateRoutes> <AddRooms/> </PrivateRoutes>
        },
       ]
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

