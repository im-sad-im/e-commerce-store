import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavbarNav from "../src/components/NavbarNav";
import Cart from "./components/Cart";
import CategoriesAccessories from "./components/Categories-pages/CategoriesAccessories";
import CategoriesAllClothing from "./components/Categories-pages/CategoriesAllClothing";
import CategorieswithSneaker from "./components/Categories-pages/CategorieswithSneaker";
import ProductItem from "./components/ProductItem";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import ProductPage, { CartContext } from "./pages/ProductPage";

function App() {
  const [cartItem, setCartItem] = useState([]);
  const [show, setShow] = useState(false);
  const [titleName, setTitleName] = useState("All");

  const addToCart = (item) => {
    setCartItem((prevItem) => {
      return [...prevItem, item];
    });
  };
  return (
    <CartContext.Provider
      value={{ addToCart, cartItem, setCartItem, show, setShow, titleName, setTitleName }}
    >
      <NavbarNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} >
          <Route path="/categories/all" element={<ProductItem />} />
          <Route path="/categories/sneaker" element={<CategorieswithSneaker />} />
          <Route path="/categories/accessories" element={<CategoriesAccessories />} />
          <Route path="/categories/allclothing" element={<CategoriesAllClothing />} /> 
        </Route>
        <Route path="/categories/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
