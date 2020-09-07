import React from "react";

import { Element } from "react-scroll";
import { Footer } from "../Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

import { BackToTop } from "../BackToTop/BackToTop";
import "./ProductPage.css";

export const ProductPage = ({
  product,
  artist,
  category,
  singleProductCheck,
}) => {
  return (
    <>
      {singleProductCheck >= 1 ? (
        <Element name="product" className="element">
          <div className="artist-page">
            <div className="artists-main-product d-flex flex-column justify-content-center align-items-center">
              {Object.entries(product).length !== 0 && (
                <Container
                  fluid="md"
                  className="d-flex align-items-center product-container"
                >
                  <Row className="d-flex justify-content-center align-items-center row-product">
                    <Col lg={8} xs={12} md={12}>
                      <div>
                        {product.type === "text" ? (
                          <div
                            className="product-writing"
                            dangerouslySetInnerHTML={{
                              __html: product.link,
                            }}
                          ></div>
                        ) : (
                          <iframe
                            className="embed-responsive-item youtube-video"
                            width="100%"
                            height="400px"
                            title={product.title}
                            src={product.link.replace(
                              "https://youtu.be/",
                              "https://www.youtube.com/embed/"
                            )}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        )}
                      </div>
                    </Col>
                    <Col
                      lg={4}
                      xs={12}
                      md={12}
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
              <div className="d-flex justify-content-center back-btn">
                <BackToTop />
              </div>

              <Footer />
            </div>
          </div>
        </Element>
      ) : null}
    </>
  );
};

ProductPage.propTypes = {
  product: PropTypes.object,
  artist: PropTypes.object,
};
