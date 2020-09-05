import React, { useState, useEffect } from "react";

import { Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";
import { ReactComponent as HeartSvg } from "../../assets/heart-regular.svg";

import "./NavBar.css";

export const NavBar = () => {
  const [navbarColor, setNavbarColor] = useState("");
  const [logos, setLogos] = useState(logo);
  const [navbarTitle, setNavbarTitle] = useState("");
  const [navbarDonateColor, setNavbarDonateColor] = useState("donate-link-red");
  const [heart, setHeart] = useState("");

  const listenScrollEvent = () => {
    if (window.scrollY < 290) {
      setLogos(logo);
      setNavbarTitle("");
      setNavbarDonateColor("donate-link-red");
      setHeart("heart");
      return setNavbarColor("");
    } else {
      setNavbarDonateColor("donate-link-white");
      setLogos(logo2);
      setNavbarTitle("OVER-THE-LINE");
      setHeart("heartScroll");
      return setNavbarColor("navbar-bg-color main-white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  return (
    <Navbar className={navbarColor} sticky="top" expand="md">
      <Navbar.Brand className="col-2" id="logo">
        <a href="http://localhost:3000" title="OVER THE LINE">
          <img
            alt="Logo"
            src={logos}
            width="130"
            height="60"
            className="d-inline-block align-top logo"
          />
        </a>
      </Navbar.Brand>
      <div className="text-center col-8 text">
        <h1>{navbarTitle}</h1>
      </div>

      <div className={navbarDonateColor}>
        <HeartSvg
          className={heart}
          alt="heart"
          width="30"
          height="30"
          fill="green"
        />
        <a
          href="https://www.compasscollect.com/donate"
          target="_blank"
          rel="noopener noreferrer"
          title="Donate"
        >
          DONATE
        </a>
      </div>
    </Navbar>
  );
};
