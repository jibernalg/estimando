import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";

//import Presupuestos from "./Presupuestos";
//import Programacion from "./Programacion";
//import Flujo from "./Flujo";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/estimando">
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} index />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
