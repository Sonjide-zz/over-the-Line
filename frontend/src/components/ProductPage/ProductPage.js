import React from "react";
import { Element } from "react-scroll";

export const ProductPage = ({ product }) => {
  return (
    <Element name="product" className="element">
      <div className="artist-page">
        <div className="section-line"></div>
        <div className="artists-main d-flex justify-content-center align-items-center">
          {Object.entries(product).length !== 0 ? (
            <>
              <div className="col-6 video-product">
                <iframe
                  title="alex-video"
                  width="700"
                  height="500"
                  src="https://www.youtube.com/embed/LN-CXvWu90A"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="col-3 product-container-info">
                <div className="col-12 artist-name">{product.title}</div>
                <div className="col-12 artist-info">Testing1</div>
                <div className="col-12 artist-social-media">
                  <ul>
                    <li>facebook</li>
                    <li>twitter</li>
                    <li>linkedIn</li>
                  </ul>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </Element>
  );
};
