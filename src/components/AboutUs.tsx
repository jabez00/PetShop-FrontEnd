import FI from "/images/Bborder-collie-p-l.jpg";
const AboutUs = () => {
  return (
    <div className="relative">
      <img src={FI} className="h-[50vh] w-full  object-cover" alt="" />
      <div className="h-[40vh] absolute top-[5vh] left-[5vh] lg:w-1/3 w-1/2 bg-white border-purple-300 border-8  border-double ">
        <div className="md:px-10 md:py-12 px-6 py-8 text-stone-800 font-montserrat space-y-2">
          <h2 className="md:text-xl text-lg font-semibold">ABOUT US</h2>
          <p className="md:text-lg">
            <b className="font-semibold"> • </b> From rescue to rehoming, we
            handle every step with care and efficiency.
          </p>
          <p className="md:text-lg ">
            <b className="font-semibold"> • </b>
            Committed to providing a safe haven and loving care for all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
