/* eslint-disable react/prop-types */
const SectionTitle = ({ heading }) => {
  return (
    <div>
      <div className=" text-center text-slate-800 dark:text-blue-400 mx-auto text-3xl uppercase  font-bold py-[2%] flex flex-col w-1/3">
        <h3 className="">{heading}</h3>
        <hr className="border-[1px] w-3/4 mt-3 mx-auto border-gray-600 dark:border-blue-400" />
      </div>
    </div>
  );
};

export default SectionTitle;
