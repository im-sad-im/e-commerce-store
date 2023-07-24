import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage, { CartContext } from "./pages/ProductPage";
import NavbarNav from "../src/components/NavbarNav"
import Cart from './components/Cart';
import { useState } from 'react';

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    setCartItem((prevItem) => {
      return (
        [...prevItem, item]
      );
    });
  }
  return (
    <CartContext.Provider value={{ addToCart, cartItem, setCartItem }}>
      <NavbarNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartContext.Provider>
  )
}

export default App
