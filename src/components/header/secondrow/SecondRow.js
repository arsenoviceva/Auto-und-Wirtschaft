import React from "react";
import "./secondrow.scss";

import { Container, Nav, Navbar } from "react-bootstrap";

const SecondRow = () => {
  return (
    <Navbar expand="lg" className="secondRow">
      <Container>
        <Nav className="col-lg-2 me-auto">
          <Navbar.Brand href="/">
            <img
              src="https://autoundwirtschaft.at/images/logo.png"
              style={{ marginBottom: "2px", width: "100%" }}
              alt="Auto und Wirtschaft logo"
            />
          </Navbar.Brand>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="col-md-12 me-auto right ">
            <Nav.Link className="rightLink" href="https://at.awverlag.com/">
              ABW Tag
            </Nav.Link>
            <Nav.Link
              className="rightLink"
              href="https://at.awverlag.com/unternehmen.php"
            >
              Automotive Guide
            </Nav.Link>
            <Nav.Link className="rightLink" href="#kontakt">
              GW-Spezial
            </Nav.Link>
            <Nav.Link className="rightLink" href="#mediadaten">
              Werkstatt des Vertrauens
            </Nav.Link>
            <Nav.Link className="rightLink" href="#abo">
              Handlervertsage
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SecondRow;
