import React, { useState } from "react";
import {
  Col,
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row
} from "reactstrap";
import "./header.scss";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <header className="wo-header">
      <Container fluid>
        <Row>
          <Col md={{ size: "9", offset: 2 }}>
            <Navbar className="wo-navbar" expand="md">
              <NavbarBrand href="/"></NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="_links" navbar>
                  <NavItem>
                    <NavLink>What we do</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>How it works</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>Why us</NavLink>
                  </NavItem>
                </Nav>
                <Nav className="_buttons ml-auto" navbar>
                  <NavItem>
                    <NavLink href="#" className="btn-default">
                      Login
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="demo" className="btn-default">
                      Demo
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
