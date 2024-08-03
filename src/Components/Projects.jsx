import React from "react";
import Project from "./Project.jsx";
import "../styles/Projects.css";

const Projects = () => {
  const projectsInfo = [
    {
      name: "To-Do-List",
      desc: "Responsive To-Do-List Using HTML , CSS and JavaScript",
      liveLink: "website url",
      githubLink: "https://github.com/MuhamedElsayedd/To-Do-List",
      techs: ["HTML", "CSS", "JavaScript"],
      isOpenSource: true,
    },
    {
      name: "Portfolio",
      desc: "congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed",
      liveLink: "website url",
      githubLink: "https://github.com/MuhamedElsayedd/Portfolio",
      techs: ["HTML", "CSS", "JavaScript", "ReactJS"],
      isOpenSource: true,
    },
  ];
  return (
    <div className="Projects" id="projects">
      <h2>My Projects</h2>
      <div>
        {projectsInfo.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
