import React from "react";
import { Element } from "react-scroll";

export const ProductPage = ({ product }) => {
  return (
    <Element name="product" className="element">
      <div className="artist-page">
        <div className="section-line"></div>
        <div className="artists-main d-flex justify-content-center align-items-center">
          <div className="product-container">
            <div className="video-product"></div>
            <div className="product-container-info">
              <div className="artist-name">{product.title}</div>
              <div className="artist-info"></div>
              <div className="artist-social-media"></div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};
