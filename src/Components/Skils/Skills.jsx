import SectionTitle from "../SectionTitle/SectionTitle";
import "./Skills.css";
import { BsBraces, BsServer } from "react-icons/bs";
import ProgressBar from "./ProgressBar";
import FadeAnimations from "../FadeAnimations/FadeAnimations";

const Skills = () => {
  // IoIosArrowDown
  // IoIosArrowUp
  const frontEnd = [
    { name: "HTML", learn: "80" },
    { name: "CSS", learn: "70" },
    { name: "JavaScript", learn: "65" },
    { name: "React", learn: "60" },
    { name: "Tailwind", learn: "80" },
    { name: "MUI", learn: "60" },
    { name: "Framer Motion", learn: "60" },
  ];

  const backEnd = [
    { name: "Node", learn: "40" },
    { name: "ExpressJS", learn: "50" },
    { name: "Firebase", learn: "50" },
    { name: "MongoDB", learn: "50" },
  ];

  return (
    <div id="skill" className="mb-10 lg:mb-0">
      <SectionTitle heading="Skills"></SectionTitle>
      <div className="flex flex-col lg:flex-row justify-center gap-y-6 gap-x-[12%] mx-auto  px-[10%] py-[4%]">
        <div className="w-full lg:w-[30%]">
          <FadeAnimations
            direction="right"
            once={false}
            delay={0.2}
            duration={0.4}
          >
            <p className="flex justify-center items-center dark:text-white ">
              <span className="mr-4 text-blue-400 font-bold text-3xl">
                <BsBraces></BsBraces>
              </span>
              <span className="text-xl font-semibold">
                Front End Development
              </span>
            </p>
            <div className="mt-14 ">
              {frontEnd.map((skill) => (
                <ProgressBar
                  key={skill.name}
                  name={skill.name}
                  learn={skill.learn}
                ></ProgressBar>
              ))}
            </div>
          </FadeAnimations>
        </div>

        {/* backend  */}
        <div className="w-full lg:w-[30%]">
          <FadeAnimations
            direction="left"
            once={false}
            delay={0.2}
            duration={0.4}
          >
            <p className="flex justify-center  items-center dark:text-white ">
              <span className="mr-4 text-blue-400 font-bold text-3xl">
                <BsServer></BsServer>
              </span>
              <span className="text-xl font-semibold">
                Back End Development
              </span>
            </p>
            <div className="mt-14 ">
              {backEnd.map((skill) => (
                <ProgressBar
                  key={skill.name}
                  name={skill.name}
                  learn={skill.learn}
                ></ProgressBar>
              ))}
            </div>
          </FadeAnimations>
        </div>
      </div>
    </div>
  );
};

export default Skills;
