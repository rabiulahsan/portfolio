/* eslint-disable react/prop-types */
const ProgressBar = ({ name, learn }) => {
  console.log(learn);
  return (
    <div className="mb-5">
      <p className="flex justify-between items-center text-slate-800 dark:text-white mb-2">
        <span>{name}</span> <span>{learn}%</span>
      </p>
      {/* <div className="w-full bg-gray-200 rounded-full">
        <div className={`h-2 bg-blue-400 rounded-full w-[${learn}]`}></div>
      </div> */}

      <progress
        className="progress progress-info w-full"
        value={learn}
        max="100"
      ></progress>
    </div>
  );
};

export default ProgressBar;
