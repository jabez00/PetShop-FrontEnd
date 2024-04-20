import shopCardData from "../data/ShopCardData.tsx";

const Shop = () => {
  return (
    <div className="max-w-[1240px] px-12 mx-auto text-center py-12 space-y-6">
      <a className="text-purple-800  font-poppins bg-slate-100/70 rounded-xl py-1 px-3">
        Meet the animals
      </a>
      <p className="headShop">Companions Waiting for Adoption</p>
      <div className="text-gray-800 text-lg max-w-[810px] mx-auto">
        Explore our pet adoption section, where furry friends await loving
        homes, bringing joy to families and wagging tails to hearts.
      </div>
      <div className="max-w-[1240px] mx-auto grid grid-cols-3 gap-4">
        {shopCardData.map((item) => {
          return (
            <div className=" hover:scale-105 button-visible duration-200">
              <div className="relative">
                <img src={item.url} alt="/" />
              </div>
              <div className="pt-4 text-left space-y-1 text-fuchsia-950 font-montserrat">
                <p className="md:text-xl text-base font-semibold">
                  {item.id} - {item.name} &#40;{item.breed}&#41;
                </p>
                <div className="md:flex md:flex-row md:space-x-2 md:text-sm text-xs">
                  <div className="flex space-x-2">
                    <p className="font-medium">Gene:</p>
                    <p> {item.gender}</p>
                  </div>
                  <div className="flex space-x-2">
                    <p className="font-medium">Age:</p> <p>{item.age}</p>
                  </div>
                </div>
                <p className="font-semibold md:text-base text-xs">
                  {item.price} INR
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
