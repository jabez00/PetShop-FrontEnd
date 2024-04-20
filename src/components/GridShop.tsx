import catPlay from "/images/cat-play-p.jpg";
import birb from "/images/birb-l.jpg";
import corgiSit from "/images/corgi-sit-l.jpg";
import { FaArrowRight } from "react-icons/fa";
import ShopForm from "./ShopForm";
import { useState } from "react";

const GridShop = () => {
  const [formToggle, setFormToggle] = useState(false);
  function handleSubCLick(value: boolean) {
    setFormToggle(value);
  }
  return (
    <div className="relative">
      <div className="max-w-[1240px] px-8 pt-16 py-10 md:py-16 mx-auto">
        <div className=" grid gap-4 grid-cols-6 grid-rows-2">
          <div className=" row-span-2 col-span-3 md:col-span-2 relative">
            <img
              src={catPlay}
              alt="/"
              className="h-full rounded-md object-cover"
            />
            <div className="absolute rounded-md bg-cyan-700/10 top-0 left-0 w-full h-full"></div>
          </div>
          <div className="col-span-3 md:col-span-3 relative">
            <img
              src={birb}
              alt="/"
              className="rounded-md h-full object-cover"
            />
            <div className="absolute rounded-md bg-cyan-700/10 top-0 left-0 w-full h-full"></div>
          </div>
          <div className="hidden md:block m-auto">
            <button
              onClick={() => {
                setFormToggle(true);
              }}
              className="button-outline-cyan hover:button-full-cyan lg:p-10 md:p-6 md:hover:p-6 lg:hover:p-10 flex"
            >
              Shop Now
              <FaArrowRight className="my-auto ml-2" />
            </button>
          </div>

          <div className="col-span-3 md:col-span-3 md:col-end-7 relative">
            <img
              src={corgiSit}
              alt="/"
              className="rounded-md h-full object-cover"
            />
            <div className="absolute rounded-md bg-cyan-700/10 top-0 left-0 w-full h-full"></div>
          </div>
        </div>
        <div className="pt-4 md:hidden">
          <button className="justify-center w-full button-outline-cyan hover:button-full-cyan flex ">
            Shop Now
            <FaArrowRight className="my-auto ml-2" />
          </button>
        </div>
      </div>
      <div className={formToggle ? "" : "hidden"}>
        <ShopForm onSubClick={handleSubCLick} />
      </div>
    </div>
  );
};

export default GridShop;
