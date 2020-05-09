import 'bootstrap/dist/css/bootstrap.min.css'
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import "./App.css";
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes'
import Nav from "../components/template/Nav";
import Logo from "../components/template/Logo";
import Home from "../components/home/Home";
import Footer from "../components/template/Footer";

export default (props) => (
  <BrowserRouter>
    <div className="app">
      <Nav />
      <Logo />
      <Routes />    
      <Footer />
    </div>
  </BrowserRouter>
);
