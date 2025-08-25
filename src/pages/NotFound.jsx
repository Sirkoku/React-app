import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
