"use client";

import "./shop.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import React, { useContext } from "react";
import { CustomContext } from "../../app/context/index";

import ShopCard from "@/components/TheShop/ShopCard/ShopCard";
var mydata = require("../../data/products.json");

const TheShop = () => {
  // const router = useRouter();
  // var basketItems = [];
  const { value, setValue } = useContext(CustomContext);

  // Функция для удаления элемента из корзины по индексу
  function clearOne(index) {
    const updatedBasket = value.filter((_, i) => i !== index);
    setValue(updatedBasket);
  }

  return (
    <section className="shop">
      <div className="shop__container container">
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

        <h2 className="shop__title title">
          Find out about our exclusive offer
        </h2>

        <div className="shop__wrapper">
          <ul className="shop__list">
            {mydata.products.map(
              (
                product // Виклик .map() для mydata.products
              ) => (
                <ShopCard key={product.id} product={product} /> // Зверніть увагу на product
              )
            )}
          </ul>
        </div>

        <h4 className="shop__slogan title">
          Be inspired by a selection of Handmade, bespoke creations from
          Loretta’s Choco.
        </h4>
      </div>
    </section>
  );
};

export { TheShop };
