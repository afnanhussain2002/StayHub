import axiosSecure from "./axiosSecure"

export const addHotel = async(hotel) =>{
    const {data} = await axiosSecure.post('/hotels', hotel)

    return data
}