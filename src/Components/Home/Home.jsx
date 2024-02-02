import ScrollToTop from "react-scroll-to-top";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Skills from "../Skils/Skills";
import { AiOutlineArrowUp } from "react-icons/ai";
import { motion, useScroll, useSpring } from "framer-motion";
const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  return (
    <div className=" dark:bg-slate-900 " id="home">
      <ScrollToTop
        smooth
        className="bg-blue-400 text-white text-sm px-[6px] py-1"
      >
        <AiOutlineArrowUp></AiOutlineArrowUp>
      </ScrollToTop>

      <motion.div
        className="bg-sky-400 sticky top-0 left-0 h-[4px] z-40"
        style={{ scaleX, transformOrigin: "left" }} // here transformOrigin helps to start it from the left
        //This property specifies where the transformation (scaling in this case) should originate,
        // and setting it to "left" ensures that the progress bar starts from the left side.
      ></motion.div>
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
