import axiosSecure from "./axiosSecure"

// save user info on database
export const saveUserDB = async(user) =>{
    const currentUser ={
        email:user.email,
        role:'guest',
        status:'verified'
    }
    const {data} =await axiosSecure.post('/user', currentUser)
    return data ;
}

// get token from server

export const getToken = async email =>{
    const {data} = await axiosSecure.post('/jwt', email)
    console.log('Token received form server-----');
    return data
}

// remove token after user logout 

export const clearCookie = async() =>{
   const {data} = await axiosSecure('/logout')
   console.log('Token removed from cookie');
   return data
}



