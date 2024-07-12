
import axiosSecure from "./axiosSecure"

// post the price for payment intent
export const sendBookingPrice = async (price) =>{
    const {data} = await axiosSecure.post('/create-payment-intent', {price})
    return data
}