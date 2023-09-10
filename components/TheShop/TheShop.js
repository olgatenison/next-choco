"use client";

import "./shop.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

import ShopCard from "@/components/TheShop/ShopCard/ShopCard";
var mydata = require("../../data/products.json");

const TheShop = () => {
  // const router = useRouter();
  // var basketItems = [];

  const [basketItems, updateBasketItems] = useState([]);
  function addProductToBasket(product) {
    updateBasketItems([...basketItems, product]);
  }
  return (
    <section className="shop">
      <div className="shop__container container">
        {/* Прическать */}
        <div className="basket" style={{ color: "black" }}>
          <h2>Bag({basketItems.length})</h2>
          <ul>
            {basketItems.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
        {/* Прическать */}

        <h2 className="shop__title title">
          Find out about our exclusive offer
        </h2>

        <div className="shop__wrapper">
          <ul className="shop__list">
            {mydata.products.map(
              (
                product // Виклик .map() для mydata.products
              ) => (
                <ShopCard
                  key={product.id}
                  product={product}
                  addToBag={() => addProductToBasket(product)}
                /> // Зверніть увагу на product
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
