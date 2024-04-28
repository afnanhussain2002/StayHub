import WhyChoseUs from "../../sheard/WhyChoseUs/WhyChoseUs";
import AboutSection from "../Home/HomeSections/AboutSection";
import MainFeatures from "../Home/HomeSections/MainFeatures";
import AboutUsBanner from "./AboutUsBanner/AboutUsBanner";


const AboutUs = () => {
    return (
        <div>
           <AboutUsBanner/>
           <AboutSection/>
           <MainFeatures/>
           <WhyChoseUs/>
        </div>
    );
};

export default AboutUs;