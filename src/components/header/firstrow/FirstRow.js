import React from "react";
import './firstrow.scss';

import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaUser  } from "react-icons/fa";

const FirstRow = () => {
    return (  
        <Navbar className="firstRow">
            <Container>
                <Nav className="col-md-12 me-auto ">
                    <Nav.Link href="https://at.awverlag.com/">Verlag</Nav.Link>
                    <Nav.Link href="https://at.awverlag.com/unternehmen.php">Team</Nav.Link>
                    <Nav.Link href="#kontakt">Kontakt</Nav.Link>
                    <Nav.Link href="#mediadaten">Mediadaten</Nav.Link>
                    <Nav.Link href="#abo">ABO</Nav.Link>       
                </Nav>
                <Nav className="col-md-2 me-auto">
                    <Nav.Link href="#abo"> <FaUser style={{verticalAlign:'text-top'}}/> LOG IN</Nav.Link>        
                </Nav>
            </Container>
      </Navbar>  
    )
}

export default FirstRow;