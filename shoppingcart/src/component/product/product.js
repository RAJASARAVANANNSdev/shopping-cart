import React, { useEffect } from "react";
import list from "../../data";
import Card from "../card/card";

const Product = () => {
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    list;
  }, []);

  return (
    <>
      <section>
        {list.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </section>
    </>
  );
};
export default Product;
