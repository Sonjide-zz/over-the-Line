import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "../../assets/logo2.png";

export const NavBar = () => {
  return (
    <Navbar className="navbar-bg-color main-white">
      <Navbar.Brand className="col-2" id="logo">
        <img
          alt="Logo"
          src={logo}
          width="60"
          height="40"
          className="d-inline-block align-top logo"
        />
      </Navbar.Brand>
      <div className="text-center col-8 text">
        <h1>Over the line</h1>
      </div>
      <div className="col-2">Survey</div>
    </Navbar>
  );
};
