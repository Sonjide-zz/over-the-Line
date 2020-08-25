import React from "react";
import PropTypes from "prop-types";

import { Link, Element } from "react-scroll";
import { classNamePicker } from "../../utils";

import artists from "../../assets/products.json";

export const ArtistsPage = ({ category, setArtist }) => {
  let filteredArray = artists.filter((artist) =>
    artist.category.some((cat) => cat[category] && cat[category].length > 0)
  );

  return (
    <>
      <Element name="artist" className="element">
        <div className="artist-page">
          <div className="artists-main d-flex justify-content-center align-items-center">
            {category &&
              filteredArray.map((artist, index) => (
                <Link
                  onClick={(e) => setArtist(artist)}
                  className="bubbles-link-artists"
                  activeClass="active"
                  to="products"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1500}
                  key={index}
                >
                  <div className={classNamePicker(category)}>{artist.name}</div>
                </Link>
              ))}
          </div>
        </div>
      </Element>
    </>
  );
};

ArtistsPage.propTypes = {
  category: PropTypes.string,
};
