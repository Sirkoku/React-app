import React, { useEffect, useState } from "react";
import productos from "../data/products";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
const [items, setItems] = useState([]);

useEffect(() => {
    
    const obtenerProductos = () =>
    new Promise((resolve) => {
        setTimeout(() => {
        resolve(productos);
        }, 1500);
    });

    obtenerProductos().then((res) => setItems(res));
}, []);

return (
    <div>
    <h1>{greeting}</h1>
    <ItemList productos={items} />
    </div>
);
};

export default ItemListContainer;
