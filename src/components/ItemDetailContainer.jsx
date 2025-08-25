import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../data/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
const { id } = useParams();
const [producto, setProducto] = useState(null);

useEffect(() => {
    const getProducto = () =>
    new Promise((resolve) => {
        setTimeout(() => {
        resolve(productos.find((p) => p.id === parseInt(id)));
        }, 500);
    });

    getProducto().then((res) => setProducto(res));
}, [id]);

return (
    <div>
    {producto ? <ItemDetail producto={producto} /> : <p>Cargando...</p>}
    </div>
);
};

export default ItemDetailContainer;
