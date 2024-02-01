import React from "react";
import {FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaRegEnvelopeOpen } from "react-icons/fa6";
import './navbar.scss';

const Navbar = () => {
   

   
    return (
        <div className="container3">

        
        <div className="row3">
        <nav className="navbarNewsletter">
        <FaRegEnvelopeOpen className="envelope" />
      <div className="brand">Newsletter</div>
      
      <span> Immer informiert blieben mit A&W-Newsletter. Jetzt anmelden! </span>
      <div className="searchNewsletter">
        <input type="text" placeholder="Ihre e-mail adresse" />
        <button>
           ANMELDEN
        </button>
      </div>
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
    </nav>
    </div>
    </div>
    )
}
export default Navbar;