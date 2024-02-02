/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const ProgressBar = ({ name, learn }) => {
  console.log(learn);
  return (
    <div className="mb-5">
      <p className="flex justify-between items-center text-slate-800 dark:text-white mb-2">
        <span>{name}</span> <span>{learn}%</span>
      </p>

      <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full">
        <motion.div
          className={`h-2 bg-blue-400 rounded-full tranfo`}
          style={{ transformOrigin: "left" }}
          initial={{ scaleX: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { type: "spring", delay: 0.7, duration: 2 },
            scaleX: `${learn}%`,
          }}
        ></motion.div>
      </div>

      {/* <motion.progress
        className="progress progress-info dark:bg-slate-600 w-full"
        value={learn}
        max="100"
        initial={{ x: -100 }}
        whileInView={{ x: 0, transition: { delay: 0.7, duration: 0.5 } }}
      ></motion.progress> */}
    </div>
  );
};

export default ProgressBar;
