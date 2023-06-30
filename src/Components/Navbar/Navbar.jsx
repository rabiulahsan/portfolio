import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import {
  BsFillSunFill,
  BsFillMoonFill,
  BsFillDisplayFill,
} from "react-icons/bs";

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
      <div className="flex  justify-between items-center px-[6%] pt-[2%] pb-[1%] bg-white sticky top-0 z-10">
        <Link to="/">
          <p className="text-balck font-bold text-3xl cursor-pointer">
            Rabiul Ahsan
          </p>
        </Link>
        <div className=" ">
          <ul className="flex text-base font-semibold ">
            <li className="mx-2 px-2 navlink-hover">
              <Link to="/">Home</Link>
            </li>

            <li className="mx-2 px-2 navlink-hover">
              <Link to="/">About</Link>
            </li>

            <li className="mx-2 px-2 navlink-hover">
              <Link to="/">Skills</Link>
            </li>

            <li className="mx-2 px-2 navlink-hover">
              <Link to="/">Projects</Link>
            </li>

            <li className="mx-2 px-2 navlink-hover">
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="text-black">
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
