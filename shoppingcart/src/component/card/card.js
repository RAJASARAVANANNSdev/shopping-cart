import React from "react";
import "./cards.css";
function Card({ item, handleCart }) {
  const { title, author, price, img } = item;
  return (
    <div className="card">
      <div className="image_box">
        <img src={img} alt="img" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>price{price}</p>
      </div>
      <div className="btncontainer">
        <button onClick={() => handleCart(item)} className="cart-btn">
          Add To cart
        </button>
      </div>
    </div>
  );
}

export default Card;
