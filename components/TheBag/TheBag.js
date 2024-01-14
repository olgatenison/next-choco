"use client";
import React, { useContext } from "react";
import Bag from "./Bag";
import "./bag.css";

import { CustomContext } from "../../app/context/index";
const TheBag = () => {
  const { value, setValue } = useContext(CustomContext);

  // Функция для удаления элемента из корзины по индексу
  function clearOne(index) {
    const updatedBasket = value.filter((_, i) => i !== index);
    setValue(updatedBasket);
  }

  return (
    <>
      <section className="bag__page">
        <div className="bag__container container">
          <h2 className="bag__title title">
            Your choice - incredible flavors!
            <br /> {`Let's check, is it enough?`}
          </h2>

          <Bag value={value} clearOne={clearOne} />
        </div>
      </section>
    </>
  );
};

export default TheBag;
