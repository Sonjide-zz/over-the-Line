import React from "react";
import PropTypes from "prop-types";
import { Link, Element } from "react-scroll";

export const SingleArtistPage = ({ categories, setCategory }) => {
  const classNamePicker = (object) => {
    if (Object.keys(object).toString() === "writing") {
      return "blue";
    } else if (Object.keys(object).toString() === "acting") {
      return "orange";
    } else {
      return "yellow";
    }
  };

  return (
    <Element name="artist" className="element">
      <div className="artist-page">
        <div className="section-line"></div>
        <div className="artists-main d-flex justify-content-center align-items-center">
          {categories.map((category, index) => (
            <Link
              onClick={(e) => setCategory(category)}
              className="bubbles-link-artists"
              activeClass="active"
              to="products"
              spy={true}
              smooth={true}
              offset={0}
              duration={1500}
            >
              <div key={index} className={classNamePicker(category)}>
                {Object.keys(category)}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Element>
  );
};

SingleArtistPage.propTypes = {
  categories: PropTypes.array,
};
