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
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        // scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
    ></motion.div>
  );
};

export default LargeSingleProject;
