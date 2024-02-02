import { useState } from "react";
import "./Contact.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  //for button
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

  //for scrolling
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", ".5 .6"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div id="contact" className="mb-10 lg:mb-0">
      <SectionTitle heading="Let's Talk"></SectionTitle>
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          // scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
        className="flex flex-col lg:flex-row justify-around items-center px-[15%] py-[5%]"
      >
        <div className="flex flex-col w-full lg:w-1/2 gap-y-8 mx-auto mb-8 lg:mb-0">
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
        <div className="text-slate-700 dark:text-white flex flex-col gap-y-8 w-full lg:w-1/2 px-[5%]">
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
      </motion.div>
    </div>
  );
};

export default Contact;
