import React from "react";
import "./upcomingevents.scss";
import logo from "../../logoblack.png";
import { TbClockCheck } from "react-icons/tb";
import { TfiLocationPin } from "react-icons/tfi";

const UpcomingEvents = () => {
  return (
    <div className="container">
      <div className="col-lg-12">
        <div className="events">
          <a className="logo" href="/">
            <img src={logo} style={{ width: "200px", height: "50px" }} />
          </a>
          <h3 className="title"> Upcoming events</h3>
        </div>
        <hr />
        <div className="firstrowevents">
          <div className="row">
            <div className="col-lg-6">
              <div className="secondrowevents">
                <div className="col-lg-6">
                  <div className="img-cover">
                    <img src="https://autoundwirtschaft.at/GalleryImages-720x469/8091_CH_AW_Tag_20231017_1714.jpg" />
                  </div>
                </div>

                <div className="col-lg-6">
                  <h3 className="titleevent"> Event name number 1 </h3>
                  <h4 className="titledetails">
                    {" "}
                    <TbClockCheck className="icons" /> Time: 2/10/2023
                  </h4>
                  <h4 className="titledetails">
                    {" "}
                    <TfiLocationPin className="icons" /> Location: Location Gala
                    Event Club
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="secondrowevents">
                <div className="col-lg-6">
                  <div className="img-cover">
                    <img src="https://autoundwirtschaft.at/GalleryImages-720x469/8091_CH_AW_Tag_20231017_1714.jpg" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <h3 className="titleevent"> Event name number 2 </h3>
                  <h4 className="titledetails">
                    {" "}
                    <TbClockCheck className="icons" /> Time: 2/10/2023
                  </h4>
                  <h4 className="titledetails">
                    {" "}
                    <TfiLocationPin className="icons" /> Location: Location Gala
                    Event Club
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="firstrowevents">
          <div className="row">
            <div className="col-lg-6">
              <div className="secondrowevents">
                <div className="col-lg-6">
                  <div className="img-cover">
                    <img src="https://autoundwirtschaft.at/GalleryImages-720x469/8091_CH_AW_Tag_20231017_1714.jpg" />
                  </div>
                </div>

                <div className="col-lg-6">
                  <h3 className="titleevent"> Event name number 3 </h3>
                  <h4 className="titledetails">
                    {" "}
                    <TbClockCheck className="icons" /> Time: 2/10/2023
                  </h4>
                  <h4 className="titledetails">
                    {" "}
                    <TfiLocationPin className="icons" /> Location: Location Gala
                    Event Club
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="secondrowevents">
                <div className="col-lg-6">
                  <div className="img-cover">
                    <img src="https://autoundwirtschaft.at/GalleryImages-720x469/8091_CH_AW_Tag_20231017_1714.jpg" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <h3 className="titleevent"> Event name number 4 </h3>
                  <h4 className="titledetails">
                    {" "}
                    <TbClockCheck className="icons" /> Time: 2/10/2023
                  </h4>
                  <h4 className="titledetails">
                    {" "}
                    <TfiLocationPin className="icons" /> Location: Location Gala
                    Event Club
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpcomingEvents;
