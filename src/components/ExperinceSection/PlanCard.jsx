import React from "react";
import ContentWithIcon from "./ContentWithIcon";

const PlanCard = ({ icon, title, percentage, details }) => {
  return (
    <div className="pb-6 bg-gray-600 text-white flex flex-col gap-8  group relative z-10 md:hover:scale-110 hover:scale-105 transition-all duration-500">
      <div className=" w-14 h-14 absolute rounded-1/2 top-7 left-7 -z-10 bg-gradient-to-tr to-three from-four group-hover:w-full group-hover:h-full group-hover:rounded-none transition-all duration-500 group-hover:top-0 group-hover:left-0" />
      <div className="p-6 flex flex-col gap-4 ">
        <div className="bg-gradient-to-tr to-three from-four rounded-1/2 p-2 group-hover:bg-white group-hover:text-two w-fit h-fit transition-all duration-500 group-hover:bg-none">
          {icon}
        </div>
        <p className="text-2xl">{title}</p>
      </div>
      <div className="px-6 text-5xl">% {percentage}</div>
      <div className="pl-6 flex flex-col gap-2 ">
        {details.map((item, idx) => (
          <ContentWithIcon content={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default PlanCard;
