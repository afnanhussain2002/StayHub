import axiosSecure from "./axiosSecure"

// post route for book a hotel
export const bookHotel = async(bookingInfo) =>{
    const booking ={
        guestEmail: bookingInfo.user.email,
        hotel: bookingInfo.hotelName,
        from: bookingInfo.startDate,
        to: bookingInfo.endDate,
        roomType: bookingInfo.roomType,
        price: bookingInfo.totalPrice,
        payment:'incomplete'

    }
    const {data} = await axiosSecure.post('/hotel/booking', booking)
    return data
}