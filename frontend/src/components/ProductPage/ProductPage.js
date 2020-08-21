import React from "react";
import { Element } from "react-scroll";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "react-bootstrap";

export const ProductPage = ({ product, artist }) => {
  return (
    <Element name="product" className="element">
      <div className="artist-page">
        <NavBar />
        <div className="artists-main d-flex justify-content-center align-items-center">
          {Object.entries(product).length !== 0 ? (
            <Container fluid="md">
              <Row>
                <Col>
                  <div className="video-container">
                    <iframe
                      className="responsive-iframe"
                      width="550px"
                      height="400px"
                      title="alex-video"
                      src="https://www.youtube.com/embed/LN-CXvWu90A"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="product-container-info">
                    <div className="artist-name">
                      <h4>{artist.name}</h4>
                      <h5>{product.title}</h5>
                    </div>
                    <div className=" artist-info">{artist.bio}</div>
                    <div className="artist-social-media">
                      <ul>
                        <li>
                          <FontAwesomeIcon
                            icon={faFacebook}
                            size="2x"
                            color="red"
                          />
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faInstagram}
                            size="2x"
                            color="yellow"
                          />
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faTwitter}
                            size="2x"
                            color="aqua"
                          />
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            size="2x"
                            color="blue"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          ) : null}
        </div>
      </div>
      <Footer />
    </Element>
  );
};
