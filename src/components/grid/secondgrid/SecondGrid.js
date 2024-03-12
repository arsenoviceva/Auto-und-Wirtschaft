import React from "react";

import "./secondgrid.scss";
import Navbar1 from "./navbar/Navbar";

const SecondGrid = () => {
  return (
    <div>
      <div className="container greybg">
        <div className="col-lg-12">
          <div className="row padd">
            <div class="col-lg-3  padd">
              <div className="card">
                <img src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyfGVufDB8fDB8fHww" />
                <div class="card-body">
                  <div className="titleopasity">
                    <span class="news-title1 ">NEWS</span>
                    <span class="shortTitle-title2 ">SHORT TITLE</span>
                  </div>
                  <p class="card-text">
                    Neu Porsche Macan EV Prototype Drive: Porsches Zukunft Leigt
                    bei uns
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-3 padd">
              <div className="card">
                <img src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcnxlbnwwfHwwfHx8MA%3D%3D" />
                <div class="card-body">
                  <div className="titleopasity">
                    <span class="news-title1 ">NEWS</span>
                    <span class="shortTitle-title2 ">SHORT TITLE</span>
                  </div>
                  <p class="card-text">
                    Neu Porsche Macan EV Prototype Drive: Porsches Zukunft Leigt
                    bei uns
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-3 padd">
              <div className="card">
                <img src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyfGVufDB8fDB8fHww" />
                <div class="card-body">
                  <div className="titleopasity">
                    <span class="news-title1 ">NEWS</span>
                    <span class="shortTitle-title2 ">SHORT TITLE</span>
                  </div>
                  <p class="card-text">
                    Neu Porsche Macan EV Prototype Drive: Porsches Zukunft Leigt
                    bei uns
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-3 padd">
              <div className="card">
                <img src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcnxlbnwwfHwwfHx8MA%3D%3D" />
                <div class="card-body">
                  <div className="titleopasity">
                      <span class="news-title1 ">NEWS</span>
                      <span class="shortTitle-title2 ">SHORT TITLE</span>
                  </div>
                  <p class="card-text">
                    Neu Porsche Macan EV Prototype Drive: Porsches Zukunft Leigt
                    bei uns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar1 />
    </div>
  );
};

export default SecondGrid;
