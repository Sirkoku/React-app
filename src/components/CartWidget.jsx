import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
const { totalItems } = useContext(CartContext);

return (
    <Link to="/cart">
    🛒 {totalItems > 0 && <span>({totalItems})</span>}
    </Link>
);
};

export default CartWidget;
