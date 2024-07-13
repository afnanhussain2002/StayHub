import AllCategories from "../../components/AllCategories/AllCategories";
import FindHotelCountries from "../../components/findHotelCountries/FindHotelCountries";
import GetAllHotels from "../../components/getAllHotels/GetAllHotels";
import ImageBG from "../../components/reUseComponents/imageBG";
import AboutSection from "./HomeSections/AboutSection";
import HeroSection from "./HomeSections/HeroSection";



const Home = () => {
    return (
        <>
            <HeroSection/>
            <FindHotelCountries/>
            {/* <AboutSection/> */}
            {/* <MainFeatures/> */}
           
            <AllCategories/>
           
            <GetAllHotels/>
          
        </>
    );
};

export default Home;