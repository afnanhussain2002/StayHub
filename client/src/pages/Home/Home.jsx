import AllCategories from "../../components/AllCategories/AllCategories";
import GetAllHotels from "../../components/getAllHotels/GetAllHotels";
import ImageBG from "../../components/reUseComponents/imageBG";
import AboutSection from "./HomeSections/AboutSection";
import HeroSection from "./HomeSections/HeroSection";



const Home = () => {
    return (
        <>
            <HeroSection/>
            <AboutSection/>
            {/* <MainFeatures/> */}
            <ImageBG>
            <AllCategories/>
            </ImageBG>
            <GetAllHotels/>
          
        </>
    );
};

export default Home;