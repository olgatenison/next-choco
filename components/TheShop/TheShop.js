// "use client";

import ShopCard from "@/components/TheShop/ShopCard/ShopCard";
import { useRouter } from "next/navigation";
import "./shop.css";

const TheShop = () => {
  const router = useRouter();

  return (
    <section className="shop">
      <div className="shop__container container">
        <h2 className="shop__title title">
          Find out about our exclusive offer
        </h2>

        <div className="shop__wrapper">
          <ul className="shop__list">
            {/* <ShopCard
              imgSrc="/TheShop/ShopCard/item_01.jpg"
              name="Dragée Box Hazelnut"
              description="Roasted and caramelised Piedmontese hazelnuts coated in dark Grand Cru chocolate from Madagascar."
              price="10 €"
              weight="180 grm"
            />
            <ShopCard
              imgSrc="/TheShop/ShopCard/item_02.jpg"
              name="Dragée Box Hazelnut"
              description="Roasted and caramelised Piedmontese hazelnuts coated in dark Grand Cru chocolate from Madagascar."
              price="12 €"
              weight="180 grm"
            />
            <ShopCard
              imgSrc="/TheShop/ShopCard/item_03.jpg"
              name="Dragée Box Hazelnut"
              description="Roasted and caramelised Piedmontese hazelnuts coated in dark Grand Cru chocolate from Madagascar."
              price="1 €"
              weight="200 grm"
            />
            <ShopCard
              imgSrc="/TheShop/ShopCard/item_04.jpg"
              name="Dragée Box Hazelnut"
              description="Roasted and caramelised Piedmontese hazelnuts coated in dark Grand Cru chocolate from Madagascar."
              price="80 €"
              weight="300 grm"
            />
            <ShopCard
              imgSrc="/TheShop/ShopCard/item_05.jpg"
              name="Dragée Box Hazelnut"
              description="Roasted and caramelised Piedmontese hazelnuts coated in dark Grand Cru chocolate from Madagascar."
              price="1220 €"
              weight="120 grm"
            />
            <ShopCard
              imgSrc="/TheShop/ShopCard/item_06.jpg"
              name="Dragée Box Hazelnut"
              description="Roasted and caramelised Piedmontese hazelnuts coated in dark Grand Cru chocolate from Madagascar."
              price="18 €"
              weight="100 grm"
            />
            <ShopCard
              imgSrc="/TheShop/ShopCard/item_07.jpg"
              name="Dragée Box Hazelnut"
              description="Roasted and caramelised Piedmontese hazelnuts coated in dark Grand Cru chocolate from Madagascar."
              price="30 €"
              weight="250 grm"
            />
            <ShopCard
              imgSrc="/TheShop/ShopCard/item_08.jpg"
              name="Dragée Box Hazelnut"
              description="Roasted and caramelised Piedmontese hazelnuts coated in dark Grand Cru chocolate from Madagascar."
              price="122 €"
              weight="190 grm"
            />
            <ShopCard
              imgSrc="/TheShop/ShopCard/item_09.jpg"
              name="Dragée Box Hazelnut"
              description="Roasted and caramelised Piedmontese hazelnuts coated in dark Grand Cru chocolate from Madagascar."
              price="10 €"
              weight="180 grm"
            /> */}
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
