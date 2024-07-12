import axiosSecure from "./axiosSecure"

// post route for book a hotel
export const bookHotel = async(bookingInfo) =>{
   
    const {data} = await axiosSecure.post('/hotel/booking', bookingInfo)
    return data
}