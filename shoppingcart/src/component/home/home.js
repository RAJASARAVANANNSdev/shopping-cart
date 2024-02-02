import React, { useEffect, useState } from "react";

import list from "../../data";
import "./home.css";
import Card from "../../component/card/card";

const Home = ({ handleClick }) => {
  const [book, updateBook] = useState([]);

  function handlePan() {
    updateBook(
      list.filter((e) =>
        e.title.toLowerCase().includes("Panchatantra Stories".toLowerCase())
      )
    );
  }
  function handleTh() {
    updateBook(
      list.filter((e) =>
        e.title.toLowerCase().includes("My First 1000 Words".toLowerCase())
      )
    );
  }
  function brainAct() {
    updateBook(
      list.filter((e) =>
        e.title
          .toLowerCase()
          .includes("Brain Activity Book for Kids".toLowerCase())
      )
    );
  }
  function firstBook() {
    updateBook(
      list.filter((e) =>
        e.title
          .toLowerCase()
          .includes("My First Book of Pencil Control".toLowerCase())
      )
    );
  }

  function allCategories() {
    updateBook(list);
  }
  useEffect(() => {
    updateBook(list);
  }, []);
  const [item, setItem] = useState("");
  function handleBtn() {
    updateBook(
      list.filter((e) => e.title.toLowerCase().includes(item.toLowerCase()))
    );
  }

  return (
    <>
      <div className="filter-btn">
        <button onClick={allCategories} className="btn">
          All Catergories
        </button>
        <button onClick={handlePan} className="btn">
          pancha stories
        </button>
        <button onClick={handleTh} className="btn">
          1000 stories
        </button>
        <button onClick={brainAct} className="btn">
          BrainActivities
        </button>
        <button onClick={firstBook} className="btn">
          First Book
        </button>
      </div>
      <div className="search-box">
        <input
          onChange={(e) => {
            setItem(e.target.value);
          }}
          className="search-input"
        />
        <button onClick={handleBtn} className="search-btn">
          {" "}
          Search
        </button>
      </div>

      <section>
        {book.map((i) => (
          <Card item={i} key={i.id} handleClick={handleClick} />
        ))}
      </section>
    </>
  );
};

export default Home;
