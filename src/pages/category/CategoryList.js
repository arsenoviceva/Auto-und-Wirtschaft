import "./categorylist.scss";
import ThirdGrid from "../../components/grid/thirdgrid/ThirdGrid";

const CategoryList = () => {
  return (
    <div className="container">
      <nav class="breadcrumb">
        <a className="breadcrumbStyle"
          href="/"
          style={{ opacity: "50%", color: "black", textDecoration: "none" }}
        >
          Home
        </a>
        <span class="separator">{">>"}</span>
        <a className="breadcrumbStyle"
          href="/news"
          style={{ opacity: "50%", color: "black", textDecoration: "none" }}
        >
          News
        </a>
        <span class="separator">{">>"}</span>
        <a className="breadcrumbStyle"
          href="/categoryList"
          style={{ color: "#b51722", textDecoration: "none" }}
        >
          Category name
        </a>
      </nav>
      <div className="col-lg-12">
        <div class="row">
          <div class="col-lg-9">
            <h2 className="categoryNameTitle"> Category name</h2>

            <div className="row">
              <div class="col-lg-6">
                <div class="card">
                  <img
                    className="card-img"
                    src="https://autoundwirtschaft.at/NewsImages-868x537/pic41766_1-land-oberosterreich-will-keine-byd-fahrzeuge.jpeg"
                  />
                  <div class="card-body">
                    <div className="titleopasity">
                      <span class="news-title1 ">NEWS</span>
                      <span class="shortTitle-title2 ">SHORT TITLE</span>
                    </div>
                    <p class="card-text">
                      Neu Porsche Macan EV Prototype Drive
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="card">
                  <img
                    className="card-img"
                    src="https://autoundwirtschaft.at/NewsImages-868x537/pic41766_1-land-oberosterreich-will-keine-byd-fahrzeuge.jpeg"
                  />
                  <div class="card-body">
                    <div className="titleopasity">
                      <span class="news-title1 ">NEWS</span>
                      <span class="shortTitle-title2 ">SHORT TITLE</span>
                    </div>
                    <p class="card-text">
                      Neu Porsche Macan EV Prototype Drive
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div class="col-lg-6">
                <div class="card">
                  <img
                    className="card-img"
                    src="https://autoundwirtschaft.at/NewsImages-868x537/pic41766_1-land-oberosterreich-will-keine-byd-fahrzeuge.jpeg"
                  />
                  <div class="card-body">
                    <div className="titleopasity">
                      <span class="news-title1 ">NEWS</span>
                      <span class="shortTitle-title2 ">SHORT TITLE</span>
                    </div>
                    <p class="card-text">
                      Neu Porsche Macan EV Prototype Drive
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="card">
                  <img
                    className="card-img"
                    src="https://autoundwirtschaft.at/NewsImages-868x537/pic41766_1-land-oberosterreich-will-keine-byd-fahrzeuge.jpeg"
                  />
                  <div class="card-body">
                    <div className="titleopasity">
                      <span class="news-title1 ">NEWS</span>
                      <span class="shortTitle-title2 ">SHORT TITLE</span>
                    </div>
                    <p class="card-text">
                      Neu Porsche Macan EV Prototype Drive
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div class="col-lg-6">
                <div class="card">
                  <img
                    className="card-img"
                    src="https://autoundwirtschaft.at/NewsImages-868x537/pic41766_1-land-oberosterreich-will-keine-byd-fahrzeuge.jpeg"
                  />
                  <div class="card-body">
                    <div className="titleopasity">
                      <span class="news-title1 ">NEWS</span>
                      <span class="shortTitle-title2 ">SHORT TITLE</span>
                    </div>
                    <p class="card-text">
                      Neu Porsche Macan EV Prototype Drive
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="card">
                  <img
                    className="card-img"
                    src="https://autoundwirtschaft.at/NewsImages-868x537/pic41766_1-land-oberosterreich-will-keine-byd-fahrzeuge.jpeg"
                  />
                  <div class="card-body">
                    <div className="titleopasity">
                      <span class="news-title1 ">NEWS</span>
                      <span class="shortTitle-title2 ">SHORT TITLE</span>
                    </div>
                    <p class="card-text">
                      Neu Porsche Macan EV Prototype Drive
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />
            <br />
          </div>
          <div class="col-lg-3">
            <h4 className="h4title"> Current issue</h4>
            <hr />
            <img
              className="colImg"
              src="https://ch.awverlag.com/MedienweltImages-270x379/21_medienwelt-auto-wirtschaft-irega.jpg"
            />
            <h4 className="colTitle"> AUTO & Wirtschaft</h4>
            <h4 className="colTitleRed"> 09/2023 </h4>
            <img
              className="colImg"
              src="https://advertising.symple.ch/www/images/a964cfcd3dacd8eb2ab31723f9b5f8a9.jpg"
            />
            <h4 className="colTitle2"> Most read</h4>
            <hr />
            <ol>
              <li>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                eiusmod tempor incidunt ut labore et dolore magna aliqua.{" "}
              </li>
              <li> Lorem ipsum dolor sit amet, consectetur adipisci elit. </li>
              <li> Lorem ipsum dolor sit amet, consectetur adipisci elit. </li>
            </ol>
          </div>
        </div>
      </div>

      <ThirdGrid />
    </div>
  );
};

export default CategoryList;
