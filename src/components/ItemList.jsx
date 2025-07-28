import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div>
      {productos.map((prod) => (
        <Item key={prod.id} producto={prod} />
      ))}
    </div>
  );
};

export default ItemList;
