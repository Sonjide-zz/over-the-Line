import React from "react";
import "./BackToTop.css";
import { Link } from "react-scroll";

export const BackToTop = () => {
  return (
    <Link
      className="bubbles-link-artists"
      activeClass="active"
      to="homepage"
      spy={true}
      smooth={true}
      offset={0}
      duration={1000}
    >
      <div className="back-to-top">back to top </div>
    </Link>
  );
};
