// "use client";
import "./shop.css";
import { useRouter } from "next/navigation";

import ShopCard from "@/components/TheShop/ShopCard/ShopCard";
var mydata = require("../../data/products.json");

const TheShop = () => {
  // const router = useRouter();

  return (
    <section className="shop">
      <div className="shop__container container">
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
