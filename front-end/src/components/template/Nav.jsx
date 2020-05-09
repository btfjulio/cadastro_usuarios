import "./Nav.css";

import React from "react";
import { Link } from 'react-router-dom'

export default (props) => (
  <aside className="menu-area">
    <nav className="menu">
      <Link to="/">
        <i className="fa fa-home mr-2"></i>Início
      </ Link>
      <Link to="/users">
        <i className="fa fa-users mr-2"></i>Usuários
      </ Link>
    </nav>
  </aside>
);
