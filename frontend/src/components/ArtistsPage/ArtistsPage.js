import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
import products from "../../assets/products.json";
import PropTypes from "prop-types";
import { Link, Element } from "react-scroll";

export const ArtistsPage = ({ setCategories }) => {
  const colorsArray = ["blue", "yellow", "orange"];

  return (
    <Element name="artists" className="element">
      <div className="artists-page">
        <Navbar className="navbar-bg-color main-white">
          <Navbar.Brand className="col-2" id="logo">
            <img
              alt="Logo"
              src={logo}
              width="60"
              height="40"
              className="d-inline-block align-top logo"
            />
          </Navbar.Brand>
          <div className="text-center col-8 text">
            <h1>Over the line</h1>
          </div>
          <div className="col-2">contact</div>
        </Navbar>

        <div className="artists-main">
          {products.map((product, index) => (
            <div
              key={index}
              className={colorsArray[Math.floor(Math.random() * (2 + 1))]}
            >
              <Link
                onClick={(e) => setCategories(product.category)}
                className="bubbles-link-artists"
                activeClass="active"
                to="artist"
                spy={true}
                smooth={true}
                offset={0}
                duration={1500}
              >
                {product.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

ArtistsPage.propTypes = {
  colorsArray: PropTypes.array,
};
