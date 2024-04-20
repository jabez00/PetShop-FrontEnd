import FI from "/images/dog-cone.jpg";
const Commitment = () => {
  return (
    <div className="relative mt-10">
      <img src={FI} className="h-[50vh] w-full  object-cover" alt="" />
      <div className="h-[40vh] absolute top-[5vh] right-[5vh] lg:w-1/3 w-1/2 bg-white border-cyan-300 border-8  border-double ">
        <div className="md:px-10 md:py-10 px-6 py-8 text-stone-800 font-montserrat space-y-2">
          <h2 className="md:text-xl text-lg font-semibold">OUR COMMITMENT</h2>
          <p className="text-sm md:text-base">
            <b className="font-semibold md:text-lg text-base">
              {" "}
              • Seamless Process:{" "}
            </b>{" "}
            From rescue to rehoming, we handle every step with care and
            efficiency.
          </p>
          <p className="text-sm md:text-base">
            <b className="font-semibold md:text-lg text-base">
              • Lifetime Support:{" "}
            </b>
            We offer ongoing support and guidance to ensure every animal finds a
            loving forever home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Commitment;
