import React from "react";
import PropTypes from "prop-types";
import { classNamePicker } from "../../utils";
import { Link, Element } from "react-scroll";

export const ProductsPage = ({ category, artist, setProduct }) => {
  return (
    <Element name="products" className="element">
      <div className="artist-page">
        <div className="artists-main d-flex justify-content-center align-items-center">
          {artist.category &&
            artist.category
              .filter((cat) => cat.hasOwnProperty(category))[0]
              [category].map((product, index) => (
                <Link
                  onClick={(e) => setProduct(product)}
                  className="bubbles-link-artists"
                  activeClass="active"
                  to="product"
                  key={index}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1500}
                >
                  <div key={index} className={classNamePicker(category)}>
                    {product.title}
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </Element>
  );
};

ProductsPage.propTypes = {
  category: PropTypes.string,
  artist: PropTypes.object,
};
