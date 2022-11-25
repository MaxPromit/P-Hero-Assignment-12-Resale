import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SingleCatagory from "./SingleCatagory";

const ProductCatagories = () => {
  const [allCatagories, setAllCatagories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/catagories")
      .then((res) => res.json())
      .then((data) => setAllCatagories(data));
  }, []);

  console.log(allCatagories);
  return (
    <div>
      <h2 className="text-3xl my-12 flex justify-center font-semibold">
        Product Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allCatagories.map((catagories) => (
          <SingleCatagory
            key={catagories._id}
            catagories={catagories}
          ></SingleCatagory>
        ))}
      </div>
    </div>
  );
};

export default ProductCatagories;
