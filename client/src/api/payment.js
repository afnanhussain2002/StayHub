// post the price for payment intent

import axiosSecure from "./axiosSecure"

export const sendBookingPrice = async (price) =>{
    const {data} = await axiosSecure.post('/create-payment-intent', {price})
    return data
}