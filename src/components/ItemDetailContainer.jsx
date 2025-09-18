import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
const { id } = useParams();
const [producto, setProducto] = useState(null);

useEffect(() => {
    const getProducto = async () => {
        console.log("buscando producto con id:",id);
      const docRef = doc(db, "productos", id); // id del producto en Firestore
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("producto encontrado:",docSnap.data());
        setProducto({ id: docSnap.id, ...docSnap.data() });
    } else {
        console.log("Producto no encontrado en firestore x id",id);
    }
    };

    getProducto();
}, [id]);

return (
    <div>
    {producto ? <ItemDetail producto={producto} /> : <p>Cargando...</p>}
    </div>
);
};

export default ItemDetailContainer;
