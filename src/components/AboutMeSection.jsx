import React, { useEffect, useState } from "react";
import { AiOutlineProject } from "react-icons/ai";
import { MdPeopleOutline } from "react-icons/md";
import { FaMedal } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

const data = [
  {
    id: 0,
    image: "aboutMe.webp",
    text: "hello my name is hasan salah habka and i worked as ships designer one",
  },
  {
    id: 1,
    image: "certificate1.webp",
    text: "hello my name is hasan salah habka and i worked as ships designer two",
  },
  {
    id: 2,
    image: "certificate2.webp",
    text: "hello my name is hasan salah habka and i worked as ships designer three",
  },
];
const AboutMeSection = () => {
  const [currentActive, setCurrentActive] = useState(0);
  const [onHover, setOnHover] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      if (onHover) return;
      setCurrentActive((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [onHover]);
  return (
    <div
      id="about"
      className="w-screen lg:h-screen flex flex-col gap-4 items-center pt-10"
    >
      <div
        data-aos="zoom-out"
        data-aos-offset="200"
        className="flex flex-col gap-2 items-center text-center"
      >
        <div className="text-lg text-four">Get To Know</div>
        <div className="text-3xl text-two">About Me</div>
      </div>
      <div className="  flex flex-col md:flex-row gap-8 md:gap-0 w-11/12 md:w-8/12 mx-auto relative mt-10">
        <div
          data-aos="fade-right"
          data-aos-offset="150"
          className=" flex-1 relative min-h-[50vh] md:min-h-[0] z-20 "
        >
          {data.map((item, idx) => (
            <div
              key={idx}
              className={`absolute top-0 transition-all duration-1000  w-[280px] ${
                item.id === currentActive
                  ? "md:left-0 left-1/2 md:-translate-x-0 -translate-x-1/2 opacity-100 "
                  : "opacity-0 md:-left-1/2 left-0 -translate-x-0"
              }`}
            >
              {item.id === currentActive ? (
                <>
                  <LazyLoadImage
                    alt={item.image}
                    className="w-[280px] h-[380px] md:hover:scale-[2] hover:scale-150  transition-all duration-700 "
                    src={require(`../images/aboutMe/${item.image}`)}
                    delayMethod="debounce"
                    placeholder={
                      <div
                        alt="test"
                        style={{
                          height: "100px",
                          backgroundColor: "gray",
                        }}
                      />
                    }
                    onMouseEnter={() => {
                      setOnHover(true);
                    }}
                    onMouseLeave={() => {
                      setOnHover(false);
                    }}
                  />
                </>
              ) : null}
            </div>
          ))}
        </div>
        <div className="flex  gap-8 flex-1   p-2 min-h-[380px]">
          <div
            data-aos="fade-left"
            data-aos-offset="200"
            className="text-five relative min-h-[120px] w-full"
          >
            {data.map((item, idx) => (
              <div
                key={idx}
                className={`transition-all z-10 h-full w-full duration-1000 absolute top-0  flex items-center ${
                  currentActive === item.id
                    ? "right-0 opacity-100"
                    : "-right-1/4 opacity-0"
                }`}
              >
                {currentActive === item.id ? (
                  <p className="p-2 px-8 text-xl">{item.text}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
