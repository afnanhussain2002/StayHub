import { Outlet } from "react-router-dom";

import Footer from "../sheard/footer/Footer";
import TopBar from "../sheard/header/TopBar";
import Navbar from "../sheard/header/Navbar";


const Main = () => {
    return (
        <div>
            <TopBar/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;