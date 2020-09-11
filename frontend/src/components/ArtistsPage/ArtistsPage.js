import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Link, Element } from "react-scroll";
import { classNamePicker } from "../../utils";

import { ReactComponent as BubbleBorder } from "../../assets/bubble.svg";

import "../ArtistsPage/ArtistsPage.css";

export const ArtistsPage = ({
  category,
  setArtist,
  singleProductCheck,
  showArtists,
}) => {
  const [artists, setArtists] = useState([]);

  const uri = process.env.REACT_APP_API;

  useEffect(() => {
    fetch(uri)
      .then((res) => res.json())
      .then((artists) => setArtists(artists));
  }, [uri]);

  let filteredArray = artists.filter((artist) =>
    artist.category.some((cat) => cat[category] && cat[category].length > 0)
  );

  return (
    <>
      <Element name="artist" />
      {showArtists ? (
        <Element name="artist" className="element">
          <div className="artist-page">
            <div className="artists-main d-flex justify-content-center align-items-center ">
              <div className="d-flex justify-content-center align-items-center artists">
                {category &&
                  filteredArray.map((artist, index) => (
                    <Link
                      onClick={(e) => setArtist(artist)}
                      className="bubbles-link-artists"
                      activeClass="active"
                      to={singleProductCheck !== 1 ? "products" : "product"}
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
            </div>
          </div>
        </Element>
      ) : null}
    </>
  );
};

ArtistsPage.propTypes = {
  category: PropTypes.string,
  setArtist: PropTypes.func,
  singleProductCheck: PropTypes.number,
  showArtists: PropTypes.bool,
};
