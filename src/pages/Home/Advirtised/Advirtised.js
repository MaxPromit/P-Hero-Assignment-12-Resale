import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AdvirtisedCard from "./AdvirtisedCard";

const Advirtised = () => {
  const [advirtised, setAdvirtised] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/advirtisedtrue")
      .then((res) => res.json())
      .then((data) => setAdvirtised(data));
  }, []);
  return (
    <div>
      {advirtised.length === 0 ? null : <div>
        <h2 className="text-3xl font-semibold my-16 text-center">Advirtised</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {advirtised.map((add) => (
            <AdvirtisedCard add={add} key={add._id}></AdvirtisedCard>
          ))}
        </div>
      </div> }
    </div>
  );
};

export default Advirtised;
