import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { imageUpload } from "../../api/imageUpload";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const {createUser, updateUserProfile} = useAuth()
  const handleRegisterBtn = async e =>{
    e.preventDefault()
    console.log('clicked');
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.files[0]
    

    const userData = {name, email, password,}
    console.log(userData);

    try {
      // upload image
      const image = await imageUpload(photo)
      const profileImage = image?.data?.display_url
      
      // user registration
     const result = await createUser(email, password) 
     await updateUserProfile(name, profileImage)   

    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <section className="bg-[url('https://i.ibb.co/qL68xm9/comfortable-modern-bedroom-with-elegant-decoration-lighting-generative-ai-188544-7715.jpg')] bg-cover h-screen flex items-center justify-center">
      <div className="w-full lg:w-4/12 px-4 pt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0 ">
          <div className="rounded-t mb-0 px-6 py-6">

          <Link to={'/'} className='w-full flex items-center justify-center text-3xl text-back-main-color font-bold gap-1'>
            
            <span className="text-4xl">

       <FaBed />
            </span>
       <p>STAYHUB</p>
        </Link>
            <div className="text-center mb-3">
              <h6 className="text-back-main-color text-sm font-bold">
                Sign in with
              </h6>
            </div>
            <div className="btn-wrapper text-center">
              <button
                className="bg-white active:bg-blueGray-50 text-blueGray-700 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <FaGithub className="w-5 mr-1" />
                Github
              </button>
              <button
                className="bg-white active:bg-blueGray-50 text-blueGray-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <FcGoogle className="w-5 mr-1" />
                Google{" "}
              </button>
            </div>
            <hr className="mt-6 border-b-1 border-back-main-color" />
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div className="text-blueGray-400 text-center mb-3 font-bold">
              <small>Or sign in with credentials</small>
            </div>
            <form onSubmit={handleRegisterBtn}>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-black text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="border-0 px-3 py-3 placeholder-back-main-color text-black bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-back-main-color w-full ease-linear transition-all duration-150"
                  placeholder="Name"
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-black text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Photo
                </label>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  className="border-0 px-3 py-3 placeholder-back-main-color text-black bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-back-main-color w-full ease-linear transition-all duration-150"
                  placeholder="Photo"
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-black text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="border-0 px-3 py-3 placeholder-back-main-color text-black bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-back-main-color w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-black text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="border-0 px-3 py-3 placeholder-back-main-color text-black bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-back-main-color w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                />
              </div>

              <div className="text-center mt-6">
                <button
                  className="bg-back-main-color text-white active:bg-black text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="submit"
                >
                  {" "}
                  Sign In{" "}
                </button>
              </div>
            </form>
            <p className="text-back-main-color ">
              Already have an account please{" "}
              <span className="font-bold underline">
                <Link to={"/Login"}>Log in </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
