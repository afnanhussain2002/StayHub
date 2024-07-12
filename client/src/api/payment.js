
import axiosSecure from "./axiosSecure"

// post the price for payment intent
export const sendBookingPrice = async (price) =>{
    const {data} = await axiosSecure.post('/create-payment-intent', {price})
    return data
}

// get guest booking payment history 

export const getPaymentHistory = async(email) =>{
    const {data} = await axiosSecure(`/paymentHistory/${email}`)
    return data
}