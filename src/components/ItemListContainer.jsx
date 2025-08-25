import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../data/products"; 
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
const { categoriaId } = useParams();
const [items, setItems] = useState([]);

useEffect(() => {
    const obtenerProductos = () =>
    new Promise((resolve) => {
        setTimeout(() => {
        resolve(productos);
        }, 500);
    });

    obtenerProductos().then((res) => {
        console.log("categoriaId desde la url:",categoriaId);
        console.log("categorias en productos;",res.map(p => p.categoria ));
    if (categoriaId) {
        // Filtrado insensible a mayúsculas
        setItems(
        res.filter(
            (prod) =>
            prod.categoria.toLowerCase() === categoriaId.toLowerCase()
        )
        );
    } else {
        setItems(res);
    }
    });
}, [categoriaId]);

return (
    <div>
    <h1>{greeting}</h1>
    <ItemList productos={items} />
    </div>
);
};

export default ItemListContainer;
