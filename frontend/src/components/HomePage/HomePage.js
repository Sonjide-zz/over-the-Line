import React from "react";

import { Link } from "react-scroll";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";

import "./HomePage.css";

export const HomePage = () => {
  return (
    <>
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
          <h1 className="h1-over-the-line">Over the line</h1>
        </Link>
      </div>
      <Footer />
    </>
  );
};
