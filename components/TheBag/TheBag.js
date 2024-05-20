"use client";
import React, { useContext, useEffect } from "react";
import Bag from "./Bag";
import "./bag.css";
import { CustomContext } from "../../app/context/index";

const TheBag = () => {
  const { value, setValue } = useContext(CustomContext);

  const clearOne = (index) => {
    const updatedBasket = value.filter((_, i) => i !== index);
    setValue(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  };

  useEffect(() => {
    // Получаем состояние из localStorage при монтировании компонента
    const storedBasket = localStorage.getItem("basket");
    if (storedBasket) {
      setValue(JSON.parse(storedBasket));
    }
  }, [setValue]);

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
