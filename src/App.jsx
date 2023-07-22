import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import NavbarNav from "../src/components/NavbarNav"
import Cart from './components/Cart';

function App() {

  return (
    <>
    <NavbarNav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </>
  )
}

export default App
