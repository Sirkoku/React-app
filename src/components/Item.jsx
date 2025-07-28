import React from "react";

const Item = ({ producto }) => {
  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>${producto.precio}</p>
      <button>Ver más</button>
    </div>
  );
};

export default Item;
