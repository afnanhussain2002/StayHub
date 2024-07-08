import axiosSecure from "./axiosSecure"

export const saveUserDB = async(user) =>{
    const currentUser ={
        email:user.email,
        role:'guest',
        status:'verified'
    }
    const {data} =await axiosSecure.post('/user', currentUser)
    return data ;
}