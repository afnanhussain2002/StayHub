import AllCategories from "../../components/AllCategories/AllCategories";
import AboutSection from "./HomeSections/AboutSection";
import HeroSection from "./HomeSections/HeroSection";
import MainFeatures from "./HomeSections/MainFeatures";


const Home = () => {
    return (
        <>
            <HeroSection/>
            <AboutSection/>
            {/* <MainFeatures/> */}
            <div className="bg-back-main-color">
            <AllCategories/>
            </div>
        </>
    );
};

export default Home;