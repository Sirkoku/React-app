import ItemCount from "./itemCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ producto }) => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = (cantidad) => {
    addToCart(producto, cantidad);
    
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem" }}>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: "150px" }} />
      <h2>{producto.nombre}</h2>
      <p>Precio: ${producto.precio}</p>
      <p>Categoría: {producto.categoria}</p>
      <ItemCount stock={25} initial={1} onAdd={handleAdd} />
    </div>
  );
};

export default ItemDetail;
