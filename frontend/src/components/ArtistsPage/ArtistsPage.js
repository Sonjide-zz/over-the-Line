import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Link, Element } from "react-scroll";
import { classNamePicker } from "../../utils";
import { Container, Row, Col } from "react-bootstrap";
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
      <Element name="artist" className="element">
        {showArtists && (
          <Container
            fluid
            className={category === "writing" ? "writing-container" : ""}
          >
            <Row>
              <div className="artist_bubbles d-flex">
                {category &&
                  filteredArray.map((artist, index) => (
                    <Col xs={4} lg={2} md={2} className="bubbles" key={index}>
                      <Link
                        onClick={(e) => {
                          setArtist(artist);
                        }}
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
                          <BubbleBorder className="bubble-border-artists"></BubbleBorder>
                        </div>
                      </Link>
                    </Col>
                  ))}
              </div>
            </Row>
          </Container>
        )}
      </Element>
    </>
  );
};

ArtistsPage.propTypes = {
  category: PropTypes.string,
  setArtist: PropTypes.func,
  singleProductCheck: PropTypes.number,
  showArtists: PropTypes.bool,
};
