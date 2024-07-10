import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/reUseComponents/Loader";
import Title from "../../components/reUseComponents/Title";
import Container from "../../components/reUseComponents/Container";

const HotelDetails = () => {
  const { loading } = useAuth();
  const hotel = useLoaderData();
  console.log(hotel);
  const doubleBedPrice = parseInt(hotel.doubleBedPrice)
  const singleBedPrice = parseInt(hotel.singleBedPrice)
  const availableSingleRooms = parseInt(hotel.singleBed)
  const availableCoupleRooms = parseInt(hotel.doubleBed)
  const availableRooms = availableCoupleRooms + availableSingleRooms
  if (loading) return <Loader />;
  return (
    <>
      <section className="grid grid-cols-2 gap-2 mt-8 max-w-7xl mx-auto justify-center lg:grid-cols-4">
        <img
          src={hotel.bannerImage.data.display_url}
          alt=""
          className="w-full h-96 object-cover col-span-2 border-4 border-back-main-color rounded-lg"
        />
        <img
          src={hotel.roomImg1}
          alt=""
          className="w-full h-96 object-cover border-4 border-back-main-color rounded-lg"
        />
        <img
          src={hotel.roomImg2}
          alt=""
          className="w-full h-96 object-cover border-4 border-back-main-color rounded-lg"
        />
        <img
          src={hotel.roomImg3}
          alt=""
          className="w-full h-96 object-cover border-4 border-back-main-color rounded-lg"
        />
        <img
          src={hotel.roomImg4}
          alt=""
          className="w-full h-96 object-cover border-4 border-back-main-color rounded-lg"
        />
      </section>

      <Container>
        {/* hotel name */}
        <div>
          <Title title={hotel.hotelName} left/>
        </div>

        <div className="mt-12"> 
            {/* hotel description */}
            <Title title={'About Hotel'} small left/>

            <p className="text-xl">{hotel.hotelDescription}</p>
        </div>
        {/* total rooms */}
        <Title title={'Total Rooms'} small left/>
        <div className="mt-2 space-y-1"> 

          <h3 className="font-bold text-2xl">Available Rooms: {availableRooms}</h3>
          <h3 className="font-bold text-2xl">Available Couple Rooms: {availableCoupleRooms}</h3>
          <h3 className="font-bold text-2xl">Available Single Rooms: {availableSingleRooms}</h3>
        </div>

        <Title title={'Price For Per Night'} small left/>
        <div className="mt-2 space-y-1"> 

          <h3 className="font-bold text-2xl"> Couple Rooms Price: ${doubleBedPrice}</h3>
          <h3 className="font-bold text-2xl"> Single Rooms Price: ${singleBedPrice}</h3>
        </div>
      </Container>
    </>
  );
};

export default HotelDetails;
