import React from "react";
import PropTypes from "prop-types";
import { classNamePicker } from "../../utils";

export const ArtistPage = ({ categories, setCategory }) => {
  return (
    <div className="artist-page">
      <div className="section-line"></div>
      <div className="artists-main d-flex justify-content-center align-items-center">
        {categories.map((category, index) => (
          <div
            key={index}
            className={classNamePicker(Object.keys(category))}
            onClick={(e) => setCategory(category)}
          >
            {Object.keys(category)}
          </div>
        ))}
      </div>
    </div>
  );
};

ArtistPage.propTypes = {
  categories: PropTypes.array,
};
