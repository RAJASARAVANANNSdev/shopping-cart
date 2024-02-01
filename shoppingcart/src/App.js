import React, { useState } from "react";
import Navbar from "./component/navbar/navbar";
import Home from "./component/home/home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Cart from "./component/cart/cart";
import Product from "./component/product/product";
import Form from "./component/form/form";
import Formlogin from "./component/form/formlogin";

const App = () => {
  const [cart, setCart] = useState([]);
  const navigation = useNavigate();

  const HandleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) return;
    setCart([...cart, item]);
    navigation("/cart");
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });

    const tempArr = [...cart]; // Make a copy of the cart array

    tempArr[ind].amount += d;
    if (tempArr[ind].amount === 0) {
      tempArr[ind].amount = 1;
    }

    setCart(tempArr);
  };

  return (
    <>
      <Navbar size={cart.length} />
      <Routes>
        <Route
          exact
          path="/home"
          element={<Home handleClick={HandleClick} />}
        ></Route>
        <Route exact path="/product" element={<Product />}></Route>
        <Route
          exact
          path="/cart"
          element={
            <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
          }
        ></Route>
        <Route exact path="/form" element={<Form />}></Route>
        <Route path="/login" element={<Formlogin />}></Route>
      </Routes>
    </>
  );
};

export default App;
