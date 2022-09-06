import React from "react";
import { AiOutlineProject } from "react-icons/ai";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { FaHandPointDown, FaMedal } from "react-icons/fa";
import { MdPeopleOutline } from "react-icons/md";
const HeaderSection = () => {
  return (
    <div
      id="home"
      className="flex flex-col gap-4 items-center  w-screen justify-between md:pt-20 pt-10"
    >
      <div className="flex flex-col gap-2 text-white text-center">
        <p data-aos="fade-down" data-aos-delay="400" className="text-xl">
          Hello I'm
        </p>
        <p
          data-aos="fade-down"
          data-aos-delay="600"
          className="text-4xl text-two"
        >
          Hasan Habka
        </p>
        <p
          data-aos="fade-down"
          data-aos-delay="800"
          className="text-five text-lg"
        >
          Ships Designer
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-8/12 mx-auto md:gap-6 gap-4 ">
        <div className="flex md:flex-col gap-4 text-five  md:px-[50px] ">
          <a
            rel="noreferrer"
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-offset="-100"
            href="https://www.linkedin.com/in/hasan-habka-374b81220/"
            target="_blank"
          >
            <BsLinkedin size={30} className="hover:text-[#0077b5]" />
          </a>
          <a
            rel="noreferrer"
            data-aos="fade-right"
            data-aos-delay="800"
            data-aos-offset="-100"
            href="https://www.facebook.com/hasan.habka.9"
            target="_blank"
          >
            <BsFacebook size={30} className="hover:text-[#4267B2]" />
          </a>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-offset="-100"
          data-aos-delay="800"
          className="w-[320px] rounded-t-full bg-gradient-to-b from-two to-transparent "
        >
          <img src={require("../images/profile.webp")} alt="profile" />
        </div>
        <div className="flex justify-between flex-col gap-2 ">
          <div
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-delay="0"
            className="flex-1 hover:text-five py-4 border-two hover:bg-transparent duration-1000 transition-all ease-in-out  border-2 rounded-xl bg-two flex flex-col gap-2 items-center text-center px-2"
          >
            <div>
              <FaMedal className="text-xl md:text-3xl" />
            </div>
            <div>Experince</div>
            <div>+1 year</div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-delay="200"
            className="flex-1 hover:text-five py-4 border-two hover:bg-transparent duration-1000 ease-in-out  border-2 rounded-xl bg-two flex flex-col gap-2 items-center text-center px-2"
          >
            <div>
              <MdPeopleOutline className="text-xl md:text-3xl" />
            </div>
            <div>Followers</div>
            <div>+500 followers</div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-delay="400"
            className="flex-1 hover:text-five py-4 border-two hover:bg-transparent duration-1000 ease-in-out border-2 rounded-xl bg-two flex flex-col gap-2 items-center text-center px-2"
          >
            <div>
              <AiOutlineProject className="text-xl md:text-3xl" />
            </div>
            <div>Designs</div>
            <div>+5 Completed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
