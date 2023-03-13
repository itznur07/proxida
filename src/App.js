import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path="/shop/:id" element={<ProductDetails />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}

export default App;
