import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/CartContext";
import CartPage from "./pages/CartPage";
import CheckoutForm from "./components/CheckoutForm";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          {/* Home*/}
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a la tienda" />} />

          {/* Filtrar por categoría */}
          <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />

          {/* Detalle de un producto */}
          <Route path="/detail/:id" element={<ItemDetailContainer />} />

          {/* Carrito */}
          <Route path="/cart" element={<CartPage />} />

          {/* Checkout Formulario*/}
          <Route path="/checkout" element={<CheckoutForm />} />


          {/* Ruta 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
