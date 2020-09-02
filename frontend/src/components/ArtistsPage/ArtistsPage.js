import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Link, Element } from "react-scroll";
import { classNamePicker } from "../../utils";

import { ReactComponent as BubbleBorder } from "../../assets/bubble.svg";
import { DivideLine } from "../DivideLine/DivideLine";
// import artists from "../../assets/products.json";
import "../ArtistsPage/ArtistsPage.css";

export const ArtistsPage = ({ category, setArtist }) => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001")
      .then((res) => res.json())
      .then((artists) => setArtists(artists));
  }, []);

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
                  <div className={classNamePicker(category)}>
                    {artist.name}
                    <BubbleBorder
                      title="bubble-border"
                      className="bubble-border-artists"
                    ></BubbleBorder>
                  </div>
                </Link>
              ))}
          </div>
          <DivideLine />
        </div>
      </Element>
    </>
  );
};

ArtistsPage.propTypes = {
  category: PropTypes.string,
};
