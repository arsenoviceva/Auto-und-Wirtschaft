import "./navbarfooter.scss";
import { Navbar } from "react-bootstrap";

const NavbarFooter = () => {
  return (
    <div className="containerGrey">
      <div class="container">
        <nav class="navbar navbar-expand-lg grey noPadding">
          <div className="col-lg-12">
            <div className="row">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav ">
                <div className="col-lg-12">
                  <div className="links">
                    <a class="navbar-brand" href="#">
                      Home
                    </a>
                    <a class="navbar-brand" href="#">
                      Magazin
                    </a>
                    <a class="navbar-brand" href="#">
                      Formulare
                    </a>
                    <a class="navbar-brand" href="#">
                      Foto/Video
                    </a>
                    <a class="navbar-brand" href="#">
                      Verlag
                    </a>
                    <a class="navbar-brand" href="#">
                      Team
                    </a>
                    <a class="navbar-brand" href="#">
                      Kontakt
                    </a>
                    <a class="navbar-brand" href="#">
                      Arb
                    </a>
                    <a class="navbar-brand" href="#">
                      Datenschutzerklarung
                    </a>
                    <a class="navbar-brand" href="#">
                      Impressum
                    </a>
                  </div>
                </div>
              </Navbar.Collapse>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavbarFooter;
