import React, { useState } from "react";
import "./search.css";
import list from "../../data";
import Card from "../card/card";
function Search() {
  const [item, setItem] = useState("");
  function handleBtn() {
    updateBook(
      list.filter((e) => e.title.toLowerCase().includes(item.toLowerCase()))
    );
  }

  const [book, updateBook] = useState([]);
  return (
    <div>
      <div className="search-box">
        <input
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <button onClick={handleBtn}> Search</button>
      </div>
      {book.map((e) => {
        return (
          <div className="card">
            <div className="image_box">
              <img src={e.img} alt="img" />
            </div>
            <div className="details">
              <p>{e.title}</p>
              <p>{e.author}</p>
              <p>price{e.price}</p>
            </div>
            <div className="btncontainer">
              <button className="cart-btn">Add To cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Search;
