import AllCategories from "../../components/AllCategories/AllCategories";
import AllProducts from "../../components/allProducts/AllProducts";
import GetAllHotels from "../../components/getAllHotels/GetAllHotels";
import ImageBG from "../../components/reUseComponents/imageBG";
import AboutSection from "./HomeSections/AboutSection";
import HeroSection from "./HomeSections/HeroSection";
import MainFeatures from "./HomeSections/MainFeatures";


const Home = () => {
    return (
        <>
            <HeroSection/>
            <AboutSection/>
            {/* <MainFeatures/> */}
            <ImageBG image={"[url('https://i.ibb.co/74Vr28t/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv-105762-2301.jpg')]"}>
            <AllCategories/>
            </ImageBG>
            <AllProducts/>
            <GetAllHotels/>
          
        </>
    );
};

export default Home;