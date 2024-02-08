import React from "react";
import "./footer.scss";
import NavbarFooter from "./navbarfooter/NavbarFooter";

const Footer = () => {
  return (
    <div>
      <NavbarFooter />
      <div className="container-sm">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-2">
              <img
                className="logofooter"
                src="https://aboutfleet.ch/images/logo-verlag.svg"
              />
            </div>
            <div className="col-md-2">
              <ul className="unordered1">
                <li className="list-item1">
                  {" "}
                  <a className="alist" href="/">
                    {" "}
                    FLOTTE{" "}
                  </a>
                </li>
                <li className="list-item1">
                  {" "}
                  <a className="alist" href="/">
                    {" "}
                    AUTO BILF OSTERREICH{" "}
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <ul className="unordered1">
                <li className="list-item1">
                  <a className="alist" href="/">
                    {" "}
                    AUTO-INFORMATION{" "}
                  </a>{" "}
                </li>
                <li className="list-item1">
                  <a className="alist" href="/">
                    {" "}
                    ALLRADKATALOG{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <ul className="unordered1">
                <li className="list-item1">
                  <a className="alist" href="/">
                    {" "}
                    FAMILIENAUTOS
                  </a>
                </li>
                <li className="list-item1">
                  <a className="alist" href="/">
                    {" "}
                    FUHRPARK KOMPAKT
                  </a>
                </li>
                <li className="list-item1">
                  {" "}
                  <a className="alist" href="/">
                    NUTZFAHRZEUG KOMPASS
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <ul className="unordered1">
                <li className="list-item1">
                  <a className="alist" href="/">
                    {" "}
                    AUTOMOTIVE GUIDE
                  </a>{" "}
                </li>
                <li className="list-item1">
                  <a className="alist" href="/">
                    {" "}
                    A&W-TAG
                  </a>{" "}
                </li>
                <li className="list-item1">
                  <a className="alist" href="/">
                    {" "}
                    FLEET CONVENTION
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-2">
              <ul className="unordered1">
                <li className="list-item1">
                  {" "}
                  <a className="alist" href="/">
                    {" "}
                    DIGITAL SUMMIT{" "}
                  </a>{" "}
                </li>
                <li className="list-item1">
                  <a className="alist" href="/">
                    {" "}
                    ANTRIEBSWENDE{" "}
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="containerblack">
        <span className="greyT"> @2023 </span>{" "}
        <span className="whiteT"> A&W Verlag GmbH. </span>{" "}
        <span className="greyT"> All rights Reseved</span>
      </div>
    </div>
  );
};

export default Footer;
