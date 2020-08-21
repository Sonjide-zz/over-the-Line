import React from "react";

import { NavBar } from "../NavBar/NavBar";
import { Link, Element } from "react-scroll";
import { Footer } from "../Footer/Footer";

export const CategoriesPage = ({ setCategory }) => {
  const categoriesArray = [
    { title: "writing", color: "blue" },
    { title: "acting", color: "yellow" },
    { title: "music", color: "orange" },
  ];

  return (
    <Element name="artists" className="element">
      <div className="artists-page">
        <NavBar />

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
        <Footer />
      </div>
    </Element>
  );
};
