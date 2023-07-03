import ScrollToTop from "react-scroll-to-top";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Skills from "../Skils/Skills";
import { AiOutlineArrowUp } from "react-icons/ai";

const Home = () => {
  return (
    <div className=" dark:bg-slate-900 " id="home">
      <ScrollToTop
        smooth
        className="bg-blue-400 text-white text-sm px-[6px] py-1"
      >
        <AiOutlineArrowUp></AiOutlineArrowUp>
      </ScrollToTop>

      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
