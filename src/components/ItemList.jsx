import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {productos.map((prod) => (
        <Item key={prod.id} producto={prod} />
      ))}
    </div>
  );
};

export default ItemList;
