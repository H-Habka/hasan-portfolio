import React, { useState, useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useMediaQuery } from "react-responsive";

const CarosalSection = ({ data, title, imagesFolder }) => {
  const [currentActive, setCurrentActive] = useState(0);
  const totlaImages = data.length;
  const sliderRef = useRef();
  const thumbnailRef = useRef();
  const isLaptop = useMediaQuery({
    query: "(min-width : 768px)",
  });
  const touchRef = useRef({ start: 0, end: 0 });
  console.log(touchRef);

  const nextImage = () => {
    if (sliderRef?.current) {
      if (isLaptop) {
        sliderRef.current.scrollTop =
          currentActive === totlaImages - 1
            ? 0
            : sliderRef?.current?.scrollTop +
              thumbnailRef?.current?.clientHeight +
              4;
      } else {
        sliderRef.current.scrollLeft =
          currentActive === totlaImages - 1
            ? 0
            : sliderRef?.current?.scrollLeft +
              thumbnailRef?.current?.clientWidth +
              4;
      }
    }
    setCurrentActive((prev) => (prev === totlaImages - 1 ? 0 : prev + 1));
  };
  const prevImage = () => {
    if (sliderRef?.current) {
      if (isLaptop) {
        sliderRef.current.scrollTop =
          currentActive === 0
            ? thumbnailRef?.current?.clientHeight * (totlaImages + 8)
            : sliderRef?.current?.scrollTop -
              thumbnailRef?.current?.clientHeight -
              4;
      } else {
        sliderRef.current.scrollLeft =
          currentActive === 0
            ? thumbnailRef?.current?.clientWidth * (totlaImages + 8)
            : sliderRef?.current?.scrollLeft -
              thumbnailRef?.current?.clientWidth -
              4;
      }
    }
    setCurrentActive((prev) => (prev === 0 ? totlaImages - 1 : prev - 1));
  };

  const touchStartHandler = (e) => {
    touchRef.current = { end: 0, start: e.changedTouches[0].clientX };
  };
  const touchEndHandler = (e) => {
    touchRef.current = {
      ...touchRef.current,
      end: e.changedTouches[0].clientX,
    };
    if (touchRef.current.end - touchRef.current.start >= 100) prevImage();
    if (touchRef.current.end - touchRef.current.start <= -100) nextImage();
  };

  return (
    <div className="">
      <div
        data-aos="zoom-out"
        data-aos-offset="200"
        className="flex flex-col gap-2 items-center text-center"
      >
        <div className="text-lg text-four">Some Of My Work</div>
        <div className="text-3xl text-two">{title}</div>
      </div>
      <div className="flex flex-col md:flex-row md:h-[92vh] p-2 ">
        <div className="w-full md:w-9/12 object-cover  relative min-h-[50vh] sm:min-h-[70vh] ">
          {data.map((item) => (
            <div
              onTouchStart={touchStartHandler}
              onTouchEnd={touchEndHandler}
              key={item.id}
              className={`w-full h-[50vh] sm:pl-8 sm:pt-8 sm:pr-8 md:pr-2 sm:pb-2 md:pb-8  sm:h-[70vh] md:h-full absolute transition-all duration-1000 ${
                item.id === currentActive ? "opacity-100" : "opacity-0"
              }`}
            >
              {item.id === currentActive && (
                <LazyLoadImage
                  className="w-full h-full max-w-[1000px] object-fit"
                  src={require(`../images/${imagesFolder}/${data[currentActive].image}`)}
                  alt={data[currentActive].image}
                />
              )}
            </div>
          ))}
        </div>
        <div className="w-full md:w-3/12 flex md:flex-col justify-between items-center">
          <button className="m-1 sm:m-4" onClick={prevImage}>
            {isLaptop ? (
              <BsFillArrowUpCircleFill
                className="text-gray-500 hover:text-gray-400"
                size={24}
              />
            ) : (
              <BsFillArrowLeftCircleFill
                className="text-gray-500 hover:text-gray-400"
                size={24}
              />
            )}
          </button>
          <div
            ref={sliderRef}
            className="md:flex md:flex-col max-h-full overflow-auto scroll-smooth relative whitespace-nowrap"
          >
            {data.map((item, idx) => (
              <div
                key={idx}
                ref={idx === 0 ? thumbnailRef : null}
                className=" m-2 sm:h-40 sm:w-40 h-14 w-14 md:w-full inline-block "
              >
                <LazyLoadImage
                  onClick={() => setCurrentActive(item.id)}
                  className={`${
                    currentActive === item.id
                      ? "brightness-100"
                      : "brightness-[0.4] "
                  } cursor-pointer w-full h-full`}
                  src={require(`../images/${imagesFolder}/${item.image}`)}
                  alt={item.image}
                />
              </div>
            ))}
          </div>
          <button className="m-1 sm:m-4" onClick={nextImage}>
            {isLaptop ? (
              <BsFillArrowDownCircleFill
                className="text-gray-500 hover:text-gray-400"
                size={24}
              />
            ) : (
              <BsFillArrowRightCircleFill
                className="text-gray-500 hover:text-gray-400"
                size={24}
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarosalSection;
