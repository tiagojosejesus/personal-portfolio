import React from "react";
import "./Style/Home.css";
import Highlight from "./Highlight";

function Home() {
  return (
    <div className="Home">
      <div className="title">Hello</div>
      <div className="textContainer">
        <p>
          I'm <Highlight text="Tiago Jesus" /> and this is my Portfolio.
        </p>
        <p>
          I'm a <Highlight text="Frontend Developer" />.
        </p>
      </div>
    </div>
  );
}

export default Home;
