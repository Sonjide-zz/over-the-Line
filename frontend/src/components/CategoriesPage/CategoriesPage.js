import React from "react";

import { Link, Element } from "react-scroll";
import { categoriesArray } from "../../constant";

export const CategoriesPage = ({ setCategory }) => {
  return (
    <Element name="artists" className="element">
      <div className="artists-page">
        <div className="artists-main">
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
              <div className={category.color}>{category.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </Element>
  );
};
