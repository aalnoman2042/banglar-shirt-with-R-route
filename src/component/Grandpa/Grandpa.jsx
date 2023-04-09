import React, { createContext } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";
export const ringContext = createContext("gold");
const Grandpa = () => {
  const ring = "diamond";

  return (
    <div className="grandpa">
      <h2>grandpa</h2>
      <ringContext.Provider value="golden ring">
        <section className="flex">
          <Father ring={ring}></Father>
          <Uncle></Uncle>
          <Aunty ring={ring}></Aunty>
        </section>
      </ringContext.Provider>
    </div>
  );
};

export default Grandpa;
