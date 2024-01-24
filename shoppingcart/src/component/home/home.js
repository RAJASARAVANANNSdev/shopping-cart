import React, { useEffect, useState } from "react";
import list from "../../data";
import "./home.css";
import Card from "../card/card";
import Search from "../search/search";
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
  function allCategories() {
    updateBook(list);
  }
  useEffect(() => {
    updateBook(list);
  }, []);

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
      </div>

      <section>
        {book.map((item) => (
          <Card item={item} key={item.id} handleClick={handleClick} />
        ))}
      </section>
    </>
  );
};

export default Home;
