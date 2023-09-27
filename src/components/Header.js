// Header.js
import React from "react";
import { Link } from "react-router-dom";
import logoblack from "../images/Building3.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      
        <div className="header-logo">
          <img src={logoblack} alt="Company Logo" />
        </div>
        <nav className="header-nav">
          <ul>
            <li>
              <Link className="no-underline" to="/inicio">
                <a href="#">Inicios</a>
              </Link>
            </li>
            <li>
              <Link className="no-underline" to="/nosotros">
                <a href="#">Nosotros</a>
              </Link>
            </li>
            <li>
              <Link className="no-underline" to="/servicios">
                <a href="#">Servicios</a>
              </Link>
            </li>
            

            <li>
              <Link className="no-underline" to="/contacto">
                <a href="#">Contactenos</a>
              </Link>
            </li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;
