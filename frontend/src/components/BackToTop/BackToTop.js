import React from "react";

import { Link } from "react-scroll";
import { ReactComponent as BubbleBorder } from "../../assets/bubble.svg";
import "./BackToTop.css";

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
      <div className="back-to-top">
        back to top
        <BubbleBorder
          title="bubble-border"
          className="bubble-border-back"
        ></BubbleBorder>
      </div>
    </Link>
  );
};
