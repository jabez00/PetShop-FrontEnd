import Marquee from "react-fast-marquee";
import { HiOutlineSparkles } from "react-icons/hi";

const ScrollText = () => {
  return (
    <div className="py-8 bg-gradient-to-tr from-purple-500 to-cyan-500 text-white">
      <Marquee>
        <h2 className="ml-6">MAKING PETS & PEOPLE BEST BUDS</h2>
        <HiOutlineSparkles className="mx-4" size={30} />
        <h2 className="ml-6">MAKING PETS & PEOPLE BEST BUDS</h2>
        <HiOutlineSparkles className="mx-4" size={30} />
        <h2 className="ml-6">MAKING PETS & PEOPLE BEST BUDS</h2>
        <HiOutlineSparkles className="mx-4" size={30} />
      </Marquee>
    </div>
  );
};

export default ScrollText;
