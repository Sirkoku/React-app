
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "1rem", width: "200px" }}>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: "150px" }} />
      <h3>Nombre: {producto.nombre}</h3>
      <p>Precio: ${producto.precio}</p>
      <p>Categoria:{producto.categoria} </p>
      <Link to={`/detail/${producto.id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;
