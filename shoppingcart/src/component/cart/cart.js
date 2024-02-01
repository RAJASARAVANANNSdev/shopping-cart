import React, { useEffect, useState } from "react";
import "./cart.css";
function Cart({ cart, setCart, handleChange }) {
  const [price, setPrice] = useState(0);
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => {
      ans += item.amount * item.price;
    });
    setPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  });
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };
  return (
    <>
      <article>
        {cart.length ? (
          cart.map((item) => (
            <div className="cart_box" key={item.id}>
              <div className="img">
                <img src={item.img} alt={item.title} />
                <p>{item.title}</p>
                <p>price:{item.price}₹</p>
              </div>
              <div className="btn">
                <button onClick={() => handleChange(item, +1)}>+</button>
                <button>{item.amount}</button>
                <button onClick={() => handleChange(item, -1)}>-</button>
              </div>
              <div>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))
        ) : (
          <div className="cart_box">
            <p>your cart is empty</p>
          </div>
        )}
        <div className="total">
          <span>Total Price Of your cart</span>
          <span>Rs-{price}</span>
        </div>
      </article>
    </>
  );
}

export default Cart;
