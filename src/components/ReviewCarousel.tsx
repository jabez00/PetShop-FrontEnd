import { useState } from "react";
import { fullStarURL, emptyStarURL } from "../data/ReviewData";
import ReviewData from "../data/ReviewData";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const ReviewCarousel = () => {
  var w = window.innerWidth;
  const [numberScroll] = useState(() => {
    if (w >= 1024) {
      return 3;
    } else if (w >= 768) {
      return 2;
    } else if (w >= 640) {
      return 1;
    }
  });
  //it works but causes a number of re-renders making it crash
  let carNum = [0];
  if (numberScroll == 3) {
    carNum = [0, 1, 2];
  } else if (numberScroll == 2) {
    carNum = [0, 1];
  }
  const [reviewArray, setReviewArray] = useState(carNum);
  const nextReview = () => {
    if (numberScroll == 3) {
      setReviewArray(
        reviewArray[2] + 1 == ReviewData.length
          ? [reviewArray[1], reviewArray[2], 0]
          : [reviewArray[1], reviewArray[2], reviewArray[2] + 1]
      );
    } else if (numberScroll == 2) {
      setReviewArray(
        reviewArray[1] + 1 == ReviewData.length
          ? [reviewArray[1], 0]
          : [reviewArray[1], reviewArray[1] + 1]
      );
    } else {
      setReviewArray(
        reviewArray[0] + 1 == ReviewData.length ? [0] : [reviewArray[0] + 1]
      );
    }
  };
  const prevReview = () => {
    if (numberScroll == 3) {
      setReviewArray(
        reviewArray[0] == 0
          ? [ReviewData.length - 1, reviewArray[0], reviewArray[1]]
          : [reviewArray[0] - 1, reviewArray[0], reviewArray[1]]
      );
    } else if (numberScroll == 2) {
      setReviewArray(
        reviewArray[0] == 0
          ? [ReviewData.length - 1, 0]
          : [reviewArray[0] - 1, reviewArray[0]]
      );
    } else {
      setReviewArray(
        reviewArray[0] == 0 ? [ReviewData.length - 1] : [reviewArray[0] - 1]
      );
    }
  };

  return (
    <div className=" max-w-[1240px] mx-12 xl:mx-auto text-center pt-16 relative">
      <a className="text-purple-800  font-poppins bg-slate-100/70 rounded-xl py-1 px-3">
        Testimonials
      </a>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 pt-8 gap-4">
        {reviewArray.map((review) => {
          let item = ReviewData[review];
          return (
            <div className="flex p-8 h-[50vh] bg-slate-100 rounded-lg">
              <div>
                <div className="mb-2 flex">
                  <img
                    src={item.url}
                    alt=""
                    className="h-20 w-20 rounded-full object-cover"
                  />
                  <div className="my-auto ml-5 flex flex-col">
                    <p className="text-lg">{item.name}</p>
                    <div className="flex">
                      {item.stars.map((boo) => (
                        <img src={boo ? fullStarURL : emptyStarURL} alt="" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="pr-8 text-left">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button>
        <IoIosArrowDropleftCircle
          className="absolute top-[60%] -left-4"
          onClick={prevReview}
          size={30}
        />
      </button>
      <button>
        <IoIosArrowDroprightCircle
          className="absolute top-[60%] -right-4"
          onClick={nextReview}
          size={30}
        />
      </button>
    </div>
  );
};

export default ReviewCarousel;
