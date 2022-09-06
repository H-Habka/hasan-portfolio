import PlanCard from "./PlanCard";
import { TbHeartPlus } from "react-icons/tb";
import { FaCrown } from "react-icons/fa";
import { AiTwotoneFire } from "react-icons/ai";
import { SiRhinoceros, SiAutodesk, SiBentley } from "react-icons/si";

const ExperinceSection = () => {
  return (
    <div>
      <div
        data-aos="zoom-out"
        data-aos-offset="200"
        className="flex flex-col gap-2 items-center text-center my-10"
      >
        <div className="text-lg text-four">Get To Know</div>
        <div className="text-3xl text-two">My Experince</div>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:gap-8 px-4 lg:px-8 xs:grid-cols-2 lg:grid-cols-3 ">
        <PlanCard
          icon={<SiAutodesk size={44} />}
          title="AutoCad"
          percentage="75"
          details={[
            "1 year of Experince",
            "More then 10 Designs",
            "Create General Arrangement for DocWise",
          ]}
        />
        <PlanCard
          icon={<SiRhinoceros size={44} />}
          title="Rhino"
          percentage="80"
          details={[
            "1 year of Experince",
            "More Than 5 Ships ",
            "Good knowledge With V-Ray Extension",
          ]}
        />
        <PlanCard
          icon={<SiBentley size={44} />}
          title="MaxSurf"
          percentage="75"
          details={[
            "1 year of Experince",
            "More Than 10 Studies",
            "Study of tilt, Drowning and Malfunctions",
          ]}
        />
      </div>
    </div>
  );
};

export default ExperinceSection;
