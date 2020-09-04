import React from "react";

import { Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";

import "./NavBar.css";

export const NavBar = () => {
  return (
    <>
      <Navbar className="navbar-bg-color" sticky="top" expand="md">
        <Navbar.Brand className="col-3" id="logo">
          <a href="http://localhost:3000" title="OVER THE LINE">
            <img
              alt="Logo"
              src={logo}
              width="70"
              height="50"
              className="d-inline-block align-top logo"
            />
          </a>
        </Navbar.Brand>
        <div className="text-center col-6 text">
          <h3>Over-the-Line</h3>
        </div>

        <div id="donate-link-red col-3">
          <a
            href="https://www.compasscollect.com/donate"
            target="_blank"
            rel="noopener noreferrer"
            title="Donate"
          >
            Donate Now
          </a>
        </div>
      </Navbar>
      <hr className="section-line-navbar"></hr>
    </>
  );
};
