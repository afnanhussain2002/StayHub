import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/reUseComponents/Loader";
import Title from "../../components/reUseComponents/Title";
import Container from "../../components/reUseComponents/Container";
import date from "date-and-time"
import { useState } from "react";
import { successPopup } from "../../popups/popups";
import { addToLS } from "../../utils/localStorage";






const HotelDetails = () => {
  const {user,loading } = useAuth();
  const hotel = useLoaderData();
  const [totalPrice, setTotalPrice] = useState(0)

  const doubleBedPrice = parseInt(hotel.doubleBedPrice);
  const singleBedPrice = parseInt(hotel.singleBedPrice);
  const availableSingleRooms = parseInt(hotel.singleBed);
  const availableCoupleRooms = parseInt(hotel.doubleBed);
  const availableRooms = availableCoupleRooms + availableSingleRooms;

  // handle hotel booking form
  const handleBooking = e =>{
    e.preventDefault()
    const form = e.target 
    const startDate = new Date( form.startDate.value)
    const endDate = new Date(form.endDate.value);
    const countDays = date.subtract(endDate, startDate).toDays()
    const roomType = form.roomType.value;
    console.log(countDays);
    const totalPrice = roomType ==='Couple' ? doubleBedPrice * countDays : singleBedPrice * countDays;
    setTotalPrice(totalPrice)
    const bookingInfo = {user,hotelName:hotel.hotelName,roomType, startDate, endDate, totalPrice }
  
    // add booked hotel on local storage
    addToLS(bookingInfo)
    successPopup('Please Pay The Amount')
  }
  

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
          <Title title={hotel.hotelName} left />
          <h3 className="font-bold text-2xl">
            Location: {hotel.hotelLocation}
          </h3>
        </div>

        <div className="mt-12">
          {/* hotel description */}
          <Title title={"About Hotel"} small left />

          <p className="text-xl">{hotel.hotelDescription}</p>
        </div>
        {/* total rooms */}
        <Title title={"Total Rooms"} small left />
        <div className="mt-2 space-y-1">
          <h3 className="font-bold text-2xl">
            Available Rooms: {availableRooms}
          </h3>
          <h3 className="font-bold text-2xl">
            Available Couple Rooms: {availableCoupleRooms}
          </h3>
          <h3 className="font-bold text-2xl">
            Available Single Rooms: {availableSingleRooms}
          </h3>
        </div>

        <Title title={"Price For Per Night"} small left />
        <div className="mt-2 space-y-1">
          <h3 className="font-bold text-2xl">
            {" "}
            Couple Rooms Price: ${doubleBedPrice}
          </h3>
          <h3 className="font-bold text-2xl">
            {" "}
            Single Rooms Price: ${singleBedPrice}
          </h3>
        </div>

          <Title small title={"Book Now"} left />
          {/* form for handle booking */}
        <form onSubmit={handleBooking} className="flex gap-2 justify-center items-center bg-back-main-color w-full px-2 py-5 rounded-lg">
          <div className="flex items-center gap-2">
            <p className="font-bold text-2xl text-white">Start Date</p>
     {/*   <BookingsDatePickerFrom/> */}
     <input type="date" name="startDate" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 "/>

          </div>
          <div className="flex items-center gap-2 mt-2">
          <p className="font-bold text-2xl text-white">End Date</p>
    {/*    <BookingDatePickerTo/> */}
    <input type="date" name="endDate" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 "/>
          </div>

          <select
              id="roomType"
              name="roomType"
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-48 h-8"
            >
                <option>
                 Couple
                </option>
                <option>
                 Single
                </option>
           
            </select>
          <button type="submit" className="p-2 bg-white text-back-main-color font-bold text-xl rounded">Book Now</button>
        </form>
            <p className="text-2xl font-bold text-right">Price:${totalPrice} <Link to={'/dashboard/payment'} className="p-2 bg-back-main-color rounded-md font-bold text-white">Pay Now</Link> </p>
      </Container>
    </>
  );
};

export default HotelDetails;
