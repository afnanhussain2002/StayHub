import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/reUseComponents/Loader";


const HotelDetails = () => {
    const {loading} = useAuth()
    const hotel = useLoaderData()
    console.log(hotel);
    if (loading) return <Loader/>
    return (
        <>

        <section className="grid grid-cols-2 gap-2 mt-8 max-w-7xl mx-auto justify-center lg:grid-cols-4">
            <img src={hotel.bannerImage.data.display_url} alt="" className="w-full h-96 object-cover col-span-2 border-4 border-back-main-color rounded-lg"/>
            <img src={hotel.roomImg1} alt="" className="w-full h-96 object-cover border-4 border-back-main-color rounded-lg"/>
            <img src={hotel.roomImg2} alt="" className="w-full h-96 object-cover border-4 border-back-main-color rounded-lg"/>
            <img src={hotel.roomImg3} alt="" className="w-full h-96 object-cover border-4 border-back-main-color rounded-lg"/>
            <img src={hotel.roomImg4} alt="" className="w-full h-96 object-cover border-4 border-back-main-color rounded-lg"/>

        </section>

            
        </>
    );
};

export default HotelDetails;