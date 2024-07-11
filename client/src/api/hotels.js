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

// get a single hotels

export const getSingleHotels = async(id) =>{
    const {data} = await axiosSecure(`/hotel/${id}`)
    return data
}
// get hotels with filter for host

export const getHostHotels = async(email) =>{
    const {data} = await axiosSecure(`hotels/${email}`)
    return data
} 