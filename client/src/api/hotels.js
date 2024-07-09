import axiosSecure from "./axiosSecure"

// post hotel

export const addHotel = async(hotel) =>{
    const {data} = await axiosSecure.post('/hotels', hotel)

    return data
}

// get all hotels

export const getAllHotels = async () =>{
    const {data} = await axiosSecure('/hotels')
    return data
}