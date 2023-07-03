import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import "./Header.css";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

const Header = () => {
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

  const handleButtonClick = () => {
    const fileUrl =
      "https://drive.google.com/file/d/1bnqiDpGTjVy1KgFha5D3GZlKeg2-Q7lF/view?usp=sharing";
    window.open(fileUrl, "_blank");
  };

  return (
    <div className="px-[10%] py-[8%] gap-y-6  flex justify-around items-center flex-col-reverse lg:flex-row ">
      <div className="">
        <ul className="text-2xl dark:text-white flex lg:flex-col gap-4 items-center">
          <li>
            <a
              title="Github Profile link"
              href="https://github.com/rabiulahsan"
              target="blank"
              className="hover:text-blue-400"
            >
              <AiOutlineGithub></AiOutlineGithub>
            </a>
          </li>
          <li>
            <a
              title="Linkedin Profile link"
              href="https://www.linkedin.com/in/rabiul-ahsan/"
              target="blank"
              className="hover:text-blue-400"
            >
              <AiFillLinkedin></AiFillLinkedin>
            </a>
          </li>
          <li>
            <a
              title="Instagram Profile link"
              href="https://www.instagram.com/_rabiul_ahsan_/"
              target="blank"
              className="hover:text-blue-400"
            >
              <AiOutlineInstagram></AiOutlineInstagram>
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-1/3 text-center lg:text-left">
        <p className="text-black dark:text-white text-3xl lg:text-5xl font-bold">
          Rabiul Ahsan
        </p>
        <p className="text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-blue-400 mt-3">
          I&apos;m a{" "}
          <span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "Web Developer...",
                1500,
                "React Developer...",
                1500,
                "Front End Developer...",
                1500,
                "MERNstack Developer...",
                1500,
              ]}
              speed={40}
              repeat={Infinity}
            />
          </span>
        </p>
        <p className="text-gray-600 dark:text-gray-400 my-5">
          I am a MERN stack Developer. I build dynamic and attractive website
          for you.
        </p>
        <div className="flex gap-x-6 justify-center lg:justify-start">
          <a
            href=""
            target="blank"
            download="Rabiuls Resume.pdf"
            onClick={handleButtonClick}
          >
            <button
              onMouseMove={(e) => handleMouseMove(e)}
              style={buttonStyles}
              className={` button px-6 py-2 font-semibold text-lg rounded text-white inline-flex relative overflow-hidden bg-blue-400 before:bg-slate-700 dark:bg-blue-400 dark:border dark:border-blue-400  dark:before:bg-slate-900`}
            >
              <span className="relative z-10">Resume</span>
            </button>
          </a>
          <Link to="contact">
            <button
              onMouseMove={(e) => handleMouseMove(e)}
              style={buttonStyles}
              className={`button px-6 py-2 font-semibold text-lg rounded text-white inline-flex relative overflow-hidden bg-blue-400 before:bg-slate-700 dark:bg-transparent dark:border dark:border-blue-400  dark:before:bg-blue-400`}
            >
              <span className="relative z-10">Hire Me</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="header-img ">
        <img
          src="https://i.ibb.co/mFY4YvC/rabiul.jpg"
          className="h-[200px] lg:h-[300px] border-4 border-gray-600 dark:border-blue-200"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
