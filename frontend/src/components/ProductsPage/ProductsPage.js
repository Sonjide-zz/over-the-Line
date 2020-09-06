import React from "react";

import PropTypes from "prop-types";
import { classNamePicker } from "../../utils";
import { Link, Element } from "react-scroll";
import { ReactComponent as BubbleBorder } from "../../assets/bubble.svg";
import { DivideLine } from "../DivideLine/DivideLine";

import "../ProductsPage/ProductsPage.css";

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
                  <div
                    key={index}
                    className={classNamePicker(category)}
                    id="products-bubbles"
                  >
                    {product.title}
                    <BubbleBorder
                      title="bubble-border"
                      className="bubble-border-products"
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

ProductsPage.propTypes = {
  category: PropTypes.string,
  artist: PropTypes.object,
};
