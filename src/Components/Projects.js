import React, { useState } from "react";
import { FaCode } from "react-icons/fa";
import "./Style/Projects.css";

function Projects() {
  return (
    <div className="Projects">
      <div className="title">
        Projects <FaCode />
      </div>
      <ProjectDiv />
    </div>
  );
}

export default Projects;

function ProjectDiv() {
  const [projects] = useState([
    {
      id: 0,
      name: "Portfolio",
      area: "Frontend Development",
      technologies: [{ tech: "ReactJs" }, { tech: "CSS3" }],
      link: "https://github.com/tiagojosejesus/PersonalPortfolio",
    },
    {
      id: 1,
      name: "Weather App",
      area: "Frontend Development",
      technologies: [{ tech: "ReactJs" }, { tech: "CSS3" }],
      link: "https://github.com/tiagojosejesus/WeatherApp",
    },
    {
      id: 2,
      name: "Expenses Tracker",
      area: "Frontend Development",
      technologies: [{ tech: "ReactJs" }, { tech: "CSS3" }],
      link: "https://github.com/tiagojosejesus/expensesTracker",
    },
    {
      id: 3,
      name: "Chat With Firebase",
      area: "Frontend Development",
      technologies: [
        { tech: "ReactJs" },
        { tech: "CSS3" },
        { tech: "Firebase" },
      ],
      link: "https://github.com/tiagojosejesus/ChatWithFirebase",
    },
    {
      id: 4,
      name: "ToDo List",
      area: "Frontend Development",
      technologies: [{ tech: "ReactJs" }, { tech: "CSS3" }],
      link: "https://github.com/tiagojosejesus/todolist",
    },
  ]);

  return (
    <div>
      {projects.map((info) => {
        return (
          <div key={info.id} className="projectsInfo">
            <div className="projectsTitle">{info.name}</div>
            <div className="projectsType">{info.area}</div>
            {info.technologies.map((tech) => {
              return (
                <div className="projectTech-items">
                  <div className="projectTech-item">{tech.tech}</div>
                </div>
              );
            })}
            <div className="projectLink">
              <a href={info.link}>See Project -&gt; </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
