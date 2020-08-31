import React from "react";

import { Link, Element } from "react-scroll";
import { ReactComponent as BubbleBorder } from "../../assets/bubble.svg";
import { categoriesArray } from "../../constant";
import { DivideLine } from "../DivideLine/DivideLine";

import "../CategoriesPage/CategoriesPage.css";

export const CategoriesPage = ({ setCategory }) => {
  return (
    <Element name="artists" className="element">
      <div className="artists-page ">
        <div className="artists-main-categories">
          {categoriesArray.map((category, index) => (
            <Link
              onClick={(e) => setCategory(category.title)}
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
        <DivideLine />
      </div>
    </Element>
  );
};
