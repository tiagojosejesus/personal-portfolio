import React from "react";
import "./Style/Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="title">
        <h2>Hello</h2>
      </div>
      <div className="textContainer">
        <p className="textDisplay">
          My name is <HighLight text="Tiago Jesus" /> and this is my
          <HighLight text="Portfolio" />.
        </p>
        <p className="textDisplay">
          I'm a <HighLight text="Junior Front-End Developer" />
        </p>
      </div>
    </div>
  );
}

export default Home;

function HighLight({ text }) {
  return <span className="highlight">{text}</span>;
}
