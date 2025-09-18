import ItemCount from "./itemCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ producto }) => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = (cantidad) => {
    addToCart(producto, cantidad);
    
  };

  return (   
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={producto.imagen}
            className="img-fluid rounded-start"
            alt={producto.nombre}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">Precio: ${producto.precio}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                Categoría: {producto.categoria}
              </small>
            </p>
            <ItemCount stock={producto.stock} initial={1} onAdd={handleAdd} />
          </div>
        </div>
      </div>
    </div> 
  );
};

export default ItemDetail;
