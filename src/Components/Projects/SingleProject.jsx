import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState } from "react";

/* eslint-disable react/prop-types */
const SingleProject = ({ project }) => {
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
      className="p-4 border border-gray-400 text-slate-700 dark:text-white flex flex-col"
    >
      <img src={img} alt="" className="h-[200px] mb-5" />
      <p className="text-2xl font-semibold mb-3">{name}</p>
      <p className="mb-3">
        <span className="font-semibold text-lg ">Technology used: </span>
        {technologies}
      </p>
      <p className="mb-5">
        <span className="font-semibold text-lg ">Description: </span>
        {description}
      </p>
      <div className=" flex flex-col lg:flex-row gap-y-2 mt-5 justify-around items-center lg:mt-auto">
        {/* live site lnk  */}
        <a href={liveSite} target="blank">
          <button
            onMouseMove={(e) => handleMouseMove(e)}
            style={buttonStyles}
            className={` button px-3 py-2 font-semibold text-base rounded text-white inline-flex relative overflow-hidden bg-blue-400 before:bg-slate-700 dark:bg-blue-400 dark:border dark:border-blue-400  dark:before:bg-slate-900`}
          >
            <span className="relative z-10">Live Site</span>
          </button>
        </a>

        {/* client site code link  */}
        <a href={client} target="blank">
          <button
            onMouseMove={(e) => handleMouseMove(e)}
            style={buttonStyles}
            className={` button px-3 py-2 font-semibold text-base rounded text-white inline-flex relative overflow-hidden bg-blue-400 before:bg-slate-700 dark:bg-blue-400 dark:border dark:border-blue-400  dark:before:bg-slate-900`}
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
                className={` button px-3 py-2 font-semibold text-base rounded text-white inline-flex relative overflow-hidden bg-blue-400 before:bg-slate-700 dark:bg-blue-400 dark:border dark:border-blue-400  dark:before:bg-slate-900`}
              >
                <span className="relative z-10">Backend Code</span>
              </button>
            </a>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default SingleProject;
