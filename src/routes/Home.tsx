import React from "react";
import PROUCT from "../contextApi";
import ProductItem from "../shared/ProductItem";

const Home = () => {
  const { products } = PROUCT.store();
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-1 ">
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Home;
