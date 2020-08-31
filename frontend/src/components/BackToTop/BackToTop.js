import React from "react";

import { Link } from "react-scroll";
import "./BackToTop.css";

export const BackToTop = () => {
  return (
    <button className="back-to-top">
      <Link
        activeClass="active"
        to="homepage"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
      >
        back to top
      </Link>
    </button>
  );
};
