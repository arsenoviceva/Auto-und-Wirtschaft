import React  from 'react';
import 'bootstrap/dist/css/bootstrap.css';
 
import './scss/main.scss';
import Header from '../src/components/header/Header';
import FirstGrid from '../src/components/grid/firstgrid/FirstGrid';
import SecondGrid from '../src/components/grid/secondgrid/SecondGrid';
import ThirdGrid from '../src/components/grid/thirdgrid/ThirdGrid';
import UpcomingEvents from '../src/components/upcomingevents/UpcomingEvents';
import Footer from '../src/components/footer/Footer';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import CategoryList from './pages/category/CategoryList';
import { Upc } from 'react-bootstrap-icons';
 

function App() {
  return (
    <div >
      <Header/>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Header />}/>
          <Route index element={<Home />} />
          <Route path="categoryList" element={<CategoryList />}/>
        
        </Routes>
      </BrowserRouter>
      <UpcomingEvents/>
      <Footer/>
    </div>
 
  
  );
}

export default App;
