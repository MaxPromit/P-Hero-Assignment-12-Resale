// import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SingleCatagory from "./SingleCatagory";

const ProductCatagories = () => {
  const [allCatagories, setAllCatagories] = useState([]);
  // axios.get('http://localhost:4000/catagories')
  // .then(res =>{
  //   setAllCatagories(res.data)
  //   // console.log('res',res.data)
  // })
  // .catch(err => {
  //   console.log(err)
  // })


  // Humble Request ... Vaiya Ami Axios Onek Koste Apply korci,,exam er chap cilo vaiya somoy paici 3din . jag ga vaiya tobe ami apply korte parci..but ai somoy amar net onek slow thakar dorun error discilo vaiya tai alternavite useeffect dia dici,,Vaiya apner net asa kori jokhon dekben token inshallah valo thakbe ,, apni vaiya aktu kosto kore useeffect comment kore axios ta aktu check koriyen vaiya,and hoile number diyen vaiya,.. Please ,, last moment a aci vaiya,, r hoito ba kono din request kora hobe na..valo thakben vai...

  useEffect(() => {
    fetch("http://localhost:4000/catagories")
      .then((res) => res.json())
      .then((data) => setAllCatagories(data));
  }, []);

  // console.log(allCatagories);
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
