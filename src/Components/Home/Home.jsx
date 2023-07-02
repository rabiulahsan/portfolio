import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Skills from "../Skils/Skills";

const Home = () => {
  return (
    <div className=" dark:bg-slate-900 ">
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
