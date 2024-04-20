import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Breed from "../data/BreedData";
import { DefaultURL } from "../data/BreedData";
interface FormElements {
  FirstName: string;
  LastName: string;
  email: string;
  phone: number;
  petSelect: string;
  breedSelect: string;
}

const ShopForm = (props: any) => {
  const { register, handleSubmit, resetField } = useForm<FormElements>();
  const onSubmit: SubmitHandler<FormElements> = (data) => {
    console.log(data);
    resetField("FirstName");
    resetField("LastName");
    resetField("email");
    resetField("phone");
    resetField("petSelect");
    resetField("breedSelect");
    setSelectBreed(4);
    setSelectPet(DefaultURL);
  };
  const [selectBreed, setSelectBreed] = useState(4);
  const [selectPet, setSelectPet] = useState(DefaultURL);
  function indexBreed(val: String) {
    switch (val) {
      case "dog":
        return 0;
      case "cat":
        return 1;
      case "birds":
        return 2;
      case "others":
        return 3;
      default:
        setSelectPet(DefaultURL);
        return 4;
    }
  }
  function indexPet(pet: String) {
    const l = Breed[selectBreed].length;
    for (let i = 0; i < l; i++) {
      if (Breed[selectBreed][i].name === pet) {
        return Breed[selectBreed][i].img;
      }
    }
    return DefaultURL;
  }
  return (
    <div className="top-0 left-0 z-10 absolute mx-[15vw] my-[5vh] py-10 max-h-max min-h-[625px] w-[70vw] bg-slate-200/[0.95]">
      <h1 className="text-center pb-8">Enquiry form</h1>
      <form
        className="px-[5vw] flex flex-col"
        id="ShopForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mx-auto space-y-2">
          <div className="flex ">
            <div className="flex flex-col mr-[4vw]  md:mr-4">
              <label htmlFor="FirstName">FirstName*</label>{" "}
              <input
                {...register("FirstName")}
                type="text"
                id="FirstName"
                className="pl-2 mt-2 h-[30px] max-w-max w-[28vw] rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="LastName">LastName*</label>{" "}
              <input
                {...register("LastName")}
                type="text"
                id="LastName"
                className="pl-2 mt-2 h-[30px] max-w-max w-[28vw] rounded-md outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email Address*</label>{" "}
            <input
              {...register("email")}
              type="text"
              id="email"
              className="pl-2 mt-2 h-[30px] rounded-md outline-none w-[60vw] max-w-[394px]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone">Phone Number</label>{" "}
            <input
              {...register("phone")}
              type="text"
              id="phone"
              className="pl-2 mt-2 h-[30px] max-w-[394px] w-[60vw] rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="petSelect">Choose a pet*</label>
            <select
              {...register("petSelect")}
              id="petSelect"
              className="mt-2 h-[30px] max-w-[394px] w-[60vw] rounded-md outline-none"
              onChange={(event) => {
                setSelectBreed(indexBreed(event.target.value));
              }}
            >
              <option value="" key="">
                --Please choose an Pet--
              </option>
              <option value="dog" key="dog">
                Dog
              </option>
              <option value="cat" key="cat">
                Cat
              </option>
              <option value="birds" key="birds">
                Birds
              </option>
              <option value="others" key="others">
                others
              </option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="breedSelect">Choose a breed*</label>
            <select
              {...register("breedSelect")}
              id="breedSelect"
              className="mt-2 h-[30px] max-w-[394px] w-[60vw] rounded-md outline-none"
              onChange={(event) => {
                setSelectPet(indexPet(event.target.value));
              }}
            >
              {selectBreed == 4 ? (
                <option id="empty" value="empty">
                  --Please Select a pet First--
                </option>
              ) : (
                <option value="">--Please choose an option--</option>
              )}
              {Breed[selectBreed].map((item) => {
                return (
                  <option id={item.name} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex flex-col items-center">
            <div className="max-w-[378px] pt-2 pb-4">
              <img
                src={selectPet}
                className="h-[20vh] min-h-[185px] object-cover"
                alt="no img"
              />
            </div>
            <button
              className="button-outline-cyan w-[190px]"
              onClick={() => {
                props.onSubClick(false);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShopForm;
