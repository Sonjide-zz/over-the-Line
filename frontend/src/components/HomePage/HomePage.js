import React from "react";

import { Link, Element } from "react-scroll";
import { NavBar } from "../NavBar/NavBar";
import BrushOverTheLine from "../../assets/brushOverTheLine.gif";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <>
      <Element name="homepage" />
      <NavBar />
      <div className="homepage">
        <Link
          className="h1-link"
          activeClass="active"
          to="artists"
          spy={true}
          smooth={true}
          offset={0}
          duration={1500}
        >
          <div className="d-flex justify-content-center">
            <img
              src={BrushOverTheLine}
              alt="gif-brush"
              className="brush-over"
            />
          </div>
        </Link>
      </div>
    </>
  );
};
