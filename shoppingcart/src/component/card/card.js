import React from "react";
import "./cards.css";
import { useNavigate } from "react-router-dom";

function Card({ item, handleClick, cart }) {
  // eslint-disable-next-line no-undef

  const navigation = useNavigate();
  console.log(item.id);

  function handleCart(item) {
    handleClick(item);
  }

  return (
    <div>
      <div
        className="card"
        onClick={() => navigation("/product", { state: item.id })}
      >
        <div className="image_box">
          <img src={item.img} alt="img" />
        </div>
        <div className="details">
          <p>{item.title}</p>
          <p>{item.author}</p>
          <p>price : {item.price}₹</p>
        </div>
      </div>
      <div className="btncontainer">
        <button onClick={() => handleCart(item)} className="cart-btn">
          <p>Add To cart</p>
        </button>
      </div>
    </div>
  );
}

export default Card;
