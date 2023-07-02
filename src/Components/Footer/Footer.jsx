import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 text-white bg-slate-800 dark:bg-blue-400  ">
      <div className="grid grid-flow-col gap-4"></div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <AiOutlineGithub></AiOutlineGithub>
          <AiFillLinkedin></AiFillLinkedin>
          <AiOutlineInstagram></AiOutlineInstagram>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by Rabiul Ahsan</p>
      </div>
    </footer>
  );
};

export default Footer;
