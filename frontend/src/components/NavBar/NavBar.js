import React, { useState, useEffect } from "react";

import { Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";
import { ReactComponent as HeartSvg } from "../../assets/heart-regular.svg";

import "./NavBar.css";

export const NavBar = () => {
  const [navbarColor, setNavbarColor] = useState("");
  const [logos, setLogos] = useState(logo);
  const [navbarTitle, setNavbarTitle] = useState("OVER-THE-LINE");
  const [navbarTitleColor, setNavbarTitleColor] = useState("text");
  const [navbarDonateColor, setNavbarDonateColor] = useState("donate-link-red");
  const [heart, setHeart] = useState("");

  const listenScrollEvent = () => {
    if (window.scrollY < 290) {
      setLogos(logo);
      setNavbarTitle("OVER-THE-LINE");
      setNavbarDonateColor("donate-link-red");
      setHeart("heart");
      setNavbarTitleColor("text");
      return setNavbarColor("");
    } else {
      setNavbarDonateColor("donate-link-white");
      setLogos(logo2);
      setNavbarTitle("OVER-THE-LINE");
      setNavbarTitleColor("text-scroll");
      setHeart("heartScroll");
      return setNavbarColor("navbar-bg-color main-white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  return (
    <Navbar className={navbarColor} sticky="top" expand="md">
      <Navbar.Brand className="" id="logo">
        <a href="/" title="OVER THE LINE">
          <img
            alt="Logo"
            src={logos}
            width="130"
            height="60"
            className="d-inline-block align-top logo"
          />
        </a>
      </Navbar.Brand>
      <div className={navbarTitleColor}>
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
