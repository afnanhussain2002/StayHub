import { useLoaderData } from "react-router-dom";


const HotelDetails = () => {
    const hotel = useLoaderData()
    console.log(hotel);
    return (
        <div>
            
        </div>
    );
};

export default HotelDetails;