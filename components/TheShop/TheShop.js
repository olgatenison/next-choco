"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { CustomContext } from "../../app/context/index";
import Bag from "../TheBag/Bag";
import ShopCard from "@/components/TheShop/ShopCard/ShopCard";
var mydata = require("../../data/products.json");

const TheShop = () => {
  const { value, setValue } = useContext(CustomContext);

  // Функция для добавления товара в корзину
  const addToBag = (product) => {
    const updatedBasket = [...value, product];
    setValue(updatedBasket);

    // Сохраняем состояние корзины в localStorage
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  };

  return (
    <section className="shop">
      <div className="shop__container container">
        <Link href="/bag">
          <div className="basket" style={{ color: "black" }}>
            <h2>
              Bag:<span>{value.length}</span>
            </h2>
          </div>
        </Link>

        <h2 className="shop__title title">
          Find out about our exclusive offer
        </h2>

        <div className="shop__wrapper">
          <ul className="shop__list">
            {mydata.products.map((product) => (
              <ShopCard key={product.id} product={product} />
            ))}
          </ul>
        </div>

        <h4 className="shop__slogan title">
          {`Be inspired by a selection of Handmade, bespoke creations from
          Loretta’s Choco.`}
        </h4>
      </div>
    </section>
  );
};

export { TheShop };
