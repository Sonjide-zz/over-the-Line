import React, { useState, useEffect } from "react";

import { Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";

import "./NavBar.css";

export const NavBar = () => {
  const [navbarColor, setNavbarColor] = useState("");
  const [logos, setLogos] = useState(logo);
  const [navbarTitle, setNavbarTitle] = useState("");
  const [navbarDonateColor, setNavbarDonateColor] = useState("donate-link-red");

  const listenScrollEvent = () => {
    if (window.scrollY < 290) {
      setLogos(logo);
      setNavbarTitle("");
      setNavbarDonateColor("donate-link-red");
      return setNavbarColor("");
    } else {
      setNavbarDonateColor("donate-link-white");
      setLogos(logo2);
      setNavbarTitle("Over-the-Line");
      return setNavbarColor("navbar-bg-color main-white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  return (
    <Navbar className={navbarColor} sticky="top">
      <Navbar.Brand className="col-2" id="logo">
        <a href="http://localhost:3000" title="OVER THE LINE">
          <img
            alt="Logo"
            src={logos}
            width="70"
            height="50"
            className="d-inline-block align-top logo"
          />
        </a>
      </Navbar.Brand>
      <div className="text-center col-8 text">
        <h1>{navbarTitle}</h1>
      </div>

      <div className={navbarDonateColor}>
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
  );
};
