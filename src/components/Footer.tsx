import {
  FaFacebookSquare,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoLocationSharp, IoPaw } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className=" bg-gray-800 w-full pt-10 mt-10 pb-6 lg:rounded-t-[5rem] md:rounded-t-[4rem] rounded-t-[5rem] text-white ">
      <div className="max-w-[1240px] mx-auto pb-4 flex md:flex-row flex-col items-center justify-center lg:space-x-16">
        <div className="lg:ml-10 ">
          <div className=" flex space-x-2 pb-4 mr-8">
            <IoPaw className="text-purple-500 text-4xl" />
            <p className="text-purple-500 font-montserrat  text-4xl font-semibold">
              PetPals
            </p>
          </div>
          <p className="md:w-[30vw] w-[50vw] font-light text-lg pb-8">
            Bringing Hope and Happiness, One Paw at a Time.
          </p>
          <div className="flex md:place-content-start space-x-6 place-content-evenly mx-full  text-purple-500">
            <FaInstagram className="hover:scale-125 cursor-pointer" size={20} />
            <FaTwitter className="hover:scale-125 cursor-pointer" size={20} />
            <FaFacebookSquare
              className="hover:scale-125 cursor-pointer"
              size={20}
            />
            <FaTelegramPlane
              className="hover:scale-125 cursor-pointer"
              size={20}
            />
          </div>
        </div>
        <div className="flex md:space-x-4 px-6 space-x-16 lg:space-x-16  md:py-0 py-10">
          <div className="font-poppins">
            <div className="font-medium text-pink-200 text-lg lg:text-xl">
              Our Policies
            </div>
            <ul className=" flex font-light flex-col text-base lg:text-lg">
              <li className="hover:scale-105 cursor-pointer">Home</li>
              <li className="hover:scale-105 cursor-pointer">About</li>
              <li className="hover:scale-105 cursor-pointer">Shop</li>
              <li className="hover:scale-105 cursor-pointer">Service</li>
              <li className="hover:scale-105 cursor-pointer">Contact</li>
            </ul>
          </div>
          <div className="font-poppins">
            <div className="font-medium text-pink-200 text-lg lg:text-xl">
              Explore More
            </div>
            <ul className=" flex font-light flex-col text-base lg:text-lg">
              <li className="hover:scale-105 cursor-pointer">FAQ</li>
              <li className="hover:scale-105 cursor-pointer">Careers</li>
              <li className="hover:scale-105 cursor-pointer">Blog</li>
              <li className="hover:scale-105 cursor-pointer">Testimonials</li>
              <li className="hover:scale-105 cursor-pointer">Partnerships</li>
            </ul>
          </div>
        </div>
        <div className="lg:pl-10 flex md:flex-col flex-row md:space-x-0 space-x-8">
          <div>
            <div className="text-2xl text-pink-200 text-center font-medium font-montserrat">
              Get In Touch
            </div>
            <div className="flex text-lg space-x-4 ">
              <div>
                <IoLocationSharp size={20} className="mt-2" />
              </div>
              <div>
                1/100 Bay Lights, <br></br>
                Lorem Ipsum, <br></br>Lic 3021
              </div>
            </div>
          </div>
          <div className="md:pt-0 pt-8">
            <div className="flex text-lg space-x-4 items-center">
              <div>
                <MdOutlineEmail size={20} />
              </div>
              <div>petpaws@gmail.com</div>
            </div>
            <div className="flex text-lg space-x-4 items-center">
              <div>
                <FiPhone size={20} />
              </div>
              <div>+91 00 9999 8888</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
