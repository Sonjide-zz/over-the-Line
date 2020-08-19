import React from "react";
import PropTypes from "prop-types";
import { classNamePicker } from "../../utils";
import { Link, Element } from "react-scroll";

export const ProductsPage = ({ category, setProduct }) => {
  const categoryName = Object.keys(category)[0];

  return (
    <Element name="products" className="element">
      <div className="artist-page">
        <div className="section-line"></div>
        <div className="artists-main d-flex justify-content-center align-items-center">
          {Object.values(category)[0] &&
            Object.values(category)[0].map((product, index) => (
              <Link
                onClick={(e) => setProduct(product)}
                className="bubbles-link-artists"
                activeClass="active"
                to="product"
                spy={true}
                smooth={true}
                offset={0}
                duration={1500}
              >
                <div key={index} className={classNamePicker(categoryName)}>
                  <div key={index} className={classNamePicker(category)}>
                    {product.title}
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </Element>
  );
};

ProductsPage.propTypes = {
  category: PropTypes.object,
};
