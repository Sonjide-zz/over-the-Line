import React from "react";

import PropTypes from "prop-types";
import { classNamePicker } from "../../utils";
import { Link, Element } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as BubbleBorder } from "../../assets/bubble.svg";

import "../ProductsPage/ProductsPage.css";

export const ProductsPage = ({
  category,
  artist,
  setProduct,
  singleProductCheck,
}) => {
  return (
    <>
      {category && singleProductCheck >= 1 ? (
        <Element name="products" className="element">
          <Container fluid>
            <Row>
              <div className="products_bubbles d-flex">
                {artist.category &&
                  artist.category
                    .filter((cat) => cat.hasOwnProperty(category))[0]
                    [category].map((product, index) => (
                      <Col key={index}>
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
                      </Col>
                    ))}
              </div>
            </Row>
          </Container>
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
