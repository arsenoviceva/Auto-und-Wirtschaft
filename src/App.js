import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./scss/main.scss";
import Header from "../src/components/header/Header";
import FirstGrid from "../src/components/grid/firstgrid/FirstGrid";
import SecondGrid from "../src/components/grid/secondgrid/SecondGrid";
import ThirdGrid from "../src/components/grid/thirdgrid/ThirdGrid";
import UpcomingEvents from "../src/components/upcomingevents/UpcomingEvents";
import Footer from "../src/components/footer/Footer";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import CategoryList from "./pages/category/CategoryList";
import News from "./pages/news/News";
import { Upc } from "react-bootstrap-icons";

function App() {
  return (
    <div>
      <Header />
      <div className="container" style={{ position: "relative" }}>
        {/*  <div style={{width: '100px', height: '100px', position: 'absolute', right:'-6rem'}}>
        <img src="https://advertising.symple.ch/www/images/59dd7654e0224a14678e3de03c4935f2.jpg"/>

      </div>*/}
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="categoryList" element={<CategoryList />} />
            <Route path="news" element={<News />} />
          </Routes>
        </BrowserRouter>
      </div>
      <UpcomingEvents />
      <Footer />
    </div>
  );
}

export default App;
