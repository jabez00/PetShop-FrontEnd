import { useState } from "react";
import { IoClose, IoPaw, IoSearch } from "react-icons/io5";
import { SlMenu } from "react-icons/sl";

const NavBar = () => {
  const [hamToggle, useHamToggle] = useState(false);
  function handleHamToggle() {
    useHamToggle(!hamToggle);
  }
  return (
    <div className="py-4 px-8 flex w-full justify-between mx-auto">
      <div
        className={
          hamToggle
            ? "hidden"
            : "flex my-auto sm:absolute md:relative md:top-0 md:left-0 sm:top-8 sm:left-8 space-x-2"
        }
      >
        <IoPaw className="text-purple-500 text-3xl" />
        <h1 className="text-purple-600 font-montserrat  text-2xl font-semibold">
          PetPals
        </h1>
      </div>
      <div className="md:block hidden">
        <ul className=" flex space-x-6">
          <li className="navList">Home</li>
          <li className="navList">About</li>
          <li className="navList">Shop</li>
          <li className="navList">Service</li>
          <li className="navList">Contact</li>
          <li className="navList">
            <IoSearch />
          </li>
        </ul>
      </div>
      <div className="md:hidden flex w-full">
        <button
          className="top-4 right-4 absolute z-20 p-6"
          onClick={handleHamToggle}
        >
          {hamToggle ? <IoClose size={20} /> : <SlMenu />}
        </button>
        <div
          className={
            hamToggle
              ? "px-20 py-10  absolute bg-slate-400/90 z-10 w-full mx-auto"
              : "hidden"
          }
        >
          <ul className="space-y-4 flex flex-col">
            <li className="hamList">Home</li>
            <li className="hamList">About</li>
            <li className="hamList">Shop</li>
            <li className="hamList">Service</li>
            <li className="hamList">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
