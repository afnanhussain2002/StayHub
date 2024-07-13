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
import HotelsByHost from "../layouts/Dashboard/HostDashboard/HotelsByHost";
import AllUsers from "../layouts/Dashboard/AdminDashboard/AllUsers";
import Payment from "../pages/Payment/Payment";
import PaymentHistory from "../pages/Payment/PaymentHistory";
import AdminRoutes from "./AdminRoutes";
import HostRoutes from "./HostRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },

      {
        path: "/hotel/:id",
        element: (
          <PrivateRoutes>
            <HotelDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) => getSingleHotels(params.id),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashBoard />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "addHotel",
        element: (
          <PrivateRoutes>
            <HostRoutes>
            <AddRooms />

            </HostRoutes>
          </PrivateRoutes>
        ),
      },
      {
        path: "yourHotels",
        element: (
          <PrivateRoutes>
            <HotelsByHost />
          </PrivateRoutes>
        ),
      },
      {
        path: "allUsers",
        element: (
          <PrivateRoutes>
            <AdminRoutes>
              <AllUsers />
            </AdminRoutes>
          </PrivateRoutes>
        ),
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
