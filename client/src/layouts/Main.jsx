import { Outlet } from "react-router-dom";
import Navbar from "../sheard/header/navbar";
import TopBar from "../sheard/header/topBar";


const Main = () => {
    return (
        <div>
            <TopBar/>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;