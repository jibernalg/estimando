import React from "react";
import "../styles/Servicios.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyCheckDollar,
  faChartLine,
  faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";
import foto1 from "../images/ppto1.png";
import foto2 from "../images/planeacion1.png";
import foto3 from "../images/flujo1.png";

const Servicios = () => {
  return (
    <div className="servicios">
      <h1>SERVICIOS</h1>
      <div className="picture-container">
        <div className="picture">
          <img src={foto1} alt="Service 1" />
          <h3>
            <FontAwesomeIcon
              icon={faMoneyCheckDollar}
              className="custom-icon"
            />{" "}
            Presupuestos de obra
          </h3>
          <p>
            Description for Service 1. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
        <div className="picture">
          <img src={foto2} alt="Service 1" />
          <h3>
            <FontAwesomeIcon icon={faDiagramProject} className="custom-icon" />{" "}
            Programación de obra
          </h3>
          <p>
            Description for Service 2. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
        <div className="picture">
          <img src={foto3} alt="Service 1" />
          <h3>
            <FontAwesomeIcon icon={faChartLine} className="custom-icon" /> Flujo
            de caja
          </h3>
          <p>
            Description for Service 3. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
