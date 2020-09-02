import React from "react";

import { Element } from "react-scroll";
import { Footer } from "../Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

import { BackToTop } from "../BackToTop/BackToTop";
import "./ProductPage.css";

export const ProductPage = ({ product, artist }) => {
  return (
    <Element name="product" className="element">
      <div className="artist-page">
        <div className="artists-main-product d-flex flex-column justify-content-center align-items-center">
          {Object.entries(product).length !== 0 && (
            <Container fluid="md">
              <Row className="d-flex justify-content-center align-items-center row-product">
                <Col lg={8} xs={12} md={12}>
                  <div>
                    <iframe
                      className="embed-responsive-item youtube-video"
                      width="100%"
                      height="400px"
                      title="alex-video"
                      src="https://www.youtube.com/embed/LN-CXvWu90A"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </Col>
                <Col
                  lg={4}
                  xs={12}
                  md={12}
                  sm={12}
                  className="product-container-info"
                >
                  <div className="artist-name">
                    <h4>{artist.name}</h4>
                    <h5>{product.title}</h5>
                  </div>
                  <div className="artist-info">{artist.bio}</div>
                </Col>
              </Row>
            </Container>
          )}
        </div>
        <div className="d-flex justify-content-center">
          <BackToTop />
        </div>
      </div>

      <Footer />
    </Element>
  );
};

ProductPage.propTypes = {
  product: PropTypes.object,
  artist: PropTypes.object,
};
