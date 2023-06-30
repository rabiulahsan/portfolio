import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import {
  BsFillSunFill,
  BsFillMoonFill,
  BsFillDisplayFill,
} from "react-icons/bs";
import "./Navbar.css";

const Navbar = () => {
  const selectedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(selectedTheme ? selectedTheme : "system");
  console.log(theme);

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
    } else if (theme === "light") {
      element.classList.remove("dark");
    }
  }, [theme, element]);

  const handleLight = () => {
    localStorage.setItem("theme", "light");

    const theme = localStorage.getItem("theme");
    setTheme(theme);
  };
  const handleNight = () => {
    localStorage.setItem("theme", "dark");

    const theme = localStorage.getItem("theme");
    setTheme(theme);
  };
  const handleSystem = () => {
    localStorage.setItem("theme", "system");

    const theme = localStorage.getItem("theme");
    setTheme(theme);
  };

  return (
    <div>
      <div className="flex  justify-between items-center px-[6%] pt-[2%] pb-[1%] bg-white dark:bg-slate-900 sticky top-0 z-10">
        <Link to="/">
          <p className="text-balck dark:text-white font-bold text-3xl cursor-pointer">
            Rabiul Ahsan
          </p>
        </Link>
        <div className=" dark:text-white ">
          <ul className="flex text-base font-semibold ">
            <li className="cursor-pointer font-semibold mx-2 px-2 navlink-hover hover:text-blue-400">
              <span>
                <Link to="/">Home</Link>
              </span>
            </li>

            <li className="cursor-pointer font-semibold mx-2 px-2 navlink-hover hover:text-blue-400">
              <span>
                <Link to="/">About</Link>
              </span>
            </li>

            <li className="cursor-pointer font-semibold mx-2 px-2 navlink-hover hover:text-blue-400">
              <span>
                <Link to="/">Skills</Link>
              </span>
            </li>

            <li className="cursor-pointer font-semibold mx-2 px-2 navlink-hover hover:text-blue-400">
              <span>
                <Link to="/">Projects</Link>
              </span>
            </li>

            <li className="cursor-pointer font-semibold mx-2 px-2 navlink-hover hover:text-blue-400">
              <span>
                <Link to="/">Contact</Link>
              </span>
            </li>
          </ul>
        </div>
        <div className="text-black dark:text-white">
          <button
            title="Light theme"
            onClick={handleLight}
            className={` mr-5  text-lg ${
              theme === "light" ? "text-blue-400" : ""
            }`}
          >
            <BsFillSunFill></BsFillSunFill>
          </button>
          <button
            title="Dark theme"
            onClick={handleNight}
            className={` mr-5  text-lg ${
              theme === "dark" ? "text-blue-400" : ""
            }`}
          >
            <BsFillMoonFill></BsFillMoonFill>
          </button>
          <button
            title="System theme"
            onClick={handleSystem}
            className={` mr-5  text-lg ${
              theme === "system" ? "text-blue-400" : ""
            }`}
          >
            <BsFillDisplayFill></BsFillDisplayFill>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
