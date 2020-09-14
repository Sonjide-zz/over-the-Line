import React from "react";

import PropTypes from "prop-types";
import { Link, Element } from "react-scroll";
import { ReactComponent as BubbleBorder } from "../../assets/bubble.svg";
import { categoriesArray } from "../../constant";

import "../CategoriesPage/CategoriesPage.css";

export const CategoriesPage = ({
  setCategory,
  showCategories,
  setShowArtists,
}) => {
  return (
    <>
      <Element name="art" />
      {showCategories ? (
        <Element name="artists" className="element">
          <div>
            <div className="artists-main-categories">
              <div className="categories_bubbles d-flex">
                {categoriesArray.map((category, index) => (
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
                      <BubbleBorder
                        title="bubble-border"
                        className="bubble-border"
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
CategoriesPage.propTypes = {
  setCategory: PropTypes.func,
  showCategories: PropTypes.bool,
  setShowArtists: PropTypes.func,
};
