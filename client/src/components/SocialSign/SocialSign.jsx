import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';
import { getToken } from '../../api/auth';
import { successPopup } from '../../popups/popups';
import { useNavigate } from 'react-router-dom';

const SocialSign = () => {

    const {signInWithGoogle} = useAuth()
    const navigate = useNavigate()

    const handleGoogleSing = async() =>{

        try {
            const result = await signInWithGoogle()
            await getToken(result?.user?.email)
            successPopup('Google Sign Successfully')
            

        } catch (error) {
            console.log(error);
        }finally{
            navigate('/')
        }
       
       

    }
    return (
        <div className="btn-wrapper text-center">
        <button
          className="bg-white active:bg-blueGray-50 text-blueGray-700 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
          type="button"
        >
          <FaFacebook className="w-5 mr-1" />
          Facebook
        </button>
        <button
        onClick={handleGoogleSing}
          className="bg-white active:bg-blueGray-50 text-blueGray-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
          type="button"
        >
          <FcGoogle className="w-5 mr-1" />
          Google{" "}
        </button>
      </div>
    );
};

export default SocialSign;