import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
const { cart, removeFromCart, clearCart, totalPrice } =
    useContext(CartContext);

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

    <ul>
        {cart.map((item) => (
        <li key={item.id} style={{ marginBottom: "1rem" }}>
            <h3>{item.nombre}</h3>
            <p>
            Cantidad: {item.cantidad} | Precio unitario: ${item.precio} | Subtotal: $
              {item.cantidad * item.precio}
            </p>
            <button onClick={() => removeFromCart(item.id)}>❌ Eliminar</button>
        </li>
        ))}
    </ul>

    <h3>Total a pagar: ${totalPrice}</h3>

    <button onClick={clearCart} style={{ marginRight: "1rem" }}>
        Vaciar carrito
    </button>

    <button>Finalizar compra</button>
    </div>
);
};

export default Cart;
