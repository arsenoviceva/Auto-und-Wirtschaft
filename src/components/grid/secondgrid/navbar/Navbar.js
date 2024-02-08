import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaRegEnvelopeOpen } from "react-icons/fa6";
import "./navbar.scss";

const Navbar1 = () => {
  return (
    <div className="containerGrey">
      <nav class="navbar navbar-expand-lg navbarNewsletter grey">
        <div class="container grey">
          <div className="col-lg-12">
            <div className="row">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav ">
                <FaRegEnvelopeOpen className="envelope" />

                <h4 className="brand">Newsletter</h4>
                <span>
                  Immer informiert blieben mit A&W-Newsletter. Jetzt anmelden!
                </span>
                <a class="searchNewsletter">
                  <input type="text" placeholder="Ihre e-mail adresse" />
                  <button>ANMELDEN</button>
                </a>
                <div className="social-icons">
                  <a href="#">
                    <FaFacebook />
                  </a>
                  <a href="#">
                    <FaTwitter />
                  </a>
                  <a href="#">
                    <FaLinkedin />
                  </a>
                  <a href="#">
                    <FaYoutube />
                  </a>
                </div>
              </Navbar.Collapse>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar1;
