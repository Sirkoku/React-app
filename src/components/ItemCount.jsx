import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
const [count, setCount] = useState(initial);

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

return (
    <div style={{ margin: "1rem" }}>
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <button onClick={Quitar}>-</button>
        <span>{count}</span>
        <button onClick={Agregar}>+</button>
    </div>
    <button 
        onClick={() => onAdd(count)} 
        style={{ marginTop: "0.5rem" }}
    >
        Agregar al carrito
    </button>
    </div>
);
};

export default ItemCount;
