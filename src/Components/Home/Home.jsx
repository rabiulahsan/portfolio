import About from "../About/About";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Skills from "../Skils/Skills";

const Home = () => {
  return (
    <div className=" dark:bg-slate-900 ">
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Skills></Skills>
    </div>
  );
};

export default Home;
