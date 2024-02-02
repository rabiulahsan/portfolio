import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState } from "react";

/* eslint-disable react/prop-types */
const LargeSingleProject = ({ project }) => {
  const { img, name, technologies, description, liveSite, client, backend } =
    project;

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
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        // scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      className="border border-[rgba(0,0,0,0.1)]  shadow-md dark:shadow-lg shadow-[rgba(0,0,0,0.1)] dark:shadow-[rgba(0,0,0,0.4)] py-8 px-5 mb-[4%] flex gap-x-6 items-center rounded-xl "
    >
      <div className="w-2/5">
        <img src={img} alt="" className="w-full h-[220px]" />
      </div>
      <div className="w-3/5">
        <p className="text-slate-600 dark:text-gray-200 font-bold text-3xl">
          {name}
        </p>
        <p className="text-slate-600 dark:text-gray-200 leading-6 mt-4">
          <span className="font-semibold text-lg ">Technology used: </span>
          {technologies}
        </p>
        <p className="text-slate-600 dark:text-gray-200 leading-6 my-4">
          <span className="font-semibold text-lg ">Description: </span>
          {description}
        </p>
        <div className=" flex  flex-row gap-x-4  items-center mt-auto">
          {/* live site lnk  */}
          <a href={liveSite} target="blank">
            <button
              onMouseMove={(e) => handleMouseMove(e)}
              style={buttonStyles}
              className={` button px-3 py-[6px] font-semibold text-base rounded text-white inline-flex relative overflow-hidden bg-blue-400 before:bg-slate-700 dark:bg-blue-400 dark:border dark:border-blue-400  dark:before:bg-slate-900`}
            >
              <span className="relative z-10">Live Site</span>
            </button>
          </a>

          {/* client site code link  */}
          <a href={client} target="blank">
            <button
              onMouseMove={(e) => handleMouseMove(e)}
              style={buttonStyles}
              className={` button px-3 py-[6px] font-semibold text-base rounded text-white inline-flex relative overflow-hidden bg-blue-400 before:bg-slate-700 dark:bg-blue-400 dark:border dark:border-blue-400  dark:before:bg-slate-900`}
            >
              <span className="relative z-10">Client Code</span>
            </button>
          </a>
          {backend && (
            <>
              {/* server side code link  */}
              <a href={backend} target="blank">
                <button
                  onMouseMove={(e) => handleMouseMove(e)}
                  style={buttonStyles}
                  className={` button px-3 py-[6px] font-semibold text-base rounded text-white inline-flex relative overflow-hidden bg-blue-400 before:bg-slate-700 dark:bg-blue-400 dark:border dark:border-blue-400  dark:before:bg-slate-900`}
                >
                  <span className="relative z-10">Backend Code</span>
                </button>
              </a>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default LargeSingleProject;
