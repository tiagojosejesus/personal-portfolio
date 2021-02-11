import React, { useState } from "react";
import "./Style/Projects.css";

function Projects() {
  return (
    <div className="content">
      <div className="title">Projects</div>
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
      technologies: [{ tech: "React" }, { tech: "CSS3" }],
      link: "https://github.com/tiagojosejesus/personal-portfolio",
    },
    {
      id: 1,
      name: "Weather App",
      area: "Frontend Development",
      technologies: [{ tech: "React" }, { tech: "CSS3" }],
      link: "https://github.com/tiagojosejesus/WeatherApp",
    },
    {
      id: 2,
      name: "Expenses Tracker",
      area: "Frontend Development",
      technologies: [{ tech: "React" }, { tech: "CSS3" }],
      link: "https://github.com/tiagojosejesus/expensesTracker",
    },
    {
      id: 3,
      name: "Chat With Firebase",
      area: "Frontend Development",
      technologies: [{ tech: "React" }, { tech: "CSS3" }, { tech: "Firebase" }],
      link: "https://github.com/tiagojosejesus/ChatWithFirebase",
    },
    {
      id: 4,
      name: "ToDo List",
      area: "Frontend Development",
      technologies: [{ tech: "React" }, { tech: "CSS3" }],
      link: "https://github.com/tiagojosejesus/todolist",
    },
  ]);

  return (
    <>
      {projects.map((info) => {
        return (
          <div key={info.id} className="projectsInfo">
            <div className="projectsTitle">{info.name}</div>
            {/* <div className="projectsType">{info.area}</div> */}
            {info.technologies.map((tech) => {
              return (
                <div className="projectTech-items">
                  <div className="projectTech-item">{tech.tech}</div>
                </div>
              );
            })}
            <div className="projectLink">
              <a href={info.link}>See Project </a>
            </div>
          </div>
        );
      })}
    </>
  );
}
