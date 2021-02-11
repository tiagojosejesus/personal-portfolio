import React from "react";
import "./Style/About.css";
import Highlight from "./Highlight";

function About() {
  return (
    <div className="content">
      <div className="title">About</div>
      <div className="info">
        <div className="textDiv">
          Since I started learning <Highlight text="Frontend Development" />, I
          took interest in{" "}
          <a href="https://reactjs.org">
            <Highlight text="React" />
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default About;
