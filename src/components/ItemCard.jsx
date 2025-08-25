const ItemCard = ({ producto }) => {
return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem" }}>
    <img src={producto.imagen} alt={producto.nombre} width="150" />
    <h2>{producto.nombre}</h2>
    <p>Precio: ${producto.precio}</p>
    <Link to={`/item/${producto.id}`}>Ver Detalles</Link>
    </div>
);
};
