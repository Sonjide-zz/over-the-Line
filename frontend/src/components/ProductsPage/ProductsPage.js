import React from "react";
import PropTypes from "prop-types";

export const ProductsPage = ({ category }) => {
  const classNamePicker = (object) => {
    if (object.toString() === "writing") {
      return "blue";
    } else if (object.toString() === "acting") {
      return "orange";
    } else {
      return "yellow";
    }
  };

  const categoryName = Object.keys(category)[0];

  return (
    <div className="artist-page">
      <div className="section-line"></div>
      <div className="artists-main d-flex justify-content-center align-items-center">
        {Object.values(category)[0] &&
          Object.values(category)[0].map((product, index) => (
            <div key={index} className={classNamePicker(categoryName)}>
              {product.title}
            </div>
          ))}
      </div>
    </div>
  );
};

ProductsPage.propTypes = {
  category: PropTypes.object,
};
