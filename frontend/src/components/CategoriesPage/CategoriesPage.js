import React from "react";

import PropTypes from "prop-types";
import { Link, Element } from "react-scroll";
import { ReactComponent as BubbleBorder } from "../../assets/bubble.svg";
import { categoriesArray } from "../../constant";
import { Container, Row, Col } from "react-bootstrap";

import "../CategoriesPage/CategoriesPage.css";

export const CategoriesPage = ({
  setCategory,
  showCategories,
  setShowArtists,
}) => {
  return (
    <>
      <Element name="art" />
      {showCategories && (
        <Element name="categories" className="element">
          <Container fluid className="categories">
            <h5>
              You have crossed the line and have entered an exciting digital
              exhibition of creative work made by young refugees and asylum
              seekers.
            </h5>

            <Row>
              {categoriesArray.map((category, index) => (
                <Col xs={6} lg={4} md={4} key={index}>
                  <Link
                    onClick={function () {
                      setCategory(category.title);
                      setShowArtists(true);
                    }}
                    className="bubbles-link-artists"
                    activeClass="active"
                    to="artist"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1500}
                    key={index}
                  >
                    <div className={category.color} id={category.color}>
                      {category.title} room
                      <BubbleBorder className="bubble-border"></BubbleBorder>
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          </Container>
        </Element>
      )}
    </>
  );
};
CategoriesPage.propTypes = {
  setCategory: PropTypes.func,
  showCategories: PropTypes.bool,
  setShowArtists: PropTypes.func,
};
