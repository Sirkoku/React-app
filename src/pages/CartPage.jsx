import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
const { cart, removeFromCart, clearCart, totalPrice } = useContext(CartContext);

if (cart.length === 0) {
    return <h2>El carrito está vacío 🛒</h2>;
}

return (
    <div style={{ padding: "1rem" }}>
    <h1>Tu Carrito</h1>
    <ul>
        {cart.map((item) => (
        <li key={item.id} style={{ margin: "1rem 0", borderBottom: "1px solid #ccc" }}>
            <h3>{item.nombre}</h3>
            <p>Precio: ${item.precio}</p>
            <p>Cantidad: {item.cantidad}</p>
            <p>Subtotal: ${item.precio * item.cantidad}</p>
            <button onClick={() => removeFromCart(item.id)}>Eliminar 1 unidad</button>
        </li>
        ))}
    </ul>

    <h2>Total: ${totalPrice}</h2>
    <button onClick={clearCart}>Vaciar carrito</button>
    <button onClick={() => alert("Compra finalizada 🎉")}>Finalizar compra</button>
    </div>
);
};

export default CartPage;
