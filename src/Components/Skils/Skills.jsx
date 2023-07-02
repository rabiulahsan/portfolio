import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Skills.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ProgressBar from "./ProgressBar";

const Skills = () => {
  const [frontOpen, setFrontOpen] = useState(false);
  const [backOpen, setBackOpen] = useState(false);
  // IoIosArrowDown
  // IoIosArrowUp
  const frontEnd = [
    { name: "HTML", learn: "80%" },
    { name: "CSS", learn: "70%" },
    { name: "JavaScript", learn: "65%" },
    { name: "React", learn: "60%" },
    { name: "Tailwind", learn: "80%" },
    { name: "MUI", learn: "70%" },
  ];

  const backEnd = [
    { name: "Node", learn: "40%" },
    { name: "ExpressJS", learn: "50%" },
    { name: "Firebase", learn: "50%" },
    { name: "MongoDB", learn: "40%" },
    { name: "JWT", learn: "60%" },
  ];

  return (
    <div>
      <SectionTitle heading="Skills"></SectionTitle>
      <div className="flex justify-center gap-x-[12%] mx-auto  px-[10%] py-[4%]">
        <div className="w-[30%]">
          <p className="flex justify-between  items-center dark:text-white ">
            {" "}
            <span className="text-xl font-semibold">Front End Development</span>
            <span
              className="cursor-pointer text-2xl"
              onClick={() => {
                setFrontOpen(!frontOpen);
              }}
            >
              {frontOpen ? (
                <IoIosArrowDown></IoIosArrowDown>
              ) : (
                <IoIosArrowUp></IoIosArrowUp>
              )}
            </span>
          </p>
          {frontOpen ? (
            <div className="mt-10 ">
              {frontEnd.map((skill) => (
                <ProgressBar
                  key={skill.name}
                  name={skill.name}
                  learn={skill.learn}
                ></ProgressBar>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>

        {/* backend  */}
        <div className="w-[30%]">
          <p className="flex justify-between  items-center dark:text-white ">
            {" "}
            <span className="text-xl font-semibold">Back End Development</span>
            <span
              className="cursor-pointer text-2xl"
              onClick={() => {
                setBackOpen(!backOpen);
              }}
            >
              {backOpen ? (
                <IoIosArrowUp></IoIosArrowUp>
              ) : (
                <IoIosArrowDown></IoIosArrowDown>
              )}
            </span>
          </p>
          {backOpen ? (
            <div className="mt-10 ">
              {backEnd.map((skill) => (
                <ProgressBar
                  key={skill.name}
                  name={skill.name}
                  learn={skill.learn}
                ></ProgressBar>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
