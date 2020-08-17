import React from "react";

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

  console.log(categoryName);

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
