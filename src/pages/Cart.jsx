import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = ({ onCheckout }) => {
const { cart, removeFromCart, clearCart, totalPrice } = useContext(CartContext);

if (cart.length === 0) {
    return (
    <div style={{ padding: "2rem" }}>
        <h2>Tu carrito está vacío 🛒</h2>
        <Link to="/">Volver a la tienda</Link>
    </div>
    );
}

return (
    <div style={{ padding: "2rem" }}>
    <h2>Carrito de compras</h2>

    {cart.map((item) => (
        <div key={item.id} style={{ padding: "2rem" }}>
        <img
            src={item.imagen}
            alt={item.nombre}
            style={{ width: "100px", marginRight: "1rem" }}
        />
        <div>
            <h3>{item.nombre}</h3>
            <p>
            Cantidad: {item.cantidad} | Precio unitario: ${item.precio} |{" "}
              <strong>Subtotal: ${item.cantidad * item.precio}</strong>
            </p>
            <button onClick={() => removeFromCart(item.id)}>❌ Eliminar</button>
        </div>
        </div>
    ))}

    <h3>Total a pagar: ${totalPrice}</h3>

    <button onClick={clearCart} style={{ marginRight: "1rem" }}>
        Vaciar carrito
    </button>

    <button onClick={onCheckout}>Finalizar compra</button>
    </div>
);
};

export default Cart;
