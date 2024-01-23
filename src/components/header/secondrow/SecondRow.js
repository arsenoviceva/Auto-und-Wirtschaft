import React from "react";
import './secondrow.scss';

import { Container, Nav, Navbar } from 'react-bootstrap';

 


const SecondRow = () => {
    return (  
        <Navbar className="secondRow">
            <Container>
                <Nav className="col-md-4 me-auto">
                <Navbar.Brand href="#home">
            <img  src='https://autoundwirtschaft.at/images/logo.png' style={{marginBottom: '2px'}} alt="Auto und Wirtschaft logo"
            />
          </Navbar.Brand>
                        
                </Nav>
                <Nav className="col-md-10 me-auto right ">
                    <Nav.Link className="rightLink" href="https://at.awverlag.com/">ABW Tag</Nav.Link>
                    <Nav.Link className="rightLink" href="https://at.awverlag.com/unternehmen.php">Automotive Guide</Nav.Link>
                    <Nav.Link className="rightLink" href="#kontakt">GW-Spezial</Nav.Link>
                    <Nav.Link className="rightLink" href="#mediadaten">Werkstatt des Vertrauens</Nav.Link>
                    <Nav.Link className="rightLink" href="#abo">Handlervertsage</Nav.Link>   
                </Nav>
            </Container>
      </Navbar>  
    )
}

export default SecondRow;