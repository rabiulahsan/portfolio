import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./About.css";

const About = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const x = e.pageX - e.currentTarget.offsetLeft;
    const y = e.pageY - e.currentTarget.offsetTop;

    setCoordinates({ x, y });
  };
  const buttonStyles = {
    "--before-top": `${coordinates.y}px`,
    "--before-left": `${coordinates.x}px`,
  };

  return (
    <>
      <SectionTitle heading="About Me"></SectionTitle>
      <div className="px-[10%] py-[4%] flex justify-around items-center">
        <img src="/src/assets/rabiul.jpg" alt="" className="h-[300px]" />
        <div className="w-1/2 px-[4%]">
          <p className="w-[80%] text-gray-600 dark:text-gray-400 mb-5 text-lg">
            Hello! I am Rabiul Ahsan. I live in Barishal, Bangladesh. Right now,
            i am an undergraduate in Computer Science and Engineering at UGV. I
            am a Web Developer. I can build a website by using MERNstack
            technology. Besides it, I learned some tools, which makes a website
            looks more attractive and efficient. Some of my projects are given
            in this portfolio.
          </p>
          <span>
            <a href="">
              <button
                onMouseMove={(e) => handleMouseMove(e)}
                style={buttonStyles}
                className={`button px-6 py-2 font-semibold text-lg rounded text-white inline-flex relative overflow-hidden bg-blue-400 before:bg-slate-700 dark:bg-blue-400 dark:border dark:border-blue-400  dark:before:bg-slate-900`}
              >
                <span className="relative z-10">Contact Me</span>
              </button>
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default About;
