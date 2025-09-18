import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
const { categoriaId } = useParams();
const [items, setItems] = useState([]);

useEffect(() => {
    const obtenerProductos = async () => {
    try {
        const productosRef = collection(db, "productos"); 
        let q;

        if (categoriaId) {
        q = query(productosRef, where("categoria", "==", categoriaId));
        } else {
        q = productosRef;
        }

        const querySnapshot = await getDocs(q);

        const productosFirebase = querySnapshot.docs.map((doc) => ({
        id: doc.id, // id real del doc Firestore
        ...doc.data(),
    }));

     // Filtrado seguro por categoría
        const productosFiltrados = categoriaId
        ? productosFirebase.filter(
        (prod) => prod.categoria.toLowerCase() === categoriaId.toLowerCase()
    )
    : productosFirebase;

console.log("Productos filtrados:", productosFiltrados);
setItems(productosFiltrados);

    } catch (error) {
        console.error("Error al obtener productos:", error);
    }
    };

    obtenerProductos();
}, [categoriaId]);

return (
    <div>
    <h1>{greeting}</h1>
    <ItemList productos={items} />
    </div>
);
};

export default ItemListContainer;
