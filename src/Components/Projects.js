import React, { useState } from "react";
import { FaCode } from "react-icons/fa";
import "./Style/Projects.css";

function Projects() {
  return (
    <div className="Projects">
      <h1>
        Projects <FaCode />
      </h1>
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
      area: "Front-End Developer",
      technologies: [{ tech: "ReactJs" }, { tech: "CSS3" }],
      link: "https://github.com/tiagojosejesus/PersonalPortfolio",
    },
    {
      id: 1,
      name: "Weather App",
      area: "Front-End Developer",
      technologies: [{ tech: "ReactJs" }, { tech: "CSS3" }],
      link: "https://github.com/tiagojosejesus/WeatherApp",
    },
    {
      id: 2,
      name: "Expenses Tracker",
      area: "Front-End Developer",
      technologies: [{ tech: "ReactJs" }, { tech: "CSS3" }],
      link: "https://github.com/tiagojosejesus/expensesTracker",
    },
    {
      id: 3,
      name: "Chat With Firebase",
      area: "Front-End Developer",
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
      area: "Front-End Developer",
      technologies: [{ tech: "ReactJs" }, { tech: "CSS3" }],
      link: "https://github.com/tiagojosejesus/todolist",
    },
  ]);

  return (
    <div>
      {projects.map((info) => {
        return (
          <div key={info.id} className="projectsInfo">
            <h3>{info.name}</h3>
            <h4>{info.area}</h4>
            {info.technologies.map((tech) => {
              return (
                <div>
                  <div>{tech.tech}</div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
