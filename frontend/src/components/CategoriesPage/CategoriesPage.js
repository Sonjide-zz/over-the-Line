import React from "react";
import { Link, Element } from "react-scroll";

import { categoryColorsObject } from "../../constant";

export const CategoriesPage = ({ setCategory }) => {
  const categoriesArray = [
    { title: "writing", color: categoryColorsObject.blue },
    { title: "acting", color: categoryColorsObject.orange },
    { title: "music", color: categoryColorsObject.yellow },
  ];

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
