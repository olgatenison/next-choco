"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

const Bag = () => {
  return (
    <>
      {/* basket */}
      <div className="basket" style={{ color: "black" }}>
        <h2>
          Bag:<span>{value.length}</span>
        </h2>
        <ul className="basket__list">
          {value.map((item, index) => (
            <li key={index} className="basket__item">
              {item.name}{" "}
              <div onClick={() => clearOne(index)} className="basket__cross">
                X
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* basket */}

      <div className="bag__wrapper">
        <ul className="bag__list"></ul>
      </div>
    </>
  );
};
export default Bag;
