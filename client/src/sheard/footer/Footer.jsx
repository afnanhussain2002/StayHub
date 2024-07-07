import { Link } from 'react-router-dom';
import Logo from '../header/Logo';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <section className="bg-[url('https://4.bp.blogspot.com/-G6PtlmfrVS4/TrVS5bmKMRI/AAAAAAAACAU/ZA98HniWDhc/s1600/hotel-room.jpg')] bg-cover bg-center mt-9">
            <div className="w-full h-full backdrop-brightness-50">
            <div className="max-w-7xl mx-auto grid grid-cols-3 gap-5 py-14">
              <div className='space-y-3'>
                <Logo/>
                <h3 className='text-xl text-white lg:text-2xl'>+880 1747824474</h3>
                <div>

                <p className='text-white'>Golapganj 3160, Sylhet, Bangladesh</p>
                <p className='text-white'>info.stayhub@gmail.com</p>
                </div>
                <div className='text-white text-xl flex gap-2 lg:text-2xl'>
                  <a href="#"><FaFacebook/></a>
                  <a href="#"><FaTwitter/></a>
                  <a href="#"><FaLinkedin/></a>
                  <a href="#"><FaYoutube/></a>
                </div>
              </div>
              <div className='space-y-3'>
                <h3 className='text-white text-2xl'>Quick Link</h3>
                <div>
                    <ul className='text-white'>
                        <Link><li>Home</li></Link>
                        <Link><li>Booking</li></Link>
                        <Link><li>About Us</li></Link>
                        <Link><li>Review</li></Link>
                        <Link><li>Contact</li></Link>
                    </ul>
                </div>
              </div>
              <div className='space-y-3'>
              <h3 className='text-white text-xl lg:text-2xl'>Subscribe our newlatester</h3>
              <div>
                <form action="#" className='flex flex-col lg:flex-row'>

                <input type="email" name="" id="" placeholder='Your E-mail Address' className=' p-1 lg:px-3 lg:py-2 placeholder:text-xs'/>
                <button className='bg-back-main-color text-xs font-bold p-1 text-white relative right-1 lg:px-3 py-2'>Subscribe</button>
                </form>
              </div>
              </div>
            </div>
            <div className='max-w-7xl mx-auto'>
            <hr />
            <div className='flex justify-between text-xs text-white py-2 lg:text-sm'>

                <p>Copyright © 2024 All rights reserved made by StayHub</p>
                <p>Terms Of Use | Privacy Policy</p>
            </div>
            </div>
            </div>
        </section>
    );
};

export default Footer;