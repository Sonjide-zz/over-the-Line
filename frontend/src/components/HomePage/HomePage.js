import React from "react";

import { Link, Element } from "react-scroll";
import { NavBar } from "../NavBar/NavBar";
import BrushOver from "../../assets/brushOver.gif";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <>
      <Element name="homepage" />
      <NavBar />
      <div
        className="homepage"
        id="videoBG"
        style={{
          backgroundImage: "url(" + BrushOver + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Link
          className="h1-link"
          activeClass="active"
          to="artists"
          spy={true}
          smooth={true}
          offset={0}
          duration={1500}
        >
          <div className="d-flex justify-content-center link-brush">""</div>
        </Link>
      </div>
    </>
  );
};
