import React from "react";
import { Col, Container, Row, Nav, NavItem, NavLink } from "reactstrap";
import "./footer.scss";

import weoptLogo from "assets/images/weopt-white-logo.png";
import linkedinLogo from "assets/images/linkedin.svg";
import twitterLogo from "assets/images/twitter.svg";

function Footer() {
  return (
    <footer className="wo-footer mt-auto">
      <Container fluid>
        <Row>
          <Col md={{ size: "8", offset: 2 }}>
            <Row>
              <Col>
                <Nav className="nav-footer" vertical>
                  <NavItem>
                    <NavLink href="#">About Us</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Careers</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">FAQs</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Contact Us</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Terms & Services</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Privacy Policy</NavLink>
                  </NavItem>
                </Nav>
              </Col>
              <Col>
                <address>
                  WeOpt
                  <br />
                  Fujaireh Bla bla
                  <br />
                  8198293 Bla Bla
                  <br />
                  Tel.: +98 7282 7282 8
                  <br />
                  M.: info@weopt.com
                </address>
              </Col>
              <Col>
                <div>
                  <img src={weoptLogo} alt="WeOpt" className="footer-logo" />
                </div>
                <Nav className="social-links">
                  <NavLink href="#">
                    <img src={linkedinLogo} alt="Linkedin" />
                  </NavLink>
                  <NavLink href="#">
                    <img src={twitterLogo} alt="Twitter" />
                  </NavLink>
                </Nav>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
