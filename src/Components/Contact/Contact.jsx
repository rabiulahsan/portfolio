import { useState } from "react";
import "./Contact.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {
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
      <SectionTitle heading="Let's Talk"></SectionTitle>
      <div className="flex justify-around items-center px-[15%] py-[5%]">
        <div className="flex flex-col w-1/2 gap-y-8 mx-auto">
          <div className=" flex items-center gap-5">
            <span className="text-blue-400 text-3xl">
              <AiOutlineMail></AiOutlineMail>
            </span>
            <span className="">
              <p className="text-black dark:text-white font-semibold text-xl">
                Email
              </p>
              <p className="text-gray-400 text-base">
                ra.rabiulahsan@gmail.com
              </p>
            </span>
          </div>
          <div className=" flex items-center gap-5">
            <span className="text-blue-400 text-3xl">
              <BsTelephone></BsTelephone>
            </span>
            <span className="">
              <p className="text-black dark:text-white font-semibold text-xl">
                Mobile
              </p>
              <p className="text-gray-400 text-base">+8801791474045</p>
            </span>
          </div>
          <div className=" flex items-center gap-5">
            <span className="text-blue-400 text-3xl ">
              <CiLocationOn></CiLocationOn>
            </span>
            <span className="">
              <p className="text-black dark:text-white font-semibold text-xl">
                Location
              </p>
              <p className="text-gray-400 text-base">Barishal, Bangladesh</p>
            </span>
          </div>
        </div>
        <div className="text-slate-700 dark:text-white flex flex-col gap-y-8 w-1/2 px-[5%]">
          <input type="text" placeholder="Name" className="input-style" />
          <input type="text" placeholder="Email" className="input-style" />
          <textarea placeholder="Message" className="input-style"></textarea>
          <button
            onMouseMove={(e) => handleMouseMove(e)}
            style={buttonStyles}
            className={`button px-6 py-2 mx-auto font-semibold text-lg rounded text-white inline-flex relative overflow-hidden bg-blue-400 before:bg-slate-700 dark:bg-transparent dark:border dark:border-blue-400  dark:before:bg-blue-400`}
          >
            <span className="relative z-10">Send Message</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
