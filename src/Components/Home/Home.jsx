import About from "../About/About";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div className=" dark:bg-slate-900 ">
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
    </div>
  );
};

export default Home;