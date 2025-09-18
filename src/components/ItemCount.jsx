import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
const [count, setCount] = useState(initial);
const [agregado, setAgregado] = useState(false);

const Agregar = () => {
    if (count < stock) {
    setCount(count + 1);
    }
};

const Quitar = () => {
    if (count > 1) {
    setCount(count - 1);
    }
};

const handleAdd = () => {
    onAdd(count);
    setAgregado(true);
};

if (agregado) {
    return <p>Producto agregado al carrito ✅</p>;
}

return (
    <div style={{ margin: "1rem" }}>
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <button onClick={Quitar}>-</button>
        <span>{count}</span>
        <button onClick={Agregar}>+</button>
    </div>
    <button onClick={handleAdd} style={{ marginTop: "0.5rem" }}>
        Agregar al carrito
    </button>
    </div>
);
};

export default ItemCount;
