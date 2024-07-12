import axiosSecure from "./axiosSecure"
// get all the users

export const getAllUsers = async() =>{
    const {data} = await axiosSecure('/users')
    return data
}

// get user role

