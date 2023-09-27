import React, { useState } from "react";
import "../styles/Contacto.css";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [presupuesto, setPresupuesto] = useState(false);
  const [revit, setRevit] = useState(false);
  const [supervision, setSupervision] = useState(false);

  const handlePresupuestoClick = () => {
    setPresupuesto(!presupuesto);
  };

  const handleRevitClick = () => {
    setRevit(!revit);
  };

  const handleSupervisionClick = () => {
    setSupervision(!supervision);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Aquí puedes realizar la lógica para enviar el formulario, por ejemplo, enviar los datos al servidor o realizar alguna acción adicional.
  //   console.log("Datos del formulario:", { nombre, telefono, email, asunto });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/submit-form', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          empresa,
          telefono,
          email,
          asunto,
          presupuesto,
          revit,
          supervision,
        }),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        // You can also reset the form fields here if needed.
      } else {
        console.error("Error submitting form");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="contacto">
      <h1>CONTACTENOS</h1>
      <div className="contacto-form">
        <form onSubmit={handleSubmit}>
          <div className="campo">
            <label>Nombre:</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className="campo">
            <label>Empresa:</label>
            <input
              type="text"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
            />
          </div>
          <div className="campo">
            <label>Teléfono:</label>
            <input
              type="tel"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <div className="campo">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="campo">
            <label>Asunto:</label>
            <textarea
              value={asunto}
              onChange={(e) => setAsunto(e.target.value)}
              required
            />
          </div>
          <div className="opciones">
            <label className="subtitulo">Servicio:</label>
            <div>
              <input
                type="checkbox"
                checked={presupuesto}
                onChange={handlePresupuestoClick}
              />
              <label className="opcion">Presupuesto de obra</label>
            </div>
            <div>
              <input
                type="checkbox"
                checked={revit}
                onChange={handleRevitClick}
              />
              <label className="opcion">Modelación Revit</label>
            </div>
            <div>
              <input
                type="checkbox"
                checked={supervision}
                onChange={handleSupervisionClick}
              />
              <label className="opcion">Supervisión técnica </label>
            </div>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
