import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Cart from "../pages/Cart/Cart";
import Wishlist from "../pages/Wishlist/wishlist";
// import Product from "../pages/Product/Product";
import Cheakout from "../pages/Cheakout/Cheakout";
import Collections from "../pages/Collections/Collections";
import ProductDetails from "../pages/Product/ProductDetails";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/collection" element={<Collections />} />
      <Route path="/wishlist" element={<Wishlist />} />
      {/* <Route path="/product/:id" element={<Product />} /> */}
      <Route path="/cheakout/:id" element={<Cheakout />} />
      <Route
        path="/product/:slug"
        element={<ProductDetails />}
      />
    </Routes>
  );
}

export default AppRoutes;