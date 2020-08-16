import React from "react";
import "./App.css";
// import { Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <a href="#about" className="h1-over-the-line">
          {/* <Router> */}
          {/* <Switch><Route path="/" exact component={} /></Switch> */}
          {/* </Router> */}
          <h1>Over the line</h1>
        </a>
      </div>
      <div id="about">
        <div className="navbar">
          <nav className="menu">
            <li>Contact</li>
          </nav>
        </div>
        <div className="boubles">
          <div className="bouble">
            <h1>Music</h1>
          </div>
          <div className="bouble2">
            {" "}
            <h1>Acting</h1>
          </div>
          <div className="bouble3">
            {" "}
            <h1>Writing</h1>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
