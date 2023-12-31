import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer footer-center px-4 py-6 lg:p-10 text-white bg-slate-800   ">
      <div className="grid grid-flow-col gap-4">
        <span className="text-base font-semibold cursor-pointer hover:underline hover:text-blue-400">
          <Link to="home" smooth={true} duration={500} offset={-50}>
            Home
          </Link>
        </span>

        <span className="text-base font-semibold cursor-pointer hover:underline hover:text-blue-400">
          <Link to="about" smooth={true} duration={500} offset={-50}>
            About
          </Link>
        </span>

        <span className="text-base font-semibold cursor-pointer hover:underline hover:text-blue-400">
          <Link to="skill" smooth={true} duration={500} offset={-50}>
            Skills
          </Link>
        </span>

        <span className="text-base font-semibold cursor-pointer hover:underline hover:text-blue-400">
          <Link to="project" smooth={true} duration={500} offset={-50}>
            Projects
          </Link>
        </span>

        <span className="text-base font-semibold cursor-pointer hover:underline hover:text-blue-400">
          <Link to="contact" smooth={true} duration={500} offset={-50}>
            Contact
          </Link>
        </span>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            title="Github Profile link"
            href="https://github.com/rabiulahsan"
            target="blank"
            className="hover:text-blue-400 text-2xl"
          >
            <AiOutlineGithub></AiOutlineGithub>
          </a>

          <a
            title="Linkedin Profile link"
            href="https://www.linkedin.com/in/rabiul-ahsan/"
            target="blank"
            className="hover:text-blue-400 text-2xl"
          >
            <AiFillLinkedin></AiFillLinkedin>
          </a>

          <a
            title="Instagram Profile link"
            href="https://www.instagram.com/_rabiul_ahsan_/"
            target="blank"
            className="hover:text-blue-400 text-2xl"
          >
            <AiOutlineInstagram></AiOutlineInstagram>
          </a>
        </div>
      </div>
      <div className="mb-16 lg:mb-0">
        <p>
          Copyright © 2023 - All right reserved by{" "}
          <span className=" text-lg font-semibold text-blue-400">
            Rabiul Ahsan
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
