import React from "react";
import Navbar from "./component/navbar/navbar";
import Home from "./component/home/home";
//import Search from "./component/search/search";
import "../src/component/home/home.css";
import { Routes, Route } from "react-router-dom";
import Cart from "./component/cart/cart";
import Product from "./component/product/product";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/product" element={<Product />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
};

export default App;
