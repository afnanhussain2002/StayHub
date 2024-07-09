import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBed } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import { errorPopup, successPopup } from "../../popups/popups";
import SocialSign from "../../components/SocialSign/SocialSign";


const Login = () => {
  const {signIn} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
 const from = location?.state?.from?.pathname
  const handleLoginBtn = async e =>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value

    const userInfo = {email,password}
    console.log(userInfo);

    try {
    await signIn(email,password)
    successPopup('Logged In Successfully')
      // console.log(result);
    } catch (error) {
      console.log(error);
      errorPopup(error.message)
    }finally{
      navigate(from, {replace:true})
    }
  }
  return (
    <>
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
             {/* social sign  */}
             <SocialSign/>
              <hr className="mt-6 border-b-1 border-back-main-color" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="text-blueGray-400 text-center mb-3 font-bold">
                <small>Or sign in with credentials</small>
              </div>
              <form onSubmit={handleLoginBtn}>
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
                <div>
                  <label className="inline-flex items-center cursor-pointer">
                  
                    <span className="ml-2 text-sm font-semibold text-black">
                      Forget password
                    </span>
                  </label>
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
                  <Link to={"/register"}>Register </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
