import AllCategories from "../../components/AllCategories/AllCategories";
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
            <ImageBG>
            <AllCategories/>

            </ImageBG>
          
        </>
    );
};

export default Home;