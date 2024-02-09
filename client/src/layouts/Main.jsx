import { Outlet } from "react-router-dom";
import Navbar from "../sheard/header/navbar";
import TopBar from "../sheard/header/topBar";
import Footer from "../sheard/footer/Footer";


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