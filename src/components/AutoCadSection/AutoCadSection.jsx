import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AutoCadSection = ({ data }) => {
  const settings = {
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true
  };

  return (
    <div>
      <div
        data-aos="zoom-out"
        data-aos-offset="200"
        className="flex flex-col gap-2 items-center text-center my-10"
      >
        <div className="text-lg text-four">Some Of My Work</div>
        <div className="text-3xl text-two">AutoCad</div>
      </div>
      <div>
        <div className="w-10/12 mx-auto">
          <Slider
            {...settings}
            autoplay={true}
            autoplaySpeed={4000}
          >
            {data.map((item) => (
              <LazyLoadImage src={item.image} alt={item.image} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AutoCadSection;
