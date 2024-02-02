import SectionTitle from "../SectionTitle/SectionTitle";
import LargeSingleProject from "./LargeSingleProject";
import "./Projects.css";
import SingleProject from "./SingleProject";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Skill Share",
      img: "https://i.ibb.co/5hxsvWJ/skill-share.png",
      description:
        "It is a e-learning platform. Where students canm buy thier course. Also who wants to tech they can upload thier classes. And also there is an admin panel who can control all those students and instructors.",
      technologies:
        "JavaScript, React, React Router, Tailwind, DaisyUI, Firebase, JWT, Axios, Tanstack Query, MongoDB, Node, Express, Stripe",
      liveSite: "https://skill-share990.netlify.app",
      client: "https://github.com/rabiulahsan/skill-share-client",
      backend: "https://github.com/rabiulahsan/skill-share-server",
    },
    {
      id: 2,
      name: "Blog Application",
      img: "https://i.ibb.co/Z2Lwv28/Screenshot-2024-01-27-at-18-47-26-Explorer-Get-Close-to-Nature.png",
      description:
        "It is a Blog application of world's beautiful places called 'Explorer' with some cool animations. Here  you can find your favourite place and can save to your favourite list. Also you can write blogs by becoming a writer. There is also a search functionality.",
      technologies:
        "JavaScript, React,Framer Motion, JWT, AXios, react-slick, React Router, Tailwind, Skeleton, Firebase, MongoDB, Node, Express",
      liveSite: "https://explorer-bd.netlify.app/",
      client: "https://github.com/rabiulahsan/blog-app-client",
      backend: "https://github.com/rabiulahsan/blog-app-server",
    },
    {
      id: 3,
      name: "Weather Application",
      img: "https://i.ibb.co/vBq69Bx/Screenshot-2024-01-27-at-18-18-40-Weather-Rabiul-Ahsan.png",
      description:
        "In this project, here you can find any location's (which is in this api)  weather information. And you can search your desired city. Also there is 10 day forecast.",
      technologies: "JavaScript, React,  Tailwind, rest API, Skeleton",
      liveSite: "https://weather-application-world.netlify.app/",
      client: "https://github.com/rabiulahsan/weather-app",
      backend: "",
    },
    {
      id: 4,
      name: "Tic Tac Toe",
      img: "https://i.ibb.co/b5t8rK9/Screenshot-2024-01-27-at-18-11-43-Tic-Tac-Toe-Rabiul-Ahsan.png",
      description:
        "This is a game called TIC-TAC-TOE. It needs 2 player. Here you can play with your friends in single match or you can choose round system. You can decide how many match you want in a round (3/5/10). This can be good refreshing game for you.",
      technologies: "JavaScript, React, Tailwind, Framer Motion",
      liveSite: "https://tic-tac-toe-bd.netlify.app/",
      client: "https://github.com/rabiulahsan/tic-tac-toe",
      backend: "",
    },

    {
      id: 5,
      name: "Toy Marketplace",
      img: "https://i.ibb.co/6gSY0wg/toy-market.png",
      description:
        "It is a marketplace , where user can buy products but before that they have to login first.",
      technologies:
        "JavaScript, React, React Router, Tailwind, DaisyUI, Firebase, MongoDB, Node, Express",
      liveSite: "https://heroeshouse.netlify.app",
      client: "https://github.com/rabiulahsan/toy-shop-client",
      backend: "https://github.com/rabiulahsan/toy-shop-server",
    },
    {
      id: 6,
      name: "Chef's House",
      img: "https://i.ibb.co/2yQHW3f/chefs-house.png",
      description:
        "In this project there is the list of some famous cheif with thier special dishes. And also there is some description about those chefs and recipes.",
      technologies:
        "JavaScript, React, React Router, Tailwind, DaisyUI, Firebase, MongoDB, Node, Express",
      liveSite: "https://chefs-house.netlify.app/",
      client: "https://github.com/rabiulahsan/chefs-house-client",
      backend: "https://github.com/rabiulahsan/chefs-house-server",
    },
  ];

  return (
    <div id="project" className="mb-10 lg:mb-0">
      <SectionTitle heading="Projects"></SectionTitle>
      <div className="grid grid-cols-1 text-center lg:hidden px-[10%] py-[5%] gap-6">
        {projects.map((project) => (
          <SingleProject project={project} key={project.id}></SingleProject>
        ))}
      </div>
      <div className=" hidden lg:grid grid-cols-1  py-[5%] lg:px-[20%] ">
        {projects.map((project) => (
          <LargeSingleProject
            project={project}
            key={project.id}
          ></LargeSingleProject>
        ))}
      </div>
    </div>
  );
};

export default Projects;
