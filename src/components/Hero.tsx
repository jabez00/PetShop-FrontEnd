import { FiPhone } from "react-icons/fi";
import heroImg from "/images/pug-yawn-vingette.jpg";
import { useState } from "react";
import ShopForm from "./ShopForm";

const Hero = () => {
  const [formToggle, setFormToggle] = useState(false);
  function handleSubCLick(value: boolean) {
    setFormToggle(value);
  }
  return (
    <div className="relative">
      <div className="md:mx-20 mx-10 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4 my-auto">
            <div className="lg:hidden md:pt-12 sm:pt-8"></div>
            <h1>Get Your New Furry Family Member Today!</h1>
            <p>
              Discover the joy of pet adoption and change a life. Helping resuce
              animals find their forever homes.
            </p>
            <div className="flex flex-cols space-x-8 pt-4 md:justify-normal justify-center">
              <button
                onClick={() => {
                  setFormToggle(true);
                }}
                className="button-full-cyan px-8 hover:scale-105 duration-150"
              >
                Shop Now
              </button>

              <button className="button-outline-purple px-4 flex hover:scale-105 duration-150">
                <FiPhone className="text-purple-500 my-auto mr-2" />
                Schedule a call
              </button>
            </div>
          </div>
          <img src={heroImg} alt="/" />
        </div>
      </div>
      <div className={formToggle ? "" : "hidden"}>
        <ShopForm onSubClick={handleSubCLick} />
      </div>
    </div>
  );
};

export default Hero;
