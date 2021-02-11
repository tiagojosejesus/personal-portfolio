import React from "react";
import "./Style/Home.css";
import Highlight from "./Highlight";

function Home() {
  return (
    <div className="content">
      <div className="title">Hello</div>
      <p className="paragraph">
        I'm <Highlight text="Tiago Jesus" /> and this is my Portfolio.
      </p>
      <p className="paragraph">
        I'm a <Highlight text="Frontend Developer" />.
      </p>
      <p className="paragraph">
        Since I started learning <Highlight text="Frontend Development" />, I
        took interest in <a href="https://reactjs.org">React</a>.
      </p>
    </div>
  );
}

export default Home;
