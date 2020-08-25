import React from "react";
import logo from "../../assets/logo.png";
import logoCYF from "../../assets/cyf.png";
import arts from "../../assets/arts.jpg";
import "../Footer/Footer.css";

export const Footer = () => {
  return (
    <div>
      <div className="section-line"></div>
      <footer className="footer d-flex justify-content-center align-items-center">
        <a
          href="https://www.compasscollect.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} alt="logo" width="80" height="100%" className="m-3" />
        </a>
        <a
          href="https://codeyourfuture.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={logoCYF}
            alt="logo"
            width="120"
            height="100%"
            className="m-3"
          />
        </a>
        <a
          href="https://www.artscouncil.org.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={arts}
            alt="logo"
            width="200"
            height="100%"
            className="m-3"
          />
        </a>
      </footer>
    </div>
  );
};
