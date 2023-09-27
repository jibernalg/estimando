// Footer.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

//import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-middle">
        <div className="footer-links">
          <ul>
            <li>
              <Link className="no-underline" to="/">
                <a href="#">Inicio</a>
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
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contactenos</h4>
          <p>
            <FontAwesomeIcon icon={faEnvelope} style={{
                color: "darkkhaki",
                fontSize: "18px",
              }} /> &nbsp;&nbsp;info@estimando.com.co
          </p>
          <p>
            <FontAwesomeIcon
              icon={faWhatsapp}
              style={{
                color: "darkkhaki",
                fontSize: "18px",
              }}
            />{" "}
            &nbsp;&nbsp;+57 (310) 666-6666
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Estimando. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
