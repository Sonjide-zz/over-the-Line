import React from "react";
import "../Footer/Footer.css";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <>
      <div className="section-line"></div>
      <footer className="footer d-flex ">
        <Container>
          <Row>
            <Col lg={6} sm={12} className="footer-links">
              <ul className="d-flex ">
                <li>
                  <div className="div-links">
                    <a
                      href="https://www.compasscollect.com/about-compass"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WHAT WE DO
                    </a>
                    <a
                      href="https://www.compasscollect.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CONTACT US
                    </a>
                  </div>
                </li>

                <li>
                  <div className="div-links">
                    <a
                      href="https://www.artscouncil.org.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      MEET THE TEAM
                    </a>
                    <a
                      href="https://www.artscouncil.org.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      NEWS
                    </a>
                  </div>
                </li>
                <li>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                      PROJECTS
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="https://www.compasscollect.com/past-projects">
                        PAST PROJECTS
                      </Dropdown.Item>
                      <Dropdown.Item href="https://www.compasscollect.com/current-projects">
                        CURRENT PROJECTS
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
            </Col>
            <Col lg={3} sm={12} className="social">
              <div>
                <ul>
                  <li>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      color="var(--main-bg-color)"
                      size="2x"
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faInstagram}
                      color="var(--main-bg-color)"
                      size="2x"
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faTwitter}
                      color="var(--main-bg-color)"
                      size="2x"
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faYoutube}
                      color="var(--main-bg-color)"
                      size="2x"
                    />
                  </li>
                </ul>
              </div>
            </Col>
            <Col col={3} className="survey-btn">
              <div>
                <button>SURVEY</button>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
