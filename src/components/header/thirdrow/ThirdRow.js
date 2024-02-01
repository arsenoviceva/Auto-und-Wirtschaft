import React from "react";
import './thirdrow.scss'

import { Container, Nav, Navbar } from 'react-bootstrap';
import { RiSearchLine } from "react-icons/ri";
 


const ThirdRow = () => {
    return (
        <Navbar expand="lg" className="thirdrow">
        <Container >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="col-md-12 me-auto ">
                    <Nav.Link className="active" href="/ " >NEWS</Nav.Link>
                   
                    <Nav.Link className="space" href="#features">E-PAPER</Nav.Link>
                    <Nav.Link className="space" href="#pricing">SPECIALS</Nav.Link>
                    <Nav.Link className="space"href="#home">SERVICE</Nav.Link>
                    <Nav.Link className="space"href="#features">NEWSLETTER</Nav.Link>
                    <Nav.Link className="space"href="#pricing">FOTO/VIDEO</Nav.Link>
                    <Nav.Link className="space"href="#pricing" >A&W WISSEN</Nav.Link>
                </Nav>
           
            <Nav className="search">
                <RiSearchLine style={{width:'auto', height: '1.4rem'}}/>             
            </Nav>
            </Navbar.Collapse>
        </Container>
        
      </Navbar>
    )
}

export default ThirdRow;