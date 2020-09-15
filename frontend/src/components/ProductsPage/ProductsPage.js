import React from "react";

import PropTypes from "prop-types";
import { classNamePicker } from "../../utils";
import { Link, Element } from "react-scroll";
import { ReactComponent as BubbleBorder } from "../../assets/bubble.svg";

import "../ProductsPage/ProductsPage.css";

export const ProductsPage = ({ category, artist, setProduct }) => {
  return (
    <>
      {category ? (
        <Element name="products" className="element">
          <div className="artist-page">
            <div className="artists-main d-flex justify-content-center align-items-center">
              <div className="products_bubbles d-flex">
                {artist.category &&
                  artist.category
                    .filter((cat) => cat.hasOwnProperty(category))[0]
                    [category].map((product, index) => (
                      <Link
                        onClick={() => setProduct(product)}
                        className="bubbles-link-artists"
                        activeClass="active"
                        to="product"
                        key={index}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1500}
                      >
                        <div
                          key={index}
                          className={classNamePicker(category)}
                          id="products-bubbles"
                        >
                          {product.title}
                          <BubbleBorder className="bubble-border-products"></BubbleBorder>
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

ProductsPage.propTypes = {
  category: PropTypes.string,
  artist: PropTypes.object,
  setProduct: PropTypes.func,
};
