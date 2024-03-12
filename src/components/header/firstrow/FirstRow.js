import React from "react";
import "./firstrow.scss";

import { Container, Nav, Navbar } from "react-bootstrap";
import { FaUser } from "react-icons/fa";

const FirstRow = () => {
  return (
    <Navbar expand="lg" className="firstRow navbar navbar-expand-lg ">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="col-lg-10 me-auto ">
            <Nav.Link className="noHover" href="https://at.awverlag.com/">Verlag</Nav.Link>
            <Nav.Link className="noHover" href="https://at.awverlag.com/unternehmen.php">
              Team
            </Nav.Link>
            <Nav.Link className="noHover" href="#kontakt">Kontakt</Nav.Link>
            <Nav.Link className="noHover" href="#mediadaten">Mediadaten</Nav.Link>
            <Nav.Link className="noHover" href="#abo">ABO</Nav.Link>
          </Nav>
          <Nav className="col-lg-2 me-auto ">
            <Nav.Link  className="noHover" href="#abo">
              {" "}
              <FaUser style={{ verticalAlign: "text-top" }} /> LOG IN
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default FirstRow;
