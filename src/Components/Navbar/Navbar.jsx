import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import {
  BsFillSunFill,
  BsFillMoonFill,
  BsFillDisplayFill,
} from "react-icons/bs";
import "./Navbar.css";
import useScrollBar from "../../Hooks/useScrollBar";

const Navbar = () => {
  const completion = useScrollBar();

  const selectedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(selectedTheme ? selectedTheme : "system");
  console.log(theme);

  const element = document.documentElement;

  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  console.log(darkQuery);

  const onSystemTheme = () => {
    if (theme === "dark" || (theme === "system" && darkQuery.matches)) {
      element.classList.add("dark");
    } else {
      console.log(darkQuery.matches);
      element.classList.remove("dark");
    }
  };
  onSystemTheme();

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
    setTheme("system");
    localStorage.removeItem("theme");
    onSystemTheme();
  };

  darkQuery.addEventListener("change", (e) => {
    if (theme === "system") {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  return (
    <div className="sticky top-0 z-10">
      <div className="flex  justify-between items-center px-[10%] py-[1%] bg-white dark:bg-slate-900 ">
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
            title="System theme based on Browser"
            onClick={handleSystem}
            className={` mr-5  text-lg ${
              theme === "system" ? "text-blue-400" : ""
            }`}
          >
            <BsFillDisplayFill></BsFillDisplayFill>
          </button>
        </div>
      </div>
      <span
        className="absolute bg-blue-400 h-[4px] left-0 bottom-[-4px] w-full"
        style={{ transform: `translatex(${completion - 100}%)` }}
      />
    </div>
  );
};

export default Navbar;
