import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";

const CheckoutForm = () => {
const { cart, totalPrice, clearCart } = useContext(CartContext);

const [nombre, setNombre] = useState("");
const [email, setEmail] = useState("");
const [direccion, setDireccion] = useState("");
const [ordenId, setOrdenId] = useState(null);
const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
    const orden = {
        comprador: { nombre, email, direccion },
        items: cart.map(({ id, nombre, precio, cantidad }) => ({
        id,
        nombre,
        precio,
        cantidad,
        })),
        total: totalPrice,
        fecha: serverTimestamp(),
    };

    const docRef = await addDoc(collection(db, "ordenes"), orden);
    setOrdenId(docRef.id);
    clearCart();
    } catch (error) {
    console.error("Error creando la orden:", error);
    } finally {
    setLoading(false);
    }
};

if (loading) {
    return <p>Cargando orden...</p>;
}

if (ordenId) {
    return (
    <div style={{ padding: "2rem" }}>
        <h2>¡Compra realizada con éxito! ✅</h2>
        <p>Tu ID de orden es: <strong>{ordenId}</strong></p>
    </div>
    );
}

return (
    <div style={{ padding: "2rem" }}>
    <h2>Checkout</h2>
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px" }}>
        <input
        type="text"
        placeholder="Nombre completo"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
        />
        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />
        <input
        type="text"
        placeholder="Dirección"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
        required
        />
        <button type="submit">Finalizar compra</button>
    </form>
    </div>
);
};

export default CheckoutForm;
