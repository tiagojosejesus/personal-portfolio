import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
// import { MdComputer } from "react-icons/md";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
// import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      
      <Router>
        <div className="NavBar">
          <div key="Home" className="NavBar-link">
            <Link to="/">Home</Link>
          </div>
          <div key="Projects" className="NavBar-link">
            <Link to="/projects">Projects</Link>
          </div>
          <div key="About" className="NavBar-link">
            <Link to="/about">About</Link>
          </div> 
          {/* <div key="Contact" className="NavBar-link">
            <Link to="/Contacts">Contacts</Link>
          </div> */}
        </div>
        <Switch>
          <Route path="/projects">
            <Projects />
             <Footer />
          </Route>
          <Route path="/about">
            <About />
             <Footer />
          </Route>
          {/* <Route path="/Contacts" component={Contact} /> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
