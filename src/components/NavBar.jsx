import React from "react";
import { Link } from "react-router-dom";


const categorias = ["remeras", "pantalones", "buzos", "camperas"];

const NavBar = () => {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#05f8bfff" }}>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
        {/* Home */}
        <li>
          <Link to="/">Inicio</Link>
        </li>

        {/* Categorías */}
        {categorias.map((cat) => (
          <li key={cat}>
            {/* Enlace que pasa la categoría en lowercase para coincidir con el filtro */}
            <Link to={`/categoria/${cat.toLowerCase()}`}>
              {/* Mostrar la primera letra en mayúscula */}
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Link>
          </li>
        ))}

        {/* Carrito */}
        <li>
          <Link to="/cart">🛒 Carrito</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
