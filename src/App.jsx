import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import About from "./pages/About";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import FloatingContact from "./components/FloatingContact";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  return (
    <>
      <ScrollProgress />

      <Navbar />

      <FloatingContact />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/blog/:id" element={<BlogDetails />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/shop" element={<Shop />} />

        <Route
          path="/shop-details/:id"
          element={<ProductDetails />}
        />
      </Routes>

      <Footer />
    </>
  );
};

export default App;