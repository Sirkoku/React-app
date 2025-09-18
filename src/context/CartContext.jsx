import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
const [cart, setCart] = useState([]);

const addToCart = (producto, cantidad) => {
    const existing = cart.find((item) => item.id === producto.id);
    if (existing) {
        setCart(
        cart.map((item) =>
            item.id === producto.id 
        ? { ...item, cantidad: item.cantidad + cantidad } 
        : item 
    ) 
); 
} else { 
    setCart([...cart, { ...producto, cantidad }]); 
} 
};

const removeFromCart = (id) => {
setCart((prevCart) =>
    prevCart
    .map((item) =>
        item.id === id
        ? { ...item, cantidad: item.cantidad - 1 }
        : item
    )
      .filter((item) => item.cantidad > 0) // si llega a 0 se elimina
);
};

const clearCart = () => setCart([]);

const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);

 const totalPrice = cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0);

return (
    <CartContext.Provider
    value={{ cart, addToCart, removeFromCart, clearCart, totalItems, totalPrice }}
    >
    {children}
    </CartContext.Provider>
);
};
