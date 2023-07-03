import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Skills.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsBraces, BsServer } from "react-icons/bs";
import ProgressBar from "./ProgressBar";

const Skills = () => {
  const [frontOpen, setFrontOpen] = useState(false);
  const [backOpen, setBackOpen] = useState(false);
  // IoIosArrowDown
  // IoIosArrowUp
  const frontEnd = [
    { name: "HTML", learn: "80" },
    { name: "CSS", learn: "70" },
    { name: "JavaScript", learn: "65" },
    { name: "React", learn: "60" },
    { name: "Tailwind", learn: "80" },
    { name: "MUI", learn: "70" },
  ];

  const backEnd = [
    { name: "Node", learn: "40" },
    { name: "ExpressJS", learn: "50" },
    { name: "Firebase", learn: "50" },
    { name: "MongoDB", learn: "40" },
    { name: "JWT", learn: "60" },
  ];

  return (
    <div id="skill" className="mb-10 lg:mb-0">
      <SectionTitle heading="Skills"></SectionTitle>
      <div className="flex flex-col lg:flex-row justify-center gap-y-6 gap-x-[12%] mx-auto  px-[10%] py-[4%]">
        <div className="w-full lg:w-[30%]">
          <p className="flex justify-between  items-center dark:text-white ">
            {" "}
            <span className="flex items-center">
              <span className="mr-4 text-blue-400 font-bold text-3xl">
                <BsBraces></BsBraces>
              </span>
              <span className="text-xl font-semibold">
                Front End Development
              </span>
            </span>
            <span
              className="cursor-pointer text-2xl"
              onClick={() => {
                setFrontOpen(!frontOpen);
              }}
            >
              {frontOpen ? (
                <IoIosArrowUp></IoIosArrowUp>
              ) : (
                <IoIosArrowDown></IoIosArrowDown>
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
        <div className="w-full lg:w-[30%]">
          <p className="flex justify-between  items-center dark:text-white ">
            {" "}
            <p className="flex items-center">
              <span className="mr-4 text-blue-400 font-bold text-3xl">
                <BsServer></BsServer>
              </span>
              <span className="text-xl font-semibold">
                Back End Development
              </span>
            </p>
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
